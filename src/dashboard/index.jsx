import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Image, Result } from 'antd';
import React, { useState } from 'react';
import './styles.scss'
import Logo from './jila.png';

import Overview from './Overview';
import ProductList from './Productos';
import Users from './Users';
import Logs from './Logs';


const { Content, Sider, Header } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [

    getItem('Usuarios', '1', <TeamOutlined />),
    getItem('Productos', '2', <DesktopOutlined />),
    getItem('Estadisticas', '3', <PieChartOutlined />),    
    getItem('Insertar Producto', '4', <FileOutlined />),
];

const App = () => {

    const [ setCollapsed] = useState(true);
    const [selectedItem, setSelectedItem] = useState('1');
    const handleClick = e => {
        setSelectedItem(e.key);
        console.log(selectedItem);
    };

    const RenderContent = () => {
        switch (selectedItem) {

            case '1':
                return <Users />;

            case '2':
                return <ProductList />;

            case '3':
                return <Overview />;    

            case '4':
                return <Logs />;
            default:
                return <Result
                    status="404"
                    title="404"
                    subTitle="Lo siento, esta pagina no existe."
                />;
        }
    };

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Header style={{ padding: '0' }}>
                <Image
                    className='logo'
                    src={Logo}
                    preview={false}
                />
            </Header>
            <Layout className="site-layout">
                <Sider onCollapse={(value) => setCollapsed(true)}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        {items.map(item => {
                            if (item.children) {
                                return (
                                    <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                                        {item.children.map(child => (
                                            <Menu.Item key={child.key} onClick={handleClick}>
                                                {child.label}
                                            </Menu.Item>
                                        ))}
                                    </Menu.SubMenu>
                                );
                            }
                            return (
                                <Menu.Item key={item.key} icon={item.icon} onClick={handleClick}>
                                    {item.label}
                                </Menu.Item>
                            );
                        })}
                    </Menu>
                </Sider>
                <Content
                    style={{
                        margin: '1%',
                    }}
                >
                    <RenderContent />
                </Content>
            </Layout>

        </Layout>
    );
};
export default App;