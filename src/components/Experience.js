import '../App.css';
import mfnyc from "../assets/img/mobilefixnyc.jpg";
import target from "../assets/img/target-logo.jpg";
import cognizant from "../assets/img/cognizant.jpg";

export const Experience = () => {
    const jobs = [
        {
            img: target, 
            title: "Checkout Advocate",
            company: "Target - Hicksville, NY",
            description: "Delivered 6000+ units to customers, enhancing efficiency by 15%. Streamlined coordination with team leaders, resulting in a 10% increase in team efficiency during peak periods.",
            timeline: "Oct 2023 - Present"
        },
        {
            img: mfnyc, 
            title: "Computer Repair Intern",
            company: "Mobile Fix NYC - Westbury, NY",
            description: "Collaborated with technicians to troubleshoot and repair computers for 130+ partnered schools. Replaced 2500+ computer components, ensuring smooth operation.",
            timeline: "Sept 2021 - Aug 2024"
        },
        {
            img: cognizant, 
            title: "Winter Intern (JSON, Microsoft Powertools)",
            company: "Cognizant - Teaneck, NJ",
            description: "Contributed to a digital health platform project, enhancing connectivity for medical professionals. Presented in front of the board of directors for potential expansion to insurance companies.",
            timeline: "Jan 2023"
        }
    ];

    return (
        <>
            <div className='container' style={{
                background: "linear-gradient(180deg, #000000, #2C003E)", 
                padding: "40px",
                borderRadius: "64px",
            }}>
                <h2 style={{
                    fontSize: "45px", 
                    fontWeight: "700", 
                    textAlign: "center", 
                    paddingBottom: "20px", 
                    color: "#FFFFFF"
                }}>
                    Work Experience:
                </h2>

                {jobs.map((job, index) => (
                    <Card key={index} img={job.img} title={job.title} company={job.company} description={job.description} timeline={job.timeline} />
                ))}
            </div>
        </>
    );
};

const Card = ({ img, title, company, description, timeline }) => {
    return (
        <div className="experience-card" style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1A1A1A",
            color: "#FFFFFF",
            borderRadius: "12px",
            margin: "10px 0",
            overflow: "hidden",
            border: "2px solid #FFFFFF",
            padding: "10px",
            boxShadow: "0 0 15px rgba(128, 0, 128, 0.3)",
            position: "relative",
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out" 
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 0 25px rgba(128, 0, 255, 0.6)";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"; 
            e.currentTarget.style.boxShadow = "0 0 15px rgba(128, 0, 128, 0.3)"; 
        }}>
            <span style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                background: "#FFFFFF",
                color: "#000000",
                padding: "4px 8px",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: "bold"
            }}>
                {timeline}
            </span>

            <img src={img} alt="Company Logo" style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "8px",
                backgroundColor: "#000000",
                border: "1px solid #FFFFFF"
            }} />
            <div style={{
                padding: "16px",
                flex: 1
            }}>
                <h2 style={{ margin: "0", fontSize: "20px", color: "#FFFFFF" }}>{title}</h2>
                <h3 style={{ margin: "4px 0", fontSize: "16px", color: "#CCCCCC" }}>{company}</h3>
                <p style={{ margin: "8px 0", fontSize: "14px", color: "#DDDDDD" }}>{description}</p>
            </div>
        </div>
    );
};
