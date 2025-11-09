import { Check, FileText, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "../ui/button"
import { CustomTooltip } from "./CustomTooltip"
import { useState } from "react";
import { toast } from "sonner";
import { email, linkedin, github } from "@/lib/const";
import type { lenguages } from "@/i18n/ui";
import { useTranslation } from "@/lib/utils";

export const ButtonsInfo = ({ lang }: { lang: keyof typeof lenguages }) => {
  const [copied, setCopied] = useState(false);
  const t = useTranslation(lang);

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
    toast(t("sonner.title"), {
      description: email,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  };

  return (
    <div className="flex items-center space-x-1">
      <CustomTooltip asChild description={t("tooltips.copyEmail")}>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          aria-label={t("tooltips.copyEmail")}
          className={copied ? "bg-chart-2" : ""}
        >
          {copied
            ? <Check className="w-6 h-6 text-foreground" />
            : <Mail className="w-6 h-6 text-terciary" />}
        </Button>
      </CustomTooltip>

      <CustomTooltip description={t("tooltips.viewGithub")}>
        <Button variant="ghost" size="icon" asChild aria-label={t("tooltips.viewGithub")}>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 text-terciary" />
          </a>
        </Button>
      </CustomTooltip>

      <CustomTooltip description={t("tooltips.viewLinkedin")}>
        <Button variant="ghost" size="icon" asChild aria-label={t("tooltips.viewLinkedin")}>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-terciary" />
          </a>
        </Button>
      </CustomTooltip>

      <CustomTooltip description={t("tooltips.viewResume")}>
        <Button variant="ghost" size="icon" asChild aria-label={t("tooltips.viewResume")}>
          <a
            href={lang === "es" ? "/pdf/cv-es.pdf" : "/pdf/cv-en.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="w-6 h-6 text-terciary" />
          </a>
        </Button>
      </CustomTooltip>
    </div>

  )
}
