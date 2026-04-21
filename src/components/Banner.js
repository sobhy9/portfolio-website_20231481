import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section id="home" style={{
      marginTop: 0,
      padding: "260px 0 100px",
      background: "linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%)",
    }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span style={{
              color: "#fff",
              fontWeight: 700,
              letterSpacing: 1.5,
              fontSize: "1rem",
              marginBottom: "16px",
              display: "block"
            }}>
              Welcome to my Portfolio
            </span>
            <h1 style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "20px" }}>
              {`Hi! I'm youssef `}

              <span style={{ color: "#fff", borderRight: "0.08em solid #fff" }}>
                {text}
              </span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", marginBottom: "30px", lineHeight: 1.7 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button
              onClick={() => alert("Let's Connect!")}
              style={{
                background: "#fff",
                color: "#aa367c",
                border: "none",
                padding: "14px 30px",
                borderRadius: "30px",
                fontWeight: 700,
                fontSize: "1rem",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                transition: "all 0.3s ease"
              }}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5} style={{ textAlign: "center", marginTop: "40px" }}>
            {/* Placeholder for header image */}
            <div style={{
              width: "100%",
              maxWidth: "400px",
              height: "350px",
              margin: "0 auto",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "8rem"
            }}>
              👨‍💻
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
