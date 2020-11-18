export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        resolve(
            [
                {
                    producto: 'procesador',
                    modelo: 'intel core i9',
                    img: 'https://http2.mlstatic.com/D_NQ_NP_656195-MLA43406757007_092020-O.webp',
                    precio: 95900,
                    stock: 50
                },
                {
                    producto: 'placa de video',
                    modelo: 'nvidia rtx 2070',
                    img: 'https://http2.mlstatic.com/D_NQ_NP_852821-MLA41349346486_042020-O.webp',
                    precio: 94999,
                    stock: 30
                },
                {
                    producto: 'placa madre',
                    modelo: 'Asus Prime H310m E',
                    img: 'https://http2.mlstatic.com/D_NQ_NP_722310-MLA31630501020_072019-O.webp',
                    precio: 7399,
                    stock: 25
                }
            ])
    })
}

export const getProduct = () => {
    return new Promise ((resolve, reject) => {
        resolve(
                {
                    producto: 'procesador',
                    modelo: 'intel core i9',
                    img: 'https://http2.mlstatic.com/D_NQ_NP_656195-MLA43406757007_092020-O.webp',
                    precio: 95900,
                    stock: 50,
                    ramSoportadas: 'DDR4',
                    procGrafico: 'Intel UHD Graphics 630',
                    maxRam: '128 GB'
                }
            )
    })
}