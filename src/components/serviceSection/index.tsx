"use client";

import { useState } from 'react';

interface ServiceCard {
  id: number;
  number: string;
  title: string;
  description: string;
}

export default function ServiceCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services: ServiceCard[] = [
    {
      id: 1,
      number: '01.',
      title: 'Service for Any Level of Expertise.',
      description: 'Professional web development services tailored to your needs and skill level.'
    },
    {
      id: 2,
      number: '02.',
      title: 'Industry best practices.',
      description: 'Pollinated unsites and secures a growing ecosystem of specialized blockchains called specialized unites.'
    },
    {
      id: 3,
      number: '03.',
      title: 'Protected by insurance.',
      description: 'Your project is protected with comprehensive insurance coverage.'
    }
  ];

  return (
    <div className="service-cards-container">
      {services.map((service) => (
        <div
          key={service.id}
          className={`service-card ${hoveredCard === service.id ? 'active' : ''}`}
          onMouseEnter={() => setHoveredCard(service.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="card-content">
            <h3 className="card-number">{service.number}</h3>
            <h4 className="card-title">{service.title}</h4>
            <p className="card-description">{service.description}</p>
            <button className="card-button">
              Learn More →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}