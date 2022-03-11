// const API_KEY = "3GVXxnmFVm5RKkqwkDFQJ0zLCQI1KvvcoIVeAjiV";
// const GET_API_QUESTIONS = `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=code&limit=20&tags=JavaScript`;
const GET_API_TRANSLATION = (language, text) =>
  `https://api.funtranslations.com/translate/${language}.json?text=${text}`;
const GET_MEMES = "https://programmermemes.herokuapp.com";

export { GET_API_TRANSLATION, GET_MEMES };
