import {useEffect, useState, type FunctionComponent} from "react";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router";

type MenuItem = {
  label: string,
  path: string,
}

const MENU_ITEMS: MenuItem[] = [
  {
    label: "Start",
    path: "/",
  },
  {
    label: "Rooms",
    path: "/rooms",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "Torgelow",
    path: "/torgelow",
  },
]

export const Header: FunctionComponent = () => {
  const [isTop, setIsTop] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div id="header-container" className={`fixed w-full top-0 z-50 transition-colors ${isTop ? "bg-transparent" : "bg-background shadow-md"}`}>
      <menu className="pr-5 pl-2 py-3 max-w-6xl m-auto flex gap-3 items-center">
        {MENU_ITEMS.map(menuItem => (
          <li>
            <Button onClick={() => navigate(menuItem.path)} size="sm" className={`text-md ${isTop ? "text-background" : ""}`} variant="link">{menuItem.label}</Button>
          </li>
        ))}
        <div className="flex-1"></div>
        <Button className={`text-md ${isTop ? "" : ""}`} variant={isTop ? "secondary" : "default"}>Book Now</Button>
      </menu>
    </div>
  )
}
