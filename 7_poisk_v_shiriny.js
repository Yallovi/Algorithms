/**
 * * Поиск в ширину.
 * * Граф - некая абстрактная структура данных, представляющая собой множество вершин и набор ребер. Пример: карта - это граф, где маршруты это ребра, а города вершины.
 * * Ребра бывают однонаправленные и двунаправленные. Двунаправленные - это когда из точки "А" модем попасть в "В" и из "В" в "А".
 * * В этом алгоритме работает такая структура данных, как очередь.
 * @format
 */

/**
 * * Очередь - это такая структура данных, состоящая из каких-то элементов. Принцип заключается в том, что элементы добавляются в конец структуры, а извлекаются сначала.
 * * Как в настоящей живой очереди. Первый в очередь встал - первый вышел
 * * FIFO - first in first out
 */

const graph = {};

graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

function breadthSearch(graph, start, end) {
  let queue = []; //* Создаем очередь, из которой можем извлекать начало и добавлять в конец
  queue.push(start); //* Сразу добавляем стартовую вершину в очередь

  //* Создаем цикл и будем крутиться там пока есть хотя бы один элемент
  while (queue.length > 0) {
    const current = queue.shift(); //* Достаем с начала

    if (!graph[current]) {
      graph[current] = []; //* То есть из вершины "current" никуда пути нет
    }

    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }
  return false;
}

// console.log(breadthSearch(graph, "a", "n"));

// Поиск в глубину. Задача Number of Islands

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
// Output: 1;

let grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
//Output: 3

function IslandCount(grid) {
  if (!grid.length) return 0;

  let counter = 0;
  let [rows, cols] = [grid.length, grid[0].length];

  function markNeighbors(grid, r, c) {
    grid[r][c] = 2;

    if (grid[r][c - 1] === "1") {
      markNeighbors(grid, r, c - 1);
    }
    if (grid[r][c + 1] === "1") {
      markNeighbors(grid, r, c + 1);
    }
    if (grid?.[r - 1]?.[c] === "1") {
      markNeighbors(grid, r - 1, c);
    }
    if (grid?.[r + 1]?.[c] === "1") {
      markNeighbors(grid, r + 1, c);
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        counter += 1;
        markNeighbors(grid, r, c);
      }
    }
  }
  return counter;
}

console.log("IslandCount=>", IslandCount(grid));
