import 'react-i18next';
import { resources } from '../i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: typeof resources.default.translation;
    }
  }
}
