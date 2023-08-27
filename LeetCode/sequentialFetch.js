const urls = ['url1', 'url2', 'url3'];

function fakeFetch(url, params = '-') {
    // этот вывод в консоль покажет порядок вызовов с их входящими параметрами
    console.log(`fakeFetch to: ${url} with params: ${params}`);
    return new Promise(resolve => {
        setTimeout(() => resolve(`${url} is DONE`), 1000);
    })
};

function generatorWay(callback) {
    function* generatorSequence() {
        let result;
        for (let url of urls) {
            result = yield fakeFetch(url, result)
        }
        return result
    }

    function execute(generator, yieldValue) {
        let next = generator.next(yieldValue)

        if(!next.done) {
            next.value
                .then(result => execute(generator, result))
        } else {
            callback(next.value)
        }
    }
    execute(generatorSequence())
}
// generatorWay()


/**
 * Последовательный fetch через reduce
 */


function reduceWay(callback) {
    urls.reduce((accum, item) => {
        console.log('accum', accum);
        return accum
            .then(res => fakeFetch(item, res))
    }, Promise.resolve())
        .then(result => callback(result));
}

reduceWay(result => console.log(`result: ${result}`))
