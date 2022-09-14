import React from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

class Boton extends React.Component{
    render(){
        return(
            <>
            <Button variant="dark" as="input" type="button" href="/peliculas.html" value="CARTELERA"/>
            </>
        );
    }
}
export default Boton;