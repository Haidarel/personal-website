"use client";

export default function HeroSection(){
    return (
        <section className="container grid-container">
            <div className="hero-container">
                <h6>Hello everyone 👋, I'm Ahmad Haidar</h6>
                <h1>Fullstack Website Developer from <span className="primary">Bandung</span></h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident nisi adipisci accusamus quae quidem quos eos, consectetur cupiditate praesentium. Earum, unde delectus? Laudantium blanditiis voluptates numquam unde, temporibus cum?</p>
                <div className="button-container">
                    <button className="btn-primary">Github <span className="arrow-icon">↗</span></button>
                    <button className="btn">Instagram</button>
                </div>
            </div>
            <div>
                <div className="hero-image">
                    <img src="/HeroImage.svg" alt="Hero" width={500}/>
                </div>
            </div>
        </section>
    )
}