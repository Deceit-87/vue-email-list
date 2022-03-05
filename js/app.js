var app = new Vue({
    el: '#app',
    data: {

      email:[],

    },

    created() {
        for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                 .then( (eMail) => {
                  console.log(eMail.data.response);
                  eMail = eMail.data.response;
                  this.email.push(eMail);
                })
            }
                

             console.log(this.email)
   },

}) 
