'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  index: number;
}

export default function ProjectCard({ title, description, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all hover:scale-105"
    >
      <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
