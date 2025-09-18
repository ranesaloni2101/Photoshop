// Topics data
    const topics = [
      { name: "Photoshop Basics", icon: "bi-palette", level: "beginner" },
      { name: "Working with Layers", icon: "bi-layers", level: "beginner" },
      { name: "Photo Retouching", icon: "bi-brush", level: "intermediate" },
      { name: "Fashion", icon: "bi-bag-heart", level: "advanced" },
      { name: "Electronic", icon: "bi-cpu", level: "intermediate" },
      { name: "Game", icon: "bi-controller", level: "advanced" },
      { name: "Music", icon: "bi-music-note-beamed", level: "intermediate" },
      { name: "Furniture", icon: "bi-house-door", level: "beginner" },
      { name: "Food", icon: "bi-cup-straw", level: "beginner" },
      { name: "Other", icon: "bi-three-dots", level: "all" }
    ];

    // Topic details
    const topicDetails = {
      "Photoshop Basics": {
        video: "https://www.youtube.com/embed/lnzuMJLZRdU",
        notes: "Introduction to Photoshop interface, tools, and navigation.",
        assignmentImg: "images/assignment-basic.jpg",
        assignmentDesc: "Practice using selection tools and basic transformations."
      },
      "Working with Layers": {
        video: "https://www.youtube.com/embed/3K6A9e3bKFY",
        notes: "Understanding layers, blending modes, and masks.",
        assignmentImg: "images/assignment-layers.jpg",
        assignmentDesc: "Create a poster using multiple layers and blending effects."
      },
      "Photo Retouching": {
        video: "https://www.youtube.com/embed/auJ0kqTg-3o",
        notes: "Techniques for blemish removal, color correction, and skin smoothing.",
        assignmentImg: "images/assignment-retouch.jpg",
        assignmentDesc: "Enhance a portrait by fixing skin tone and brightness."
      },
      "Fashion": {
        video: "https://www.youtube.com/embed/tgbNymZ7vqY", // <-- replace with your fashion tutorial video
        notes: "Learn fashion retouching techniques like skin smoothing, liquify, and color grading.",
        assignmentImg: "images/assignment-fashion.jpg", // <-- add your fashion assignment image
        assignmentDesc: "Retouch a fashion portrait using liquify, dodge/burn, and adjustment layers."
      },
      "Electronic": {
  video: "https://www.youtube.com/embed/electronics-video", // replace with actual link
  notes: "Editing product images, gadgets, and electronic elements using Photoshop.",
  assignmentImg: "images/assignment-electronics.jpg",
  assignmentDesc: "Enhance product images with proper selection, clone stamp, and adjustment layers."
},
"Game": {
  video: "https://www.youtube.com/embed/game-video", // replace with actual link
  notes: "Game art, UI, and character design using Photoshop tools.",
  assignmentImg: "images/assignment-game.jpg",
  assignmentDesc: "Create game character assets or UI elements with brushes, pen tool, and layer effects."
},
"Music": {
  video: "https://www.youtube.com/embed/music-video", // replace with actual link
  notes: "Design album covers, posters, and music-related artwork.",
  assignmentImg: "images/assignment-music.jpg",
  assignmentDesc: "Design an album poster using text, brushes, shapes, gradients, and adjustment layers."
}

    };

    // Recommended Tools
    const recommendedTools = [
      { name: "CorelDRAW", image: "coral.jpg", price: "$199" },
      { name: "Photoshop", image: "photoshop.jpg", price: "$239" },
      { name: "InDesign", image: "indesign.jpg", price: "$249" }
    ];

    // Load Topics
    function loadTopics(filterText = "", filterLevel = "all") {
      const container = document.getElementById('topics-container');
      container.innerHTML = "";
      topics.forEach(topic => {
        if (
          topic.name.toLowerCase().includes(filterText.toLowerCase()) &&
          (filterLevel === "all" || topic.level === filterLevel)
        ) {
          const button = document.createElement('button');
          button.className = "btn btn-outline-primary d-flex align-items-center gap-2";
          button.innerHTML = `<i class="bi ${topic.icon}"></i> ${topic.name}`;
          button.addEventListener("click", () => showTopicDetails(topic.name));
          container.appendChild(button);
        }
      });
    }

    // Show Topic Details
    function showTopicDetails(topicName) {
      const details = topicDetails[topicName];
      if (details) {
        document.getElementById("topic-title").textContent = topicName;
        document.getElementById("topic-video").src = details.video;
        document.getElementById("topic-notes").textContent = details.notes;
        document.getElementById("topic-assignment-img").src = details.assignmentImg;
        document.getElementById("topic-assignment-desc").textContent = details.assignmentDesc;
        document.getElementById("topic-details").style.display = "block";
        window.location.hash = "topic-details";
      }
    }

    // Load Recommended Tools
    function loadRecommended() {
      const container = document.getElementById('recommended-section');
      container.innerHTML = "";
      recommendedTools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
          <div class="card h-100 text-center shadow-sm">
            <img src="${tool.image}" class="card-img-top" alt="${tool.name}">
            <div class="card-body">
              <h5 class="card-title">${tool.name}</h5>
              <p class="card-text text-success fw-bold">${tool.price}</p>
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    }

    // Event Listeners for search + filter
    document.getElementById('searchInput').addEventListener('input', e => {
      loadTopics(e.target.value, document.getElementById('levelFilter').value);
    });
    document.getElementById('levelFilter').addEventListener('change', e => {
      loadTopics(document.getElementById('searchInput').value, e.target.value);
    });

    // Init
    document.addEventListener('DOMContentLoaded', () => {
      loadTopics();
      loadRecommended();
    });
    
  // Show steps when a tool is clicked
  document.querySelectorAll(".tool-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tool = btn.getAttribute("data-tool");
      const steps = toolSteps[tool];
      if (steps) {
        document.getElementById("tool-steps").innerHTML = `
          <h5>${btn.textContent} - Steps</h5>
          <ol>${steps.map(step => `<li>${step}</li>`).join("")}</ol>
        `;
      }
    });
  });

  // Retouching tool steps
  const retouchSteps = {
    "spot-healing": [
      "Select the Spot Healing Brush Tool from the toolbar.",
      "Choose a brush size slightly larger than the imperfection.",
      "Click once on blemishes or unwanted spots to remove them.",
      "Photoshop will auto-blend the area."
    ],
    "healing-brush": [
      "Select the Healing Brush Tool.",
      "Select the image by Alt.",
      "Can also used to remove dark spot/pimple.",
      "Hold Alt/Option and click to sample a clean source area.",
      "Paint over the imperfection to replace it with the sampled pixels.",
      "Blend until natural."
    ],
    "patch": [
      "Choose the Patch Tool.",
      "Create a patches of image.",
      "1st draw patch -> drag on image.",
      "Drag the selection to a clean area to replace it.",
      "Select what you want to show in patch. eg:- eyes,lips,head etc. & enter.",
      "Deselect when satisfied."
    ],
    "clone-stamp": [
      "Select the Clone Stamp Tool.",
      "Hold Alt/Option and click to set a source point.",
      "Brush over the target area to copy pixels from the source.",
      "Adjust opacity for smoother blending."
    ],
    "content-aware": [
      "Make a selection around the object to remove.",
      "Go to Edit > Fill.",
      "Choose 'Content-Aware' and click OK.",
      "Photoshop fills the area automatically."
    ],
    "dodge": [
      "Select the Dodge Tool.",
      "Choose a soft brush and low exposure (10–20%).",
      "Paint over areas you want to lighten.",
      "Work gradually for natural results."
    ],
    "burn": [
      "Select the Burn Tool.",
      "Choose a soft brush and low exposure.",
      "Paint over areas you want to darken.",
      "Build up effect slowly."
    ],
    "blur": [
      "Select the Blur Tool.",
      "Set strength to a low percentage.",
      "Brush over areas you want to soften.",
      "Use for skin smoothing or background blur."
    ],
    "sharpen": [
      "Select the Sharpen Tool.",
      "Choose a soft brush and low strength.",
      "Paint over details to enhance clarity.",
      "Avoid over-sharpening to prevent noise."
    ],
    "smudge": [
      "Select the Smudge Tool.",
      "Choose a brush and set strength.",
      "Drag pixels around to blend edges.",
      "Use sparingly for natural look."
    ],
  };

  // Show steps when retouching tool clicked
  document.querySelectorAll(".retouch-tool").forEach(btn => {
    btn.addEventListener("click", () => {
      const tool = btn.getAttribute("data-tool");
      const steps = retouchSteps[tool];
      if (steps) {
        document.getElementById("retouch-tool-steps").innerHTML = `
          <h5>${btn.textContent} - Steps</h5>
          <ol>${steps.map(step => `<li>${step}</li>`).join("")}</ol>
        `;
      }
    });
  });

  // Steps for each Layers tool
  const layersSteps = {
    move: [
      "Select the Move Tool (V).",
      "Click and drag to move a layer’s contents.",
      "Use arrow keys for precise movement.",
      "Enable Auto-Select for quick layer switching."
    ],
    marquee: [
      "Select Rectangular or Elliptical Marquee Tool.",
      "Click and drag to create a selection.",
      "Hold Shift for square/circle selection.",
      "Use selections to edit or mask areas."
    ],
    lasso: [
      "Choose from Lasso, Polygonal, or Magnetic Lasso Tool.",
      "Draw freehand, straight-edged, or magnetic selections.",
      "Close the selection loop to finish.",
      "Refine edges for clean results."
    ],
    "quick-selection": [
      "Select the Quick Selection Tool.",
      "Click and drag to paint a selection area.",
      "Photoshop detects edges automatically.",
      "Use Add/Subtract options to adjust."
    ],
    "magic-wand": [
      "Select the Magic Wand Tool.",
      "Click on an area to select similar colors.",
      "Adjust tolerance for more/less range.",
      "Useful for backgrounds or solid colors."
    ],
    brush: [
      "Select the Brush Tool.",
      "Choose size, hardness, and opacity.",
      "Paint directly on layer or mask.",
      "Use soft brushes for blending effects."
    ],
    eraser: [
      "Select the Eraser Tool.",
      "Adjust size and hardness.",
      "Click and drag to erase pixels.",
      "Use Background Eraser for transparency."
    ],
    gradient: [
      "Select the Gradient Tool.",
      "Choose gradient type (linear, radial, etc.).",
      "Click and drag to apply gradient.",
      "Useful for backgrounds and overlays."
    ],
    "paint-bucket": [
      "Select the Paint Bucket Tool.",
      "Click inside a selection or area.",
      "Fills with current foreground color or pattern.",
      "Adjust tolerance for better results."
    ],
    text: [
      "Select the Type Tool (T).",
      "Click to create point text, or drag for text box.",
      "Adjust font, size, and color in options bar.",
      "Use layers panel to manage text layers."
    ],
    shapes: [
      "Select Shape Tool (Rectangle, Ellipse, etc.).",
      "Click and drag to create shape layers.",
      "Hold Shift to constrain proportions.",
      "Edit fill, stroke, and styles in properties."
    ]
  };

  // Show steps when Layers tool clicked
  document.querySelectorAll(".layers-tool").forEach(btn => {
    btn.addEventListener("click", () => {
      const tool = btn.getAttribute("data-tool");
      const steps = layersSteps[tool];
      if (steps) {
        document.getElementById("layers-tool-steps").innerHTML = `
          <h5>${btn.textContent} - Steps</h5>
          <ol>${steps.map(step => `<li>${step}</li>`).join("")}</ol>
        `;
      }
    });
  });

  // Steps for Fashion tools
