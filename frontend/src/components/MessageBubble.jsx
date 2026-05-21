import { motion } from "framer-motion";


function MessageBubble({ message }) {

  const isUser = message.role === "user";

  return (

    <motion.div

      initial={{ opacity: 0, y: 15 }}

      animate={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.25 }}

      className={`w-full flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-4`}
    >

      <div

        className={`max-w-[75%] px-5 py-3 rounded-2xl shadow-md text-sm leading-relaxed break-words ${
          isUser
            ? "bg-blue-500 text-white rounded-br-sm"
            : "bg-white text-gray-800 rounded-bl-sm"
        }`}
      >

        {message.content}

      </div>

    </motion.div>
  );
}

export default MessageBubble;