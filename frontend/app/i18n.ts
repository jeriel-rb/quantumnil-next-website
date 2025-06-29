import { createInstance, i18n as i18nInstanceType } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import i18nConfig from "@/i18nConfig";
import { Resource } from "i18next";

export interface InitTranslationsOptions {
  locale: string;
  namespaces: string[];
  i18nInstance?: i18nInstanceType;
  resources?: Resource;
}

export interface InitTranslationsResult {
  i18n: i18nInstanceType;
  resources: {
    [locale: string]: Resource;
  };
  t: i18nInstanceType["t"];
}

export default async function initTranslations({
  locale,
  namespaces,
  i18nInstance,
  resources,
}: InitTranslationsOptions): Promise<InitTranslationsResult> {
  const instance = i18nInstance || createInstance();

  instance.use(initReactI18next);

  if (!resources) {
    instance.use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`@/locales/${language}/${namespace}.json`) as Promise<Resource>
      )
    );
  }

  await instance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales,
  });

  return {
    i18n: instance,
    resources: {
      [locale]: instance.services.resourceStore.data[locale] as Resource,
    },
    t: instance.t,
  };
}
