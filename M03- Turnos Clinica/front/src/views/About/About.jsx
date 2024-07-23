// About.jsx
import React from 'react';
import styles from './About.module.css'; // Importa los estilos

const About = () => {
    return (
        <div className={styles.container}>
            <header>
                <h1>CENTRO MEDICO</h1>
                <p>atención médica integral y de calidad para mejorar tu bienestar físico y emocional. Nuestro equipo de profesionales medianamente capacitados está comprometido a brindarte el mejor cuidado posible en un ambiente cálido y acogedor.</p>
            </header>

            <section>
                <h2>Servicios</h2>
                <ul>
                    <li>Consultas médicas generales</li>
                    <li>Especialidades médicas</li>
                    <li>Servicios de bienestar</li>
                    <li>Exámenes y pruebas diagnósticas</li>
                </ul>
            </section>

            <section>
                <h2>¿Por qué elegirnos?</h2>
                <p>porque sii!</p>
            </section>

            <section>
                <h2>Contacto</h2>
                <p>¡Contáctanos hoy mismo para programar tu próxima cita!</p>
                <address>
                    Teléfono: 123-456-789<br />
                    Dirección: Calle falsa 123<br />
                    Correo electrónico: info@centromedico.com
                </address>
            </section>
        </div>
    );
};

export default About;

