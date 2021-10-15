import { NavLink } from "react-router-dom";

import Logo from '../../assets/logo.png';
import * as C from './styles';

export const Header = () => {
    return (
        <C.Container>
            <C.Content>
                <img src={Logo} alt="Beers List" />
                <div>
                    <NavLink exact={true} to="/" activeClassName="is-active" >Listagem</NavLink>
                    <NavLink to="/registration" activeClassName="is-active">Cadastro</NavLink>
                </div>
            </C.Content>
        </C.Container>
    );
}