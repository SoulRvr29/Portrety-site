import React from "react";
import { Element } from "react-scroll";
const Order = () => {
  return (
    <Element name="Jak zamawiać">
      <h2>Jak zamawiać</h2>
      <ul className="list-disc list-inside px-4 max-w-3xl mx-auto font-semibold flex flex-col gap-2">
        <li>
          Prześlij wybrane zdjęcie (lub kilka zdjęć) i napisz ewentualne uwagi
          na adres: jchudecka@op.pl. Fotografia powinna być w jak najlepszej
          jakości. Im wyraźniejsze zdjęcie, tym realistyczniej będę mogła
          wykonać rysunek.
        </li>
        <li>Po omówieniu szczegółów ustalony zostaje termin realizacji.</li>
        <li>
          Czas wykonania od 5 do 14 dni w zależności od wybranego formatu, oraz
          ewentualnych innych zamówień w danym terminie. Zamawiając na konkretny
          termin - im wcześniej, tym lepiej.
        </li>
        <li>
          Gdy portret będzie gotowy, przesyłam jego zdjęcie do akceptacji i
          jeśli trzeba, wprowadzam poprawki. Gotową pracę utrwalam fiksatywą.
        </li>
        <li>
          Przesyłkę nadaję po zaksięgowaniu wpłaty i wysyłam w kartonowej tubie.
        </li>
      </ul>
    </Element>
  );
};

export default Order;
