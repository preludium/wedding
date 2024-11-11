import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ThemeSelect } from "../theme/ThemeSelect";
import { LanguageSelect } from './LanguageSelect';
import { useTranslation } from '@/translations/useTranslation';

interface RouteProps {
  href: string;
  label: string;
}

  const useRoutes = (): RouteProps[] =>{
    const { t } = useTranslation();
    return [
      {
        href: "/",
        label: t("nav.main"),
      },
      {
        href: "#schedule",
        label: t('nav.schedule'),
      },
      {
        href: "#form",
        label: t('nav.form'),
      },
      {
        href: "#parking",
        label: t('nav.parking'),
      },
      {
        href: "#accommodation",
        label: t('nav.accommodation'),
      },
      {
        href: "#gifts",
        label: t('nav.gifts'),
      },
      {
        href: "#faq",
        label: t('nav.faq'),
      },
    ];
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const routes = useRoutes();

  return (
    <header className="sticky flex items-center h-[60px] border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <div/>
          {/* mobile */}
          <span className="flex justify-between w-full md:hidden">
            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-normal text-4xl font-calligrapher">
                    Gabriela & Francis
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routes.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <div>
              <ThemeSelect />
              <LanguageSelect />
            </div>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routes.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <LanguageSelect />
            <ThemeSelect />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
