interface TimelineProps {
  date: {
    start: string,
    end: string,
  }
  children: React.ReactNode
}

export const TimeLine = ({ date, children }: TimelineProps) => {
  return (
    <div className="md:flex list-none">
      <div className="w-full md:w-24 flex-shrink-0 text-sm text-foreground relative">
        <div className="pt-2">
          {date.start} {date.end}
        </div>
        <div className="absolute top-[15px] right-[-3px] w-2 h-2 md:bg-terciary rounded-full"></div>
        <div className="absolute top-9 right-0 bottom-0 md:border bg-muted"></div>
      </div>

      {children}
    </div>
  )
}
