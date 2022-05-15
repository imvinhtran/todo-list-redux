import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchFilterChange } from "../../redux/actions";
import { statusFilterChange } from "../../redux/actions";


const Filter = () => {
  const [searchText, setSearchText] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')


  const dispatch = useDispatch()

  const searchTextChange = (e) => {
    setSearchText(e.target.value)
    dispatch(searchFilterChange(e.target.value))
  }

  const handleFiltersStatus = (e) => {
    setFilterStatus(e.target.value)
    dispatch(statusFilterChange(e.target.value))
  }

  

  return (
    <Row>
      <Col span={24}>
        <Typography.Paragraph style={{
          fontWeight: 500,
          fontSize: '18px',
          marginBottom: '4px',
        }}>
        Search
        </Typography.Paragraph>
        <Input.Search value={searchText} onChange={searchTextChange} placeholder = 'input search text'></Input.Search>
      </Col>
      <Col sm={24}
      style= {{
        fontWeight: 500,
        fontSize: '16px',
        margin: '4px 0',
      }}
      >
        <Typography.Paragraph>
        Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleFiltersStatus}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Complete</Radio>
          <Radio value='Todo'>To Do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
      <Typography.Paragraph 
       style= {{
        fontWeight: 500,
        fontSize: '16px',
        margin: '4px 0',
      }}>
      Filter By Priority
      </Typography.Paragraph>
      <Select
        mode="multiple"
        allowClear
        placeholder="Please select"
        style={{ width: '100%',
        fontSize: '16px',
        margin: '5px 0',
      }}
      >
        <Select.Option value='High' label='High'>
          <Tag color='red'>High</Tag>
        </Select.Option>
        <Select.Option value='Medium' label='Medium'>
          <Tag color='blue'>Medium</Tag>
        </Select.Option>
        <Select.Option value='Low' label='Low'>
          <Tag color='gray'>Low</Tag>
        </Select.Option>
      </Select>
      </Col>
    </Row>
  )
}

export default Filter;