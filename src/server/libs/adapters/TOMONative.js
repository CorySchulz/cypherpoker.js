/**
* @file Native TOMOchain adapter for blockchain interactions such as balance retrieval, and
* transaction posting, and smart contract interactions.
*
* @version 0.5.1
* @author Patrick Bay
* @copyright MIT License
*/

const CryptocurrencyHandler = require("../CryptocurrencyHandler");
const path = require("path");
const filesystem = require("fs");

/**
* @class TOMO chain native adapter for blockchain interactions.
* @extends EventEmitter
*/
module.exports = class TOMONative extends CryptocurrencyHandler {

   /**
   * Creates a new instance of the native TOMO chain adapter.
   *
   * @param {Object} serverRef A reference to the server-exposed objects made available
   * to this class.
   * @param {Object} handlerConfig The configuration data for the handler instance, usually
   * a child object of the global application config.
   */
   constructor(serverRef, handlerConfig) {
      super(serverRef, handlerConfig);
   }


  toString() {
     return ("[object TOMONative]");
  }

}
