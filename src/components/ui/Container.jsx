import { cn } from '../../utils/cn'

export function Container({ children, className, size = 'default' }) {
  const sizes = {
    sm:      'max-w-3xl',
    default: 'max-w-6xl',
    lg:      'max-w-7xl',
    full:    'max-w-full',
  }

  return (
    <div className={cn('mx-auto w-full px-6 md:px-8 lg:px-12', sizes[size], className)}>
      {children}
    </div>
  )
}
