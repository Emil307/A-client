"use client";
import { login, registration } from "@/app/api/auth";
import { setCookie } from "@/app/lib/coockies";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { navigate } from "@/app/lib/clientRedirect";
import Link from "next/link";

interface IFormFileds {
  name: string;
  tag: string;
  email: string;
  password: string;
}

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormFileds>();

  const onSubmit: SubmitHandler<IFormFileds> = async (data) => {
    await registration(data.name, data.tag, data.email, data.password)
      .then(() => {
        login(data.email, data.password)
          .then((res) => {
            toast.success("Регистрация прошла успешно!");
            setCookie("access", res.data.accessToken, {
              secure: "secure",
            });
            navigate("/home");
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch(() => {
        toast.error("Ошибка при регистрации");
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 text-black"
      >
        <h2>Регистрация</h2>
        <FormControl isInvalid={Boolean(errors.name)}>
          <FormLabel className="text-black">Имя *</FormLabel>
          <Input
            id="name"
            {...register("name", {
              required: "Обязательное поле",
            })}
            placeholder="Алан Тьюринг"
            type="text"
            size="sm"
            variant="flushed"
          />
          {errors.name && <p className="text-red">{errors.name.message}</p>}
        </FormControl>
        <FormControl isInvalid={Boolean(errors.tag)}>
          <FormLabel className="text-black">Псевдоним *</FormLabel>
          <Input
            id="tag"
            {...register("tag", {
              required: "Обязательное поле",
            })}
            placeholder=""
            type="text"
            size="sm"
            variant="flushed"
          />
          {errors.tag && <p className="text-red">{errors.tag.message}</p>}
        </FormControl>
        <FormControl isInvalid={Boolean(errors.email)}>
          <FormLabel className="text-black">E-mail *</FormLabel>
          <Input
            id="email"
            {...register("email", {
              required: "Обязательное поле",
            })}
            placeholder="example@gmail.com"
            type="E-mail"
            size="sm"
            variant="flushed"
          />
          {errors.email && <p className="text-red">{errors.email.message}</p>}
        </FormControl>
        <FormControl isInvalid={Boolean(errors.password)}>
          <FormLabel className="text-black">Пароль *</FormLabel>
          <Input
            placeholder="••••••••"
            type="password"
            {...register("password", {
              required: "Обязательное поле",
            })}
            size="sm"
            variant="flushed"
            className="text-black"
          />
          {errors.email && <p className="text-red">{errors.email.message}</p>}
        </FormControl>
        <Button
          type="submit"
          width="100%"
          borderRadius="8px"
          isLoading={isSubmitting}
        >
          Зарегистрироваться
        </Button>
        <Link href="/auth/signIn">Уже есть аккаунт? Войти</Link>
      </form>
    </>
  );
}
