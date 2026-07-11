export default function About() {
  return (
    <section id="historia" className="relative py-24 md:py-32 bg-background-100">
      <div className="mx-auto max-w-7xl px-4 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-lg overflow-hidden aspect-[4/5] bg-background-200">
            <img
              src="https://readdy.ai/api/search-image?query=Cozy%20warm%20tropical%20ice%20cream%20shop%20interior%20with%20wooden%20counter%2C%20colorful%20mantecados%20and%20fresh%20fruit%20display%2C%20soft%20natural%20lighting%20through%20window%2C%20warm%20coral%20and%20cream%20tones%20with%20green%20plant%20accents%2C%20family%20run%20small%20business%20atmosphere%2C%20editorial%20photography%20with%20subtle%20film%20grain%2C%20inviting%20and%20nostalgic%20mood%2C%20artisanal%20details%20visible&width=900&height=1100&seq=about-coquitos-shop-02&orientation=portrait"
              alt="Interior de la heladería Coquitos"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="hidden md:block absolute -bottom-8 -right-6 w-52 rotate-3 rounded-lg bg-background-50 p-5 border border-background-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center text-background-50">
                <i className="ri-award-fill"></i>
              </div>
              <div>
                <p className="font-heading text-lg leading-none text-foreground-950">Familia</p>
                <p className="text-xs text-foreground-600">desde hace 3 generaciones</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-foreground-700 italic">
              "Te hacen sentir en familia y a gusto." — Carmen R.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-xs tracking-[0.35em] uppercase text-primary-600 font-semibold">
            Nuestra Historia
          </p>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl lg:text-6xl text-foreground-950 leading-[1.05]">
            Un pedacito de <em className="font-script text-primary-500 not-italic">Puerto Rico</em>
            <br /> en cada cucharada.
          </h2>
          <p className="mt-8 text-foreground-700 text-base md:text-lg leading-relaxed max-w-xl">
            Coquitos Ice Cream nació de la pasión por compartir los sabores tropicales
            de la isla. En nuestra pequeña tienda en Kissimmee Square preparamos cada
            mantecado, limber y piragua con la misma receta artesanal que ha pasado
            de generación en generación. Cada visitante es tratado como familia — y
            cada helado, hecho con cariño.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 md:gap-12 max-w-lg">
            <div>
              <p className="font-heading text-5xl md:text-6xl text-foreground-950">4.6<span className="text-primary-500">★</span></p>
              <p className="mt-2 text-sm text-foreground-600">Rating promedio en Google</p>
            </div>
            <div>
              <p className="font-heading text-5xl md:text-6xl text-foreground-950">273<sup className="text-primary-500 text-2xl">+</sup></p>
              <p className="mt-2 text-sm text-foreground-600">Reseñas de clientes felices</p>
            </div>
            <div>
              <p className="font-heading text-5xl md:text-6xl text-foreground-950">35<span className="text-primary-500">+</span></p>
              <p className="mt-2 text-sm text-foreground-600">Sabores tropicales únicos</p>
            </div>
            <div>
              <p className="font-heading text-5xl md:text-6xl text-foreground-950">100%</p>
              <p className="mt-2 text-sm text-foreground-600">Recetas artesanales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}