'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TextRevealAnimation = () => {
    const textZoomToVideocontainer = useRef<HTMLDivElement>(null);
    const textZoomToVideostickyMask = useRef<HTMLDivElement>(null);
    const textZoomToVideoinitialMaskSize = 0.1;
    const textZoomToVideotargetMaskSize = 0.9;
    const textZoomToVideoeasing = 0.1;
    let textZoomToVideoeasedScrollProgress = 0;

    useEffect(() => {
        requestAnimationFrame(animate);

        // Clean up animation on unmount
        return () => cancelAnimationFrame(animate as any);
    }, []);

    const animate = () => {
        if (!textZoomToVideostickyMask.current || !textZoomToVideocontainer.current) return;

        const maskSizeProgress = textZoomToVideotargetMaskSize * getScrollProgress();
        textZoomToVideostickyMask.current.style.webkitMaskSize = `${(textZoomToVideoinitialMaskSize + maskSizeProgress) * 100}%`;
        requestAnimationFrame(animate);
    };

    const getScrollProgress = () => {
        if (!textZoomToVideostickyMask.current || !textZoomToVideocontainer.current) return 0;

        const scrollProgress =
            textZoomToVideostickyMask.current.offsetTop / (textZoomToVideocontainer.current.getBoundingClientRect().height - window.innerHeight);

        const delta = scrollProgress - textZoomToVideoeasedScrollProgress;
        textZoomToVideoeasedScrollProgress += delta * textZoomToVideoeasing;

        return textZoomToVideoeasedScrollProgress;
    };

    return (
        <>
            {/* Horror-themed overlay before the video section */}
            <div className="h-screen bg-[#080808] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/blood-splatter.png')] opacity-10 mix-blend-multiply"></div>
                <motion.h2
                    className="text-5xl md:text-7xl font-bold text-white z-10 blood-drip"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    ENTER THE <span className="text-[#BB0000]">NIGHTMARE</span>
                </motion.h2>
            </div>

            <div
                ref={textZoomToVideocontainer}
                className="relative h-[300vh] bg-[#080808] [clip-path:polygon(0_4%,100%_0%,100%_100%,0%_100%)] max-sm:[clip-path:polygon(0_1%,100%_0%,100%_100%,0%_100%)]"
            >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#BB0000] to-transparent"></div>

                <div
                    ref={textZoomToVideostickyMask}
                    className="flex overflow-hidden sticky top-0 h-screen items-center justify-center"
                    style={{
                        WebkitMaskImage: "url('/assets/homefifth/EXODIA.svg')",
                        WebkitMaskPosition: "46% center",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskSize: "10%",
                    }}
                >
                    <video autoPlay muted loop className="h-screen w-full object-cover">
                        <source src="/drone/mdi.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#BB0000]/20 to-transparent mix-blend-multiply pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[url('/blood-splatter.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
                </div>
            </div>

        </>
    );
};

// Individual text reveal component for animated text
const TextReveal = ({ className, text }: { className: string, text: string }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"]
    });

    return (
        <motion.div
            ref={ref}
            className={`overflow-hidden ${className}`}
        >
            <motion.p
                style={{
                    opacity: scrollYProgress,
                    transform: useTransform(
                        scrollYProgress,
                        [0, 1],
                        ["translateY(100%)", "translateY(0%)"]
                    ),
                }}
                className="text-center drop-shadow-[0_0_8px_rgba(187,0,0,0.6)]"
            >
                {text}
            </motion.p>
        </motion.div>
    );
};

export default TextRevealAnimation; 