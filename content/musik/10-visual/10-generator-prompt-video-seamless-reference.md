---
title: "Seamless Loop Video Prompt Generator"
slug: seamless-loop-video-prompt
description: "Generator prompt video seamless loop berdasarkan gambar referensi."
outputs: ["JSON"]

use_ai: false
ai_output: auto

variables_config:

  DESKRIPSIKAN:
    type: "textarea"
    label: "Deskripsi Gerakan (Opsional)"
    placeholder: "Contoh: rambut tertiup angin, air mengalir, awan bergerak perlahan..."
    rows: 3
    multiple: false

---

Analyze the provided reference image and generate one ready-to-use English video prompt for a perfect seamless loop.

Preserve the original subject, composition, art style, colors, lighting, and background. Animate suitable elements with natural, continuous cyclic motion that returns smoothly to the starting state.

Ensure the ending connects seamlessly to the beginning, with matching subject positions, motion phases, and scene composition. Keep the camera static unless otherwise requested. Avoid cuts, abrupt movements, scene changes, object distortion, and unnecessary camera movement.

Motion guidance: [DESKRIPSIKAN]

If no motion guidance is provided, determine the most suitable looping animation from the reference image.

Output ONLY the final English video prompt, ready to copy and paste. No JSON, headings, quotation marks, explanations, or additional text.