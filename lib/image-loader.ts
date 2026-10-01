// De site is statisch en heeft geen beeldserver. Elke foto staat daarom vooraf in een paar breedtes
// als webp in /img (gemaakt door scripts/build-images.ts); deze loader kiest het juiste bestand.
// src is het pad van de geimporteerde foto, bv. /_next/static/media/bloesem.0aykbe216.jpg.
export default function imageLoader({ src, width }: { src: string; width: number }) {
    const naam = (src.split("/").pop() ?? "").split(".")[0];
    return `/img/${naam}-${width}.webp`;
}
