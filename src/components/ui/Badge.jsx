import { cn } from '../../utils/cn'

const variants = {
  default:   'bg-border/60 text-paragraph',
  primary:   'bg-primary/10 text-primary border border-primary/20',
  secondary: 'bg-secondary/10 text-secondary border border-secondary/20',
  accent:    'bg-accent/10 text-accent border border-accent/20',
  success:   'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20',
  outline:   'bg-transparent border border-border text-paragraph',
}

export function Badge({ children, variant = 'default', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-medium',
        'transition-colors duration-200',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
