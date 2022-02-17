import { Link } from "react-router-dom";
import { db } from '../../firebase/firebase-config'
import { collection, getDocs, query, where} from 'firebase/firestore'; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.scss';

function FormAdmin() {
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
        console.log('usuario: ' + userName)
        console.log('clave: ' + userPassword)   
        getUsers(userName, userPassword); 
    }

    const getUsers = async (userName, userPassword) => {
        const userCollectionRef = query(collection(db, "usuarios"), where("usuario", "==", userName), where("contraseña", "==", userPassword));
        const data = await getDocs(userCollectionRef);
        const user = data.docs[0].data();
        if(user.cargo === "admin" ){
            console.log("entro en admin!");
            navigate("/admin/")
        }
        else if(user.cargo === "mesero" ){
            console.log("entro en mesero!");
            navigate("/mesero/")
        }
        else if(user.cargo === "cocinero" ){
            console.log("entro en cocinero!");
            navigate("/cocinero/")
        }  
    }

    return (
        <form className="login-form" >
            <p className="login-text">
                <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-lock fa-stack-1x"></i>
                </span>
            </p>
            <input 
                type="email" 
                className="login-username" 
                autofocus="true" 
                required="true" 
                placeholder="Usuario"
                onChange={(event) => {
                    setUserName(event.target.value)
                }}
            />
            <input 
                type="password" 
                className="login-password" 
                required="true" 
                placeholder="Contraseña"
                onChange={(event) => {
                    setUserPassword(event.target.value)
                }} 
            />
            <a href="google.com" className="login-forgot-pass"> ¿Olvidaste tu contraseña? </a>
            <Link to='/{admin}/'><input type="submit" name="Iniciar Sesión" value="Iniciar Sesión" class="login-submit" onClick={loginUser}/></Link> 
        </form>            
    );
}
export default FormAdmin;