import type {FunctionComponent} from "react";

export const Footer: FunctionComponent = () => {
  return (
    <div id="footer-container" className="bg-slate-300">
      <div className="max-w-6xl w-full m-auto px-2 py-3 flex gap-5">
        <div>Inh.: Henrik Rummel</div>
        <div className="flex-1"></div>
        <div>@Sönke Schaarschmidt</div>
      </div>
    </div>
  )
}
