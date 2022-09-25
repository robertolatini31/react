import React from "react";
import LanguageContext from "../contexts/LanguageContext";
class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        Seleziona una lingua:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag it"
          onClick={() => this.context.onLanguageChange("italian")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
