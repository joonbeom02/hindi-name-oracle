
import React, { useState } from 'react';
import NameQuiz from '@/components/NameQuiz';
import ResultsSection from '@/components/ResultsSection';
import { QuizAnswers, HindiName } from '@/types';
import { filterNamesByQuizAnswers } from '@/data/hindiNames';

const Index = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [recommendedNames, setRecommendedNames] = useState<HindiName[]>([]);

  const handleQuizComplete = (answers: QuizAnswers) => {
    const filteredNames = filterNamesByQuizAnswers(answers);
    setRecommendedNames(filteredNames);
    setQuizCompleted(true);
  };

  const handleReset = () => {
    setQuizCompleted(false);
    setRecommendedNames([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted mandala-pattern">
      <div className="container px-4 py-12 max-w-6xl">
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
            힌디어 이름 짓기
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mx-auto max-w-3xl">
            당신의 취향과 선호도에 맞는 아름다운 힌디어 이름을 찾아보세요
          </p>
        </header>

        <div className="flex flex-col items-center">
          {!quizCompleted ? (
            <div className="animate-float">
              <NameQuiz onComplete={handleQuizComplete} />
            </div>
          ) : (
            <ResultsSection names={recommendedNames} onReset={handleReset} />
          )}
        </div>
        
        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>힌디어 이름 짓기 &copy; {new Date().getFullYear()} - 인도의 전통과 문화를 담은 이름 추천 서비스</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
