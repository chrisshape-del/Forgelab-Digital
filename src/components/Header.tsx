"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Terminal } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Magnetic button wrapper
const Magnetic = ({ children }: { children: React.ReactElement }) => {
    const magnetic = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            if (!magnetic.current) return;
            const { clientX, clientY } = e;
            const { height, width, left, top } = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.35);
            yTo(y * 0.35);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        if (magnetic.current) {
            magnetic.current.addEventListener("mousemove", handleMouseMove);
            magnetic.current.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (magnetic.current) {
                magnetic.current.removeEventListener("mousemove", handleMouseMove);
                magnetic.current.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return <div ref={magnetic} className="inline-block">{children}</div>;
};

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useGSAP(() => {
        // Initial load animation
        gsap.fromTo(
            headerRef.current,
            { y: "-100%" },
            { y: "0%", duration: 1, ease: "expo.out", delay: 0.2 }
        );

        // ScrollTrigger for border and logo scaling
        ScrollTrigger.create({
            start: "top -100",
            end: 99999,
            onUpdate: (self) => {
                if (self.progress > 0 && !isScrolled) {
                    setIsScrolled(true);
                    gsap.to(logoRef.current, { scale: 0.95, duration: 0.3, ease: "power2.out" });
                } else if (self.progress === 0 && isScrolled) {
                    setIsScrolled(false);
                    gsap.to(logoRef.current, { scale: 1.1, duration: 0.3, ease: "power2.out" });
                }
            }
        });
    }, [isScrolled]);

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-[#0A1933]/80 backdrop-blur-md border-b border-forge-neon-blue/20' : 'bg-transparent border-b border-transparent'}`}
        >
            {/* Grain Integration */}
            <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
                    <filter id="noiseFilterHeader">
                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilterHeader)" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <div ref={logoRef} className="flex items-center gap-3 font-sora text-xl font-bold tracking-tighter" style={{ transform: "scale(1.1)" }}>
                    <Link href="/" className="text-white relative group">
                        FORGELAB <span className="neon-text-blue">DIGITAL</span>
                        <div className="absolute -inset-2 bg-forge-neon-blue/0 group-hover:bg-forge-neon-blue/10 blur-xl transition-all duration-500 rounded-full" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10 text-sm font-medium text-forge-highlight/80 uppercase tracking-widest">
                    <Magnetic>
                        <a href="#services" className="transition-colors hover:neon-text-blue hover:text-forge-neon-blue py-2 px-4">Expertise</a>
                    </Magnetic>
                    <Magnetic>
                        <a href="#ecosystem" className="transition-colors hover:neon-text-orange hover:text-forge-neon-orange py-2 px-4">Network</a>
                    </Magnetic>
                    <Magnetic>
                        <a href="#process" className="transition-colors hover:neon-text-blue hover:text-forge-neon-blue py-2 px-4">Protocol</a>
                    </Magnetic>
                </div>

                {/* Right Actions / Mobile Toggle */}
                <div className="flex items-center gap-6">
                    {/* Availability Badge (Always visible) */}
                    <div className="flex items-center gap-2 rounded-full border border-forge-neon-orange/30 bg-[#0A1933]/80 px-4 py-1.5 text-xs font-bold uppercase text-forge-neon-orange shadow-[0_0_10px_rgba(255,127,0,0.1)]">
                        <div className="h-2 w-2 rounded-full bg-forge-neon-orange animate-pulse shadow-[0_0_5px_rgba(255,127,0,0.8)]" />
                        <span className="hidden sm:inline">Systems Nominal</span>
                        <span className="sm:hidden">Ready</span>
                    </div>

                    {/* Custom Menu Toggle (Mobile) */}
                    <button
                        className="flex md:hidden flex-col items-end justify-center w-8 h-8 gap-2 group z-50 relative"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span className={`block h-[2px] bg-forge-neon-blue transition-all duration-300 ease-out shadow-[0_0_5px_rgba(0,255,255,0.5)] ${isMenuOpen ? 'w-8 rotate-45 translate-y-[10px]' : 'w-8 group-hover:w-6'}`} />
                        <span className={`block h-[2px] bg-forge-neon-orange transition-all duration-300 ease-out shadow-[0_0_5px_rgba(255,127,0,0.5)] ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-[10px]' : 'w-5 group-hover:w-8'}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#0A1933]/95 backdrop-blur-xl transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <nav className="flex flex-col items-center gap-8 text-2xl font-bold uppercase tracking-widest text-forge-highlight mt-20">
                    <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:neon-text-blue hover:text-forge-neon-blue">Expertise</a>
                    <a href="#ecosystem" onClick={() => setIsMenuOpen(false)} className="hover:neon-text-orange hover:text-forge-neon-orange">Network</a>
                    <a href="#process" onClick={() => setIsMenuOpen(false)} className="hover:neon-text-blue hover:text-forge-neon-blue">Protocol</a>
                </nav>
            </div>
        </header>
    );
}
