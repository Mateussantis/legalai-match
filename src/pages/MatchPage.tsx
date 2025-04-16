import { useState } from "react";
import Form from "../components/Form";
import MatchCard from "../components/MatchCard";
import { mockMatches } from "../data/matches";
import type { FormData, Match } from "../types";

export default function MatchPage() {
  const [matches, setMatches] = useState<Match[]>([]);

  function handleSearch(data: FormData) {
    const enriched = mockMatches.map((candidate) => ({
      ...candidate,
      affinity: calculateAffinity(data.interest, data.experience, candidate)
    }));

    const sorted = enriched.sort((a, b) => b.affinity - a.affinity);
    setMatches(sorted.slice(0, 3));
  }

  function calculateAffinity(
    userInterest: string,
    userExperienceKey: string,
    candidate: Match
  ): number {
    const experienceMap: Record<string, number> = {
      "menos-de-1": 0.5,
      "1-2": 1.5,
      "3-5": 4,
      "6-10": 8,
      "mais-de-10": 12
    };

    const interestScore = userInterest === candidate.interest ? 70 : 0;

    const userExp = experienceMap[userExperienceKey];
    const candidateExp = experienceMap[candidate.experience];

    const experienceDiff = Math.abs(userExp - candidateExp);
    const experienceScore = Math.max(0, 30 - experienceDiff * 10);

    return interestScore + experienceScore;
  }

  return (
    <div className="p-4">
      <div className="max-w-7xl w-full mx-auto">
        <h1 className="text-blue-700 font-bold text-2xl mb-4">Match Inteligente</h1>
        <Form onSubmit={handleSearch} />
        <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </div>
  );
}
