import { useState } from "react";

import ChatBox from "./components/ChatBox";


function App() {

  const [open, setOpen] = useState(false)

  return (

    <div>

      {/* Floating Button */}
      <button

        onClick={() => setOpen(!open)}

        className="fixed bottom-5 right-5 w-16 h-16 rounded-full bg-[#e8590c] text-white text-3xl shadow-2xl hover:bg-[#d64e00] transition-all z-50"
      >

        🤖

      </button>


      {/* Chat Widget */}
      {open && (

        <div className="fixed bottom-24 left-2 sm:left-auto sm:right-5 w-[95vw] sm:w-[380px] h-[60vh] sm:h-[450px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 z-50">

          <ChatBox />

        </div>

      )}

    </div>
  );
}

export default App;