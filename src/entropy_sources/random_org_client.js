/**
 * Random.org API client
 * Uses the JSON-RPC API to generate true random numbers from atmospheric noise
 * API Documentation: https://api.random.org/json-rpc/4/basic
 */

const fetch = require('node-fetch');

class RandomOrgClient {
  /**
   * Create a new Random.org API client
   * @param {string} apiKey - Your Random.org API key
   */
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiUrl = 'https://api.random.org/json-rpc/4/invoke';
  }

  /**
   * Generate random integers
   * @param {number} count - Number of integers to generate (1-10000)
   * @param {number} min - Lower bound (inclusive)
   * @param {number} max - Upper bound (inclusive)
   * @param {Object} options - Additional options
   * @returns {Promise<Object>} - Result object with random data and metadata
   */
  async generateIntegers(count, min, max, options = {}) {
    const params = {
      apiKey: this.apiKey,
      n: count,
      min: min,
      max: max,
      replacement: options.replacement !== false,
      base: options.base || 10,
    };

    return this._makeRequest('generateIntegers', params);
  }

  /**
   * Generate random decimal fractions
   * @param {number} count - Number of decimals to generate (1-10000)
   * @param {number} decimalPlaces - Number of decimal places (1-20)
   * @param {Object} options - Additional options
   * @returns {Promise<Object>} - Result object with random data and metadata
   */
  async generateDecimalFractions(count, decimalPlaces, options = {}) {
    const params = {
      apiKey: this.apiKey,
      n: count,
      decimalPlaces: decimalPlaces,
      replacement: options.replacement !== false,
    };

    return this._makeRequest('generateDecimalFractions', params);
  }

  /**
   * Generate random bytes (blobs)
   * @param {number} count - Number of bytes to generate (1-1048576)
   * @param {Object} options - Additional options
   * @returns {Promise<Object>} - Result object with random data and metadata
   */
  async generateBlobs(count, options = {}) {
    const params = {
      apiKey: this.apiKey,
      n: count,
      size: options.size || 8, // Default to 8 bits per blob (1 byte)
      format: options.format || 'base64',
    };

    return this._makeRequest('generateBlobs', params);
  }

  /**
   * Generate random UUIDs (version 4)
   * @param {number} count - Number of UUIDs to generate (1-1000)
   * @returns {Promise<Object>} - Result object with random data and metadata
   */
  async generateUUIDs(count) {
    const params = {
      apiKey: this.apiKey,
      n: count,
    };

    return this._makeRequest('generateUUIDs', params);
  }

  /**
   * Make a request to the Random.org API
   * @private
   * @param {string} method - API method to call
   * @param {Object} params - Parameters for the method
   * @returns {Promise<Object>} - Parsed API response
   */
  async _makeRequest(method, params) {
    const requestBody = {
      jsonrpc: '2.0',
      method: method,
      params: params,
      id: Date.now(),
    };

    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(`API error: ${data.error.message} (code: ${data.error.code})`);
      }

      return data.result;
    } catch (error) {
      throw new Error(`Error fetching random data: ${error.message}`);
    }
  }
}

module.exports = RandomOrgClient;