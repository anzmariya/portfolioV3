import { cn } from '../../utils/cn'

export function Card({ children, className, hover = false, glass = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'rounded-2xl border border-border bg-surface p-6 transition-all duration-300',
        hover && 'hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 cursor-pointer',
        glass && 'bg-surface/60 backdrop-blur-sm',
        className
      )}
      style={{ boxShadow: hover ? undefined : 'var(--shadow-sm)' }}
    >
      {children}
    </div>
  )
}
