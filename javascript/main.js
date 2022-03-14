let app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        link: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        inStock: true,
        onSale: false,
        details:['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 1,
                variantColor: 'blue'
            },
            {
                variantId: 2,
                variantColor: 'green'
            },
            {
                variantId: 3,
                variantColor: 'pink'
            }
        ],
    }
})