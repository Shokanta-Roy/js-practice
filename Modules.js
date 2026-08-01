// ES6 modules are how i wwrite clean, scalab;e, real=world JS
//split your code into multiple files
//each file can export things and others can import them
// makes code:  organized, reusable, scalable

/*

my-app/
│
├── public/                 # Static files (served directly)
│   ├── index.html
│   └── favicon.ico
│
├── src/                    # Main application code
│   │
│   ├── assets/             # Images, fonts, icons
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.js
│   │   ├── Card.js
│   │   └── Button.js
│   │
│   ├── pages/              # Page-level modules
│   │   ├── Home.js
│   │   ├── About.js
│   │   └── Dashboard.js
│   │
│   ├── services/           # API calls / business logic
│   │   ├── api.js
│   │   └── authService.js
│   │
│   ├── utils/              # Helper functions
│   │   ├── formatDate.js
│   │   └── math.js
│   │
│   ├── store/              # State management (optional)
│   │   └── store.js
│   │
│   ├── styles/             # Global styles
│   │   └── main.css
│   │
│   ├── config/             # App configuration
│   │   └── config.js
│   │
│   ├── App.js              # Root module
│   └── main.js             # Entry point
│
├── package.json
└── README.md

*/