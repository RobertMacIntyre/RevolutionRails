import React from "react";

function Contact() {
  return (
    <div className="container">
      <h2>📞 Contact Information</h2>
      <p>
        Have questions or want to get involved?  
        Reach out to us regarding the **Electrification of the Trans-Canada Railway Project**!
      </p>

      {/* Physical Address */}
      <div className="section">
        <h3>📍 Office Location</h3>
        <p><strong>20 Warne Street, Sydney, Nova Scotia, Canada</strong></p>
        <p>Visit our headquarters to learn more about the project.</p>
      </div>

      {/* Phone Contact */}
      <div className="section">
        <h3>📞 Call or Text Us</h3>
        <p><a href="tel:+19023041672" style={{ fontWeight: "bold" }}>📱 902-304-1672</a></p>
        <p>Available **Monday to Friday, 9 AM - 6 PM (AST)**</p>
      </div>

      {/* Email Contact */}
      <div className="section">
        <h3>📧 Email Us</h3>
        <p><a href="mailto:robertlornemacintyre@gmail.com" style={{ fontWeight: "bold" }}>📩 robertlornemacintyre@gmail.com</a></p>
        <p>For **general inquiries, partnerships, and volunteering.**</p>
      </div>

      {/* Donation Section */}
      <div className="section">
        <h3>💖 Support the Project</h3>
        <p>Your contributions help drive the **electrification of Canada’s rail system, clean public transit, and water access for all.**</p>
        
        <p><strong>Ways to Donate:</strong></p>
        <ul style={{ textAlign: "left", listStyleType: "none", padding: 0 }}>
          <li>📧 <strong>Email Transfer:</strong> <a href="mailto:robertlornemacintyre@gmail.com?subject=Donation for Railway Project&body=I would like to donate to the Electrification of the Trans-Canada Railway Project.">Send an E-Transfer</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
