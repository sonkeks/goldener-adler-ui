import type {FunctionComponent} from "react";
import {Hero} from "@/components/Hero.tsx";
import { Content } from "@/components/Content";
import { LuBedSingle, LuBedDouble, LuCookingPot } from 'react-icons/lu';
import {
  PiWifiHigh,
  PiPhone,
  PiAlarm,
  PiThermometer,
  PiTowel,
  PiTelevisionSimple,
  PiBed,
  PiSpeakerSimpleSlash, PiToilet, PiShower, PiOven, PiPlus
} from 'react-icons/pi';
import {Badge} from "@/components/ui/badge.tsx";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router";

export const Rooms: FunctionComponent = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Hero arrow image="http://gasthof-goldener-adler.de/images/pension/ferienwohnung_06.JPG">
        <h1 className="text-4xl text-center sm:text-6xl text-white font-semibold">Zimmer & Ferienwohnung</h1>
      </Hero>
      <Content className="pt-12 pb-6">
        <div className="flex flex-col items-center sm:flex-row gap-8 sm:gap-4 w-full justify-evenly">
          <div className="flex flex-col gap-2 items-center w-16">
            <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
              <LuBedSingle size={28} />
            </div>
            <h3 className="text-xl font-medium whitespace-nowrap">3 Einzelzimmer</h3>
          </div>
          <div className="flex flex-col gap-2 items-center w-16">
            <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
              <LuBedDouble size={28} />
            </div>
            <h3 className="text-xl font-medium whitespace-nowrap">7 Doppelzimmer</h3>
          </div>
          <div className="flex flex-col gap-2 items-center w-16">
            <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
              <LuCookingPot size={28} />
            </div>
            <h3 className="text-xl font-medium whitespace-nowrap">1 Ferienwohnung</h3>
          </div>
        </div>
      </Content>
      <Content className="py-12">
        <section className="flex flex-col-reverse lg:flex-row gap-8 full-w items-center">
          <div className="col-span-2 max-w-xl">
            <h2 className="text-4xl font-semibold pb-5">Einzel- & Doppelzimmer</h2>
            <div>
              Die ca. 21m² großen Zimmer sind in hellen Farben gehalten, sowie funktional und modern eingerichtet.
            </div>
            <h3 className="mt-4 text-md font-semibold">Ausstattung</h3>
            <div className="flex gap-2 mt-2 flex-wrap">
              <Badge variant="secondary">
                <PiWifiHigh />
                WLAN
              </Badge>
              <Badge variant="secondary">
                <PiTelevisionSimple />
                Flachbild-Fernseher
              </Badge>
              <Badge variant="secondary">
                <PiPhone />
                Telefon
              </Badge>
              <Badge variant="secondary">
                <PiAlarm />
                Radiowecker
              </Badge>
              <Badge variant="secondary">
                <PiThermometer />
                Heizung
              </Badge>
              <Badge variant="secondary">
                <PiBed />
                Bettwäsche
              </Badge>
              <Badge variant="secondary">
                <PiTowel />
                Handtücher
              </Badge>
              <Badge variant="secondary">
                <PiToilet />
                Bad
              </Badge>
              <Badge variant="secondary">
                <PiShower />
                Dusche
              </Badge>
              <Badge variant="secondary">
                <PiSpeakerSimpleSlash />
                Schallisolierte Fenster
              </Badge>
              <Badge variant="default">
                <PiPlus />
                Aufbettung möglich
              </Badge>
            </div>
          </div>
          <img className="flex-1" src="https://www.gasthof-goldener-adler.de/images/adler/zimmer.jpg" alt="" />
        </section>
      </Content>
      <Content className="pt-6 pb-12">
        <section className="flex flex-col lg:flex-row gap-8 full-w items-center lg:text-right">
          <img className="flex-1" src="https://www.gasthof-goldener-adler.de/images/adler/zimmer.jpg" alt="" />
          <div className="col-span-2 max-w-xl">
            <h2 className="text-4xl font-semibold pb-5">Ferienwohnung</h2>
            <div>
              Weiterhin bieten wir eine Ferienwohnung. Sie besteht aus einem Doppelzimmer plus Einzelzimmer mit kleinem Flur, zuzüglich Küche und Bad mit Dusche & WC.
            </div>
            <h3 className="mt-4 text-md font-semibold">Ausstattung</h3>
            <div className="flex gap-2 mt-2 flex-wrap lg:justify-end">
              <Badge variant="secondary">
                <PiWifiHigh />
                WLAN
              </Badge>
              <Badge variant="secondary">
                <PiTelevisionSimple />
                Flachbild-Fernseher
              </Badge>
              <Badge variant="secondary">
                <PiPhone />
                Telefon
              </Badge>
              <Badge variant="secondary">
                <PiAlarm />
                Radiowecker
              </Badge>
              <Badge variant="secondary">
                <PiThermometer />
                Heizung
              </Badge>
              <Badge variant="secondary">
                <PiBed />
                Bettwäsche
              </Badge>
              <Badge variant="secondary">
                <PiTowel />
                Handtücher
              </Badge>
              <Badge variant="secondary">
                <PiToilet />
                Bad
              </Badge>
              <Badge variant="secondary">
                <PiShower />
                Dusche
              </Badge>
              <Badge variant="secondary">
                <PiSpeakerSimpleSlash />
                Schallisolierte Fenster
              </Badge>
              <Badge variant="secondary">
                <PiOven />
                Küche
              </Badge>
              <Badge variant="default">
                <PiPlus />
                Aufbettung möglich
              </Badge>
            </div>
          </div>
        </section>
      </Content>
      <Content maxWidth="max-w-2xl" className="pt-6 pb-12">
        <h2 className="text-4xl font-semibold pb-5">Preisübersicht</h2>
        <Table>
          <TableCaption>Die Ferienwohnung ist erst ab 5 Nächten buchbar</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Zimmer</TableHead>
              <TableHead className="w-fit text-center">Personen</TableHead>
              <TableHead className="text-right w-28">Preis <small>pro Nacht</small></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Einzelzimmer</TableCell>
              <TableCell className="text-center">1</TableCell>
              <TableCell className="text-right">45€</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Doppelzimmer</TableCell>
              <TableCell className="text-center">2</TableCell>
              <TableCell className="text-right">60€</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium"><div>Doppelzimmer</div><small>+ Aufbettung</small></TableCell>
              <TableCell className="text-center">3</TableCell>
              <TableCell className="text-right">70€</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Ferienwohnung</TableCell>
              <TableCell className="text-center">3</TableCell>
              <TableCell className="text-right">60€</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium"><small>+ Frühstück</small></TableCell>
              <TableCell className="text-center"></TableCell>
              <TableCell className="text-right">+ 8€ p.P.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Content>
      <Content className="pb-12">
        <div className="text-center flex flex-col gap-3 items-center">
          <h3 className="text-2xl font-semibold">Buchen Sie jetzt ihren Aufenthalt</h3>
          <Button onClick={() => navigate("/booking")} className="w-fit text-md">Jetzt Buchen</Button>
        </div>
      </Content>
    </>
  )
}
