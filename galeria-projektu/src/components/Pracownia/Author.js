import React from "react";
import {Media} from "react-bootstrap";
import authImg from "../../assets/Katarzyna.jpg"

export function Author() {
    return (
        <>
            <h1>Katarzyna Krochmal</h1>
            <Media className="flex-column">
                <img
                    width={200}
                    height={200}
                    className="mr-3"
                    src={authImg}
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <p>
                        Jest absolwentką Wydziału Architektury Wnętrz Krakowskiej Akademii Sztuk Pięknych oraz
                        Warszawskiej Akademii Psychologii Zorientowanej na Proces. Brała udział w kilkudziesięciu
                        wystawach zbiorowych, a jej prace wystawiane były między innymi w Pałacu Sztuki w Krakowie,
                        Galerii Pryzmat w Krakowie, Centrum Sztuki Współczesnej w Warszawie, Centrum Sztuki i Techniki
                        Japońskiej „Manggha” w Krakowie.
                        Współorganizowała cykliczne wystawy poświęcone Sztuce Projektowania Młodych pod patronatem
                        Prezydenta Miasta Krakowa. Na wystawie indywidualnej w Galerii Baraka (Kraków 2005/2006)
                        zaprezentowała prace malarskie z cyklu „proste rzeczy”. Jest autorką projektów okładek do ponad
                        100 książek, m.in. do tomów Kuczoka, Witkowskiego, Słomczyńskiego, Debeliaka. Na swoim koncie ma
                        kilkadziesiąt zrealizowanych referencyjnych obiektów związanych z projektowaniem wnętrz,
                        wyróżnienie w konkursie Vasco Integracja. Zasiada w jury konkursu Dobry Design, dotyczącego
                        wyboru nowych przedmiotów i mebli pojawiających się na rynku polskim.
                        Od 1997 r. publikuje artykuły, prace graficzne oraz zdjęcia ze zrealizowanych inwestycji w
                        prestiżowych pismach artystycznych i wnętrzarskich.
                    </p>
                </Media.Body>
            </Media>
        </>
    )
}