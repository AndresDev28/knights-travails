function knightMoves(start, end) {
  // Caso base: el nodo de entrada es igual que el de salida
  if (start == end) {
    return [start]; 
  }

  // BSF algorithm implementation to find the shortess path.
  function bsf(startSquare, endSquare) {
    const queue = []; // Cola para el algoritmo BFS (casillas a visitar)
    const visitedSquares = new Set(); // Usamos new Set() para crear un nuevo objero Set. Representa el conjunto de casillas visitadas
    const parentMap = new Map(); // Usamos new Map() para crear un nuevo objeto Map y recordar el "padre" de cada casilla en el camino

    // Agregamos la casilla de inicion a la cola para empezar el BSF
    queue.push(startSquare); 
    // Marcamos la casilla de inicio como visitada y convertida a primitivas para poder usarlas como clave del Set()
    visitedSquares.add(JSON.stringify(startSquare)); 
    // Establecemos que el "padre" de la casilla de inicio es null ya que es la el punto de partida y no tiene padre.
    parentMap.set(JSON.stringify(startSquare), null);  

    //console.log("BFS Starting. Target:", endSquare); Depurar

    // Bucle principal de BSF
    while (queue.length > 0) {
      // Desencolar una casilla de la cola
      const currentSquare = queue.shift()
      //console.log("Processing square:", currentSquare); Depurar
      // Verificar si currenteSquare es la casilla de destino (end)
      if (currentSquare[0] === endSquare[0] && currentSquare[1] === endSquare[1]) {
        // console.log("Target found:", currentSquare); Depurar
        // Hemos encontrado el camino mas corto, llamamos a reconstructPath y retornamos el resultado
        return reconstrucPath(currentSquare, parentMap);
      }else {
        const availableMoves = getValidKnightMoves(currentSquare);
        // console.log("Valid moves from", currentSquare, ":", availableMoves); Depurar
        availableMoves.forEach(nextMove => {
          const nextMoveStr = JSON.stringify(nextMove)
          if (!visitedSquares.has(nextMoveStr)) {
            // console.log("  Enqueuing new move:", nextMove); Depurar
            // Marcar como visitada a nestMove
            visitedSquares.add(nextMoveStr);
            // Establecer el padre de nextMove
            parentMap.set(nextMoveStr, currentSquare);
            // Encolar a nextMove
            queue.push(nextMove);
          }else {
            // console.log("Move already visited:", nextMove) Depurar
          }
        });
      }
    }
    console.log("Queue empty, target not found (shouldn't happen in this problem)");
    return null;
  }
  const path = bsf(start, end);

  if (path) {
    const movesCounts = path.length - 1;
    console.log(`You made it in ${movesCounts} move/s. Here's your path:\n`);
    path.forEach(square => {
      console.log(`[${square[0]}, ${square[1]}]`);
    });
    return path;
  }
  // Llamamos BFS con la casilla de inicion de knightMoves
  //return bsf(start, end);
}

function getValidKnightMoves(square) {
  // square is an array [x, y]
  // Initialize an empty array to savee the valid moves of the  Knight
  let validMoves = [];

  // Define the 8 possible moves of the knight as pairs of changes [dx, dy]
  const possibleMoves = [
    [2, 1], [2, -1], 
    [-2, 1], [-2, -1],
    [1, 2], [1, -2],
    [-1, 2], [-1, -2]
  ];

  // Get the x and y cordinates of the starting square
  let current_x = square[0];
  let current_y = square[1];

  // For each possible move in the possibleMoves list:
  possibleMoves.forEach(move => {
    // Obtener dx y dy del 'move'actual
    let dx = move[0]; // The first element of 'move'is the move change in x
    let dy = move[1]; // The second element of 'move'is the move change in y

    // Calculate new cordinates
    let new_x = current_x + dx;
    let new_y = current_y + dy;

    // Check if the new square is within the board bounderies (with function isValidSquare)
    if (isValidSquare(new_x, new_y)) {
      let newSquare = [new_x, new_y];
      // Add the new square to validMoves list
      validMoves.push(newSquare);
    }
  });
  return validMoves;
}
function isValidSquare(x, y) {
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7 ) {
    return true;
  }else {
    return false;
  }
}

function reconstrucPath(targetSquare, parentMap) {
  // Array para almacenar el camino reconstruído
  const path = []; 
  // Empezamos desde la casilla de inicio
  let currentSquare = targetSquare;
  // Retrocedemos desde la casilla destino hasta el principio siguiento los "padres" en parentMap
  while (currentSquare !== null) {
    // Agregamos la casilla actual al inicio del array (para mantener el ordern correcto)
    path.unshift(currentSquare); 
    // Obtenemos la casilla "padre" de la casilla actual desde parentMap y actualizamos a currentSquare
    currentSquare = parentMap.get(JSON.stringify(currentSquare));
  }
  // Devolvemos el array path que contiene el camino completo
  return path;
}

// console.log("Movimientos para [0, 0]\n");
// console.log(getValidKnightMoves([0, 0]));
// console.log("\nMovimientos para [3, 3]\n");
// console.log(getValidKnightMoves([3, 3]));
// console.log("Movimientos para [3, 0]\n");
// console.log(getValidKnightMoves([7, 7]));
// console.log("Movimientos para [0, 7]\n");
// console.log(getValidKnightMoves([0, 7]));
// console.log("Movimientos para [7, 0]\n");
// console.log(getValidKnightMoves([7, 0]));
// console.log("Movimientos para [0, 3]\n");
// console.log(getValidKnightMoves([0, 3]));
// console.log("Movimientos para [7, 4]\n");
// console.log(getValidKnightMoves([7, 4]));
// console.log("Movimientos para [3, 0]\n");
// console.log(getValidKnightMoves([3, 0]));
// console.log("Movimientos para [4, 7]\n");
// console.log(getValidKnightMoves([4, 7]));

// console.log("Movimientos para [0, 0], [1, 2]:", knightMoves([0, 0], [1, 2]));
// console.log("Movimientos para [0, 0], [3, 3]:", knightMoves([0, 0], [3, 3]));
knightMoves([0, 0], [7, 7]);
knightMoves([0, 0], [3, 3]);
knightMoves([0, 0], [4, 7]);
