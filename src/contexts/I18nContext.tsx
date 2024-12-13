import React, { createContext, useContext } from 'react';
import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';
import ar from '../locales/ar.json';

const i18n = new I18n({
  ar,
});

i18n.locale = Localization.locale;
i18n.enableFallback = true;
i18n.defaultLocale = 'ar';

type I18nContextType = {
  t: (key: string) => string;
  locale: string;
};

const I18nContext = createContext<I18nContextType>({
  t: (key: string) => key,
  locale: 'ar',
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const value = {
    t: (key: string) => i18n.t(key),
    locale: i18n.locale,
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}