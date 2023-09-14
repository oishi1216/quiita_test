import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

export const Home = () => {
    const controls = useAnimationControls();
    const textAnimation = {
        init: {
            color: "transparent",
            textShadow: "0 0 100px #333, 0 0 100px #333",
            opacity: 0,
        },
    };

    useEffect(() => {
        controls.start((i) => ({
            textShadow: [
                "0 0 90px #333, 0 0 90px #333",
                "0 0 3px #333, 0 0 3px #333",
                "0 0 0 #333",
            ],
            opacity: [0, 1, 1],
            transition: {
                ease: "linear",
                duration: 3,
                delay: i * 0.1,
            },
        }));
    }, []);

    return(
        <div className="common__container">
            <div className="home">
                <h1>
                    <motion.span
                        custom={0}
                        initial="init"
                        animate={controls}
                        variants={textAnimation}
                    >
                    text1
                    </motion.span>{" "}
                    <motion.span
                        custom={1}
                        initial="init"
                        animate={controls}
                        variants={textAnimation}
                    >
                    text2
                    </motion.span>
                </h1>
                <h2>
                    <motion.span
                        custom={2}
                        initial="init"
                        animate={controls}
                        variants={textAnimation}
                    >
                    text3
                    </motion.span>{" "}
                    <motion.span
                        custom={3}
                        initial="init"
                        animate={controls}
                        variants={textAnimation}
                    >
                    text4
                    </motion.span>
                </h2>
            </div>
        </div>
    )
}