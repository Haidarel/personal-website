"use client"

export default function ExperienceSection() {
    return (
        <section className="container">
            <div className="title-center">
                <h5 className="text-secondary">Education & Work</h5>
                <h1>My <span className="primary">Education & Work</span> Journey</h1>
            </div>

            <div className="grid-container">
                <div className="card">
                    <div className="exp-title">
                        <div className="icon-full">
                            <img src="/Graduation.svg" alt="img" />
                        </div>
                        <h2>Education</h2>
                    </div>
                    <div className="exp-items">
                        <p className="text-secondary">2025 - 2026</p>
                        <h4>Udemy Fullstack Developer</h4>
                        <p className="text-secondary">Informal Education</p>
                    </div>
                    <div className="exp-items">
                        <p className="text-secondary">2023 - Now</p>
                        <h4>SMK Telkom Malang</h4>
                        <p className="text-secondary">Software Engineer Major</p>
                    </div>
                </div>
                <div className="card">
                    <div className="exp-title">
                        <div className="icon-full">
                            <img src="/Job.svg" alt="img" />
                        </div>
                        <h2>Work Experience</h2>
                    </div>
                    <div className="exp-items">
                        <p className="text-secondary">2023 - 2024</p>
                        <h4>Bstation Content Creator</h4>
                        <p className="text-secondary">Video Editor</p>
                    </div>
                    <div className="exp-items">
                        <p className="text-secondary">2024 - Now</p>
                        <h4>Self Employed</h4>
                        <p className="text-secondary">UI Designer / Website Developer</p>
                    </div>
                </div>
            </div>
        </section>
    )
}