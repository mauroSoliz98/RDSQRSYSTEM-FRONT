import React from 'react'
import {Input, Form, Select} from 'antd'
import {LockOutlined } from '@ant-design/icons'

export function FormBoxes() {
    const options = [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
        },
      ];
  return (
    <div>
        <Form layout='vertical' autoComplete='off'>
          <Form.Item name="Codigo" label="Codigo" rules={[{required: true}]}>
            <Input placeholder="inserte contraseña"  prefix={<LockOutlined />}/>
          </Form.Item>
          <Form.Item name="NombreCaja" label="Nombre Caja" rules={[{required: true}]}>
            <Input placeholder="inserte nombre de caja" />
          </Form.Item>
          <Form.Item name="Ubicacion" label="Ubicación" rules={[{required: true}]}>
            <Select defaultValue="Zhejiang" options={options} />
          </Form.Item>
          <Form.Item name="Propietario" label="Propietario" rules={[{required: true}]}>
            <Select defaultValue="Zhejiang" options={options} />
          </Form.Item>
        </Form>
    </div>
  )
}
