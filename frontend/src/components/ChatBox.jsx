import { useState, useRef, useEffect } from "react";

import API from "../services/api";

import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";


function ChatBox() {

  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);


  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  }, [messages, loading]);


  const sendMessage = async () => {

    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input
    };

    setMessages((prev) => [...prev, userMessage]);

    const userInput = input;

    setInput("");

    setLoading(true);

    try {

      const response = await API.post("/chat", {
        message: userInput
      });

      const botMessage = {
        role: "assistant",
        content: response.data.response
      };

      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };


  return (

    <div className="w-full h-full bg-white flex flex-col">

      {/* Header */}
      <div className="bg-[#e8590c] text-white px-5 py-4 text-lg font-semibold flex justify-between items-center">

        <span>AI Admission Assistant</span>

      </div>


      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-100 flex flex-col">

        {messages.length === 0 && (

          <div className="text-center text-gray-400 mt-20 text-sm">

            Ask anything about admissions, fees, courses...

          </div>

        )}


        {messages.map((msg, index) => (

          <MessageBubble
            key={index}
            message={msg}
          />

        ))}


        {loading && <TypingIndicator />}

        <div ref={messagesEndRef} />

      </div>


      {/* Input */}
      <div className="p-4 border-t bg-white flex gap-2">

        <input

          type="text"

          placeholder="Type your question..."

          value={input}

          onChange={(e) => setInput(e.target.value)}

          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}

          className="flex-1 px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400 text-sm"
        />

        <button

          onClick={sendMessage}

          className="bg-[#e8590c] hover:bg-[#d4500c] text-white px-5 rounded-xl transition-all"
        >

          Send

        </button>

      </div>

    </div>
  );
}

export default ChatBox;