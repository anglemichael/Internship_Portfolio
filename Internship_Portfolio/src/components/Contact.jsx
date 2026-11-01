
import { useEffect, useRef, useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    // idle, sending or sent
    const [status, setStatus] = useState("idle");

    // Store the active timer so it can be cleaned up
    const timerRef = useRef(null);

    // Clean up pending timer if the component is removed
    useEffect(() => {
        return () => {
            clearTimeout(timerRef.current);
        };
    }, []);

    // Update form values
    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
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

    // Submit form
    function handleSubmit(event) {

        event.preventDefault();

        // Clear previous validation errors
        setErrors({});

        if (!validateForm()) {
            return;
        }

        setStatus("sending");

        // Simulate sending for 1.5 seconds
        timerRef.current = setTimeout(() => {

            setStatus("sent");

            // Clear form after simulated submission
            setFormData({
                name: "",
                email: "",
                message: ""
            });

            // Restore button after another 3 seconds
            timerRef.current = setTimeout(() => {
                setStatus("idle");
            }, 3000);

        }, 1500);
    }

    return (
        <section id="contact" className="contact-section">

            <h2>Get in Touch</h2>

            <form
                id="contact-form"
                onSubmit={handleSubmit}
                noValidate
            >

                {/* Name field */}
                <div className="form-group">

                    <label htmlFor="name">Name</label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={errors.name ? "error" : ""}
                    />

                    {errors.name && (
                        <span className="error-msg">
                            {errors.name}
                        </span>
                    )}

                </div>

                {/* Email field */}
                <div className="form-group">

                    <label htmlFor="email">Email</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={errors.email ? "error" : ""}
                    />

                    {errors.email && (
                        <span className="error-msg">
                            {errors.email}
                        </span>
                    )}

                </div>

                {/* Message field */}
                <div className="form-group">

                    <label htmlFor="message">Message</label>

                    <textarea
                        id="message"
                        name="message"
                        placeholder="Enter message"
                        value={formData.message}
                        onChange={handleChange}
                        required
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
                    disabled={status !== "idle"}
                >
                    {status === "sending"
                        ? "sending..."
                        : status === "sent"
                            ? "✅ Message Sent"
                            : "Send Message"}
                </button>

            </form>

        </section>
    );
}

export default Contact;
