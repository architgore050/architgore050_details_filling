// ============================================================
// CURRENT PROJECTS — "WE'RE STILL BUILDING"
// Placeholder entries you can edit anytime.
// ============================================================

export const currentProjects = [
  {
    index: '01',
    title: 'Indicator-Based Algo Trading (XAUUSD)',
    status: 'In progress',
    description: 'Walk-forward validation with Bayesian optimization on 1-minute gold OHLCV data. GPU-accelerated indicator math via cudf/cupy. Two strategies (VM confluence-based and TV-inspired) under active research.',
    notes: 'Edit in src/data/projects.js',
  },
  {
    index: '02',
    title: 'Robotic Arm 3D Simulation',
    status: 'In progress',
    description: 'AI agent pipeline controlling a UR5 arm in PyBullet. SAM 2.1 vision, LLM reasoning, inverse kinematics. Drop-in replacement for ESP32-CAM hardware.',
    notes: 'Edit in src/data/projects.js',
  },
  {
    index: '03',
    title: 'Kairix Daemon',
    status: 'In progress',
    description: 'Local AI agent running quantized Granite 3.2 2B GGUF. Web browsing, file I/O, shell execution via tool calling. Zero frameworks — everything hand-written.',
    notes: 'Edit in src/data/projects.js',
  },
];

// ============================================================
// FUTURE PLANS — "WHAT'S NEXT"
// ============================================================

export const futurePlans = [
  'XGBoost for crypto trading on OHLCV 1-minute interval data',
  'Upgrade kairix daemon with custom inference engine, better TUI and better harness engineering tools',
  'Recommendation algorithm for a passive entertainment startup',
  'Stronger full-stack systems built end to end',
  'AI-powered applications that solve real problems',
  'Developer tooling worth reaching for',
  'Scalable backend architecture that holds up at scale',
  'Better interfaces — precise, calm, and human',
  'Open-source experimentation and research-oriented work',
];

export default currentProjects;