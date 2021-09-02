var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        inStock: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg"
            }
        ],
        cart: 0
    },
    methods: {
        addToCart(param) {
            this.cart += param;
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})