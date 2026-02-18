"use client";

import { useState } from "react"

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setActiveSection(sectionId);
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <nav className="navbar">
            {/* Logo */}
            <div
                className="navbar-logo"
                onClick={() => scrollToSection('home')}
            >
                Ahmad Haidar
            </div>

            {/* Hamburger Menu */}
            <div
                className="hamburger"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                ☰
            </div>

            {/* Navigation Links */}
            <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                {navLinks.map((link) => (
                    <li
                        key={link.id}
                        className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                        onClick={() => scrollToSection(link.id)}
                    >
                        {link.label}
                    </li>
                ))}
            </ul>
        </nav>
    )
}