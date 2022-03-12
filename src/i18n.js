
import { ref } from 'vue';
const messages = { 
  pl: {
    name: "Imię",
    lastName: "Nazwisko",
    email: "Email",
    description: "Opinia",
    buttonClear: "Wyczyść",
    buttonSend: "Wyślij",
  },
  en: {
    name: "Name",
    lastName: "Surname",
    email: "Email",
    description: "Opinion",
    buttonClear: "Clear",
    buttonSend: "Send",
  },
};

const LanguageCode = ref("pl")

function getMessage(key) {
    return messages[LanguageCode.value][key]
}

function getAcceptedLanguages() {
  return Object.keys(messages)
}

export {LanguageCode, getMessage, getAcceptedLanguages};