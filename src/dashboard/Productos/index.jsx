import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';
import './index.css';
import axios from 'axios'
import {v4 as uuid} from 'uuid';

const { Meta } = Card;

const url = ['https://g97654d6dbdbba9-vucawnnhek5q4k8y.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/producto/']

const Productos = () => {

  const [basedatos, setBasedatos] = useState(url);

  const handleEdit = () => {
    basedatos.map( (item) => {
        console.log(item)
        return(
            item
            );
        }
        
        )
        
    }
    useEffect(()=>{
        const resultado = axios.get("https://g97654d6dbdbba9-vucawnnhek5q4k8y.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/producto/").then((response) => {
            console.log("response",response);
            setBasedatos(response.data.items)
            console.log("BASEDATOS", basedatos);  
        })
    },[])

  return (

      <Row gutter={16}>
        {

        basedatos.map(item => {

          return (
          <Col key={uuid()} className="gutter-box" >

            <Card 
              key={item.key} valor={item} onClick={handleEdit}
              hoverable
              style={{
                width: 250,
              }}
              cover={<img alt="example" src={item.img} />}
            >
              <Meta title={item.titulo} description={item.precio} />
            </Card>
          </Col>

          )

        })

        }
      </Row>

    )

}
export default Productos;