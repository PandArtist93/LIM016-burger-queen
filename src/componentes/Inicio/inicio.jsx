import gif from '../../img/extra/Burgers-Gif.gif';
import Firma from '../../img/iconos/Firma-MR-Amarillo.png';
import './inicio.scss';

function landing() {
    return (
        <div className="inicio">            
            <div className="gif">
                <img src={gif} alt= "gif"/>
            </div> 
            <div className="firma">
                <img src={Firma} alt= "Firma"/>
            </div>
        </div>
    );
}

export default landing;