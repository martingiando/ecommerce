export function getProdFromDatabase() {
    return new Promise((resolve) => {
        resolve(products);
    });
}

export function getProdSolo() {
    return new Promise((resolve) => {
        resolve(products);
    });
}

const products = [
    {
        id: 1,
        producto: 'Procesador',
        modelo: 'intel core i9',
        img: 'https://http2.mlstatic.com/D_NQ_NP_656195-MLA43406757007_092020-O.webp',
        precio: 95900,
        stock: 50
    },
    {
        id: 2,
        producto: 'Placa de Video',
        modelo: 'nvidia rtx 2070',
        img: 'https://http2.mlstatic.com/D_NQ_NP_852821-MLA41349346486_042020-O.webp',
        precio: 94999,
        stock: 30
    },
    {
        id: 3,
        producto: 'Placa Madre',
        modelo: 'Asus Prime H310m E',
        img: 'https://http2.mlstatic.com/D_NQ_NP_722310-MLA31630501020_072019-O.webp',
        precio: 7399,
        stock: 25
    }
]

// export const getProducts = () => {
//     return new Promise((resolve) => {
//         resolve(products)
//     })
// }

// export const getProductById = (id) => {
//     return new Promise((resolve, reject) => {
//         resolve(
//             products.find((product) => product.id == id)
//         )
//     })
// }