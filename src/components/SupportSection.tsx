export const SupportSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Your support matters</h2>
        
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p className="mb-4">
            Throughout my career at publicly funded universities, I believed in making research and educational resources openly available as a form of public service. See, for example, my <a href="https://aivan.au" className="text-primary hover:underline">open materials</a> on using GenAI in Research. I want to continue this mission of open education, but creating quality learning materials requires investment in digital tools and platforms, making this venture financially unsustainable.
          </p>
          
          <p className="mb-6">
            Your support would help the next generation of doctoral researchers use AI tools effectively and ethically.
          </p>
          
          <div className="mt-8">
            <a href="https://www.buymeacoffee.com/aivanau">
              <img src="https://img.buymeacoffee.com/button-api/?slug=aivanau&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" alt="Buy Me A Coffee" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};