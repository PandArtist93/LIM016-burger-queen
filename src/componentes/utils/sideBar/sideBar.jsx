import React from "react";
import { Link } from "react-router-dom";
import LogoAdmin from '../../../img/iconos/trajeAdmin.png';
import LogoCocinero from '../../../img/iconos/chefCocinero.png';
import LogoMesero from '../../../img/iconos/mesero.png';
import HM from '../../../img/iconos/HM.png';
import HC from '../../../img/iconos/HC.png';
import PE from '../../../img/iconos/PE.png';
import PP from '../../../img/iconos/PP.png';
import pp from '../../../img/iconos/pp2.png';
import HV from '../../../img/iconos/HV.png';
import HP from '../../../img/iconos/HP.png';
import HE from '../../../img/iconos/HE.png';
import RP from '../../../img/iconos/RP.png';
import BH from '../../../img/iconos/botton-home.png';
import BS from '../../../img/iconos/botton-salir.png';


export const btnSideBarAdmin = [
    {
        LogoAdmin: LogoAdmin, 
        rolUser: 'ADMINISTRADOR', 
        nombreUser: 'NOMBRE'
    },
    {
        btnTitle: 'Registrar Personal',
        src: RP
    }, 
    {
        btnTitle: 'Historial de Empleados',
        src: HE
    },
    {
        btnTitle: 'Historial de Ventas',
        src: HV
    },
    {
        btnTitle: 'Pedidos Preparados',
        src: PP
    },
    {
        btnTitle: 'Pedidos para Entregar',
        src: PE
    },
    {
        btnTitle: 'Historial Pedidos Cocinero',
        src: HC
    },
    {
        btnTitle: 'Historial Pedidos Mesero',
        src: HM
    }       
];

export const btnSideBarAdminCocinero = [
    {
        LogoAdmin: LogoCocinero, 
        rolUser: 'JEFE COCINERO', 
        nombreUser: 'NOMBRE'
    },
    {
        btnTitle: 'Pedidos por preparar',
        src: pp
    }, 
    {
        btnTitle: 'Pedidos preparados',
        src: PP
    },
    {
        btnTitle: 'Historial de pedidos',
        src: HP
    }
    
];

export const btnSideBarAdminMesero = [
    {
        LogoAdmin: LogoMesero, 
        rolUser: 'JEFE MESERO', 
        nombreUser: 'NOMBRE'
    },
    {
        btnTitle: 'Pedidos por preparar',
        src: pp
    }, 
    {
        btnTitle: 'Pedidos preparados',
        src: PP
    },
    {
        btnTitle: 'Historial de pedidos',
        src: HP
    }
]


const SideBar = (props) => {

    return (
        <div className="sideBar">
            <div className='logoSideBar'>
                <img src={props.LogoAdmin} alt= ""/>
            </div>
            <div className='dataUser'>
                <h4>{props.nombreUser}</h4>
                <p>{props.rolUser}</p>
            </div>
            <ul>
                <li>
                    <Link to='/admin/registro/registro-personal'>
                        <div className='SideBar-bottons'>
                            <img src={props.src} alt= ""/>
                            <p>{ props.btnTitle }</p>
                        </div>
                    </Link>
                </li>
            </ul>                
            <div className='containerBotones'>
                <div className='bottons'>
                    <button><Link to='/admin/registro/'><img src={BH} alt= "BH"/></Link></button>
                </div>
                <div className='bottons1'>
                    <button><Link to='/'><img src={BS} alt= "BS"/></Link></button>          
                </div>
            </div>
        </div>
    )
}

export default  SideBar;