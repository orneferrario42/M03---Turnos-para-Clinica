import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Importa useSelector para acceder al estado global
import styles from './NavBar.module.css'; // Importa los estilos del archivo CSS

const NavBar = () => {
    const user = useSelector(state => state.user.user); // Obtener el usuario del estado global

    return (
        <div className={styles.container}>
            <div>
                <img className={styles.logo} src="/Logo.png" alt="Logo" />
            </div>
            <div className={styles.menu}>
                <Link to="/">
                    <span>Inicio</span>
                </Link>
                {!user && (
                    <>
                        <Link to="/login">
                            <span>Inicia Sesion</span>
                        </Link>
                        <Link to="/register">
                            <span>Registrate</span>
                        </Link>
                    </>
                )}
                {user && (
                    <Link to="/mis-turnos">
                        <span>Mis Turnos</span>
                    </Link>
                )}
                <Link to="/about">
                    <span>Sobre nosotros</span>
                </Link>
                <Link to="/contacto">
                    <span>Contacto</span>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
