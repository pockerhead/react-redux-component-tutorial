import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as MessageBox_Actions from '../actions/map_messages'
class MessageBox extends Component {
  msg_btn_Click() {
    this
      .props
      .MessageBox_Actions
      .Stages(this.props.stage);
  }
  render() {
    const {first_enter} = this.props
    if (first_enter == true) {
      var message
      message = this.props.message
      const {avatar} = this.props
      const {el} = this.props
      const {MessageBox_Actions} = this.props
      return (
        <div>
          <div className="modal"></div>
          <div
            className="messagebox mailbox"
            style={{
            animation: 'fadein .2s ease-out'
          }}>
            <p>{message}</p>
            <button
              className='msg_btn'
              onClick={(message != 'Over'
              ? this.msg_btn_Click.bind(this)
              : '')}>
              Далее
            </button>
          </div>
          <div className="npc"><img
            style={{
          animation: (avatar != ''
            ? 'fadeinright .4s ease-out'
            : '')
        }}
            className="avatar"
            src={avatar + '.png'}
            alt=''/></div>
        </div>
      );

    } else {
      return (
        <div></div>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    MessageBox_Actions: bindActionCreators(MessageBox_Actions, dispatch)
  }
}
function mapStateToProps(state) {
  return {
    stage: state.msg_reducer.stage, 
    avatar: state.msg_reducer.avatar, 
    message: state.msg_reducer.message, 
    el: state.msg_reducer.el, 
    first_enter: state.msg_reducer.first_enter}
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageBox)
