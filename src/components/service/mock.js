import { v4 as uuid } from 'uuid';
import cutter from '../../assets/icons/cutters.png';
import reflection from '../../assets/icons/reflection.png';
import window from '../../assets/icons/window.png';
import shower from '../../assets/icons/shower.png';
import mirror from '../../assets/icons/mirror.png';
import railing from '../../assets/icons/footsteps.png';

export const services = [
  {
    id: uuid(),
    icon: cutter,
    title: 'Custom Glass Cutting',
    description:
      'We offer precision glass cutting services to fit your unique needs. From windows and doors to shelving and display cases, we provide high-quality, customized glass solutions.',
  },
  {
    id: uuid(),
    icon: reflection,
    title: 'Mirror Installation',
    description:
      "Our mirror installation services can transform any space. Whether you're aiming for a contemporary, classic, or minimalist look, our mirrors can help you achieve the desired ambiance.",
  },
  {
    id: uuid(),
    icon: window,
    title: 'Glass Repairs',
    description:
      "Accidents happen, and when they do, we're here to help. We offer prompt and efficient glass repair services to restore the safety and aesthetics of your property.",
  },
  {
    id: uuid(),
    icon: shower,
    title: 'Frameless Shower Enclosures',
    description:
      'Elevate your bathroom with our exquisite frameless shower enclosures. They not only add a touch of luxury but also create a sense of spaciousness.',
  },
  {
    id: uuid(),
    icon: mirror,
    title: 'Glass and Mirror Design',
    description:
      "Our team of experts can help you design and customize glass and mirror solutions that perfectly complement your space. We're here to turn your ideas into reality.",
  },
  {
    id: uuid(),
    icon: railing,
    title: 'Railing',
    description:
      'We are passionate about elevating your space with stunning and functional railing solutions. We specialize in the design, fabrication, and installation of high-quality railings that not only enhance the safety of your property but also add a touch of elegance to your surroundings.',
  },
  {
    id: uuid(),
    icon: '',
    title: 'Closet Doors',
    description: 'Lorem Ipsum',
  },
  {
    id: uuid(),
    icon: '',
    title: 'Moldings',
    description: 'Lorem Ipsum',
  },
  {
    id: uuid(),
    icon: '',
    title: 'Windows',
    description: 'Lorem Ipsum',
  },
  {
    id: uuid(),
    icon: '',
    title: 'Store Front',
    description: 'Lorem Ipsum',
  },
];
