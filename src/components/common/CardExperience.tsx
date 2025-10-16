import { useEffect, useRef, useState } from "react"
import { TimeLine } from "./TimeLine"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import type { CollectionEntry } from "astro:content";
import { CustomTooltip } from "./CustomTooltip";
import type { lenguages } from "@/i18n/ui";
import { useTranslation } from "@/lib/utils";

interface Props {
  experience: CollectionEntry<"experience">;
  currentLang: keyof typeof lenguages;
}

export const CardExperience = ({ experience, currentLang }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [maxHeight, setMaxHeight] = useState("3em")
  const contentRef = useRef<HTMLDivElement>(null)

  const t = useTranslation(currentLang);

  useEffect(() => {
    if (contentRef.current)
      setMaxHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : "3em")

  }, [isExpanded])

  return (
    <TimeLine date={experience.data.dates}>
      <div className="w-auto rounded-md bg-background pb-10 md:pl-6">
        <h3 className="text-xl md:text-2xl font-titan-one">
          {experience.data.title}
          {experience.data.company && (
            <>
              <span className="mx-1">@</span>
              <CustomTooltip description={t("tooltips.viewCompany")}>
                <a
                  href={experience.data.company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 underline text-terciary hover:decoration-dotted underline-offset-4 text-lg lg:text-2xl"
                >
                  <span>{experience.data.company.name}</span>
                  <ExternalLink size={18} className="text-terciary" />
                </a>
              </CustomTooltip>
            </>
          )}
        </h3>
        <p className="text-sm text-muted-foreground">{experience.data.location}</p>

        <div className="mt-2">
          <h3 className="text-sm md:text-base font-normal mb-1">{t("index.experience.cardExp.summary")}:</h3>
          <p className="text-sm text-muted-foreground">
            {experience.data.summary}
          </p>
        </div>

        <div className="mt-2 relative mb-2">
          <h3 className="text-sm md:text-base font-normal mb-1">{t("index.experience.cardExp.responsibilities")}:</h3>

          <div
            ref={contentRef}
            className={`relative overflow-hidden transition-[max-height] duration-500 ease-in-out`}
            style={{ maxHeight }}
          >
            <div>

              <ul className="list-disc list-inside text-sm pl-4 space-y-1 marker:text-terciary text-muted-foreground">
                {experience.data.responsibilities.map((resp) => (
                  <li key={resp}>{resp}</li>
                ))}
              </ul>

              <h3 className="text-sm md:text-base font-normal mb-1 mt-2">{t("index.experience.cardExp.achievements")}:</h3>

              <ul className="list-disc list-inside text-sm pl-4 space-y-1 marker:text-terciary text-muted-foreground">
                {experience.data.achievements.map((arch) => (
                  <li key={arch}>{arch}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t dark:from-background from-background transition-opacity duration-500 ${isExpanded ? 'opacity-0' : 'opacity-100'}`} />
        </div>

        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 w-auto text-primary"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-2" />
              {t("buttons.showLess")}
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-2" />
              {t("buttons.showMore")}
            </>
          )}
        </Button>
      </div>
    </TimeLine>
  )
}
