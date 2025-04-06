
import React, { useState } from 'react';
import { HindiName } from '@/types';
import NameCard from './NameCard';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Search } from 'lucide-react';

interface ResultsSectionProps {
  names: HindiName[];
  onReset: () => void;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ names, onReset }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter names by search term
  const filteredNames = names.filter(name => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      name.name.toLowerCase().includes(lowerSearchTerm) ||
      name.meaning.toLowerCase().includes(lowerSearchTerm) ||
      name.meaningThemes.some(theme => theme.toLowerCase().includes(lowerSearchTerm))
    );
  });

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold gradient-text">추천된 이름 ({names.length}개)</h2>
          <p className="text-muted-foreground mt-1">
            당신의 선택에 따라 맞춤화된 힌디어 이름입니다
          </p>
        </div>
        
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="이름 또는 의미 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 w-[200px]"
            />
          </div>
          <Button variant="outline" onClick={onReset}>
            다시 선택하기
          </Button>
        </div>
      </div>

      <Separator className="mb-8" />
      
      {filteredNames.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNames.map((name, index) => (
            <NameCard key={name.name} name={name} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">검색 결과가 없습니다</p>
          {searchTerm && (
            <Button 
              variant="link" 
              onClick={() => setSearchTerm('')}
              className="mt-2"
            >
              검색어 지우기
            </Button>
          )}
        </div>
      )}
      
      {filteredNames.length > 0 && (
        <div className="mt-10 text-center">
          <Button onClick={onReset} variant="outline" size="lg">
            새로운 추천 받기
          </Button>
        </div>
      )}
    </div>
  );
};

export default ResultsSection;
