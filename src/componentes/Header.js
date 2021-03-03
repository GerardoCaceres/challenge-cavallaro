import React from 'react';
import './Header.css'
import Logo_ML from './Assets/Logo_ML.png'

class Header extends React.Component {

    handleChange = this.handleChange.bind(this);
    state = { value: [] };

    handleChange(e) {
        this.setState({ value: e.target.value });
      }
         render () {
            return (
                
                <div className="Caja_Busqueda">
                    <div className="contdivainer">
                        <div className="jumbotron p-2">
                            <form className="d-flex p-2" 
                            >
                                <img src={Logo_ML}/>

                                <input className="form-control me-2"
                                    type="text"
                                    placeholder="Nunca dejes de buscar"
                                    name="producto"
                                    id="producto"
                                    valuer=""
                                    onChange={this.handleChange}
                                    defaultValue={this.state.value}
                                />
                                <input className="btn btn-outline-warning"  
                                        type="submit"  
                                        
                                />  
                            </form>
                        </div>
                    </div>
                </div>
                
            )
    }
}
export default Header