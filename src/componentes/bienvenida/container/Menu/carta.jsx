import MenuSpecial from './Menu-Karma.png';
import { Link } from "react-router-dom";
import './carta.scss';

function carta() {
    return (
        <div className="ViewMenu">            
            <div className="imgMenu">
                <img src={MenuSpecial} alt= "MenuSpecial"/>
                <div className='botonAtras'>
                    <Link to='/'><input type="onclick" value="Atras"/></Link>
                </div>               
            </div>  
        </div>
    );
}

export default carta