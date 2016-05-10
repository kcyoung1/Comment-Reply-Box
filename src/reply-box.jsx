import * as React from 'react';

export default class ReplyBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      photoAdded: false
    };
  }

  _handleChange(event) {
    this.setState({ text: event.target.value });
  }

  _togglePhoto() {
      this.setState({ photoAdded: !this.state.photoAdded });
    }

  _remainingChars() {
    if (this.state.photoAdded) {
      return 140 - 27 - this.state.text.length;
    } else {
      return 140 - this.state.text.length;
    }
  }

  _overflowAlert() {

    const overflowText = this.state.photoAdded ? this.state.text.substring((140 - 27), this.state.text.length) : this.state.text.substring(140, this.state.text.length)

    if(this._remainingChars() < 0) {
        return (
          <div className= "alert alert-warning">
              <strong>Too long: ... { overflowText } </strong>

          </div>)
    } else {
        return '';
      }
    }

  _submitReply(){
    this.props.submitReply(this.state.text);
  }

  render () {
    return (
      <div className="well clearfix">
          { this._overflowAlert() }
          <h5>Replying to : { this.props.post.title }</h5>
          <textarea
              onChange={this._handleChange.bind(this)} className="form-control"/>
            <br/>
          <span>
            { this._remainingChars() }
          </span>
          <button
            onClick={this._submitReply.bind(this)}
            className="btn btn-primary pull-right"

            disabled={ this.state.text.length === 0 && !this.state.photoAdded }>
              Post Reply
            </button>
          <button
            onClick={this._togglePhoto.bind(this)}
            className="btn btn-default pull-right">
            { !this.state.photoAdded ? 'Add Photo' : 'Photo Added' }
          </button>
      </div>)
  }
}
