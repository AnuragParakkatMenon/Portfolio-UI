import React, { useState, useRef, useEffect } from "react"

const RagChat = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi 👋 I'm Anurag AI. Ask me anything about his experience, projects, or skills."
    }
  ])

  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const messagesEndRef = useRef(null)

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setLoading(true)

    try {
      const response = await fetch("https://portfolio-rag-api-production.up.railway.app/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          question: input
        })
      })

      const data = await response.json()

      const botMessage = {
        role: "assistant",
        content: data.answer
      }

      setMessages(prev => [...prev, botMessage])
    } catch {
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Something went wrong. Please try again."
        }
      ])
    }

    setLoading(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  return (
    <div className="flex flex-col h-full">

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm ${
                msg.role === "user"
                  ? "bg-purple-600 text-white"
                  : "bg-zinc-800 text-gray-200 border border-purple-500/20"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-zinc-800 px-4 py-3 rounded-2xl text-sm border border-purple-500/20 animate-pulse">
              Anurag AI is thinking...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="mt-4 flex gap-3">

        <input
          type="text"
          placeholder="Ask about skills, projects, experience..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-zinc-800 text-white px-4 py-3 rounded-xl outline-none border border-purple-500/20 focus:border-purple-500"
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-purple-600 px-6 py-3 rounded-xl font-medium hover:bg-purple-500 transition disabled:opacity-50"
        >
          Send
        </button>

      </div>
    </div>  
  )
}

export default RagChat
