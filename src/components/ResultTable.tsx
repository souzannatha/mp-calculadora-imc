import { formatNumber } from "../lib/Utils";

export function ResultTable({
  IMCData,
}: {
  IMCData: { weight: number; height: number; imc: number; imcResult: string };
}) {
  return (
    <table className="text-center text-xs md:text-base md:[&>tbody>tr>td]:p-2 md:[&>tbody>tr>td]:px-4 [&>tbody>tr>td]:px-2 text-neutral-600 mx-auto">
      <tbody>
        <tr className="font-bold border-b border-b-rose-400">
          <td>Peso</td>
          <td>Altura</td>
          <td>IMC</td>
          <td>Resultado</td>
        </tr>
        <tr>
          <td>{formatNumber(IMCData.weight)} kg</td>
          <td>{formatNumber(IMCData.height * 100, 0)} cm</td>
          <td>{formatNumber(IMCData.imc)} </td>
          <td>{IMCData.imcResult}</td>
        </tr>
      </tbody>
    </table>
  );
}
