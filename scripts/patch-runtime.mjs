#!/usr/bin/env node
// Patch the Vercel function config to use nodejs20.x runtime.
// @astrojs/vercel v7 determines runtime from the LOCAL Node version,
// which falls back to nodejs18.x when running on an unsupported version.
// This script overwrites the runtime field after the build completes.

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const configPath = join(__dirname, '../.vercel/output/functions/_render.func/.vc-config.json');

try {
  const config = JSON.parse(readFileSync(configPath, 'utf8'));
  config.runtime = 'nodejs20.x';
  writeFileSync(configPath, JSON.stringify(config, null, '\t'));
  console.log('✓ Patched _render.func runtime → nodejs20.x');
} catch (err) {
  console.error('✗ Failed to patch .vc-config.json:', err.message);
  process.exit(1);
}
