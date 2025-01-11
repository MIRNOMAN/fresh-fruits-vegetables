import { registerUser } from "../../utils/actions/registerUser";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const FormPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const router = useRouter();
    
      const onSubmit = async (data) => {
        console.log(data);
    
        try {
          const res = await registerUser(data)
      if(res.message){
        alert(res.message)
        router.push("/")
      }
        } catch (err) {
          console.error(err.message);
          throw new Error(err.message);
        }
      };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              {...register("fullName")}
              placeholder="Full Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="flex  lg:flex-row lg:items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                required
              />
              <label
                htmlFor="remember"
                className="ml-2 lg:text-sm text-xs text-gray-700"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="lg:text-sm text-xs text-black underline hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="btn  w-full hover:bg-[#c0561d] mt-6 bg-[#FF6A1A] text-white border-0"
          >
           Register
          </button>

          <div className="relative flex items-center justify-center mt-8">
            <hr className="w-full h-px bg-gray-200" />
            <span className="absolute px-4 bg-white text-gray-700">
              or
            </span>
          </div>
        </form>
    );
};

export default FormPage;