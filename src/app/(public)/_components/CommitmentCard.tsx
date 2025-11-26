import { Shield, Eye, Users, type LucideIcon } from "lucide-react";

export interface Commitment {
  id: string;
  title: string;
  description: string;
  icon: string;
  points: string[];
}

interface CommitmentCardProps {
  commitment: Commitment;
}

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Eye,
  Users,
};

export function CommitmentCard({ commitment }: CommitmentCardProps) {
  const Icon = iconMap[commitment.icon] || Shield;

  return (
    <div className="rounded-lg bg-background-primary p-6 space-y-4">
      <div className="flex justify-center">
        <div className="rounded-full bg-primary-green-base p-4">
          <Icon className="h-8 w-8 text-neutral-950" />
        </div>
      </div>

      <h3 className="text-xl font-heading font-bold text-center text-neutral-950 dark:text-neutral-50">
        {commitment.title}
      </h3>

      <p className="text-sm text-color-text-muted text-center">
        {commitment.description}
      </p>

      <ul className="space-y-2">
        {commitment.points.map((point, index) => (
          <li key={index}>
            {index > 0 && <div className="border-t border-border mb-2 mt-2" />}
            <span className="text-sm text-neutral-950 dark:text-neutral-50">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
