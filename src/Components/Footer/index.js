import React from "react";
import './footer.scss';

const Footer = () => {
    const now = new Date();
    // console.log (Date);
    const year = now.getFullYear();
    // console.log(year);
    return(
        <>
            <h4 className="footer_title">By AstroSeb &copy; {year}</h4>
                <div className="footer_box">
                <ul className="footer_liste">
                    <li><a href="https://lesia.obspm.fr/">LESIA</a></li>
                    <li><a href="https://www.observatoiredeparis.psl.eu/">Observatoire de Paris PSL</a></li>
                    <li><a href="https://cnes.fr/fr">CNES</a></li>
                </ul>
                <ul className="footer_liste">
                    <li><a href="https://lesia.obspm.fr/">LESIA</a></li>
                    <li><a href="https://www.observatoiredeparis.psl.eu/">Observatoire de Paris PSL</a></li>
                    <li><a href="https://cnes.fr/fr">CNES</a></li>
                </ul>
                </div>
        </>
    )
}
export default Footer;
