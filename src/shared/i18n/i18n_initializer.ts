import i18next from 'i18next';
import { initLitI18n } from 'lit-i18n';
import { LanguageType } from '@shared/i18n/i18n_types';
import { LANGUAGES } from '@shared/i18n/i18n_constants';
import en_translations from '@shared/i18n/locales/en.json';
import pl_translations from '@shared/i18n/locales/pl.json';

export function initI18n(defaultLanguage: LanguageType = LANGUAGES.en) {
  if (i18next.isInitialized) return;

  i18next.use(initLitI18n).init({
    lng: defaultLanguage.toString(),
    resources: {
      en: { translation: { ...en_translations } },
      pl: { translation: { ...pl_translations } },
    },
  });
}

export function changeLanguage(newLanguage: LanguageType) {
  i18next.changeLanguage(newLanguage.toString());
}
