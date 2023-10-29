import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.shiftKey) {
      setInputValue((prev) => `${prev}\n`);
    } else if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
      // TODO: Send message to the AI

      // TODO: Add the AI's response to the messages

      // TODO: Scroll to the bottom of the chat
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">My Awesome AI</h1>
      </header>
      <main className="flex-1 overflow-hidden flex flex-col pb-16">
        <div className="flex-1 overflow-y-scroll h-[65vh]">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user"
                  ? "justify-end mr-2"
                  : "justify-start ms-2"
              } mb-4`}
            >
              <pre
                className={`rounded-lg p-2  ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {message.text}
              </pre>
            </div>
          ))}
        </div>
        <div className="absolute mx-[5%] w-[90%] bottom-5 flex mt-4">
          <textarea
            onKeyDown={handleKeyDown}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="flex-1 text-black rounded-lg py-2 px-4 mr-2"
            placeholder="Type your message here..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white rounded-lg py-2 px-4"
          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
}
