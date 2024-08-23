// src/helpers/products.ts

export interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    rating: number;
    images: string[]; // Asumimos que es un array de rutas de imágenes
}

export const products: Product[] = [
    {
        id: 1,
        name: "Sueters",
        description: "Elegantes para la temporada",
        price: "$49.99",
        rating: 4,
        images: [
            require('../assets/images/sueters.jpg'),
            require('../assets/images/sueter-dos.jpg'),
            require('../assets/images/sueter-tres.jpg')
        ]
    },
    {
        id: 2,
        name: "Cartera comfortable",
        description: "Bolso exclusivo diseño único.",
        price: "$89.99",
        rating: 5,
        images: [
            require('../assets/images/hangbag.jpg'),
            require('../assets/images/cartera-dos.jpg'),
            require('../assets/images/cartera-tres.jpg')
        ]
    },
    {
        id: 3,
        name: "Vestido de verano",
        description: "Ligero y cómodo para este verano",
        price: "$25.99",
        rating: 5,
        images: [
            require('../assets/images/summer-dress.jpg'),
            require('../assets/images/vestido-verano-dos.jpg'),
            require('../assets/images/vestido-verano-tres.jpg')
        ]
    },
    // Más productos...
];
