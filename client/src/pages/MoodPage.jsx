import React from "react";
import "../styles/MoodPage.css";
import NavBar from "../components/NavBar";
import angryImage from "../images/angry.png";
import happyImage from "../images/happy.png";
import sadImage from "../images/sad.png";
import excitedImage from "../images/excited.png";
import anxiousImage from "../images/anxious.png";
import boredImage from "../images/bored.png";
import calmImage from "../images/calm.png";
import embarrassedImage from "../images/embarrassed.png";
import depressedImage from "../images/depressed.png";
import confusedImage from "../images/confused.png";
import { useNavigate } from "react-router-dom";

const moods = [
  { id: 1, name: "Angry", color: "#FF0000", image: angryImage },
  { id: 2, name: "Happy", color: "#FFF200", image: happyImage },
  { id: 3, name: "Sad", color: "#1E90FF", image: sadImage },
  { id: 4, name: "Excited", color: "#FFA500", image: excitedImage },
  { id: 5, name: "Anxious", color: "#FF4500", image: anxiousImage },
  { id: 6, name: "Bored", color: "#808080", image: boredImage },
  { id: 7, name: "Calm", color: "#00CED1", image: calmImage },
  { id: 8, name: "Embarrassed", color: "#FF69B4", image: embarrassedImage },
  { id: 9, name: "Depressed", color: "#4B0082", image: depressedImage },
  { id: 10, name: "Confused", color: "#8B4513", image: confusedImage },
];

const MoodPage = () => {
  const navigate = useNavigate();

  const handleMoodSelect = (mood) => {
    console.log("Selected mood:", mood);
    // navigate("/questionnaire");
    navigate("/generate-questions", { state: { mood } });
  };

  return (
    <>
      <NavBar />
      <div className="mood-selection-container">
        <h1 className="mood-question">How are you feeling today?</h1>
        <div className="mood-grid">
          {moods.map((mood) => (
            <button
              onClick={() => handleMoodSelect(mood.name)}
              key={mood.id}
              className="mood-button"
              style={{ color: mood.color }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = mood.color)
              }
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
            >
              <span className="mood-name">{mood.name}</span>
              <img
                src={mood.image}
                alt={`${mood.name} icon`}
                className="mood-image"
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default MoodPage;
