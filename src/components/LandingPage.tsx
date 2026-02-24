"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hammer, Sparkles, Binary, Zap, ExternalLink, Cpu, BarChart3, Rocket, Layers, ChevronRight, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ServiceCard = ({ title, description, icon: Icon, highlight = "blue" }: any) => {
    const isOrange = highlight === "orange";
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
                "group relative overflow-hidden rounded-xl bg-forge-indigo/20 p-8 transition-all glass-cyber hover:-translate-y-1",
                isOrange ? "hover:neon-border-orange" : "hover:neon-border-blue"
            )}
        >
            <div className={cn("absolute -right-4 -top-4 h-32 w-32 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-40", isOrange ? "bg-forge-neon-orange" : "bg-forge-neon-blue")} />

            <div className="relative z-10">
                <div className={cn("mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border bg-black/40 transition-transform group-hover:scale-110", isOrange ? "border-forge-neon-orange/30 text-forge-neon-orange" : "border-forge-neon-blue/30 text-forge-neon-blue")}>
                    <Icon size={24} />
                </div>
                <h3 className="mb-3 text-2xl font-bold font-sora tracking-tight text-white">{title}</h3>
                <p className="text-forge-highlight/80 leading-relaxed">{description}</p>
            </div>
            {/* Decorative circuit lines */}
            <div className={cn("absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 ease-out group-hover:w-full", isOrange ? "bg-forge-neon-orange shadow-[0_0_10px_#FF7F00]" : "bg-forge-neon-blue shadow-[0_0_10px_#00FFFF]")} />
        </motion.div>
    );
};

