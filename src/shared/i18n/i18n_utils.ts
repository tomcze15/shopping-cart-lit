import i18next from 'i18next';
import { LanguageType } from '@shared/i18n/i18n_types';

export function changeLanguage(newLanguage: LanguageType) {
  i18next.changeLanguage(newLanguage.toString());
}
