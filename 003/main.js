var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        stock:100,
        onSale: true
    },
    methods: {
        changeOnSale() {
            this.onSale = !this.onSale
        }
    }
})