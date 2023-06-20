import { createInstance } from 'i18next';
import enNsA from './otherlocales/en/nsA.json';
import deNsA from './otherlocales/de/nsA.json';

const i18n = createInstance()

i18n.init({
  debug: true,
  fallbackLng: 'en',
  defaultNS: 'nsA',
  resources: {
    en: {
      nsA: enNsA,
    },
    de: {
      nsA: deNsA,
    },
  },
});

export default i18n;
