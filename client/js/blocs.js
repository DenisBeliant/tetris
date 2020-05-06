const BLOCS = {
    1: {
      // BLOC L
      id: 1,
      cells: [
        // Tableau avec un tableau à double-entrée pour chaque index
        [
          [true, false, false], // Ligne 1
          [true, true, true],
        ], // Ligne 2
        [
          [true, true],
          [true, false],
          [true, false],
        ],
        [
          [true, true, true],
          [true, false, false],
        ],
        [
          [false, true],
          [false, true],
          [true, true],
        ],
      ],
      color: "pink",
    },
    2: {
      id: 2,
      // BLOC T
      cells: [
        [
          [true, true, true],
          [false, true, false],
        ],
        [
          [true, false],
          [true, true],
          [true, false],
        ],
        [
          [false, true, false],
          [true, true, true],
        ],
        [
          [false, true],
          [true, true],
          [false, true],
        ],
      ],
      color: "blue",
    },
    3: {
      id: 3,
      // BLOC I
      cells: [[[true, true, true, true]], [[true], [true], [true], [true]]],
      color: "red",
    },
    4: {
      id: 4,
      // BLOC Z
      cells: [
        [
          [true, true, false],
          [false, true, true],
        ],
        [
          [false, true],
          [true, true],
          [true, false],
        ],
      ],
      color: "yellow",
    },
  };