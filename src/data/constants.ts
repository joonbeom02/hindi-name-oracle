
import { MeaningTheme, PhoneticSimplicity } from '@/types';

export const meaningThemes: MeaningTheme[] = [
  "Beauty",
  "Friendship",
  "Immortality",
  "Light",
  "Mind",
  "Mythology",
  "Nature",
  "Prosperity",
  "Victory",
  "Virtue", 
  "Worship",
  "Celestial",
  "Other"
];

// 사용자에게 보여줄 테마 설명
export const themeDescriptions: Record<MeaningTheme, string> = {
  "Light": '빛, 광명, 태양',
  "Virtue": '미덕, 용기, 지혜, 사랑',
  "Nature": '자연, 지구, 식물',
  "Celestial": '하늘, 천체, 별, 달',
  "Mythology": '신화, 전설적 인물',
  "Worship": '종교, 신성한 의식',
  "Beauty": '아름다움, 우아함',
  "Friendship": '우정, 동료애',
  "Immortality": '불멸, 영원함',
  "Mind": '마음, 지성, 영혼',
  "Prosperity": '번영, 성공, 풍요',
  "Victory": '승리, 정복',
  "Other": '기타 주제'
};
