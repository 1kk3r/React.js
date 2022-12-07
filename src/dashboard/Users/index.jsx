import { Card, Input, Button, Avatar, Modal, Form, message, Select } from 'antd';
import { CloseCircleOutlined, EditOutlined, UserAddOutlined, UserSwitchOutlined, UserOutlined, IdcardOutlined, MailOutlined, ApartmentOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
    
const { Option } = Select;

const usuarios = ['https://g97654d6dbdbba9-vucawnnhek5q4k8y.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/usuarios/']

const Users = () => {

    const [usuario, setUsuario] = useState(usuarios);
    const [cambio, setCambio] = useState(false);

    useEffect(() => {
        setUsuario(usuarios);
        setCambio(false);
    }, [cambio]);


    const AddUsers = () => {
        const onFinish = (values) => {
            usuarios.push(values);
            message.success('Usuario agregado correctamente');
            Modal.destroyAll();
            setCambio(true);
            console.log(usuarios);
        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };

        Modal.info({
            title: 'Añadir usuario',
            icon: <UserAddOutlined />,
            okButtonProps: { style: { display: 'none' } },
            content: (
                <Form
                    name="newuser"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                        'id': usuarios.length + 1,
                        'estado': 'Activo'

                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item hidden name="id">
                        <Input type="hidden" />
                    </Form.Item>

                    <Form.Item hidden name="estado">
                        <Input type="hidden" />
                    </Form.Item>

                    <Form.Item
                        name="rut"
                        rules={[
                            {
                                required: true,
                                message: 'Porfavor, ingresa un rut valido',
                            },
                        ]}
                    >
                        <Input prefix={<IdcardOutlined className="site-form-item-icon" style={{ opacity: '0.3' }} />} placeholder='Rut' />
                    </Form.Item>

                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Porfavor, ingresa un nombre de usuario valido',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" style={{ opacity: '0.3' }} />} placeholder='Nombre de usuario' />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Porfavor, ingresa un email válido',
                                type: 'email'
                            },
                        ]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" style={{ opacity: '0.3' }} />} placeholder='E-mail' />
                    </Form.Item>

                    <Form.Item
                        name="rol"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder={
                                <><ApartmentOutlined className="site-form-item-icon" /> Rol</>
                            }
                            onChange={console.log('')}
                            allowClear
                        >
                            <Option value="Usuario">Usuario</Option>
                            <Option value="Administrador">Administrador</Option>

                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Porfavor, ingresa una contraseña',
                                type: 'password'
                            },
                        ]}
                    >
                        <Input.Password prefix={<UserOutlined className="site-form-item-icon" style={{ opacity: '0.3' }} />} placeholder='Contraseña' />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Agregar usuario
                        </Button>
                    </Form.Item>
                </Form>
            ),
            closable: true,
        });
    }

    const EditUsers = (props) => {
        const onFinish = (values) => {
            const target = usuarios.find((obj) => obj.id === props.id)
            Object.assign(target, values);
            message.success('Usuario editado correctamente');
            Modal.destroyAll();
            setCambio(true);
            console.log(usuarios);
        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };

        Modal.info({
            title: 'Editar usuario',
            icon: <UserSwitchOutlined />,
            okButtonProps: { style: { display: 'none' } },
            content: (
                <Form
                    name="newuser"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                        'rut': props.rut,
                        'email': props.email,
                        'username': props.username,
                        'password': props.password,
                        'rol': props.rol,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item hidden name="id">
                        <Input type="hidden" />
                    </Form.Item>

                    <Form.Item hidden name="estado">
                        <Input type="hidden" />
                    </Form.Item>

                    <Form.Item
                        name="rut"
                        rules={[
                            {
                                required: true,
                                message: 'Porfavor, ingresa un rut valido',
                            },
                        ]}
                    >
                        <Input prefix={<IdcardOutlined className="site-form-item-icon" style={{ opacity: '0.3' }} />} placeholder='Rut' />
                    </Form.Item>

                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Porfavor, ingresa un nombre de usuario valido',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" style={{ opacity: '0.3' }} />} placeholder='Nombre de usuario' />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Porfavor, ingresa un email válido',
                                type: 'email'
                            },
                        ]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" style={{ opacity: '0.3' }} />} placeholder='E-mail' />
                    </Form.Item>
                    <Form.Item
                        name="rol"
                        rules={[
                            {
                                required: true,
                                message: 'Porfavor, ingresa un rol',
                            },
                        ]}
                    >
                        <Select
                            placeholder={
                                <>
                                    <ApartmentOutlined className="site-form-item-icon" /> Rol
                                </>
                            }
                            onChange={console.log('')}
                            allowClear
                        >
                            <Option value="Usuario">Usuario</Option>
                            <Option value="Administrador">Administrador</Option>

                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Porfavor, ingresa una contraseña',
                                type: 'password'
                            },
                        ]}
                    >
                        <Input.Password prefix={<UserOutlined className="site-form-item-icon" style={{ opacity: '0.3' }} />} placeholder='Contraseña' />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Editar usuario
                        </Button>
                    </Form.Item>
                </Form>
            ),
            closable: true,
        });
    }

    const DeleteUsers = (props) => {

        Modal.warning({
            title: 'Deshabilitar usuario',
            content: (<>
                ¿Estás seguro de que quieres deshabilitar el usuario?
                <Card
                    style={{ width: '100%', marginTop: '1%' }}
                >
                    <Card.Meta
                        avatar={<Avatar src={props.avatar} />}
                        title={`${props.username} ${props.rut}`}
                        description={`${props.email} ${props.rol}`}
                    />
                </Card>
            </>),
            closable: true,
            okText: 'Eliminar',
            onOk() {
                usuarios[usuarios.findIndex((item) => item.id === props.id)].estado = 'Inactivo';
                message.success('Usuario eliminado correctamente');
                Modal.destroyAll();
                console.log(usuarios);
                setCambio(true);
            },
        });
    }


    return (

        <Card
            bordered={true}
            className='card'
            style={{ width: '100%', padding: '1%', minHeight: '60vh' }}
            onClickCapture={() => console.log("click")}
        >

            <Button type='primary' onClick={AddUsers}>Agregar usuario</Button>

            <br />

            <pre style={{ maxHeight: '60vh' }}>
                {
                    usuario.map((usuario, index) => {
                        return (
                            <Card
                                key={index}
                                style={{ width: '100%', marginTop: '1%' }}
                                actions={[
                                    <EditOutlined key="setting" onClick={() => EditUsers(usuario)} />,
                                    <CloseCircleOutlined key="delete" onClick={() => DeleteUsers(usuario)} />
                                ]}
                            >
                                <Card.Meta
                                    avatar={<Avatar src={usuario.avatar} />}
                                    title={`${usuario.username} | Estado: ${usuario.estado}`}
                                    description={`E-mail: ${usuario.email} | Rol: ${usuario.rol}`}
                                />
                            </Card>
                        )
                    })
                }
            </pre>
        </Card>

    )
}

export default Users;