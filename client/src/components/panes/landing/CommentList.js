import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';

class CommentList extends Component {
  componentDidMount() {
  }

  renderComments(match) {
    return (this.props.comments && this.props.comments.map(
      (comment, i) =>
          (i % 2 === match ? (<Comment key={comment._id} data={comment} />) : null)
      ) || null
    );
  }

  render() {
    return (
      <Fragment>
        <div className="comments-stagger">
          <div className="comments-stagger-left">{ this.renderComments(0) }</div>
          <div className="comments-stagger-right">{ this.renderComments(1) }</div>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps)(CommentList);
