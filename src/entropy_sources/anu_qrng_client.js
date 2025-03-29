/**
 * ANU Quantum Random Number Generator API client
 * Uses the ANU QRNG API to generate true random numbers from quantum fluctuations of vacuum
 * API Documentation: https://qrng.anu.edu.au/API/api-demo.php
 */

const fetch = require('node-fetch');

class ANUQRNGClient {
  /**
   * Create a new ANU QRNG API client
   * Note: No API key is required
   */
  constructor() {
    this.apiUrl = 'https://qrng.anu.edu.au/API/jsonI.php';
  }

  /**
   * Generate random uint8 values (0-255)
   * @param {number} count - Number of values to generate (1-1024)
   * @returns {Promise<Array<number>>} - Array of uint8 values
   */
  async generateUint8(count) {
    if (count < 1 || count > 1024) {
      throw new Error('Count must be between 1 and 1024');
    }

    const result = await this._makeRequest({
      length: count,
      type: 'uint8',
    });

    return result.data;
  }

  /**
   * Generate random uint16 values (0-65535)
   * @param {number} count - Number of values to generate (1-1024)
   * @returns {Promise<Array<number>>} - Array of uint16 values
   */
  async generateUint16(count) {
    if (count < 1 || count > 1024) {
      throw new Error('Count must be between 1 and 1024');
    }

    const result = await this._makeRequest({
      length: count,
      type: 'uint16',
    });

    return result.data;
  }

  /**
   * Generate random hex16 values (4-character hex strings)
   * @param {number} count - Number of values to generate (1-1024)
   * @returns {Promise<Array<string>>} - Array of hex16 values
   */
  async generateHex16(count) {
    if (count < 1 || count > 1024) {
      throw new Error('Count must be between 1 and 1024');
    }

    const result = await this._makeRequest({
      length: count,
      type: 'hex16',
    });

    return result.data;
  }

  /**
   * Make a request to the ANU QRNG API
   * @private
   * @param {Object} params - Parameters for the request
   * @returns {Promise<Object>} - Parsed API response
   */
  async _makeRequest(params) {
    const url = new URL(this.apiUrl);
    
    // Add parameters to URL
    url.searchParams.append('length', params.length);
    url.searchParams.append('type', params.type);
    
    try {
      const response = await fetch(url.toString());
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(`API error: ${data.message || 'Unknown error'}`);
      }
      
      return data;
    } catch (error) {
      throw new Error(`Error fetching quantum random data: ${error.message}`);
    }
  }

  /**
   * Get a single random byte (0-255)
   * @returns {Promise<number>} - A single uint8 value
   */
  async getRandomByte() {
    const bytes = await this.generateUint8(1);
    return bytes[0];
  }

  /**
   * Generate a random integer between min and max (inclusive)
   * @param {number} min - Minimum value (inclusive)
   * @param {number} max - Maximum value (inclusive)
   * @returns {Promise<number>} - Random integer
   */
  async getRandomInt(min, max) {
    if (min >= max) {
      throw new Error('Min must be less than max');
    }
    
    // Calculate the range and required bytes
    const range = max - min + 1;
    
    if (range <= 256) {
      // Can use a single uint8
      const value = await this.getRandomByte();
      return min + (value % range);
    } else {
      // Need to use uint16
      const values = await this.generateUint16(1);
      return min + (values[0] % range);
    }
  }
}

module.exports = ANUQRNGClient;