import { Router } from "express";





//Construim el router on posarem totes les entrades de la API
const router = Router();

//RECORDATORI LES RUTES DE LA API COMENÇEN PER /API

/* Exemple de entrada de api
router.route('/')
    .get ( Funció que ha de fer)*/

//IMPORTAR LES FUNCIONS DELS CONTROLLERS


//RUTES DELS USUARIS
router.route("/")
    .post() //Para crear un administrador


export default router;