"use client"

export default function Footer(){
    return(
        <section className="color-container">
            <div className="container footer">
                <h3>Ahmad Haidar</h3>
                <div className="flex-container-footer">
                    <h5>Services</h5>
                    <h5>About Me</h5>
                    <h5>Portofolio</h5>
                    <h5>Experience</h5>                    
                    <h5>Contact</h5>                    
                </div>
                <div className="flex-container-row">
                    <img className="image-small" src="GitHub.svg" alt="git" />
                    <img className="image-small" src="Instagram.svg" alt="git" />
                    <img className="image-small" src="LinkedIn.svg" alt="git" />
                </div>
            </div>
        </section>
    )
}