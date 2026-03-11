import clsx from 'clsx'

export const TopicsList = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(['flex flex-col md:flex-row md:items-center gap-2 md:gap-8', className])}>
      <p className="flex gap-2">
        <span className="h-3 w-3 md:h-4 md:w-4 aspect-square rounded-full bg-black"></span>
        <span className="text-black tracking-wide uppercase text-nowrap text-sm md:text-base">
          Шинжлэх ухаан
        </span>
      </p>
      <p className="flex gap-2">
        <span className="h-3 w-3 md:h-4 md:w-4 aspect-square rounded-full bg-indigo-400"></span>
        <span className="text-black tracking-wide uppercase text-nowrap text-sm md:text-base">
          Технологи
        </span>
      </p>
      <p className="flex gap-2">
        <span className="h-3 w-3 md:h-4 md:w-4 aspect-square rounded-full bg-orange-400"></span>
        <span className="text-black tracking-wide uppercase text-nowrap text-sm md:text-base">
          Урлаг
        </span>
      </p>
    </div>
  )
}
