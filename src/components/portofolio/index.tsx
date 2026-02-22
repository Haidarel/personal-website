"use client"

import { useState } from "react"

interface PortofolioCard {
    id: number;
    title: string;
    desc: string;
}

export default function PortofolioSection() {
    const [card, setCard] = useState()

    const portofolio: PortofolioCard[] = [
        {
            id: 1,
            title: 'Indonesia Digital Learning',
            desc: ''
        },
        {
            id: 2,
            title: 'Telkom DigiUp 2025',
            desc: ''
        },
        {
            id: 3,
            title: 'Scodule ERP Website',
            desc: ''
        },
    ]

    return (
        <section className="container">
            <div className="title-left">
                <h5 className="text-secondary">Portofolio</h5>
                <h1>Project <span className="primary">I've Created</span> <br /> For My Clients</h1>
            </div>

            <div>
                
            </div>
        </section>
    )
}