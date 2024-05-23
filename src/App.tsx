import Button from "./components/Button";
import { Label } from "./components/Label";
import { Input } from "./components/Input";
import { ReferenceTable } from "./components/ReferenceTable";

function App() {
  return (
    <main className="bg-white max-w-4xl mx-auto py-24 px-40">
      <section id="form">
        <form>
          <div>
            <Label text="Peso (kg)" htmlFor="weight" />
            <Input type="text" id="weight" />
          </div>
          <div className="mt-4">
            <Label text="Altura (cm)" htmlFor="height" />
            <Input type="text" id="height" />
          </div>
          <Button type="submit" text="Calcular" />
        </form>
        <section id="result" className="py-10 px-4 h-40">
          <p className="text-center text-neutral-400 text-xl">
            Saiba Agora se está no seu peso ideal!
          </p>
        </section>
        <section>
          <ReferenceTable />
        </section>
      </section>
    </main>
  );
}

export default App;
