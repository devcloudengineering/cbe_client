import { Tooltip } from "recharts";

const CustomTooltip = ({ payload, label }) => {
  if (payload.length === 0) return null;

  const { litros, porcentaje, fecha } = payload[0].payload;

  const fechaFormateada = new Date(fecha).toLocaleString();

  return (
    <div className="bg-black border border-gray-300 p-2 rounded shadow-lg">
      <p className="text-md font-bold">Iteracion en el Arduino: {label}</p>
      <p className="text-sm font-bold">Fecha: {fechaFormateada}</p>
      <p className="text-sm italic">Litros: {litros}</p>
      <p className="text-sm italic">Porcentaje: {porcentaje}%</p>
    </div>
  );
};

export default CustomTooltip;