const fashionSteps = {
  "spot-healing": [
    "Select the Spot Healing Brush Tool from the toolbar.",
    "Choose a brush size slightly larger than the imperfection.",
    "Click once on blemishes or unwanted spots to remove them.",
    "Photoshop will auto-blend the area."
  ],
  "healing-brush": [
    "Select the Healing Brush Tool.",
    "Hold Alt/Option and click to sample a clean source area.",
    "Paint over the imperfection to replace it with sampled pixels.",
    "Blend until natural."
  ],
  patch: [
    "Choose the Patch Tool.",
    "Draw a selection around the area you want to fix.",
    "Drag the selection to a clean area.",
    "Release to blend."
  ],
  "clone-stamp": [
    "Select the Clone Stamp Tool.",
    "Hold Alt/Option and click to set a source point.",
    "Brush over the target area to copy pixels from the source."
  ],
  dodge: [
    "Select the Dodge Tool.",
    "Set exposure to 10–20%.",
    "Paint over areas to lighten them."
  ],
  burn: [
    "Select the Burn Tool.",
    "Set exposure to low percentage.",
    "Paint over areas to darken them."
  ],
  liquify: [
    "Go to Filter > Liquify.",
    "Use Forward Warp Tool to reshape features.",
    "Adjust brush size and pressure as needed.",
    "Click OK to apply."
  ],
  blur: [
    "Select the Blur Tool.",
    "Set strength to a low percentage.",
    "Brush over areas you want to soften."
  ],
  sharpen: [
    "Select the Sharpen Tool.",
    "Choose a soft brush and low strength.",
    "Paint over details to enhance clarity."
  ],
  smudge: [
    "Select the Smudge Tool.",
    "Drag pixels around to blend edges.",
    "Use sparingly for natural look."
  ],
  "content-aware": [
    "Make a selection around the object to remove.",
    "Go to Edit > Fill.",
    "Choose 'Content-Aware' and click OK."
  ],
  "camera-raw": [
    "Go to Filter > Camera Raw Filter.",
    "Adjust exposure, contrast, and clarity.",
    "Apply to enhance overall image."
  ],
  "adjustment-layers": [
    "Click Adjustment Layer button in Layers panel.",
    "Choose Curves, Hue/Saturation, or Levels.",
    "Non-destructive editing for better control."
  ],
  masks: [
    "Add a Layer Mask in Layers panel.",
    "Paint black to hide, white to reveal.",
    "Use Clipping Mask for targeting specific layers."
  ]
};

