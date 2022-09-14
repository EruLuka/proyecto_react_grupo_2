import React from "react";
import Button from "react-bootstrap/Button";

class Logo extends React.Component{
    render(){
        return(
            <div>
              <section id="Principal">
                <article id="Logo">
                    <img src={this.props.img} alt='llama-logo.png'/>
                </article>
                <article id="Bienvenida">
                  <h1>LLAMAX</h1>
                  <p>Más que películas, Historias.</p>
                  <Button variant="dark" as="input" type="button" href="/peliculas.html" value="CARTELERA"/>
                </article>
              </section>
            </div>
        );
    }
}
export default Logo;