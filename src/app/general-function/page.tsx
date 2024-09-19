"use client";

import React, { useState } from "react";

interface HandleProps {
  a: string;
  b: string;
}

const GeneralFunction: React.FC = () => {
  const [numero1, setNumero1] = useState<string>("");
  const [numero2, setNumero2] = useState<string>("");
  const [respSoma, setRespSoma] = useState<number | undefined>();
  const [respSub, setRespSub] = useState<number | undefined>();
  const [respMulti, setRespMulti] = useState<number | undefined>();
  const [respDiv, setRespDiv] = useState<number | undefined>();
  const msgErro = "Digite um número válido";

  // Função que usa a interface
  const handleAll = ({ a, b }: HandleProps) => {
    const n1 = parseFloat(a);
    const n2 = parseFloat(b);

    if (!isNaN(n1) && !isNaN(n2)) {
      setRespSoma(n1 + n2);
      setRespSub(n1 - n2);
      setRespMulti(n1 * n2);
      setRespDiv(n2 !== 0 ? n1 / n2 : undefined); // Verifica se o divisor não é zero
    } else {
      setRespSoma(undefined);
      setRespSub(undefined);
      setRespMulti(undefined);
      setRespDiv(undefined);
    }
  };

  return (
    <>
      <h1>Função Reaproveitada</h1>
      <div>
        <h1>Cálculos</h1>
        <div>
          <label htmlFor="n1">Número um:</label>
          <input
            type="number"
            id="n1"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="n2">Número dois:</label>
          <input
            type="number"
            id="n2"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />
        </div>
        <button onClick={() => handleAll({ a: numero1, b: numero2 })}>
          Calcular todos
        </button>
        <div>
          <div>
            <h1>Soma</h1>
            {!isNaN(respSoma ?? NaN) ? respSoma : msgErro}
          </div>
          <div>
            <h1>Sub</h1>
            {!isNaN(respSub ?? NaN) ? respSub : msgErro}
          </div>
          <div>
            <h1>Multi</h1>
            {!isNaN(respMulti ?? NaN) ? respMulti : msgErro}
          </div>
          <div>
            <h1>Div</h1>
            {!isNaN(respDiv ?? NaN) ? respDiv?.toFixed(2) : msgErro}
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralFunction;
