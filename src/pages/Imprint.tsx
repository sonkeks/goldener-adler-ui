import type {FunctionComponent} from "react";
import {Page} from "@/components/layouts/Page.tsx";
import {Content} from "@/components/Content.tsx";
import { Link } from "react-router";
import {DOMAIN} from "@/assets/consts.ts";
import {Trans, useTranslation} from "react-i18next";

export const Imprint: FunctionComponent = () => {
  const {t} = useTranslation();
  return (
    <Page>
      <Content className="pt-24 pb-12">
        <h1 className="text-3xl font-semibold">{t('public.Imprint.Title')}</h1>
        <div className="pt-6">
          <h2 className="text-lg font-semibold">{t('public.Imprint.Provider')}</h2>
          <p>{t('public.Imprint.Name')} {t('public.Imprint.Owner')}</p>
          <p>Pasewalker Str. 32</p>
          <p>17358 Torgelow</p>
          <br/>
          <p>{t('public.Imprint.Court')} Pasewalk, HRB 74048</p>
          <p>USt-ID Nr.: DE 364416038</p>
          <p>{t('public.Imprint.TaxNr')}: 084-264-05114</p>
          <br/>
          <p>{t('public.Imprint.Suggestions')} <Link to="/contact" className="text-blue-700 hover:underline">{t('public.Imprint.ContactForm')}</Link>.</p>
        </div>
        <div className="pt-6">
          <h2 className="text-lg font-semibold">{t('public.Imprint.Copyright.Title')}</h2>
          <p>{t('public.Imprint.Copyright.Content')}</p>
        </div>
        <div className="pt-6">
          <h2 className="text-lg font-semibold">{t('public.Imprint.ContentResponsibility.Title')}</h2>
          <p>{DOMAIN}</p>
        </div>
        <div className="pt-6">
          <h2 className="text-lg font-semibold">{t('public.Imprint.DataPrivacy.Title')}</h2>
          <Trans i18nKey="public.Imprint.DataPrivacy.Content" components={{1: <br/>}}/> <Link to="/contact" className="text-blue-700 hover:underline">{t("public.Imprint.ContactForm")}</Link>.
        </div>
        <div className="pt-6">
          <h2 className="text-lg font-semibold">{t('public.Imprint.Disclaimer.Title')}</h2>
          <p>{t('public.Imprint.Disclaimer.Content', {domain: DOMAIN})}</p>
        </div>
      </Content>
    </Page>
  )
}
