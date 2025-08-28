const yuveenaPhoto = "/images/c61d9634-2a1e-452b-9423-911065b5028f.png";
const bernardoPhoto = "/images/92acadea-0c34-4e8e-babc-7aa1b7f92857.png";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Yuveena Gopalan",
      title: "PhD Candidate (Learning Analytics)",
      photo: yuveenaPhoto,
      text: "I found the course incredibly insightful, it not only presented examples grounded in relevant literature but also explored the inner workings of Generative AI in a way that made complex ideas easy to follow. What really stood out to me were the practical demonstrations. Seeing examples on utilising synthetic samples and digital clones gave me an understanding into potential applications and ways in which it could be applied in my own work."
    },
    {
      name: "Bernardo Mendonca Severiano", 
      title: "PhD Candidate (Institute for Sustainable Futures)",
      photo: bernardoPhoto,
      text: "Ivan brings a great blend of technical depth and accessible communication to the topic of Generative AI. His sessions sparked engaging discussions across disciplines and helped us reflect critically on both the opportunities and limitations of these tools in academic contexts. Ivan's insights were both intellectually rigorous and action-oriented. A valuable contribution to our institution's thinking on emerging technologies and sustainable futures."
    }
  ];

  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Trusted by 250+ PhD students and early-career researchers</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The first three editions of the course were offered as non-compulsory, not-for-credit modules at University of Technology Sydney and attracted more than 250 participants.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.photo} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-title">{testimonial.title}</p>
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