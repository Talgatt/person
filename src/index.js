import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section>
      <Person img="44" name="john" job="developer" />
      <Person img="22" name="bob" job="designer">
        <p>
          Lorem ipsum dolor sit amet consecutetur, aidpising elit. asper
          tempora!
        </p>
      </Person>
      <Person img="56" name="david" job="the boss" />
    </section>
  );
};

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));
