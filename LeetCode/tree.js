const tree = {
    value: 12,
    s: {
        value: 1,
        p: {
            value:3
        }
    }
}

function recursion(tree) {
    let count = 0

    for (const treeKey in tree) {
        if (typeof  tree[treeKey] === 'number') {
            count += tree[treeKey]
        } else {
            count += recursion(tree[treeKey])
        }
    }

    return count
}
