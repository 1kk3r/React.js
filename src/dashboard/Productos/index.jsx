import React from 'react';
import { Row, Col, Card } from 'antd';
import './index.css';
const { Meta } = Card;

const url = [
  { key: "1", imagen: "https://laverdadnoticias.com/export/sites/laverdad/img/2022/01/14/lana_rhoades_dio_la_bienvenida_a_un_bebe_en_2022.jpg_1748350297.jpg", precio: "Detalle 2", titulo: "2" },
  { key: "2", imagen: "https://laverdadnoticias.com/export/sites/laverdad/img/2022/01/14/lana_rhoades_dio_la_bienvenida_a_un_bebe_en_2022.jpg_1748350297.jpg", precio: "Detalle 1", titulo: " 1" },

]

const Productos = () => {

  return (
    url.map((item)=>(


      <Row gutter={16}>
        <Col className="gutter-box">
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={item.imagen} />}
          >
            <Meta title={item.titulo} description={item.precio} />
          </Card>
        </Col>
      </Row>

    ))
  )
}
export default Productos;