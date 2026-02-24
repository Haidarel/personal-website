"use client"

export default function PortofolioSection() {
    return (
        <section className="container">
            <div className="title-center">
                <h5 className="text-secondary">Portofolio</h5>
                <h1>Project <span className="primary">I've Created</span> For My Client</h1>
            </div>

            <div className="porto-main-container">
                <div className="grid-container">
                    <div className="porto-img">
                        <img src="/dummy.svg" alt="" />
                    </div>
                    <div className="porto-main">
                        <div className="porto-main-title">
                            <h6 className="tag">WEB DESIGN</h6>
                            <h1>Web Design for Indonesia Digital Learning.</h1>
                        </div>
                        <button className="btn-link">See Website ↗</button>
                    </div>
                </div>

                <div className="grid-container">
                    <div className="porto-main">
                        <div className="porto-main-title">
                            <h6 className="tag">FRONTEND</h6>
                            <h1>Website schedule maker for Scover management.</h1>
                        </div>
                        <button className="btn-link">See Website ↗</button>
                    </div>
                    <div className="porto-img">
                        <img src="/dummy.svg" alt="" />
                    </div>
                </div>

                <div className="grid-container">
                    <div className="porto-img">
                        <img src="/dummy.svg" alt="" />
                    </div>
                    <div className="porto-main">
                        <div className="porto-main-title">
                            <h6 className="tag">WEB DESIGN</h6>
                            <h1>Web Design for Telkom DigiUp 2025.</h1>
                        </div>
                        <button className="btn-link">See Website ↗</button>
                    </div>
                </div>
            </div>
        </section>
    )
}