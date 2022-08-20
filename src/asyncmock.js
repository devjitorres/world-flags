

const products = [
    {
        id: '1',
        type: 'Bandera',
        country: 'Argentina',
        price: 2500,
        continent: 'America',
        img: '/images/Flag-Argentina.webp',
        stock: 25,
        description: 'Bandera de Argentina de flameo estampada según Normas IRAM 1,40 x 2,24 mts.',
    },
    {id: '2', type: 'Bufanda', country: 'Brasil', price: 1200, continent: 'America', img: '/images/Scarf-Brazil.webp', stock: 20, description: 'Bufanda para alentar a la selección brasilera de fútbol.'},
    {id: '3', type: 'Bandera', country: 'Alemania', price: 2500, continent: 'Europa', img: '/images/Flag-Germany.webp', stock: 3, description: 'Bandera de Alemania de flameo estampada según Normas IRAM 1,40 x 2,24 mts.'}

]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}