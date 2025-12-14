import React from 'react';
import '../marker.css';
import { Link } from 'react-router-dom';
import Chip from './Chip';
import { FiGithub, FiTwitter, FiLinkedin, FiCode, FiCpu, FiGlobe, FiBriefcase, FiMapPin } from 'react-icons/fi';
import { posts } from '../data/posts';

const Home = () => {
    return (
        <div className="container mx-auto px-4 max-w-3xl pb-20">
            {/* SVG Filter for Marker Effect */}
            <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true" focusable="false">
                <defs>
                    <filter id="marker-shape">
                        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                </defs>
            </svg>

            {/* Minimal Content Navigation */}
            <nav className="hidden xl:block fixed left-12 top-1/2 -translate-y-1/2 space-y-6">
                <div className="flex flex-col gap-4 border-l border-gray-800 py-2 pl-4">
                    <a href="#intro" className="text-xs font-medium text-gray-500 hover:text-white transition-colors uppercase tracking-wider">Intro</a>
                    <a href="#blog" className="text-xs font-medium text-gray-500 hover:text-white transition-colors uppercase tracking-wider">Writing</a>
                </div>
            </nav>

            <header id="intro" className="mb-16">
                <h1 className="text-4xl font-medium text-white mb-8">
                    <span className="realistic-marker-highlight">Hey, I'm Jamahl</span>
                </h1>

                <div className="prose prose-invert prose-lg text-gray-400 leading-relaxed">
                    <p className="mb-6">
                        I've been building & growing startups for the past decade. I'm an AI-native generalist that loves to work with smart people on complex problems.
                        I like to tinker and play around with things, my github has most projects but some fun ones were <Chip icon="📹" text="vidviso.com" href="https://vidviso.com" />, <Chip icon="🚀" text="oldvids.online" href="https://oldvids.online" /> and <Chip icon="🛠️" text="Fraya - an AI Secretary" href="https://github.com/Jamahl/crewai-zapiermcp-test" />.
                    </p>

                    <p className="mb-6">
                        I have a broad interest across a lot of things.
                        What I'm currently into: <span className="text-white">AI agents</span> and <span className="text-white">diamonds</span>.
                    </p>

                    <p className="mb-6">
                        I've worked at <Chip logo="https://img.logo.dev/weareuncapped.com?token=pk_IVjahwUCRfO8DhFMmwsZRg" text="Uncapped" href="https://weareuncapped.com" tooltip="Series A 125m+ raised B2B lender" />, <Chip logo="https://img.logo.dev/proofs.io?token=pk_IVjahwUCRfO8DhFMmwsZRg" text="Proofs" href="https://proofs.io" tooltip="AI Agent for Software Engineering" />, and <Chip logo="https://img.logo.dev/seedcamp.com?token=pk_IVjahwUCRfO8DhFMmwsZRg" text="Seedcamp" href="https://seedcamp.com" tooltip="Tier 1 EU VC Fund" />.
                    </p>

                    <p>
                        I also started a couple of companies <Chip logo="https://img.logo.dev/sociimoney.com?token=pk_IVjahwUCRfO8DhFMmwsZRg" text="Socii Money" href="https://web.archive.org/web/20230314075903/https://www.sociimoney.com/" tooltip="Multiplayer finance app for couples" /> and <Chip logo="https://web.archive.org/web/20201118121949im_/https://uploads-ssl.webflow.com/5e834a2d2fb731430fabeaa6/5e8b5ef6b52eaa70ec8e345a_favicon2%402x.png" text="The Network" href="https://web.archive.org/web/20201118121949/https://hq.the-network.io/" tooltip="SaaS Operating System for VC/PE industry to manage post-investment support" />.
                    </p>
                </div>
            </header>

            <section id="blog" className="mb-16">
                <div className="flex items-baseline justify-between mb-6">
                    <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Writing</h2>
                </div>

                <div className="space-y-8">
                    {posts.map(post => (
                        <Link key={post.id} to={`/blog/${post.id}`} className="block group">
                            <article>
                                <div className="flex items-baseline justify-between mb-2">
                                    <h3 className="text-xl font-medium text-gray-200 group-hover:text-white transition-colors">
                                        {post.title}
                                    </h3>
                                    <time className="text-sm text-gray-600 font-mono">{post.date}</time>
                                </div>
                                <p className="text-gray-500 leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>


        </div>
    );
};

const CompanyCard = ({ name, logo, url }) => (
    <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="bg-[#111] hover:bg-[#161616] border border-[#222] rounded-lg p-3 flex items-center gap-2 transition-colors cursor-pointer group"
    >
        <div className="w-6 h-6 flex items-center justify-center">
            <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" />
        </div>
        <span className="text-sm text-gray-300 font-medium group-hover:text-white">{name}</span>
    </a>
);

export default Home;
