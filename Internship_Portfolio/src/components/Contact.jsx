
import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const [sending, setSending] = useState(false);

    const [sent, setSent] = useState(false);

    // Update form values
    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));

        // Remove the field's error when the user edits it
        setErrors((previous) => ({
            ...previous,
            [name]: ""
        }));
    }

    // Validate form
    function validateForm() {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.includes("@")) {
            newErrors.email = "Enter a valid email";
        }

        if (formData.message.trim().length < 10) {
            newErrors.message =
                "Message must be at least 10 characters";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    // Handle form submission
    async function handleSubmit(event) {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        setSending(true);
        setSent(false);

        // Simulate the sending process
        await new Promise((resolve) =>
            setTimeout(resolve, 1500)
        );

        setSending(false);
        setSent(true);

        setFormData({
            name: "",
            email: "",
            message: ""
        });

        // Restore button after 3 seconds
        setTimeout(() => {
            setSent(false);
        }, 3000);
    }

    return (
        <section id="contact" className="contact-section">

            <h2>Get in Touch</h2>

            <form
                id="contact-form"
                onSubmit={handleSubmit}
                noValidate
            >

                <div className="form-group">

                    <label htmlFor="name">Name</label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "error" : ""}
                    />

                    {errors.name && (
                        <span className="error-msg">
                            {errors.name}
                        </span>
                    )}

                </div>

                <div className="form-group">

                    <label htmlFor="email">Email</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "error" : ""}
                    />

                    {errors.email && (
                        <span className="error-msg">
                            {errors.email}
                        </span>
                    )}

                </div>

                <div className="form-group">

                    <label htmlFor="message">Message</label>

                    <textarea
                        id="message"
                        name="message"
                        placeholder="Enter message"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? "error" : ""}
                    />

                    {errors.message && (
                        <span className="error-msg">
                            {errors.message}
                        </span>
                    )}

                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={sending}
                >
                    {sending
                        ? "sending..."
                        : sent
                            ? "✅ Message Sent"
                            : "Send Message"}
                </button>

            </form>

        </section>
    );
}

export default Contact;
