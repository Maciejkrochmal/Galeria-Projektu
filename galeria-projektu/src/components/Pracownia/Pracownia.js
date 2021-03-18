import React from "react";
import {Media} from "react-bootstrap";
import p1 from '../../assets/Pracownia1.jpg'
import p2 from '../../assets/Pracownia2.jpg'

export function Pracownia() {
    return(
        <>
            <h1>PRACOWNIA</h1>
            <ul className="list-unstyled">
                <Media as="li" className='d-lg-flex d-block'>
                    <img
                        width={200}
                        height={200}
                        className="mr-3"
                        src={p1}
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>o projektowaniu</h5>
                        <p>
                            Wszystko zaczęło się od mojego licealnego zachwytu nad symbiozą architektury monumentalnej z ideami tworzonymi na potrzeby systemów religijnych, klanowych czy totalitarnych. Uderzył mnie wtedy fakt, że można wpływać na emocje człowieka poprzez kształtowanie przestrzeni zewnętrznej generując poczucie strachu, przynależności czy wykluczenia. Tak samo wpływa na nas przestrzeń wnętrz w których przebywamy, możemy czuć się w nich bezpiecznie lub źle, nieustannie zmieniając wyposażenie, kolory lub funkcje poszczególnych pomieszczeń. Właściwie zaprojektowane wnętrze współgra z jego właścicielem bo posiada takie same cechy jak on i tym samym staje się przestrzenią przyjazną do życia. Dziś analitycy, trendsetterzy badają relację pomiędzy układem przestrzennym, wyposażeniem a człowiekiem jego poczuciem komfortu i spełnienia. Efektywność w pracy wzrasta wraz ze zwiększeniem komfortu użytkowników biur czy hal produkcyjnych. Nie jest już tajemnicą, że odpowiednie kolory użyte w przestrzeniach handlowych, odpowiednie oświetlenie i układ przestrzenny, sprawia, że odczuwamy to co dla nas przewidziano. Jest to ogromna wiedza, która wraz z wyczuciem estetyki i intuicją, tworzy niezbędny trójkąt potrzebny do pracy jaką wykonuję. Dobrze zaprojektowane wnętrze, to miejsce do którego chce się wracać bo jest inspiracją dla dalszej pracy czy wypoczynku, takie właśnie projekty tworzę w oparciu o intensywną współpracę z Klientem.
                            Dziękuje w tym punkcie wszystkim tym, którzy do tej pory obdarzyli mnie zaufaniem i z ogromną satysfakcją pokazuję na tej stronie efekty naszych wspólnych działań.
                        </p>
                    </Media.Body>
                </Media>

                <Media as="li" className='d-lg-flex d-block'>
                    <img
                        width={200}
                        height={200}
                        className="mr-3"
                        src={p2}
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>filozofia współpracy z klientem</h5>
                        <p>
                            W swojej pracy kieruję się wzajemnym poszanowaniem jakie musi zaistnieć pomiędzy projektantem, zamawiającym oraz całym gronem podwykonawców. W moim założeniu wszyscy tworzymy jeden zespół. Zaczynając od klienta, który formułuje swoje oczekiwania, poprzez projektantów dokładających wszelkich starań aby pomysł płynnie przelany na projekt został zrozumiany przez kolejne ogniwa. W procesie pracy projektowej wykształciłam sobie system, który sprawnie generuje kontakt z Klientem. Przychodząc do pracowni, każdy z Państwa ma inne wyobrażenie o estetyce inwestycji. Czasami potrzebujecie porady, czasami kompleksowego poprowadzenia projektu. Każda inwestycja jest niepowtarzalna i wymaga zaangażowania najróżniejszych grup specjalistów. Dlatego też wycena, zakres prac oraz ich etapowanie ustalane jest indywidualnie w zależności od oczekiwań i budżetu inwestycji. Po wzajemnej akceptacji rozpoczynamy nową wspólną przygodę, jaką jest proces projektowy. Przełamywanie barier i wytyczanie nowych dróg w szeroko pojętym świecie przestrzeni wnętrza jest moją codziennością.
                        </p>
                    </Media.Body>
                </Media>

                <Media as="li" className='d-lg-flex d-block'>
                    <img
                        width={200}
                        height={200}
                        className="mr-3"
                        src={p2}
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>firmy, które zrealizowały moje projekty</h5>
                        <p>
                            Alwernia Studios / Agencja reklamowa Demo / AVSystem / Bank UBS / beeline concesions / Biuro Nieruchomoci B12 / Branburg / Cedrus / Chemkop Laborgeo / Centrum urody „Sekrety Piękna” / Dom Handlowy Nauki / Dyskoteka „Cocon” / Elbrewery Company Ltd Sp. z oo./ Event Factory / Galeco / Geokrak / Grudnik Holding / Herbapol Kraków / Hydrogeo / Hydropol / IGS PAN / ING – PAN / Jazz Cafe / Instytut Materiałów Mineralnych / Kawiarnia „Stara Portiernia” / Knieja / Krakowskie Biuro Festiwalowe / Ksiegarnia „Wirgo” / Małopolska Agencja Inwestycyjna Agmen / Małopolska Agencja Reklamowa Galicja / Małopolski Urząd Wojewódzki / Mix Nieruchomosci / Oknoplast / Okręgowa Komisja Edukacyjna / Orlando Travel / PIG / Polkomtel S.A. / Pub Behemot / Pub West / Progeo / Przedsiębiorstwo Geologiczne S.A./ Remtsma International Poland / Restauracja „Old Joker” / Restauracja „Renesans” / Restauracja „Sąsiedzi” / Restauracja „U Ziyada” / Salon fryzjerski „Trendy” / Salon kosmetyczny „Biotiq” / Skorpion / Salon Fryzjerski „Świątynia Włosa” / Salon Fryzjerski „Sylwia” / Tequm / Uniwersytet Jagielloński Wydział Fizyki oraz Wydział Polonistyki / Weromex / Wodeko / Wolnicki / Wydawnictwo Zielona Sowa / Wydział Geologii i Geofizyki AGH / X-tech / oraz cały szereg prywatnych inwestorów
                        </p>
                    </Media.Body>
                </Media>
            </ul>
        </>
    )
}