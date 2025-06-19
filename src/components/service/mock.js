import { v4 as uuid } from 'uuid';
import measurement from '../../assets/icons/measurement.png';
import reflection from '../../assets/icons/reflection.png';
import window_repair from '../../assets/icons/window-repair.png';
import shower from '../../assets/icons/shower.png';
import mirror from '../../assets/icons/mirror.png';
import railing from '../../assets/icons/footsteps.png';
import windows from '../../assets/icons/window-frame.png';
import patioDoorsIcon from '../../assets/icons/sliding-door.png';
import storeFrontIcon from '../../assets/icons/store-front.png';

import windowMeasurment from '../../assets/servicesImages/window-measurment.jpeg';
import mirrorInstallation from '../../assets/servicesImages/mirror-ntsallation.png';
import windowRepair from '../../assets/servicesImages/window-repair.jpeg';
import frameLessShower from '../../assets/servicesImages/frameless-shower.jpeg';
import mirrors from '../../assets/servicesImages/mirrors.jpeg';
import railingGlass from '../../assets/servicesImages/railingGlass.jpeg';
import windowInstallation from '../../assets/servicesImages/window-installation.jpg';
import patioDoors from '../../assets/servicesImages/patio-doors.jpeg';
import storeFront from '../../assets/servicesImages/storefront.jpeg';

