import React from 'react';
import { NavLink } from 'react-router-dom';


const NotFound = () => {
    return(
        <div className="not-found">

            <h1 className="not-found-title">Vous cherchez votre chemin ?</h1>
            <p className="not-found-content">
                Désolé, nous n'avons pas trouvé cette page. Un vaste choix de programmes vous attend sur la page d'accueil.
            </p>

            <NavLink to="/home" className="button-notFound btn btn-primary">Accueil</NavLink>
        </div>
    )
} 

export default NotFound;