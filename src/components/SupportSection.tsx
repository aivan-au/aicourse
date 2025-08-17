export const SupportSection = () => {
  return (
    <section className="py-16 px-4 pb-24 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Your support matters</h2>
        
        <div className="support-prose">
          <p className="mb-4">
            Throughout my career at publicly funded universities, I believed in making research and educational resources openly available as a form of public service. See, for example, my <a href="https://aivan.au" className="text-primary hover:underline">open materials</a> on using GenAI in Research. I want to continue this mission of open education, but creating quality learning materials requires investment in digital tools and platforms, making this venture financially unsustainable.
          </p>
          
          <p className="mb-8">
            Your support would help the next generation of doctoral researchers use AI tools effectively and ethically.
          </p>
        </div>
        
        <div className="mt-12 flex justify-center">
          <a 
            href="https://www.buymeacoffee.com/aivanau"
            className="inline-flex items-center gap-2 bg-[#bc4749] hover:bg-[#a63f41] text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <span className="text-lg">🤍</span>
            Support the course
          </a>
        </div>
      </div>
    </section>
  );
};