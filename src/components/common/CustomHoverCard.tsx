import type { CollectionEntry } from "astro:content";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import { LazyIcon } from "./LazyIcon"
import { CalendarDays } from "lucide-react"

interface Props {
  skill: CollectionEntry<"skill">
  children: React.ReactNode;
}

export const CustomHoverCard = ({ skill, children }: Props) => {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger asChild>
        <div className="inline-block cursor-help">{children}</div>
      </HoverCardTrigger>
      <HoverCardContent className='w-96 border-terciary/40'>
        <div className="flex justify-between space-x-4">
          <LazyIcon name={skill.data.icon} className="w-14 h-14 rounded-full bg-amber-50 p-2" />
          <div className="space-y-1">
            <h4 className="text-base underline underline-offset-4 decoration-2 mb-2 decoration-wavy decoration-terciary">
              {skill.data.skill}
            </h4>
            <p className="text-sm">
              {skill.data.description}
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4" />{" "}
              <span className="text-xs text-muted-foreground">
                {skill.data.release}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
