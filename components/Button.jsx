import React from 'react'

const Button = ({ children, variant = 'primary', className = '', href, ...props }) => {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors'
  const variants = {
    primary: 'bg-gold text-charcoal-dark hover:bg-gold-hover',
    ghost: 'bg-white/10 text-white hover:bg-white/20',
  }

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`.trim()

  if (href) {
    // Render as anchor for navigation/links
    // Avoid forwarding button-only props to anchor
    const { type, ...rest } = props
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
