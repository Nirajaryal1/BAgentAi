"use client"

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQs = [
  {
    question: "How quickly can we get setup?",
    answer: "We can have your AI phone agent and initial menu optimization live within 48-72 hours after our onboarding call. We handle all the technical setup."
  },
  {
    question: "Does the AI sound robotic?",
    answer: "Not at all. We use the latest voice synthesis technology that includes natural pauses, intonation, and even 'ums' to sound indistinguishable from a human staff member."
  },
  {
    question: "What happens if the AI can't answer a question?",
    answer: "Our system is trained to politely escalate complex or unknown queries. It can take a message, forward the call to a manager, or send you an SMS alert instantly."
  },
  {
    question: "Do I need to switch my POS system?",
    answer: "No. We integrate with most major POS systems (Toast, Square, Clover, etc.) for online ordering. For phone orders, the AI can either input directly or send orders to your kitchen printer."
  },
  
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-charcoal-dark mb-6"
          >
            Frequently Asked <span className="text-cabernet">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Everything you need to know about automating your restaurant's growth.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border transition-all duration-300 rounded-xl overflow-hidden ${
                openIndex === index
                  ? 'border-gold bg-white shadow-lg scale-[1.02]'
                  : 'border-gray-200 bg-white hover:border-gold/50'
              }`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-charcoal-dark' : 'text-gray-600'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gold" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      {Array.isArray(faq.answer) ? (
                        faq.answer.map((para, i) => (
                          <p key={i} className="text-gray-500 leading-relaxed mb-3">
                            {para}
                          </p>
                        ))
                      ) : (
                        <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <button className="inline-flex items-center text-cabernet font-bold hover:underline group">
            <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Chat with our AI Support
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
