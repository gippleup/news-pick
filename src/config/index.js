const path = require('path');
const envPath = path.resolve(__dirname, '../../.env') 

require('dotenv').config({
  path: envPath
});

const apiBase = process.env.REACT_APP_API_BASE

module.exports = {
  apiBase,
}