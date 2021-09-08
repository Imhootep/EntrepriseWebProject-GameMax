import React from 'react';
import '../css/index.css'

const SignUp = () => {
    return (
        <div className="formulaire">
            <form class="formu">
                <div className="form-inner" class="flex-1">
        
                
                <h2>Création d'un Profil</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Type:</label>
                        <select name="type" id="type">
                            <option value="partenaire">Partenaire</option>
                            <option value="studio">Studio</option>
                            <option value="expert">Expert</option>
                            <option value="sponsor">Sponsor</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="street">Rue:</label>
                        <input type="text" name="rue" id="rue"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Numéro:</label>
                        <input type="number" name="number" id="number"/>
                        <label htmlFor="box">Boite:</label>
                        <input type="text" name="box" id="box"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="street">Ville:</label>
                        <input type="text" name="rue" id="rue"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Code Postal:</label>
                        <input type="number" name="number" id="postCode"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="mail-adress"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="gsm">GSM:</label>
                        <input type="number" name="gsm" id="gsm"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="infos">Infos, jeux à leur actif:</label>
                        <textarea type="text" name="infos" id="infos"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="members"> Membres + Fonctions:</label>
                        <textarea type="text" name="members" id="members"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="web">site web:</label>
                        <input type="text" name="web" id="web"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rs">Réseau social:</label>
                        <input type="text" name="rs" id="rs"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Commentaires:</label>
                        <textarea type="text" name="comments" id="comments"/> 
                    </div>
                    
                    

        
        </div>
        </form>
            </div>
    );
};

export default SignUp;