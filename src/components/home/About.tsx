import { Statistics } from '@/components/Statistics'
import pilot from '@/assets/pilot.png'
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <motion.div
        className="py-12 border rounded-lg bg-muted/50"
        initial={{ opacity: 0, filter: 'blur(12px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12">
          {/* Gambar Pilot */}
          <motion.img
            src={pilot}
            alt="Pilot"
            className="w-[300px] object-contain rounded-lg"
            initial={{ opacity: 0, x: -50, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />

          {/* Konten Text + Statistics */}
          <motion.div
            className="flex flex-col justify-between bg-green-0"
            initial={{ opacity: 0, x: 50, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="pb-6">
              <motion.h2
                className="text-3xl font-bold md:text-4xl"
                initial={{ opacity: 0, y: -20, filter: 'blur(12px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">About </span>
                Company
              </motion.h2>

              <motion.p
                className="mt-4 text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              >
                OCP Nexspace is a forward-thinking software house dedicated to crafting innovative digital solutions that empower businesses to scale efficiently. Our team of experienced developers,
                designers, and strategists delivers end-to-end services — from custom web applications and mobile platforms to enterprise-grade systems. We combine cutting-edge technology, clean
                design, and agile methodology to bring your digital vision to life with precision and performance.
              </motion.p>
            </div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            >
              <Statistics />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
