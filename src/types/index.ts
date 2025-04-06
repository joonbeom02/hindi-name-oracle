
export type Gender = 'm' | 'f' | 'unisex';

export type MeaningTheme = 
  | 'Beauty'
  | 'Friendship'
  | 'Immortality'
  | 'Light'
  | 'Mind'
  | 'Mythology'
  | 'Nature'
  | 'Prosperity'
  | 'Victory'
  | 'Virtue'
  | 'Worship'
  | 'Celestial'
  | 'Other';

export type PhoneticSimplicity = 
  | 'Very Simple' 
  | 'Simple' 
  | 'Moderate' 
  | 'Complex';

export type Usage = 
  | 'Traditional' 
  | 'Modern';

export type HindiName = {
  name: string;
  devanagari: string;
  gender: Gender;
  languages: string;
  meaning: string;
  meaningThemes: MeaningTheme[];
  usage: Usage;
  nameLength: number;
  phoneticSimplicity: PhoneticSimplicity;
  languagesList: string[];
};

export type QuizAnswers = {
  gender: Gender;
  meaningTheme: MeaningTheme[];
  phoneticPreference: PhoneticSimplicity[];
  nameLength: 'short' | 'medium' | 'long' | null;
  usage: Usage | null;
};
