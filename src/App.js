import React from 'react'
import { Typography, Divider } from 'antd'
import Filter from './components/Filters/Filter'
import TodoList from './components/TodoList/TodoList'



const App = () => {
  return (
    <div 
    style={{
      width: 500,
      margin: '26px auto',
      display: 'flex',
      flexDirection: 'column',
      padding: 20,
      boxShadow: '0 0 10px 4px #bfbfbf',
      borderRadius: 5,
      height: '80vh'
    }}
    >
      <Typography.Title style={{ textAlign: 'center' }}>To Do List</Typography.Title>
      <Filter></Filter>
      <Divider></Divider>
      <TodoList></TodoList>
    </div>
  )
}

export default App