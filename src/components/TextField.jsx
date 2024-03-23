import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function TextField() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <textarea
        value={inputValue}
        name=""
        id=""
        cols="150"
        rows="50"
        onChange={(e) => setInputValue(e.target.value)}
      ></textarea>
    </div>
  );
}

export default TextField;
