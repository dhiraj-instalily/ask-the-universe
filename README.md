# Ask the Universe

A transparent, verifiable, and ethically sourced randomness generator that blends multiple entropy sources, provides real-time transparency, and offers a developer-friendly API.

## Project Overview

This project aims to build a high-quality random number generation service with these key features:

- **Multi-Source Entropy Mixing**: Blend data from atmospheric noise, quantum sources, and local device sensors
- **Transparency Dashboard**: Real-time visualization of entropy sources and statistical quality tests
- **Developer-First API**: Easy-to-use interfaces for accessing high-quality randomness

## Current Status

This project is in early development. Currently implemented:

- Research on Random.org API completed
- Basic Random.org API client implemented in JavaScript
- Research on ANU Quantum Random Numbers API completed
- Basic ANU QRNG API client implemented in JavaScript
- Research on IBM Quantum services for randomness generation completed
- Basic IBM Quantum RNG implementation with Python and JavaScript wrapper
- Research on microphone ambient noise for entropy collection completed
- Microphone entropy collector implemented with Web Audio API
- Interactive demo for visualizing microphone entropy collection
- Camera entropy collector implemented for capturing random photon data
- Interactive demo for visualizing camera entropy collection

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- Python 3.x (for IBM Quantum integration)
- Modern web browser with microphone and camera support (for local entropy collection)
- An API key from Random.org (for using the Random.org entropy source)
- Optional: IBM Quantum account (for using quantum hardware)

### Installation

1. Clone this repository

   ```
   git clone https://github.com/dhiraj-instalily/ask-the-universe.git
   cd ask-the-universe
   ```

2. Install Node.js dependencies

   ```
   npm install
   ```

3. Install Python dependencies (for IBM Quantum)

   ```
   pip install qiskit qiskit-ibmq-provider
   ```

4. Set up API keys

   ```
   export RANDOM_ORG_API_KEY="your-random-org-api-key-here"
   export IBM_QUANTUM_TOKEN="your-ibm-quantum-token-here"
   ```

5. Run the demo
   ```
   npm start
   ```

### Trying the Entropy Collection Demos

#### Microphone Entropy Demo

1. Open the demo HTML file in your browser:

   ```
   open demos/microphone_entropy_demo.html
   ```

2. Click "Initialize Microphone" to request microphone access

3. Experiment with collecting entropy from ambient noise

#### Camera Entropy Demo

1. Open the demo HTML file in your browser:

   ```
   open demos/camera_entropy_demo.html
   ```

2. Grant camera access permission when prompted

3. Experiment with different entropy extraction methods:

   - LSB (Least Significant Bits): Extracts randomness from noise in the camera sensor
   - Frame Difference: Captures changes between consecutive frames

4. Use the generated entropy to produce random numbers

## Project Structure

```
ask-the-universe/
├── demos/                 # Interactive demos
│   ├── microphone_entropy_demo.html
│   └── camera_entropy_demo.html
├── src/
│   ├── entropy_sources/   # Implementations of various entropy sources
│   │   ├── random_org_client.js
│   │   ├── anu_qrng_client.js
│   │   ├── ibm_quantum_wrapper.js
│   │   ├── ibm_quantum_rng.py
│   │   ├── microphone_entropy.js
│   │   └── camera_entropy.js
│   └── research/          # Research findings and documentation
│       ├── random_org_api.md
│       ├── anu_qrng_api.md
│       ├── ibm_quantum_research.md
│       ├── microphone_entropy.md
│       └── camera_entropy_research.md
├── index.js               # Main entry point
├── package.json           # Project dependencies
└── README.md              # This file
```

## Contributing

This project is currently in early development. If you're interested in contributing, please check the task list in `core_rng_engine_task_list.md` for areas that need work.

## License

This project is licensed under the MIT License - see the LICENSE file for details.