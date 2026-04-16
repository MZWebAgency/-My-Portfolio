
export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#0f172a,#142A5A)",
      color: "white",
      textAlign: "center",
      padding: "40px"
    }}>
      <h1>Muzammil Abbas</h1>
      <h3>Founder of MZ Web Agency</h3>
      <p>WordPress Developer | 2+ Years Experience</p>

      <a href="https://wa.me/923064988820"
         style={{
           display: "inline-block",
           marginTop: "20px",
           padding: "10px 20px",
           background: "white",
           color: "black",
           textDecoration: "none"
         }}>
        Contact on WhatsApp
      </a>

      <h2 style={{marginTop:"40px"}}>Projects</h2>
      <ul style={{listStyle:"none", padding:0}}>
        <li>vertextechbusiness.com</li>
        <li>easypaperprints.us</li>
        <li>academi.dev</li>
        <li>deenperspective.com</li>
        <li>tropicalaquariumcare.com</li>
      </ul>
    </main>
  );
}
