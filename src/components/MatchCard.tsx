import type { Match } from "../types";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {
  match: Match;
}

export default function MatchCard({ match }: Props) {
  return (
    <div className="border border-gray-200 bg-white shadow-sm rounded-sm p-4 mb-4 w-full flex items-center gap-4">
      <Avatar className="w-15 h-15">
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
      <div>
        <h3 className="text-neutral-800s font-bold mb-2">{match.name}</h3>
        <p className="text-neutral-500">{match.description}</p>
        <strong className="text-neutral-600">Nível de afinidade: {match.affinity}%</strong>
      </div>
    </div>
  );
}
