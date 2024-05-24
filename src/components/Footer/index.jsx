import { default as styled } from "styled-components";
import Logo from "../Logo";
import Whatsapp from "../icons/Whatsapp";
import Instragam from "../icons/Instragam";
import Twiter from "../icons/Twiter";

const StyledFooter = styled.footer`
    background-color: #171D1F;
    color: #EFEFEF;
    font-size: 16px;
    margin-top: 56px;
`

const StyledContainer = styled.div`
    width: 1200px;
    max-width: 90%;
    margin: 0 auto; 
    display: flex;
    padding: 28px 0;
    justify-content: space-between;
    align-items: center;
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
    }
`

export const Footer = () => {
    return (<StyledFooter>
        <StyledContainer>
            <div>
                <p>Acesse nossas redes:</p>
                <ul>
                    <li>
                        <a href="#">
                            <Whatsapp />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Instragam />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Twiter />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                Desenvolvido por Alura. Projeto fictício sem fins comerciais.
            </div>
            <div>
                <Logo />
            </div>
        </StyledContainer>
    </StyledFooter>)
}