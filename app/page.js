
export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial",
      background: "#0f172a",
      color: "white",
      minHeight: "100vh"
    }}>

      {/* HERO SECTION */}
      <section style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg,#0f172a,#142A5A)"
      }}>
        <h1 style={{ fontSize: "50px", marginBottom: "10px" }}>
          Muzammil Abbas
        </h1>
        <p style={{ fontSize: "20px", color: "#cbd5e1" }}>
          Founder of MZ Web Agency
        </p>
        <p>WordPress Developer | 2+ Years Experience</p>

        <a href="https://wa.me/923064988820"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 25px",
            background: "white",
            color: "black",
            borderRadius: "8px",
            textDecoration: "none"
          }}>
          Contact on WhatsApp
        </a>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Services</h2>
        <p>✔ WordPress Websites</p>
        <p>✔ Business Websites</p>
        <p>✔ E-commerce Stores</p>
        <p>✔ Blog Development</p>
      </section>

      {/* PROJECTS */}
      <section style={{
        padding: "60px 20px",
        background: "#111827",
        textAlign: "center"
      }}>
        <h2>Projects</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>vertextechbusiness.com</li>
          <li>easypaperprints.us</li>
          <li>academi.dev</li>
          <li>deenperspective.com</li>
          <li>tropicalaquariumcare.com</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Contact</h2>
        <p>WhatsApp: 0306-4988820</p>
        <p>Email: mzwebagency@gmail.com</p>
      </section>

    </main>
  );
}
