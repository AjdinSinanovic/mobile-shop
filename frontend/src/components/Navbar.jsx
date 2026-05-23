"use client";

import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navigation-logo">

            <div className="logo-div">
                <a href="/">
                    <img
                        src="/img/logo.png"
                        className="logo"
                        alt="Logo"
                    />
                </a>
            </div>

            <button
                type="button"
                className={`hamburger-menu ${menuOpen ? "open" : ""}`}
                aria-label="Otvori meni"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`nav ${menuOpen ? "nav-open" : ""}`}>
                <a href="/" className="navigation-active">
                    POČETNA
                </a>

                <a href="/akcije" className="navigation">
                    AKCIJSKE PONUDE
                </a>

                <a href="/market" className="navigation">
                    MARKET
                </a>

                <a href="/katalozi" className="navigation">
                    KATALOZI
                </a>

                <a href="/kontakti" className="navigation">
                    KONTAKTI
                </a>

                <a href="/login" className="login-register">
                    PRIJAVITE SE
                </a>

                <a href="/register" className="login-register">
                    REGISTRUJTE SE
                </a>
            </div>

        </nav>
    );
}
