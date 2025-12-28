import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text'
}

export function Button({
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-accent text-primary hover:brightness-110 font-medium shadow-sm hover:shadow-md',
    secondary: 'bg-transparent border-2 border-secondary text-primary hover:bg-secondary/5',
    text: 'bg-transparent text-primary underline-offset-4 hover:underline p-0'
  }
  
  return (
    <button
      className={cn(
        'rounded-xl px-8 py-3 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]',
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
