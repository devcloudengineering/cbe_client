import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function CardDashboard() {
  const navigate = useNavigate();

  const handleCardPress = () => {
    navigate("/combustible");
  };
  return (
    <>
      <div className="flex p-10 gap-5 flex-wrap mx-15 min-h-screen">
        <Card
          className="py-4 h-60"
          isPressable={true}
          onClick={handleCardPress}
        >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-xs uppercase font-bold">Modulo Combustible</p>
            <small className="text-sm text-default-500">Sensor de bomba</small>
            <h4 className="font-bold text-lg">Arduino</h4>{" "}
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl p-4"
              src="https://cdn-icons-png.flaticon.com/512/543/543885.png"
              width={150}
              height={150}
            />
          </CardBody>
        </Card>

        <Card className="py-4 h-60" isPressable={true}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Modulo Gestion</p>
            <small className="text-default-500">Ingresar</small>
            <h4 className="font-bold text-large">Registrar Bus</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover  rounded-xl p-4"
              src="https://cdn-icons-png.flaticon.com/512/5146/5146927.png"
              width={150}
              height={150}
            />
          </CardBody>
        </Card>

        <Card className="py-4 h-60" isPressable={true}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Modulo de alertas</p>
            <small className="text-default-500">Logs y alertas</small>
            <h4 className="font-bold text-large">Configuracion</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl p-4"
              src="https://cdn-icons-png.flaticon.com/512/1022/1022323.png"
              width={150}
              height={150}
            />
          </CardBody>
        </Card>

        <Card className="py-4 h-60" isPressable={true}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Modulo</p>
            <small className="text-default-500">Topico</small>
            <h4 className="font-bold text-large">Gestion</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl p-4"
              src="https://cdn-icons-png.flaticon.com/512/209/209323.png"
              width={150}
              height={150}
            />
          </CardBody>
        </Card>

        <Card className="py-4 h-60" isPressable={true}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Modulo</p>
            <small className="text-default-500">Topico</small>
            <h4 className="font-bold text-large">Gestion</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl p-4"
              src="https://cdn-icons-png.flaticon.com/512/209/209323.png"
              width={150}
              height={150}
            />
          </CardBody>
        </Card>

        <Card className="py-4 h-60" isPressable={true}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Modulo</p>
            <small className="text-default-500">Topico</small>
            <h4 className="font-bold text-large">Gestion</h4>
          </CardHeader>
          <CardBody className="overflow-visible">
            <Image
              alt="Card background"
              className="object-cover rounded-xl p-4"
              src="https://cdn-icons-png.flaticon.com/512/209/209323.png"
              width={150}
              height={150}
            />
          </CardBody>
        </Card>
      </div>
    </>
  );
}
