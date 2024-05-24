import styled from "styled-components"
import { Heading } from "./components/Heading"
import { NavBar } from "./components/NavBar"
import { Label } from "./components/Label"
import { Box } from "./components/Box"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { Footer } from "./components/Footer"
import Web3 from "web3"
import { useState } from "react"
import Alert from "./components/Alert"

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


// Define as ABI e os endereços dos contratos aqui
const transferContractABI = []; // ABI do Contrato de Transferência
const oracleContractABI = []; // ABI do Contrato Oracle
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545'); // Conexão Web3

const transferContractAddress = '0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db'; // Endereço do Contrato de Transferência
const oracleContractAddress = '0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db'; // Endereço do Contrato Oracle

const transferContract = new web3.eth.Contract(transferContractABI, transferContractAddress);
const oracleContract = new web3.eth.Contract(oracleContractABI, oracleContractAddress);

console.log(oracleContract)

function App() {

  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [checkAccount, setCheckAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [balance, setBalance] = useState('');

  // Função para transferir dinheiro entre contas
  const transferMoney = async (event) => {
    event.preventDefault()
    setIsLoading(true);
    setError(null);
    try {
      await transferContract.methods.transferFunds(fromAccount, toAccount, web3.utils.toWei(amount, 'ether')).send({ from: web3.eth.defaultAccount });
      setError("Transferência realizada com sucesso!");
    } catch (error) {
      setError("Erro ao transferir fundos: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Função para verificar saldo da conta
  const checkBalance = async (event) => {
    event.preventDefault()
    setError(null);
    try {
      const accountBalance = await web3.eth.getBalance(checkAccount);
      setBalance(web3.utils.fromWei(accountBalance, 'ether') + ' ETH');
    } catch (error) {
      setError("Erro ao verificar saldo: " + error.message);
    }
  };

  return (
    <>
      <NavBar />
      <main>
        <StyledContainer>

          <Heading>
            Transferência de dinheiro interbancário
          </Heading>

          <Box>
            <StyledForm onSubmit={transferMoney}>
              <fieldset>
                <Label>
                  Conta de origem
                </Label>
                <Input
                  placeholder="Endereço da conta de origem"
                  value={fromAccount}
                  onChange={(e) => setFromAccount(e.target.value)}
                />
              </fieldset>
              <fieldset>
                <Label>
                  Conta de destino
                </Label>
                <Input
                  placeholder="Endereço da conta de destino"
                  value={toAccount}
                  onChange={(e) => setToAccount(e.target.value)}
                />
              </fieldset>
              <fieldset>
                <Label>
                  Valor ETH
                </Label>
                <Input
                  placeholder="Quantidade em ETH"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </fieldset>
              <StyledActions>
                <Button disabled={isLoading}>
                  Transferir
                </Button>
              </StyledActions>
            </StyledForm>
          </Box>

          <Heading>
            Verificar saldo da conta
          </Heading>

          <Box>
            <StyledForm onSubmit={checkBalance}>
              <fieldset>
                <Label>
                  Endereço da Conta
                </Label>
                <Input
                  placeholder="Endereço da conta"
                  value={checkAccount}
                  onChange={(e) => setCheckAccount(e.target.value)}
                />
              </fieldset>
              {/* Exibir saldo */}
              {balance && <Alert variant="success">Saldo: {balance}</Alert>}
              <StyledActions>
                <Button>
                  Verificar saldo
                </Button>
              </StyledActions>
            </StyledForm>
          </Box>

          {/* Exibição de erros */}
          {error && <Alert variant="error">{error}</Alert>}

        </StyledContainer>

        <Footer />
      </main>

    </>
  )
}

export default App
