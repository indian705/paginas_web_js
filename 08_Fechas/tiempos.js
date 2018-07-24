// Import ES6
// import { moment } from './node_modules/moment/moment.js'
// import * as moment from './node_modules/moment/moment.js';
// import './node_modules/moment/locale/es.js';

// Import node
let moment = require('moment');
require('moment/locale/es')

moment.locale('sp');
let fecha = moment()
console.log(fecha.format('D MMMM YYYY, h:mm:ss'))