let app = new Vue({
    el: '#app',

    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        selectedVariant: 0,
        description: 'A pair of warm, fuzzy socks',
        link: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        details:['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: '#4cb686',
                variantImage: './assets/vmSocks-green-onWhite.jpg',
                variantQuantity: 10,
                variantOnSale: true
            },
            {
                variantId: 2235,
                variantColor: '#445a72',
                variantImage: './assets/vmSocks-blue-onWhite.jpg',
                variantQuantity: 0,
                variantOnSale: false
            }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0
    },

    computed: {
        title() {
            return this.brand + ' ' + this.product
        },

        image() {
            return this.variants[this.selectedVariant].variantImage
        },

        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },

        onSale() {
            return !!this.variants[this.selectedVariant].variantQuantity
        }
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

        updateProduct(index) {
            this.selectedVariant = index
        }
    }
})