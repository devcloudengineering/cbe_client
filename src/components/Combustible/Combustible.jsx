import { useState, useEffect } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltip from "../CustomTooltip/CustomTooltip";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

const Combustible = () => {
  const [data, setData] = useState([]);

  const recuperarData = async () => {
    try {
      const response = await fetch("http://localhost:3008/combustible/datos");
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error("Error en el fetch de datos", err.message);
    }
  };

  useEffect(() => {
    recuperarData();
    const intervalo = setInterval(recuperarData, 3000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen py-10 gap-10">
      <h1 className="text-4xl font-serif">Gráfico de Combustible</h1>
      <Link to={"/"}>
        <Button color="warning" className="italic font-semibold text-md">
          Ir al Dashboard
        </Button>
      </Link>
      <div className="h-auto w-[850px]">
        <ResponsiveContainer width="100%" aspect={2}>
          <BarChart
            data={data}
            width={500}
            height={300}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="4 1 2" />
            <XAxis />
            <YAxis dataKey="porcentaje" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="litros" fill="#6b48ff" />
            <Bar dataKey="porcentaje" fill="#1ee3cf" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Combustible;
