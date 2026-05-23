"use client";

import { useEffect, useState } from "react";

export default function RegisterPage() {

    const [ime, setIme] = useState("");
    const [prezime, setPrezime] = useState("");
    const [email, setEmail] = useState("");
    const [grad, setGrad] = useState("");
    const [sifra, setSifra] = useState("");
    const [postanskiBroj, setPostanskiBroj] = useState("");
    const [brojTelefona, setBrojTelefona] = useState("");
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

    async function registerUser(e) {

        e.preventDefault();
        setServerMessage("");
        setMessageType("");
        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:8081/auth/register",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        ime: ime,
                        prezime: prezime,
                        email: email,
                        grad: grad,
                        sifra: sifra,
                        postanskiBroj: postanskiBroj,
                        brojTelefona: brojTelefona
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
                setServerMessage(message || "Registracija nije uspjela.");
                return;
            }

            setMessageType("success");
            setServerMessage(
                message || `Uspjesna registracija${data?.ime ? `, ${data.ime}` : ""}.`
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
                    onSubmit={registerUser}
                    className="register"
                >

                    <label className="labela">
                        Ime:
                    </label>

                    <br />

                    <input
                        type="text"
                        id="text-box"
                        placeholder="Unesite vaše ime.."
                        value={ime}
                        onChange={(e) => setIme(e.target.value)}
                    />

                    <br />

                    <label className="labela">
                        Prezime:
                    </label>

                    <br />

                    <input
                        type="text"
                        id="text-box"
                        placeholder="Unesite vaše prezime.."
                        value={prezime}
                        onChange={(e) => setPrezime(e.target.value)}
                    />

                    <br />

                    <label className="labela">
                        Email:
                    </label>

                    <br />

                    <input
                        type="email"
                        id="text-box"
                        placeholder="Unesite email.."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <br />

                    <label className="labela">
                        Grad:
                    </label>

                    <br />

                    <input
                        type="text"
                        id="city"
                        placeholder="Unesite grad.."
                        value={grad}
                        onChange={(e) => setGrad(e.target.value)}
                    />

                    <br />

                    <label className="labela">
                        Šifra:
                    </label>

                    <br />

                    <input
                        type="password"
                        id="password"
                        placeholder="Unesite šifru.."
                        value={sifra}
                        onChange={(e) => setSifra(e.target.value)}
                    />

                    <br />

                    <label className="labela">
                        Poštanski broj:
                    </label>

                    <br />

                    <input
                        type="text"
                        id="postn"
                        placeholder="Unesite poštanski broj.."
                        value={postanskiBroj}
                        onChange={(e) =>
                            setPostanskiBroj(e.target.value)
                        }
                    />

                    <br />

                    <label className="labela">
                        Broj Telefona:
                    </label>

                    <br />

                    <input
                        type="tel"
                        id="phone"
                        placeholder="387xx-xxx-xxx"
                        value={brojTelefona}
                        onChange={(e) =>
                            setBrojTelefona(e.target.value)
                        }
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
                        {loading ? "Registracija..." : "Registruj Se"}
                    </button>

                </form>

            </div>

        </div>
    );
}
