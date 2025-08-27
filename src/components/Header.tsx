import type {FunctionComponent} from "react";
import {Button} from "@/components/ui/button.tsx";

export const Header: FunctionComponent = () => {
  return (
    <div id="header-container">
      <menu className="pr-2 py-3 max-w-6xl m-auto flex gap-3 items-center">
        <li>
          <Button size="sm" className="text-md" variant="link">Start</Button>
        </li>
        <li>
          <Button size="sm" className="text-md" variant="link">Rooms</Button>
        </li>
        <li>
          <Button size="sm" className="text-md" variant="link">Contact</Button>
        </li>
        <li>
          <Button size="sm" className="text-md" variant="link">Torgelow</Button>
        </li>
        <div className="flex-1"></div>
        <Button className="text-md">Book Now</Button>
      </menu>
    </div>
  )
}
