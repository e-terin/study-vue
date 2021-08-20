var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg"
    },
    methods: {
        changeImage(){
            this.image = 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg';
        }
    }
})