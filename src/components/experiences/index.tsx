"use client"

export default function ExperienceSection() {
    return (
        <section className="container">
            <div className="title-center">
                <h5 className="text-secondary">Education & Work</h5>
                <h1>My <span className="primary">Education & Work</span> Journey</h1>
            </div>
            <div className="porto-container">
                <div className="card">
                    <img src="/dummy.svg" alt="img" className="porto-image" />
                    <div className="tag-container">
                        <p className="tag">Capstone</p>
                        <p className="tag">Capstone</p>
                        <p className="tag">Capstone</p>
                    </div>
                    <div>
                        <h4>Project Name</h4>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore omnis aspernatur soluta consectetur. Ducimus, quia! Aspernatur sit labore hic.</p>
                    </div>
                </div>

                <div className="card">
                    <img src="/dummy.svg" alt="img" className="porto-image" />
                    <div className="tag-container">
                        <p className="tag">Capstone</p>
                        <p className="tag">Capstone</p>
                        <p className="tag">Capstone</p>
                    </div>
                    <div>
                        <h4>Project Name</h4>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore omnis aspernatur soluta consectetur. Ducimus, quia! Aspernatur sit labore hic.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}