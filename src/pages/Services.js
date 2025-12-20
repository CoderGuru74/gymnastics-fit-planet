import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Activity, Shield, Heart, Target, Clock } from 'lucide-react';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-black py-24 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
            Our <span className="text-gymRed">Elite</span> Services
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-medium">
            Advanced technology meets high-performance coaching. Explore what makes Gymnastics Fit Planet the ultimate fitness destination.
          </p>
        </motion.div>
      </section>

      {/* Main Specialized Machines Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="text-gymRed font-black uppercase tracking-widest text-sm">Signature Equipment</span>
            <h2 className="text-4xl font-black uppercase italic mt-2 mb-6">Advanced Treadmill Suite</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our high-performance treadmills aren't just for running. Every membership includes 20 minutes of daily usage on our precision-calibrated machines, designed for maximum calorie burn and joint protection.
            </p>
            <ul className="space-y-4 font-bold text-sm uppercase italic">
              <li className="flex items-center gap-3 text-black"><Zap size={18} className="text-gymYellow"/> Integrated Heart Rate Tracking</li>
              <li className="flex items-center gap-3 text-black"><Zap size={18} className="text-gymYellow"/> Terrain Simulation Technology</li>
              <li className="flex items-center gap-3 text-black"><Zap size={18} className="text-gymYellow"/> Impact Reduction Deck</li>
            </ul>
          </motion.div>
          <div className="rounded-3xl overflow-hidden shadow-2xl h-96">
            <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069" className="w-full h-full object-cover" alt="Treadmill Service" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse">
          <div className="rounded-3xl overflow-hidden shadow-2xl h-96 order-2 md:order-1">
            <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069" className="w-full h-full object-cover" alt="Vibration Training" />
          </div>
          <motion.div className="order-1 md:order-2" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="text-gymRed font-black uppercase tracking-widest text-sm">Recovery & Growth</span>
            <h2 className="text-4xl font-black uppercase italic mt-2 mb-6">Vibration Lab</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Accelerate muscle recovery and boost bone density with our Vibration Training technology. Included for 20 minutes daily, these machines provide a high-frequency stimulus that engages 95% of muscle fibers.
            </p>
            <ul className="space-y-4 font-bold text-sm uppercase italic">
              <li className="flex items-center gap-3 text-black"><Zap size={18} className="text-gymRed"/> Rapid Muscle Recovery</li>
              <li className="flex items-center gap-3 text-black"><Zap size={18} className="text-gymRed"/> Increased Blood Circulation</li>
              <li className="flex items-center gap-3 text-black"><Zap size={18} className="text-gymRed"/> Enhanced Flexibility Training</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Grid of Additional Services */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase italic italic">More Than Just <span className="text-gymRed">A Gym</span></h2>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: <Activity className="text-gymRed" />, title: "Personal Training", desc: "One-on-one sessions tailored to your metabolic profile and fitness goals." },
              { icon: <Shield className="text-gymRed" />, title: "Injury Rehab", desc: "Guided recovery programs using our low-impact vibration technology." },
              { icon: <Heart className="text-gymRed" />, title: "Cardio Kickboxing", desc: "High-energy group classes designed to shred fat and build endurance." },
              { icon: <Target className="text-gymRed" />, title: "Diet Consulting", desc: "Customized nutrition plans updated monthly by our certified dietitians." },
              { icon: <Clock className="text-gymRed" />, title: "24/7 Support", desc: "Our staff and app-based support are available whenever you need them." },
              { icon: <Zap className="text-gymRed" />, title: "Flexibility Lab", desc: "Advanced stretching tools and assisted therapy to improve range of motion." },
            ].map((service, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:border-gymRed transition-colors duration-300">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-black uppercase italic mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gymRed text-white text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-8">Ready to Start Your Journey?</h2>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-12 py-4 rounded-sm font-black uppercase tracking-widest text-lg shadow-xl"
        >
          Check Subscription Plans
        </motion.button>
      </section>
    </div>
  );
};

export default Services;