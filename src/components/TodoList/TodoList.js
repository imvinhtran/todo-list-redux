import React from 'react'
import Todo from '../Todo/Todo'
import { useState } from 'react'
import { Col, Row, Input, Button, Select, Tag } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../redux/actions'
import { v4 as uuId4 } from 'uuid'
import { todoRemainingSelector } from '../../redux/selectors'

const TodoList = () => {
    const [todoName, setTodoName] = useState('')
    const [priority, setPriority] = useState('Medium')

    const todoList = useSelector(todoRemainingSelector)
    
    const dispatch = useDispatch()
    const handleAddButtonClick = () => {
        dispatch(addTodo( {
            id: uuId4(),
            name: todoName,
            priority: priority,
            completed: false
        },
        setTodoName(''),
        setPriority('Medium')
        ))
    }
    const handleInputChange = (e) => {
        setTodoName(e.target.value)
    }

    const handlePriorityChange = (value) => {
        setPriority(value)
    }
  return (
    <Row style = {{height: '100%'}}>
        <Col sm={24} style = {{height: 'calc(100% - 40px)', overflowY: 'auto'}}>
            {
                todoList.map((todo) => {
                    return (
                    <Todo key={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed}></Todo>
                    )
                })
            }
        </Col>
        <Col span={24}>
            <Input.Group style={{display: 'flex'}} compact>
                <Input value={todoName} onChange={handleInputChange}></Input>
                <Select value={priority} defaultValue='Medium' onChange={handlePriorityChange}>
                    <Select.Option value='High' label='Hight'>
                        <Tag color='red'>High</Tag>
                    </Select.Option>
                    <Select.Option value='Medium' label='Medium'>
                        <Tag color='blue'>Medium</Tag>
                    </Select.Option>
                    <Select.Option value='Low' label='Low'>
                        <Tag color='gray'>Low</Tag>
                    </Select.Option>
                </Select>
                    <Button onClick={handleAddButtonClick} type='primary'>Add</Button>
            </Input.Group>
        </Col>
    </Row>
  )
}

export default TodoList