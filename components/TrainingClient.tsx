'use client';

import { useState } from 'react';
import type { DeepTrainingScenario } from '@/lib/types';
import { addLocalValue, STORAGE_KEYS } from '@/lib/progress';

export function TrainingClient({ scenario }: { scenario: DeepTrainingScenario }) {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedOption = scenario.options.find((option) => option.id === selected);

  function choose(id: string) {
    setSelected(id);
    addLocalValue(STORAGE_KEYS.completedTraining, scenario.id);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-4">
        {scenario.options.map((option) => (
          <button key={option.id} onClick={() => choose(option.id)} className={`w-full rounded-3xl border p-5 text-left transition ${selected === option.id ? 'border-bronze bg-bronze/10' : 'border-white/10 bg-white/[0.03] hover:border-bronze/50'}`}>
            <div className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bronze/20 text-bronze">{option.id}</span>
              <span className="leading-7 text-paper/80">{option.text}</span>
            </div>
          </button>
        ))}
      </div>
      <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <h2 className="font-serif text-2xl text-paper">战略评分</h2>
        {selectedOption ? (
          <div className="mt-5">
            <div className="mb-4 h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-bronze" style={{ width: `${selectedOption.score}%` }} />
            </div>
            <p className="text-4xl font-bold text-bronze">{selectedOption.score}</p>
            <p className="mt-4 leading-7 text-paper/70">{selectedOption.feedback}</p>
            <div className="mt-6 rounded-2xl bg-ink/60 p-4 text-sm leading-7 text-paper/65">{scenario.bestAnswerCondition}</div>
          </div>
        ) : (
          <p className="mt-5 text-paper/60">选择一个策略后，会看到评分、反馈与复盘建议。</p>
        )}
        <div className="mt-6 grid grid-cols-2 gap-2 text-xs text-paper/50">
          {scenario.scoringRules.map((rule) => <span key={rule.dimension} className="rounded-full border border-white/10 px-3 py-2 text-center">{rule.dimension}</span>)}
        </div>
      </aside>
    </div>
  );
}
