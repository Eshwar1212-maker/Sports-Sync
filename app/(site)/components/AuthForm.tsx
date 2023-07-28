"use client";
import Input from "@/app/components/inputs/Input";
import { FC, useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";
import AuthSocialButton from "./AuthSocialButton";
import { BsGoogle } from "react-icons/bs";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingModal from "@/app/components/LoadingModal";
import { useTheme } from "next-themes";
import clsx from "clsx";

type Variant = "LOGIN" | "REGISTER";
interface AuthFormProps {}
const AuthForm: FC<AuthFormProps> = ({}) => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      console.log("authenticated");
      router.push("/users");
    }
  }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const registerMutation = useMutation(
    (data: FieldValues) => {
      return axios.post("/api/register", data);
    },
    {
      onError: () => {
        toast.error("Registration failed");
      },
      onSuccess: () => {
        toast.success("Created account succesfully!");
        router.push("/users");
      },
    }
  );

  const loginMutation = useMutation(
    (data: FieldValues) => {
      return signIn("credentials", {
        ...data,
        redirect: false,
      });
    },
    {
      onError: () => {
        toast.error(
          "Login failed, please make sure you are using the right email and password."
        );
      },
      onSuccess: (callback) => {
        if (callback?.error)
          toast.error(
            "Login failed, please make sure you are using the right email and password."
          );
      },
    }
  );

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (variant === "REGISTER") {
      registerMutation.mutate(data);
    }
    if (variant === "LOGIN") {
      toast((t) => (
        <>
          <span className="text-sm">Signing you in, please wait...</span>{" "}
          <LoadingModal />
        </>
      ));
      loginMutation.mutate(data);
    }
  };
  const socialLoginMutation = useMutation(
    (provider: string) => {
      return signIn(provider, { redirect: false });
    },
    {
      onError: () => {
        toast.error("Social login failed. Please try again.");
      },
      onSuccess: (callback) => {
        if (callback?.error)
          toast.error("Social login failed. Please try again.");
        if (callback?.ok && !callback?.error) {
          toast.success("Successfully logged in!");
          router.push("/users");
        }
      },
    }
  );
  const socialAction = (action: string) => {
    setTimeout(() => {
      toast((t) => (
        <>
          <span className="text-sm">
            Logging in with google, please wait...
          </span>{" "}
          <LoadingModal />
        </>
      ));
      socialLoginMutation.mutate(action);
    }, 0);
  };

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <h2
          className={clsx(
            "mb-4 text-center text-2xl font-bold tracking-tight text-gray-900",
            currentTheme === "dark" ? "text-white" : "text-gray-500"
          )}
        >
          Sign in to your account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {variant === "REGISTER" && (
            <Input
              label="Name"
              register={register}
              id="name"
              errors={errors}
              disabled={registerMutation.isLoading || loginMutation.isLoading}
            />
          )}
          <Input
            label="Email address"
            register={register}
            id="email"
            errors={errors}
            disabled={registerMutation.isLoading || loginMutation.isLoading}
          />
          <Input
            label="Password"
            register={register}
            id="password"
            errors={errors}
            disabled={registerMutation.isLoading || loginMutation.isLoading}
          />
          <div>
            <Button
              children={variant === "LOGIN" ? "Sign in" : "Register"}
              disabled={registerMutation.isLoading || loginMutation.isLoading}
              fullWidth
              type="submit"
            />
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span
                className={clsx(
                  `px-2`,
                  currentTheme === "dark" ? "text-white" : "text-gray-500"
                )}
              >
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>
        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === "LOGIN"
              ? "First time here?"
              : "Already have an account?"}
          </div>
          <div className="underline cursor-pointer" onClick={toggleVariant}>
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthForm;
