const App = {
    data(){
        return {
            counter : 0,
            title : 'счетчик'
        }
    }
}

Vue.createApp(App).mount("#app")