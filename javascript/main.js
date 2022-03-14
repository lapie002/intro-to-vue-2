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
                variantId: 2234,
                variantColor: '#4cb686',
                variantImage: './assets/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColor: '#445a72',
                variantImage: './assets/vmSocks-blue-onWhite.jpg'
            }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0
    },

    methods: {

        addToCart() {
            this.cart += 1
        },

        removeFromCart() {
            if (this.cart !== 0) {
                this.cart -= 1
            }
        },

        updateProduct(image) {
            this.image = image
        }
    }
})