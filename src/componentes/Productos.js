import React from 'react'
import './Productos.css'
import Producto from './Producto'

const URL ='https://api.mercadolibre.com/sites/MLA/search?q=Gol%20tren'
const URL1='https://api.mercadolibre.com/sites/MLA/search?q=iphone11'

class Productos extends React.Component {

    state = {
        results : []
    }
    

    componentDidMount() {
            const cantFinal=4
            /* Uso de Fetch para pedir las productos */
             fetch(URL1)
            .then(response => response.json())
            .then(results => {
                this.setState({
                    results: results.results.slice(0, cantFinal)
                })
            });
    }


    render() {
        const { results } = this.state
        console.log(results)
        return (
            <div className="Productos">
                 
                <div className="container">
                    <h6>Mi busqueda</h6>
                    <div className="jumbotron p-1">
                        {
                            results.map (result => {
                                return(
                                   
                                    <Producto
                                    key={result.id}
                                    title={result.title}
                                    price={result.price}
                                    thumbnail={result.thumbnail}
                                    currency_id={result.currency_id}
                                    address={result.address}
                                    shipping={result.shipping}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Productos