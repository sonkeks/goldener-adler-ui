import type {FunctionComponent} from "react";
import {Hero} from "@/components/Hero.tsx";

export const Torgelow: FunctionComponent = () => {
  return (
    <>
      <Hero arrow image="https://cdn.nordkurier.de/2023/06/30/996b87f1-5986-4bc6-9509-04d57fb94791.jpeg?w=2048&auto=compress%2Cformat">
        <h1 className="text-white font-bold text-6xl">Entdecke Torgelow</h1>
      </Hero>
    </>
  )
}
