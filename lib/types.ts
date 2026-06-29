export interface Annotation {
  word: string;
  explanation: string;
  modernMapping?: string;
}

export interface ChapterSection {
  id: string;
  chapterId: string;
  original: string;
  translation: string;
  annotations: Annotation[];
  strategyInterpretation: string;
}

export interface Chapter {
  id: string;
  order: number;
  title: string;
  slug: string;
  theme: string;
  summary: string;
  modernMeaning: string;
  keywords: string[];
  applicableScenes: string[];
  sections: ChapterSection[];
  relatedConceptIds: string[];
  relatedCaseIds: string[];
  relatedQuoteIds: string[];
}

export interface Concept {
  id: string;
  name: string;
  slug: string;
  sourceChapterIds: string[];
  originalQuotes: string[];
  explanation: string;
  modernMeaning: string;
  commonMisunderstanding: string;
  relatedCaseIds: string[];
  relatedTrainingIds: string[];
}

export interface CaseItem {
  id: string;
  title: string;
  slug: string;
  category: 'history' | 'business' | 'workplace' | 'tech' | 'personal';
  summary: string;
  background: string;
  conflict: string;
  resourceComparison: string;
  strategyChoice: string;
  result: string;
  relatedChapterIds: string[];
  relatedConceptIds: string[];
  lesson: string;
  reflectionQuestions: string[];
}

export interface TrainingOption {
  id: string;
  text: string;
  score: number;
  feedback: string;
}

export interface TrainingScenario {
  id: string;
  title: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  background: string;
  question: string;
  options: TrainingOption[];
  recommendedOptionIds: string[];
  relatedChapterIds: string[];
  relatedConceptIds: string[];
  scoringDimensions: string[];
  explanation: string;
}

export interface Quote {
  id: string;
  text: string;
  chapterId: string;
  translation: string;
  explanation: string;
  modernApplication: string;
  tags: string[];
}

export interface LearningPath {
  id: string;
  title: string;
  audience: string;
  steps: string[];
  chapterIds: string[];
  conceptIds: string[];
}

export interface SearchItem {
  type: string;
  title: string;
  href: string;
  text: string;
}
