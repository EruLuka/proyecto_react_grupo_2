import React from 'react';

class Pelicula extends React.Component{
    render(){
        return(
            <section class="Cartelera">
                <article class="Portada">
                    <img src={this.props.img} alt=""/>
                </article>
                <article class="Descripcion">
                    <h1>{this.props.titulo}</h1>
                    <p class="Actores">{this.props.actores}</p>
                    <p>{this.props.descripcion}</p>
                    <ul>
                        <li>{this.props.duracion}</li>
                        <li>{this.props.etiquetas}</li>
                    </ul>
                </article>
            </section>
        );
    }
}
export default Pelicula;