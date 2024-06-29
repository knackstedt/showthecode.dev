import languageLinkMap from './language-links.json';

const pars = new URLSearchParams(location.search);
const languageFilter = pars.get("lang")?.toLowerCase();

export const links = (languageLinkMap[languageFilter] || []).concat(languageLinkMap["general"]);
