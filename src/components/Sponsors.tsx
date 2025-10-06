import { Radar } from "lucide-react";
import { motion } from "framer-motion";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  { icon: <Radar size={34} />, name: "Sponsor 1" },
  { icon: <Radar size={34} />, name: "Sponsor 2" },
  { icon: <Radar size={34} />, name: "Sponsor 3" },
  { icon: <Radar size={34} />, name: "Sponsor 4" },
  { icon: <Radar size={34} />, name: "Sponsor 5" },
  { icon: <Radar size={34} />, name: "Sponsor 6" },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container sm:py-12 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["-100%", "0%"] }} // geser dari kiri ke kanan
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // atur speed
            ease: "linear",
          }}
        >
          {/* Gandakan list supaya seamless */}
          {[...sponsors, ...sponsors].map(({ icon, name }, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 min-w-[180px] text-muted-foreground/80"
            >
              <span>{icon}</span>
              <h3 className="text-xl font-bold">{name}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
