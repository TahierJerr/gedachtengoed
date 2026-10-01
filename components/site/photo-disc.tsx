import Image from "next/image";
import type { Photo } from "@/lib/photos";
import { cn } from "@/lib/utils";

type PhotoDiscProps = {
    photo: Photo;
    /** Waarde voor het `sizes`-attribuut, bv. "(min-width: 1024px) 520px, 80vw". */
    sizes: string;
    className?: string;
    preload?: boolean;
};

/**
 * Een foto in een ronde uitsnede. De ronde vorm komt van het beeldmerk
 * (de koru in een schijf) en keert op elke pagina terug.
 */
export function PhotoDisc({ photo, sizes, className, preload = false }: PhotoDiscProps) {
    return (
        <div
            className={cn(
                "relative aspect-square overflow-hidden rounded-full bg-muted-background",
                className
            )}
        >
            <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={sizes}
                placeholder="blur"
                preload={preload}
                className="object-cover"
                style={{ objectPosition: photo.position }}
            />
        </div>
    );
}
