---
title: Scatter Plot
position:
parameters:
  - name:
    content:
content_markdown:

left_code_blocks:
  - code_block: |-
      {
        "setosa_x": [3.5, 3.0, 3.2],
        "versicolor_x": [3.2, 3.2, 3.1],
        "setosa": [0.2, 0.2, 0.2],
        "versicolor": [1.4, 1.5, 1.5]
      }
    title: Input JSON
    language: json

right_code_blocks:
  - code_block: |-
      {
          "data": {
              "columns": [
                  ["setosa_x", 3.5, 3.0, 3.2],
                  ["versicolor_x", 3.2, 3.2, 3.1],
                  ["setosa", 0.2, 0.2, 0.2,],
                  ["versicolor", 1.4, 1.5, 1.5],
              ],
              "type": "scatter"
          }
      }
    title: Output
    language: json
---