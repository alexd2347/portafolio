import React from "react";
import "./AboutMe.css";

import InteresesPersonales from "./intereses-personales/InteresesPersonales";
import Contacto from "../contacto/Contacto";

const skillsTecnicas = [
    {
        name: 'Java, C, C++, C#, JavaScript, Python, etc.',
        image: 'https://repository-images.githubusercontent.com/657736250/efe020c3-cfc2-41f9-be41-ad581ffc9969',
        escala: 4.8,
    },
    {
        name: 'Gestión de bases de datos (MySQL, PostgreSQL, MongoDB)',
        image: 'https://btech.id/media/images/Page/2023/07/06/postgres-2583895412',
        escala: 4.8,
    },
    {
        name: 'Administración de servidores (Windows Server, Linux)',
        image: 'https://i.pinimg.com/originals/72/23/be/7223bece47ef99ec3ed361f4a4b36433.jpg',
        escala: 4,
    },
    {
        name: 'Desarrollo de aplicaciones web (React, Angular, Next.js, etc.)',
        image: 'https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
        escala: 4.5,
    },
    {
        name: 'Desarrollo de aplicaciones móviles con Flutter',
        image: 'https://storage.googleapis.com/cms-storage-bucket/70760bf1e88b184bb1bc.png',
        escala: 3,
    },
    {
        name: 'Desarrollo de backend con Node.js y Express.js',
        image: 'https://www.muylinux.com/wp-content/uploads/2022/04/nodejs.png',
        escala: 4,
    },
    {
        name: 'Uso de servicios en la nube (AWS)',
        image: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
        escala: 4,
    },
    {
        name: 'Conocimientos en Docker',
        image: 'https://www.docker.com/wp-content/uploads/2023/08/logo-guide-logos-1.svg',
        escala: 3.5,
    },
    {
        name: 'Instalación de software y hardware de computadoras',
        image: 'https://www.creativefabrica.com/wp-content/uploads/2018/11/Hardware-Logo-by-Friendesign-Acongraphic-580x386.jpg',
        escala: 4.8,
    },
    {
        name: 'Git y control de versiones',
        image: 'https://logowik.com/content/uploads/images/git6963.jpg',
        escala: 4.5,
    },
];
const skillsBlandas = [
    {
        name: 'Nivel intermedio de inglés',
        image: 'https://uploads.turbologo.com/uploads/design/preview_image/3314989/preview_image20210302-28802-bhpzmx.png',
        escala: 2.8,
    },
    {
        name: 'Habilidades de liderazgo y gestión de equipos',
        image: 'https://media.licdn.com/dms/image/D4E12AQGlCUmu9Sq1FQ/article-cover_image-shrink_720_1280/0/1689897304653?e=2147483647&v=beta&t=XIgqQqR9J4Kowz473Oam5zvIy16nuag9VGE_X9p45j8',
        escala: 4,
    },
    {
        name: 'Habilidades de investigación y aprendizaje autónomo',
        image: 'https://www.shutterstock.com/image-vector/businessman-opening-giant-book-education-600nw-2178701625.jpg',
        escala: 4.5,
    },
];

const AboutMe = () => {
    return (
        <div className="about-me">
            Habilidades técnicas
            <div className="skills-container">
                {skillsTecnicas.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <img src={skill.image} alt={skill.name} className="skill-image" />
                        <p className="skill-name">{skill.name}</p>
                        <div className="skill-bar">
                            <div
                                className="skill-bar-fill"
                                style={{ width: `${skill.escala * 20}%` }}
                            >
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            Habilidades blandas
            <div className="skills-container">
                {skillsBlandas.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <img src={skill.image} alt={skill.name} className="skill-image" />
                        <p className="skill-name">{skill.name}</p>
                        <div className="skill-bar">
                            <div
                                className="skill-bar-fill"
                                style={{ width: `${skill.escala * 20}%` }}
                            >
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <InteresesPersonales />
            <Contacto />
        </div>

    );
}

export default AboutMe;
