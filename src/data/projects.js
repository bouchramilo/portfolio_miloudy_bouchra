export const projects = [
    {
        id: 1,
        title: "SpamDetectorAI",
        description: "Développement d’un système intelligent capable de classifier automatiquement les emails en spam ou légitimes, en utilisant le traitement du langage naturel (NLP) et des modèles d’apprentissage supervisé, avec une interface Streamlit pour tester les prédictions.",
        type: ["IA"],
        technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "NLTK", "TF-IDF", "Streamlit"],
        image: "https://www.capital.fr/imgre/fit/~1~cap~2022~05~30~fecc779f-ff4c-41de-8828-b3375951e2b8.jpeg/1200x900/focusPoint/335%2C202/comment-ne-plus-recevoir-de-spams.jpg",
        githubUrl: "https://github.com/bouchramilo/SpamDetectorAI",
        demoUrl: "#"
    },
    {
        id: 2,
        title: "MoneyMind",
        description: "Développement d’une application web permettant aux utilisateurs de suivre leurs revenus, dépenses, objectifs d’épargne et souhaits, avec des alertes budgétaires et des suggestions personnalisées via l’IA. L’application gère automatiquement les salaires et dépenses récurrentes, offre un tableau de bord interactif pour les utilisateurs et un back-office pour les administrateurs, et est déployée sur un serveur Linux via AWS, Azure ou DigitalOcean.",
        type: ["Full Stack", "IA"],
        technologies: ["Laravel", "PostgreSQL", "JavaScript", "AlpineJS", "API Gemini"],
        image: "https://maghreb.simplonline.co/_next/image?url=https%3A%2F%2Fsimplonline-v3-prod.s3.eu-west-3.amazonaws.com%2Fmedia%2Fimage%2Fpng%2Fcodequiz-13-67bc77c77966b087829370.png&w=1280&q=75",
        githubUrl: "https://github.com/bouchramilo/MoneyMind",
        demoUrl: "#"
    },
    {
        id: 3,
        title: "PlateForme d'Analyse Prédictive du Football Professionnel Projet b",
        description: "Projet basé sur un modèle ETL : extraction des données (Selenium), nettoyage et transformation des données, puis chargement dans une base PostgreSQL. Création d'un dashboard Streamlit pour visualiser les performances des joueurs et équipes.",
        type: ["DATA"],
        technologies: ["Python", "Apache Spark", "ETL", "Selenium", "PostgreSQL", "Streamlit", "SQLAlchemy"],
        image: "/assets/images/projects/football.webp",
        githubUrl: "https://github.com/bouchramilo/FootData_Analytics_Modeling",
        demoUrl: "#"
    },
    {
        id: 4,
        title: "Système d'Analyse d'Images Médicales (Deep Learning)",
        description: "Projet réalisé en binôme combinant la classification de cellules leucémiques (PyTorch – GoogLeNet avec Transfer Learning) et la détection de tumeurs cérébrales (YOLOv8). Comprend la préparation des données, l'évaluation des modèles et l'intégration via Streamlit pour une utilisation interactive.",
        type: ["IA"],
        technologies: ["Python", "PyTorch", "YOLOv8", "Transfer Learning", "GoogLeNet", "Streamlit"],
        image: "/assets/images/projects/image_1.webp",
        githubUrl: "https://github.com/bouchramilo/Diagnostic-multimodal",
        demoUrl: "#"
    },
    {
        id: 5,
        title: "YouCommunity",
        description: "Plateforme communautaire complète développée avec Laravel 11 et MySQL. Permet aux utilisateurs de créer et gérer des événements communautaires, de s'inscrire à des activités locales, et d'interagir via un système de commentaires. Développé avec JavaScript et Tailwind CSS pour une interface moderne.",
        type: ["Full Stack"],
        technologies: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript", "Eloquent"],
        image: "/assets/images/projects/youcommunity.png",
        githubUrl: "https://github.com/bouchramilo/YouCommunity",
        demoUrl: "#"
    },
    {
        id: 6,
        title: "YouLogiX – Plateforme de Gestion Logistique",
        description: "YouLogiX est une plateforme backend de gestion logistique conçue pour automatiser et centraliser les opérations de livraison de colis. Elle permet la création et le suivi des colis, l’affectation aux livreurs, la gestion des statuts et la traçabilité complète des livraisons via une API REST sécurisée et documentée.",
        type: ["Full Stack"],
        technologies: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "SQLAlchemy",
            "Pydantic",
            "Docker",
            "Swagger",
            "Pytest"
        ],
        image: "https://maghreb.simplonline.co/_next/image?url=https%3A%2F%2Fsimplonline-v3-prod.s3.eu-west-3.amazonaws.com%2Fmedia%2Fimage%2Fpng%2F1767538577-695a80b73f9b3191702071.png&w=1280&q=75",
        githubUrl: "https://github.com/bouchramilo/youexpress_logistics_api",
        demoUrl: "#"
    },
    {
        id: 7,
        title: "Prédiction de l’attrition bancaire",
        description: "Développement d’un pipeline de machine learning complet pour prédire la perte de clients dans le secteur bancaire. Le projet inclut le prétraitement et l’analyse exploratoire des données avec PySpark, la gestion du déséquilibre des classes, l’entraînement et l’optimisation d’un modèle MLlib, le stockage des données prétraitées dans MongoDB, et la visualisation interactive des résultats via Streamlit pour faciliter la prise de décision.",
        type: ["DATA", "IA"],
        technologies: ["Python", "PySpark", "MLlib", "MongoDB", "Streamlit", "Pandas", "NumPy"],
        image: "https://fr.diabolocom.com/wp-content/uploads/blog_churn_fr.jpg",
        githubUrl: "https://github.com/bouchramilo/BankAttritionFlow",
        demoUrl: "#"
    },
    {
        id: 8,
        title: "LibraRy",
        description: "Plateforme de gestion de bibliothèque en ligne développée avec Laravel et MySQL. Permet la gestion des livres, des exemplaires, des clients, des emprunts et des retours. L'interface dynamique et moderne est réalisée avec HTML, CSS (Tailwind) et JavaScript. Authentification sécurisée via Laravel Sanctum et système de notifications intégré avec Laravel.",
        type: ["Full Stack"],
        technologies: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript", "Sanctum"],
        image: "/assets/images/projects/library.jpeg",
        githubUrl: "https://github.com/bouchramilo/LibraRy",
        demoUrl: "#"
    },
    {
        id: 9,
        title: "AeroStream Analytics",
        description: "AeroStream Analytics est une solution Data & IA permettant d'analyser automatiquement les avis clients des compagnies aériennes afin d'évaluer leur niveau de satisfaction. Le projet s'appuie sur des techniques de traitement du langage naturel (NLP), de Machine Learning, de streaming de données, et de visualisation temps réel.",
        type: ["DATA", "IA"],
        technologies: ["Python", "PostgreSQL", "ChromaDB", "FastAPI", "Docker", "AirFlow", "NLP"],
        image: "/assets/images/projects/AeroStream_Analytics.webp",
        githubUrl: "https://github.com/bouchramilo/AeroStream_Analytics",
        demoUrl: "#"
    },
    {
        id: 10,
        title: "News Article Classification Pipeline",
        description: "Système de classification automatique d’articles d’actualité basé sur le NLP et le Machine Learning, couvrant les catégories World, Sports, Business et Sci/Tech, avec une pipeline complète (embeddings, entraînement, évaluation) orchestrée par Airflow, stockée dans ChromaDB et déployée via Streamlit et Docker.",
        type: ["DATA", "IA"],
        technologies: ["Python", "NLTK", "Docker", "NLP", "AirFlow", "Sentence Transformers", "ChromaDB", "Streamlit"],
        image: "https://maghreb.simplonline.co/_next/image?url=https%3A%2F%2Fsimplonline-v3-prod.s3.eu-west-3.amazonaws.com%2Fmedia%2Fimage%2Fjpg%2Fa1d80612-2bf2-425d-b851-b644a6bf2cd5-6934748e87eb2314085391.jpg&w=1280&q=75",
        githubUrl: "https://github.com/bouchramilo/News_Classifier",
        demoUrl: "#"
    },
    {
        id: 11,
        title: "YouQuote",
        description: "YouQuote est une application web full stack de gestion de citations, développée avec une API REST en Laravel et un frontend en React.js, intégrant l’authentification JWT, la gestion des rôles (Admin / User), le CRUD des citations, les likes, favoris, catégories, tags, les citations aléatoires, la popularité et les soft deletes, le tout via une interface moderne et sécurisée.",
        type: ["Full Stack"],
        technologies: ["Laravel", "MySQL", "React", "JavaScript", "JWT", "Tailwind CSS"],
        image: "https://maghreb.simplonline.co/_next/image?url=https%3A%2F%2Fsimplonline-v3-prod.s3.eu-west-3.amazonaws.com%2Fmedia%2Fimage%2Fpng%2Fcodequiz-14-67ced4fb508d6163953360.png&w=1280&q=75",
        githubUrl: "https://github.com/bouchramilo/YouQuote_Frontend",
        demoUrl: "#"
    },
    {
        id: 12,
        title: "BrainScan AI",
        description: "BrainScan AI est une application intelligente développée pour analyser et classer des images IRM du cerveau afin de détecter la présence de tumeurs. Le projet vise à assister les médecins dans un diagnostic rapide et précis, en optimisant le temps de traitement et en réduisant les erreurs humaines grâce à l’IA.",
        type: ["IA"],
        technologies: ["Python", "TensorFlow", "OpenCV", "NumPy", "Streamlit", "Scikit-learn"],
        image: "https://maghreb.simplonline.co/_next/image?url=https%3A%2F%2Fsimplonline-v3-prod.s3.eu-west-3.amazonaws.com%2Fmedia%2Fimage%2Fpng%2F1760273080-68eba2d3eb8c6077510662.png&w=1280&q=75",
        githubUrl: "https://github.com/bouchramilo/BrainScan",
        demoUrl: "#"
    },
    {
        id: 13,
        title: "Système Prédictif Intelligent de Gestion Logistique",
        description: "Développement d’un pipeline ML pour optimiser les flux logistiques et la gestion des stocks en temps réel, avec PySpark, MLlib, Spark Streaming via WebSockets, FastAPI, Airflow, Docker, PostgreSQL, MongoDB et visualisation sur Streamlit.",
        type: ["IA", "DATA"],
        technologies: ["Python", "PySpark", "Spark Streaming", "Docker", "FastAPI", "Streamlit", "Airflow", "PostgreSQL", "MongoDB"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbpywMu2PfShoaP3gxPP2HqEMEjOhsr4qtg&s",
        githubUrl: "https://github.com/bouchramilo/SmartLogAI",
        demoUrl: "#"
    },
    {
        "id": 14,
        "title": "MediAssist",
        "description": "MediAssist Pro est un assistant IA basé sur une architecture RAG optimisée permettant aux laboratoires d’accéder instantanément à la documentation technique et aux guides de dépannage des équipements biomédicaux. Le système combine LangChain, LLM, vectorisation d’embeddings et recherche sémantique pour fournir des réponses précises, sourcées et actionnables. Le projet intègre une API sécurisée (JWT), un pipeline LLMOps avec MLflow, une CI/CD vers Kubernetes, ainsi qu’un monitoring complet avec Prometheus et Grafana.",
        "type": ["IA",],
        "technologies": [
            "Python", 
            "FastAPI",
            "LangChain",
            "PostgreSQL",
            "ChromaDB",
            "MLflow",
            "LLMOps", 
            "DeepEval",
            "Docker",
            "Kubernetes",
            "Prometheus",
            "Grafana",
            "JWT"
        ],
        "image": "assets/images/projects/mediassist.png",
        "githubUrl": "https://github.com/bouchramilo/MediAssist",
        "demoUrl": "#"
    }

];
