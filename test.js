/** @format */

const graph = {};
graph.a = { b: 6, c: 2 };
graph.b = { g: 1 };
graph.c = { b: 3, g: 5 };
graph.g = {};

function shortPath(graph, start, end) {
  let costs = {};
  const checkedNode = [];
  let neighbors = {};

  Object.keys(graph).forEach((node) => {
    if (start !== node) {
      let value = graph[start][node];

      costs[node] = value || 1000000;
    }
  });

  node = findNodeLowestCost(costs, checkedNode);

  while (node) {
    let cost = costs[node];
    neighbors = graph[node];

    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor];

      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });

    checkedNode.push(node);

    node = findNodeLowestCost(costs, checkedNode);
  }

  return costs;
}

function findNodeLowestCost(costs, checkedNode) {
  let lowestCost = 1000000;
  let lowestNode;

  Object.keys(costs).forEach((node) => {
    if (costs[node] < lowestCost && !checkedNode.includes(node)) {
      lowestCost = costs[node];
      lowestNode = node;
    }
  });

  return lowestNode;
}

// console.log(shortPath(graph, "a", "g"));
