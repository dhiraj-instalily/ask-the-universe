# Core RNG Engine with "Entropy Provenance" - Project Task List

## Project Overview

Building a transparent, verifiable, and ethically sourced randomness generator that blends multiple entropy sources, provides real-time transparency, and offers a developer-friendly API.

## Research Tasks

### 1. Entropy Sources Research

- [x] Research Random.org API (completed 2023-10-10)
  - [x] Explore API documentation and rate limits
  - [x] Investigate methods to access atmospheric noise data
  - [x] Determine pricing and usage restrictions
- [x] Research Quantum APIs (completed 2023-10-11)
  - [x] Investigate ANU Quantum Random Numbers API (completed 2023-10-11)
  - [x] Explore IBM Quantum services for randomness generation (completed 2023-10-11)
- [ ] Research Local Device Entropy Collection
  - [x] Study browser APIs for accessing microphone ambient noise (completed 2023-10-12)
  - [x] Investigate camera access for light sampling (completed 2023-10-13)
  - [ ] Research other device sensors usable for entropy (accelerometer, etc.)
- [ ] Document findings and chosen entropy sources

### 2. Technical Stack Research

- [ ] Evaluate Rust for entropy pooling
  - [ ] Research Rust cryptography libraries (ring, RustCrypto)
  - [ ] Study Rust to WebAssembly (WASM) compilation process
- [ ] Research cryptographic algorithms
  - [ ] Compare SHA-3 vs Blake2/3 for hashing
  - [ ] Study ChaCha20 and alternatives for stream cipher
  - [ ] Evaluate entropy mixing techniques and best practices
- [ ] Investigate statistical test suites
  - [ ] Study NIST Statistical Test Suite (STS)
  - [ ] Explore Dieharder test suite
  - [ ] Research ENT and TestU01 for entropy quality testing
- [ ] Document technology choices with rationale

## Design Tasks

### 3. System Architecture Design

- [ ] Design overall system architecture
  - [ ] Create component diagram
  - [ ] Document data flow between components
  - [ ] Define system boundaries and interfaces
- [ ] Design entropy collection subsystem
  - [ ] Define entropy source abstraction
  - [ ] Design failover mechanisms for unavailable sources
  - [ ] Plan rate limiting and caching strategy
- [ ] Design entropy mixing subsystem
  - [ ] Define entropy pool management
  - [ ] Plan cryptographic pipeline
  - [ ] Design output formatting options
- [ ] Design API layer
  - [ ] Define API endpoints and parameters
  - [ ] Plan authentication and authorization
  - [ ] Design rate limiting and abuse prevention
- [ ] Document design decisions and alternatives considered

### 4. Dashboard Design

- [ ] Design transparency dashboard UI
  - [ ] Sketch main dashboard layout
  - [ ] Design entropy source visualization
  - [ ] Design statistical test visualization
  - [ ] Plan "randomness health" score display
- [ ] Design real-time data visualization
  - [ ] Research D3.js visualization techniques
  - [ ] Design time-series displays for entropy metrics
  - [ ] Plan interactive elements
- [ ] Design API documentation and playground
  - [ ] Plan interactive API testing interface
  - [ ] Design API usage examples
  - [ ] Plan API metrics visualization
- [ ] Document UI/UX decisions and wireframes

## Implementation Tasks

### 5. Core Implementation

- [ ] Implement entropy source connectors
  - [x] Develop Random.org API client
  - [x] Implement quantum API clients
  - [x] Create local device entropy collectors
- [ ] Implement entropy mixing engine
  - [ ] Build entropy pooling mechanism
  - [ ] Implement cryptographic pipeline
  - [ ] Create output formatting modules
- [ ] Implement statistical tests
  - [ ] Develop basic statistical tests (Chi-squared, etc.)
  - [ ] Implement NIST STS subset
  - [ ] Create "randomness health" score calculator
- [ ] Document implementation details and code organization

### 6. API Implementation

- [ ] Implement REST API
  - [ ] Develop core API endpoints
  - [ ] Implement authentication and authorization
  - [ ] Create rate limiting mechanism
- [ ] Implement WebSocket API
  - [ ] Develop real-time random stream
  - [ ] Implement connection management
  - [ ] Create event-based notifications
- [ ] Implement API security features
  - [ ] Add request signing
  - [ ] Implement audit logging
  - [ ] Create response signing
- [ ] Document API implementation and usage examples

### 7. Dashboard Implementation

- [ ] Implement dashboard frontend
  - [ ] Develop React components
  - [ ] Implement D3.js visualizations
  - [ ] Create responsive layout
- [ ] Implement dashboard backend
  - [ ] Create analytics API
  - [ ] Develop metrics collection
  - [ ] Implement real-time data pipeline
- [ ] Document dashboard implementation details

## Testing Tasks

### 8. Testing Strategy

- [ ] Develop unit testing strategy
  - [ ] Define test coverage targets
  - [ ] Create mock entropy sources
  - [ ] Plan test automation