// Show steps when Fashion tool clicked
document.querySelectorAll(".fashion-tool").forEach(btn => {
  btn.addEventListener("click", () => {
    const tool = btn.getAttribute("data-tool");
    const steps = fashionSteps[tool];
    if (steps) {
      document.getElementById("fashion-tool-steps").innerHTML = `
        <h5>${btn.textContent} - Steps</h5>
        <ol>${steps.map(step => `<li>${step}</li>`).join("")}</ol>
      `;
    }
  });
});

// Electronics tool steps
const electronicSteps = {
  pen: ["Use Pen Tool to create precise paths around gadgets.", "Adjust curves and anchor points.", "Convert path to selection if needed."],
  shape: ["Use Rectangle/Shape Tools to create UI or board elements.", "Adjust fill, stroke, and styles."],
  clone: ["Use Clone Stamp Tool to remove scratches or unwanted parts.", "Alt+Click to sample, then paint over target."],
  healing: ["Use Spot Healing Brush to fix small defects.", "Click on imperfections to remove."],
  "layer-styles": ["Apply Bevel, Shadow, Glow to give 3D or polished look.", "Adjust opacity and blend mode."],
  "adjustment-layers": ["Use Brightness/Contrast or Levels to enhance product visibility.", "Apply non-destructive edits."]
};

