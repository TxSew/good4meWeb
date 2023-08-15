import React from "react";
import "./style.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};
const Login = () => {
//navigation
   const redirect = useNavigate()
 //hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(
      Yup.object({
        email: Yup.string().email().required("Email is required"),
        password: 
        Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .required("Password is required"),
      })
    ),
  });
  const onSubmit = (val: FormData) => {
    console.log(val);
    const localAccount =localStorage.getItem('account') 
     if(localAccount) {
         const account = JSON.parse(localAccount)
           const checkLogin = account.filter((account:FormData) => {
               return account.email === val.email     
           }) 
            if(checkLogin.length > 0) {
               if(checkLogin[0].password === val.password) {
                 const user = {
                   email: checkLogin[0].email,
                    phone:checkLogin[0].phone
                 }
                 localStorage.setItem('user', JSON.stringify(user))
                 toast.success("Login is successfully" , {
                   position: "bottom-right"
                 })
                  redirect('/')
               } else {
                 toast.error("Please enter a valid password" , {
                   position: "bottom-right"
                 })
               }
            }
             else {
                 toast.error("user and password error" , {
                   position: "bottom-right"
                 })
             }
     }
  };
  // firstName and lastName will have correct type
  return (
    <main className="main_login" onSubmit={handleSubmit(onSubmit)}>
      <div className="login_wrapper">
        <h3 className="login__heading">Login</h3>
        <form action="" className="login__groups">
          <div className="form__control">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && errors.email.message && (
              <div className="error">{errors.email?.message}</div>
            )}
          </div>
          <div className="form__control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && errors.password.message && (
              <div className="error">{errors.password?.message}</div>
            )}
          </div>
          <button type="submit" onClick={() => {}}>
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
