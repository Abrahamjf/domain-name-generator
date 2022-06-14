/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var pronoun = ["The", "A", "Two", "Some", "One"];
  var adj = [
    "great",
    "big",
    "fat",
    "dark",
    "black",
    "white",
    "bright",
    "lonely"
  ];
  var noun = ["chicken", "pork", "car", "granny", "mouse", "rabbit", "robot"];

  const randomPronoun = () => {
    return pronoun[Math.floor(Math.random() * pronoun.length)];
  };

  const randomAdj = () => {
    return adj[Math.floor(Math.random() * adj.length)];
  };

  const randomNoun = () => {
    return noun[Math.floor(Math.random() * noun.length)];
  };

  let nameDomain = [randomPronoun() + randomAdj() + randomNoun()];

  for (let i = 0; i > nameDomain.length; i++) {
    console.log(nameDomain + ".com");
  }
};
