import '../App.css';
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
            bullets: [
                "Managed the full-stack development and maintenance of the organization's WordPress website, ensuring seamless updates and optimal performance.",
                "Implemented responsive design improvements and troubleshot technical issues to optimize user experience."
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
            bullets: []
        },
        {
            title: "IAM Analyst Intern",
            company: "Metropolitan Transportation Authority (MTA)",
            employmentType: "Internship",
            start: "Jun 2025",
            end: "Aug 2025",
            duration: "3 mos",
            location: "New York, United States",
            workMode: "On-site",
            bullets: [
                "Built a SharePoint documentation system for 700+ SSO applications with a deletion workflow.",
                "Led evaluation and vendor selection of SaaS Management Platforms, comparing 7+ tools, conducting multiple demos, and preparing executive-ready analysis for leadership decision-making.",
                "Executed a multi-phase rollout protecting 100+ admin accounts from NTLM authentication attacks, managing email communications and ticket submissions across multiple business units.",
                "Documented a system to automate provisioning in Endpoint Privileged Management using Power Apps, Power Automate, and SharePoint for request intake.",
                "Automated BeyondTrust password expiration alerts, saving 100+ hours yearly, enhancing compliance, and reducing manual oversight."
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
            bullets: [
                "Completed a seven-week virtual summer program focused on practical software engineering and AI applications.",
                "Designed and built five projects, including a personal portfolio, React + Next.js apps, and AI-powered tools using OpenAI APIs.",
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
            bullets: [
                "Prepared and delivered 3000+ units for customers, leading to an increase in efficiency by 15%.",
                "Organized time and effectively communicated with team leaders to ensure completion of tasks across departments during periods of increased workload.",
                "Listened to customers' issues and calmly produced solutions aligned with company goals and customer intent."
            ]
        },
        {
            title: "Computer Repair Intern",
            company: "Mobile Fix NYC",
            employmentType: "Internship",
            start: "Sep 2021",
            end: "Aug 2024",
            duration: "3 yrs",
            location: "Westbury, New York, United States",
            workMode: "On-site",
            bullets: [
                "Collaborated and applied problem-solving skills in partnership with 130+ schools and specialized technicians.",
                "Replaced 2000+ computer hardware components, such as motherboards, daughterboards, and LCDs.",
                "Proactively addressed unidentified issues, resulting in 50+ hours of saved time and effort for the company."
            ]
        },
        {
            title: "Intern",
            company: "Cognizant",
            employmentType: "Full-time",
            start: "Jan 2023",
            end: "Jan 2023",
            duration: "1 mo",
            location: "Teaneck, New Jersey, United States",
            workMode: "On-site",
            bullets: [
                "Worked with a group of peers and mentors to create a health portal as a tablet app.",
                "Utilized APIs to grant customers access to medical professionals in their area and create a safe login system.",
                "Focused on simplicity for people of all ages and providing information on COVID protocols.",
                "Presented the portal in front of a board of directors to be sold to insurance companies for their customers."
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

    return (
        <>
            <div className='container' id="experience"
            style={{
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

                {experience.map((job, index) => (
                    <Card key={index} job={job} img={getCompanyImage(job.company)} />
                ))}
            </div>
        </>
    );
};

const Card = ({ job, img }) => {
    const timeline = `${job.start} - ${job.end}`;
    
    return (
        <div className="experience-card" style={{
            display: "flex",
            alignItems: "flex-start",
            backgroundColor: "#1A1A1A",
            color: "#FFFFFF",
            borderRadius: "12px",
            margin: "20px 0",
            overflow: "hidden",
            border: "2px solid #FFFFFF",
            padding: "20px",
            boxShadow: "0 0 15px rgba(128, 0, 128, 0.3)",
            position: "relative",
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out" 
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow = "0 0 25px rgba(128, 0, 255, 0.6)";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"; 
            e.currentTarget.style.boxShadow = "0 0 15px rgba(128, 0, 128, 0.3)"; 
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
                {job.duration && (
                    <span style={{
                        background: "#4A0080",
                        color: "#FFFFFF",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        fontSize: "11px"
                    }}>
                        {job.duration}
                    </span>
                )}
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
                <div style={{ margin: "8px 0", fontSize: "13px", color: "#BBBBBB", display: "flex", gap: "15px", flexWrap: "wrap" }}>
                    <span>📍 {job.location}</span>
                    <span>💼 {job.workMode}</span>
                </div>
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
