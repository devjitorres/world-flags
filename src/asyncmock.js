

const products = [
    {
        id: '1',
        type: 'Flag',
        country: 'Argentina',
        price: 2500,
        continent: 'America',
        img: '/images/Flag-Argentina.webp',
        stock: 25,
        description: 'Bandera de Argentina de flameo estampada según Normas IRAM 1,40 x 2,24 mts.',
    },
    {id: '2', type: 'Scarf', country: 'Brazil', price: 1200, continent: 'America', img: '/images/Scarf-Brazil.webp', stock: 20, description: 'Bufanda para alentar a la selección brasilera de fútbol.'},
    {id: '3', type: 'Flag', country: 'Germany', price: 2500, continent: 'Europe', img: '/images/Flag-Germany.webp', stock: 3, description: 'Bandera de Alemania de flameo estampada según Normas IRAM 1,40 x 2,24 mts.'},
    {id: '4', type: 'Flag', country: 'Brazil', price:2500, continent: 'America', img: '/images/Flag-Brazil.webp', stock: 0, description: 'Bandera de Brasil de flameo estampada según Normas IRAM 1,40 x 2,24mts.'}

]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}