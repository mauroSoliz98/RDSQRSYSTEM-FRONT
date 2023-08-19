import React, {useState, useEffect} from 'react'
import {Input, Form, Checkbox, Row, Col, Button, Space} from 'antd'

export function FormUsers({CancelButton, onOk}) {
    const [form] = Form.useForm();

  return (
    <div>
        <Form layout='vertical' autoComplete='off'form={form}>
            <Row gutter={16}>
                <Col>
            <Form.Item name="Correo" label="Correo" rules={[{required: true,type:'email', message:'Enter your email please'}]}>
                <Input placeholder="user@email.com" />
            </Form.Item>
            </Col>
            <Col>
            <Form.Item name="NombreUsuario" label="Nombre Usuario" rules={[{required: true}]}>
                <Input placeholder="nombre de usuario" />
            </Form.Item>
            </Col>
            <Col>
            <Form.Item name="Nombres" label="Nombre(s)" rules={[{required: true}]}>
                <Input placeholder="nombre"/>
            </Form.Item>
            </Col>
            <Col>
            <Form.Item name="Apellidos" label="Apellido(s)" rules={[{required: true}]}>
                <Input placeholder="apellido" />
            </Form.Item>
            </Col>
            <Col>
            <Form.Item name="Telefono" label="Numero de Telefono (opcional)" rules={[{required: false}]}>
                <Input placeholder="(+123) xxx-xxx-xx" />
            </Form.Item>
            </Col>
            </Row>
            <Col>
            <Form.Item name="Contraseña" label="Contraseña" rules={[{required:true, message:'Please enter some password'}]}>
                <Input.Password placeholder="inserte contraseña" />
            </Form.Item>
            </Col>
            <Form.Item name="Roles" label="Roles" rules={[{required:true}]}>
                <Checkbox.Group>
                    <Row>
                    <Col span={8}>
                        <Checkbox
                        value="Administrador"
                        style={{
                            lineHeight: '32px',
                        }}
                        >
                        Administrador
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                        value="Rol 1"
                        style={{
                            lineHeight: '32px',
                        }}
                        >
                        Rol 1
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                        value="Rol 2"
                        style={{
                            lineHeight: '32px',
                        }}
                        >
                        Rol 2
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                        value="Rol 3"
                        style={{
                            lineHeight: '32px',
                        }}
                        >
                        Rol 3
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                        value="Rol 4"
                        style={{
                            lineHeight: '32px',
                        }}
                        >
                        Rol 4
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                        value="Rol 5"
                        style={{
                            lineHeight: '32px',
                        }}
                        >
                        Rol 5
                        </Checkbox>
                    </Col>
                    </Row>
                </Checkbox.Group>
            </Form.Item>
            <Space>
                <SubmitButton form = {form} onOk={onOk} />
                <Button onClick={CancelButton}>Cancel</Button>
            </Space>
        </Form>
    </div>
  )
}

function SubmitButton({form, onOk}){
    const [submittable, setSubmittable] = useState(false)
    const values = Form.useWatch([], form)
    useEffect(() => {
      form.validateFields({
        validateOnly: true,
      }).then(
        ()=>{
          setSubmittable(true)
        },
        ()=>{
          setSubmittable(false)
        },
      );
    }, [values])
    
    return(
      <Button onClick={onOk} type='primary' htmlType='submmit' disabled={!submittable}>
        Guardar
      </Button>
    )
  }
