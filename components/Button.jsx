import React from 'react'

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = 'px-6 py-3 rounded-lg font-semibold transition-colors'
  const variants = {
    primary: 'bg-gold text-charcoal-dark hover:bg-gold-hover',
    ghost: 'bg-white/10 text-white hover:bg-white/20',
  }

  return (
    <button className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
