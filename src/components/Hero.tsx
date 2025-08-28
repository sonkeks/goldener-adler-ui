import type {FunctionComponent, PropsWithChildren} from "react";
import { PiArrowDown } from 'react-icons/pi';

interface HeroProps extends PropsWithChildren {
  image: string,
  arrow?: boolean,
}

export const Hero: FunctionComponent<HeroProps> = ({children, image, arrow}: HeroProps) => {
  return (
    <div className="relative h-screen w-screen">
      <img className="absolute inset-0 h-full w-full object-cover" src={image} alt="header image"/>
      <div id="overlay" className="absolute inset-0 h-full w-full bg-slate-800 opacity-40"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        {children}
      </div>
      {arrow && <div className="absolute z-10 bottom-3 w-full flex justify-center">
        <button className="p-3 cursor-pointer">
          <PiArrowDown className="text-white" size={40}/>
        </button>
      </div>}
    </div>
  )
}