- [ ] Design integration testing approach
  - [ ] Define integration test scenarios
  - [ ] Plan API testing strategy
  - [ ] Design end-to-end tests
- [ ] Plan performance testing
  - [ ] Define performance benchmarks
  - [ ] Design load testing scenarios
  - [ ] Plan capacity testing
- [ ] Document testing strategy and tools

### 9. Security Audit

- [ ] Plan security review process
  - [ ] Define security objectives
  - [ ] Identify potential vulnerabilities
  - [ ] Plan mitigation strategies
- [ ] Design cryptographic validation
  - [ ] Plan formal verification approach
  - [ ] Define cryptographic testing
  - [ ] Design side-channel attack prevention
- [ ] Document security considerations and mitigations

## Deployment Tasks

### 10. DevOps Planning

- [ ] Design deployment architecture
  - [ ] Plan containerization strategy
  - [ ] Design Kubernetes deployment
  - [ ] Plan cloud provider requirements
- [ ] Design monitoring system
  - [ ] Plan Prometheus metrics
  - [ ] Design Grafana dashboards
  - [ ] Define alerting rules
- [ ] Plan scaling strategy
  - [ ] Design horizontal scaling approach
  - [ ] Plan for high availability
  - [ ] Define disaster recovery strategy
- [ ] Document deployment architecture and procedures

### 11. Documentation

- [ ] Create project documentation
  - [ ] Write architecture documentation
  - [ ] Create API documentation
  - [ ] Develop user guides
- [ ] Prepare developer documentation
  - [ ] Write contribution guidelines
  - [ ] Create code style guide
  - [ ] Document build and deployment procedures
- [ ] Plan for ongoing documentation
  - [ ] Define documentation update process
  - [ ] Plan for version-specific documentation
  - [ ] Design documentation testing

## Project Management

### 12. Milestones & Tracking

- [ ] Define project milestones
  - [ ] Set research completion milestone
  - [ ] Define MVP features and timeline
  - [ ] Plan beta release criteria
  - [ ] Set production release goals
- [ ] Create progress tracking mechanism
  - [ ] Set up project board (e.g., GitHub Projects, Trello)
  - [ ] Define task status tracking
  - [ ] Plan for regular progress reviews
- [ ] Document decision log
  - [ ] Record key technical decisions
  - [ ] Document rationale for choices
  - [ ] Track alternatives considered
- [ ] Review and update this task list regularly
  - [ ] Schedule weekly task list reviews
  - [ ] Update based on new findings and progress
  - [ ] Note completed items with date of completion

## Notes & Decisions

### Current Status

- Initial task list created
- Project in planning phase
- Initial research conducted on Random.org and Quantum APIs
- Research on Random.org API completed
- Basic Random.org API client implemented in JavaScript
- Research on ANU Quantum Random Numbers API completed
- Basic ANU QRNG API client implemented in JavaScript
- Research on IBM Quantum services for randomness generation completed
- Basic IBM Quantum RNG implementation with Python and JavaScript wrapper
- Research on microphone ambient noise for entropy collection completed
- Microphone entropy collector implemented with Web Audio API
- Interactive demo created for microphone entropy collection
- Camera entropy collector implemented for capturing random photon data
- Interactive demo created for camera entropy collection
- Further research needed on accelerometer/gyroscope sensors for entropy collection

### Research Findings

#### Random.org API

- Uses atmospheric noise as true random number source
- Offers JSON-RPC API (v4) with methods like generateIntegers, generateBlobs
- Returns data along with metadata (bitsUsed, bitsLeft, requestsLeft, advisoryDelay)
- Has usage quotas and rate limiting mechanisms
- API Reference: https://api.random.org/json-rpc/4/basic

#### Quantum Random Number Generators

- ANU QRNG: Australian National University's quantum random number generator
  - Measures quantum fluctuations of vacuum
  - Simple REST API with JSON response
  - Supports uint8, uint16, and hex16 data types
  - Array length limited to 1-1024
  - API Service recently moved to AWS
  - API Endpoint: https://qrng.anu.edu.au/API/jsonI.php
- IBM Quantum:
  - Requires Qiskit library and account setup
  - Uses quantum circuits with Hadamard gates to create superpositions
  - More complex implementation but provides true quantum randomness
  - Can run on simulators or real quantum hardware
  - API Documentation: https://qiskit.org/documentation/

#### Browser Entropy Sources

- Microphone:
  - Web Audio API provides access to audio data
  - Can extract entropy from ambient noise
  - Different sampling methods possible (frequency analysis, raw samples)
  - Works well in noisy environments
  - Implementation Notes: Requires user permission, needs data processing to remove patterns
- Camera:
  - Can access raw pixel data from webcam
  - Thermal noise in camera sensor provides entropy
  - Least significant bits of pixels contain random noise
  - Can also use frame-to-frame differences for entropy
  - Implementation Notes: Requires user permission, works better with lens cap on for pure noise