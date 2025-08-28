import type {FunctionComponent} from "react";

export const Footer: FunctionComponent = () => {
  return (
    <div id="footer-container" className="bg-slate-950 text-white">
      <div className="max-w-6xl w-full m-auto px-5 py-8 flex gap-5">
        <div>
          <b>Inhaber: Henrik Rummel</b>
          <ul>
            <li>Impressum</li>
            <li>Rechtliche Hinweise</li>
            <li>
              <small>@Sönke Schaarschmidt</small>
            </li>
          </ul>
        </div>
        <div className="flex-1"></div>
        <div>
          <b>Pension Goldener Adler</b>
          <p>Pasewalker Str. 32</p>
          <p>Torgelow</p>
          <p>Mecklenburg Vorpommern</p>
          <p>17358</p>
          <p>Deutschland</p>
        </div>
      </div>
    </div>
  )
}
