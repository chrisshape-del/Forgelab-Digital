"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hammer, Sparkles, Binary, Zap, ExternalLink, Cpu, BarChart3, Rocket, Layers, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ServiceCard = ({ title, description, icon: Icon }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-2xl border border-white/5 bg-forge-deep/50 p-8 transition-all hover:bg-forge-glow"
    >
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-forge-gold/5 blur-2xl group-hover:bg-forge-gold/10" />
        <div className="relative z-10">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forge-gold/10 text-forge-gold transition-transform group-hover:scale-110">
                <Icon size={24} />
            </div>
            <h3 className="mb-3 text-2xl font-bold font-sora tracking-tight">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

const BrandCard = ({ title, description, link, icon: Icon, glowColor }: any) => (
    <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        className="group relative overflow-hidden rounded-2xl border border-white/5 bg-forge-deep p-8 transition-all hover:bg-forge-glow"
    >
        <div className={cn("absolute -right-4 -top-4 h-32 w-32 rounded-full opacity-10 blur-3xl transition-opacity group-hover:opacity-25", glowColor)} />
        <div className="relative z-10">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-forge-gold">
                <Icon size={24} />
            </div>
            <h3 className="mb-2 text-xl font-bold font-sora">{title}</h3>
            <p className="mb-6 text-sm text-gray-400 leading-relaxed">{description}</p>
            <a
                href={link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-forge-gold transition-all hover:gap-3"
            >
                Explore Forging <ExternalLink size={14} />
            </a>
        </div>
    </motion.div>
);

export default function LandingPage() {
    const brands = [
        {
            title: "forgr.nl",
            description: "Dedicated platform for custom digital builds and artisanal software engineering.",
            link: "https://forgr.nl",
            icon: Binary,
            glowColor: "bg-blue-500",
        },
        {
            title: "Forgeflow",
            description: "High-velocity AI content multiplication and autonomous marketing workflows.",
            link: "#",
            icon: Zap,
            glowColor: "bg-forge-gold",
        },
        {
            title: "The Crucible",
            description: "R&D laboratory for emerging technologies, experimental AI, and beta products.",
            link: "#",
            icon: Sparkles,
            glowColor: "bg-purple-500",
        },
    ];

    const services = [
        {
            title: "AI & Automation",
            description: "We forge autonomous agents and intelligent workflows that replace manual overhead with professional precision.",
            icon: Cpu,
        },
        {
            title: "Digital Strategy",
            description: "Architecting blueprints for global market dominance through data-driven decisions and lab-tested formulas.",
            icon: BarChart3,
        },
        {
            title: "Product Forging",
            description: "Turning raw concepts into premium digital products with world-class UX and resilient architecture.",
            icon: Rocket,
        },
        {
            title: "Brand Ecosystems",
            description: "Building connected networks of brands that create self-sustaining powerhouses on a global scale.",
            icon: Layers,
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-forge-gold/30">
            {/* Header / Nav */}
            <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                    <div className="flex items-center gap-3 font-sora text-xl font-bold tracking-tighter">
                        <span className="hidden sm:inline">FORGELAB <span className="text-forge-gold">DIGITAL</span></span>
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-gray-400">
                        <a href="#services" className="transition-colors hover:text-forge-gold">Expertise</a>
                        <a href="#ecosystem" className="transition-colors hover:text-forge-gold">Brands</a>
                        <a href="#process" className="transition-colors hover:text-forge-gold">Process</a>
                    </div>
                </div>
            </nav>

            <main className="relative">
                {/* Cinematic Hero Section */}
                <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden metallic-bg pt-20">
                    {/* Spotlights */}
                    <div className="spotlight left" />
                    <div className="spotlight right" />

                    {/* Dark ambient glow */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-forge-gold/5 blur-[150px]" />

                    <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                            {/* Central Logo Integration */}
                            <div className="mb-8 flex justify-center">
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 1.5, delay: 0.3 }}
                                    className="relative h-64 w-64 md:h-96 md:w-96"
                                >
                                    {/* The glow coming FROM the logo */}
                                    <div className="absolute inset-0 rounded-full bg-forge-gold/20 blur-[80px]" />
                                    <Image
                                        src="/logo.png"
                                        alt="Forgelab Digital Logo"
                                        fill
                                        priority
                                        className="relative z-10 object-contain drop-shadow-[0_0_50px_rgba(212,175,55,0.6)]"
                                    />
                                </motion.div>
                            </div>

                            {/* Metallic Brand Name */}
                            <h1 className="mb-6 font-sora text-5xl font-black uppercase tracking-[0.2em] md:text-7xl lg:text-8xl">
                                <span className="chrome-text">FORGELAB DIGITAL</span>
                            </h1>

                            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-400/90 leading-relaxed">
                                The laboratory where high-performance systems and market-dominating
                                identities are hammered into reality.
                            </p>

                            <div className="flex justify-center gap-6">
                                <button className="rounded-sm bg-forge-gold px-10 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-forge-gold-dim active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                    Enter the Lab
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Floor reflection gradient */}
                    <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
                </section>

                {/* Services Section */}
                <section id="services" className="mx-auto max-w-7xl px-6 py-32 z-10 relative bg-background">
                    <div className="mb-20 grid items-end gap-8 md:grid-cols-2">
                        <div>
                            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-forge-gold">The Forge</h2>
                            <h3 className="font-sora text-4xl font-bold md:text-5xl">Professional Mastery.</h3>
                        </div>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            We don't provide services; we install capabilities. Each area of expertise is a precision tool designed to maximize your digital leverage.
                        </p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                        {services.map((service, idx) => (
                            <ServiceCard key={idx} {...service} />
                        ))}
                    </div>
                </section>

                {/* Ecosystem Section */}
                <section id="ecosystem" className="bg-forge-deep/50 py-32 border-y border-white/5">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-16 text-center">
                            <h2 className="mb-3 font-sora text-4xl font-bold">Global Brand Network</h2>
                            <p className="text-gray-400">Current forgings active in the international market.</p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-3">
                            {brands.map((brand, idx) => (
                                <BrandCard key={idx} {...brand} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section id="process" className="mx-auto max-w-7xl px-6 py-40">
                    <div className="relative">
                        <div className="mb-24 text-center">
                            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-forge-gold">The Process</h2>
                            <h3 className="font-sora text-4xl font-bold md:text-5xl">Engineered for Success.</h3>
                        </div>

                        <div className="grid gap-12 md:grid-cols-4">
                            {[
                                { step: "01", name: "Analysis", text: "Identifying core potential in the raw digital landscape." },
                                { step: "02", name: "Synthesis", text: "Fusing technical strategy with creative vision." },
                                { step: "03", name: "The Forge", text: "High-intensity development and intelligent execution." },
                                { step: "04", name: "Ascense", text: "Deploying finished assets into the global market to dominate." }
                            ].map((p, idx) => (
                                <div key={idx} className="relative">
                                    <div className="mb-6 text-6xl font-bold text-white/5 font-sora leading-none">{p.step}</div>
                                    <h4 className="mb-3 text-xl font-bold text-forge-gold">{p.name}</h4>
                                    <p className="text-gray-400">{p.text}</p>
                                    {idx < 3 && <ChevronRight className="absolute -right-6 top-12 hidden text-white/10 md:block" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Quote */}
                <section className="relative overflow-hidden border-y border-white/5 py-40">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forge-gold/[0.03] to-transparent" />
                    <div className="mx-auto max-w-5xl px-6 text-center">
                        <motion.blockquote
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="font-sora text-4xl font-medium italic text-white/95 leading-snug md:text-6xl"
                        >
                            "We don't just build products; we forge digital <span className="text-forge-gold not-italic">legacies</span> that dominate the global market."
                        </motion.blockquote>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                        <div className="text-center md:text-left">
                            <div className="mb-2 font-sora text-xl font-bold uppercase tracking-widest leading-none">
                                FORGELAB <span className="text-forge-gold">DIGITAL</span>
                            </div>
                            <p className="text-sm text-gray-500">Professional Digital Alchemy for a Global World.</p>
                        </div>
                        <div className="flex gap-12 text-sm font-medium text-gray-400">
                            <div>
                                <h5 className="mb-4 text-white">Lab</h5>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-forge-gold">Portfolio</a></li>
                                    <li><a href="#" className="hover:text-forge-gold">Internal Tools</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="mb-4 text-white">Market</h5>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-forge-gold">Partnerships</a></li>
                                    <li><a href="#" className="hover:text-forge-gold">Consultancy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 text-center text-xs text-gray-600">
                        © 2026 Forgelab Digital. Hand-forged for the Global Market.
                    </div>
                </div>
            </footer>
        </div>
    );
}
