// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM     google translate api key
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
const options = [
  {
    label: "Africans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Dutch",
    value: "nl",
  },
  {
    label: "Italian",
    value: "it",
  },
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Inserisci il testo</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        label="Scegli una lingua"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />

      <hr />
      <h3 className="ui header">Traduzione:</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
