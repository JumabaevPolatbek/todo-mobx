import React from 'react';
import {observer} from 'mobx-react-lite'
import store from './store';

const App=observer(()=>{
  
    return (
      <div className='App'>
        <ul>
          <h3>Learn</h3>
          {store.storeData.map(todo=>{
            return <li 
                        key={todo.todo} 
                        onClick={()=>store.toggleCompleted(todo.todo)}
                        className={todo.completed?'completed':""}
                        >
                          {todo.todo}
                          </li>
          })}
        </ul>
        <div>
            {store.getCompletedCounter()} / {store.storeData.length} left
        </div>
      </div>
    )
})

export default App;
