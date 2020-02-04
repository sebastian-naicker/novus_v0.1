import ReactLocalization from 'react-localization';

import en from './en';

const i18n = new ReactLocalization({
	en,
});

export const formatString = (base, ...params) => i18n.formatString(base, ...params).join('');

export default i18n;
