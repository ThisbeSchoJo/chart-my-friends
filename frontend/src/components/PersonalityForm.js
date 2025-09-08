import React, { useState } from "react";

const PersonalityForm = () => {
  const [name, setName] = useState("");
  const [introvert, setIntrovert] = useState(50);
  const [intuitive, setIntuitive] = useState(50);
  const [thinking, setThinking] = useState(50);
  const [judging, setJudging] = useState(50);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      introvert,
      extrovert: 100 - introvert,
      intuitive,
      sensing: 100 - intuitive,
      thinking,
      feeling: 100 - thinking,
      judging,
      perceiving: 100 - judging,
    };
    console.log("Form data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <p>Extroversion: {100 - introvert}%</p>
      </div>

      <div>
        <label>
          Intuition: {intuitive}%
          <input
            type="range"
            min="0"
            max="100"
            value={intuitive}
            onChange={(e) => setIntuitive(e.target.value)}
          />
        </label>
        <p>Sensing: {100 - intuitive}%</p>
      </div>

      <div>
        <label>
          Thinking: {thinking}%
          <input
            type="range"
            min="0"
            max="100"
            value={thinking}
            onChange={(e) => setThinking(e.target.value)}
          />
        </label>
        <p>Feeling: {100 - thinking}%</p>
      </div>

      <div>
        <label>
          Judging: {judging}%
          <input
            type="range"
            min="0"
            max="100"
            value={judging}
            onChange={(e) => setJudging(e.target.value)}
          />
        </label>
        <p>Perceiving: {100 - judging}%</p>
      </div>

      <button type="submit">Create Profile</button>
    </form>
  );
};

export default PersonalityForm;
