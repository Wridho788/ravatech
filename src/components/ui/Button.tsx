import { cn } from '@/lib/utils'

export function Button({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'rounded-xl bg-primary px-6 py-3 text-white hover:opacity-90 transition',
        className
      )}
      {...props}
    />
  )
}
