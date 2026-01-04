import '../App.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import mfnyc from "../assets/img/mobilefixnyc.jpg";
import target from "../assets/img/target-logo.jpg";
import cognizant from "../assets/img/cognizant.jpg";
import gametime from "../assets/img/gametime.png";
import snowflake from "../assets/img/snowflake.png";
import mta from "../assets/img/mta.png";
import headstarter from "../assets/img/headstarter.png";
import pal from "../assets/img/PAL.png";
import tooli from "../assets/img/tooli.png";

export const Experience = () => {
    const experience = [
        {
            title: "Delivery Associate (Amazon DSP Driver)",
            company: "Tooli Logistics (Amazon DSP)",
            employmentType: "Part-time / Full-time",
            start: "Dec 2025",
            end: "Present",
            duration: "",
            location: "Syosset, NY",
            workMode: "On-site",
            category: "other", // Part-time job
            bullets: [
                "Delivered 200–300+ packages/day on assigned routes while meeting Amazon performance standards (on-time delivery, scan compliance, POD accuracy).",
                "Used Amazon routing/scanning tools to optimize stops, resolve delivery exceptions (access issues, incorrect addresses), and keep routes efficient.",
                "Conducted pre/post-trip vehicle inspections and followed safety procedures to ensure reliable, incident-free operations."
            ]
        },
        {
            title: "Software Engineer",
            company: "Gametime Sports",
            employmentType: "Internship",
            start: "Aug 2025",
            end: "Present",
            duration: "6 mos",
            location: "New York, United States",
            workMode: "Remote",
            category: "technical", // Technical career role
            bullets: [
                "Managed SSL certificate renewals, monitoring, and patch management to maintain secure WordPress operations",
                "Improved site performance by implementing responsive UI fixes and resolving recurring production issues"
            ]
        },
        {
            title: "AI Studio Fellow",
            company: "Snowflake",
            employmentType: "Internship",
            start: "Aug 2025",
            end: "Dec 2025",
            duration: "5 mos",
            location: "Remote",
            workMode: "Remote",
            category: "technical", // Technical career role
            bullets: []
        },
        {
            title: "Cyber Analyst Intern",
            company: "Metropolitan Transportation Authority (MTA)",
            employmentType: "Internship",
            start: "Jun 2025",
            end: "Aug 2025",
            duration: "3 mos",
            location: "New York, United States",
            workMode: "On-site",
            category: "technical", // Technical career role
            bullets: [
                "Managed Entra ID-connected SSO apps, automating deletion workflows and syncing missing metadata in SharePoint",
                "Mitigated NTLM authentication risks for 100+ admin accounts across multiple business units",
                "Developed Power Automate workflow for BeyondTrust password alerts, projected to save 100+ hours annually",
            ]
        },
        {
            title: "Software Engineer Fellow",
            company: "Headstarter",
            employmentType: "Internship",
            start: "Jul 2024",
            end: "Sep 2024",
            duration: "3 mos",
            location: "Remote",
            workMode: "Remote",
            category: "technical", // Technical career role
            bullets: [
                "Completed a seven-week virtual summer program, designing and building five projects including a personal portfolio, React + Next.js apps, and AI-powered tools",
                "Participated in hackathons and weekly team challenges and gained experience with deployment techniques, user growth strategies, and presenting work to mentors and engineers."
            ]
        },
        {
            title: "Checkout Advocate",
            company: "Target",
            employmentType: "Part-time",
            start: "Oct 2023",
            end: "Present",
            duration: "2 yrs 4 mos",
            location: "Hicksville, New York, United States",
            workMode: "On-site",
            category: "other", // Part-time job
            bullets: [
                "Prepared and delivered 3000+ units for customers, leading to an increase in efficiency by 15%.",
                "Organized time and effectively communicated with team leaders to ensure completion of tasks across departments during periods of increased workload.",
                "Listened to customers' issues and calmly produced solutions aligned with company goals and customer intent."
            ]
        },
        {
            title: "IT Support Technician Intern",
            company: "Mobile Fix NYC",
            employmentType: "Internship",
            start: "Sept 2021",
            end: "Aug 2024",
            duration: "3 yrs",
            location: "Westbury, New York, United States",
            workMode: "On-site",
            category: "technical", // Technical career role
            bullets: [
                "Replaced 2,500+ computer components across 130+ partnered schools, ensuring reliable system performance",
                "Documented hardware issues and coordinated repairs to verify functionality and maintain quality standards"
            ]
        },
        {
            title: "Software Engineering Intern",
            company: "Cognizant",
            employmentType: "Internship",
            start: "Jan 2023",
            end: "Jan 2023",
            duration: "1 mo",
            location: "Teaneck, New Jersey, United States",
            workMode: "On-site",
            category: "technical", // Technical career role
            bullets: [
                "Developed a full-stack insurance portal to manage personal information, submit claims, and purchase plans, presenting the platform's capabilities to company directors"
            ]
        },
        {
            title: "Basketball Coach / Volleyball Coach",
            company: "Police Activity League",
            employmentType: "Full-time",
            start: "Jun 2022",
            end: "Dec 2022",
            duration: "7 mos",
            location: "Hicksville, New York, United States",
            workMode: "On-site",
            category: "other", // Other experience
            bullets: [
                "Coached hundreds of youth across multiple camps; developed skills, teamwork, and confidence through training and mentorship."
            ]
        }
    ];

    // Map company names to images
    const getCompanyImage = (companyName) => {
        const imageMap = {
            "Gametime Sports": gametime,
            "Snowflake": snowflake,
            "Metropolitan Transportation Authority (MTA)": mta,
            "Headstarter": headstarter,
            "Target": target,
            "Mobile Fix NYC": mfnyc,
            "Cognizant": cognizant,
            "Police Activity League": pal,
            "Tooli Logistics (Amazon DSP)": tooli
        };
        return imageMap[companyName] || null;
    };

    // Filter experiences by category
    const technicalRoles = experience.filter(job => job.category === "technical");
    const otherExperience = experience.filter(job => job.category === "other");

    return (
        <>
            <div id="experience"
            style={{
                background: "linear-gradient(180deg, #000000, #2C003E)", 
                padding: "40px 0",
                width: "100%",
                borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)"
            }}>
                <div className='container' style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}>
                <h2 style={{
                    fontSize: "45px", 
                    fontWeight: "700", 
                    textAlign: "center", 
                    paddingBottom: "20px", 
                    color: "#FFFFFF"
                }}>
                    Work Experience:
                </h2>
                
                <style>{`
                    #pills-tab .nav-link {
                        user-select: none;
                        -webkit-user-select: none;
                    }
                    #pills-tab .nav-link.active[data-rr-ui-event-key="technical"] {
                        background-color: rgba(0, 212, 255, 0.4) !important;
                        border-color: #00D4FF !important;
                        color: #00D4FF !important;
                        box-shadow: 0 0 15px rgba(0, 212, 255, 0.5) !important;
                        transform: scale(1.05) !important;
                    }
                    #pills-tab .nav-link.active[data-rr-ui-event-key="other"] {
                        background-color: rgba(255, 255, 255, 0.3) !important;
                        border-color: #FFFFFF !important;
                        color: #FFFFFF !important;
                        box-shadow: 0 0 15px rgba(255, 255, 255, 0.5) !important;
                        transform: scale(1.05) !important;
                    }
                    #pills-tab .nav-link:active {
                        transform: scale(0.98) !important;
                    }
                `}</style>
                <TrackVisibility>
                    {({ isVisible }) => (
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <Tab.Container id="experience-tabs" defaultActiveKey="technical">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" style={{ gap: "15px" }}>
                                    <Nav.Item>
                                        <Nav.Link 
                                            eventKey="technical"
                                            style={{
                                                padding: "12px 30px",
                                                fontSize: "16px",
                                                fontWeight: "600",
                                                borderRadius: "8px",
                                                border: "2px solid #00D4FF",
                                                backgroundColor: "rgba(0, 212, 255, 0.1)",
                                                color: "#00D4FF",
                                                cursor: "pointer",
                                                transition: "all 0.3s ease",
                                                textDecoration: "none"
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!e.target.classList.contains('active')) {
                                                    e.target.style.backgroundColor = "rgba(0, 212, 255, 0.3)";
                                                    e.target.style.transform = "scale(1.05)";
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!e.target.classList.contains('active')) {
                                                    e.target.style.backgroundColor = "rgba(0, 212, 255, 0.1)";
                                                    e.target.style.transform = "scale(1)";
                                                }
                                            }}
                                        >
                                            💻 Technical Roles
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link 
                                            eventKey="other"
                                            style={{
                                                padding: "12px 30px",
                                                fontSize: "16px",
                                                fontWeight: "600",
                                                borderRadius: "8px",
                                                border: "2px solid #FFFFFF",
                                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                                color: "#FFFFFF",
                                                cursor: "pointer",
                                                transition: "all 0.3s ease",
                                                textDecoration: "none"
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!e.target.classList.contains('active')) {
                                                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                                                    e.target.style.transform = "scale(1.05)";
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!e.target.classList.contains('active')) {
                                                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                                                    e.target.style.transform = "scale(1)";
                                                }
                                            }}
                                        >
                                            💼 Other Experience
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    
                                    {/* Technical Roles Tab */}
                                    <Tab.Pane eventKey="technical">
                                        {technicalRoles.map((job, index) => (
                                            <Card key={index} job={job} img={getCompanyImage(job.company)} />
                                        ))}
                                    </Tab.Pane>

                                    {/* Other Experience Tab */}
                                    <Tab.Pane eventKey="other">
                                        {otherExperience.map((job, index) => (
                                            <Card key={index} job={job} img={getCompanyImage(job.company)} />
                                        ))}
                                    </Tab.Pane>

                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    )}
                </TrackVisibility>
                </div>
            </div>
        </>
    );
};

