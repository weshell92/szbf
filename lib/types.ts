export type ChapterCompleteness = '完整' | '待复校' | '节选';
export type ProofreadingStatus = '未校对' | '初校' | '复校' | '已定稿';

export interface WordAnnotation {
  word: string;
  pinyin?: string;
  explanation: string;
  modernMapping?: string;
}

export interface VariantNote {
  sentenceId: string;
  variantText: string;
  note: string;
}

export interface TextVersionInfo {
  sourceName: string;
  edition: '通行本' | '银雀山汉简参考' | '其他';
  completeness: ChapterCompleteness;
  proofreadingStatus: ProofreadingStatus;
  variantNotes: VariantNote[];
  note: string;
}

export interface ChapterSentence {
  id: string;
  chapterId: string;
  order: number;
  original: string;
  words: WordAnnotation[];
  translation: string;
  literalTranslation?: string;
  freeTranslation?: string;
  coreMeaning?: string;
  modernApplication: string;
  misunderstanding?: string;
  relatedConceptIds: string[];
  relatedCaseIds: string[];
  relatedTrainingIds: string[];
  quoteLevel: 'normal' | 'important' | 'classic';
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
  versionInfo: TextVersionInfo;
  structure: string[];
  fullOriginal: string;
  sentences: ChapterSentence[];
  coreSummary: string;
  modernApplications: string[];
  reflectionTemplate: string[];
  relatedConceptIds: string[];
  relatedCaseIds: string[];
  relatedQuoteIds: string[];
}

export interface ConceptDimension {
  name: string;
  ancientMeaning: string;
  modernMapping: string;
  example: string;
}

export interface DeepConcept {
  id: string;
  name: string;
  slug: string;
  oneLineExplanation: string;
  sourceChapterIds: string[];
  originalSentences: string[];
  ancientContext: string;
  modernMeaning: string;
  dimensions: ConceptDimension[];
  applicableScenes: string[];
  unsuitableScenes: string[];
  commonMisunderstandings: string[];
  correctUsage: string[];
  negativeCases: string[];
  relatedCaseIds: string[];
  relatedTrainingIds: string[];
  selfTestQuestions: string[];
}

export interface CaseActor {
  name: string;
  role: string;
  advantages: string[];
  disadvantages: string[];
}

export interface ResourceComparison {
  side: string;
  manpower?: string;
  resource?: string;
  morale?: string;
  information?: string;
  position?: string;
}

export interface CaseTimelineItem {
  time: string;
  event: string;
  strategicMeaning: string;
}

export interface CaseDecisionNode {
  title: string;
  options: string[];
  chosen: string;
  why: string;
  risk: string;
}

export interface DeepCaseItem {
  id: string;
  title: string;
  slug: string;
  category: 'history' | 'business' | 'workplace' | 'tech' | 'personal';
  summary: string;
  background: string;
  actors: CaseActor[];
  resourceComparison: ResourceComparison[];
  constraints: string[];
  timeline: CaseTimelineItem[];
  decisionNodes: CaseDecisionNode[];
  hardFightConsequence: string;
  keyTurningPoint: string;
  relatedOriginalSentences: string[];
  relatedChapterIds: string[];
  relatedConceptIds: string[];
  result: string;
  modernTransfer: string;
  reusableMethod: string[];
  practiceQuestions: string[];
}

export interface TrainingQuestion {
  id: string;
  question: string;
  type: 'single' | 'multiple' | 'text';
  options?: string[];
  explanation: string;
}

export interface DeepTrainingOption {
  id: string;
  text: string;
  score: number;
  whenItWorks: string;
  whenItFails: string;
  feedback: string;
  relatedConceptIds: string[];
}

export interface ScoringRule {
  dimension: '胜算' | '成本' | '风险' | '时机' | '信息' | '对手' | '执行';
  maxScore: number;
  description: string;
}

export interface DeepTrainingScenario {
  id: string;
  title: string;
  category: 'business' | 'workplace' | 'startup' | 'tech' | 'team' | 'personal' | 'history';
  difficulty: 'easy' | 'medium' | 'hard';
  background: string;
  conflict: string;
  knownFacts: string[];
  unknownFacts: string[];
  situationQuestions: TrainingQuestion[];
  selfResourceQuestions: TrainingQuestion[];
  opponentQuestions: TrainingQuestion[];
  options: DeepTrainingOption[];
  recommendedOptionIds: string[];
  scoringRules: ScoringRule[];
  bestAnswerCondition: string;
  relatedOriginalSentences: string[];
  relatedConceptIds: string[];
  relatedCaseIds: string[];
  wrongThinkingPatterns: string[];
  reflectionTemplate: string[];
}

export interface DeepQuote {
  id: string;
  text: string;
  chapterId: string;
  sentenceId: string;
  wordAnnotations: WordAnnotation[];
  translation: string;
  strategicMeaning: string;
  modernApplication: string;
  misuseWarning: string;
  relatedCaseIds: string[];
  relatedTrainingIds: string[];
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

export interface UserReflection {
  id: string;
  targetType: 'chapter' | 'sentence' | 'concept' | 'case' | 'training' | 'quote';
  targetId: string;
  title: string;
  answers: { question: string; answer: string }[];
  aiFeedback?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SearchItem {
  type: '篇章' | '原文' | '字词' | '译文' | '概念' | '案例' | '训练' | '金句' | '现代应用';
  title: string;
  href: string;
  text: string;
  meta?: string;
}
