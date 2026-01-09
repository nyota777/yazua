import React, { useState } from 'react';
import { Target, Lightbulb, Mountain, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function ProgramsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Leadership', 'Entrepreneurship', 'Outdoor Adventure', 'Project-Based Learning'];

  const programs = [
    {
      name: 'FORGE (Ages 12-14)',
      category: 'Leadership',
      description: 'A flagship 6-month program using physically challenging activities like obstacle courses and rock climbing to build grit, leadership, and identity through Rites of Passage.',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1640951332580-1072ff909952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYWR2ZW50dXJlJTIwY2FtcHxlbnwxfHx8fDE3Njc5NjE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '6 months',
    },
    {
      name: 'BUILD (Ages 18-24)',
      category: 'Entrepreneurship',
      description: 'A 3-month semi-incubation program for older youth focused on innovation, entrepreneurial leadership, and turning ideas into tangible projects and social enterprises.',
      icon: Lightbulb,
      image: 'https://images.unsplash.com/photo-1732539539294-4cc2f38fac9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXJzaGlwJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY3OTYxNDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '3 months',
    },
    {
      name: 'iDecide (Ages 13-15)',
      category: 'Project-Based Learning',
      description: 'A 3-month life coaching program combining online and outdoor activities, emphasizing decision-making skills, mission-setting, and personal development.',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1639432038099-4379f2d421cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3JzaGlwJTIweW91dGh8ZW58MXx8fHwxNzY3OTYxNDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '3 months',
    },
    {
      name: 'ManUp Leadership Adventures',
      category: 'Outdoor Adventure',
      description: 'Short, high-impact 3-5 day excursions involving hiking, camping, and outdoor challenges to inspire responsible leadership and build character.',
      icon: Mountain,
      image: 'https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbGVhZGVyc2hpcCUyMGFjdGl2aXR5fGVufDF8fHx8MTc2Nzk2MTQyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '3-5 days',
    },
    {
      name: 'Mentorship Circle',
      category: 'Leadership',
      description: 'Ongoing mentorship program connecting young men with experienced leaders for one-on-one guidance, support, and personal development.',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1623863568368-69e4cbe6cc0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1lbiUyMGxlYWRlcnNoaXAlMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njc5NjE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: 'Ongoing',
    },
    {
      name: 'Innovation Lab',
      category: 'Project-Based Learning',
      description: 'Hands-on design thinking workshops where young men develop innovative solutions to real-world problems through collaborative projects.',
      icon: Lightbulb,
      image: 'https://images.unsplash.com/photo-1758270705317-3ef6142d306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwY29sbGFib3JhdGlvbiUyMHlvdXRofGVufDF8fHx8MTc2Nzk2MTQyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '4 months',
    },
  ];

  const filteredPrograms =
    activeFilter === 'All'
      ? programs
      : programs.filter((program) => program.category === activeFilter);

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive programs designed to transform boys into confident,
            capable leaders ready to make a positive impact.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {program.duration}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {React.createElement(program.icon, {
                    className: 'w-8 h-8 text-orange-600',
                  })}
                  <span className="text-sm text-orange-600 font-semibold uppercase tracking-wide">
                    {program.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {program.name}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <button className="flex items-center gap-2 text-orange-600 font-semibold hover:gap-4 transition-all duration-300">
                  Learn More <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}