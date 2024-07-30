import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";

const Login = ({ setIsAuthenticated }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [submitStatus, setSubmitStatus] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await fetch(
        "https://combustible-node-app-e4e4349af549.herokuapp.com/combustible/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Compruebe sus datos");
        reset();
      }

      const result = await response.json();
      if (response.ok) {
        setSubmitStatus("Ingresando...");
        setIsAuthenticated(true);
        localStorage.setItem("token", result.jwt);
        navigate("/combustible");
      } else {
        throw new Error(result.error || "Error desconocido");
      }
    } catch (error) {
      setSubmitStatus(`Compruebe sus credenciales`);
      reset();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-lg drop-shadow-xl h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 flex flex-col gap-2 w-[500px] h-full justify-center"
      >
        <h1 className="text-center py-10 italic text-3xl">
          Producto de gestion para el combustible
        </h1>
        <Input
          type="text"
          label="User"
          placeholder="Ingresa tu usuario"
          {...register("usuario", {
            required: {
              value: true,
              message: "El usuario es requerido",
            },
            maxLength: {
              value: 20,
              message: "El usuario excede la cantidad máxima de caracteres",
            },
            minLength: {
              value: 3,
              message: "El usuario debe tener al menos 3 caracteres",
            },
          })}
        />
        {errors.usuario && (
          <p className="text-red-500">{errors.usuario.message}</p>
        )}

        <Input
          type="password"
          label="Password"
          placeholder="Ingresa tu password"
          {...register("password", {
            required: {
              value: true,
              message: "El password es requerido",
            },
            maxLength: {
              value: 25,
              message: "El password excede la cantidad máxima de caracteres",
            },
            minLength: {
              value: 10,
              message: "El password debe tener al menos 10 caracteres",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <Button type="submit" color="primary">
          Enviar
        </Button>
      </form>
      {submitStatus && (
        <p className="text-center mt-2 mb-8 text-xl italic font-semibold text-white">
          {submitStatus}
        </p>
      )}
    </div>
  );
};

export default Login;
