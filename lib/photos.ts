import beukenblad from "@/public/images/beukenblad.jpg";
import bergenEnWater from "@/public/images/bergen-en-water.jpg";
import bloesem from "@/public/images/bloesem.jpg";
import cipressenlaan from "@/public/images/cipressenlaan.jpg";
import golf from "@/public/images/golf.jpg";
import knoppen from "@/public/images/knoppen.jpg";
import lotus from "@/public/images/lotus.jpg";
import lotusvijver from "@/public/images/lotusvijver.jpg";
import praktijkBuiten from "@/public/images/praktijk-buiten.jpg";
import roos from "@/public/images/roos.jpg";
import siepie from "@/public/images/siepie-zonderland.jpg";
import spreekkamer from "@/public/images/spreekkamer.jpg";
import zonsondergangBos from "@/public/images/zonsondergang-bos.jpg";
import zonsondergangRivier from "@/public/images/zonsondergang-rivier.jpg";
import zonsopkomstMeer from "@/public/images/zonsopkomst-meer.jpg";

/**
 * Alle foto's van de praktijk op één plek, met hun alt-tekst.
 * `position` is het punt dat in beeld blijft bij een ronde of smalle uitsnede.
 */
export const photos = {
    bloesem: {
        src: bloesem,
        alt: "Bloeiende fruitbomen boven een veld met gele bloemen",
        position: "50% 55%",
    },
    lotusvijver: {
        src: lotusvijver,
        alt: "Vijver vol lotusbladeren met roze lotusbloemen",
        position: "50% 50%",
    },
    lotus: {
        src: lotus,
        alt: "Twee roze lotusbloemen tussen de bladeren op het water",
        position: "52% 55%",
    },
    roos: {
        src: roos,
        alt: "Rode roos in een zonnige tuin",
        position: "50% 42%",
    },
    spreekkamer: {
        src: spreekkamer,
        alt: "De spreekkamer van de praktijk: twee groene fauteuils, bijzettafels en planten bij het raam",
        position: "42% 50%",
    },
    praktijkBuiten: {
        src: praktijkBuiten,
        alt: "De praktijk van buiten: de ingang van de spreekkamer in het souterrain, omgeven door groen",
        position: "50% 70%",
    },
    knoppen: {
        src: knoppen,
        alt: "Takken met uitlopende knoppen tegen een blauwe lucht",
        position: "45% 30%",
    },
    beukenblad: {
        src: beukenblad,
        alt: "Jong, lichtgroen beukenblad aan takken in het bos",
        position: "45% 55%",
    },
    cipressenlaan: {
        src: cipressenlaan,
        alt: "Een laan met cipressen die tussen bloemenvelden naar een huis op de heuvel loopt",
        position: "50% 50%",
    },
    golf: {
        src: golf,
        alt: "Een golf die breekt op het strand",
        position: "62% 45%",
    },
    zonsopkomstMeer: {
        src: zonsopkomstMeer,
        alt: "De zon komt op boven een dal met een meer",
        position: "45% 40%",
    },
    zonsondergangBos: {
        src: zonsondergangBos,
        alt: "Zonsondergang boven een uitgestrekt bos",
        position: "48% 35%",
    },
    zonsondergangRivier: {
        src: zonsondergangRivier,
        alt: "Zonsondergang boven een rivier",
        position: "60% 60%",
    },
    bergenEnWater: {
        src: bergenEnWater,
        alt: "Bergen die oprijzen uit het water onder een lucht met wolken",
        position: "32% 55%",
    },
    siepie: {
        src: siepie,
        alt: "Portret van Siepie Zonderland",
        position: "50% 30%",
    },
} as const;

export type Photo = (typeof photos)[keyof typeof photos];
