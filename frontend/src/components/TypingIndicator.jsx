function TypingIndicator() {

  return (

    <div className="flex justify-start mb-4">

      <div className="bg-white px-4 py-3 rounded-2xl shadow-md">

        <div className="flex gap-2">

          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>

          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>

          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>

        </div>

      </div>

    </div>
  );
}

export default TypingIndicator;