const Card = ({ job, img }) => {
    const timeline = `${job.start} - ${job.end}`;
    const isTechnical = job.category === "technical";
    
    return (
        <div className="experience-card" style={{
            display: "flex",
            alignItems: "flex-start",
            backgroundColor: "#1A1A1A",
            color: "#FFFFFF",
            borderRadius: "12px",
            margin: "20px 0",
            overflow: "hidden",
            border: isTechnical ? "2px solid #00D4FF" : "2px solid #FFFFFF",
            borderLeft: isTechnical ? "5px solid #00D4FF" : "5px solid #FFFFFF",
            padding: "20px",
            boxShadow: isTechnical ? "0 0 15px rgba(0, 212, 255, 0.4)" : "0 0 15px rgba(128, 0, 128, 0.3)",
            position: "relative",
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out" 
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
            if (isTechnical) {
                e.currentTarget.style.boxShadow = "0 0 25px rgba(0, 212, 255, 0.7)";
            } else {
                e.currentTarget.style.boxShadow = "0 0 25px rgba(128, 0, 255, 0.6)";
            }
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"; 
            if (isTechnical) {
                e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 212, 255, 0.4)";
            } else {
                e.currentTarget.style.boxShadow = "0 0 15px rgba(128, 0, 128, 0.3)";
            }
        }}>
            <div style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "flex-end"
            }}>
                <span style={{
                    background: "#FFFFFF",
                    color: "#000000",
                    padding: "4px 8px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: "bold"
                }}>
                    {timeline}
                </span>
            </div>

            {img ? (
                <img src={img} alt={`${job.company} Logo`} style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    backgroundColor: "#000000",
                    border: "1px solid #FFFFFF",
                    marginRight: "20px",
                    flexShrink: 0
                }} />
            ) : (
                <div style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "8px",
                    backgroundColor: "#2C003E",
                    border: "1px solid #FFFFFF",
                    marginRight: "20px",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#FFFFFF"
                }}>
                    {job.company.charAt(0)}
                </div>
            )}
            
            <div style={{
                padding: "0",
                flex: 1,
                minWidth: 0
            }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "wrap", marginBottom: "8px" }}>
                    <h2 style={{ margin: "0", fontSize: "22px", color: "#FFFFFF", fontWeight: "700" }}>{job.title}</h2>
                    <span style={{
                        background: "#4A0080",
                        color: "#FFFFFF",
                        padding: "2px 8px",
                        borderRadius: "4px",
                        fontSize: "11px",
                        fontWeight: "600"
                    }}>
                        {job.employmentType}
                    </span>
                </div>
                <h3 style={{ margin: "4px 0", fontSize: "18px", color: "#CCCCCC", fontWeight: "600" }}>{job.company}</h3>
                {job.bullets && job.bullets.length > 0 && (
                    <ul style={{ 
                        margin: "12px 0 0 0", 
                        paddingLeft: "20px", 
                        fontSize: "14px", 
                        color: "#DDDDDD",
                        lineHeight: "1.6"
                    }}>
                        {job.bullets.map((bullet, idx) => (
                            <li key={idx} style={{ marginBottom: "8px" }}>{bullet}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
