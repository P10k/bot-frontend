import { useState } from "react";

import ChatBox from "./components/ChatBox";
import chat_icon from "./assets/chat_icon.png";


function App() {

  const [open, setOpen] = useState(false)

  return (

    <div>

      {/* Floating Button */}
      <button

        onClick={() => setOpen(!open)}

        className="fixed bottom-5 right-5 w-16 h-16 rounded-full bg-[#e8590c] text-white shadow-2xl hover:bg-[#d64e00] transition-all z-50"
      >

        <img
          src={chat_icon}
          alt="Chat Icon"
          className="w-8 h-8 mx-auto my-auto"
        />

      </button>


      {/* Chat Widget */}
      {open && (

        <div className="fixed bottom-24 left-2 sm:left-auto sm:right-5 w-[95vw] sm:w-[380px] h-[60vh] sm:h-[450px] bg-white rounded-3xl shadow-lg overflow-hidden z-50">

          <ChatBox />

        </div>

      )}

    </div>
  );
}

export default App;