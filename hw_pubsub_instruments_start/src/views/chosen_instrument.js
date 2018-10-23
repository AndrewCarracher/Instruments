const PubSub = require('../helpers/pub_sub.js');

const ChosenInstrument = function() {
};

ChosenInstrument.prototype.bindEvents = function() {
  PubSub.subscribe("Instrument:instrument-details", (event) => {

    const instrument = event.detail;

    const heading = document.querySelector("#result-heading");
    heading.textContent = instrument.name;

    const description = document.querySelector("#description-result");
    description.textContent = instrument.description

    const listDescription = document.querySelector("#list-heading");
    listDescription.textContent = "Instruments include:"


    const instrumentList = document.querySelector("ul");

    for(i=0; i< instrument.instruments.length; i++){

      const li = document.createElement("li");
      li.textContent = instrument.instruments[i];
      console.log(li);
      instrumentList.appendChild(li);
    }

  })

};

module.exports = ChosenInstrument;
