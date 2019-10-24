import React from "react";

const Contact = (props) => {
  const formRef = React.createRef();
  const fieldSetRef = React.createRef();
  const nameRef = React.createRef();
  const emailRef = React.createRef();
  const commentsRef = React.createRef();
  const submitRef = React.createRef();
  const loaderRef = React.createRef();
  const errorRef = React.createRef();
  const successRef = React.createRef();


  const onFormSubmit = event => {
    event.preventDefault();

    errorRef.current.setAttribute("hidden", "hidden");
    fieldSetRef.current.setAttribute("disabled", "disabled");
    submitRef.current.setAttribute("hidden", "hidden");
    loaderRef.current.removeAttribute("hidden");

    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status <= 299) {
        // success
        formRef.current.setAttribute("hidden", "hidden");
        successRef.current.removeAttribute("hidden");
      } else {
        // failure
        submitRef.current.setAttribute("hidden", "hidden");
        loaderRef.current.removeAttribute("hidden");
        fieldSetRef.current.removeAttribute("disabled");
        errorRef.current.removeAttribute("hidden");
      }
      console.log("Request completed.", xhr.status, xhr.responseText);
    });
    xhr.addEventListener("error", () => {
      // failure
      submitRef.current.removeAttribute("hidden");
      loaderRef.current.setAttribute("hidden", "hidden");
      fieldSetRef.current.removeAttribute("disabled");
      errorRef.current.removeAttribute("hidden");
    });
    xhr.open(
      "POST",
      "https://e67hj58402.execute-api.us-east-1.amazonaws.com/default/cycle-7-site-contact-form-to-slack",
      true
    );
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(
      JSON.stringify({
        name: nameRef.current.value,
        email: emailRef.current.value,
        comments: commentsRef.current.value
      })
    );

    return false;
  };

  return (
    <div className="contact" data-gtm-track="contact-form" id="contact-us" ref={props.contactRef}>
      <section className="grav-o-full-bleed__content grav-u-pt-xxl grav-u-pb-xxl">
        <h2 className="grav-u-text-centered">Let's talk</h2>
        <div className="row">
          <div className="col-md-10">
            <p>
              We can help with all aspects of sales and delivery; so message the
              team and we aim get back you within 24 hours.
            </p>
          </div>
        </div>
        <form ref={formRef} action="#" onSubmit={onFormSubmit}>
          <fieldset ref={fieldSetRef}>
            <div className="contact-row">
              <label className="contact-label" htmlFor="name">
                Your Name
              </label>
              <input
                className="contact-input"
                ref={nameRef}
                type="text"
                id="name"
                required
              />
            </div>
            <div className="contact-row">
              <label className="contact-label" htmlFor="email">
                Your Email
              </label>
              <input
                className="contact-input"
                ref={emailRef}
                type="email"
                id="email"
                required
              />
            </div>
            <div className="contact-row">
              <label className="contact-label" htmlFor="comments">
                Additional Information
              </label>
              <textarea
                className="contact-input contact-textarea"
                ref={commentsRef}
                id="comments"
                type="text"
                rows="3"
              />
            </div>
            <button
              ref={submitRef}
              type="submit"
              className="grav-u-font-size-plus-3"
            >
              Contact us
            </button>
            <div
              hidden="hidden"
              ref={loaderRef}
              className="sk-three-bounce grav-u-font-size-plus-3"
            >
              <div className="sk-child sk-bounce1" />
              <div className="sk-child sk-bounce2" />
              <div className="sk-child sk-bounce3" />
            </div>
            <div hidden="hidden" ref={errorRef} className="contact-error">
              <p>
                There was a problem sending your contact details. Try again
                later?
              </p>
            </div>
          </fieldset>
        </form>
        <div hidden="hidden" ref={successRef} className="contact-success">
          <p>Thanks for getting in contact. We'll get back to you soon.</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
