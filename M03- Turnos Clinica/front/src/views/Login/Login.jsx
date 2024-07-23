import { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css"; // Importa los estilos del archivo CSS
import { setUser } from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const user = useSelector(state => state.user.user); // Obtener el usuario del estado global
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!form.username) {
      newErrors.username = "El nombre de usuario es requerido";
      isValid = false;
    } else {
      newErrors.username = "";
    }

    if (!form.password) {
      newErrors.password = "La contraseña es requerida";
      isValid = false;
    } else if (form.password.length < 8 || form.password.length > 16) {
      newErrors.password = "La contraseña debe tener entre 8 y 16 caracteres";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post("http://localhost:8080/users/login", form)
        .then((response) => {
          dispatch(setUser(response.data))
          alert("Inicio de sesión exitoso");
          navigate("/")
          // Aquí podrías redirigir al usuario a una página de éxito o realizar otras acciones necesarias
        })
        .catch((error) => {
          console.error("Error en el inicio de sesión:", error);
          setLoginError("No se pudo iniciar sesión. Verifica tus credenciales.");
          // Aquí podrías manejar el error, como mostrar un mensaje al usuario
        });
    }
  };

  // Si el usuario está autenticado, no mostrar el formulario de inicio de sesión
  if (user) {
    return null;
  }

  return (
    <div className={styles.formContainer}>
      <h1>Iniciar Sesión</h1>
      {loginError && <div className={styles.error}>{loginError}</div>}
      <form onSubmit={handleSubmit}>
        <label>Nombre de Usuario:</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          className={errors.username && styles.inputError}
        />
        {errors.username && <span className={styles.error}>{errors.username}</span>}
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className={errors.password && styles.inputError}
        />
        {errors.password && <span className={styles.error}>{errors.password}</span>}
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
