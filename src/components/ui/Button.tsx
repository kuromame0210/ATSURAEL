import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none luxury-button',
  {
    variants: {
      variant: {
        default: 'bg-primary-dark text-text-white hover:bg-primary-dark/90',
        green: 'bg-primary-green text-text-white hover:bg-primary-green/90',
        emerald: 'bg-accent-emerald text-text-white hover:bg-accent-emerald/90',
        sage: 'bg-accent-sage text-text-white hover:bg-accent-sage/90',
        outline: 'border border-primary-green text-primary-green hover:bg-primary-green hover:text-text-white',
        ghost: 'text-primary-dark hover:bg-background-light',
        link: 'text-accent-green underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 px-6 py-2',
        sm: 'h-10 px-4',
        lg: 'h-14 px-8',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }