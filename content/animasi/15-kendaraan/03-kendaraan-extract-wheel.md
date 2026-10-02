---
title: "Ban Kendaraan"
slug: "kendaraan-extract-wheel"
description: "Prompt builder untuk mengekstrak seluruh ban atau roda dari kendaraan referensi menjadi aset modular terpisah yang siap digunakan untuk rig, rotasi, dan animasi 2D"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: false
outputs: ["JSON"]
---

Use the attached vehicle image as the STRICT VEHICLE REFERENCE.

Extract ALL WHEELS / TIRES from the vehicle and create them as SEPARATE MODULAR 2D ASSETS.

### WHEEL COUNT
* Detect the actual number of wheels visible or belonging to the vehicle.
* Output exactly one standalone wheel asset for each wheel.
* Examples:
  * motorcycle $\rightarrow$ 2 wheels
  * bicycle $\rightarrow$ 2 wheels
  * car $\rightarrow$ 4 wheels
  * truck $\rightarrow$ match the actual wheel count
  * other vehicles $\rightarrow$ match the vehicle's actual wheel count
* Do NOT duplicate or invent wheels.

### WHEEL DESIGN LOCK
For each wheel, preserve the original:
* tire shape and proportions
* tire thickness
* rim design
* rim size
* hub/center
* tread pattern when visible
* colors
* materials
* distinctive wheel details

Do NOT redesign, recolor, replace, or simplify the wheel.

### STRICT WHEEL SEPARATION
Extract ONLY the wheel itself.

The wheel asset must contain ONLY:
* tire
* rim
* wheel hub / center components that are physically part of the wheel

DO NOT include:
* brake caliper
* brake pads
* brake disc / rotor
* brake drum housing if separate from the wheel
* fork
* swingarm
* axle
* suspension
* fender / mudguard
* chain
* sprocket
* vehicle body
* chassis
* frame
* exhaust
* pedals
* footrests
* any other surrounding vehicle component

If a component is attached around or beside the wheel but is not physically part of the wheel itself, leave it behind.

### MODULAR ASSET
* Each wheel must be completely detached from the vehicle and usable independently for rotation, replacement, rigging, animation, and sprite generation.
* Show the FULL CIRCULAR WHEEL, including the complete tire circumference and rim.

### VIEW & ALIGNMENT
Present every wheel in a straight-on side view.

Each wheel must be:
* perfectly circular
* centered
* upright
* undistorted
* free from perspective distortion
* fully visible

Keep the wheel design consistent with its original vehicle.

### MULTIPLE WHEELS
* Place all extracted wheels on one clean canvas with clear separation between each wheel.
* Keep each wheel individually recognizable and easy to crop.
* If front and rear wheels have different designs or sizes, preserve those differences accurately.
* Do NOT merge different wheels into one asset.

### STYLE LOCK
Preserve the original vehicle's:
* linework
* outline quality
* colors
* shading
* rendering
* proportions
* visual style

The extracted wheels should look like they were directly separated from the original vehicle, not newly designed.

### OUTPUT
* exact original wheel count
* one standalone asset per wheel
* complete wheels only
* clean plain background
* no vehicle body
* no surrounding vehicle parts
* no text
* no labels
* no extra objects

**FINAL RESULT: ONLY THE VEHICLE'S WHEELS, CLEANLY EXTRACTED AND READY FOR 2D ANIMATION.**