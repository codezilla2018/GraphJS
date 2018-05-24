---
title: Rotated Axis
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
                  ["data1", 30, 200, 100, 400, 150, 250],
                  ["data2", 50, 20, 10, 40, 15, 25]
              ],
              "types": {
                  "data1": "bar",
              }
          },
          "axis": {
              "rotated": false
          }
      }
    title: Input JSON
    language: json
  - code_block: |-
      chart.do('enable rotate')
    title: Config
    language: javascript

right_code_blocks:
  - code_block: |-
      {
                "data": {
                    "columns": [
                        ["data1", 30, 200, 100, 400, 150, 250],
                        ["data2", 50, 20, 10, 40, 15, 25]
                    ],
                    "types": {
                        "data1": "bar",
                    }
                },
                "axis": {
                    "rotated": true
                }
            }
    title: Output
    language: json
---