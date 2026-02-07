'use client';

import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
    >
      <div className="mb-6 text-accent">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