const BrandCard = ({ title, description, link, icon: Icon, type }: any) => {
    const isOrange = type === "orange";
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className={cn(
                "group relative overflow-hidden rounded-xl bg-[#071022] p-8 transition-all border border-forge-neon-blue/10 hover:border-forge-neon-blue/50"
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-forge-neon-blue/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="relative z-10">
                <div className={cn("mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A1933] border", isOrange ? "border-forge-neon-orange/40 text-forge-neon-orange" : "border-forge-neon-blue/40 text-forge-neon-blue")}>
                    <Icon size={20} />
                </div>
                <h3 className="mb-2 text-xl font-bold font-sora text-white">{title}</h3>
                <p className="mb-6 text-sm text-forge-highlight/70 leading-relaxed">{description}</p>
                <a
                    href={link}
                    className={cn("inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-all hover:gap-3", isOrange ? "text-forge-neon-orange" : "text-forge-neon-blue")}
                >
                    Init Sequence <ExternalLink size={14} />
                </a>
            </div>
        </motion.div>
    );
};

export default function LandingPage() {
    const brands = [
        {
            title: "forgr.nl",
            description: "Dedicated platform for custom digital builds and artisanal software engineering.",
            link: "https://forgr.nl",
            icon: Terminal,
            type: "blue",
        },
        {
            title: "Forgeflow",
            description: "High-velocity AI content multiplication and autonomous marketing workflows.",
            link: "#",
            icon: Zap,
            type: "orange",
        },
        {
            title: "The Crucible",
            description: "R&D laboratory for emerging technologies, experimental AI, and beta products.",
            link: "#",
            icon: Sparkles,
            type: "blue",
        },
    ];

    const services = [
        {
            title: "AI & Automation",
            description: "We forge autonomous agents and intelligent workflows that replace manual overhead with precision machine execution.",
            icon: Cpu,
            highlight: "blue"
        },
        {
            title: "Digital Strategy",
            description: "Architecting blueprints for global market dominance through data-driven decisions and lab-tested formulas.",
            icon: BarChart3,
            highlight: "orange"
        },
        {
            title: "Product Forging",
            description: "Turning raw concepts into premium digital products with world-class UX and resilient cyber-architecture.",
            icon: Rocket,
            highlight: "blue"
        },
        {
            title: "Brand Ecosystems",
            description: "Building connected networks of brands that create self-sustaining powerhouses on a global scale.",
            icon: Layers,
            highlight: "orange"
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-forge-neon-blue/30 selection:text-forge-neon-blue">
            {/* Header / Nav */}
            <nav className="fixed top-0 z-50 w-full border-b border-forge-neon-blue/10 bg-background/80 backdrop-blur-md">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                    <div className="flex items-center gap-3 font-sora text-xl font-bold tracking-tighter">
                        <span className="hidden sm:inline text-white">FORGELAB <span className="neon-text-blue">DIGITAL</span></span>
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-forge-highlight/80">
                        <a href="#services" className="transition-colors hover:neon-text-blue hover:text-forge-neon-blue">Expertise</a>
                        <a href="#ecosystem" className="transition-colors hover:neon-text-orange hover:text-forge-neon-orange">Network</a>
                        <a href="#process" className="transition-colors hover:neon-text-blue hover:text-forge-neon-blue">Protocol</a>
                    </div>
                </div>
            </nav>

            <main className="relative">
                {/* Cyberpunk Hero Section */}
                <section className="relative flex min-h-[100svh] flex-col items-center justify-start overflow-hidden bg-background pb-20 pt-[18vh]">

                    {/* The Full Background Logo - Blended seamlessly */}
                    <div className="absolute inset-0 z-0 bg-background">
                        <Image
                            src="/cyber-hero.jpg"
                            alt="Forgelab Digital Cyberpunk City"
                            fill
                            priority
                            className="object-cover object-center opacity-95"
                        />
                        {/* Heavy vignette to blend edges into the deep navy background */}
                        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, #0A1933 100%)' }} />
                        {/* Bottom fade for readability and seamless transition */}
                        <div className="absolute bottom-0 h-[40vh] w-full bg-gradient-to-t from-background via-background/80 to-transparent" />
                        {/* Top fade for nav and new text position */}
                        <div className="absolute top-0 h-[50vh] w-full bg-gradient-to-b from-background/90 via-background/40 to-transparent" />
                    </div>

                    {/* Subtitle & CTAs (Overlaid at the top) */}
                    <div className="relative z-20 mx-auto max-w-7xl px-6 text-center">
                        <div className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-forge-neon-blue/10 blur-[100px]" />

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        >
                            <h1 className="sr-only">FORGELAB DIGITAL</h1>

                            <div className="mb-8 inline-flex items-center gap-2 rounded-lg border border-forge-neon-blue/30 bg-[#0A1933]/60 backdrop-blur-md px-6 py-2 text-xs font-bold uppercase tracking-widest text-forge-neon-blue shadow-[0_0_15px_rgba(0,255,255,0.15)]">
                                <Terminal size={14} /> <span>System Online // Forging Legacies</span>
                            </div>

                            <p className="mx-auto mb-10 max-w-3xl text-xl font-medium text-forge-highlight leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                The laboratory where high-performance systems and market-dominating
                                digital identities are hammered into reality.
                            </p>

                            <div className="flex justify-center gap-6">
                                <button className="cyber-button px-12 py-4 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                                    Initiate Uplink
                                </button>
                                <button className="cyber-button orange px-12 py-4">
                                    View Protocol
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="mx-auto max-w-7xl px-6 py-32 z-10 relative">
                    <div className="absolute inset-0 grid-overlay opacity-30" />
                    <div className="relative z-10">
                        <div className="mb-20 grid items-end gap-8 md:grid-cols-2">
                            <div>
                                <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-forge-neon-blue">The Forge</h2>
                                <h3 className="font-sora text-4xl font-bold md:text-5xl text-white">Professional Mastery.</h3>
                            </div>
                            <p className="text-lg text-forge-highlight/80 leading-relaxed">
                                We don't provide services; we install capabilities. Each area of expertise is a precision tool designed to maximize your digital leverage.
                            </p>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2">
                            {services.map((service, idx) => (
                                <ServiceCard key={idx} {...service} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ecosystem Section */}
                <section id="ecosystem" className="relative bg-[#050B14] py-32 border-y border-forge-neon-blue/10">
                    <div className="absolute left-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-forge-neon-orange/5 blur-[120px]" />
                    <div className="mx-auto max-w-7xl px-6 relative z-10">
                        <div className="mb-16 text-center">
                            <h2 className="mb-3 font-sora text-4xl font-bold text-white">Global Brand Network</h2>
                            <p className="text-forge-highlight/70">Current nodes active in the international market.</p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-3">
                            {brands.map((brand, idx) => (
                                <BrandCard key={idx} {...brand} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section id="process" className="mx-auto max-w-7xl px-6 py-40 relative">
                    <div className="absolute right-0 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-forge-neon-blue/5 blur-[150px]" />
                    <div className="relative">
                        <div className="mb-24 text-center">
                            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-forge-neon-orange">The Protocol</h2>
                            <h3 className="font-sora text-4xl font-bold md:text-5xl text-white">Engineered for Dominance.</h3>
                        </div>

                        <div className="grid gap-12 md:grid-cols-4">
                            {[
                                { step: "01", name: "Analysis", text: "Identifying core potential in the raw digital landscape." },
                                { step: "02", name: "Synthesis", text: "Fusing technical strategy with creative vision." },
                                { step: "03", name: "Execution", text: "High-intensity development and intelligent execution." },
                                { step: "04", name: "Ascension", text: "Deploying finished assets into the global market." }
                            ].map((p, idx) => (
                                <div key={idx} className="relative group">
                                    <div className="mb-6 text-6xl font-black text-forge-neon-blue/10 font-sora leading-none transition-colors group-hover:text-forge-neon-blue/30">{p.step}</div>
                                    <h4 className="mb-3 text-xl font-bold text-forge-neon-blue group-hover:neon-text-blue">{p.name}</h4>
                                    <p className="text-forge-highlight/70">{p.text}</p>
                                    {idx < 3 && <ChevronRight className="absolute -right-6 top-12 hidden text-forge-neon-blue/20 md:block" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Quote */}
                <section className="relative overflow-hidden border-y border-forge-neon-blue/10 py-40">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.05)_0%,rgba(10,25,51,0)_70%)]" />
                    <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
                        <motion.blockquote
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="font-sora text-4xl font-medium italic text-white/95 leading-snug md:text-6xl"
                        >
                            "We don't just build products; we forge digital <span className="neon-text-orange not-italic">legacies</span> that dominate the global framework."
                        </motion.blockquote>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-forge-neon-blue/20 bg-[#050B14] py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                        <div className="text-center md:text-left">
                            <div className="mb-2 font-sora text-xl font-bold uppercase tracking-widest leading-none">
                                FORGELAB <span className="neon-text-blue">DIGITAL</span>
                            </div>
                            <p className="text-sm text-forge-highlight/60 mt-3">Professional Digital Alchemy for a Cybernetic World.</p>
                        </div>
                        <div className="flex gap-16 text-sm font-medium text-forge-highlight/70">
                            <div>
                                <h5 className="mb-5 text-white font-bold uppercase tracking-wider text-xs">Lab</h5>
                                <ul className="space-y-3">
                                    <li><a href="#" className="hover:neon-text-blue hover:text-forge-neon-blue transition-colors">Portfolio</a></li>
                                    <li><a href="#" className="hover:neon-text-blue hover:text-forge-neon-blue transition-colors">Internal Tools</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="mb-5 text-white font-bold uppercase tracking-wider text-xs">Market</h5>
                                <ul className="space-y-3">
                                    <li><a href="#" className="hover:neon-text-orange hover:text-forge-neon-orange transition-colors">Partnerships</a></li>
                                    <li><a href="#" className="hover:neon-text-orange hover:text-forge-neon-orange transition-colors">Consultancy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 border-t border-forge-neon-blue/10 pt-8 text-center text-xs text-forge-highlight/40">
                        © 2026 Forgelab Digital. Hand-forged for the Global Market. // System Intact.
                    </div>
                </div>
            </footer>
        </div>
    );
}
