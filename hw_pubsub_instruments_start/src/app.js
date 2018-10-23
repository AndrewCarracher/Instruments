const instruments = require('./data/instrument_families.js');
const InstrumentList = require('./views/picking_an_instrument_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const instrumentList = new InstrumentList(instruments);
  instrumentList.bindEvents();
});
