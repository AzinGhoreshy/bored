Vue.createApp({
    data() {
      return {
        name: ""
      }
    },
    methods: {
        close()
        {

            if (process.platform !== 'darwin') require("electron").app.quit()
        }
    }
}).mount('#app')