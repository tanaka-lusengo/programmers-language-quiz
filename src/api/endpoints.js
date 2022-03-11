const GET_API_TRANSLATION = (language, text) =>
  `https://api.funtranslations.com/translate/${language}.json?text=${text}`;

export { GET_API_TRANSLATION };
