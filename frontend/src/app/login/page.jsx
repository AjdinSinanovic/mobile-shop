"use client";

import { useEffect, useState } from "react";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [sifra, setSifra] = useState("");
    const [serverMessage, setServerMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!serverMessage) {
            return;
        }

        const timer = setTimeout(() => {
            setServerMessage("");
            setMessageType("");
        }, 4000);

        return () => clearTimeout(timer);
    }, [serverMessage]);

    async function loginUser(e) {

        e.preventDefault();
        setServerMessage("");
        setMessageType("");
        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:8081/auth/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email: email,
                        sifra: sifra
                    })
                }
            );

            const contentType = response.headers.get("content-type");
            const data = contentType && contentType.includes("application/json")
                ? await response.json()
                : await response.text();

            const message =
                typeof data === "string"
                    ? data
                    : data?.message || data?.poruka || data?.error;

            if (!response.ok) {
                setMessageType("error");
                setServerMessage(message || "Prijava nije uspjela.");
                return;
            }

            setMessageType("success");
            setServerMessage(
                message || `Uspjesna prijava${data?.ime ? `, ${data.ime}` : ""}.`
            );
        } catch (error) {
            setMessageType("error");
            setServerMessage("Server trenutno nije dostupan.");
        } finally {
            setLoading(false);
        }
    }

    return (

        <div
            className="form"
            style={{
                backgroundImage: "url('/img/pattern.png')"
            }}
        >

            <div className="form-design">

                <a href="/" className="logotype-in-login-form">

                    <img
                        src="/img/logotipe.png"
                        className="login-image"
                        alt="Logotype"
                    />

                </a>

                <a href="/" className="logo-in-login-form">

                    <img
                        src="/img/logo.png"
                        className="login-image"
                        alt="Logo"
                    />

                </a>

                <form
                    onSubmit={loginUser}
                    className="register"
                >

                    <label className="labela">
                        Email:
                    </label>

                    <br />

                    <input
                        type="email"
                        placeholder="Email.."
                        id="text-box"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <br />

                    <label className="labela">
                        Sifra:
                    </label>

                    <br />

                    <input
                        type="password"
                        placeholder="Šifra.."
                        id="password"
                        value={sifra}
                        onChange={(e) => setSifra(e.target.value)}
                    />

                    <br />

                    {serverMessage && (
                        <p className={`server-message ${messageType}`}>
                            {serverMessage}
                        </p>
                    )}

                    <button
                        type="submit"
                        id="submit-button"
                        disabled={loading}
                    >
                        {loading ? "Prijava..." : "Prijavi Se"}
                    </button>

                </form>

                <br />

                <p className="register-text">

                    Ako se niste registrovali,
                    registraciju možete izvršiti klikom

                    <a href="/register">
                        {" "}ovdje.
                    </a>

                </p>

                <a href="/" className="back">
                    Natrag
                </a>

            </div>

        </div>
    );
}
