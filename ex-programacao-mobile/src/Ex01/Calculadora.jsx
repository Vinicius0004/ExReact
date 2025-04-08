import React, { useState } from 'react';
import './Calculadora.css';

function Calculadora() {
    const [entradas, setEntrada] = useState({
        valor1: '',
        valor2: '',
        operacao: 'soma',
    });

    const [resultado, setResultado] = useState('');

    const lidarComMudanca = (e) => {
        const { name, value } = e.target;
        setEntrada({ ...entradas, [name]: value });
    };

    const calcular = () => {
        const num1 = parseFloat(entradas.valor1);
        const num2 = parseFloat(entradas.valor2);

        if (isNaN(num1) || isNaN(num2)) {
            setResultado('Insira números válidos.');
            return;
        }

        const operacoes = {
            soma: num1 + num2,
            subtracao: num1 - num2,
            multiplicacao: num1 * num2,
            divisao: num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero',
        };

        setResultado(operacoes[entradas.operacao]);
    };

    const limparCampos = () => {
        setEntradas({ valor1: '', valor2: '', operacao: 'soma' });
        setResultado('');
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h2>Calculadora </h2>
            <input
                type="number"
                name="valor1"
                placeholder="Valor 1"
                value={entradas.valor1}
                onChange={lidarComMudanca}
                style={{ marginRight: '10px' }}
            />
            <input
                type="number"
                name="valor2"
                placeholder="Valor 2"
                value={entradas.valor2}
                onChange={lidarComMudanca}
                style={{ marginRight: '10px' }}
            />
            <select
                name="operacao"
                value={entradas.operacao}
                onChange={lidarComMudanca}
                style={{ marginRight: '10px' }}
            >
                <option value="soma">Soma</option>
                <option value="subtracao">Subtração</option>
                <option value="multiplicacao">Multiplicação</option>
                <option value="divisao">Divisão</option>
            </select>
            <div style={{ marginTop: '10px' }}>
                <button onClick={calcular} style={{ marginRight: '10px' }}>Calcular</button>
                <button onClick={limparCampos}>Limpar</button>
            </div>
            <p style={{ marginTop: '20px' }}><strong>Resultado:</strong> {resultado}</p>
        </div>
    );
}

export default Calculadora;
