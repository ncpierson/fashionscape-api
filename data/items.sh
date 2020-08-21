#!/bin/bash

# Usage:
# ./items.sh import oldschool # or runescape
# ./items.sh stats oldschool # or runescape

RSRELEASE=$2

if [ "$RSRELEASE" != "oldschool" ] && [ "$RSRELEASE" != "runescape" ]; then
  echo "Only oldschool,runescape are valid arguments";
  exit;
fi

set -e

import() {
  node tools/import.js $RSRELEASE

  stats
}

update() {
  node tools/update.js $RSRELEASE

  stats
}

stats() {
  STATS_PATH="stats-$RSRELEASE.json"

  printf "Before:\n\n"
  test -f "$STATS_PATH" && cat "$STATS_PATH"

  node tools/stats.js "$RSRELEASE"

  printf "\nAfter:\n\n"
  test -f "$STATS_PATH" && cat "$STATS_PATH"
}

COMMAND="$1"
shift

case "$COMMAND" in
  import) import $@;;
  stats) stats $@;;
  update) update $@;;
esac
