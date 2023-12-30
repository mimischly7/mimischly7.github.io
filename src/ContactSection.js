import "./ContactSection.css"

const ContactSection = (props) => {
    const {email, phone_number, github_link, linked_in_link, address} = props;
    return (
        <section id="contact">
            <h2>Contact</h2>
            <div className="contact-item">
                <h3>Email</h3>
                <p><a href={"mailto:"+email}>{email}</a></p>
            </div>
            <div className="contact-item">
                <h3>Phone Number</h3>
                <p><a href={"tel:"+phone_number}>{phone_number}</a></p>
            </div>
            <div className="contact-item">
                <h3>Address</h3>
                <address>
                    {address}
                </address>
            </div>
            <div className="contact-item">
                <h3>Github</h3>
                <a href={github_link}>GITHUB</a>
            </div>
            <div className="contact-item">
                <h3>LinkedIn</h3>
                <a href={linked_in_link}>LinkedIn</a>
            </div>
        </section>
    );
}

export default ContactSection