import { Button } from '../ui/button'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section className="container relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden text-center sm:px-10 lg:px-20">
      {/* Shadow Left */}
      <div className="shadow-left" />

      <div className="relative z-10 space-y-8">
        {/* Heading */}
        <motion.main
          className="text-5xl font-bold md:text-6xl"
          initial={{ opacity: 0, y: -40, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">Smarter Systems.</span> Stronger Growth.
          </h1>{' '}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">AI-Driven</span> for the Future.
          </h2>
        </motion.main>

        {/* Paragraph */}
        <motion.p
          className="mx-auto text-xl text-muted-foreground md:w-10/12"
          initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          Transform the way your organization operates using OCPNex professional ERP systems, CRM solutions, software engineering services, and reliable implementation support. Unlock insights with
          Big Data and Artificial Intelligence to streamline processes, expand scalability, and spark innovation across your enterprise.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
        >
          <Button className="w-full md:w-1/3">Get Started</Button>
        </motion.div>
      </div>

      {/* Shadow Right */}
      <div className="shadow-right" />
    </section>
  )
}
