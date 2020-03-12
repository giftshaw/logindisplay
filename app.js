new Vue({
    el:"#app",

data: {
    email: null,
    password: null,
    myEmail: null,
    myPassword: null,
    hide: false
},
methods: {
  displayDetails: function() {
      if(this.email)
      this.hide = true
this.myEmail = this.email
this.myPassword = this.password
this.email = ""
this.password = ""
  }
}

});