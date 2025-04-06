import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { MeaningTheme, PhoneticSimplicity, QuizAnswers, Gender, Usage } from '@/types';
import { useToast } from "@/hooks/use-toast";
import { meaningThemes, themeDescriptions } from '@/data/constants';

type NameQuizProps = {
  onComplete: (answers: QuizAnswers) => void;
};

const initialAnswers: QuizAnswers = {
  gender: 'unisex',
  meaningTheme: [],
  phoneticPreference: [],
  nameLength: null,
  usage: null
};

const NameQuiz: React.FC<NameQuizProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>(initialAnswers);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const updateAnswers = (field: keyof QuizAnswers, value: any) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const handleMultiSelectToggle = (field: 'meaningTheme' | 'phoneticPreference', value: MeaningTheme | PhoneticSimplicity) => {
    setAnswers(prev => {
      const currentValues = prev[field] as (MeaningTheme[] | PhoneticSimplicity[]);
      const newValues = currentValues.includes(value as never) 
        ? currentValues.filter(item => item !== value)
        : [...currentValues, value as never];
      return { ...prev, [field]: newValues };
    });
  };

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate a brief loading state
    setTimeout(() => {
      onComplete(answers);
      setIsSubmitting(false);
      toast({
        title: "추천 완료!",
        description: "당신에게 맞는 힌디어 이름을 찾았습니다.",
      });
    }, 1000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <CardTitle className="text-2xl gradient-text">성별 선택</CardTitle>
            <CardContent className="pt-6">
              <RadioGroup 
                value={answers.gender} 
                onValueChange={(value) => updateAnswers('gender', value as Gender)}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="m" id="male" />
                  <Label htmlFor="male" className="text-lg">남성</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="f" id="female" />
                  <Label htmlFor="female" className="text-lg">여성</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="unisex" id="unisex" />
                  <Label htmlFor="unisex" className="text-lg">중성/모두</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </>
        );
        
      case 2:
        return (
          <>
            <CardTitle className="text-2xl gradient-text">이름의 의미 선택</CardTitle>
            <CardContent className="pt-6">
              <p className="mb-4 text-muted-foreground">이름의 의미에서 중요하게 생각하는 주제를 선택하세요 (여러 개 선택 가능)</p>
              <div className="grid grid-cols-2 gap-3">
                {meaningThemes.map((theme) => (
                  <Button
                    key={theme}
                    variant={answers.meaningTheme.includes(theme) ? "default" : "outline"}
                    onClick={() => handleMultiSelectToggle('meaningTheme', theme)}
                    className="h-auto py-3 justify-start"
                  >
                    <div>
                      <div className="font-medium">{theme}</div>
                      <div className="text-xs text-left mt-1 font-normal">
                        {themeDescriptions[theme]}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </>
        );
        
      case 3:
        return (
          <>
            <CardTitle className="text-2xl gradient-text">발음 선호도</CardTitle>
            <CardContent className="pt-6">
              <p className="mb-4 text-muted-foreground">한국어 화자로서 발음하기 쉬운 정도를 선택하세요 (여러 개 선택 가능)</p>
              <div className="space-y-4">
                {(['Very Simple', 'Simple', 'Moderate', 'Complex'] as PhoneticSimplicity[]).map((level) => (
                  <Button
                    key={level}
                    variant={answers.phoneticPreference.includes(level) ? "default" : "outline"}
                    onClick={() => handleMultiSelectToggle('phoneticPreference', level)}
                    className="w-full justify-start mb-2"
                  >
                    <div>
                      <div className="font-medium">{level}</div>
                      <div className="text-xs text-left mt-1">
                        {level === 'Very Simple' && '매우 쉬움 (예: 라비, 마야)'}
                        {level === 'Simple' && '쉬움 (예: 아샤, 키란)'}
                        {level === 'Moderate' && '보통 (예: 아브히지트, 락슈미)'}
                        {level === 'Complex' && '복잡함 (긴 이름, 특별한 발음)'}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </>
        );
        
      case 4:
        return (
          <>
            <CardTitle className="text-2xl gradient-text">이름 길이</CardTitle>
            <CardContent className="pt-6">
              <RadioGroup 
                value={answers.nameLength || ''} 
                onValueChange={(value) => updateAnswers('nameLength', value as 'short' | 'medium' | 'long' | null)}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="short" id="short" />
                  <Label htmlFor="short" className="text-lg">짧은 이름 (2-4글자)</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium" className="text-lg">중간 길이 (5-6글자)</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="long" id="long" />
                  <Label htmlFor="long" className="text-lg">긴 이름 (7글자 이상)</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="" id="any" />
                  <Label htmlFor="any" className="text-lg">상관없음</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </>
        );
        
      case 5:
        return (
          <>
            <CardTitle className="text-2xl gradient-text">전통과 현대</CardTitle>
            <CardContent className="pt-6">
              <RadioGroup 
                value={answers.usage || ''} 
                onValueChange={(value) => updateAnswers('usage', value as Usage | null)}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="Traditional" id="traditional" />
                  <Label htmlFor="traditional" className="text-lg">전통적인 이름 (깊은 문화적 뿌리)</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="Modern" id="modern" />
                  <Label htmlFor="modern" className="text-lg">현대적인 이름 (현대에 더 많이 사용)</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="" id="any-usage" />
                  <Label htmlFor="any-usage" className="text-lg">상관없음</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </>
        );
        
      default:
        return null;
    }
  };

  return (
    <Card className="w-full md:max-w-xl rounded-2xl shadow-lg overflow-hidden border-hindi-gold/20 bg-gradient-to-b from-white to-muted">
      <CardHeader className="relative pb-2 pt-6">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hindi-saffron to-hindi-red"></div>
        {renderStep()}
      </CardHeader>
      
      <div className="px-6 pb-6">
        <Separator className="my-4" />
        
        <div className="flex justify-between mt-4">
          <Button 
            variant="outline" 
            onClick={prevStep} 
            disabled={step === 1}
          >
            이전
          </Button>
          
          <div className="flex gap-1 items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full ${i + 1 === step ? 'bg-hindi-saffron' : 'bg-muted-foreground/30'}`}
              ></div>
            ))}
          </div>
          
          <Button 
            onClick={nextStep} 
            disabled={isSubmitting}
            className="bg-hindi-saffron hover:bg-hindi-saffron/90"
          >
            {step === 5 ? (isSubmitting ? '찾는 중...' : '이름 찾기') : '다음'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default NameQuiz;
