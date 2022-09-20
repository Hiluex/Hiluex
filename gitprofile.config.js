// gitprofile.config.js

const config = {
  github: {
    username: 'Hiluex', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 1, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'ahmad-elabdullah-1018b9250',
    twitter: 'Hiluex',
    facebook: '',
    instagram: 'hilewx',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: 'https://arifszn.github.io',
    phone: '',
    email: 'hiluex@gmail.com',
  },
  skills: [
    'Python',
    'Java',
    'C#',
    'JavaScript',
    'HTML',
    'CSS',
  ],
  experiences: [
    {
      company: 'Oncode',
      position: 'Manager',
      from: 'August 2022',
      to: 'Present',
    },
    {
      company: 'My Offer 360 Degree',
      position: 'Web Application Developer',
      from: 'July 2019',
      to: 'August 2021',
    },
  ],
  education: [
    {
      institution: 'Currently Null',
      degree: 'Currently Null',
      from: 'Currently Null',
      to: 'Currently Null',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'forest',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
