import type {FunctionComponent} from "react";
import {Content} from "@/components/Content.tsx";

export const Home: FunctionComponent = () => {
  return (
    <div>
      {/* Insert Carousel Later */}
      <img className="h-lvh -mt-15 w-full object-cover" src="https://www.gasthof-goldener-adler.de/images/adler/152.JPG" alt="header image"/>
      <Content className="py-24">
        <div className="grid grid-cols-2">
          <div>
            <p>Unser Gästehaus befindet sich in der ruhigen Kleinstadt Torgelow in Mecklenburg Vorpommern. In unmittelbarer Nähe befinden sich die Ostsee
              und das Oderhaff, viel Wald, der Fluß die Uecker und viele schöne Seen. Entspannen Sie in unseren gemütlichen und komfortabel eingerichteten
              Zimmern und genießen Sie den Service unserer Pension. Wir würden uns freuen, Sie künftig zu unseren Gästen zählen zu dürfen.</p>
          </div>
        </div>
      </Content>
    </div>
  )
}
