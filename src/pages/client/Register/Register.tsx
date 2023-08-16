import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useEffect } from "react";
interface RegisterForm {
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const Register = () => {
  //  const [LocalUser, setLocalUser] = useState([])
  useEffect(() => {
    //  const user = localStorage.getItem("user");

    return () => {};
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(
      Yup.object().shape({
        phone: Yup.string()
          .min(10, "Too Short!")
          .max(10, "Too Long!")
          .required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string()
          .min(8, "Too Short!")
          .max(20, "Too Long!")
          .required("Required"),
        confirmPassword: Yup.string().required("Required"),
      })
    ),
  });
  const onSubmit = (data: RegisterForm) => {
    console.log(data);
    const local = localStorage.getItem("account") as string;
    const arrs = JSON.parse(local) ?? [];
    if (local) {
      if (arrs.length > 0) {
        arrs.forEach((element: { email: string }) => {
          if (element.email.includes(data.email)) {
            toast.error("Email already exists", {
              position: "bottom-right",
            });
            return;
          } 
          else {
            arrs.push(data);
            localStorage.setItem("account", JSON.stringify(arrs));
            toast.success("Register account successfully", {
              position: "bottom-right",
            });
            localStorage.setItem("user", JSON.stringify(data));
             
            return window.location.href ='/'
          }
        });
      } else if (arrs.length <= 0) {
        arrs.push(data);
        localStorage.setItem("account", JSON.stringify(arrs));
        localStorage.setItem("user", JSON.stringify(data));
        toast.success("Register account successfully", {
          position: "bottom-right",
        });
            return window.location.href ='/'
      } else {
        return;
      }
    }
  };
  return (
    <main className="main_login">
      <div className="login_wrapper">
        <h3 className="login__heading">Register!</h3>
        <form className="form__groups" onSubmit={handleSubmit(onSubmit)}>
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
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              placeholder="Phone Number"
              {...register("phone")}
            />
            {errors.phone && errors.phone.message && (
              <div className="error">{errors.phone?.message}</div>
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
          <div className="form__control">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && errors.confirmPassword.message && (
              <div className="error">{errors.confirmPassword?.message}</div>
            )}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
};

export default Register;
