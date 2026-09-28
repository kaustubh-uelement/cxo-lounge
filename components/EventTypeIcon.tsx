import { Dumbbell, GraduationCap, MessagesSquare, PartyPopper, Trophy, Wine } from "lucide-react";
import type { EventType } from "@/data/events";

export function EventTypeIcon({ type, className }: { type: EventType; className?: string }) {
  const Icon = { league: Trophy, finale: PartyPopper, training: Dumbbell, roundtable: MessagesSquare, learning: GraduationCap, networking: Wine }[type];
  return <Icon className={className} aria-hidden />;
}
