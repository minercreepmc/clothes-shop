import { BsGem, BsHeart } from 'react-icons/bs';
import { FaShippingFast, FaTshirt } from 'react-icons/fa';
export const services = [
  {
    id: 1,
    title: 'Affordable Price',
    body: 'Our service alway adjust product price to suitable for customers',
    icon: <BsGem />,
  },
  {
    id: 2,
    title: 'Up to Date',
    body: 'All dependencies are kept current to keep things fresh.',
    icon: <FaTshirt />,
  },
  {
    id: 3,
    title: 'Fast shipping',
    body: 'Our shipping service will alway fast and keep our customer satisfied',
    icon: <FaShippingFast />,
  },
  {
    id: 4,
    title: 'Made with Love',
    body: 'Our product alway have a great quality',
    icon: <BsHeart />,
  },
];
