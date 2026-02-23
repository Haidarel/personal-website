"use client";

import { useState } from 'react';

interface ServiceCard {
  id: number;
  number: string;
  title: string;
  description: string;
  tags: string[]
}
  
export default function ServiceCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(2);

  const services: ServiceCard[] = [
    {
      id: 1,
      number: '01.',
      title: 'UI Designer.',
      description: 'Visualize your best idea. Self-Employed experience in UI Designer.',
      tags: ['Figma', 'Photoshop', 'Illustrator']
    },
    {
      id: 2,
      number: '02.',
      title: 'Website Developer.',
      description: 'Make your idea come true. 3 Years learning experiences in Software Engineering.',
      tags: ['Next.js', 'React.js', 'Node.js', 'Tailwind.css', 'TypeScript']
    },
    {
      id: 3,
      number: '03.',
      title: 'Motion Graphic.',
      description: 'Let the world know your great idea. I do Love to do visual-storytelling',
      tags: ['After Effect', 'Alight Motion']
    }
  ];

  return (
    <section className="container">
      <div className="title-center">
        <h5 className="text-secondary">Services</h5>
        <h1>What <span className="primary">I can do</span> for you</h1>
      </div>
      
      <div className="service-cards-container">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-card ${hoveredCard === service.id ? 'active' : ''}`}
            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(2)}
          >
            <div className="card-content">
              <h3 className="card-number">{service.number}</h3>
              <h4 className="card-title">{service.title}</h4>
              <p className="card-description">{service.description}</p>

              <div className="tags-container">
                {service.tags.map((tag, index) => (
                  <span key={index} className="tag-card">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="card-button">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}