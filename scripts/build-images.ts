// Zet elke foto uit public/images klaar als webp in de breedtes uit lib/image-widths.ts → public/img/.
// Draait voor elke build (zie package.json). Bestaande bestanden die nieuwer zijn dan de foto blijven staan.
import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

import { deviceSizes, imageSizes } from "../lib/image-widths";

const bron = path.join(process.cwd(), "public", "images");
const doel = path.join(process.cwd(), "public", "img");
await mkdir(doel, { recursive: true });

let gemaakt = 0;
for (const bestand of await readdir(bron)) {
    if (!/\.(jpe?g|png)$/i.test(bestand)) continue;
    const naam = bestand.replace(/\.[^.]+$/, "");
    const origineel = path.join(bron, bestand);
    const gewijzigd = (await stat(origineel)).mtimeMs;
    for (const breedte of [...imageSizes, ...deviceSizes]) {
        const uit = path.join(doel, `${naam}-${breedte}.webp`);
        const bestaat = await stat(uit).catch(() => null);
        if (bestaat && bestaat.mtimeMs > gewijzigd) continue;
        // Nooit groter maken dan het origineel: een brede variant van een kleine foto is het origineel zelf.
        await sharp(origineel)
            .rotate()
            .resize({ width: breedte, withoutEnlargement: true })
            .webp({ quality: 76 })
            .toFile(uit);
        gemaakt++;
    }
}
console.log(`foto's: ${gemaakt} bestanden gemaakt in public/img`);
