---
title: Grid Lines
position:
parameters:
  - name:
    content:
content_markdown:

left_code_blocks:
  - code_block: |-
      {
          "data": {
              "columns": [
                  ["sample", 30, 200, 100, 400, 150, 250, 120, 200]
              ]
          },
          "grid": {
              "x": {
                  "show": false
              },
              "y": {
                  "show": false
              }
          }
      }
    title: Input JSON
    language: json
  - code_block: |-
      chart.do('show grid x')
      chart.do('show grid Y')
    title: Config
    language: javascript

right_code_blocks:
  - code_block: |-
      {
                "data": {
                    "columns": [
                        ["sample", 30, 200, 100, 400, 150, 250, 120, 200]
                    ]
                },
                "grid": {
                    "x": {
                        "show": true
                    },
                    "y": {
                        "show": true
                    }
                }
            }
    title: Output
    language: json
---