export const services = [
  {
    id: uuid(),
    icon: measurement,
    imgUrl: windowMeasurment,
    title: 'Free Estimate & Measurement',
    description:
      'Our skilled professionals go beyond conventional measuring standards. With a commitment to perfection, we take precise measurements for custom installations, replacements, or upgrades. We value your time. By combining the estimate and measurement processes, we streamline the experience, saving you the hassle of coordinating multiple appointments.',
  },
  {
    id: uuid(),
    icon: reflection,
    imgUrl: mirrorInstallation,
    title: 'Mirror Installation',
    description:
      "Our mirror installation services can transform any space. Whether you're aiming for a contemporary, classic, or minimalist look, our mirrors can help you achieve the desired ambiance. A beautifully crafted mirror is only as good as its installation, and we take pride in ensuring that your mirrors are securely and aesthetically installed in your space. Enhance the aesthetics and functionality of your space with our expert mirror installation services. Whether it's for your home, business, or any other setting, we're here to turn your mirror vision into reality. Contact us today to discuss your project, request a quote, or schedule an installation appointment.",
  },
  {
    id: uuid(),
    icon: window_repair,
    imgUrl: windowRepair,
    title: 'Glass Repairs',
    description:
      "Accidents happen, and when they do, we're here to help. We offer prompt and efficient glass repair services to restore the safety and aesthetics of your property. When you need reliable and skilled glass repair services, We are here to help. Contact us today for a free consultation, a quote, or immediate assistance with your glass repair needs.",
  },
  {
    id: uuid(),
    icon: shower,
    imgUrl: frameLessShower,
    title: 'Frameless Shower Enclosures',
    description:
      'Elevate your bathroom with our exquisite frameless shower enclosures. They not only add a touch of luxury but also create a sense of spaciousness. We specialize in transforming your bathroom into a luxurious oasis with our exquisite frameless shower enclosures. These stunning and contemporary fixtures not only add functionality but also enhance the aesthetics of your space. Discover the perfect blend of elegance and functionality with our frameless shower enclosures. Frameless shower enclosures have become a popular choice for those who seek a modern, sleek, and open look for their bathrooms.',
  },
  {
    id: uuid(),
    icon: mirror,
    imgUrl: mirrors,
    title: 'Glass and Mirror Design',
    description:
      "Our team of experts can help you design and customize glass and mirror solutions that perfectly complement your space. We're here to turn your ideas into reality.Transform your space into a work of art with us. Whether you seek custom glass designs, elegant mirrors, or unique sculptures, our team is here to bring your vision to life. Ready to explore the endless possibilities of glass and mirror design? Contact us today to discuss your project, request a quote, or schedule a design consultation.",
  },
  {
    id: uuid(),
    icon: railing,
    imgUrl: railingGlass,
    title: 'Railing',
    description:
      "We are passionate about elevating your space with stunning and functional railing solutions. We specialize in the design, fabrication, and installation of high-quality railings that not only enhance the safety of your property but also add a touch of elegance to your surroundings. Glass railings are a popular choice for homeowners and businesses seeking a contemporary, open, and unobstructed feel for their space. Create a sophisticated and modern ambiance in your space with glass railings from us. Whether it's for a residential or commercial setting, our glass railings offer a timeless blend of safety and style. Ready to enhance your space with our glass railing systems? Contact us today for a consultation, request a quote, or schedule an installation appointment.",
  },
  // {
  //   id: uuid(),
  //   icon: '',
  //   imgUrl: mirrorClosetDoor,
  //   title: 'Closet Doors',
  //   description:
  //     "We offer a stylish and practical solution to maximize space and elevate the aesthetics of your home with our sliding mirror closet doors. Our designs combine functionality and beauty to transform your closet space into a luxurious and convenient area. Our expert installers ensure that your sliding mirror closet doors are installed securely and operate smoothly. We use high-quality materials to ensure the safety and longevity of your sliding mirror closet doors. Transform your closet space with sliding mirror closet doors from [Your Business Name]. Whether you're looking to modernize your bedroom or create a functional dressing area, our doors provide an elegant and practical solution.",
  // },
  // {
  //   id: uuid(),
  //   icon: '',
  //   imgUrl: moldings,
  //   title: 'Moldings',
  //   description:
  //     "We take pride in offering exquisite glass moldings that enhance the beauty and functionality of your glass installations. Our custom glass moldings are designed to complement and protect your glass surfaces while adding a touch of sophistication to your space. Upgrade your glass surfaces with glass moldings from us. Whether it's adding a finishing touch to your glass shelves or protecting the edges of your glass tabletop, our moldings provide an elegant and practical solution. Ready to enhance your glass installations with our custom glass moldings? Contact us today for a consultation, request a quote, or schedule installation.",
  // },
  {
    id: uuid(),
    icon: windows,
    imgUrl: windowInstallation,
    title: 'Windows',
    description:
      'We are your trusted partner for all your window needs. Our expert team specializes in high-quality window installation and repair services, providing you with solutions that enhance the beauty, energy efficiency, and overall comfort of your home. Windows are a vital element of your home, and they impact aesthetics, energy efficiency, and security. Upgrade your home with professional window installation and repair services from us. Our team is committed to enhancing the comfort, beauty, and energy efficiency of your living space.',
  },
  {
    id: uuid(),
    icon: patioDoorsIcon,
    imgUrl: patioDoors,
    title: 'Patio Doors',
    description:
      "We're your go-to experts for enhancing your indoor-outdoor living experience. Our skilled team specializes in top-quality patio doors installation and offers comprehensive maintenance services to keep your doors functioning flawlessly for years to come. Patio doors are the gateway to your outdoor haven. Our patio doors create a smooth transition between your indoor and outdoor spaces, providing a sense of unity and a feeling of openness. Elevate your indoor-outdoor living with professional patio doors installation and maintenance services from us. We are committed to enhancing the comfort, beauty, and energy efficiency of your living space.",
  },
  {
    id: uuid(),
    icon: storeFrontIcon,
    imgUrl: storeFront,
    title: 'Store Front',
    description:
      "We understand that your storefront is your business's first impression. We specialize in creating captivating storefronts that not only attract customers but also reflect your brand's identity and values. Our storefront solutions are designed to help you stand out in the competitive marketplace. A well-designed storefront is an essential element of your business's success and glass storefronts are a popular choice due to their elegance and transparency. We provide glass solutions that are both durable and stylish, allowing natural light to shine through and showcase your products. Ready to transform your storefront into a compelling asset for your business? Contact us today to discuss your project, request a quote, or schedule a consultation.",
  },
];
