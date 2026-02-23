"use client"

import { useState } from "react"

interface PortofolioCard {
    id: number;
    title: string;
    desc: string;
}

export default function PortofolioSection() {
    const [card, setCard] = useState<number | null>(1)

    const portofolio: PortofolioCard[] = [
        {
            id: 1,
            title: 'Indonesia Digital Learning',
            desc: 'Rawr'
        },
        {
            id: 2,
            title: 'Telkom DigiUp 2025',
            desc: 'Rawr'
        },
        {
            id: 3,
            title: 'Scodule ERP Website',
            desc: 'Warw'
        },
    ]

    return (
        <section className="container">
            <div className="title-left">
                <h5 className="text-secondary">Portofolio</h5>
                <h1>Project <span className="primary">I've Created</span> <br /> For My Clients</h1>
            </div>

            <div className="grid-container">
                <div className="porto-left">
                    {portofolio.map((porto) => (
                        <div
                            key={porto.id}
                            className={`porto-card ${card === porto.id ? 'active' : ''}`}
                            onClick={() => setCard(porto.id)}
                        >
                            <div className="porto-content">
                                <h2 className="porto-title">{porto.title}</h2>
                                <p className="porto-desc">{porto.desc}</p>
                                <button className="porto-btn">
                                    Learn More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}