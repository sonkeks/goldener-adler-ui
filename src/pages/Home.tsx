import type {FunctionComponent} from "react";
import {Content} from "@/components/Content.tsx";
import {Hero} from "@/components/Hero.tsx";
import { PiAt, PiMapPin, PiPhone } from 'react-icons/pi';
import {Separator} from "@/components/ui/separator.tsx";
import {Button} from "@/components/ui/button.tsx";

export const Home: FunctionComponent = () => {
  return (
    <div className="">
      <Hero arrow image="https://cdn.nordkurier.de/2023/12/06/79484910-72fd-4684-ba8e-82b426ff9d85.jpeg?w=2048&auto=compress%2Cformat">
        <h1 className="text-6xl font-bold text-white">
          Pension Goldener Adler
        </h1>
      </Hero>
      <Content className="mt-6 py-6 md:py-12">
        <div className="flex flex-col lg:flex-row items-center lg:h-64 lg:space-x-10 space-y-6 lg:space-y-0">
          <div>
            <h2 className="text-4xl pb-5 font-semibold">Willkommen in unserer Pension</h2>
            <p className="pb-3 max-w-lg lg:max-w-none">Unser Gästehaus befindet sich in der ruhigen Kleinstadt Torgelow in Mecklenburg Vorpommern. In unmittelbarer Nähe befinden sich die Ostsee
              und das Oderhaff, viel Wald, der Fluß die Uecker und viele schöne Seen. Entspannen Sie in unseren gemütlichen und komfortabel eingerichteten
              Zimmern und genießen Sie den Service unserer Pension. Wir würden uns freuen, Sie künftig zu unseren Gästen zählen zu dürfen.
            </p>
          </div>
          <Separator className="hidden lg:block" orientation="vertical" />
          <Separator className="block lg:hidden" orientation="horizontal" />
          <div className="justify-self-center flex-none">
            <ul>
              <li className="flex my-3 gap-2 items-center"><PiPhone size={24}/><a className="hover:underline" href="tel:+49 (0) 3976 202045">+49 (0) 3976 202045</a></li>
              <li className="flex my-3 gap-2 items-center"><PiAt size={24} /><a className="hover:underline" href="mailto:henrik.rummel@gasthof-goldener-adler.de">henrik.rummel@gasthof-goldener-adler.de</a></li>
              <li className="flex my-3 gap-2 items-center"><PiMapPin size={24} /><a className="hover:underline" target="_blank" href="https://maps.app.goo.gl/YFw9wBuvBfhBQnni7">Torgelow, Deutschland</a></li>
            </ul>
          </div>
        </div>
      </Content>
      <Content className="py-6 md:py-12">
        <div style={{height: 'calc(100dvh - 50px)'}} className={`relative w-full`}>
          <img className="w-full h-full object-cover" src="https://www.gasthof-goldener-adler.de/images/adler/zimmer.jpg" alt="torglow-overview"/>
          <div className="absolute top-0 w-full h-full bg-gray-800 opacity-20"></div>
          <div className="absolute top-0 w-full h-full flex flex-col gap-4 justify-center items-center">
            <h2 className="text-4xl text-white font-semibold">Unsere Zimmer</h2>
            <p className="max-w-lg text-center text-white">7 Doppelzimmer, 3 Einbettzimmer, und eine Ferienwohnung. Die Räume sind ca. 21 Quadratmeter groß, in hellen Farben gehalten, gut und modern eingerichtet.</p>
            <Button variant="outline" className="text-white">
              Mehr Entdecken
            </Button>
          </div>
          <div className="absolute bottom-3 w-full flex justify-center h-9">
            <div className="w-40 flex justify-end"><Button className="text-white" variant="link">Zimmer</Button></div>
            <Separator orientation="vertical"/>
            <div className="w-40 flex justify-start"><Button className="text-white" variant="link">Ferienwohnung</Button></div>
          </div>
        </div>
      </Content>
      <Content className="pb-12">
        <div className="flex flex-col gap-2 items-center">
          <h3 className="text-2xl font-semibold">Buchen Sie jetzt ihren Aufenthalt</h3>
          <Button className="w-fit text-md">Jetzt Buchen</Button>
        </div>
      </Content>
    </div>
  )
}
