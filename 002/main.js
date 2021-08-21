var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        images: [
            'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
            'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
        ],
        image: ''
    },
    methods: {
        changeImage(){

            // сколько у нас элементов в массиве картинок?
            let count_images = this.images.length;
            // текущий элемент массива
            let current_element_index = this.images.indexOf(this.image);
            // выставляем новый индекс
            let new_image_index = current_element_index < (count_images - 1) ? current_element_index + 1 : 0;
            this.image = this.images[new_image_index];
        }
    },
    mounted () {
        // при загрузке устанавливаем по-умолчанию первую картинку
        this.image = this.images[0];
    }
})