import * as React from 'react';
import * as ReactDOM from 'react-dom';

require ('./main.scss');

// Our first components!

const posts = [
  { title: "Awesome Post 1", replies:[
    { text:"Great post... Well done"}
  ]},
  { title: "Awesome Post 2", replies:[
    { text:"Great post as well... Well done"}
  ]},
  { title: "Awesome Post 3", replies:[
    { text:"Great post as also... Well done"}
  ]}
]


class ReplyBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      photoAdded: false
    }
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

  render () {
    return (
      <div className="well clearfix">
          { this._overflowAlert() }
          <h5>Replying to : { this.props.post.title }</h5>
          <textarea    onChange={this._handleChange.bind(this)} className="form-control"/>
            <br/>
          <span>
            { this._remainingChars() }
          </span>
          <button
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

class Post extends React.Component {

    _renderReplies() {
        return (
          <div>
            <h3>Replies:</h3>
            { this.props.post.replies.map((reply, index)=> {
              return (
                <h3 key={index}>
                  { reply.text }
                </h3>
              )
            })}
          </div>)
    }

  render () {
    return (
      <div>
        <h1>{this.props.post.title}</h1>
        { this.props.post.replies.length ? this._renderReplies() : ''}
        <ReplyBox post={this.props.post}/>
      </div>
    )
  }
}

class App extends React.Component {

  render() {
    return (<div>
      <h1>Post & Replies</h1>
        { posts.map((post, index)=>{
          return (<Post post={post} key={index}/>)
        }) }
    </div>)
  }
}



ReactDOM.render(<App/>, document.getElementById('react-app'));

// class LightSwitch extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state={ on: false };
//   }
//
//   _switch() {
//     this.setState({ on: !this.state.on });
//   }
//
//   render () {
//     return (
//       <div>
//         {/*<h1>The light is { this.state.on ? 'on' : 'off' }!</h1>*/}
//
//         {/*OR*/}
//
//         { this.state.on ? <h1>The light is on!</h1> : <h4>The light is off!</h4> }
//         <button onClick={this._switch.bind(this)}>Switch</button>
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(<LightSwitch/>, document.getElementById('react-app'));

// // REVIEW FILTER & MAP
//
// const list = [1,2,3,4,5,6,7,8,9];
//
// // FILTER
// const greaterThanFive = list.filter(item => item > 5);
//
// console.log(list, greaterThanFive);
//
// // MAP
// const elementsTimesTwo = list.map(item => item * 2);
//
// console.log(list, elementsTimesTwo);
