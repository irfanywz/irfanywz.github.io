---
title: "FFmpeg Cheat Sheet"
description: "Kumpulan perintah terminal cepat."
draft: false
layout: "cheat-sheet"
icon: "icon-[ri--terminal-box-line]"
icon_color: "text-indigo-500"
sheets:
  - title: "Potong Video Cepat"
    code: "ffmpeg -ss 00:00:00 -i input.mp4 -to 00:00:10 -c copy output.mp4"
  - title: "Convert ke MP3"
    code: "ffmpeg -i input.mp4 -vn -ab 192k output.mp3"
---