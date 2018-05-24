---
title: Optional Grid Lines
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
         "grid": {
              "x": {
                  "lines": [
                  ]
              }
          }
      }
    title: Input JSON
    language: json
  - code_block: |-
      chart.do('set gridline x at 20 as another-x')
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
          "grid": {
              "x": {
                  "lines": [
                      {"value": 20, "text": "another-x"}
                  ]
              }
          }
      }
    title: Output
    language: json
---