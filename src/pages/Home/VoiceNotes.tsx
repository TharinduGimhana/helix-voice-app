import React, { useEffect, useState } from "react";
import "./VoiceNotes.css";

type NoteContent = {
  micIcon: string;
  title: string;
  description: string;
  subtitle: string;
  subheader: string;
  listOne: string;
  listTow: string;
  listThree: string;
  paragraph: string;
};

const VoiceNotes: React.FC = () => {

  const [noteContent, setNoteContent] = useState<NoteContent>({
    micIcon: "",
    title: "",
    description: "",
    subtitle: "",
    subheader: "",
    listOne: "",
    listTow: "",
    listThree: "",
    paragraph: "",
  });

  useEffect(() => {
    fetch("/data/home/voicenote.json")
      .then(response => response.json())
      .then(data => setNoteContent(data))
      .catch(error => console.error("Error loading contents:", error));
  }, []);

  return (
    <div className="container-voicenotes">
      <div className="image-container-voicenotes">
        <img
          src={noteContent.micIcon}
          alt="Microphone Icon"
          className="microphone-icon"
        />
      </div>

      <div className="content-voicenotes">
        <h2 className="title">{noteContent.title}</h2>

        <p className="description">
          {noteContent.description}
        </p>

        <h3 className="subtitle"> {noteContent.subtitle}</h3>
        <h4>{noteContent.subheader}</h4>
        <ul className="features">
          <li><span className="bullet">●</span>{noteContent.listOne}</li>
          <li><span className="bullet">●</span>{noteContent.listTow} </li>
          <li><span className="bullet">●</span>{noteContent.listThree}</li>
        </ul>

        <p className="footer-text">
          {noteContent.paragraph}
        </p>
      </div>
    </div>
  );
};

export default VoiceNotes;
