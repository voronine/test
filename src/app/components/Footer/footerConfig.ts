export const footerConfig = {
    logo: 'Logo Here',
    columns: [
      {
        title: 'Reach us',
        items: [
          { icon: '/icons/phone.svg', text: '+1 012 3456 789', link: 'tel:+10123456789' },
          { icon: '/icons/email.svg', text: 'demo@gmail.com', link: 'mailto:demo@gmail.com' },
          {
            icon: '/icons/location.svg',
            text: ['132 Dartmouth Street Boston,', 'Massachusetts 02156 United States'],
            link: 'https://maps.google.com/?q=132+Dartmouth+Street+Boston+Massachusetts+02156+United+States',
          },
        ],
      },
      {
        title: 'Company',
        items: [
          { text: 'About', link: '#' },
          { text: 'Contact', link: '#' },
          { text: 'Blogs', link: '#' },
        ],
      },
      {
        title: 'Legal',
        items: [
          { text: 'Privacy Policy', link: '#' },
          { text: 'Terms & Services', link: '#' },
          { text: 'Terms of Use', link: '#' },
          { text: 'Refund Policy', link: '#' },
        ],
      },
      {
        title: 'Quick Links',
        items: [
          { text: 'Techlabz Keybox', link: '#' },
          { text: 'Downloads', link: '#' },
          { text: 'Forum', link: '#' },
        ],
      },
    ],
    newsletter: {
      title: 'Join Our Newsletter',
      description: '* Will send you weekly updates for your better tool management.',
      placeholder: 'Your email address',
      buttonText: 'Subscribe',
    },
  };
  