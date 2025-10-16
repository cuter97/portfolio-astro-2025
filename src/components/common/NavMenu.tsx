import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"

interface Props {
  locale: 'en' | 'es',
}

export function NavMenu({ locale }: Props) {

  const menuItems = [
    { href: `/${locale}/#experience`, label: "Experience", text: "Work experience and roles I have held." },
    { href: `/${locale}/#projects`, label: "Projects", text: "Highlighted projects I have worked on." },
    { href: `/${locale}/#skills`, label: "Skills", text: "Technical skills and proficiencies." },
    { href: `/${locale}/#education`, label: "Education", text: "Academic background and qualifications." },
  ];

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home section</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[500px] grid-cols-[.75fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-orange-700 p-6 no-underline outline-none transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground"
                    href={`/${locale}`}
                  >
                    <img
                      src="/src/assets/gato.webp"
                    />
                    <div className="mb-2 mt-4 text-xl font-titan-one">
                      Home
                    </div>
                    <p className="text-sm leading-tight text-foreground">
                      Discover my journey and what drives me to keep learning.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {menuItems.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href={item.href}
                    >
                      <div className="text-xl font-titan-one leading-none">{item.label}</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{item.text}</p>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
