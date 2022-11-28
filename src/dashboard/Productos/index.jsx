import React from 'react';
import { Row, Col, Card } from 'antd';

const { Meta } = Card;

const Productos = () => {

  return (
    <Row gutter={16}>
      <Col className="gutter-box">
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
    </Row>
  )
}
export default Productos;