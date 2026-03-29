export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    github: string;
    liveDemo?: string;
    backendDemo?: string;
    image?: string;
    featured: boolean;
}

export interface Publication {
    id: string;
    title: string;
    url: string;
    description: string;
}

export const projects: Project[] = [
    {
        id: "pacman-game",
        title: "Pacman Game - OS Concepts",
        description: "Game applying OS concepts like multithreading, process scheduling, and memory management",
        longDescription: "Developed a Pacman Game applying OS concepts like multithreading for concurrent tasks, process scheduling to prioritize game actions, memory management to optimize resources, and IPC for syncing concurrent processes.",
        technologies: ["OS Concepts", "Multithreading", "Memory Management", "IPC"],
        github: "https://github.com/merna112/Pacman-Game---Applying-OS-Concepts",
        featured: true,
    },
    {
        id: "kubecloudai",
        title: "KubeCloudAI",
        description: "Full-stack blog platform with AI chatbot and live code editor",
        longDescription: "Designed and deployed a full-stack blog platform focused on cloud technologies and AI, built with React.js (Vite), Node.js, Express.js, and MongoDB. Features include AI-powered chatbot with text-based queries, live code editor with multi-language support (Python, JavaScript, C++, Java, CSS, HTML), nested commenting system with media uploads, JWT/OAuth 2.0 authentication, RBAC, and responsive design with 95% mobile responsiveness.",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Google Generative AI", "CodeMirror", "Tailwind CSS"],
        github: "https://github.com/merna112/KubeCloudAI",
        liveDemo: "https://kube-cloud-ai.vercel.app",
        featured: true,
    },
    {
        id: "ecommerce-microservices",
        title: "E-Commerce Microservices MVC",
        description: "Scalable microservices architecture for e-commerce platform",
        longDescription: "Complete e-commerce system built with microservices architecture following MVC pattern. Features product management, cart functionality, and order processing.",
        technologies: ["Node.js", "Express.js", "MongoDB", "Microservices", "MVC"],
        github: "https://github.com/merna112/ecommerce-microservices-mvc",
        featured: true,
    },
    {
        id: "mapty-app",
        title: "Mapty - Workout Tracking App",
        description: "Geolocation-based workout logging tool with interactive map",
        longDescription: "Mapty app is a geolocation-based workout logging tool that allows users to track running and cycling activities on an interactive map, storing data locally for persistent fitness tracking.",
        technologies: ["JavaScript", "Geolocation API", "Local Storage", "Leaflet.js"],
        github: "https://github.com/merna112/Mapty-App",
        featured: false,
    },
    {
        id: "natours",
        title: "Natours - Tour Booking Website",
        description: "Nature tour booking website with stunning visuals",
        longDescription: "Natours is a nature tour booking website offering immersive, guided outdoor experiences with stunning visuals and responsive design. Features tour listings, reviews, and booking functionality.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        github: "https://github.com/merna112/Natours-website",
        featured: false,
    },
    {
        id: "biggame",
        title: "BigGame - Board Game",
        description: "Competitive board game for two players with dynamic gameplay",
        longDescription: "BigGame is a competitive board game for two players, offering a dynamic and strategic experience similar to Ludo, with interactive gameplay mechanics.",
        technologies: ["JavaScript", "Game Development"],
        github: "https://github.com/merna112/BigGame",
        featured: false,
    },
    {
        id: "guess-number",
        title: "Guess My Number Game",
        description: "Interactive guessing game with feedback system",
        longDescription: "Guess MyNumber Game is an interactive game where players guess a randomly generated number within a range, receiving feedback to refine their guesses.",
        technologies: ["JavaScript", "DOM Manipulation"],
        github: "https://github.com/merna112/GuessMyNumberGame",
        featured: false,
    },
    {
        id: "distributed-search",
        title: "Distributed Search Engine",
        description: "Full-stack modular web search engine with TF-IDF ranking",
        longDescription: "A full-stack, modular web search engine that crawls, indexes, and ranks web content using classical information retrieval techniques. Features BFS crawler with Cheerio for content extraction, inverted index with NLP pipeline (tokenization, stopword removal, Porter Stemming), TF-IDF ranking engine, RESTful API with Express.js and MVC pattern, MongoDB backend, and React 18 + Vite frontend with paginated results. Includes separate deployed frontend and backend services.",
        technologies: ["Node.js", "Express.js", "React", "MongoDB", "Cheerio", "BFS Crawler", "TF-IDF", "NLP"],
        github: "https://github.com/merna112/Distributed-Search-Engine",
        liveDemo: "https://frontend-umber-pi-20.vercel.app",
        backendDemo: "https://backend-nine-beige-12.vercel.app",
        featured: true,
    },
    {
        id: "shop-hub",
        title: "Shop-Hub — Multi-Vendor E-Commerce Platform",
        description: "Production-ready marketplace with multi-vendor architecture and commission-based payouts",
        longDescription: "Built a production-ready marketplace from scratch using Next.js 13 (App Router), TypeScript, PostgreSQL (Supabase), and Tailwind CSS. Features multi-vendor architecture with independent vendor management, automated order splitting with commission-based payout calculations, secure authentication with Supabase Auth and Row-Level Security, full product lifecycle (listing, search/filter, cart, checkout, reviews), and real-time notifications for order updates and customer reviews.",
        technologies: ["Next.js 13", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS", "Real-time Notifications"],
        github: "https://github.com/merna112/shop-hub",
        liveDemo: "https://shop-hub-blond.vercel.app",
        featured: true,
    },
    {
        id: "digital-assets-repository",
        title: "Digital Assets Repository - Field Training Project",
        description: "AI-powered project discovery platform with semantic search and voice features",
        longDescription: "Collaborated with international team (3 Egyptian members + 2 U.S. students) to develop the Projects Assets Repository System as part of FT2 Collaboration with Virginia Tech University. Built full-stack application using Next.js frontend and Flask backend with AI-powered search pipeline supporting text, voice, and image-based semantic search. Platform enables students to upload project documents with dedicated project webpages, displays popular/recent/top-liked/top-viewed projects with tags, includes report issue feature, and enables entrepreneurs/researchers to contact project coordinators via TTO.",
        technologies: ["Next.js", "Flask", "AI Search", "Semantic Search", "Voice Search", "Image Search", "MongoDB"],
        github: "https://github.com/merna112/digital-assets-repository",
        featured: true,
    },
    {
        id: "aiops-lab",
        title: "AIOps Observability Lab",
        description: "AI-driven operations and observability platform",
        longDescription: "Laboratory for implementing AIOps solutions with focus on system observability, monitoring, and intelligent automated operations.",
        technologies: ["PHP", "Observability", "Monitoring", "AI/ML"],
        github: "https://github.com/merna112/aiops-observability-lab",
        featured: false,
    },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const publications: Publication[] = [
    {
        id: "cancer-detection-review",
        title: "Evaluating Machine Learning Techniques for Breast Cancer Detection: A Comprehensive Review",
        url: "https://mej.researchcommons.org/home/vol50/iss1/16/",
        description: "Published review paper evaluating CNN, transformers, hybrid models, preprocessing techniques, and transfer learning for breast cancer detection. Part of international capstone project achieving 2nd place in Bioengineering-Diagnostics category.",
    },
];
