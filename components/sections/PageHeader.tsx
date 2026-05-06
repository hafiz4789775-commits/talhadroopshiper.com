import { cn } from '@/lib/utils'

type PageHeaderProps = {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function PageHeader({
  title,
  subtitle,
  align = 'center',
  className,
}: PageHeaderProps) {
  return (
    <section className={cn('px-4 pt-28 md:px-8 lg:px-12', className)}>
      <div
        className={cn(
          'mx-auto max-w-4xl',
          align === 'center' ? 'text-center' : 'text-left'
        )}
      >
        <h1 className="text-balance text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-r from-primary via-cyan-200 to-secondary bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        {subtitle ? (
          <p className="mt-5 text-pretty text-lg text-gray-300 sm:text-xl">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  )
}

