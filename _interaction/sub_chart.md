---
title: Sub Chart
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
          "subchart": {
              "show": false
          }
      }
    title: Input JSON
    language: json
  - code_block: |-
      chart.do('show subchart')
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
          "subchart": {
              "show": true
          }
      }
    title: Output
    language: json
---