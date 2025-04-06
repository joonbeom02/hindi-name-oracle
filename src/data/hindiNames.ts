import { HindiName, Gender, MeaningTheme, PhoneticSimplicity, Usage, QuizAnswers } from '../types';

// Sample data from CSV
export const hindiNames: HindiName[] = [
  {
    name: "Aarti",
    devanagari: "आरती",
    gender: "f",
    languages: "Hindi, Marathi",
    meaning: "From the name of a Hindu ritual in which offerings of lamps or candles are made to various gods, derived from Sanskrit आरात्रिक (ārātrika).",
    meaningThemes: ["Light", "Mythology", "Worship"],
    usage: "Traditional",
    nameLength: 5,
    phoneticSimplicity: "Simple",
    languagesList: ["Hindi", "Marathi"]
  },
  {
    name: "Abha",
    devanagari: "आभा",
    gender: "f",
    languages: "Hindi",
    meaning: "From Sanskrit आभा (ābhā) meaning \"splendour, light\".",
    meaningThemes: ["Light"],
    usage: "Traditional",
    nameLength: 4,
    phoneticSimplicity: "Very Simple",
    languagesList: ["Hindi"]
  },
  {
    name: "Abhay",
    devanagari: "अभय",
    gender: "m",
    languages: "Hindi, Marathi",
    meaning: "From Sanskrit अभय (abhaya) meaning \"fearless\".",
    meaningThemes: ["Virtue"],
    usage: "Traditional",
    nameLength: 5,
    phoneticSimplicity: "Simple",
    languagesList: ["Hindi", "Marathi"]
  },
  {
    name: "Abhijeet",
    devanagari: "अभिजीत, अभिजित",
    gender: "m",
    languages: "Hindi, Marathi, Bengali",
    meaning: "Alternate transcription of Hindi/Marathi अभिजीत or अभिजित or Bengali অভিজিৎ (see Abhijit).",
    meaningThemes: ["Other"],
    usage: "Modern",
    nameLength: 8,
    phoneticSimplicity: "Moderate",
    languagesList: ["Hindi", "Marathi", "Bengali"]
  },
  {
    name: "Deepak",
    devanagari: "दीपक",
    gender: "m",
    languages: "Hindi, Marathi, Bengali",
    meaning: "Means \"lamp, light\" in Sanskrit.",
    meaningThemes: ["Light"],
    usage: "Traditional",
    nameLength: 6,
    phoneticSimplicity: "Simple",
    languagesList: ["Hindi", "Marathi", "Bengali"]
  },
  {
    name: "Ravi",
    devanagari: "रवि",
    gender: "m",
    languages: "Hindi, Marathi, Telugu, Kannada, Tamil",
    meaning: "Means \"sun\" in Sanskrit.",
    meaningThemes: ["Light", "Celestial"],
    usage: "Traditional",
    nameLength: 4,
    phoneticSimplicity: "Very Simple",
    languagesList: ["Hindi", "Marathi", "Telugu", "Kannada", "Tamil"]
  },
  {
    name: "Sita",
    devanagari: "सीता",
    gender: "f",
    languages: "Hindi, Nepali",
    meaning: "Means \"furrow\" in Sanskrit. In Hindu legend this is the name of the wife of Rama, the hero of the Hindu epic the 'Ramayana'.",
    meaningThemes: ["Nature", "Mythology"],
    usage: "Traditional",
    nameLength: 4,
    phoneticSimplicity: "Simple",
    languagesList: ["Hindi", "Nepali"]
  },
  {
    name: "Prem",
    devanagari: "प्रेम",
    gender: "m",
    languages: "Hindi, Marathi, Punjabi",
    meaning: "Means \"love, affection\" in Sanskrit.",
    meaningThemes: ["Virtue"],
    usage: "Traditional",
    nameLength: 4,
    phoneticSimplicity: "Simple",
    languagesList: ["Hindi", "Marathi", "Punjabi"]
  },
  {
    name: "Lakshmi",
    devanagari: "लक्ष्मी",
    gender: "f",
    languages: "Hindi, Tamil, Telugu, Kannada",
    meaning: "From Sanskrit लक्ष्मी (lakṣmī) meaning \"sign, mark\". This is the name of the Hindu goddess of prosperity, good luck, and beauty.",
    meaningThemes: ["Virtue", "Mythology"],
    usage: "Traditional",
    nameLength: 7,
    phoneticSimplicity: "Moderate",
    languagesList: ["Hindi", "Tamil", "Telugu", "Kannada"]
  },
  {
    name: "Vivek",
    devanagari: "विवेक",
    gender: "m",
    languages: "Hindi",
    meaning: "Means \"wisdom, knowledge\" in Sanskrit.",
    meaningThemes: ["Virtue"],
    usage: "Traditional",
    nameLength: 5,
    phoneticSimplicity: "Simple",
    languagesList: ["Hindi"]
  },
  {
    name: "Maya",
    devanagari: "माया",
    gender: "f",
    languages: "Hindi, Sanskrit",
    meaning: "Means \"illusion\" or \"magic\" in Sanskrit.",
    meaningThemes: ["Mythology", "Other"],
    usage: "Modern",
    nameLength: 4,
    phoneticSimplicity: "Very Simple",
    languagesList: ["Hindi", "Sanskrit"]
  },
  {
    name: "Isha",
    devanagari: "ईशा",
    gender: "f",
    languages: "Hindi, Sanskrit",
    meaning: "Derived from Sanskrit ईश (īśa) meaning \"lord, ruler\" which is usually used as a name of the Hindu god Shiva.",
    meaningThemes: ["Mythology", "Worship"],
    usage: "Modern",
    nameLength: 4,
    phoneticSimplicity: "Very Simple",
    languagesList: ["Hindi", "Sanskrit"]
  },
  {
    name: "Arjun",
    devanagari: "अर्जुन",
    gender: "m",
    languages: "Hindi, Marathi",
    meaning: "Means \"white, clear\" in Sanskrit. This is the name of a hero in Hindu legend, the son of the god Indra.",
    meaningThemes: ["Light", "Mythology"],
    usage: "Traditional",
    nameLength: 5,
    phoneticSimplicity: "Simple",
    languagesList: ["Hindi", "Marathi"]
  },
  {
    name: "Kiran",
    devanagari: "किरण",
    gender: "unisex",
    languages: "Hindi, Bengali, Marathi",
    meaning: "Means \"ray of light, dust\" in Sanskrit.",
    meaningThemes: ["Light", "Nature"],
    usage: "Traditional",
    nameLength: 5,
    phoneticSimplicity: "Simple",
    languagesList: ["Hindi", "Bengali", "Marathi"]
  },
  {
    name: "Aasha",
    devanagari: "आशा",
    gender: "f",
    languages: "Hindi",
    meaning: "Means \"hope, desire, wish\" in Sanskrit.",
    meaningThemes: ["Virtue"],
    usage: "Traditional",
    nameLength: 5,
    phoneticSimplicity: "Simple",
    languagesList: ["Hindi"]
  },
  {
    name: "Raj",
    devanagari: "राज",
    gender: "m",
    languages: "Hindi",
    meaning: "Means \"king, sovereign\" in Sanskrit.",
    meaningThemes: ["Virtue"],
    usage: "Traditional",
    nameLength: 3,
    phoneticSimplicity: "Very Simple",
    languagesList: ["Hindi"]
  },
  {
    name: "Priya",
    devanagari: "प्रिया",
    gender: "f",
    languages: "Hindi, Tamil, Telugu",
    meaning: "Means \"beloved\" in Sanskrit.",
    meaningThemes: ["Virtue"],
    usage: "Traditional",
    nameLength: 5,
    phoneticSimplicity: "Simple",
    languagesList: ["Hindi", "Tamil", "Telugu"]
  },
  {
    name: "Veda",
    devanagari: "वेद",
    gender: "f",
    languages: "Hindi",
    meaning: "Means \"knowledge, wisdom\" in Sanskrit.",
    meaningThemes: ["Virtue", "Worship"],
    usage: "Modern",
    nameLength: 4,
    phoneticSimplicity: "Simple",
    languagesList: ["Hindi"]
  },
  {
    name: "Akash",
    devanagari: "आकाश",
    gender: "m",
    languages: "Hindi, Marathi, Bengali",
    meaning: "Means \"sky, atmosphere\" in Sanskrit.",
    meaningThemes: ["Nature", "Celestial"],
    usage: "Traditional",
    nameLength: 5,
    phoneticSimplicity: "Simple",
    languagesList: ["Hindi", "Marathi", "Bengali"]
  },
  {
    name: "Indra",
    devanagari: "इंद्र",
    gender: "m",
    languages: "Hindi, Bengali",
    meaning: "Means \"possessing drops of rain\" in Sanskrit. This is the name of the ancient Hindu warrior god of the sky and rain.",
    meaningThemes: ["Mythology", "Nature", "Celestial"],
    usage: "Traditional",
    nameLength: 5,
    phoneticSimplicity: "Simple",
    languagesList: ["Hindi", "Bengali"]
  }
];

// Function to filter names based on quiz answers
export const filterNamesByQuizAnswers = (answers: QuizAnswers): HindiName[] => {
  return hindiNames.filter(name => {
    // Filter by gender
    if (answers.gender !== name.gender && name.gender !== 'unisex' && answers.gender !== 'unisex') {
      return false;
    }
    
    // Filter by meaning theme
    if (answers.meaningTheme.length > 0 && 
        !name.meaningThemes.some(theme => answers.meaningTheme.includes(theme))) {
      return false;
    }
    
    // Filter by phonetic preference
    if (answers.phoneticPreference.length > 0 && 
        !answers.phoneticPreference.includes(name.phoneticSimplicity)) {
      return false;
    }
    
    // Filter by name length
    if (answers.nameLength) {
      if (answers.nameLength === 'short' && name.nameLength > 4) {
        return false;
      }
      if (answers.nameLength === 'medium' && (name.nameLength < 5 || name.nameLength > 6)) {
        return false;
      }
      if (answers.nameLength === 'long' && name.nameLength <= 6) {
        return false;
      }
    }
    
    // Filter by usage
    if (answers.usage && answers.usage !== name.usage) {
      return false;
    }
    
    return true;
  });
};
