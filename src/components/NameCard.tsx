
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HindiName } from '@/types';
import { getKoreanPronunciation } from '@/data/hindiNames';
import { Heart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface NameCardProps {
  name: HindiName;
  index: number;
}

const NameCard: React.FC<NameCardProps> = ({ name, index }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();
  const koreanPronunciation = getKoreanPronunciation(name.name);
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: !isFavorite ? "즐겨찾기에 추가되었습니다" : "즐겨찾기에서 제거되었습니다",
      description: !isFavorite ? `${name.name} (${koreanPronunciation})` : "",
    });
  };

  const meaningThemeColors: Record<string, string> = {
    "Light": "bg-yellow-100 text-yellow-800",
    "Virtue": "bg-green-100 text-green-800",
    "Nature": "bg-emerald-100 text-emerald-800",
    "Celestial": "bg-indigo-100 text-indigo-800",
    "Mythology": "bg-purple-100 text-purple-800",
    "Worship": "bg-red-100 text-red-800",
    "Other": "bg-gray-100 text-gray-800"
  };

  // Animation delay based on index
  const animationDelay = `${index * 150}ms`;
  
  // Define animation keyframes as a string
  const keyframesStyle = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: keyframesStyle }} />
      <Card 
        className="border border-hindi-gold/30 overflow-hidden shadow-md relative transition-all duration-300 hover:shadow-lg group"
        style={{ 
          opacity: 0, 
          animation: `fadeInUp 0.5s ease forwards`,
          animationDelay: animationDelay
        }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hindi-saffron to-hindi-red"></div>
        
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-bold">{name.name}</CardTitle>
              <CardDescription className="mt-1 text-base">{koreanPronunciation}</CardDescription>
            </div>
            <div className="text-lg font-hindi opacity-70 text-hindi-orange">
              {name.devanagari}
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <p className="text-sm mb-3">
            {name.meaning}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {name.meaningThemes.map(theme => (
              <span 
                key={theme} 
                className={`text-xs px-2 py-1 rounded-full ${meaningThemeColors[theme]}`}
              >
                {theme}
              </span>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-muted p-2 rounded-md">
              <span className="font-semibold block text-xs">성별</span>
              {name.gender === 'm' ? '남성' : name.gender === 'f' ? '여성' : '중성/모두'}
            </div>
            
            <div className="bg-muted p-2 rounded-md">
              <span className="font-semibold block text-xs">사용</span>
              {name.usage === 'Traditional' ? '전통적' : '현대적'}
            </div>
            
            <div className="bg-muted p-2 rounded-md">
              <span className="font-semibold block text-xs">발음 난이도</span>
              {name.phoneticSimplicity === 'Very Simple' ? '매우 쉬움' : 
              name.phoneticSimplicity === 'Simple' ? '쉬움' : 
              name.phoneticSimplicity === 'Moderate' ? '보통' : '복잡함'}
            </div>
            
            <div className="bg-muted p-2 rounded-md">
              <span className="font-semibold block text-xs">언어</span>
              <span className="truncate block">{name.languagesList.join(', ')}</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-end pt-0">
          <Button 
            variant={isFavorite ? "default" : "outline"} 
            size="sm" 
            className={isFavorite ? "bg-hindi-red hover:bg-hindi-red/90" : ""}
            onClick={toggleFavorite}
          >
            <Heart className={`h-4 w-4 mr-1 ${isFavorite ? 'fill-current' : ''}`} />
            {isFavorite ? '저장됨' : '저장'}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default NameCard;
