import ReactPixel from 'react-facebook-pixel';

export const headerData = {
  '/': {
    title: 'Home Page',
    metaTags: [{ name: 'description', content: 'Welcome to our Home Page' }],
    eventScripts: [
      {
        src: 'https://connect.facebook.net/en_US/fbevents.js',
        onload: () => {
          ReactPixel.init(''); // Replace with your actual Pixel ID
          ReactPixel.track('PageView'); // Track PageView
        },
      },
    ],
  },
  '/welcome': {
    title: 'Welcome',
    metaTags: [{ name: 'description', content: 'Welcome to our platform' }],
    eventScripts: [
      {
        src: 'https://connect.facebook.net/en_US/fbevents.js',
        onload: () => {
          ReactPixel.track('ViewContent', { content_name: 'Welcome Page' });
        },
      },
    ],
  },
  '/menu': {
    title: 'Dinner Menu',
    metaTags: [{ name: 'description', content: 'Explore our delicious dinner options' }],
    eventScripts: [
      {
        src: 'https://connect.facebook.net/en_US/fbevents.js',
        onload: () => {
          ReactPixel.track('ViewContent', { content_name: 'Dinner Menu' });
        },
      },
    ],
  },
  '/bar': {
    title: 'Bar Menu',
    metaTags: [{ name: 'description', content: 'Check out our Bar Menu' }],
    eventScripts: [
      {
        src: 'https://connect.facebook.net/en_US/fbevents.js',
        onload: () => {
          ReactPixel.track('ViewContent', { content_name: 'Bar Menu' });
        },
      },
    ],
  },
  '/events': {
    title: 'Events',
    metaTags: [{ name: 'description', content: 'Stay updated on our events' }],
    eventScripts: [
      {
        src: 'https://connect.facebook.net/en_US/fbevents.js',
        onload: () => {
          ReactPixel.track('ViewContent', { content_name: 'Events Page' });
        },
      },
    ],
  },
  '/reservation': {
    title: 'Reservation',
    metaTags: [{ name: 'description', content: 'Make a reservation online' }],
    eventScripts: [
      {
        src: 'https://connect.facebook.net/en_US/fbevents.js',
        onload: () => {
          ReactPixel.track('Lead', { content_name: 'Reservation Page' });
        },
      },
    ],
  },
  '/vip': {
    title: 'VIP Room',
    metaTags: [{ name: 'description', content: 'Explore our exclusive VIP Room' }],
    eventScripts: [
      {
        src: 'https://connect.facebook.net/en_US/fbevents.js',
        onload: () => {
          ReactPixel.track('ViewContent', { content_name: 'VIP Room' });
        },
      },
    ],
  },
  '/dress-code': {
    title: 'Dress Code',
    metaTags: [{ name: 'description', content: 'Understand our Dress Code policy' }],
    eventScripts: [
      {
        src: 'https://connect.facebook.net/en_US/fbevents.js',
        onload: () => {
          ReactPixel.track('ViewContent', { content_name: 'Dress Code Page' });
        },
      },
    ],
  },
  '/parking': {
    title: 'Parking',
    metaTags: [{ name: 'description', content: 'Learn about our parking facilities' }],
    eventScripts: [
      {
        src: 'https://connect.facebook.net/en_US/fbevents.js',
        onload: () => {
          ReactPixel.track('ViewContent', { content_name: 'Parking Page' });
        },
      },
    ],
  },
  '/jobs': {
    title: 'Jobs',
    metaTags: [{ name: 'description', content: 'Explore career opportunities' }],
    eventScripts: [
      {
        src: 'https://connect.facebook.net/en_US/fbevents.js',
        onload: () => {
          ReactPixel.track('SubmitApplication', { content_name: 'Jobs Page' });
        },
      },
    ],
  },
  '/privacy-policy': {
    title: 'Privacy Policy',
    metaTags: [{ name: 'description', content: 'Read our Privacy Policy' }],
    eventScripts: [
      {
        src: 'https://connect.facebook.net/en_US/fbevents.js',
        onload: () => {
          ReactPixel.track('ViewContent', { content_name: 'Privacy Policy Page' });
        },
      },
    ],
  },
  '/terms-of-services': {
    title: 'Terms of Services',
    metaTags: [{ name: 'description', content: 'Read our Terms of Services' }],
    eventScripts: [
      {
        src: 'https://connect.facebook.net/en_US/fbevents.js',
        onload: () => {
          ReactPixel.track('ViewContent', { content_name: 'Terms of Services Page' });
        },
      },
    ],
  },
  '/accessibility': {
    title: 'Accessibility',
    metaTags: [{ name: 'description', content: 'Learn about our accessibility features' }],
    eventScripts: [
      {
        src: 'https://connect.facebook.net/en_US/fbevents.js',
        onload: () => {
          ReactPixel.track('ViewContent', { content_name: 'Accessibility Page' });
        },
      },
    ],
  },
};
