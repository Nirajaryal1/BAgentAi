import React from 'react'

const FAQ = () => {
  const faqs = [
    { q: 'How long does setup take?', a: 'Most restaurants are live within 2–3 weeks.' },
    { q: 'Do you manage posts?', a: 'Yes — content, posting, and reporting are included.' },
  ]

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="p-4 bg-white rounded-lg border">
              <summary className="font-semibold">{f.q}</summary>
              <p className="mt-2 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
