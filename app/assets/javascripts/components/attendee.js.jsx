Attendee = React.createClass({
  removeAttendee: function(e) {
    e.preventDefault();

    setTimeout(function() {
      MealActions.removeAttendee(this.props.attendee);
    }.bind(this), 500 );
  },

  render: function(){
    var attendee = this.props.attendee.email;

    return (
      <tr className="row">
        <td className="col-xs-6 col-xs-offset-2 text-left">{attendee}</td>
        <td className="col-xs-2">
          <button type="submit"
          className="btn btn-default full-width remove"
          onClick={this.removeAttendee}>
            <span className="glyphicon glyphicon-minus"/>
          </button>
        </td>
      </tr>
    );
  }
});
