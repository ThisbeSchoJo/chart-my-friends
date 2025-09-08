import React, { useState } from "react";

const PersonalityForm = () => {
  const [name, setName] = useState("");
  const [introvert, setIntrovert] = useState(50);

  return (
    <div>
      <h2>Personality Form</h2>
      <label>
        Your Name:
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <div>
        <label>
          Introversion: {introvert}%
          <input
            type="range"
            min="0"
            max="100"
            value={introvert}
            onChange={(e) => setIntrovert(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default PersonalityForm;
