import styled from "styled-components"
import { Heading } from "./components/Heading"
import { NavBar } from "./components/NavBar"
import { Label } from "./components/Label"
import { Box } from "./components/Box"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { Footer } from "./components/Footer"

const StyledContainer = styled.section`
  width: 590px;
  max-width: 80%;
  margin: 0 auto;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
const StyledActions = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
`

function App() {


  return (
    <>
      <NavBar />
      <main>
        <StyledContainer>

          <Heading>
            Transferência de dinheiro interbancário
          </Heading>

          <Box>
            <StyledForm>
              <fieldset>
                <Label>
                  Conta de origem
                </Label>
                <Input placeholder="Endereço da conta de origem"/> 
              </fieldset>
              <fieldset>
                <Label>
                  Conta de destino
                </Label>
                <Input placeholder="Endereço da conta de destino"/> 
              </fieldset>
              <fieldset>
                <Label>
                  Valor ETH
                </Label>
                <Input placeholder="Quantidade em ETH"/> 
              </fieldset>
            </StyledForm>
            <StyledActions>
              <Button>
                Transferir
              </Button>
            </StyledActions>
          </Box>

          <Heading>
            Verificar saldo da conta
          </Heading>

          <Box>
            <StyledForm>
              <fieldset>
                <Label>
                  Endereço da Conta
                </Label>
                <Input placeholder="Endereço da conta"/> 
              </fieldset>
            </StyledForm>
            <StyledActions>
              <Button>
                Transferir
              </Button>
            </StyledActions>
          </Box>

        </StyledContainer>

        <Footer />
      </main>

    </>
  )
}

export default App
