/** @format */

/**
 * * Алгоритмы связанные с обходом дерева.
 * * Деревья рекурсивная структура данных, где каждый узел является также деревом, но для данного дерева, каждый узел является поддеревом
 */

/**
 * * Стэк - это такая структура данных, в которой элементы добавляются в конец и берутся тоже из конца
 * * LIFO - last in first out
 * * image/stack.png
 */

const tree = [
  {
    v: 5, //* Значение узла - value
    //* c - это его дети - child
    c: [
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 10,
      },
      {
        v: 15,
      },
    ],
  },
];

/**
 * *Рекурсивный способ обхода
 */
function recursion(tree) {
  let sum = 0;

  tree.forEach((node) => {
    sum += node.v;

    if (!node.c) {
      return node.v;
    }

    sum += recursion(node.c);
  });
  return sum;
}

// console.log("recursion =>", recursion(tree));

/**
 * *С помощью цикла. Здесь используем структуру данных "Стэк"
 */
function iteration(tree) {
  if (!tree.length) {
    return 0;
  }

  let sum = 0;
  let stack = [];

  tree.forEach((node) => stack.push(node));
  while (stack.length) {
    const node = stack.pop();

    sum += node.v;

    if (node.c) {
      node.c.forEach((child) => stack.push(child));
    }
  }
  return sum;
}

// console.log("iteration: ", iteration(tree));

function recursionMethod(tree) {
  let sum = 0;

  tree.forEach((node) => {
    sum += node.v;

    if (!node.c) {
      return node.v;
    }

    sum += recursionMethod(node.c);
  });
  return sum;
}

console.log("recursionMethod =>", recursionMethod(tree));

function iterationMethod(tree) {
  if (!tree.length) return 0;

  let sum = 0;
  let stack = [];

  tree.forEach((node) => stack.push(node));

  while (stack.length) {
    let node = stack.pop();

    sum += node.v;

    if (node.c) {
      node.c.forEach((node) => stack.push(node));
    }
  }

  return sum;
}

console.log("iterationMethod =>", iterationMethod(tree));
