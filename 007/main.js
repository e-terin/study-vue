var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        brand: 'Gloria Jeens',
        selectedVariant: 0,
        onSale: false,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
                variantQuantity: 0
            }
        ],
        cart: 0
    },
    methods: {
        addToCart(param) {
            this.cart += param;
        },
        updateProduct(index) {
            this.selectedVariant = index;
            console.log(index);
        }
    },
    // в коде вычисляемых свойств не следует менять данные, хранящиеся в экземпляре Vue
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        },
        sale() {
            return (this.onSale) ? 'Распродажа ' + this.brand + ' ' + this.product : '';
        }
    }
})