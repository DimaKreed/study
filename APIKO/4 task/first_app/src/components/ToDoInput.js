import React, {Component} from 'react';
import {styles} from "../styles/style";

class ToDoInput extends Component {
  render() {
    return (
      <div style={styles.all}>
        <div style={styles.containerDiv}><h2 style={styles.h2}>Task list</h2>
          <input type="text" placeholder='New Task' style={styles.input}/>
          <button style={styles.addTaskBtn}>ADD TASK</button>
        </div>
      </div>
    );
  }
}

export default ToDoInput;