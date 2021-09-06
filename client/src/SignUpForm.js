import React from 'react';

const SignUp = () => {
    return (
        
        <form>
            <div className="formulaire">
                <div className="createProfil">
                <h2>Création d'un Profil</h2>
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name"/>
                </div>
                <div>
                    <label htmlFor="name">Type:</label>
                    <select name="type" id="type">
                        <option value="partenaire">Partenaire</option>
                        <option value="studio">Studio</option>
                        <option value="expert">Expert</option>
                        <option value="sponsor">Sponsor</option>
                    </select>
                </div>
                <div>
                    
                    <label htmlFor="street">Rue:</label>
                    <input type="text" name="rue" id="rue"/>
                    <label htmlFor="number">Numéro:</label>
                    <input type="number" name="number" id="number"/>
                    <label htmlFor="box">Boite:</label>
                    <input type="text" name="box" id="box"/>
                    <br></br>
                    <label htmlFor="street">Ville:</label>
                    <input type="text" name="rue" id="rue"/>
                    <label htmlFor="number">Code Postal:</label>
                    <input type="number" name="number" id="postCode"/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="mail-adress"/>
                
                    <label htmlFor="gsm">GSM:</label>
                    <input type="number" name="gsm" id="gsm"/>
                </div> 

                <div className="info">
                
                    <label htmlFor="infos">Infos, jeux à leur actif:</label>
                    <textarea type="text" name="infos" id="infos"/>
                    <br></br>
                </div>
                <div className="info">
                    <label htmlFor="members"> Membres + Fonctions:</label>
                    <textarea type="text" name="members" id="members"/>
                </div>
                <div>
                
                    <label htmlFor="web">site web:</label>
                    <input type="text" name="web" id="web"/>
                
                    <label htmlFor="rs">Réseau social:</label>
                    <input type="text" name="rs" id="rs"/>
                </div>
                <div className="info">
                    <label htmlFor="comment">Commentaires:</label>
                    <textarea type="text" name="comments" id="comments"/> 
                </div>
            </div>


        </form>
    
    );
};

export default SignUp;