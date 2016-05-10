import * as React from 'react';
import * as ReactDOM from 'react-dom';

require ('./main.scss');

// Components
import Post from './post';


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

// Our first components!

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
