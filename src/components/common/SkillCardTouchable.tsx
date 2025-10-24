import type { CollectionEntry } from "astro:content";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LazyIcon } from "./LazyIcon";
import { CalendarDays } from "lucide-react";
import { useState } from "react";

interface Props {
  skill: CollectionEntry<"skill">;
  children: React.ReactNode;
}

export const SkillCardTouchable = ({ skill, children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className={open ? '[&_.skill-icon]:grayscale-0' : ''}>
          {children}
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="w-[calc(100vw-2rem)] max-w-sm border-terciary/40"
        align="center"
        sideOffset={8}
      >
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <LazyIcon
              name={skill.data.icon}
              className="w-12 h-12 rounded-full bg-amber-50 p-2"
            />
          </div>
          <div className="space-y-2 flex-1 min-w-0">
            <h4 className="text-sm font-medium underline underline-offset-4 decoration-2 decoration-wavy decoration-terciary leading-tight">
              {skill.data.skill}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {skill.data.description}
            </p>
            <div className="flex items-center pt-1">
              <CalendarDays className="mr-1.5 h-3 w-3 flex-shrink-0" />
              <span className="text-xs text-muted-foreground">
                {skill.data.release}
              </span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
