import { useState } from 'react'
import './App.css'
import * as C from './components/styled'

function App() {

  const [fieldWeight, setFieldWeight] = useState<number>(0);
  const [fieldHeight, setFieldHeight] = useState<number>(0);
  const [displayType, setDisplayType] = useState('none');
  const [imcValue, setImcValue] = useState('');
  const [statusImc, setStatusImc] = useState('');
  const [colorResult, setColorResult] = useState('');

  const changeWeightValue = (e:number): void => {
    setFieldWeight(parseFloat(e.target.value))
  };

  const changeHeightValue = (e:number): void => {
    setFieldHeight(parseFloat(e.target.value))
  };

  const setResultImc = (imc: number): void => {
    if(imc < 18.5) {
      setStatusImc('Abaixo do peso.');
      setImcValue(`Seu IMC é ${imc}`);
      setColorResult('#FFFF01');
    } else if (imc > 18.5 && imc < 24.99) {
      setStatusImc('Peso ideal.');
      setImcValue(`Seu IMC é ${imc}`);
      setColorResult('#83C635');
    } else if (imc >= 25 && imc < 29.99) {
      setStatusImc('Sobrepeso.');
      setImcValue(`Seu IMC é ${imc}`);
      setColorResult('#FCA500');
    } else if (imc > 30) {
      setStatusImc('Obesidade.');
      setImcValue(`Seu IMC é ${imc}`);
      setColorResult('#F67600');
    }
  };

  const calculateImc = (): void => {
    if(fieldHeight && fieldWeight) {
      const IMC = fieldWeight / (fieldHeight * fieldHeight);
      setDisplayType('flex');
      setResultImc(parseFloat(IMC.toFixed(2)));
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <C.MainDiv>
      <C.LeftSide>
        <C.SubTitle color='#533E8B'>O que é o IMC?</C.SubTitle>
        <C.MainText>
          IMC é a sigla para indice de massa corporal, um calculo simples utilizado para verificar se o peso está ideal.
        </C.MainText>
        <C.ImageFitness src='./src/img/fitness.svg' alt='Pessoa se exercitando com halteres' />
      </C.LeftSide>
      <C.RightSide>
        <C.CalcContainer>
          <C.SubTitle color='#EDEDED' style={{textAlign: 'center', marginTop: '40px'}}>CALCULAR IMC</C.SubTitle>
          <C.containerInput>
            <C.InputLabel>Peso</C.InputLabel>
            <C.Input type="number" placeholder='ex: 43,49' value={fieldWeight > 0 ? fieldWeight : ''} onChange={changeWeightValue} />
          </C.containerInput>
          <C.containerInput>
            <C.InputLabel>Altura</C.InputLabel>
            <C.Input type="number" placeholder='ex: 1,83' value={fieldHeight > 0 ? fieldHeight : ''} onChange={changeHeightValue} />
          </C.containerInput>
          <C.Btn onClick={calculateImc}>CALCULAR</C.Btn>
          <C.ContainerResult color={colorResult} display={displayType}>
            <p>{imcValue}</p>
            <h3>{statusImc}</h3>
          </C.ContainerResult>
        </C.CalcContainer>
      </C.RightSide>
    </C.MainDiv>
  );
  
}

export default App
