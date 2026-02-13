
import { Product } from '../domain/product.model';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Chocolate de Firma',
    shortDescription: 'Chocolate belga oscuro con pan de oro.',
    fullDescription: 'Una obra maestra de la repostería contemporánea. Este pastel combina la intensidad del chocolate de origen único con la acidez vibrante de las frambuesas frescas del bosque. Capas de bizcocho sacher ultra-húmedo se entrelazan con una ganache sedosa que se funde al contacto.',
    price: 148.00,
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop',
    preparation: 'Se prepara durante 24 horas mediante un proceso de templado manual.',
    category: 'Edición Especial',
    ingredients: [
      'Cacao de origen 70%',
      'Mantequilla de Normandía',
      'Frambuesas silvestres',
      'Láminas de oro comestible 24k',
      'Crema de leche premium',
      'Vainilla de Madagascar'
    ],
    preparationSteps: [
      'Templado manual del chocolate de origen.',
      'Elaboración del bizcocho sacher artesanal.',
      'Infusión de frambuesas en frío por 12 horas.',
      'Montaje por capas con ganache sedosa.',
      'Acabado con pan de oro y glaseado espejo.'
    ]
  },
  {
    id: '2',
    name: 'Tarta Frutos Rojos',
    shortDescription: 'Tarta francesa clásica con frutos de temporada.',
    fullDescription: 'Tarta francesa clásica que celebra la frescura de los frutos rojos de temporada. Base de masa quebrada crujiente, crema pastelera sedosa y una selección de las mejores frutas del día, todo acabado con un delicado glaseado brillante.',
    price: 128.00,
    imageUrl: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=1000&auto=format&fit=crop',
    preparation: 'Proceso artesanal de horneado y montaje manual.',
    category: 'Edición Premium',
    ingredients: [
      'Masa quebrada de mantequilla',
      'Crema pastelera de vainilla Tahití',
      'Frambuesas frescas',
      'Fresas de temporada',
      'Moras silvestres',
      'Arándanos azules',
      'Glaseado de albaricoque'
    ],
    preparationSteps: [
      'Elaboración de masa quebrada con mantequilla fría.',
      'Horneado en blanco con legumbres.',
      'Preparación de crema pastelera con vainilla natural.',
      'Selección manual de frutas frescas.',
      'Montaje y glaseado artesanal.'
    ]
  },
  {
    id: '3',
    name: 'Postre Gourmet',
    shortDescription: 'Colección de edición limitada.',
    fullDescription: 'Elegancia en estado puro. Este postre destaca por su monocromía blanca que esconde un corazón explosivo de praliné de macadamia y caramelo de mantequilla salada. Una experiencia táctil y gustativa de alta gama.',
    price: 168.00,
    imageUrl: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1000&auto=format&fit=crop',
    preparation: 'Las macadamias se tuestan a 160 grados para extraer su nota más dulce.',
    category: 'Gourmet',
    ingredients: [
      'Macadamias seleccionadas',
      'Chocolate blanco aterciopelado',
      'Praliné artesanal de frutos secos',
      'Caramelo de sal de Maras',
      'Especias exóticas',
      'Flor de sal'
    ],
    preparationSteps: [
      'Tueste controlado de las macadamias.',
      'Creación del corazón de caramelo salado.',
      'Elaboración del mousse de chocolate blanco.',
      'Baño de terciopelo blanco por pulverización.',
      'Decoración minimalista con pan de plata.'
    ]
  }
];

export class ProductService {
  static getAll(): Product[] {
    return PRODUCTS;
  }

  static getById(id: string): Product | undefined {
    return PRODUCTS.find(p => p.id === id);
  }

  static getFeatured(): Product[] {
    return PRODUCTS.slice(0, 3);
  }
  
  static getRelated(currentId: string): Product[] {
    return PRODUCTS.filter(p => p.id !== currentId).slice(0, 3);
  }
}
