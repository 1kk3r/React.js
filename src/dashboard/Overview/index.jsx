import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

const url = [
  { key: "1", aumento: '12', clp: "1.20"},
  { key: "2", aumento: '12', clp: "1.20"},

]

const App = () => {

  return (

    <Card>
      <div className="site-statistic-demo-card">
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic
                title="Porcentaje de Aumento Mensual"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: '#3f8600',
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="CLP"
                value={9.3}
                precision={2}
                valueStyle={{
                  color: '#cf1322',
                }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </Card>
  )
}

export default App;