// Game tool steps
const gameSteps = {
  brush: ["Use Brush Tool for digital painting and textures.", "Select appropriate brush size and hardness."],
  "pen-lasso": ["Use Pen Tool or Lasso Tool to select game elements.", "Create masks or isolate objects."],
  gradient: ["Use Gradient Tool for backgrounds and lighting effects.", "Adjust angle and opacity."],
  "smudge-blur-sharpen": ["Use Smudge, Blur, or Sharpen for effects and detailing.", "Apply carefully for best results."],
  liquify: ["Use Liquify Tool to adjust character shapes or poses.", "Use Forward Warp for subtle adjustments."],
  "layer-styles": ["Apply Layer Styles & Blending Modes for glow, fire, lighting.", "Adjust opacity and effect order."],
  "custom-shapes": ["Use Custom Shapes or Paths for UI elements, icons, or maps.", "Modify fills and strokes."]
};

// Music tool steps
const musicSteps = {
  text: ["Use Text Tool to create album titles or lyrics.", "Adjust font, size, and color."],
  brush: ["Use Brush Tool for artistic effects like splashes and light streaks.", "Select soft or custom brushes."],
  shape: ["Use Shape Tools to add frames or geometric elements.", "Adjust fill and stroke."],
  "gradient-map": ["Use Gradient / Gradient Map to set mood and atmosphere.", "Adjust blending and opacity."],
  "layer-styles": ["Apply Layer Styles for glows, shadows, or 3D text.", "Adjust blending options."],
  "adjustment-layers": ["Use Hue/Saturation or Curves to color grade.", "Apply selectively."],
  selection: ["Use Selection Tools to isolate instruments or symbols.", "Refine edges for clean cutouts."]
};
// Electronics tools
document.querySelectorAll(".electronic-tool").forEach(btn => {
  btn.addEventListener("click", () => {
    const tool = btn.getAttribute("data-tool");
    const steps = electronicSteps[tool];
    if (steps) {
      document.getElementById("electronic-tool-steps").innerHTML = `
        <h5>${btn.textContent} - Steps</h5>
        <ol>${steps.map(s => `<li>${s}</li>`).join("")}</ol>
      `;
    }
  });
});

