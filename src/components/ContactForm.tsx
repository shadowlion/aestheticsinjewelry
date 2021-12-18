import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  preferredMethod: string;
  methodInfo: string;
  message: string;
};

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setFormSubmitted(!formSubmitted);
      await fetch("/api/sendgrid", {
        method: "POST",
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              required
              {...register("name")}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="preferred-method-group">
              Preferred Method of Contact:
            </label>
            <br />
            <div
              id="preferred-method-group"
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="preferred-method"
                id="phone"
                value="phone"
                {...register("preferredMethod")}
              />
              <label className="btn btn-outline-primary" htmlFor="phone">
                Phone
              </label>

              <input
                type="radio"
                className="btn-check"
                name="preferred-method"
                id="email"
                value="email"
                {...register("preferredMethod")}
              />
              <label className="btn btn-outline-primary" htmlFor="email">
                Email
              </label>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="method-info" className="form-label">
              Please provide details, based on your preferences above:
            </label>
            <input
              type="text"
              className="form-control"
              id="method-info"
              placeholder="Contact details"
              required
              {...register("methodInfo")}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              id="message"
              placeholder="Leave a comment"
              required
              {...register("message")}
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <p>Thanks! We&apos;ll get back to you as soon as we can.</p>
      )}
    </>
  );
};

export default ContactForm;
