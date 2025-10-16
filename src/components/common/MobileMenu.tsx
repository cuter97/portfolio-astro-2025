import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/common/ModeToggle";
import { ModeLang } from "@/components/common/ModeLang";

interface MenuItem {
  href: string;
  label: string;
  text: string;
}

interface MobileMenuProps {
  locale: "en" | "es";
  currentPath: string;
  children?: React.ReactNode;
  menuItems: MenuItem[];
}

export function MobileMenu({ locale, currentPath, children, menuItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Botón de menú hamburguesa */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="relative z-[60]"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </Button>

      {/* Menu Panel - z-[80] para estar sobre todo */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-screen w-full bg-primary-foreground border-l border-terciary z-[80] transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Header con botón de cerrar */}
          <div className="flex items-center justify-between pt-6 px-6 pb-6 border-b border-terciary border-dashed">
            <h2 className="text-lg font-semibold">Menu</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="h-8 w-8 -mr-2"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>

          {/* Menu Items - Con scroll */}
          <nav
            className="flex-1 overflow-y-auto px-6 py-4 space-y-1"
            aria-label="Primary navigation"
          >
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-md hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div className="font-medium text-base">{item.label}</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {item.text}
                </div>
              </a>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="px-6 py-4 border-t border-terciary border-dashed">
            <div className="flex items-center justify-between">
              <ModeToggle aria-label="Toggle theme">
                {children}
              </ModeToggle>
              <ModeLang
                currentLocale={locale}
                currentPath={currentPath}
                aria-label="Change language"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
