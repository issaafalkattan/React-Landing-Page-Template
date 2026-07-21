#!/bin/bash
set -euo pipefail

# Install dependencies for Claude Code on the web sessions only.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR"

npm install --no-audit --no-fund

# npm >=7 rewrites yarn.lock to keep it "in sync", dropping platform-specific
# entries (fsevents) on Linux. This repo treats yarn.lock as yarn-owned; undo.
git checkout -- yarn.lock 2>/dev/null || true
