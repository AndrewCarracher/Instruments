const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function () {
  this.findInstrument();
};

InstrumentFamilies.prototype.findInstrument = function () {
  PubSub.subscribe("InstrumentView:instrument-chosen", (event) => {

    const instrument = event.detail;

    console.log(event.detail);


  var result = "";

  for(i = 0; i < this.data.length; i++){

    if(this.data[i].name == instrument){
      result = this.data[i];
    }
  }
  PubSub.publish("Instrument:instrument-details", result);
})
};

module.exports = InstrumentFamilies;
