import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'light' | 'text'

export function buttonStyles(variant: Variant = 'primary', className?: string) {
  const variants: Record<Variant, string> = {
    primary: 'bg-ink text-white hover:bg-accent',
    secondary: 'border border-ink/25 bg-transparent text-ink hover:border-accent hover:text-accent',
    light: 'bg-[#f6f3ed] text-ink hover:bg-[#efddcb]',
    text: 'text-accent hover:text-ink px-0',
  }
  return cn('inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-bold transition-colors duration-200', variants[variant], className)
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: Variant }

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return <button className={buttonStyles(variant, className)} {...props} />
}
