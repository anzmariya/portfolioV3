/**
 * Simple class name merger — no external deps needed.
 * Filters out falsy values and joins with a space.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
