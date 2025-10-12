import type {FunctionComponent} from "react";
import {Link} from "react-router";
import {useTranslation} from "react-i18next";

export const Footer: FunctionComponent = () => {
  const {t} = useTranslation();
  return (
    <div id="footer-container" className="bg-slate-950 text-white">
      <div className="max-w-6xl w-full m-auto px-5 py-8 flex gap-5">
        <div>
          <b>{t('public.Imprint.Owner')}</b>
          <ul>
            <li><Link className="hover:underline" to="/imprint">{t('public.Imprint.Title')}</Link></li>
            <li>{t('public.LegalNotice.Title')}</li>
            <li>
              <small>@Sönke Schaarschmidt</small>
            </li>
          </ul>
        </div>
        <div className="flex-1"></div>
        <div>
          <b>Pension Goldener Adler</b>
          <p>Pasewalker Str. 32</p>
          <p>17358</p>
          <p>{t('public.Home.Information.Location')}</p>
        </div>
      </div>
    </div>
  )
}
