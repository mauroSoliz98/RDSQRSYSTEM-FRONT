import { Form, Input, Space,  Button, Select } from 'antd'
import React,{useState, useEffect} from 'react'

export function FormItems({CancelButton}) {
    const [form] = Form.useForm();
    const options = [
      {
        value: 'ropa',
        label: 'Ropa',
      },
      {
        value: 'cocina',
        label: 'Articulos de cocina',
      },
      {
        value: 'tecnologia',
        label: 'Tecnologia',
      },
    ];
  return (
    <div>  
        <Form layout='vertical' autoComplete='off' form={form}>
            <Form.Item name="NombeElemento" label="Nombre Elemento" rules={[{required: true}]}>
                <Input placeholder="insertar nombre del elemento" />
            </Form.Item>
            <Form.Item name="NombreCaja" label="Nombre Caja" rules={[{required: true}]}>
                <Input placeholder="Caja del Almacen" />
            </Form.Item>
            <Form.Item name="Descripcion" label="Descripcion" rules={[{required: false}]}>
                <Input.TextArea showCount maxLength={100}/>
            </Form.Item>
          <Form.Item name="Categoria" label="Categoria" rules={[{required: true}]}>
            <Select defaultValue="inserte una categoria" options={options} />
          </Form.Item>
            <Space>
                <SubmitButton form = {form} />
                <Button onClick={CancelButton}>Cancel</Button>
            </Space>
        </Form>
    </div>
  )
}

function SubmitButton({form}){
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
      <Button type='primary' htmlType='submmit' disabled={!submittable}>
        Guardar
      </Button>
    )
  }
