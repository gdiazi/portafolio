import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/guillermo-díaz-iparraguirre-433801319/",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    }
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Frontend Developer",
        subtitle: "Ministerio de Educación",
        description: "Mantenimiento de los productos digitales en React, Bootstrap, JavaScript, Prisma ORM de las webapp; He hecho consultas con Graphql para manipular las API que consumen las webapp; Realicé las migraciones de los portales web a la plataforma del GOB.PE del Ministerio de Educación; He realizado la Landing prototipados de diversas páginas para presentaciones en reuniones; He realizado las páginas de Campañas con el contenido visual y multimedia en el GOB.PE; Hice las métricas de las páginas estáticas y del GOB.PE de rutas de las páginas vistas por dispositivos y vistas totales y demás dimsensiones",
        date: "Dic 2024 ",
    },
    {
        id: 2,
        title: "Programador full stack",
        subtitle: "Laureate Education, Inc.",
        description: "He realizado mantenimiento frontend de las landings page con Nuxt, React de EPE UPC; Realicé la parte Front-end del LMS, y componentes con ACF y CPT (Sistema de aprendizaje) en WordPress de Laureate; He realizado realizado con mi equipo el desarrollo de la bolsa de trabajo para UPC en Nuxt(VUE); Mantenimiento del Sistema de convalidaciones EPE realizado en PHP con el framework Cakephp; Realicé un sistema recursivo que consta de 3 niveles en un FAQ, que se genera desde el menú para un sistema interno llamado SICA en Nuxt y Directus Headless",
        date: "May 2023",
    },
    {
        id: 3,
        title: "Programador full stack",
        subtitle: "CodeForge Solutions",
        description: "Encargado de realizar el mantenimiento de el sitio web de la institución; Administración de servidores web; Desarrollo de diversos sitios internos como web apps; Diseño de prototipos para la web; Desarrollo de sistemas de registros para eventos internos de la institución: Donde los profesores de las diferentes sedes pueden ingresar las fichas de sus alumnos; Desarrollé un sistema interno: Sistema donde se registraba las competencias, los horarios, la movilidad, además de diversos reportes para el área de actividades deportivas. Fue desarrollado en PHP con POO, Bootstrap CSS, Jquery JS, base de datos en Mysql e implementado en el servidor interno Linux Ubuntu; Desarrollé un sistema interno de bolsa de trabajo para la institución: Se creo una plataforma interna donde se registraban las personas que querían pedir empleo, se hizo la interface donde se presentaban las publicaciones; Desarrollé galerías virtuales y landing page en Wordpress para los eventos de la institución; Desarrollé diversos software internos pequeños",
        date: "May 2022",
    },
   
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 15,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 25,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 100,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 10,
        text: "capacitaciones realizadas",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Ruleta - Evento Santiago Queirolo",
        image: "/queirolo.jpg",       
        urlDemo: "https://gdiazi.github.io/queirolo/",
    },
    {
        id: 2,
        title: "Sorteo de instituciones",
        image: "/sorteo.jpg",       
        urlDemo: "https://sorteo-queirolo.netlify.app",
    }
    
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];
