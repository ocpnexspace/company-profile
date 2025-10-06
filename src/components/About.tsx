import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <motion.div
        className="bg-muted/50 border rounded-lg py-12"
        initial={{ opacity: 0, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }} // lebih cepat
      >
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          {/* Gambar Pilot */}
          <motion.img
            src={pilot}
            alt="Pilot"
            className="w-[300px] object-contain rounded-lg"
            initial={{ opacity: 0, x: -50, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Konten Text + Statistics */}
          <motion.div
            className="bg-green-0 flex flex-col justify-between"
            initial={{ opacity: 0, x: 50, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="pb-6">
              <motion.h2
                className="text-3xl md:text-4xl font-bold"
                initial={{ opacity: 0, y: -20, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </motion.h2>

              <motion.p
                className="text-xl text-muted-foreground mt-4"
                initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </motion.p>
            </div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <Statistics />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
