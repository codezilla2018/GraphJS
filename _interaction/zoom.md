---
title: Zoom
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
                  ["sample", 30, 200, 100, 150, 200, 170, 240 120, 70, 40]
              ]
          },
          "zoom": {
              "enabled": false
          }
      }
    title: Input JSON
    language: json
  - code_block: |-
      chart.do('enable zoom')
    title: Config
    language: javascript

right_code_blocks:
  - code_block: |-
      {
          "data": {
              "columns": [
                  ["sample", 30, 200, 100, 150, 200, 170, 240 120, 70, 40]
              ]
          },
          "zoom": {
              "enabled": true
          }
      }
    title: Output
    language: json
---