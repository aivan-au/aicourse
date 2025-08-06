const yuveenaPhoto = "/lovable-uploads/c61d9634-2a1e-452b-9423-911065b5028f.png";
const bernardoPhoto = "/lovable-uploads/92acadea-0c34-4e8e-babc-7aa1b7f92857.png";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Yuveena Gopalan",
      title: "PhD Candidate (Learning Analytics)",
      photo: yuveenaPhoto,
      text: "This course provided invaluable insights into research methodologies and practical skills that have transformed my approach to academic writing. The structured approach and clear guidance made complex concepts accessible and actionable."
    },
    {
      name: "Bernardo Mendonca Severiano", 
      title: "PhD Candidate (Sustainable Futures)",
      photo: bernardoPhoto,
      text: "An exceptional course that bridges the gap between theoretical knowledge and practical application. The tools and techniques learned here have significantly improved my research productivity and academic output quality."
    }
  ];

  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Trusted by 200+ PhD students and early-career researchers</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The first three editions of the course were offered as non-compulsory, not-for-credit modules at University of Technology Sydney and attracted more than 200 participants.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.photo} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};