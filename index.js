/**
 * Ask the Universe - Core RNG Engine
 * Main entry point for the application
 */

const RandomOrgClient = require('./src/entropy_sources/random_org_client');
const ANUQRNGClient = require('./src/entropy_sources/anu_qrng_client');
const IBMQuantumWrapper = require('./src/entropy_sources/ibm_quantum_wrapper');

// Print a welcome message
console.log('---------------------------------------');
console.log('Ask the Universe - Core RNG Engine');
console.log('A transparent and verifiable randomness generator');
console.log('---------------------------------------');

// Example usage of the Random.org client
async function demonstrateRandomOrg() {
  console.log('\nDemonstrating Random.org API client:');
  console.log('(Note: You need to set a valid API key to run this example)');

  // Set your API key here
  const apiKey = process.env.RANDOM_ORG_API_KEY || 'YOUR_API_KEY_HERE';

  if (apiKey === 'YOUR_API_KEY_HERE') {
    console.log('\nPlease set your Random.org API key to run this demo.');
    console.log('You can get a free API key at https://api.random.org/');
    console.log('Set it in the environment variable RANDOM_ORG_API_KEY.');
    return;
  }

  const client = new RandomOrgClient(apiKey);

  try {
    console.log('\nGenerating 5 random integers between 1 and 100...');
    const result = await client.generateIntegers(5, 1, 100);

    console.log('\nResults:');
    console.log('Random integers:', result.random.data);
    console.log('Completion time:', result.random.completionTime);
    console.log('\nAPI Quota Information:');
    console.log('Bits used:', result.bitsUsed);
    console.log('Bits left:', result.bitsLeft);
    console.log('Requests left:', result.requestsLeft);
    console.log('Advisory delay (ms):', result.advisoryDelay);
  } catch (error) {
    console.error('\nError demonstrating Random.org API:', error.message);
  }
}

// Example usage of the ANU QRNG client
async function demonstrateANUQRNG() {
  console.log('\nDemonstrating ANU Quantum Random Number Generator API client:');
  console.log('(No API key required for this service)');

  const client = new ANUQRNGClient();

  try {
    console.log('\nGenerating 10 random uint8 values (0-255)...');
    const uint8Values = await client.generateUint8(10);
    console.log('Random uint8 values:', uint8Values);

    console.log('\nGenerating 5 random uint16 values (0-65535)...');
    const uint16Values = await client.generateUint16(5);
    console.log('Random uint16 values:', uint16Values);

    console.log('\nGenerating 3 random hex16 values...');
    const hexValues = await client.generateHex16(3);
    console.log('Random hex16 values:', hexValues);
  } catch (error) {
    console.error('\nError demonstrating ANU QRNG API:', error.message);
  }
}

// Example usage of the IBM Quantum wrapper
async function demonstrateIBMQuantum() {
  console.log('\nDemonstrating IBM Quantum Random Number Generator:');
  console.log('(Using local simulator - no API key required)');

  const client = new IBMQuantumWrapper({
    installDependencies: false  // Set to true first time to install dependencies
  });

  try {
    console.log('\nGenerating 8 random bits using IBM Quantum simulator...');
    const result = await client.generateRandomBits(8);

    console.log('\nResults:');
    console.log('Random bitstring:', result.random_bits);
    console.log('Random integer (0-255):', result.random_integer);
    console.log('Backend used:', result.backend);

    console.log('\nGenerating 4 random bytes...');
    const bytes = await client.getRandomBytes(4);

    console.log('Random bytes array:', Array.from(bytes));
  } catch (error) {
    console.error('\nError demonstrating IBM Quantum:', error.message);
    console.log('This could be due to missing Python dependencies.');
    console.log('Try installing qiskit with: pip install qiskit qiskit-ibmq-provider');
  }
}

// Main function
async function main() {
  try {
    await demonstrateRandomOrg();
    await demonstrateANUQRNG();
    await demonstrateIBMQuantum();
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

// Run the main function
main().then(() => {
  console.log('\n---------------------------------------');
  console.log('Demo completed.');
  console.log('---------------------------------------');
});