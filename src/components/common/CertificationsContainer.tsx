import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { CollectionEntry } from "astro:content";
import { Card, CardContent, CardFooter } from "../ui/card";
import { CustomTooltip } from "./CustomTooltip";
import type { lenguages } from "@/i18n/ui";
import { useTranslation } from "@/lib/utils";

interface Props {
  certifications?: CollectionEntry<"certification">[];
  currentLang: keyof typeof lenguages;
}

export const CertificationsContainer = ({ certifications, currentLang }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [maxHeight, setMaxHeight] = useState("30em")
  const contentRef = useRef<HTMLDivElement>(null)
  const t = useTranslation(currentLang);

  useEffect(() => {
    if (contentRef.current)
      setMaxHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : "30em")

  }, [isExpanded])

  return (
    <div className="mb-8 space-y-8">
      <div className="relative flex justify-center items-center">
        <div
          className="overflow-hidden transition-[max-height] duration-500 ease-in-out grid grid-cols-1 md:grid-cols-2 gap-3"
          ref={contentRef}
          style={{ maxHeight }}
        >
          {certifications?.map((cert) => (
            <Card key={cert.data.certificationName} className="max-w-[350px] flex flex-col">
              <CardContent className="px-8 space-y-4 flex-grow flex flex-col">
                <span className="text-terciary">{cert.data.date}</span>
                <CustomTooltip description={t("tooltips.viewCourse")}>
                  <Button variant="link" size="link" asChild className="text-base whitespace-normal break-words">
                    <a href={cert.data.link} target="_blank" rel="noopener noreferrer" >
                      {cert.data.certificationName}
                    </a>
                  </Button>
                </CustomTooltip>
              </CardContent>
              <CardFooter>
                <ul>
                  <li className="list-disc list-inside marker:text-terciary dark:text-muted-foreground text-sm">{cert.data.institute}</li>
                </ul>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t dark:from-background from-background transition-opacity duration-500 ${isExpanded ? 'opacity-0 h-0' : 'opacity-100 h-20'}`} />
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
  )
}
