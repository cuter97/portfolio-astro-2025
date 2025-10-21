import type { MarkdownHeading } from "astro"
import { ChevronRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  headings: MarkdownHeading[];
  title?: string;
}

export const NavBlog = ({ headings, title = 'On this page' }: Props) => {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -80%",
        threshold: 0
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.slug);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile: Colapsable */}
      <div className="xl:hidden w-full mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full p-4 bg-muted-foreground/10 rounded-md hover:bg-muted-foreground/15 transition-colors"
        >
          <h4 className="font-semibold text-base">{title}</h4>
          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 mt-3' : 'max-h-0 opacity-0'
            }`}
        >
          <ul className="space-y-2 p-4 bg-muted-foreground/10 rounded-md collapsible">
            {headings.map((heading) => {
              const isActive = activeId === heading.slug;

              return (
                <li className="text-sm" key={heading.slug}>
                  <a
                    href={`#${heading.slug}`}
                    onClick={handleLinkClick}
                    className={`block transition-colors ${isActive ? 'text-terciary font-medium' : 'hover:text-terciary'}`}
                  >
                    {heading.depth === 2 ? (
                      <span className="font-medium">{heading.text}</span>
                    ) : (
                      <span className="flex items-center pl-2">
                        <ChevronRight size={18} />
                        {heading.text}
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Desktop: Sticky sidebar */}
      <nav className="hidden xl:block bg-muted-foreground/5 border-dashed hover:border-terciary/30 border-2 rounded-md space-y-2 sticky top-24 overflow-y-auto max-h-[calc(100vh-7rem)] py-4 mb-6 px-10 mx-10 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-muted-foreground/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-terciary/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-terciary">
        <h4 className="font-semibold text-lg">{title}</h4>
        <ul className="space-y-2">
          {headings.map((heading) => {
            const isActive = activeId === heading.slug;

            return (
              <li className="text-sm" key={heading.slug}>
                <a
                  href={`#${heading.slug}`}
                  onClick={handleLinkClick}
                  className={`transition-colors ${isActive ? 'text-terciary' : 'hover:text-terciary'}`}
                >
                  {heading.depth === 2 ? (
                    <span className="font-medium">
                      {heading.text}
                    </span>
                  ) : (
                    <span className="flex items-center pl-2">
                      <ChevronRight size={18} />
                      {heading.text}
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  )
}
