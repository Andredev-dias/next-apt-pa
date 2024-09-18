"use client";

import React, { useState } from "react";

// respSoma ?? NaN: O operador de coalescência nula (??) é usado aqui para garantir que,
// se respSoma for undefined ou null, o valor resultante será NaN (Not a Number).
//  Isso é importante porque o isNaN só pode ser aplicado a números ou valores que possam ser convertidos em números.

// isNaN(respSoma ?? NaN): O isNaN verifica se o valor passado é "Not a Number".
// Se respSoma for um número válido, isNaN(respSoma) retorna false, caso contrário,
// retorna true.

// !isNaN(respSoma ?? NaN): O ! nega o resultado de isNaN. Isso significa que,
// se o valor não for NaN (ou seja, for um número válido), a condição será verdadeira.
// Se for NaN (ou seja, inválido), a condição será falsa.

// Se respSoma for undefined ou NaN, o resultado da validação será false e o código exibirá a mensagem de erro.
//  Se for um número válido, a validação será true e o valor de respSoma será exibido corretamente.

const Maths: React.FC = () => {
  const [numero1, setNumero1] = useState<string>("");
  const [numero2, setNumero2] = useState<string>("");
  const [respSoma, setRespSoma] = useState<number | undefined>();
  const [respSub, setRespSub] = useState<number | undefined>();
  const [respMulti, setRespMulti] = useState<number | undefined>();
  const [respDiv, setRespDiv] = useState<number | undefined>();
  const msgErro = "Digite um número válido";

  const handleSoma = () => {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    if (!isNaN(n1) && !isNaN(n2)) {
      setRespSoma(n1 + n2);
    } else {
      setRespSoma(undefined);
    }
  };

  const handleSub = () => {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    if (!isNaN(n1) && !isNaN(n2)) {
      setRespSub(n1 - n2);
    } else {
      setRespSub(undefined);
    }
  };

  const handleMult = () => {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    if (!isNaN(n1) && !isNaN(n2)) {
      setRespMulti(n1 * n2);
    } else {
      setRespMulti(undefined);
    }
  };

  const handleDiv = () => {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    if (!isNaN(n1) && !isNaN(n2) && n2 !== 0) {
      setRespDiv(n1 / n2);
    } else {
      setRespDiv(undefined);
    }
  };

  return (
    <>
      <h1>Contas</h1>
      <div>
        <label htmlFor="n1">Número um:</label>
        <input
          className="bg-black text-white"
          type="text"
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="n2">Número dois:</label>
        <input
          className="bg-black text-white"
          type="text"
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
        />
      </div>
      <div>
        <div>
          <h1>Soma</h1>
          {!isNaN(respSoma ?? NaN) ? respSoma : msgErro}
          <button className="bg-black text-white" onClick={handleSoma}>
            SOMAR
          </button>
        </div>
        <div>
          <h1>Sub</h1>
          {!isNaN(respSub ?? NaN) ? respSub : msgErro}
          <button className="bg-black text-white" onClick={handleSub}>
            SUB
          </button>
        </div>
        <div>
          <h1>Multi</h1>
          {!isNaN(respMulti ?? NaN) ? respMulti : msgErro}
          <button className="bg-black text-white" onClick={handleMult}>
            MULTI
          </button>
        </div>
        <div>
          <h1>Div</h1>
          {!isNaN(respDiv ?? NaN) ? respDiv?.toFixed(2) : msgErro}
          <button className="bg-black text-white" onClick={handleDiv}>
            DIV
          </button>
        </div>
      </div>
    </>
  );
};

export default Maths;
