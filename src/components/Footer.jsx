import "./Sections.css";

function Footer() {
  return (
    <footer className="foot">
      <span className="tag">Let’s build something</span>
      <br />
      <br />
      <a className="big" href="mailto:aaniyaatomar@gmail.com">
        aaniyaatomar@gmail.com
      </a>
      <div className="links">
        {/* TODO: replace # with your LinkedIn URL */}
        <a className="link" href="#" target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
        <a
          className="link"
          href="https://github.com/aaniya22"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
        <a
          className="link"
          href="/Aaniya_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume ↗
        </a>
        <a className="link" href="tel:+917078036039">
          +91 70780 36039
        </a>
      </div>
    </footer>
  );
}

export default Footer;
