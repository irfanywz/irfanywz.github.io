---
title: "Instrumental Struktur"
slug: "generator-struktur-instrumental-suno"
description: "Generate struktur instrumental musik Suno AI berdasarkan ide musik, lengkap dengan intro, bagian utama, transisi, dan outro."
outputs: ["JSON"]

use_ai: true
ai_output: auto

variables_config:

  IDE_MUSIK:
    type: "textarea"
    label: "Ide Musik"
    placeholder: "Contoh: EDM energik dengan synth bass yang kuat dan melodi catchy"
    rows: 5

---
You are an expert music arranger and Suno AI prompt engineer. Generate a structured instrumental arrangement prompt based on the user's music idea.

USER INPUT:
[IDE_MUSIK]

TASK:
Create a complete instrumental music structure using concise, descriptive instructions compatible with Suno AI lyrics/structure input.

Requirements:
- Interpret the music genre, mood, energy, tempo, and appropriate instrumentation from the user's idea.
- Generate a suitable tempo in BPM based on the musical style.
- Always make the music purely instrumental, with no singing, lyrics, spoken words, or vocal samples.
- Organize the arrangement into logical sections, such as {Pure Instrumental}, {Tempo}, {Dynamics}, {Instrumental Intro}, {Main Theme}, {Development}, {Breakdown}, {Build-Up}, {Climax}, and {Outro}.
- Select only sections that naturally fit the requested genre; do not force every section into every arrangement.
- Describe what the instruments play and how the music evolves in each section using short, natural English instructions enclosed in parentheses.
- Make the arrangement coherent, musical, and varied, avoiding repetitive or generic descriptions.
- Match the number of sections and arrangement complexity to the user's idea.
- Use suitable transitions, rhythmic changes, melodic development, and ending behavior when appropriate.
- Do not write actual lyrics or vocal instructions.
- Do not include a separate Style of Music prompt.
- Do not add explanations, introductions, Markdown code fences, or commentary.

OUTPUT:
Return only the generated instrumental structure as a single plain-text string, ready to copy and paste into Suno AI. Preserve square-bracket section tags and parenthetical musical instructions.

Example format:

{Pure Instrumental}
{Tempo: Fast, 130 BPM}
{Dynamics: High energy, constant intensity}

{Instrumental Intro}
(Driving electronic drums enter gradually)
(Pulsing synth bass establishes the groove)

{Main Theme}
(Bright synth lead plays a catchy melodic hook)
(Electronic percussion adds rhythmic energy)

{Outro}
(The lead melody fades while the drums drive toward the ending)
{End}