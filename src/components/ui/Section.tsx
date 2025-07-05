import React from 'react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/layout'

export interface SectionProps {
  children: React.ReactNode
  className?: string
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  background?: 'white' | 'light' | 'dark' | 'transparent'
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  containerSize = 'xl',
  padding = 'lg',
  background = 'white',
}) => {
  const paddingClasses = {
    none: '',
    sm: 'py-4',
    md: 'py-8',
    lg: 'py-12',
    xl: 'py-16',
  }

  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-background-light',
    dark: 'bg-primary-dark text-white',
    transparent: 'bg-transparent',
  }

  return (
    <section className={cn(
      backgroundClasses[background],
      paddingClasses[padding],
      className
    )}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  )
}

export { Section }