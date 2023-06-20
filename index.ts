import i18next from './i18n';
import otheri18n from './otheri18n';

console.log(i18next.t('title'));

// this works in js, but not in ts
console.log(otheri18n.t('hi'));

// and this works in ts, but should not
console.log(otheri18n.t('title'));
