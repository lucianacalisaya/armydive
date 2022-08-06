const products = [
    {
        id: '1',
        name: 'Proof',
        price: '72.95',
        category: 'album',
        img: 'https://cdn.shopify.com/s/files/1/2282/8555/products/pr-apple-music-album-bts-proof-29915380383824_5000x.jpg?v=1651716584',
        stock: '15',
        description: 'CONTENTS OF STANDARD EDITION : 1 OUT SLEEVE 1 OUTER BOX 1 THE ART OF PROOF (132P) 1 PHOTOGRAPH (104P) 1 EPILOGUE (80P) 1 LYRICS (44P) 1 CD PLATE 3 CD 1 PHOTO CARD A SET (7EA) 1 PHOTO CARD B (RANDOM 1 OUT OF 8) 1 POSTCARD (RANDOM 1 OUT OF 8)'
    },
    {
        id: '2',
        name: 'Map of the soul: 7',
        price: '46.95',
        category: 'album',
        img: 'https://cdn.shopify.com/s/files/1/2282/8555/products/apple-music-random-bts-map-of-the-soul-7-28597621424208_5000x.png?v=1628463650',
        stock: '28',
        description: 'CONTENTS OF STANDARD EDITION: 1 PHOTO BOOK (36P) 1 LYRIC BOOK (52P) 1 CD 1 MINI BOOK "화양연화 THE NOTE" (20P) 1 PHOTO CARD (RANDOM 1 OUT OF 8) 1 POSTCARD 1 STICKER 1 COLORING PAPER'
    },
    {
        id: '3',
        name: 'BE (Deluxe Edition)',
        price: '59.95',
        category: 'album',
        img: 'https://cdn.shopify.com/s/files/1/2282/8555/products/apple-music-bts-be-deluxe-edition-28598083878992_5000x.png?v=1628431977',
        stock: '4',
        description: 'CONTENTS OF STANDARD EDITION: 1 PACKAGE 1 PHOTO BOOK (100P, 92P) 1 MAKING BOOK (32P) 1 CD 1 LYRIC POSTER 1 PHOTO CARD SET (8EA) 1 POLAROID PHOTO CARD 1 PHOTO FRAME 1 POSTCARD SET (7EA) 1 FOLDED POSTER (ON PACK)'
    },
    {
        id: '4',
        name: 'BTS X FILA DYNAMITE COLLECTION',
        price: '109.95',
        category: 'merch',
        img: 'https://cdn.shopify.com/s/files/1/2282/8555/products/fila-bts-x-fila-dynamite-collection-28806670712912_5000x.png?v=1631760702',
        stock: '72',
        description: 'Sweatshirt, Hoodie, Knitted Beanie, Knitted Muffler, Socks, String bag, Pouch set'
    },
    {
        id: '3',
        name: 'NEW ERA X MLB OFFICIAL COLLABORATION',
        price: '59.95',
        category: 'merch',
        img: 'https://cdn.shopify.com/s/files/1/2282/8555/products/new-era-fashion-bts-new-era-x-mlb-official-collaboration-29850084081744_5000x.png?v=1651037620',
        stock: '64',
        description: 'T-shirt, Bucket hat, Ball cap,'
    }
]

export const getProductsFromMarket = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 250)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}