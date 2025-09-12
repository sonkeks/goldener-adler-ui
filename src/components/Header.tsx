import {useEffect, useState, type FunctionComponent} from "react";
import {Button} from "@/components/ui/button.tsx";
import {useLocation, useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import {LanguageSelect} from "@/components/ui/LanguageSelect.tsx";

type MenuItem = {
  label: string,
  path: string,
}

export const Header: FunctionComponent = () => {
  const [isTop, setIsTop] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  
  const MENU_ITEMS: MenuItem[] = [
    {
      label: t("public.Menu.Start"),
      path: "/",
    },
    {
      label: t("public.Menu.Rooms"),
      path: "/rooms",
    },
    {
      label: t("public.Menu.Contact"),
      path: "/contact",
    },
    {
      label: t("public.Menu.Torgelow"),
      path: "/torgelow",
    },
  ]
  
  useEffect(() => {
    if (location.pathname === "/booking"){
      setIsTop(false);
      return;
    }
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial setzen
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);
  
  return (
    <div id="header-container" className={`fixed w-full top-0 z-50 transition-colors ${isTop ? "bg-transparent" : "bg-background shadow-md"}`}>
      <menu className="pr-5 pl-2 py-3 max-w-6xl m-auto flex gap-3 items-center">
        {MENU_ITEMS.map((menuItem, index) => (
          <li key={index}>
            <Button onClick={() => navigate(menuItem.path)} size="sm" className={`text-md ${isTop ? "text-background" : ""}`} variant="link">{menuItem.label}</Button>
          </li>
        ))}
        <div className="flex-1"></div>
        <LanguageSelect isTop={isTop}></LanguageSelect>
        <Button onClick={() => navigate('booking')} className={`text-md ${isTop ? "" : ""}`} variant={isTop ? "secondary" : "default"}>
          {t("public.Buttons.BookNow")}
        </Button>
      </menu>
    </div>
  )
}
