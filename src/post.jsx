import * as React from 'react';
import ReplyBox from './reply-box';

export default class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      replies: this.props.post.replies
    };
  }

  _submitReply(text){
    this.state.replies.push({  text });
    this.setState({ replies: this.state.replies });
  }

    _renderReplies() {
        return (
          <div>
            <h3>Replies:</h3>
            { this.state.replies.map((reply, index)=> {
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
        { this.state.replies.length ? this._renderReplies() : ''}
        <ReplyBox
          post={this.props.post}
          submitReply={ this._submitReply.bind(this) }
          />
      </div>
    )
  }
}
