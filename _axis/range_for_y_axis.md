---
title: Range for Axis
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
                  ["sample", 30, 200, 100, 400, 150, 250]
              ]
          },
          "axis": {
              "y": {
                  "max": "undefined",
                  "min": "undefined"
              }
          }
      }
    title: Input JSON
    language: json
  - code_block: |-
      chart.do('set y axis min as -400')
      chart.do('set y axis max as 400')
    title: Config
    language: javascript

right_code_blocks:
  - code_block: |-
      {
                "data": {
                    "columns": [
                        ["sample", 30, 200, 100, 400, 150, 250]
                    ]
                },
                "axis": {
                    "y": {
                        "max": 400,
                        "min": -400
                    }
                }
            }
    title: Output
    language: json
---