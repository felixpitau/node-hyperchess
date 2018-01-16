module.exports = class Spot {

  static add (spot1, spot2) {
    return [spot1[0] + spot2[0], spot1[1] + spot2[1], spot1[2] + spot2[2], spot1[3] + spot2[3]];
  }

  static init () {
    if (Spot.spotSets == null) {
      Spot.spotSets = {
        'pawn step': [
          [
            [0, 1, 0, 0],
            [0, 0, 0, 1]
          ],
          [
            [0, -1, 0, 0],
            [0, 0, 0, -1]
          ]
        ],
        'pawn double step': [
          [
            [
              [0, 1, 0, 0],
              [0, 2, 0, 0]
            ],
            [
              [0, 0, 0, 1],
              [0, 0, 0, 2]
            ]
          ],
          [
            [
              [0, -1, 0, 0],
              [0, -2, 0, 0]
            ],
            [
              [0, 0, 0, -1],
              [0, 0, 0, -2]
            ]
          ]
        ],
        'pawn capture': [
          [
            [0, 1, 1, 0],
            [0, 1, -1, 0],
            [1, 1, 0, 0],
            [-1, 1, 0, 0],
            [0, 0, 1, 1],
            [0, 0, -1, 1],
            [1, 0, 0, 1],
            [-1, 0, 0, 1]
          ],
          [
            [0, -1, 1, 0],
            [0, -1, -1, 0],
            [1, -1, 0, 0],
            [-1, -1, 0, 0],
            [0, 0, 1, -1],
            [0, 0, -1, -1],
            [1, 0, 0, -1],
            [-1, 0, 0, -1]
          ]
        ],
        'rook': [
          [
            [1, 0, 0, 0],
            [2, 0, 0, 0],
            [3, 0, 0, 0]
          ],
          [
            [-1, 0, 0, 0],
            [-2, 0, 0, 0],
            [-3, 0, 0, 0]
          ],
          [
            [0, 1, 0, 0],
            [0, 2, 0, 0],
            [0, 3, 0, 0]
          ],
          [
            [0, -1, 0, 0],
            [0, -2, 0, 0],
            [0, -3, 0, 0]
          ],
          [
            [0, 0, 1, 0],
            [0, 0, 2, 0],
            [0, 0, 3, 0]
          ],
          [
            [0, 0, -1, 0],
            [0, 0, -2, 0],
            [0, 0, -3, 0]
          ],
          [
            [0, 0, 0, 1],
            [0, 0, 0, 2],
            [0, 0, 0, 3]
          ],
          [
            [0, 0, 0, -1],
            [0, 0, 0, -2],
            [0, 0, 0, -3]
          ]
        ],
        'knight': [
          [1, 2, 0, 0],
          [-1, 2, 0, 0],
          [1, -2, 0, 0],
          [-1, -2, 0, 0],
          [2, 1, 0, 0],
          [-2, 1, 0, 0],
          [2, -1, 0, 0],
          [-2, -1, 0, 0],
          [1, 0, 2, 0],
          [-1, 0, 2, 0],
          [1, 0, -2, 0],
          [-1, 0, -2, 0],
          [2, 0, 1, 0],
          [-2, 0, 1, 0],
          [2, 0, -1, 0],
          [-2, 0, -1, 0],
          [1, 0, 0, 2],
          [-1, 0, 0, 2],
          [1, 0, 0, -2],
          [-1, 0, 0, -2],
          [2, 0, 0, 1],
          [-2, 0, 0, 1],
          [2, 0, 0, -1],
          [-2, 0, 0, -1],
          [0, 1, 2, 0],
          [0, -1, 2, 0],
          [0, 1, -2, 0],
          [0, -1, -2, 0],
          [0, 2, 1, 0],
          [0, -2, 1, 0],
          [0, 2, -1, 0],
          [0, -2, -1, 0],
          [0, 1, 0, 2],
          [0, -1, 0, 2],
          [0, 1, 0, -2],
          [0, -1, 0, -2],
          [0, 2, 0, 1],
          [0, -2, 0, 1],
          [0, 2, 0, -1],
          [0, -2, 0, -1],
          [0, 0, 1, 2],
          [0, 0, -1, 2],
          [0, 0, 1, -2],
          [0, 0, -1, -2],
          [0, 0, 2, 1],
          [0, 0, -2, 1],
          [0, 0, 2, -1],
          [0, 0, -2, -1]
        ],
        'bishop': [
          [
            [1, 1, 0, 0],
            [2, 2, 0, 0],
            [3, 3, 0, 0]
          ],
          [
            [-1, 1, 0, 0],
            [-2, 2, 0, 0],
            [-3, 3, 0, 0]
          ],
          [
            [1, -1, 0, 0],
            [2, -2, 0, 0],
            [3, -3, 0, 0]
          ],
          [
            [-1, -1, 0, 0],
            [-2, -2, 0, 0],
            [-3, -3, 0, 0]
          ],
          [
            [1, 0, 1, 0],
            [2, 0, 2, 0],
            [3, 0, 3, 0]
          ],
          [
            [-1, 0, 1, 0],
            [-2, 0, 2, 0],
            [-3, 0, 3, 0]
          ],
          [
            [1, 0, -1, 0],
            [2, 0, -2, 0],
            [3, 0, -3, 0]
          ],
          [
            [-1, 0, -1, 0],
            [-2, 0, -2, 0],
            [-3, 0, -3, 0]
          ],
          [
            [1, 0, 0, 1],
            [2, 0, 0, 2],
            [3, 0, 0, 3]
          ],
          [
            [-1, 0, 0, 1],
            [-2, 0, 0, 2],
            [-3, 0, 0, 3]
          ],
          [
            [1, 0, 0, -1],
            [2, 0, 0, -2],
            [3, 0, 0, -3]
          ],
          [
            [-1, 0, 0, -1],
            [-2, 0, 0, -2],
            [-3, 0, 0, -3]
          ],
          [
            [0, 1, 1, 0],
            [0, 2, 2, 0],
            [0, 3, 3, 0]
          ],
          [
            [0, -1, 1, 0],
            [0, -2, 2, 0],
            [0, -3, 3, 0]
          ],
          [
            [0, 1, -1, 0],
            [0, 2, -2, 0],
            [0, 3, -3, 0]
          ],
          [
            [0, -1, -1, 0],
            [0, -2, -2, 0],
            [0, -3, -3, 0]
          ],
          [
            [0, 1, 0, 1],
            [0, 2, 0, 2],
            [0, 3, 0, 3]
          ],
          [
            [0, -1, 0, 1],
            [0, -2, 0, 2],
            [0, -3, 0, 3]
          ],
          [
            [0, 1, 0, -1],
            [0, 2, 0, -2],
            [0, 3, 0, -3]
          ],
          [
            [0, -1, 0, -1],
            [0, -2, 0, -2],
            [0, -3, 0, -3]
          ],
          [
            [0, 0, 1, 1],
            [0, 0, 2, 2],
            [0, 0, 3, 3]
          ],
          [
            [0, 0, -1, 1],
            [0, 0, -2, 2],
            [0, 0, -3, 3]
          ],
          [
            [0, 0, 1, -1],
            [0, 0, 2, -2],
            [0, 0, 3, -3]
          ],
          [
            [0, 0, -1, -1],
            [0, 0, -2, -2],
            [0, 0, -3, -3]
          ]
        ],
        'king': [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 1],
          [1, 1, 0, 0],
          [1, 0, 1, 0],
          [1, 0, 0, 1],
          [0, 1, 1, 0],
          [0, 1, 0, 1],
          [0, 0, 1, 1]
        ]
      };
      Spot.spotSets['queen'] = Spot.spotSets['bishop'].concat(Spot.spotSets['rook']);
    }
  }

  static getSpotsFor (query) {
    Spot.init();
    return [].concat(Spot.spotSets[query]);
  }

}
