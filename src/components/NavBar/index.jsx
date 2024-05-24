import styled from "styled-components"
import { NavLink } from "../NavLink"
import Account from "../icons/Account"

const StyledNav = styled.nav`
    background-color: #171D1F;
    
`

const StyledContainer = styled.div`
    width: 1200px;
    max-width: 90%;
    margin: 0 auto; 
    display: flex;
    padding: 28px 0;
    justify-content: space-between;
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        gap: 56px;
        li {
            display: flex;
            align-items: center;
        }
    }

`

export const NavBar = () => {

    return (<StyledNav>
        <StyledContainer>
            <ul>
                <li>
                    <a href="#">
                        <img src="/logo.png" alt="Blockchain Banking" />
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink href="#">
                        Serviços
                    </NavLink>
                </li>
                <li>
                    <NavLink href="#">
                        Ajuda
                    </NavLink>
                </li>
                <li>
                    <NavLink href="#">
                        <Account /> Olá, Márcia
                    </NavLink>
                </li>
            </ul>
        </StyledContainer>
    </StyledNav>)
}