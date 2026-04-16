export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", color: "white", background: "#0b1220" }}>

      {/* HERO SECTION */}
      <section style={{
        padding: "90px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg,#0f172a,#142A5A,#0f172a)"
      }}>
        <h1 style={{ fontSize: "52px", marginBottom: "10px" }}>
          Muzammil Abbas
        </h1>

        <h3 style={{ color: "#cbd5e1", fontSize: "22px" }}>
          Founder of MZ Web Agency
        </h3>

        <p style={{ maxWidth: "600px", margin: "15px auto", color: "#94a3b8" }}>
          I build modern, fast and high converting WordPress & Next.js websites for businesses,
          blogs and eCommerce stores.
        </p>

        <a href="https://wa.me/923064988820"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 25px",
            background: "white",
            color: "black",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold"
          }}>
          Hire Me
        </a>
      </section>

      {/* EXPERIENCE SECTION */}
      <section style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "50px 20px",
        flexWrap: "wrap"
      }}>
        <div style={cardStyle}>2+ Years Experience</div>
        <div style={cardStyle}>50+ Projects Completed</div>
        <div style={cardStyle}>Fast Delivery</div>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Services</h2>

        <div style={grid}>
          <div style={serviceCard}>WordPress Websites</div>
          <div style={serviceCard}>Business Websites</div>
          <div style={serviceCard}>E-Commerce Stores</div>
          <div style={serviceCard}>Blog Development</div>
        </div>
      </section>

      {/* PROJECTS GALLERY */}
      <section style={{ padding: "60px 20px", background: "#0f172a" }}>
        <h2 style={{ textAlign: "center" }}>Projects</h2>

        <div style={grid}>
          <a href="https://vertextechbusiness.com" target="_blank" style={projectCard}>
            Vertex Tech Business
          </a>

          <a href="https://easypaperprints.us" target="_blank" style={projectCard}>
            Easy Paper Prints
          </a>

          <a href="https://academi.dev/blog/" target="_blank" style={projectCard}>
            Academi Blog
          </a>

          <a href="https://deenperspective.com" target="_blank" style={projectCard}>
            Deen Perspective
          </a>

          <a href="https://tropicalaquariumcare.com" target="_blank" style={projectCard}>
            Aquarium Care
          </a>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2>Contact Me</h2>

        <p style={{ color: "#94a3b8" }}>Let’s build something amazing together</p>

        <a href="https://wa.me/923064988820"
          style={{
            display: "inline-block",
            marginTop: "15px",
            padding: "12px 25px",
            background: "#22c55e",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none"
          }}>
          WhatsApp Now
        </a>
      </section>

    </main>
  );
}

/* STYLES */
const cardStyle = {
  background: "#111827",
  padding: "20px",
  borderRadius: "10px",
  minWidth: "200px",
  textAlign: "center"
};

const serviceCard = {
  background: "#1f2937",
  padding: "25px",
  borderRadius: "12px",
  color: "white"
};

const projectCard = {
  background: "#111827",
  padding: "25px",
  borderRadius: "12px",
  textAlign: "center",
  textDecoration: "none",
  color: "white"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
  marginTop: "30px"
};
