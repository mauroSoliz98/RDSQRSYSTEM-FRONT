import React from 'react'
import { DownloadOutlined, PlusOutlined} from '@ant-design/icons';
import { Input, Button, Row, Col,DatePicker} from 'antd';
import { ButtonContainer } from '../../Styles';
import dayjs from 'dayjs'
const { Search } = Input;
function TopButtons({onClick}) {
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
  return (
    <div>
    <Row justify="space-between" style={{ marginBottom: 16 }}>
          <Col>
          <Search placeholder="Buscar" style={{ width: 200 }}/>
          </Col>
          <Col>
            <ButtonContainer direction="horizontal">
                <Button type="default" icon={<DownloadOutlined />}>Reporte</Button>
                <Button type="primary" icon={<PlusOutlined />} onClick={onClick}>Nuevo registro</Button>
                <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
            </ButtonContainer>
          </Col>
        </Row>
  </div>
  )
}

export default TopButtons