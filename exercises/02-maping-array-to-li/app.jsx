import React from "react";
import ReactDOM from "react-dom";

const animals = ["Horse", "Turtle", "Elephant", "Monkey"];

/**
 * Change the content inside the map function
 **/
const animalsInHTML = animals.map((singleAnimal, index) => {
	return <li>{singleAnimal}</li>; //¿Por qué está mal?
});

ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));
