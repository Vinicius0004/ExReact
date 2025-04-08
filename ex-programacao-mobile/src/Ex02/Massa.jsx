import React, { useState } from "react";

const IMC = () => {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [imc, setImc] = useState("");
    const [classificacao, setClassificacao] = useState("");

    const calcularIMC = () => {
        if (!peso || !altura) {
            alert("preencha todos os campos");
            return;
        }

        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        if (pesoNum <= 0 || alturaNum <= 0) {
            alert("Peso e altura devem ser maiores que zero.");
            return;
        }

        const valorIMC = pesoNum / (alturaNum * alturaNum);
        setImc(valorIMC.toFixed(2));

        let resultado = "";

        if (valorIMC < 16) {
            resultado = "Magreza grave";
        } else if (valorIMC < 17) {
            resultado = "Magreza moderada";
        } else if (valorIMC < 18.5) {
            resultado = "Magreza leve";
        } else if (valorIMC < 25) {
            resultado = "Saudável";
        } else if (valorIMC < 30) {
            resultado = "Sobrepeso";
        } else if (valorIMC < 35) {
            resultado = "Obesidade Grau I";
        } else if (valorIMC < 40) {
            resultado = "Obesidade Grau II (severa)";
        } else {
            resultado = "Obesidade Grau III (mórbida)";
        }

        setClassificacao(resultado);
    };

    const limpar = () => {
        setPeso("");
        setAltura("");
        setImc("");
        setClassificacao("");
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Calculadora de IMC</h1>

            <div style={{ marginBottom: "10px" }}>
                <label>
                    Peso (kg):
                    <input
                        type="number"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        min="0"
                        step="0.1"
                        style={{ marginLeft: "10px" }}
                    />
                </label>
            </div>

            <div style={{ marginBottom: "10px" }}>
                <label>
                    Altura (m):
                    <input
                        type="number"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        min="0"
                        step="0.01"
                        style={{ marginLeft: "10px" }}
                    />
                </label>
            </div>

            <button onClick={calcularIMC} style={{ marginRight: "10px" }}>
                Calcular
            </button>
            <button onClick={limpar}>Limpar</button>

            {imc && (
                <div style={{ marginTop: "20px" }}>
                    <h2>Resultado</h2>
                    <p>IMC: {imc}</p>
                    <p>Classificacao: {classificacao}</p>
                </div>
            )}
        </div>
    );
};

export default IMC;
