var APP_DATA = {
  "scenes": [
    {
      "id": "0-sleeping",
      "name": "SLEEPING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.03492312570521605,
        "pitch": 0.19096240761104966,
        "fov": 1.4300641596566168
      },
      "linkHotspots": [
        {
          "yaw": -2.274305363822311,
          "pitch": 0.17382752731821327,
          "rotation": 1.5707963267948966,
          "target": "3-entrance--bathroom"
        },
        {
          "yaw": 1.8045283925903988,
          "pitch": 0.1646121234557043,
          "rotation": 0,
          "target": "1-living-area"
        },
        {
          "yaw": -2.452483406736146,
          "pitch": 0.1854734033042682,
          "rotation": 0,
          "target": "4-pool--sundeck"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-area",
      "name": "LIVING AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.012439621507209,
        "pitch": 0.21281919705142727,
        "fov": 1.4300641596566168
      },
      "linkHotspots": [
        {
          "yaw": 2.5943852210959752,
          "pitch": 0.24722986153063786,
          "rotation": 3.141592653589793,
          "target": "2-terace"
        },
        {
          "yaw": -0.10517024939183983,
          "pitch": 0.15170998342030373,
          "rotation": 1.5707963267948966,
          "target": "0-sleeping"
        },
        {
          "yaw": -0.2816056432569418,
          "pitch": 0.038545021936428725,
          "rotation": 6.283185307179586,
          "target": "3-entrance--bathroom"
        },
        {
          "yaw": -0.45811425959625574,
          "pitch": 0.13825955637943288,
          "rotation": 5.497787143782138,
          "target": "4-pool--sundeck"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-terace",
      "name": "TERACE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.6920177444245184,
        "pitch": 0.11608130579632459,
        "fov": 1.4300641596566168
      },
      "linkHotspots": [
        {
          "yaw": -0.6267718997112848,
          "pitch": 0.09721859298300117,
          "rotation": 0,
          "target": "1-living-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entrance--bathroom",
      "name": "ENTRANCE & BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.6932936870741377,
        "pitch": 0.16783714265794636,
        "fov": 1.3154505515523092
      },
      "linkHotspots": [
        {
          "yaw": 3.0900398211908584,
          "pitch": 0.1191992932950523,
          "rotation": 0,
          "target": "0-sleeping"
        },
        {
          "yaw": -2.163789427504156,
          "pitch": 0.06434685769530724,
          "rotation": 0,
          "target": "4-pool--sundeck"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-pool--sundeck",
      "name": "POOL & SUNDECK",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 3.0323106411762506,
        "pitch": -0.06583037504686651,
        "fov": 1.4300641596566168
      },
      "linkHotspots": [
        {
          "yaw": -0.675627833790724,
          "pitch": 0.01304622622570939,
          "rotation": 3.141592653589793,
          "target": "3-entrance--bathroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.8504564186844963,
          "pitch": 0.3007909137142111,
          "title": "JACUZZI WHIRLPOOL WATERBLADE",
          "text": "Text"
        },
        {
          "yaw": -0.6766243479417007,
          "pitch": -0.13000506634914544,
          "title": "DELUX SUITE",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Delux AdultsOnly Suite",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
