import { cn } from '../../utils/cn'

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: [
    'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-semibold',
    'text-paragraph hover:text-heading transition-all duration-300',
    'hover:bg-border/40 active:scale-[0.98]',
  ].join(' '),
  icon: [
    'inline-flex items-center justify-center w-10 h-10 rounded-xl',
    'text-paragraph hover:text-heading border border-border',
    'hover:border-primary/50 hover:bg-surface transition-all duration-300',
    'hover:scale-105 active:scale-95',
  ].join(' '),
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  children,
  variant = 'primary',
  size,
  className,
  as: Tag = 'button',
  href,
  target,
  rel,
  onClick,
  disabled,
  type = 'button',
  ...rest
}) {
  const props = {
    className: cn(variants[variant], size && variant !== 'icon' && sizes[size], className),
    onClick,
    disabled,
    ...rest,
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Tag type={type} {...props}>
      {children}
    </Tag>
  )
}
