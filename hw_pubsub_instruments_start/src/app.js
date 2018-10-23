const instruments = require('./data/instrument_families.js');
const InstrumentList = require('./views/picking_an_instrument_view.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const ChosenInstrument = require('./views/chosen_instrument.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const instrument = new InstrumentFamilies(instruments);
  instrument.bindEvents();

  const instrumentList = new InstrumentList(instruments);
  instrumentList.bindEvents();

  const chosenInstrument = new ChosenInstrument();
  chosenInstrument.bindEvents();
});
