AddAttendee = React.createClass({
  getInitialState: function () {
    return { name: "", phone: "" };
  },

  updateName: function (e)  {
    e.preventDefault();

    var newState = this.state;
    newState.name = e.currentTarget.value;

    this.setState(newState);
  },

  updatePhone: function (e)  {
    e.preventDefault();

    var newState = this.state;
    newState.phone = e.currentTarget.value;

    this.setState(newState);
  },

  addAttendee: function (e) {
    e.preventDefault();

    if ( this.validateName(this.state.name) &&
         this.validatePhone(this.state.phone) ) {
      var newAttendee = this.state;
          newAttendee.meal_id = this.props.mealId;
      ApiUtil.addAttendee(newAttendee)
    } else {
      console.log("empty field(s) - attendee not added")
    }
  },

  validateName: function (name) {
    if ( name.length ) { return true; }

    return false;
  },  

  validatePhone: function (phone) {
    if ( phone.length ) { return true; }

    return false;
  },

  render: function () {
    console.log(this.state);
    return (
      <div className="row">
        <h4>Invite a friend to this meal</h4>
        <div className="col-sm-8 col-sm-offset-2">
          <form role="form" className="form form-inline"
                            onSubmit={this.addAttendee}>

              <div className="form-group">
                    <input className="form-control"
                           id="name"
                           type="text"
                           placeholder="Name"
                           onChange={this.updateName}
                           value={this.state.name}>
                    </input>                    
                    <input className="form-control"
                           id="phone"
                           type="text"
                           placeholder="Phone"
                           onChange={this.updatePhone}
                           value={this.state.phone}>
                    </input>
                    <input className="btn btn-primary"
                           type="submit"
                           value="Send"/>
                  </div>

          </form>
        </div>
      </div>
    );
  }
});
