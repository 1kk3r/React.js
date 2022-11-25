import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input } from 'antd';


const url =[]


function App() {

  const [data,setData]=useState([]);
  const [modalInsertar,setModalInsertar]=useState(false);
  const [modalEditar,setModalEditar]=useState(false);


  const [productoSeleccionado,setProductoSeleccionado]=useState({
    id: '',
    nombre: '',
    precio: '',  
    descripcion: '',
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
          producto.descripcion=productoSeleccionado.descripcion;
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

        <Input size='large' placeholder="Nombre" type="text" className="form-control" name="nombre" onChange={handleChange} />

        <br />
        <br />

        <Input size='large' placeholder="Precio" type="text" className="form-control" name="precio" onChange={handleChange} />

        <br />
        <br />

        <Input size='large' placeholder="Descripcion" type="text" className="form-control" name="descripcion" onChange={handleChange}/>

        <br />
        <br />

        <button type='primary' style={{width: '100%', height: 30}} key="insertar" onClick={()=>abrirCerrarModalEditar('Aplicar')}  block/>
      </Card>

    </div>
  </Card>

  </div>

)
}

export default App;