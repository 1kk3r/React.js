import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input, Button } from 'antd';
import './index.css'

const url =["https://g97654d6dbdbba9-vucawnnhek5q4k8y.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/producto/"]


function App() {

  const [data,setData]=useState([]);
  const [modalInsertar,setModalInsertar]=useState(false);
  const [modalEditar,setModalEditar]=useState(false);


  const [productoSeleccionado,setProductoSeleccionado]=useState({
    id: '',
    titulo: '',
    precio: '',  
    img: '',
  });

  const handleChange=e=>{
    const {name,value}=e.target;
    setProductoSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }))
    console.log(productoSeleccionado);  
  }



  const peticionGet=async()=>{
    await axios.get(url).then(response=>{setData(response.data.items);
    console.log(response.data.items)})
  }

  const peticionPut=async()=>{
    await axios.put(url+productoSeleccionado.id, productoSeleccionado).then(response =>{
      var dataNueva=data;
      dataNueva.map(producto=>{
        if(productoSeleccionado.id===producto.id){
          producto.nombre=productoSeleccionado.nombre;
          producto.precio=productoSeleccionado.precio;
          producto.img=productoSeleccionado.img;
        }
      })
      setData(dataNueva);
      abrirCerrarModalEditar();
  
    })
  };

  const peticionPost=async()=>{
    var nuevo_id=data.length+1;
    productoSeleccionado.id=nuevo_id;
    console.log(productoSeleccionado);
    await axios.post(url,productoSeleccionado).then(
      response=>{
      setData(data.concat(response.data))
      abrirCerrarModalInsertar()
      })

  }

  const seleccionarProducto=(producto,caso)=>{
    setProductoSeleccionado(producto);
    console.log(productoSeleccionado);
    if(caso==="Editar"){
      abrirCerrarModalEditar();
    }
    else if(caso==="Cancelar"){
      abrirCerrarModalEditar();
    }
  
  }


  const abrirCerrarModalEditar=()=>{

    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  useEffect(()=>{ peticionGet()},[])


return(
  <div className='App'>
    
    
    <div>

</div>

  <Card  style={{width: '100%', height: 500}} >
    <div className="site-card-border-less-wrapper">

      <Card title='Nuevo Producto' >
        <Input size='large' placeholder="ID" type="text" className="form-control" name="id" onChange={handleChange} value={data.length+1} readOnly />
        
        <br />
        <br />

        <Input size='large' placeholder="Titulo" type="text" className="form-control" name="titulo" onChange={handleChange} />

        <br />
        <br />

        <Input size='large' placeholder="Precio" type="text" className="form-control" name="precio" onChange={handleChange} />

        <br />
        <br />

        <Input size='large' placeholder="Img" type="text" className="form-control" name="img" onChange={handleChange}/>

        <br />
        <br />

        <Button className='boton' type='primary' key="insertar" onClick={()=>peticionPost()}>Insertar</Button>
      </Card>

      
    </div>
  </Card>

  </div>

)
}

export default App;