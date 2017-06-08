import './index.css'
import numeral from 'numeral';

let courseValue = numeral(1000).format('0,0.00');
console.log(`I would like to pay R${ courseValue } for this course`); // eslint-disable-line no-console
