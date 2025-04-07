import React, { useState } from 'react';

function Calculator() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [operation, setOperation] = useState('add');
    const [result, setResult] = useState('');

    const calculate = () => {
        const num1 = parseFloat(value1);
        const num2 = parseFloat(value2);

        if (isNaN(num1) || isNaN(num2)) {
            setResult('Por favor, insira números válidos.');
            return;
        }

        let calcResult;
        switch (operation) {
            case 'add':
                calcResult = num1 + num2;
                break;
            case 'subtract':
                calcResult = num1 - num2;
                break;
            case 'multiply':
                calcResult = num1 * num2;
                break;
            case 'divide':
                calcResult = num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero';
                break;
            default:
                calcResult = 'Operação inválida';
        }
        setResult(calcResult);
    };

    const clearFields = () => {
        setValue1('');
        setValue2('');
        setOperation('add');
        setResult('');
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Calculadora</h1>
            <div>
                <input
                    type="text"
                    placeholder="Valor 1"
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                    style={{ marginRight: '10px' }}
                />
                <input
                    type="text"
                    placeholder="Valor 2"
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                    style={{ marginRight: '10px' }}
                />
                <select
                    value={operation}
                    onChange={(e) => setOperation(e.target.value)}
                    style={{ marginRight: '10px' }}
                >
                    <option value="add">Soma</option>
                    <option value="subtract">Subtração</option>
                    <option value="multiply">Multiplicação</option>
                    <option value="divide">Divisão</option>
                </select>
            </div>
            <div style={{ marginTop: '10px' }}>
                <button onClick={calculate} style={{ marginRight: '10px' }}>
                    Calcular
                </button>
                <button onClick={clearFields}>Limpar</button>
            </div>
            <p style={{ marginTop: '20px' }}>
                <strong>Resultado:</strong> {result}
            </p>
        </div>
    );
}

export default Calculator;