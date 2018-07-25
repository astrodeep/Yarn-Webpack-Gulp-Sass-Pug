import "owl.carousel";
import "../modules/slider/slider";
import { parseNumber } from 'libphonenumber-js';
parseNumber('phoneNumber: 8 (800) 555 35 35.', 'RU');
import { formatNumber } from 'libphonenumber-js'
formatNumber('+12133734253', 'International');

