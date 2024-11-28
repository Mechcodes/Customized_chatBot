import React from "react";

const CustomizationPanel = ({ customizations, setCustomizations }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomizations((prev) => ({ ...prev, [name]: value }));
  };

  const handleIconChange = (e) => {
    setCustomizations((prev) => ({ ...prev, buttonIcon: e.target.value }));
  };

  return (
    <div >
      <h2 className="font-bold text-2xl mb-4">Customize Chatbot</h2>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Send Button Icon:</label>
        <select
          value={customizations.buttonIcon} // Access buttonIcon from customizations
          onChange={handleIconChange}
          className="border p-2 rounded w-full"
        >
          <option value="➤">Arrow (➤)</option>
          <option value="🚀">Rocket (🚀)</option>
          <option value="✉️">Envelope (✉️)</option>
          <option value="📩">Letter (📩)</option>
          <option value="✔️">Checkmark (✔️)</option>
        </select>
      </div>

      <div className="mb-4">
        <label>Border Color:</label>
        <input
          type="color"
          name="borderColor"
          value={customizations.borderColor}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label>Border Radius:</label>
        <input
          type="text"
          name="borderRadius"
          value={customizations.borderRadius}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label>Chat Title Background:</label>
        <input
          type="color"
          name="titleBgColor"
          value={customizations.titleBgColor}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label>Bot Bubble Background:</label>
        <input
          type="color"
          name="botBubbleBgColor"
          value={customizations.botBubbleBgColor}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label>Bot Text Color:</label>
        <input
          type="color"
          name="botTextColor"
          value={customizations.botTextColor}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label>User Bubble Background:</label>
        <input
          type="color"
          name="userBubbleBgColor"
          value={customizations.userBubbleBgColor}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label>User Text Color:</label>
        <input
          type="color"
          name="userTextColor"
          value={customizations.userTextColor}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4  ">
        <label>Font:</label>
        <select
          name="font"
          value={customizations.font}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Georgia">Georgia</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
      </div>
    </div>
  );
};

export default CustomizationPanel;
