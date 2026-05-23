import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <>
          <Navbar />
            <div className="main-container">

                <div className="container-left">
                    <h1>
                        50% POPUSTA NA SVE FLAGSHIP MOBILNE
                        UREĐAJE U NAŠEM MOBILE SHOPU
                    </h1>

                    <br />

                    <h2>
                        ISKORISTITE OVU SUPER PONUDU KOJA VRIJEDI DO
                        <span className="last-date-present">
                            {" "}12.12.2022.
                        </span>
                    </h2>

                    <br />

                    <a href="#" className="show-more">
                        KUPI SADA
                    </a>
                </div>

                <div className="container-right">
                    <img
                        src="/img/promo.png"
                        className="pic1"
                        alt="Promo"
                    />
                </div>

            </div>

            {/* Izlog za mobitele */}

            <div className="category-info">

                <h1 className="product-category-title">
                    MOBITELI
                </h1>

                <a href="#" className="show-more-product">
                    POGLEDAJ VIŠE
                </a>

            </div>

            <div className="products-container">

                <div className="mobile">

                    <img
                        src="/img/13promax.png"
                        className="article-photo"
                        alt="Iphone"
                    />

                    <br />

                    <p className="product-name">
                        Apple Iphone 13 PRO MAX
                    </p>

                    <br />

                    <p className="price">
                        Cijena uređaja je:
                        <span className="none-price">
                            {" "}3300KM
                        </span>
                        {" "}1650KM
                    </p>

                    <br />

                    <a href="#" className="link-show-detail">
                        VIŠE
                    </a>

                </div>

                <div className="mobile">

                    <img
                        src="/img/s22.png"
                        className="article-photo"
                        alt="Samsung"
                    />

                    <br />

                    <p className="product-name">
                        Samsung Galaxy S22 ULTRA
                    </p>

                    <br />

                    <p className="price">
                        Cijena uređaja je:
                        <span className="none-price">
                            {" "}2600KM
                        </span>
                        {" "}1300KM
                    </p>

                    <br />

                    <a href="#" className="link-show-detail">
                        VIŠE
                    </a>

                </div>

            </div>

            {/* Footer */}

            <div className="footer">

                <div className="footer-segments-text">

                    <p className="title-abot">
                        Informacije o web shopu
                    </p>

                    <p className="text-about">
                        Adresa: ITAcademy
                        <br />
                        16 Zmaja od Bosne, Kubus D,
                        <br />
                        Sarajevo 71000
                        <br />
                        <br />
                        Pošaljite mail: mobileshop@webshop.ba
                        <br />
                        Nazovite nas: 0800 500 50
                    </p>

                </div>

                <div className="footer-segments">

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.023887006781!2d18.394564336375048!3d43.855333568976796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c922f5f4e403%3A0x72462f849de4eab1!2sITAcademy!5e0!3m2!1sbs!2sba!4v1659651221265!5m2!1sbs!2sba"
                        className="maps"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>

            </div>
        </>
    );
}