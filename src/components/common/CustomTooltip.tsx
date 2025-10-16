import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { type ComponentPropsWithoutRef } from "react"


interface Props extends ComponentPropsWithoutRef<typeof TooltipTrigger> {
  description: string;
  children: React.ReactNode;
}

export const CustomTooltip = ({ description, children, ...rest }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger {...rest}>{children}</TooltipTrigger>
      <TooltipContent>
        <p className="text-sm">{description}</p>
      </TooltipContent>
    </Tooltip>
  )
}
