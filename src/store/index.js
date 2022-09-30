import award from '../assets/icons/award.png'
import customer from '../assets/icons/customer.png'
import diet from '../assets/icons/diet.png'
import shipping from '../assets/icons/shipping.png'
import prod1 from '../assets/images/products/prod_1.webp'
import prod2 from '../assets/images/products/prod_2.webp'
import prod3 from '../assets/images/products/prod_3.webp'
import prod4 from '../assets/images/products/prod_4.webp'
import prod5 from '../assets/images/products/prod_5.webp'
import prod6 from '../assets/images/products/prod_6.webp'
import prod7 from '../assets/images/products/prod_7.webp'
import prod8 from '../assets/images/products/prod_8.webp'
import prod9 from '../assets/images/products/prod_9.webp'
import prod10 from '../assets/images/products/prod_10.webp'
import prod11 from '../assets/images/products/prod_11.webp'
import prod12 from '../assets/images/products/prod_12.webp'
import customer1 from '../assets/images/customers/person1.webp'
import customer2 from '../assets/images/customers/person2.webp'
import customer3 from '../assets/images/customers/person3.webp'
import partner1 from '../assets/images/partners/partner1.webp'
import partner2 from '../assets/images/partners/partner2.webp'
import partner3 from '../assets/images/partners/partner3.webp'
import partner4 from '../assets/images/partners/partner4.webp'
import partner5 from '../assets/images/partners/partner5.webp'


const initState = {
    why: [
        {
            icon: shipping,
            heading: 'free shipping',
            span: 'on order over 100 $',
            alt: 'Free shipping',
            bg: '#e4b2d6',
            delay: 0
        },
        {
            icon: diet,
            heading: 'always fresh',
            span: 'products well package',
            alt: 'Always Fresh',
            bg: '#dcc698',
            delay: 100
        },
        {
            icon: award,
            heading: 'superior quality',
            span: 'quality products',
            alt: 'Superior quality',
            bg: '#a2d1e1',
            delay: 200
        },
        {
            icon: customer,
            heading: 'support',
            span: '24/7 support',
            alt: 'Customer Service',
            bg: '#dcd691',
            delay: 300
        }
    ],
    categories1: [
        {
            name: "fruits",
            alt: 'Fruits',
            id: 'fruits_category'
        },
        {
            name: "vegetables",
            alt: 'Vegetables',
            id: 'vegetables_category'
        }
    ],
    categories2: [
        {
            name: "juices",
            alt: 'Juices',
            id: 'juices_category'
        },
        {
            name: "dried",
            alt: 'Dried',
            id: 'dried_category'
        }
    ],
    products: [
        {
            id: 1,
            img: prod1,
            name: 'bell pepper',
            prevPrice: 120,
            price: 80,
            sale: '30%',
            delay: 0
        },
        {
            id: 2,
            img: prod2,
            name: 'strawberry',
            price: 120,
            delay: 100
        },
        {
            id: 3,
            img: prod3,
            name: 'green beans',
            price: 120,
            delay: 200
        },
        {
            id: 4,
            img: prod4,
            name: 'purple cabbage',
            price: 120,
            delay: 300
        },
        {
            id: 5,
            img: prod5,
            name: 'tomatoe',
            prevPrice: 120,
            price: 80,
            sale: '30%',
            delay: 0
        },
        {
            id: 6,
            img: prod6,
            name: 'brocolli',
            price: 120,
            delay: 100
        },
        {
            id: 7,
            img: prod7,
            name: 'carrots',
            price: 120,
            delay: 200
        },
        {
            id: 8,
            img: prod8,
            name: 'fruit juice',
            price: 120,
            sale: '30%',
            delay: 300
        },
        {
            id: 9,
            img: prod9,
            name: 'onion',
            prevPrice: 120,
            price: 80
        },
        {
            id: 10,
            img: prod10,
            name: 'apple',
            price: 120
        },
        {
            id: 11,
            img: prod11,
            name: 'garlic',
            price: 120
        },
        {
            id: 12,
            img: prod12,
            name: 'chilli',
            price: 120
        }
    ],
    customers: [
        {
            img: customer1,
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            name: 'Garret Smith',
            prof: 'web designer'
        },
        {
            img: customer2,
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            name: 'John Wick',
            prof: 'marketing manager'
        },
        {
            img: customer3,
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            name: 'Arturo Vidal',
            prof: 'system analyst'
        },
        {
            img: customer1,
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            name: 'Garret Smith',
            prof: 'web designer'
        },
        {
            img: customer2,
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            name: 'John Wick',
            prof: 'marketing manager'
        },
        {
            img: customer3,
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            name: 'Arturo Vidal',
            prof: 'system analyst'
        }
    ],
    partners: [
        {
            img: partner1,
            link: 'https://www.microsoft.com/en-us/',
            delay: 0
        },
        {
            img: partner2,
            link: 'https://www.android.com/',
            delay: 100
        },
        {
            img: partner3,
            link: 'https://www.java.com/',
            delay: 200
        },
        {
            img: partner4,
            link: 'https://www.google.com/',
            delay: 300
        },
        {
            img: partner5,
            link: 'https://www.adobe.com/',
            delay: 400
        }
    ],
    countUp: [
        {
            max: 10000,
            text: 'happy customers'
        },
        {
            max: 100,
            text: 'branches'
        },        {
            max: 1000,
            text: 'partners'
        },
        {
            max: 100,
            text: 'awards'
        }
    ]
}

export default function reducer(state = initState) {
    return state
}