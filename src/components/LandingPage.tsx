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
                <section className="relative flex min-h-[100svh] flex-col items-center justify-end overflow-hidden bg-background pb-24 pt-32">

                    {/* The Full Background Logo - Blended seamlessly */}
                    <div className="absolute inset-0 z-0 bg-[#020202]">
                        <Image
                            src="/logo.png"
                            alt="Forgelab Digital"
                            fill
                            priority
                            className="object-cover object-center opacity-90"
                        />
                        {/* Heavy vignette to blend edges into the background */}
                        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, #020202 85%)' }} />
                        {/* Bottom fade for readability and seamless transition */}
                        <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-background via-background/80 to-transparent" />
                        {/* Top fade for nav */}
                        <div className="absolute top-0 h-32 w-full bg-gradient-to-b from-background to-transparent" />
                    </div>

                    {/* Subtitle & CTAs (Overlaid at the bottom) */}
                    <div className="relative z-20 mx-auto max-w-7xl px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        >
                            {/* Screen reader only H1 for SEO, since the logo image has the text */}
                            <h1 className="sr-only">FORGELAB DIGITAL</h1>

                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-forge-gold/20 bg-black/40 backdrop-blur-md px-6 py-2 text-xs font-bold uppercase tracking-widest text-forge-gold">
                                <Sparkles size={14} /> <span>Forging Digital Legacies</span>
                            </div>

                            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 leading-relaxed drop-shadow-lg">
                                The laboratory where high-performance systems and market-dominating
                                identities are hammered into reality.
                            </p>

                            <div className="flex justify-center gap-6">
                                <button className="rounded-sm bg-forge-gold px-12 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-forge-gold-dim active:scale-95 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                                    Enter the Lab
                                </button>
                            </div>
                        </motion.div>
                    </div>
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
