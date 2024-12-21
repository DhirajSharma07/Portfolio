import React from 'react';
import { motion } from 'framer-motion';


function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.6 } },
  };
  return (
    <section className="lg:pt-24 h-[80vh]" id='about'>
      <div className="flex items-center pt-20 justify-center w-full text-center px-1">
        <div className="w-full max-w-lg">
          <motion.h1
            className="text-4xl font-bold uppercase tracking-widest"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            About Me
          </motion.h1>
          <p className="my-8">
            <motion.span
              className="text-xl flex items-center justify-center px-1"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              I'm a Web Developer and a Mechanical Engineer too.
            </motion.span>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center pt-20">
        <div className="container flex flex-col gap-8 lg:gap-32 px-5 justify-between lg:flex-row w-full xl:px-40">
          <div className="lg:w-1/2">
            <motion.h3
              className="text-2xl font-bold"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              Get to know me!
            </motion.h3>

            <motion.p
              className="my-8 leading-6 pr-10"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              I'm a <motion.strong variants={fadeIn} initial="hidden" animate="visible">Frontend Focused Web Developer</motion.strong> building and managing the Front-end of Websites and Web Applications that lead to success. Let's explore my work in the Projects page.
            </motion.p>

            <motion.a

              className="py-3 px-14 rounded-md bg-orange-600 text-white font-bold uppercase tracking-wider text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" href='/#contact'

            >
              contact

            </motion.a>
          </div>

          {/* Second Column */}
          <div className="lg:w-1/2">
            <motion.h3
              className="text-2xl capitalize font-bold"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              My skills
            </motion.h3>

            <div className="flex flex-wrap gap-6 my-8 w-96 text-black">
              <motion.div className="px-3 py-2 bg-slate-300 rounded-md" variants={fadeInUp} initial="hidden" animate="visible">
                JavaScript
              </motion.div>
              <motion.div className="px-3 py-2 bg-slate-300 rounded-md" variants={fadeIn} initial="hidden" animate="visible">
                React
              </motion.div>
              <motion.div className="px-3 py-2 bg-slate-300 rounded-md" variants={fadeInUp} initial="hidden" animate="visible">
                HTML
              </motion.div>
              <motion.div className="px-3 py-2 bg-slate-300 rounded-md" variants={fadeIn} initial="hidden" animate="visible">
                CSS
              </motion.div>
              <motion.div className="px-3 py-2 bg-slate-300 rounded-md" variants={fadeInUp} initial="hidden" animate="visible">
                Tailwind
              </motion.div>
              <motion.div className="px-3 py-2 bg-slate-300 rounded-md" variants={fadeIn} initial="hidden" animate="visible">
                SASS
              </motion.div>
              <motion.div className="px-3 py-2 bg-slate-300 rounded-md" variants={fadeIn} initial="hidden" animate="visible">
                GitHub
              </motion.div>
              <motion.div className="px-3 py-2 bg-slate-300 rounded-md" variants={fadeInUp} initial="hidden" animate="visible">
                MySQL
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default About;
