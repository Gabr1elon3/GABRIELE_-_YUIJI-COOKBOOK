export function Contact() {
    return (
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out!</p>
  
        {/* Contact Information Section */}
        <section>
          <h3>Our Contact Information</h3>
          <p><strong>Email:</strong> support@example.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Address:</strong> 123 Business Street, City, Country</p>
        </section>
  
        {/* Contact Form Section */}
        <section>
          <h3>Send Us a Message</h3>
          <form>
            <div>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
  
        
        {/* Social Media Links Section */}
        <section>
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com/yourcompany" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </section>
      </div>
    );
  }
  