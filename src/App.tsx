import Button from "./components/Button";
import { Label } from "./components/Label";
import { Input } from "./components/Input";
import { ReferenceTable } from "./components/ReferenceTable";
import { calculateIMC, imcResult } from "./lib/IMC";
import { useState } from "react";
import { ResultTable } from "./components/ResultTable";

function App() {
  const [IMCData, setIMCData] = useState<null | {
    weight: number;
    height: number;
    imc: number;
    imcResult: string;
  }>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as {
      weight: string;
      height: string;
    };

    const { weight, height } = data;
    if (!weight || !height) {
      alert("Preencha os campos!");
    }

    const weightNumber = parseFloat(weight.replace(",", "."));
    const heightNumber = parseFloat(height.replace(",", ".")) / 100;

    if (isNaN(weightNumber) || isNaN(heightNumber)) {
      alert("Preencha os campos com número válidos!");
      return;
    }
    if (weightNumber < 2 || weightNumber > 350) {
      alert("O peso precisa estar entre 2KG e 350KG");
    }
    if (heightNumber < 0.5 || heightNumber > 2.5) {
      alert("A Altura precisa estar entre 50cm e .5 Metros");
    }

    const imc = calculateIMC(weightNumber, heightNumber);
    const imcResultString = imcResult(imc);

    setIMCData({
      weight: weightNumber,
      height: heightNumber,
      imc: imc,
      imcResult: imcResultString,
    });
    event.currentTarget.reset();
  }
  function handleClickReset(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setIMCData(null);
  }

  return (
    <main className="bg-white max-w-4xl mx-auto md:py-24 md:px-40 px-5 py-10">
      <section id="form">
        <form onSubmit={handleSubmit}>
          <div>
            <Label text="Peso (kg)" htmlFor="weight" />
            <Input
              disabled={!!IMCData}
              name="weight"
              type="text"
              id="weight"
              className="mt-1"
            />
          </div>
          <div className="mt-4">
            <Label text="Altura (cm)" htmlFor="height" />
            <Input
              disabled={!!IMCData}
              name="height"
              type="text"
              id="height"
              className="mt-1"
            />
          </div>
          {IMCData ? (
            <Button onClick={handleClickReset} type="button" text="Refazer" />
          ) : (
            <Button type="submit" text="Calcular" />
          )}
        </form>
        <section id="result" className="py-10 px-4 h-40">
          {IMCData ? (
            <ResultTable IMCData={IMCData} />
          ) : (
            <p className="text-center text-neutral-400 text-xl">
              Saiba como está seu peso agora
            </p>
          )}
        </section>
        <section>
          <ReferenceTable />
        </section>
      </section>
    </main>
  );
}

export default App;
