import React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  options: SelectOption[]
  placeholder?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, options, placeholder, id, ...props }, ref) => {
    const generatedId = React.useId()
    const selectId = id || `select-${generatedId}`
    
    return (
      <div className="space-y-0.5">
        {label && (
          <label 
            htmlFor={selectId}
            className="text-sm font-medium text-primary-dark"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            id={selectId}
            className={cn(
              'flex h-5 w-full rounded border border-gray-300 bg-white px-1.5 py-0 text-xs ring-offset-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-gold focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 appearance-none pr-5',
              error && 'border-red-500 focus-visible:ring-red-500',
              className
            )}
            ref={ref}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option 
                key={option.value} 
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-1 top-1/2 -translate-y-1/2 h-2 w-2 text-text-secondary pointer-events-none" />
        </div>
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-text-secondary">{helperText}</p>
        )}
      </div>
    )
  }
)
Select.displayName = 'Select'

export { Select }