'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useChat } from '@ai-sdk/react'

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  // useChat hook for streaming AI responses
  const { messages, sendMessage, status, error } = useChat({
    api: '/api/chat',
  })

  const isLoading = status === 'submitted' || status === 'streaming'

  // Scroll to bottom whenever messages update
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isLoading])

  const onSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      sendMessage({ text: input })
      setInput('')
    }
  }

  return (
    <>
      {/* Open Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[90] w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#4377FF]/20 hover:border-[#4377FF]/50 transition-all duration-500 shadow-2xl ${isOpen ? 'hidden' : 'flex'}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[100] w-[calc(100vw-3rem)] md:w-[400px] h-[500px] bg-zinc-950/80 border border-white/10 backdrop-blur-2xl rounded-2xl shadow-[0_0_60px_-15px_rgba(67,119,255,0.2)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#4377FF] animate-pulse" />
                <span className="text-xs font-mono text-white tracking-widest uppercase">System Core AI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>

            {/* Message Thread */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-hide">
              {messages.length === 0 && !error && (
                <p className="text-zinc-500 text-sm font-light text-center mt-auto mb-auto">
                  Initiate query. Ask about our architecture, commercial production, or systems.
                </p>
              )}

              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-[#4377FF] text-white rounded-tr-sm' 
                      : 'bg-white/5 text-zinc-300 border border-white/5 rounded-tl-sm'
                  }`}>
                    {/* If AI message is streaming, parts will incrementally appear */}
                    {m.content || m.parts?.map((part, index) => (
                      part.type === 'text' ? <span key={index}>{part.text}</span> : null
                    ))}
                  </div>
                </div>
              ))}

              {error && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl rounded-tl-sm px-4 py-3 text-sm leading-relaxed">
                    <strong>Connection Error:</strong> {error.message}
                  </div>
                </div>
              )}

              {isLoading && !error && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 rounded-xl rounded-tl-sm px-4 py-3 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={onSubmit} className="p-4 border-t border-white/10 bg-white/[0.02]">
              <div className="relative flex items-center">
                <input
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  placeholder="Type your query..."
                  className="w-full bg-black/50 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-white outline-none focus:border-[#4377FF]/50 transition-colors placeholder:text-zinc-600"
                />
                <button 
                  type="submit" 
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:bg-[#4377FF] hover:text-white transition-colors disabled:opacity-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}