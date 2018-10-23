const PubSub = require('../helpers/pub_sub.js');

const InstrumentList = function(instruments) {
  this.instruments = instruments;
};


InstrumentList.prototype.bindEvents = function() {
  this.displayInstruments();
  const instrumentChoice = document.querySelector("#instrument-families");



  instrumentChoice.addEventListener('change', (event) => {

    const chosenInstrument = event.target.value;
    PubSub.publish("InstrumentView:instrument-chosen", chosenInstrument);
  })
};


InstrumentList.prototype.displayInstruments = function() {

  const result = document.querySelector("#instrument-families");

  for(i = 0; i < this.instruments.length; i++){
    let instrument = document.createElement('option');
    instrument.value = this.instruments[i].name;
    instrument.innerHTML = this.instruments[i].name;
    result.appendChild(instrument);
  }

};


module.exports = InstrumentList;
