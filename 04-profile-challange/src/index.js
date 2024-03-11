import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="profile_picture.jpg" alt="profile" />;
}

function Intro() {
  return (
    <div>
      <h1>Hi I'm Dominika</h1>
      <p>
        Hi my name is Dominika. I am Information Technology student at
        Univeristy of Life Sciences in Warsaw. My hobbies are gym, playing
        guitar and everything related with Spain and spanish language.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML+CSS" color="lightblue" emoji="💪" />
      <Skill name="JavaScript" color="yellow" emoji="💪" />
      <Skill name="Shopify Liquid" color="lightgreen" emoji="👍" />
      <Skill name="Web Design" color="orangered" emoji="👍" />
      <Skill name="Git and GitHub" color="green" emoji="👶" />
      <Skill name="React" color="cyan" emoji="👶" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
