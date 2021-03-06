SignIn = React.createClass({
  // getInitialState: function(){
  //   return { email: "" };
  // },

  componentDidMount: function(){
    ApiUtil.fetchCurrentUser();
    // CurrentUserStore.addCurrentUserChangeListener(this.userUpdated);
  },

  componentWillUnmount: function(){
    // CurrentUserStore.removeCurrentUserChangeListener(this.userUpdated);
  },

  // updateEmail: function(e) {
  //   e.preventDefault();
  //   this.setState( { email: e.currentTarget.value } );
  // },

  // handleEmail: function(){
  //   if (this.state.email === "") {
  //     $(".email-field").typed({
  //       strings: ["tyler@tyler.tyler"],
  //       typeSpeed: 0
  //     });
  //   }

  //   setTimeout(function(){
  //     $('#sign-up-success').removeClass("hide");
  //   }, 1000);

  //   setTimeout(function(){
  //     $('#sign-up-success').addClass("hide");
  //   }, 3000);

  //   userEmail = this.state.email;
  //   ApiUtil.newUser(userEmail);
  // },


  render: function(){
    var signIn;

    if ( window.CURRENT_USER_PHONE ){
      signIn = 
        <div>
          <div className="row text-center top-buffer sign-in">
            <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
              <h3 className="header">You are logged in as {window.CURRENT_USER_PHONE}</h3>
            </div>
          </div>
        </div>  
    } else {
      signIn = 
        <div>
          <div className="row text-center top-buffer sign-in">
            <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
              <h3 className="header">You are not logged in.</h3>
              <div role="form" className="form">
                <a href="/sign_up" role="button" class="btn btn-info">Sign In </a>
                <a href="/sign_in" role="button" class="btn btn-info">Sign Up </a>
              </div>
            </div>
          </div>
        </div>  
    }

    
    return (signIn);
  }
});
