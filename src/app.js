/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var pronouns = ["The", "A", "Two", "Some", "One"];
  var adjs = [
    "great",
    "big",
    "fat",
    "dark",
    "black",
    "white",
    "bright",
    "lonely"
  ];
  var nouns = ["chicken", "pork", "car", "granny", "mouse", "rabbit", "robot"];

  for (let i = 0; i < 1000; i++) {
    const randomPronoun = () => {
      return pronouns[Math.floor(Math.random() * pronouns.length)];
    };

    const randomAdj = () => {
      return adjs[Math.floor(Math.random() * adjs.length)];
    };

    const randomNoun = () => {
      return nouns[Math.floor(Math.random() * nouns.length)];
    };

    let nameDomain = randomPronoun() + randomAdj() + randomNoun() + ".com";
    let secondNameDomain =
      randomPronoun() + randomAdj() + randomNoun() + ".net";

    console.log(nameDomain);
    console.log(secondNameDomain);
  }
};
