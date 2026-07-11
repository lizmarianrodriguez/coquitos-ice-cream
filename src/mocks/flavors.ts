export type Flavor = {
  id: string;
  name: string;
  spanish: string;
  category: 'Tropical' | 'Creamy' | 'Italian Ice' | 'Piragua' | 'Limber' | 'Bebidas';
  description: string;
  price: string;
  image: string;
  popular?: boolean;
};

export const flavors: Flavor[] = [
  {
    id: 'coco',
    name: 'Coconut Ice Cream',
    spanish: 'Coco',
    category: 'Tropical',
    description: 'Cremoso helado hecho con coco fresco rallado, el favorito de la casa.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Artisan%20coconut%20ice%20cream%20scoop%20in%20wooden%20bowl%20with%20fresh%20shredded%20coconut%20and%20half%20coconut%20shell%2C%20warm%20cream%20background%2C%20natural%20soft%20lighting%2C%20editorial%20food%20photography%2C%20minimalist%20tropical%20styling%20with%20subtle%20palm%20leaf%20shadow%2C%20high%20detail%20smooth%20texture%20elegant%20composition&width=900&height=900&seq=flavor-coco-01&orientation=squarish',
    popular: true,
  },
  {
    id: 'parcha',
    name: 'Passion Fruit',
    spanish: 'Parcha',
    category: 'Tropical',
    description: 'Explosión ácida y dulce de parcha caribeña recién cosechada.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Passion%20fruit%20ice%20cream%20scoop%20in%20ceramic%20bowl%20with%20fresh%20halved%20passion%20fruits%20showing%20seeds%2C%20warm%20golden%20cream%20colored%20background%2C%20soft%20natural%20window%20lighting%2C%20editorial%20food%20photography%2C%20tropical%20fruit%20styling%2C%20clean%20minimal%20composition%20with%20subtle%20shadows%20artistic%20details&width=900&height=900&seq=flavor-parcha-02&orientation=squarish',
    popular: true,
  },
  {
    id: 'acerola',
    name: 'Acerola Cherry',
    spanish: 'Acerola',
    category: 'Tropical',
    description: 'Sabor único de cereza acerola, refrescante y con toque tropical.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Red%20acerola%20cherry%20ice%20cream%20scoop%20in%20rustic%20bowl%20with%20fresh%20acerola%20berries%20scattered%20around%2C%20warm%20beige%20background%2C%20soft%20diffused%20natural%20light%2C%20editorial%20tropical%20food%20photography%2C%20artistic%20food%20styling%2C%20minimal%20elegant%20composition%20with%20subtle%20texture%20details&width=900&height=900&seq=flavor-acerola-03&orientation=squarish',
  },
  {
    id: 'guanabana',
    name: 'Soursop Cream',
    spanish: 'Guanábana',
    category: 'Tropical',
    description: 'Cremosa guanábana con notas florales, un lujo tropical.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Creamy%20white%20soursop%20guanabana%20ice%20cream%20scoop%20in%20bowl%20with%20fresh%20soursop%20fruit%20slice%2C%20warm%20beige%20background%2C%20soft%20natural%20lighting%2C%20editorial%20tropical%20food%20photography%2C%20artistic%20minimal%20styling%2C%20elegant%20composition%20detailed%20smooth%20texture%20high%20quality&width=900&height=900&seq=flavor-guanabana-07&orientation=squarish',
  },
  {
    id: 'maiz',
    name: 'Sweet Corn',
    spanish: 'Maiz',
    category: 'Tropical',
    description: 'Dulce sabor a maiz tierno, tradición tropical en cada cucharada.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Sweet%20corn%20ice%20cream%20scoop%20in%20ceramic%20bowl%20with%20fresh%20corn%20kernels%20and%20corn%20cob%20pieces%20nearby%2C%20warm%20cream%20background%2C%20soft%20natural%20lighting%2C%20editorial%20tropical%20food%20photography%2C%20minimalist%20styling%20with%20artistic%20composition%2C%20smooth%20texture%20details%20visible&width=900&height=900&seq=flavor-maiz-10&orientation=squarish',
  },
  {
    id: 'almendra',
    name: 'Almond',
    spanish: 'Almendra',
    category: 'Tropical',
    description: 'Suave y aromática almendra tostada en helado cremoso artesanal.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Creamy%20almond%20ice%20cream%20scoop%20in%20small%20bowl%20with%20whole%20almonds%20scattered%20around%2C%20warm%20beige%20background%2C%20soft%20diffused%20natural%20light%2C%20editorial%20food%20photography%2C%20elegant%20minimal%20composition%2C%20nutty%20artisanal%20texture%20smooth&width=900&height=900&seq=flavor-almendra-11&orientation=squarish',
  },
  {
    id: 'almendra-coco',
    name: 'Almond & Coconut',
    spanish: 'Almendra Con Coco',
    category: 'Tropical',
    description: 'Combinación perfecta de almendra tostada y coco fresco rallado.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Coconut%20almond%20ice%20cream%20scoop%20in%20rustic%20bowl%20with%20shredded%20coconut%20and%20almond%20pieces%20on%20top%2C%20warm%20cream%20background%2C%20soft%20natural%20window%20lighting%2C%20editorial%20tropical%20food%20photography%2C%20artistic%20styling%20detailed%20nutty%20texture&width=900&height=900&seq=flavor-almendra-coco-12&orientation=squarish',
  },
  {
    id: 'tamarindo',
    name: 'Tamarind',
    spanish: 'Tamarindo',
    category: 'Tropical',
    description: 'Agridulce tamarindo tropical, sabor que transporta a la isla.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Tamarind%20tropical%20ice%20cream%20scoop%20in%20bowl%20with%20tamarind%20pods%20and%20fresh%20pulp%20nearby%2C%20warm%20wooden%20surface%20background%2C%20soft%20natural%20light%2C%20latin%20american%20artisanal%20food%20photography%2C%20minimal%20elegant%20composition&width=900&height=900&seq=flavor-tamarindo-13&orientation=squarish',
  },
  {
    id: 'guayaba',
    name: 'Guava',
    spanish: 'Guayaba',
    category: 'Tropical',
    description: 'Dulce y aromática guayaba rosada, fruta tropical en su máxima expresión.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Pink%20guava%20ice%20cream%20scoop%20in%20ceramic%20bowl%20with%20fresh%20halved%20guava%20fruits%20nearby%2C%20warm%20cream%20background%2C%20soft%20diffused%20natural%20lighting%2C%20editorial%20tropical%20food%20photography%2C%20artistic%20minimal%20styling%20smooth%20texture&width=900&height=900&seq=flavor-guayaba-14&orientation=squarish',
  },
  {
    id: 'arroz-dulce',
    name: 'Sweet Rice',
    spanish: 'Arroz Con Dulce',
    category: 'Tropical',
    description: 'Clásico postre navideño puertorriqueño convertido en helado cremoso.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Cinnamon%20rice%20pudding%20ice%20cream%20scoop%20in%20bowl%20with%20cinnamon%20sticks%20and%20rice%20grains%20nearby%2C%20warm%20beige%20background%2C%20soft%20natural%20light%2C%20editorial%20puerto%20rican%20dessert%20photography%2C%20cozy%20artisanal%20styling%20smooth&width=900&height=900&seq=flavor-arroz-15&orientation=squarish',
  },
  {
    id: 'mango',
    name: 'Fresh Mango',
    spanish: 'Mango',
    category: 'Creamy',
    description: 'Mango maduro batido con leche fresca, un sabor solar en cada bola.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Golden%20fresh%20mango%20ice%20cream%20scoop%20in%20small%20bowl%20with%20ripe%20mango%20slices%20and%20leaves%20nearby%2C%20warm%20cream%20colored%20background%2C%20soft%20natural%20window%20light%2C%20editorial%20tropical%20food%20photography%2C%20minimalist%20artistic%20food%20styling%2C%20clean%20composition%20detailed%20smooth%20texture&width=900&height=900&seq=flavor-mango-06&orientation=squarish',
    popular: true,
  },
  {
    id: 'biscocho',
    name: 'Cake Batter',
    spanish: 'Biscocho',
    category: 'Creamy',
    description: 'Sabor a pastel de cumpleaños con chispas de colores y vainilla.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Cake%20batter%20ice%20cream%20scoop%20in%20bowl%20with%20colorful%20sprinkles%20and%20cake%20crumbs%20on%20top%2C%20warm%20cream%20background%2C%20soft%20natural%20lighting%2C%20editorial%20dessert%20photography%2C%20playful%20minimal%20styling%2C%20birthday%20cake%20texture%20creamy&width=900&height=900&seq=flavor-biscocho-16&orientation=squarish',
  },
  {
    id: 'pistachio',
    name: 'Pistachio',
    spanish: 'Pistachio',
    category: 'Creamy',
    description: 'Helado verde de pistacho con trozos de nuez real.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Green%20pistachio%20ice%20cream%20scoop%20in%20small%20bowl%20with%20pistachio%20nuts%20scattered%20around%2C%20warm%20beige%20background%2C%20soft%20natural%20window%20light%2C%20editorial%20food%20photography%2C%20elegant%20minimal%20composition%2C%20nutty%20texture%20smooth&width=900&height=900&seq=flavor-pistachio-17&orientation=squarish',
  },
  {
    id: 'cafe',
    name: 'Coffee',
    spanish: 'Cafe',
    category: 'Creamy',
    description: 'Café puertorriqueño en helado cremoso, energía tropical.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Coffee%20ice%20cream%20scoop%20in%20ceramic%20bowl%20with%20coffee%20beans%20nearby%2C%20warm%20cream%20background%2C%20soft%20diffused%20natural%20light%2C%20editorial%20food%20photography%2C%20cozy%20minimal%20styling%2C%20rich%20dark%20creamy%20texture%20aromatic&width=900&height=900&seq=flavor-cafe-18&orientation=squarish',
  },
  {
    id: 'nutella',
    name: 'Nutella',
    spanish: 'Nutella',
    category: 'Creamy',
    description: 'Crema de avellana y chocolate, indulgencia en estado puro.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Chocolate%20hazelnut%20ice%20cream%20scoop%20in%20bowl%20with%20hazelnuts%20and%20chocolate%20drizzle%20on%20top%2C%20warm%20wooden%20surface%2C%20soft%20natural%20lighting%2C%20editorial%20dessert%20photography%2C%20indulgent%20minimal%20styling%20creamy&width=900&height=900&seq=flavor-nutella-19&orientation=squarish',
  },
  {
    id: 'mani',
    name: 'Peanut Butter',
    spanish: 'Mani',
    category: 'Creamy',
    description: 'Mantequilla de maní cremosa, para los amantes de lo salado-dulce.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Peanut%20butter%20ice%20cream%20scoop%20in%20rustic%20bowl%20with%20peanut%20pieces%20scattered%20around%2C%20warm%20cream%20background%2C%20soft%20natural%20light%2C%20editorial%20food%20photography%2C%20nutty%20artisanal%20styling%20smooth%20texture%20creamy&width=900&height=900&seq=flavor-mani-20&orientation=squarish',
  },
  {
    id: 'pina-colada',
    name: 'Pina Colada',
    spanish: 'Pina Colada',
    category: 'Creamy',
    description: 'Piña, coco y un toque de vacaciones en cada bola.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Pina%20colada%20ice%20cream%20scoop%20in%20bowl%20with%20pineapple%20chunks%20and%20coconut%20flakes%20nearby%2C%20warm%20cream%20background%2C%20soft%20natural%20window%20lighting%2C%20editorial%20tropical%20food%20photography%2C%20vacation%20vibes%20minimal%20styling&width=900&height=900&seq=flavor-pina-colada-21&orientation=squarish',
  },
  {
    id: 'frutilla',
    name: 'Strawberry',
    spanish: 'Frutilla',
    category: 'Creamy',
    description: 'Fresas frescas batidas en crema, clásico irresistible.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Fresh%20strawberry%20ice%20cream%20scoop%20in%20bowl%20with%20ripe%20strawberries%20and%20mint%20leaf%20nearby%2C%20warm%20cream%20background%2C%20soft%20diffused%20natural%20light%2C%20editorial%20food%20photography%2C%20fruity%20minimal%20styling%20red%20pink%20texture&width=900&height=900&seq=flavor-frutilla-22&orientation=squarish',
  },
  {
    id: 'vanilla',
    name: 'Vanilla Bean',
    spanish: 'Vanilla',
    category: 'Creamy',
    description: 'Clásica vainilla de haba real, suave y eterna.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Classic%20vanilla%20bean%20ice%20cream%20scoop%20in%20elegant%20bowl%20with%20vanilla%20pod%20nearby%2C%20warm%20cream%20background%2C%20soft%20natural%20lighting%2C%20editorial%20food%20photography%2C%20clean%20minimal%20composition%2C%20creamy%20white%20texture%20smooth&width=900&height=900&seq=flavor-vanilla-23&orientation=squarish',
  },
  {
    id: 'chocolate',
    name: 'Chocolate',
    spanish: 'Chocolate',
    category: 'Creamy',
    description: 'Chocolate rico y profundo, decadencia en cada cucharada.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Rich%20dark%20chocolate%20ice%20cream%20scoop%20in%20bowl%20with%20chocolate%20shavings%20on%20top%2C%20warm%20beige%20background%2C%20soft%20natural%20light%2C%20editorial%20dessert%20photography%2C%20indulgent%20minimal%20styling%2C%20deep%20brown%20creamy%20texture&width=900&height=900&seq=flavor-chocolate-24&orientation=squarish',
  },
  {
    id: 'rocky-road',
    name: 'Rocky Road',
    spanish: 'Rocky Road',
    category: 'Creamy',
    description: 'Chocolate con marshmallows y almendras, textura perfecta.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Rocky%20road%20chocolate%20ice%20cream%20scoop%20in%20bowl%20with%20marshmallows%20and%20almonds%20on%20top%2C%20warm%20cream%20background%2C%20soft%20natural%20lighting%2C%20editorial%20dessert%20photography%2C%20playful%20minimal%20styling%20chunky%20texture&width=900&height=900&seq=flavor-rocky-road-25&orientation=squarish',
  },
  {
    id: 'cookies-cream',
    name: 'Cookies & Cream',
    spanish: 'Cookies And Cream',
    category: 'Creamy',
    description: 'Galletas oreo trituradas en helado de vainilla cremoso.',
    price: '$5.50',
    image:
      'https://readdy.ai/api/search-image?query=Cookies%20and%20cream%20ice%20cream%20scoop%20in%20bowl%20with%20chocolate%20cookie%20crumbles%20nearby%2C%20warm%20cream%20background%2C%20soft%20diffused%20natural%20light%2C%20editorial%20dessert%20photography%2C%20fun%20minimal%20styling%20black%20white%20texture&width=900&height=900&seq=flavor-cookies-cream-26&orientation=squarish',
  },
  {
    id: 'blue-raspberry',
    name: 'Blue Raspberry',
    spanish: 'Blue Rasberry',
    category: 'Italian Ice',
    description: 'Italian Ice de frambuesa azul, refrescante y vibrante.',
    price: '$4.50',
    image:
      'https://readdy.ai/api/search-image?query=Bright%20blue%20raspberry%20italian%20ice%20scoop%20in%20cup%20with%20fresh%20raspberries%20nearby%2C%20cool%20white%20background%2C%20soft%20natural%20lighting%2C%20refreshing%20summer%20food%20photography%2C%20vibrant%20minimal%20styling%2C%20icy%20smooth%20texture&width=900&height=900&seq=flavor-blue-raspberry-27&orientation=squarish',
  },
  {
    id: 'sandia',
    name: 'Watermelon',
    spanish: 'Sandia',
    category: 'Italian Ice',
    description: 'Sandía jugosa en Italian Ice, el refresco del verano.',
    price: '$4.50',
    image:
      'https://readdy.ai/api/search-image?query=Refreshing%20watermelon%20italian%20ice%20scoop%20in%20cup%20with%20watermelon%20slices%20nearby%2C%20warm%20cream%20background%2C%20soft%20natural%20light%2C%20editorial%20summer%20food%20photography%2C%20fruity%20minimal%20styling%2C%20red%20green%20fresh%20texture&width=900&height=900&seq=flavor-sandia-28&orientation=squarish',
  },
  {
    id: 'limon',
    name: 'Lemon',
    spanish: 'Limon',
    category: 'Italian Ice',
    description: 'Limón ácido y refrescante, Italian Ice clásico.',
    price: '$4.50',
    image:
      'https://readdy.ai/api/search-image?query=Tangy%20lemon%20italian%20ice%20scoop%20in%20cup%20with%20fresh%20lemon%20slices%20and%20zest%20nearby%2C%20warm%20cream%20background%2C%20soft%20natural%20lighting%2C%20citrus%20food%20photography%2C%20zesty%20minimal%20styling%2C%20bright%20yellow%20smooth%20texture&width=900&height=900&seq=flavor-limon-29&orientation=squarish',
  },
  {
    id: 'uva',
    name: 'Grape',
    spanish: 'Uva',
    category: 'Italian Ice',
    description: 'Uva morada en Italian Ice, dulzura frutal intensa.',
    price: '$4.50',
    image:
      'https://readdy.ai/api/search-image?query=Grape%20italian%20ice%20scoop%20in%20cup%20with%20fresh%20purple%20grapes%20cluster%20nearby%2C%20warm%20cream%20background%2C%20soft%20diffused%20natural%20light%2C%20editorial%20fruity%20food%20photography%2C%20elegant%20minimal%20styling%2C%20deep%20purple%20smooth%20texture&width=900&height=900&seq=flavor-uva-30&orientation=squarish',
  },
  {
    id: 'arco-iris',
    name: 'Rainbow',
    spanish: 'Arco Iris',
    category: 'Italian Ice',
    description: 'Italian Ice arcoíris multicolor, diversión en cada cucharada.',
    price: '$4.50',
    image:
      'https://readdy.ai/api/search-image?query=Rainbow%20colorful%20italian%20ice%20layered%20scoops%20in%20cup%20with%20multicolor%20swirls%20visible%2C%20warm%20cream%20background%2C%20soft%20natural%20lighting%2C%20playful%20summer%20food%20photography%2C%20vibrant%20minimal%20styling%20fun%20texture&width=900&height=900&seq=flavor-arco-iris-31&orientation=squarish',
  },
  {
    id: 'cereza',
    name: 'Cherry',
    spanish: 'Cereza',
    category: 'Italian Ice',
    description: 'Cereza roja en Italian Ice, clásico y delicioso.',
    price: '$4.50',
    image:
      'https://readdy.ai/api/search-image?query=Cherry%20italian%20ice%20scoop%20in%20cup%20with%20fresh%20red%20cherries%20nearby%2C%20warm%20cream%20background%2C%20soft%20natural%20light%2C%20editorial%20fruity%20food%20photography%2C%20elegant%20minimal%20styling%2C%20deep%20red%20smooth%20texture&width=900&height=900&seq=flavor-cereza-32&orientation=squarish',
  },
  {
    id: 'piragua-tamarindo',
    name: 'Tamarind Piragua',
    spanish: 'Piragua de Tamarindo',
    category: 'Piragua',
    description: 'Hielo raspado con sirope artesanal de tamarindo agridulce.',
    price: '$3.50',
    image:
      'https://readdy.ai/api/search-image?query=Colorful%20tamarind%20shaved%20ice%20piragua%20in%20paper%20cone%20cup%20with%20amber%20syrup%20on%20warm%20wooden%20surface%20with%20tamarind%20pods%2C%20warm%20cream%20background%2C%20soft%20natural%20light%2C%20traditional%20latin%20street%20food%20photography%2C%20artisanal%20styling%20detailed%20ice%20texture&width=900&height=900&seq=flavor-piragua-tamarindo-05&orientation=squarish',
    popular: true,
  },
  {
    id: 'piragua-frutilla',
    name: 'Strawberry Piragua',
    spanish: 'Piragua de Frutilla',
    category: 'Piragua',
    description: 'Piragua de fresa roja, dulce y refrescante clásico.',
    price: '$3.50',
    image:
      'https://readdy.ai/api/search-image?query=Strawberry%20shaved%20ice%20piragua%20in%20paper%20cone%20cup%20with%20red%20syrup%20drizzle%2C%20warm%20wooden%20surface%2C%20soft%20natural%20lighting%2C%20latin%20street%20food%20photography%2C%20refreshing%20minimal%20styling%2C%20pink%20ice%20texture&width=900&height=900&seq=flavor-piragua-frutilla-33&orientation=squarish',
  },
  {
    id: 'piragua-coco',
    name: 'Coconut Piragua',
    spanish: 'Piragua de Coco',
    category: 'Piragua',
    description: 'Piragua con sirope de coco cremoso, tropical y refrescante.',
    price: '$3.50',
    image:
      'https://readdy.ai/api/search-image?query=Coconut%20shaved%20ice%20piragua%20in%20paper%20cone%20cup%20with%20white%20coconut%20cream%20drizzle%2C%20warm%20wooden%20surface%2C%20soft%20natural%20lighting%2C%20tropical%20street%20food%20photography%2C%20refreshing%20minimal%20styling%2C%20white%20ice%20texture&width=900&height=900&seq=flavor-piragua-coco-34&orientation=squarish',
  },
  {
    id: 'piragua-manzana',
    name: 'Green Apple Piragua',
    spanish: 'Piragua de Manzana Agria',
    category: 'Piragua',
    description: 'Manzana verde ácida en hielo raspado, picante y frutal.',
    price: '$3.50',
    image:
      'https://readdy.ai/api/search-image?query=Green%20apple%20shaved%20ice%20piragua%20in%20paper%20cone%20cup%20with%20green%20syrup%2C%20warm%20wooden%20surface%2C%20soft%20natural%20lighting%2C%20latin%20street%20food%20photography%2C%20tangy%20minimal%20styling%2C%20bright%20green%20ice%20texture&width=900&height=900&seq=flavor-piragua-manzana-35&orientation=squarish',
  },
  {
    id: 'piragua-passion-mango',
    name: 'Passion Mango Piragua',
    spanish: 'Piragua de Passion Mango',
    category: 'Piragua',
    description: 'Combinación de parcha y mango en piragua, explosión tropical.',
    price: '$3.50',
    image:
      'https://readdy.ai/api/search-image?query=Passion%20fruit%20mango%20shaved%20ice%20piragua%20in%20cone%20cup%20with%20orange%20yellow%20syrup%2C%20warm%20wooden%20surface%2C%20soft%20natural%20lighting%2C%20tropical%20street%20food%20photography%2C%20vibrant%20minimal%20styling%2C%20sunset%20ice%20texture&width=900&height=900&seq=flavor-piragua-passion-mango-36&orientation=squarish',
  },
  {
    id: 'piragua-pina',
    name: 'Pineapple Piragua',
    spanish: 'Piragua de Pina',
    category: 'Piragua',
    description: 'Piragua de piña dorada, sabor caribeño auténtico.',
    price: '$3.50',
    image:
      'https://readdy.ai/api/search-image?query=Pineapple%20shaved%20ice%20piragua%20in%20paper%20cone%20cup%20with%20yellow%20pineapple%20syrup%2C%20warm%20wooden%20surface%2C%20soft%20natural%20lighting%2C%20tropical%20street%20food%20photography%2C%20sunny%20minimal%20styling%2C%20golden%20ice%20texture&width=900&height=900&seq=flavor-piragua-pina-37&orientation=squarish',
  },
  {
    id: 'piragua-cherry',
    name: 'Cherry Piragua',
    spanish: 'Piragua de Cherry',
    category: 'Piragua',
    description: 'Cereza clásica en hielo raspado, dulce y refrescante.',
    price: '$3.50',
    image:
      'https://readdy.ai/api/search-image?query=Cherry%20shaved%20ice%20piragua%20in%20paper%20cone%20cup%20with%20deep%20red%20cherry%20syrup%2C%20warm%20wooden%20surface%2C%20soft%20natural%20lighting%2C%20latin%20street%20food%20photography%2C%20sweet%20minimal%20styling%2C%20ruby%20red%20ice%20texture&width=900&height=900&seq=flavor-piragua-cherry-38&orientation=squarish',
  },
  {
    id: 'limber-coco',
    name: 'Coconut Limber',
    spanish: 'Limber de Coco',
    category: 'Limber',
    description: 'Clásico limber puertorriqueño, cremoso y perfecto para el calor.',
    price: '$3.00',
    image:
      'https://readdy.ai/api/search-image?query=Traditional%20Puerto%20Rican%20coconut%20limber%20frozen%20treat%20in%20small%20plastic%20cup%20with%20fresh%20coconut%20pieces%20nearby%2C%20warm%20cream%20background%2C%20soft%20natural%20lighting%2C%20nostalgic%20artisanal%20food%20photography%2C%20minimalist%20styling%20with%20tropical%20mood%2C%20detailed%20frost%20texture%20visible%20elegant&width=900&height=900&seq=flavor-limber-coco-04&orientation=squarish',
  },
  {
    id: 'limber-parcha',
    name: 'Passion Limber',
    spanish: 'Limber de Parcha',
    category: 'Limber',
    description: 'Refrescante y frutal, con el toque ácido perfecto del maracuyá.',
    price: '$3.00',
    image:
      'https://readdy.ai/api/search-image?query=Yellow%20passion%20fruit%20limber%20frozen%20treat%20in%20small%20plastic%20cup%20with%20fresh%20passion%20fruit%20halves%20on%20wooden%20surface%2C%20warm%20cream%20background%2C%20soft%20natural%20lighting%2C%20nostalgic%20food%20photography%2C%20tropical%20minimal%20styling%2C%20artisanal%20detail%20visible%20elegant&width=900&height=900&seq=flavor-limber-parcha-08&orientation=squarish',
  },
  {
    id: 'milkshake',
    name: 'Milkshake',
    spanish: 'Milkshakes',
    category: 'Bebidas',
    description: 'Batido cremoso a tu elección de sabor, servido bien frío.',
    price: '$6.50',
    image:
      'https://readdy.ai/api/search-image?query=Creamy%20milkshake%20in%20tall%20glass%20with%20whipped%20cream%20and%20cherry%20on%20top%2C%20warm%20cream%20background%2C%20soft%20natural%20lighting%2C%20classic%20diner%20food%20photography%2C%20indulgent%20minimal%20styling%2C%20thick%20creamy%20texture%20smooth&width=900&height=900&seq=flavor-milkshake-39&orientation=squarish',
  },
  {
    id: 'frape',
    name: 'Frappe',
    spanish: 'Frapes',
    category: 'Bebidas',
    description: 'Frape helado de café o fruta, con crema batida.',
    price: '$6.00',
    image:
      'https://readdy.ai/api/search-image?query=Iced%20frappe%20in%20tall%20glass%20with%20whipped%20cream%20and%20chocolate%20drizzle%20on%20top%2C%20warm%20wooden%20surface%2C%20soft%20natural%20lighting%2C%20coffee%20shop%20food%20photography%2C%20refreshing%20minimal%20styling%2C%20frothy%20brown%20texture&width=900&height=900&seq=flavor-frape-40&orientation=squarish',
  },
  {
    id: 'batida',
    name: 'Tropical Smoothie',
    spanish: 'Batidas',
    category: 'Bebidas',
    description: 'Batida tropical de fruta fresca, energía natural de la isla.',
    price: '$6.00',
    image:
      'https://readdy.ai/api/search-image?query=Tropical%20batida%20smoothie%20in%20tall%20glass%20with%20fresh%20fruit%20garnish%20on%20top%2C%20warm%20cream%20background%2C%20soft%20natural%20lighting%2C%20caribbean%20beverage%20photography%2C%20vibrant%20minimal%20styling%2C%20creamy%20fruity%20texture&width=900&height=900&seq=flavor-batida-41&orientation=squarish',
  },
  {
    id: 'soft-serve',
    name: 'Soft Ice Cream',
    spanish: 'Soft Ice Cream',
    category: 'Bebidas',
    description: 'Clásico soft serve de vainilla, chocolate o mango.',
    price: '$4.00',
    image:
      'https://readdy.ai/api/search-image?query=Soft%20serve%20vanilla%20ice%20cream%20swirl%20in%20cone%20with%20smooth%20creamy%20texture%2C%20warm%20cream%20background%2C%20soft%20natural%20lighting%2C%20classic%20ice%20cream%20photography%2C%20nostalgic%20minimal%20styling%2C%20white%20spiral%20texture%20elegant&width=900&height=900&seq=flavor-soft-serve-42&orientation=squarish',
  },
];

export const categories = ['Todos', 'Tropical', 'Creamy', 'Italian Ice', 'Piragua', 'Limber', 'Bebidas'] as const;
export type Cat = (typeof categories)[number];