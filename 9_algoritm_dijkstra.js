/** @format */

let graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function shortPath(graph, start, end) {
  let costs = {}; //Объект для хранения кратачайшего пути
  let processed = []; //  будут храниться узлы, которые мы уже проверили
  let neighbors = {}; // будут храниться соседи рассматриваемого узла

  Object.keys(graph).forEach((node) => {
    if (start !== node) {
      const value = graph[start][node];
      costs[node] = value || 1000000;
    }
  });

  //создаем функцию для поиска узла c минимальным значением
  node = findNodeLowestCost(costs, processed);

  while (node) {
    let cost = costs[node]; // минимальное значение
    neighbors = graph[node];

    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor];

      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });
    processed.push(node);
    node = findNodeLowestCost(costs, processed);
  }
  return costs;
}

function findNodeLowestCost(costs, processed) {
  let lowestCost = 1000000;
  let lowestNode;

  Object.keys(costs).forEach((node) => {
    let cost = costs[node];

    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });

  return lowestNode;
}

// console.log(shortPath(graph, "a", "g"));

let graph1 = {};
graph1.a = { b: 2, c: 1 };
graph1.b = { f: 7 };
graph1.c = { d: 5, e: 2 };
graph1.d = { f: 2 };
graph1.e = { f: 1 };
graph1.f = { g: 1 };
graph1.g = {};

function testShortPath(graph, start, end) {
  let costs = {};
  let checkedNodes = [];
  let neighbors = {};

  Object.keys(graph).forEach((node) => {
    if (start !== node) {
      const value = graph[start][node];

      costs[node] = value || 1000000;
    }
  });

  node = fineNodeLowestCost(costs, checkedNodes);

  while (node) {
    let cost = costs[node];
    neighbors = graph[node];

    Object.keys(neighbors).forEach((neighbor) => {
      let new_cost = cost + neighbors[neighbor];

      if (new_cost < costs[neighbor]) {
        costs[neighbor] = new_cost;
      }
    });

    checkedNodes.push(node);
    node = findNodeLowestCost(costs, checkedNodes);
  }

  return costs;
}

function fineNodeLowestCost(costs, checkedNodes) {
  let lowestCost = 1000000;
  let lowestNode;

  Object.keys(costs).forEach((node) => {
    let cost = costs[node];

    if (cost < lowestCost && !checkedNodes.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });

  return lowestNode;
}

console.log(testShortPath(graph1, "a", "g"));
