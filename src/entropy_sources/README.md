# Entropy Sources

This directory contains implementations of various entropy sources used by the "Ask the Universe" random number generator.

## External API Sources

### Random.org Client (`random_org_client.js`)

Client for the Random.org API, which provides true random numbers based on atmospheric noise.

- Implements the JSON-RPC API (v4)
- Requires an API key from Random.org
- Supports integers, decimal fractions, and binary data generation
- Includes API quota monitoring

### ANU QRNG Client (`anu_qrng_client.js`)

Client for the Australian National University's Quantum Random Number Generator API.

- Based on quantum fluctuations of vacuum
- No API key required
- Supports uint8, uint16, and hex16 data types
- Limited to generating 1-1024 values per request

### IBM Quantum Wrapper (`ibm_quantum_wrapper.js` and `ibm_quantum_rng.py`)

Interface to IBM Quantum's services for generating random numbers using quantum computers.

- Uses quantum circuits with Hadamard gates to create superpositions
- Can run on simulators or real quantum hardware
- Requires Python with Qiskit library installed
- Optional IBM Quantum account for using real quantum hardware

## Local Device Sources

### Microphone Entropy Collector (`microphone_entropy.js`)

Collects entropy from ambient noise using the device's microphone.

- Uses Web Audio API to access audio data
- Various extraction methods (frequency analysis, raw samples)
- Works in web browsers with microphone permission
- Interactive demo available in `demos/microphone_entropy_demo.html`

### Camera Entropy Collector (`camera_entropy.js`)

Collects entropy from camera sensor noise and visual input.

- Uses browser APIs to access webcam data
- Extracts randomness from least significant bits of pixel data
- Also supports frame difference methods
- Works in web browsers with camera permission
- Interactive demo available in `demos/camera_entropy_demo.html`

## Usage Notes

Each entropy source implements a common pattern of methods for generating random data, with specific implementations suited to the nature of the source. This allows them to be used interchangeably or combined in an entropy pool.

For the most robust randomness, multiple entropy sources should be combined using cryptographically secure methods, which will be implemented in future updates to this project.