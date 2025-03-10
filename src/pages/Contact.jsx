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

      {/* Social Media */}
      <div className="section">
        <h3>🌎 Connect With Us Online</h3>
        <ul style={{ textAlign: "left", listStyleType: "none", padding: 0 }}>
          <li>🔵 <strong>Facebook:</strong> <a href="https://facebook.com/RailRevolution1" target="_blank" rel="noopener noreferrer">facebook.com/RailRevolution1</a></li>
          <li>🔷 <strong>Twitter/X:</strong> <a href="https://twitter.com/RailRevolution1" target="_blank" rel="noopener noreferrer">twitter.com/RailRevolution1</a></li>
          <li>📸 <strong>Instagram:</strong> <a href="https://instagram.com/RailRevolution1" target="_blank" rel="noopener noreferrer">instagram.com/RailRevolution1</a></li>
          <li>💼 <strong>LinkedIn:</strong> <a href="https://linkedin.com/company/railrevolution1" target="_blank" rel="noopener noreferrer">linkedin.com/company/railrevolution1</a></li>
        </ul>
        <p>Follow us for project updates, discussions, and advocacy efforts!</p>
      </div>

      {/* Volunteer or Collaborate */}
      <div className="section">
        <h3>🤝 Volunteer & Collaborate</h3>
        <p>Are you passionate about **sustainability, infrastructure, or transit development**?  
          Join our **team of engineers, urban planners, and activists** helping build a better future.</p>
        <p>
          Fill out our <a href="https://railrevolution1.com/volunteer-form" target="_blank" rel="noopener noreferrer"><strong>Volunteer Application Form</strong></a>.
        </p>
      </div>

      {/* Donation Section */}
      <div className="section">
        <h3>💖 Support the Project</h3>
        <p>Your contributions help drive the **electrification of Canada’s rail system, clean public transit, and water access for all.**</p>
        
        <p><strong>Ways to Donate:</strong></p>
        <ul style={{ textAlign: "left", listStyleType: "none", padding: 0 }}>
          <li>📧 <strong>Email Transfer:</strong> <a href="mailto:robertlornemacintyre@gmail.com?subject=Donation for Railway Project&body=I would like to donate to the Electrification of the Trans-Canada Railway Project.">Send an E-Transfer</a></li>
          <li>💳 <strong>Credit/Debit Card:</strong> <a href="https://railrevolution1.com/donate" target="_blank" rel="noopener noreferrer">Donate Securely Online</a></li>
          <li>🏦 <strong>Bank Transfer:</strong> Contact us for direct deposit details.</li>
          <li>📬 <strong>Mail a Cheque:</strong> 20 Warne Street, Sydney, Nova Scotia, Canada</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;