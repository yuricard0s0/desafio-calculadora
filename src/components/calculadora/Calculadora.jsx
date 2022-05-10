import React, {useState} from "react";
import Container from '@mui/material/Container';
import './calculadora.css';



const Calculadora = () => {

    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState("");
    const [history, setHistory] = useState("");

    function inputNum(e) {
        let val = e.target.value;
        let lastChar = num.toString().charAt(num.length - 1);

        if (num.toString().includes(".") && val === "."){
            return;
        }
        else if (val === "." && lastChar === "."){
            return;
        }
        else if (num == 0){
            setNum(val);
        }
        else {
            setNum(num + val);
        }
    }

    function allClear(e) {
        setNum(0)
        setOldNum(0)
        setHistory("")
    }
    function clear() {
        if (num !== 0) {
            let novoValor = num.toString().slice(0, -1);
            if (novoValor === "") {
                setNum(0)
            }
            else {
                setNum(novoValor)
            }
        }
        
    }

    function percent() {
        let result = 0;
        result = num/100; 
        setHistory(`${num} / 100 = ${result}`);
        setNum(result)
    }

    function operatorHandler(e) {
        let operatorInput = e.target.value
        setOperator(operatorInput)
        setOldNum(num);
        setNum(0);
    }

    function calculate() {
        let result = 0;
        
        if (operator === "+"){
            result = parseFloat(oldNum) + parseFloat(num);
            setNum(result);
        }
        else if (operator === "-") {
            result = parseFloat(oldNum) - parseFloat(num);
            result = result.toLocaleString('en', {maximumFractionDigits:2})
            setNum(result);
        }
        else if (operator === "/") {
            result = parseFloat(oldNum) / parseFloat(num);
            
            setNum(result);
        }
        else {
            result = oldNum * num;
            setNum(result);
        }
        
        setHistory(`${oldNum}${operator}${num} = ${result}`);
        setOldNum(0)
    }

    return (
        <Container maxWidth="xs">
            <div className="calculadora">
                <div className="result">
                    <div className="result_display">
                        {num}
                    </div>
                    <div className="previous_result">
                        {history}
                    </div>

                </div>

                <div className="calculadora_btns">
                    <button className="op" onClick={allClear}>AC</button>
                    <button className="op" onClick={clear}>⌫</button>
                    <button className="op" onClick={percent}>%</button>
                    <button className="op" onClick={operatorHandler} value={"/"}>÷</button>
                    <button value={7} onClick={inputNum}>7</button>
                    <button value={8} onClick={inputNum}>8</button>
                    <button value={9} onClick={inputNum}>9</button>
                    <button className="op" onClick={operatorHandler} value={"*"}>x</button>
                    <button value={4} onClick={inputNum}>4</button>
                    <button value={5} onClick={inputNum}>5</button>
                    <button value={6} onClick={inputNum}>6</button>
                    <button className="op" onClick={operatorHandler} value={"-"}>-</button>
                    <button value={1} onClick={inputNum}>1</button>
                    <button value={2} onClick={inputNum}>2</button>
                    <button value={3} onClick={inputNum}>3</button>
                    <button className="op" onClick={operatorHandler} value={"+"}>+</button>
                    <button value={0} onClick={inputNum}>0</button>
                    <button className="btn_sep" onClick={inputNum} value={"."}>.</button>
                    <button onClick={calculate}>=</button>
                </div>
            </div>
        </Container>
    )
}

export default Calculadora;