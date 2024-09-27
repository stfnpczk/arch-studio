import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Can't be empty";
  }
  if (!values.email) {
    errors.email = "Can't be empty";
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Invalid email format";
  }
  if (!values.message) {
    errors.message = "Can't be empty";
  }

  return errors;
};

export default function Connect() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validate,
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted successfully:", values);
      toast.success("Message sent! We will get back to you soon.");
      resetForm({ values: "" });
    },
  });

  const nameError = formik.touched.name && formik.errors.name;
  const emailError = formik.touched.email && formik.errors.email;
  const messageError = formik.touched.message && formik.errors.message;

  return (
    <>
      <meta name="format-detection" content="telephone=no" />
      <div className="mt-18 px-8 md:mt-48 md:px-0 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-20 xl:gap-8">
        <h3 className="text-5xl/13 tracking-[-0.075rem] md:text-7xl/16 lg:tracking-[-0.125rem]">
          Connect <span className="block md:inline lg:block">with us</span>
        </h3>
        <div>
          <form
            className="mt-10 flex flex-col md:mt-[3.75rem] lg:mt-0"
            onSubmit={formik.handleSubmit}
            autoComplete="on"
          >
            <div className="relative">
              <input
                className={`mb-11 w-full rounded-none border-b border-veryDarkBlue pl-9 pt-1 text-xl/11 font-bold tracking-[-0.0194rem] placeholder-lightGrey focus:border-b-transparent focus:outline-none focus:ring-2 ${
                  nameError
                    ? "border-b-red text-red placeholder-redOpacity focus:ring-red"
                    : "focus:ring-veryDarkBlue"
                }`}
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                autoComplete="name"
                {...formik.getFieldProps("name")}
              />
              {nameError && (
                <p className="absolute right-4 top-[1.125rem] text-lg/none font-bold text-red">
                  {formik.errors.name}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                className={`mb-11 w-full rounded-none border-b border-veryDarkBlue pl-9 pt-1 text-xl/11 font-bold tracking-[-0.0194rem] placeholder-lightGrey focus:border-b-transparent focus:outline-none focus:ring-2 ${
                  emailError
                    ? "border-b-red text-red placeholder-redOpacity focus:ring-red"
                    : "focus:ring-veryDarkBlue"
                }`}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                {...formik.getFieldProps("email")}
              />
              {emailError && (
                <p className="absolute right-4 top-[1.125rem] text-lg/none font-bold text-red">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div className="relative inline-flex">
              <textarea
                className={`w-full rounded-none border-b border-veryDarkBlue pl-9 pt-[0.5rem] text-xl font-bold leading-normal tracking-[-0.0194rem] placeholder-lightGrey focus:border-b-transparent focus:outline-none focus:ring-2 focus:ring-inset active:border-veryDarkBlue ${
                  messageError
                    ? "border-b-red text-red placeholder-redOpacity focus:ring-red"
                    : "focus:ring-veryDarkBlue"
                }`}
                id="message"
                name="message"
                placeholder="Message"
                autoComplete="off"
                {...formik.getFieldProps("message")}
              />
              {messageError && (
                <p className="absolute bottom-[2.25rem] right-4 text-lg/none font-bold text-red">
                  {formik.errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="ml-auto grid h-20 w-20 place-items-center justify-center bg-veryDarkBlue text-center text-lg/6 font-bold transition-all duration-300 ease-in-out can-hover:hover:bg-darkGrey"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18">
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                >
                  <path d="M15 1l9 9-9 9M0 10h24" />
                </g>
              </svg>
            </button>
            <Toaster
              position="bottom-center"
              toastOptions={{
                duration: 4000,
              }}
            />
          </form>
        </div>
      </div>
    </>
  );
}
