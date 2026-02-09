const skills = [
  { name: "Wix Studio", icon: "W", color: "bg-gradient-to-br from-blue-100 to-indigo-100" },
  { name: "Figma", icon: "𝔽", color: "bg-gradient-to-br from-pink-100 to-purple-100" },
  { name: "Canva", icon: "C", color: "bg-gradient-to-br from-cyan-100 to-teal-100" },
  { name: "Gemini AI Studio", icon: "✦", color: "bg-gradient-to-br from-violet-200 to-violet-100" },
  { name: "Prototyping", icon: "◇", color: "bg-gradient-to-br from-orange-200 to-orange-100" },
  { name: "Responsive UI", icon: "⚏", color: "bg-gradient-to-br from-green-200 to-green-100" },
];

const Skills = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="section-label mb-3 block">Skills</span>
          <h2 className="section-title max-w-md">
            Exploring My Diverse Skill Set
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-3 p-4 md:p-6 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 ${skill.color} rounded-xl flex items-center justify-center font-bold text-lg md:text-xl text-foreground/80 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <span className="text-xs md:text-sm font-medium text-muted-foreground text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-10 text-center text-muted-foreground max-w-xl mx-auto">
          I blend creative thinking with strategic design to craft experiences that both delight users and solve real problems.
        </p>
      </div>
    </section>
  );
};

export default Skills;
