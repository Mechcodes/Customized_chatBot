import React, { useState } from "react";
import CustomizationPanel from "./Components/CustomizationPanel.jsx";
import ChatBot from "./Components/ChatBot.jsx";

const App = () => {
  const [customizations, setCustomizations] = useState({
    
    buttonIcon: ">",
    borderColor: "#000000",
    borderRadius: "10px",
    titleBgColor: "#4a90e2",
    botBubbleBgColor: "#f1f0f0",
    botTextColor: "#000000",
    userBubbleBgColor: "#0078ff",
    userTextColor: "#ffffff",
    font: "Arial",
  });

  const [isPanelVisible, setIsPanelVisible] = useState(false);

  const togglePanel = () => {
    setIsPanelVisible((prev) => !prev);
  };

  return (
    <div className="relative flex flex-col h-screen">
      <div className="p-4">
        <button
          onClick={togglePanel}
          className="h-10 bg-blue-600 text-white px-4 py-2 rounded"
        >
          {isPanelVisible ? "Hide Panel" : "Show Panel"}
        </button>
      </div>

      {isPanelVisible && (
        <div className="bg-gray-100 p-4 w-2/4 h-fit scroll-auto shadow-md">
          <CustomizationPanel
            customizations={customizations}
            setCustomizations={setCustomizations}
          />
        </div>
      )}

      <div
        className="absolute top-0 right-10 h-full"
        style={{ width: "400px" }} 
      >
        <ChatBot customizations={customizations} />
      </div>
    </div> 
  );
};

export default App;
