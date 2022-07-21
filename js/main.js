const app = new Vue({
    el: '#app',
    data: {

        gifDom: 'https://i.imgur.com/6AIJtr5.gif',
        styleGif: 'style-gif',
        message:'Hello World!',
        visibility: 'hidden'
    },
    methods: {
        btn(){
            if (this.visibility == 'hidden'){
                this.visibility = 'show';
            }
        }
    }

  })
