import type { CollectionEntry } from 'astro:content'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '../ui/button'
import { CustomTooltip } from './CustomTooltip'
import { CustomHoverCard } from './CustomHoverCard'
import type { lenguages } from '@/i18n/ui'
import { useTranslation } from '@/lib/utils'

interface Props {
  info: CollectionEntry<"project">;
  skills?: CollectionEntry<"skill">[];
  currentLang: keyof typeof lenguages;
}

export const CardProject = ({ info, skills, currentLang }: Props) => {
  const t = useTranslation(currentLang);
  
  return (
    <Card>
      <CardHeader className='flex justify-between items-center min-h-[48px]'>
        <CardTitle className='text-xl font-titan-one font-normal'>
          {
            info.data.demoLink ?
              <CustomTooltip description={t("tooltips.viewWebsite")}>
                <Button variant="link" size="link" asChild>
                  <a href={info.data.demoLink} target="_blank" rel="noopener noreferrer">
                    {info.data.title}
                    <ExternalLink size={18} className='text-terciary' />
                  </a>
                </Button>
              </CustomTooltip>
              :
              info.data.title
          }
        </CardTitle>
        {
          info.data.githubLink &&
          <CustomTooltip description={t("tooltips.viewCode")}>
            <Button variant={"ghost"} size={'icon'} asChild>
              <a href={info.data.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className='w-6 h-6 text-terciary' />
              </a>
            </Button>
          </CustomTooltip>
        }
      </CardHeader>
      <CardContent className='pb-2'>
        <p className="mb-2">{info.data.description}</p>
        <ul className="text-sm text-muted-foreground list-disc list-inside">
          {info.data.descriptionTags.map((cont) => (
            <li key={cont}>{cont}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          {skills?.map((skill) => (
            <CustomHoverCard key={skill.id} skill={skill}>
              <Badge className='font-semibold cursor-help'>
                {skill.data.skill}
              </Badge>
            </CustomHoverCard>
          ))}
        </div>
        <Button variant="secondary" size="sm" asChild>
          <a href={`/${currentLang}/projects/${info.id.split("/")[1]}`}>
            Info
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
