# Email designs

Drop the exported email images in this folder.

**Upload them here on GitHub, not through chat.** The chat attachment pipeline
caps images at 2000px tall, which silently shrank a previous batch of 600px-wide
exports down to ~332px wide — roughly half the detail — before they ever reached
the repo. Uploading directly to GitHub keeps the files byte-for-byte.

## How

1. Open this folder on GitHub
2. **Add file → Upload files**
3. Drag the whole folder in
4. Confirm it says *Commit directly to the `claude/gifted-hawking-80zdnx` branch*
5. **Commit changes**

Filenames don't matter — they get wired up in `content/site.ts` afterwards.

## Format

- PNG or WebP, any size, **no height cap**
- 600px wide stays sharp on a retina screen up to a 300px-wide card
- For larger cards, export at 2-3x device pixel ratio (Chrome devtools →
  device toolbar → set DPR → "capture full size screenshot")

Files here are served exactly as uploaded — Next's image optimizer is bypassed
for them, because it re-encodes to JPEG and halves the width of very tall images.
