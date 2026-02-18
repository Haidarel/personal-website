"use client";

export default function SerciveSection() {
    return (
        <section className="container">
            <div className="title-center">
                <h5 className="text-secondary">Services</h5>
                <h1>What <span className="primary">I can do</span> for you</h1>
            </div>
            <div className="card-container">
                <div className="card">
                    <div className="card-logo">
                        <img src="/VisualStudio.svg" alt="logo" />
                        <img src="/VisualStudioCode.svg" alt="logo" />
                    </div>
                    <div>
                        <h4 className="bold">Website Developer</h4>
                        <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quibusdam, quae harum possimus fugiat cumque sapiente id vitae! Error, ut!</p>
                    </div>
                    <div>
                        <button className="btn-link">Learn more ↗</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-logo">
                        <img src="/Figma.svg" alt="logo" />
                        <img src="/WindowEdit.svg" alt="logo" />
                    </div>
                    <div>
                        <h4 className="bold">UI Designer</h4>
                        <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quibusdam, quae harum possimus fugiat cumque sapiente id vitae! Error, ut!</p>
                    </div>
                    <div>
                        <button className="btn-link">Learn more ↗</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-logo">
                        <img src="/AfterEffects.svg" alt="logo" />
                        <img src="/DepthEffect.svg" alt="logo" />
                    </div>
                    <div>
                        <h4 className="bold">Motion Graphic</h4>
                        <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quibusdam, quae harum possimus fugiat cumque sapiente id vitae! Error, ut!</p>
                    </div>
                    <div>
                        <button className="btn-link">Learn more ↗</button>
                    </div>
                </div>
            </div>
        </section>
    )
}