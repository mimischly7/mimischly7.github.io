import "./ContactSection.css"

const ContactSection = () => {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <div className="contact-item">
                <h3>Email</h3>
                <p><a href="mailto:your-email@example.com">your-email@example.com</a></p>
            </div>
            <div className="contact-item">
                <h3>Phone Number</h3>
                <p><a href="tel:+1234567890">+1 234-567-890</a></p>
            </div>
            <div className="contact-item">
                <h3>Address</h3>
                <address>
                    {"123 Your Street,"+
                        "Your City, State, 12345" +
                        "Country" }
                </address>
            </div>
        </section>
    );
}

export default ContactSection