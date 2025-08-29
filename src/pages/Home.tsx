import type {FunctionComponent} from "react";
import {Content} from "@/components/Content.tsx";
import {Hero} from "@/components/Hero.tsx";
import { PiAt, PiMapPin, PiPhone, PiCar, PiForkKnife, PiHandshake } from 'react-icons/pi';
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
      <Content maxWidth="max-w-2xl" className="py-12">
        <h2 className="text-4xl font-semibold pb-5">Unser Service</h2>
        <div className="pl-3 flex space-x-12 md:flex-row justify-items-center items-center">
          <div className="relative h-72 sm:h-52">
            <Separator orientation="vertical" />
            <div className="border-white border-4 absolute top-1/3 -translate-x-1/2 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <PiHandshake size={24}/>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-semibold pb-3">Gästebetreuung</h3>
            <p>Damit Ihr Aufenthalt in unserer Pension so angenehm und einzigartig wie möglich wird, engagieren sich unsere Mitarbeiter rund um die Uhr für Ihr persönliches Wohlbefinden.</p>
          </div>
        </div>
        <div className="pl-3 flex space-x-12 md:flex-row justify-items-center items-center">
          <div className="relative h-72 sm:h-52">
            <Separator orientation="vertical" />
            <div className="absolute top-1/3 -translate-x-1/2 border-white border-4 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <PiForkKnife size={24}/>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-semibold pb-3">Pension</h3>
            <p>Für unsere Hausgäste bieten wir von ca. 18.00 Uhr bis ca. 20.00 Uhr ein kleines Angebot von Speisen und Getränken, vom Hamburger Schnitzel bis zum frisch gezapften Bier, an. Natürlich werden auch alkohlfreie Getränke angeboten.</p>
          </div>
        </div>
        <div className="pl-3 flex space-x-12 md:flex-row justify-items-center items-center">
          <div className="relative h-72 sm:h-52">
            <Separator orientation="vertical" />
            <div className="absolute top-1/3 -translate-x-1/2 border-white border-4 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <PiCar size={24}/>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-semibold pb-3">Parken</h3>
            <p>Unterstellmöglichkeiten für Fahrräder, Motorräder und Paddelboote sind vorhanden. Parken können Sie auf den hoteleigenen Parkplätzen kostenlos. Keine Reservierung nötig.</p>
          </div>
        </div>
      </Content>
      <Content className="pb-6 sm:pb-12">
        <div className="text-center flex flex-col gap-3 items-center">
          <h3 className="text-2xl font-semibold">Buchen Sie jetzt ihren Aufenthalt</h3>
          <Button className="w-fit text-md">Jetzt Buchen</Button>
        </div>
      </Content>
      <Content className="py-6 md:py-12 bg-orange-50">
        <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-6 md:space-y-0">
          <div className="relative justify-self-center flex-1 w-full">
            <img className="w-full max-h-96 object-cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Vorwerk_Torgelow_Forsthaus_Torgelow_Urmesstischblatt_3249-1844.png/640px-Vorwerk_Torgelow_Forsthaus_Torgelow_Urmesstischblatt_3249-1844.png" alt="Torgelow Früher" />
          </div>
          <div className="md:h-96">
            <Separator className="hidden md:block" orientation="vertical" />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl pb-5 font-semibold">Unsere Geschichte</h2>
            <p className="max-w-lg md:max-w-none">
              Im Jahr 1907 erbaut, öffnete der Gasthof "Goldener Adler" ebenfalls das erste mal seine Türen. Der Gasthof wurde sehr schnell in der Region bekannt und beliebt.
              1929 wurde das dritte Stockwerk errichtet und mehrere Fremdenzimmer kamen dazu. Bis 1989 wurde der Gasthof vom Konsum übernommen und die Fremdenzimmer wurden zu Büroräumen umgestaltet.
            </p>
            <br/>
            <p className="max-w-lg">
              1990 wurde die Gaststätte Goldener Adler von Peter Rummel gepachtet und später gekauft. Die Gaststätte mit Außenanlage wurde 1994 komplett umgebaut und renoviert. 1995 wurden in der zweiten und dritten Etage die Gästezimmer wieder neu errichtet und die Gaststätte Goldener Adler wieder zum Gasthof. Die kleine Ferienwohnung kam 2003 dazu.
              Im Juni 2012 wurde der Gasthof zur Pension und der öffentliche Gaststättenbetrieb wurde eingestellt.
            </p>
          </div>
        </div>
      </Content>
    </div>
  )
}
