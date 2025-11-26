import Image from "next/image";
import { Badge } from "@/components/ui/Badge";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-border">
      <div className="relative w-full aspect-square">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 bg-background-secondary space-y-3 h-full">
        <h3 className="text-lg font-heading font-bold text-neutral-950 dark:text-neutral-50 text-center">
          {member.name}
        </h3>

        <div className="flex justify-center">
          <Badge variant="default">{member.role}</Badge>
        </div>

        <p className="text-sm text-color-text-muted text-center font-body">
          {member.bio}
        </p>
      </div>
    </div>
  );
}
