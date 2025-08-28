import type {FunctionComponent} from "react";
import {Content} from "@/components/Content.tsx";
import {Hero} from "@/components/Hero.tsx";

export const Home: FunctionComponent = () => {
  return (
    <div className="">
      <Hero image="https://cdn.nordkurier.de/2023/12/06/79484910-72fd-4684-ba8e-82b426ff9d85.jpeg?w=2048&auto=compress%2Cformat">
        <h1 className="text-6xl font-bold text-white">
          Pension Goldener Adler
        </h1>
      </Hero>
      <Content className="relative">
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
