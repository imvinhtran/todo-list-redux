import React from 'react'
import { Row, Tag, Checkbox} from 'antd'
import { useState } from 'react'


const priorityColorMapping = {
    Hight: 'red',
    Medium: 'blue',
    Low: 'Gray'
}

const Todo = ( {name, prioriry, completed}) => {
  const [checked, setChecked] = useState(completed)

  const toggleCheckbox = () => {
    setChecked(!checked)
  }
  return (
    <Row justify='space-between'
    style={{
      marginBottom: 4,
      ...(checked ? { opacity: 0.5, textDecoration: 'line-through'} : {})
    }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>{name}
      </Checkbox>
      <Tag
       color={priorityColorMapping[prioriry]}>{prioriry}
      </Tag>
    </Row>
  )
}

export default Todo