// Game tools
document.querySelectorAll(".game-tool").forEach(btn => {
  btn.addEventListener("click", () => {
    const tool = btn.getAttribute("data-tool");
    const steps = gameSteps[tool];
    if (steps) {
      document.getElementById("game-tool-steps").innerHTML = `
        <h5>${btn.textContent} - Steps</h5>
        <ol>${steps.map(s => `<li>${s}</li>`).join("")}</ol>
      `;
    }
  });
});

// Music tools
document.querySelectorAll(".music-tool").forEach(btn => {
  btn.addEventListener("click", () => {
    const tool = btn.getAttribute("data-tool");
    const steps = musicSteps[tool];
    if (steps) {
      document.getElementById("music-tool-steps").innerHTML = `
        <h5>${btn.textContent} - Steps</h5>
        <ol>${steps.map(s => `<li>${s}</li>`).join("")}</ol>
      `;
    }
  });
});

 // Update showTopicDetails function
  function showTopicDetails(topicName) {
    const details = topicDetails[topicName];
    if (details) {
      document.getElementById("topic-title").textContent = topicName;
      document.getElementById("topic-video").src = details.video;
      document.getElementById("topic-notes").textContent = details.notes;
      document.getElementById("topic-assignment-img").src = details.assignmentImg;
      document.getElementById("topic-assignment-desc").textContent = details.assignmentDesc;
      document.getElementById("topic-details").style.display = "block";

      // Show toolbars based on topic
      document.getElementById("retouch-toolbar-section").style.display = (topicName === "Photo Retouching") ? "block" : "none";
      document.getElementById("layers-toolbar-section").style.display = (topicName === "Working with Layers") ? "block" : "none";
      document.getElementById("fashion-toolbar-section").style.display = (topicName === "Fashion") ? "block" : "none";
      document.getElementById("electronic-toolbar-section").style.display = (topicName === "Electronic") ? "block" : "none";
      document.getElementById("game-toolbar-section").style.display = (topicName === "Game") ? "block" : "none";
      document.getElementById("music-toolbar-section").style.display = (topicName === "Music") ? "block" : "none";


      window.location.hash = "topic-details";
    }

  }
