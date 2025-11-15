import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function ExperienceHeader({ exp }: any) {
  const { language, t } = useLanguage()

  const formatDate = (date: string | null) => {
    if (!date) return t.experience.present
    const [year, month] = date.split("-")
    return `${month}/${year}`
  }

  return (
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Image
            src={exp.icon}
            alt="Experience icon"
            width={30}
            height={30}
            className="rounded-md object-cover"
          />
        </div>

        <div>
          <h3 className="text-xl font-bold">{exp.position[language]}</h3>
          <p className="text-muted-foreground">{exp.company}</p>
        </div>
      </div>

      <div className="text-sm text-muted-foreground whitespace-nowrap">
        {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
      </div>
    </div>
  )
}
