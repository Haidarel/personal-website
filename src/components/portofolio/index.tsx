"use client"

export default function PortofolioSection() {
    return (
        <section className="container">
            <div className="title-left">
                <h5 className="text-secondary">Portofolio</h5>
                <h1>My Lastest <span className="primary">Project</span></h1>
            </div>

            <div className="grid-container">
                <div className="porto-items merge-column">
                    <img src="/dummy.svg" alt="img" className="porto-image" />
                    <div className="porto-info">
                        <div className="flex-container">
                            <h4>Project Name</h4>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore omnis aspernatur soluta consectetur. Ducimus, quia! Aspernatur sit labore hic.</p>
                            <div className="tag-container">
                                <p className="tag">Capstone</p>
                                <p className="tag">Capstone</p>
                                <p className="tag">Capstone</p>
                            </div>
                        </div>
                        <div>
                            <button className="btn-link">Learn more ↗</button>
                        </div>
                    </div>
                </div>

                <div className="porto-items-reverse merge-column">
                    <img src="/dummy.svg" alt="img" className="porto-image" />
                    <div className="porto-info">
                        <div className="flex-container">
                            <h4>Project Name</h4>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore omnis aspernatur soluta consectetur. Ducimus, quia! Aspernatur sit labore hic.</p>
                            <div className="tag-container">
                                <p className="tag">Capstone</p>
                                <p className="tag">Capstone</p>
                                <p className="tag">Capstone</p>
                            </div>
                        </div>
                        <div>
                            <button className="btn-link">Learn more ↗</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}