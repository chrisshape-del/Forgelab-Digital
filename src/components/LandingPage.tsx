"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hammer, Sparkles, Binary, Zap, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const BrandCard = ({ title, description, link, icon: Icon, glowColor }: any) => (
    <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        className="group relative overflow-hidden rounded-2xl border border-white/5 bg-forge-deep p-8 transition-all hover:bg-forge-glow"
    >
        <div className={cn("absolute -right-4 -top-4 h-32 w-32 rounded-full opacity-10 blur-3xl transition-opacity group-hover:opacity-20", glowColor)} />
        <div className="relative z-10">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-forge-orange">
                <Icon size={24} />
            </div>
            <h3 className="mb-2 text-xl font-bold font-sora">{title}</h3>
            <p className="mb-6 text-sm text-gray-400 leading-relaxed">{description}</p>
            <a
                href={link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-forge-orange transition-all hover:gap-3"
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
            description: "Our signature platform for digital craftsmanship and innovation. The first major forge project.",
            link: "https://forgr.nl",
            icon: Binary,
            glowColor: "bg-blue-500",
        },
        {
            title: "Forgeflow",
            description: "Next-gen content multiplication and AI workflow automation. Scaling creativity at speed.",
            link: "#",
            icon: Zap,
            glowColor: "bg-forge-orange",
        },
        {
            title: "The Crucible",
            description: "Where experimental technologies are tested and refined before joining the laboratory ecosystem.",
            link: "#",
            icon: Sparkles,
            glowColor: "bg-purple-500",
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-forge-orange/30">
            {/* Navigation placeholder */}
            <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                    <div className="flex items-center gap-2 font-sora text-xl font-bold tracking-tighter">
                        <div className="h-6 w-6 rounded bg-forge-orange" />
                        FORGELAB<span className="text-forge-orange">DIGITAL</span>
                    </div>
                </div>
            </nav>

            <main className="relative pt-32 pb-20">
                {/* Background Gradients */}
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute left-1/2 top-0 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-forge-orange/5 blur-[120px]" />
                </div>

                {/* Hero Section */}
                <section className="mx-auto max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-forge-orange/20 bg-forge-orange/5 px-4 py-1.5 text-sm font-medium text-forge-orange">
                            <Hammer size={16} /> <span>Forging the Digital Future</span>
                        </div>
                        <h1 className="mx-auto mb-8 max-w-4xl font-sora text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                            Elevating Brands through <br />
                            <span className="forge-text-glow bg-gradient-to-r from-forge-orange to-orange-400 bg-clip-text text-transparent">
                                Digital Alchemy
                            </span>
                        </h1>
                        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-400">
                            Forgelab Digital is the mother agency of a growing ecosystem of specialized brands.
                            We refine raw data and creative vision into high-performance digital masters.
                        </p>
                    </motion.div>
                </section>

                {/* Brand Grid */}
                <section className="mt-24 mx-auto max-w-7xl px-6">
                    <div className="mb-12 flex items-end justify-between">
                        <div>
                            <h2 className="mb-2 text-3xl font-bold font-sora">The Ecosystem</h2>
                            <p className="text-gray-400">Current active forgings and upcoming developments.</p>
                        </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {brands.map((brand, idx) => (
                            <BrandCard key={idx} {...brand} />
                        ))}
                    </div>
                </section>

                {/* Vision Statement */}
                <section className="mt-40 border-y border-white/5 bg-forge-deep/30 py-24">
                    <div className="mx-auto max-w-5xl px-6 text-center">
                        <blockquote className="font-sora text-3xl font-medium italic text-white/90 leading-relaxed md:text-4xl">
                            "We don't just build websites; we forge identities that endure the heat of competition."
                        </blockquote>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 py-12">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <div className="mb-4 font-sora font-bold">FORGELAB DIGITAL</div>
                    <p className="text-sm text-gray-500">© 2026 Crafted in the Lab. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
