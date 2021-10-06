// где то выше в коде
let data1 = 'some_data';

// Создаем объект-конфигурацию
const Counter = {
    data() {
        return {
            counter: 0
        }
    },
    props: ['property']
}

// Вот так реализуется передача данных в корневой элемент
// подробнее на https://v3.vuejs.org/guide/migration/props-data.html
const PropsData = {
    property: data1
}

Vue.createApp(Counter, PropsData).mount('#counter');