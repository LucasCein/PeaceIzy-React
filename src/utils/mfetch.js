let productos=[
    {
        id : '635824538e0dc5da8f902a03',
        price: '2824',
        picture: 'https://www.dopesnow.com/images/H0937_01_8qPk3jZ.jpg?w=709&dpr=1',
        category: 'buzo',
        Title: 'Loyd Forro Polar Light Grey Melange'
    },
    {
        id: '63582453bc409c62ee01fb71',
        price: '3654',
        picture: 'https://www.dopesnow.com/images/H1528_01_6QDw0cV.jpg?w=709&dpr=1',
        category: 'buzo',
        Title: 'Pile Forro Polar Phantom'
    },
    {
        id: '63582453e7ba33c3e19115ac',
        price: '1676',
        picture: 'https://ridestore.imgix.net/catalog/product/F0992_01_XvVW7aV.jpg?w=709&auto=format&q=90&dpr=1&usm=15&fit=max',
        category: 'buzo',
        Title: 'Pile Forro Polar Olive Green'
    },
    {
        id: '63582453377428902479a090',
        price: '2174',
        picture: 'https://www.dopesnow.com/images/H1529_01_vflg6bd.jpg?w=709&dpr=1',
        category: 'buzo',
        Title: 'Cozy II Polar con Capucha Paint Orange'
    },
    {
        id: '63582453d72645b5a6e3b0ab',
        price: '3860',
        picture: 'https://www.dopesnow.com/images/H1530_01_Ah41cUH.jpg?w=709&dpr=1',
        category: 'buzo',
        Title: 'Comfy Forro Polar Olive Green'
    },
    {
        id: '635824533214e22713e2e21c',
        price: '2229',
        picture: 'https://www.dopesnow.com/images/H0936_01_EI9gZLr.jpg?w=709&dpr=1',
        category: 'buzo',
        Title: 'Comfy Forro Polar Paint Orange'
    },
    {
        id: '635824536759df524bf87dfe',
        price: '3499',
        picture: 'https://www.dopesnow.com/images/H0859_01_YI6vhEs.jpg?w=709&dpr=1',
        category: 'pantalon',
        Title: 'Iconic Pantalones Snowboard Hombre Olive Green'
    },
    {
        id: '63582453fd162b0bc0f69b85',
        price: '1072',
        picture: 'https://www.dopesnow.com/images/H1521_01_jEmzu1P.jpg?w=709&dpr=1',
        category: 'pantalon',
        Title: 'Iconic Pantalones Snowboard Hombre Sand'
    }
]

export const mfetch = () =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(productos)
        },1000)
    })
}