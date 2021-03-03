import React from 'react'
import './Producto.css'
import ic_shipping from './Assets/ic_shipping.png'

function Producto(result) {    
    const {title,thumbnail, price, currency_id, address, shipping} = result 
    const ARS = '$'

    return (
        <div className="Producto">
            <div className="media alert">
                <img src={thumbnail} style={{width:'200px',borderRadius:'10px'}} alt={result.id} className='img-thumbnail'/>
                <div className="media-body ml-3">
                    {currency_id =='ARS' &&
                        <h5>{ARS} {price}  <img src={ic_shipping}/> </h5> 
                    }
                    <p>{title}</p> <h6>{address.state_name}</h6>
                </div>
            </div>
            <hr/>
        </div>
    )
}
export default Producto;


