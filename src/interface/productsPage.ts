
import suetersImage from '../assets/images/sueters.jpg';
import bolsoManoImage from '../assets/images/hangbag.jpg';
import summerDress from '../assets/images/summer-dress.jpg';

export interface ProductPage {
    id: number;
    name: string;
    description?: string;
    category: string;
    price: string;
    image: string;
}

export const productsPageData: ProductPage[] = [
    {
        id: 1,
        name: "Sueters",
        price: "$49.99",
        image: suetersImage,
        category: ''
    },
    {
        id: 2,
        name: "Cartera comfortable",
        price: "$89.99",
        image: bolsoManoImage,
        category: ''
    },
    {
        id: 3,
        name: "Vestido de verano",
        price: "$25.99",
        image: summerDress,
        category: ''
    },
    {
        id: 4,
        name: "Sueters",
        price: "$49.99",
        image: suetersImage,
        category: ''
    },
    {
        id: 5,
        name: "Cartera comfortable",
        price: "$89.99",
        image: bolsoManoImage,
        category: ''
    },
    {
        id: 6,
        name: "Vestido de verano",
        price: "$25.99",
        image: summerDress,
        category: ''
    },
    {
        id: 7,
        name: "Cartera comfortable",
        price: "$89.99",
        image: bolsoManoImage,
        category: ''
    },
    {
        id: 8,
        name: "Vestido de verano",
        price: "$25.99",
        image: summerDress,
        category: ''
    },
    // Más productos...
];
