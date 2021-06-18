import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formDataName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
              {...register("name")}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Preferred Method of Contact:</Form.Label>
            <Form.Check
              inline
              type="radio"
              label="Phone"
              value="phone"
              {...register("preferredMethod")}
              className="ml-3"
            />
            <Form.Check
              inline
              type="radio"
              label="Email"
              value="email"
              {...register("preferredMethod")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDataMethodInfo">
            <Form.Label>
              Please provide details, based on your preferences above:
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Please provide details, based on your preferences above"
              required
              {...register("methodInfo")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDataMessage">
            <Form.Label>Message:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              required
              {...register("message")}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      ) : (
        <p>Thanks! We&apos;ll get back to you as soon as we can.</p>
      )}
    </>
  );
};

export default ContactForm;
