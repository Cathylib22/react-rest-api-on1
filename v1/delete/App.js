import React, { useState } from "react";
import logo from "./logo.svg";
import UserList from "./UserList";
import UserPost from "../v1/Post";
import "./style.css";

function App() {
  // State to store user input
  const [inputValue, setInputValue] = useState("");

  //1. define the state variables
  const [showForm, setShowForm] = useState(false);

  // Event handler to update input value
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Event handler to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can save the user input or perform other actions here
    console.log("User input:", inputValue);
    console.log("like number:");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          height="68"
          width="68"
          className="App-logo"
          alt="logo"
        />
        <h1>{appTitle}</h1>

        <button
          className="btn btn-large, btn-open"
          // 3. Update the state variables.
          // must use the state setter func via React, for re-rendering the UI
          onClick={() => setShowForm((show) => !show)}
        >
          Share a fact
        </button>

        {/* 2. Use the state variables */}
        {showForm ? <NewFactForm /> : null}

        <form class="fact-form hidden">
          <intput type="text" placeholder="Share a fact with the world..." />
          <span>200</span>
          <input type="text" placeholder="Trustworthy source..." />

          <select>
            <option value="">Choose Category:</option>
            <option value="technology">Technology</option>
            <option value="science">Science</option>
            <option value="finance">Finance</option>
          </select>
          <button class="btn btn-large">Post</button>
        </form>

        <main className="main">
          <CategoryFilter />
          <FactList />
        </main>

        <p>
          <UserList />
          <UserPost />
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn On_On... I'm Here!
        </a>
      </header>

      <form onSubmit={handleSubmit}>
        <label>
          Enter something:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact form</form>;
}

function CategoryFilter() {
  return (
    <aside>
      <ul>
        <li className="category">
          <button className="btn btn-all-categories">ALL</button>
        </li>

        {CATEGORIES.map((cat) => (
          <li key={cat.name} className="category">
            <button
              className="btn btn-category"
              style={{ backgroundColor: cat.color }}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Factlist() {
  const facts = initalFacts;

  return (
    <section>
      <ul className="fact-list">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} />
        ))}
      </ul>
      <p>There are {facts.length} facts in the database. Add your own!</p>
    </section>
  );
}

function Fact({ fact, test }) {
  return (
    <li className="fact">
      <p>
        {fact.text}
        <a classNamew="source" href={fact.source} target="_blank">
          {Source}
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name == fact.category)
            .color,
        }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button> {fact.votesInteresting}</button>
        <button> {fact.votesMindblowing}</button>
        <button> {fact.votesFalse}</button>
      </div>
    </li>
  );
}

export default App;
