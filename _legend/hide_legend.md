---
title: Hide Legend
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
          "legend": {
              "show": true
          }
      }
    title: Input JSON
    language: json
  - code_block: |-
      chart.do('hide legend')
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
          "legend": {
              "show": false
          }
      }
    title: Output
    language: json
---