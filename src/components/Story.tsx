import Icon from "./Icon";
import ImageSlot from "./ImageSlot";
import Reveal from "./Reveal";

// "Nasza historia / O nas"
export default function Story() {
    return (
        <section
            id="historia"
            className="relative py-[clamp(76px,11vw,150px)] px-[clamp(22px,6vw,80px)] overflow-hidden"
        >
            <svg
                aria-hidden="true"
                className="absolute top-10 -right-2 w-[clamp(70px,11vw,130px)] h-auto text-sage pointer-events-none"
                style={{
                    opacity: 0.32,
                    aspectRatio: "68 / 148",
                    animation: "drift 11s ease-in-out infinite",
                }}
            >
                <use href="#sprig" />
            </svg>

            <div className="max-w-270 mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(34px,6vw,72px)] items-center">
                <Reveal>
                    <p className="font-sans uppercase tracking-[.34em] text-[clamp(11px,1.4vw,13px)] font-medium text-gold m-0 mb-[.8em]">
                        Nasza historia
                    </p>
                    <h2 className="font-serif font-medium text-[clamp(34px,6vw,60px)] leading-[1.05] tracking-[.01em] text-ink mt-0 mb-[.5em]">
                        O nas
                    </h2>
                    <p className="mt-0 mb-[1.1em] text-body font-light text-[clamp(15px,1.7vw,17px)]">
                        Nasze ścieżki przecięły się jakiś czas temu i od tego
                        momentu wiemy, że chcemy iść przez życie razem. Po wielu
                        wspólnych podróżach, rozmowach i planach,
                        zdecydowaliśmy, że przyszedł czas na ten najważniejszy
                        krok.
                    </p>
                    <p className="m-0 text-body font-light text-[clamp(15px,1.7vw,17px)]">
                        Zależy nam, aby ten dzień był wyjątkowy, dlatego chcemy
                        go spędzić w gronie osób, z którymi łączą nas najlepsze
                        wspomnienia.
                        <br /> Bardzo się cieszymy, że będziecie z nami!
                    </p>
                    <div className="flex items-center gap-4 text-gold mt-[1.6em]">
                        <Icon
                            name="leaf"
                            size={18}
                            style={{ opacity: 0.9, flex: "none" }}
                        />
                        <span
                            className="h-px flex-1 max-w-40"
                            style={{
                                background:
                                    "linear-gradient(90deg,#C9A86A,transparent)",
                            }}
                        />
                    </div>
                </Reveal>

                <Reveal delay={120} className="relative">
                    <svg
                        aria-hidden="true"
                        className="absolute -top-6.5 -left-5.5 w-18.5 h-auto text-skyblue z-2 pointer-events-none"
                        style={{
                            opacity: 0.55,
                            aspectRatio: "68 / 148",
                            transform: "rotate(-12deg)",
                        }}
                    >
                        <use href="#sprig" />
                    </svg>
                    <figure
                        className="relative m-0 aspect-4/5 overflow-hidden"
                        style={{
                            borderRadius: "200px 200px 6px 6px",
                            boxShadow: "0 24px 60px rgba(44,62,80,.16)",
                        }}
                    >
                        <ImageSlot
                            id="couple"
                            placeholder="Wasze wspólne zdjęcie"
                            mask="inset(0 round 200px 200px 6px 6px)"
                        />
                    </figure>
                    <svg
                        aria-hidden="true"
                        className="absolute -bottom-6 right-[-18px] w-16 h-auto text-sage z-[2] pointer-events-none"
                        style={{
                            opacity: 0.5,
                            aspectRatio: "68 / 148",
                            transform: "rotate(150deg)",
                        }}
                    >
                        <use href="#sprig" />
                    </svg>
                </Reveal>
            </div>
        </section>
    );
}
