import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { emoji: "🌐", name: "Web Development" },
    { emoji: "🎨", name: "Web Design" },
    { emoji: "💡", name: "UI/UX Design" },
    { emoji: "⚛️", name: "React.js" },
    { emoji: "🗄️", name: "Database Design" },
    { emoji: "🔒", name: "Cyber Security" },
  ];

  return (
    <section id="skills" style={{
      padding: "80px 0",
      background: "#121212",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Decorative background blob */}
      <div style={{
        position: "absolute",
        left: -100,
        top: "50%",
        transform: "translateY(-50%)",
        width: 400,
        height: 400,
        background: "linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%)",
        borderRadius: "50%",
        filter: "blur(80px)",
        opacity: 0.15,
        pointerEvents: "none"
      }} />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div style={{
              background: "linear-gradient(90.21deg, rgba(170,54,124,0.15) -5.91%, rgba(74,47,189,0.15) 111.58%)",
              borderRadius: "64px",
              padding: "60px 50px",
              textAlign: "center"
            }}>
              <h2 style={{ color: "#fff", fontWeight: 700, fontSize: "2.5rem", marginBottom: "20px" }}>
                Skills
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", marginBottom: "40px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                Lorem Ipsum has been the industry's standard dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                className="skill-slider"
              >
                {skills.map((skill, index) => (
                  <div key={index} style={{
                    textAlign: "center",
                    padding: "30px 20px",
                    margin: "0 10px"
                  }}>
                    <div style={{ fontSize: "4rem", marginBottom: "15px" }}>
                      {skill.emoji}
                    </div>
                    {/* Skill meter bar */}
                    <div style={{
                      width: "80%",
                      margin: "0 auto 15px",
                      height: "8px",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "10px",
                      overflow: "hidden"
                    }}>
                      <div style={{
                        height: "100%",
                        width: `${70 + (index * 5) % 30}%`,
                        background: "linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%)",
                        borderRadius: "10px"
                      }} />
                    </div>
                    <h5 style={{ color: "#fff", fontWeight: 600 }}>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
