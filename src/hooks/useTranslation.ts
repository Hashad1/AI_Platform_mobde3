import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';
import ar from '../locales/ar.json';

const i18n = new I18n({
  ar,
});

i18n.locale = Localization.locale;
i18n.enableFallback = true;
i18n.defaultLocale = 'ar';

export function useTranslation() {
  return {
    t: (key: string) => i18n.t(key),
    locale: i18n.locale,
  };
}