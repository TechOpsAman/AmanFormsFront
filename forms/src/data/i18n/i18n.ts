import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      newSurvey: "new survey",
      surveyDescription: "survey description",
      newQuestion: "type your question",
      newAnswer: "add answer",
      questionType: "question type",
      selectQuestionType: {
        radio: 'radio',
        checkbox: 'checkbox',
        select: 'select',
        shortAnswer: 'shortAnswer',
        longAnswer: 'longAnswer',
      },
      addAnswer: 'add new answer',
    },
  },
  he: {
    translation: {
      newSurvey: "סקר ללא כותרת",
      surveyDescription: "תיאור הסקר",
      newQuestion: "כתוב שאלה חדשה",
      newAnswer: "הוסף תשובה",
      questionType: "בחר/י סוג שאלה",
      selectQuestionType: {
        radio: 'רדיו',
        checkbox: 'תיבת סימון',
        select: 'בחירה',
        shortAnswer: 'תשובה קצרה',
        longAnswer: 'תשובה ארוכה',
      },
      addAnswer: 'הוסף אפשרות חדשה',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "he", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
