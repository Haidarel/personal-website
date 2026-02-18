"use client"

export default function AboutSection() {
    return (
        <section className="color-container">
            <div className="container">
                <div className="about-container">
                    <div>
                        <div className="">
                            <img src="/HeroImage.svg" alt="Hero" width={400} />
                        </div>
                    </div>
                    <div className="about-right">
                        <h6>- About Me</h6>
                        <h1>Who is <span className="text-primary">Ahmad Haidar?</span></h1>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident at similique ullam hic, atque ratione dolores, quod vitae cum sunt id voluptatum exercitationem reprehenderit minima?</p>
                        <div className="profile">
                            <div className="profile-items">
                                <img className="image-small" src="/Graduation.svg" alt="img" />
                                <div>
                                    <h3 className="bolder">1 Year</h3>
                                    <p className="text-secondary">Work Experience</p>
                                </div>
                            </div>
                            <div className="profile-items">
                                <img className="image-small" src="/Home.svg" alt="img" />
                                <div>
                                    <h3 className="bolder">4 Jobs</h3>
                                    <p className="text-secondary">Accepted</p>
                                </div>
                            </div>
                            <div className="profile-items">
                                <img className="image-small" src="/Job.svg" alt="img" />
                                <div>
                                    <h3 className="bolder">10+ Projects</h3>
                                    <p className="text-secondary">Finished</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="btn-primary">Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}