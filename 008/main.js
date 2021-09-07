Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
          <div class="product">
            <div class="product-image">
                <img :src="image" />
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>
                <p>Shipping: {{ shipping }}</p>
                <p v-if="inStock">In stock</p>
                <p v-else :class="{ perech: !inStock}">Out of Stock</p>
                <p v-if="onSale">{{ sale }}</p>
                <product-details :details="details"></product-details>
                </ul>
                <div
                    class="color-box"
                    v-for="(variant, index) in variants"
                    :key="variant.variantId"
                    :style="{ backgroundColor:variant.variantColor }"
                    @mouseover="updateProduct(index)"
                >
                </div>

                <div class="cart">
                    <p>Cart({{ cart }})</p>
                </div>
                <button v-on:click="addToCart(1)" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to cart</button>
                <button v-on:click="addToCart(-1)">Remove</button>

            </div>
        </div>`,
    data() {
        return {
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
        }
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
        },
        shipping() {
                return (this.premium) ? "Free" :  2.99;
        }
    }
})


Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>`
})

let app = new Vue({
    el: '#app',
    // эти данные будут передаваться в компонент
    data: {
        premium: true
    }
})

