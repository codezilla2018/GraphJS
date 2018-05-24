---
title: Chart Size
position:
parameters:
  - name:
    content:
content_markdown:

left_code_blocks:
  - code_block: |-
      {
          "size": {
                "height": "undefined",
                "width": "undefined"
          },
          "data": {
               "columns": [
                   ["sample", 30, 200, 100, 400, 150, 250]
                ]
          }
       }
    title: Input JSON
    language: json
  - code_block: |-
      chart.do('set height as 500')
      chart.do('set width as 1000')
    title: Config
    language: javascript

right_code_blocks:
  - code_block: |-
      {
          "size": {
              "height": 500,
              "width": 1000
          },
          "data": {
              "columns": [
                  ["sample", 30, 200, 100, 400, 150, 250]
              ]
          }
      }
    title: Output
    language: json
---