const skills = [
  { name: "Figma", icon: "𝔽", color: "bg-gradient-to-br from-pink-100 to-purple-100" },
  { name: "Xd", icon: "Xd", color: "bg-gradient-to-br from-pink-200 to-pink-100" },
  { name: "Ae effects", icon: "Ae", color: "bg-gradient-to-br from-violet-200 to-violet-100" },
  { name: "Photoshop", icon: "Ps", color: "bg-gradient-to-br from-blue-200 to-blue-100" },
  { name: "html5", icon: "< >", color: "bg-gradient-to-br from-orange-200 to-orange-100" },
  { name: "Css3", icon: "{ }", color: "bg-gradient-to-br from-blue-300 to-blue-100" },
];

const Skills = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
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
      </div>
    </section>
  );
};

export default Skills;
