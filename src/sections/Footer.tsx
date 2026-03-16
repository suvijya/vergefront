export default function Footer({
    onSpeakersClick,
    onNavigate
}: {
    onSpeakersClick?: () => void;
    onNavigate?: (href: string) => void;
}) {
    return (
        <footer id="contact" className="relative bg-[#020202] text-white pt-8 md:pt-12 pb-8 overflow-hidden flex flex-col justify-between font-mono border-t border-white/5">
            <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 xl:px-24 flex flex-col md:flex-row justify-between gap-12 items-start md:items-center">
                {/* Left Side - Title, Contact, Socials */}
                <div className="flex flex-col gap-6 md:w-auto items-start">
                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        VERGE 2026.
                    </h2>

                    {/* Contact Details */}
                    <div className="flex flex-col gap-3">
                        <a href="mailto:verge@srmuniversity.ac.in" className="text-[11px] md:text-[12px] tracking-wider text-white/70 hover:text-white transition-colors flex items-center gap-3 font-mono w-fit">
                            <svg className="w-4 h-4 text-white/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>verge@srmuniversity.ac.in</span>
                        </a>

                        <a href="tel:+919797240270" className="text-[11px] md:text-[12px] tracking-wider text-white/70 hover:text-white transition-colors flex items-start gap-3 font-mono w-fit">
                            <svg className="w-4 h-4 text-white/50 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <div className="flex flex-col gap-0.5">
                                <span>+91 9797240270</span>
                                <span>+91 7542052390</span>
                            </div>
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4 items-center">
                        <a href="https://www.linkedin.com/company/verge-srmuh/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors inline-block">
                            <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/verge.srmuh/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors inline-block">
                            <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Center - Quick Links & Contact columns */}
                <div className="flex flex-row gap-16 md:gap-24 items-start mx-auto w-full justify-center">
                    {/* Column 1 - Quick Links */}
                    <div className="flex flex-col gap-4">
                        <span className="text-[9px] text-white/40 font-semibold tracking-widest uppercase mb-1">
                            QUICK LINKS
                        </span>
                        {['EVENTS', 'SCHEDULE', 'SPEAKERS'].map((item) => {
                            const handleClick = (e: React.MouseEvent) => {
                                if (item === 'SPEAKERS' && onSpeakersClick) {
                                    e.preventDefault();
                                    onSpeakersClick();
                                } else if (onNavigate) {
                                    e.preventDefault();
                                    onNavigate(`#${item.toLowerCase().replace(' ', '-')}`);
                                }
                            };
                            return (
                                <a key={item} href={item === 'SPEAKERS' ? '/speakers' : `#${item.toLowerCase().replace(' ', '-')}`} onClick={handleClick} className="text-[11px] text-white/90 hover:text-white uppercase tracking-widest transition-colors font-medium">
                                    {item}
                                </a>
                            );
                        })}
                    </div>

                    {/* Column 2 - Contact */}
                    <div className="flex flex-col gap-4">
                        <span className="text-[9px] text-white/40 font-semibold tracking-widest uppercase mb-1">
                            CONTACT
                        </span>
                        {['EMAIL US', 'MAPS'].map((item) => {
                            const handleClick = (e: React.MouseEvent) => {
                                if (item === 'EMAIL US' || item === 'MAPS') {
                                    // Handle natively with href
                                } else if (onNavigate) {
                                    e.preventDefault();
                                    onNavigate(`#${item.toLowerCase().replace(' ', '-')}`);
                                }
                            };

                            let href = `#${item.toLowerCase().replace(' ', '-')}`;
                            let target: string | undefined = undefined;
                            let rel: string | undefined = undefined;

                            if (item === 'EMAIL US') {
                                href = "mailto:verge@srmuniversity.ac.in";
                            } else if (item === 'MAPS') {
                                href = "https://maps.google.com/maps?q=SRM%20University%20Sonipat%20Haryana";
                                target = "_blank";
                                rel = "noopener noreferrer";
                            }

                            return (
                                <a key={item} href={href} target={target} rel={rel} onClick={handleClick} className="text-[11px] text-white/90 hover:text-white uppercase tracking-widest transition-colors font-medium">
                                    {item}
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Right Side - Map */}
                <div className="flex flex-col items-center md:items-end w-full md:w-auto">
                    <a
                        href="https://maps.google.com/maps?q=SRM%20University%20Sonipat%20Haryana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center md:items-end gap-2 w-full max-w-[240px] group cursor-pointer"
                    >
                        <span className="text-[9px] text-white/40 font-semibold tracking-widest uppercase text-center md:text-right group-hover:text-white transition-colors duration-300">
                            SRM University Delhi NCR, Sonepat
                        </span>
                        <div className="w-full h-[70px] overflow-hidden rounded opacity-80 group-hover:opacity-100 transition-opacity duration-500 relative">
                            <div className="absolute inset-0 z-10 w-full h-full"></div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.427772675975!2d77.11494857630712!3d28.885614975526834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0b0b8c000001%3A0xc39116c4ea68579d!2sSRM%20University%20Delhi-NCR%2C%20Sonepat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1739180735391!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="invert grayscale contrast-125 group-hover:invert-0 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 pointer-events-none"
                            ></iframe>
                        </div>
                    </a>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 xl:px-24 border-t border-white/[0.05] mt-6 pt-5">
                <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-3">
                    {/* Copyright & Maker */}
                    <div className="text-[10px] tracking-[0.1em] text-white/50 font-mono flex flex-col items-center justify-center text-center gap-1.5 mt-1">
                        <span className="uppercase">© 2026 VERGE TECHFEST.</span>
                        <a href="https://www.linkedin.com/in/suvijya-arya-564404325/" target="_blank" rel="noopener noreferrer" className="normal-case tracking-normal opacity-90 text-[12px] hover:text-white transition-colors">
                            Made with ❤️ by Suvijya Arya
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
