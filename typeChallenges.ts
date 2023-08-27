// type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

const array = ['Kars', 'Esidisi', 'Wamuu', 'Santana']

type IsEqual<X, Y> =
    (<T>() => (T extends X ? 1 : 2)) extends
    (<T>() => (T extends Y ? 1 : 2))
        ? true : false

type Includes<T extends unknown[], U> = T extends [infer V, ...infer Rest]
    ? IsEqual<V, U> extends true
        ? true
        : Includes<Rest, U>
    : false


const check: Includes<typeof array, 'Dio'> = false