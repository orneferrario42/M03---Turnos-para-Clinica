import { useState } from "react";
import axios from "axios";
import styles from "./Register.module.css"; // Importa los estilos del archivo CSS
import { useSelector } from "react-redux";

const Register = () => {
  const user = useSelector(state => state.user.user); // Obtener el usuario del estado global
  const [form, setForm] = useState({
    email: "",
    username: "",
    name: "",
    password: "",
    confirmPassword: "",
    birthdate: "",
    nDni: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    name: "",
    password: "",
    confirmPassword: "",
    birthdate: "",
    nDni: "",
  });

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

    if (!form.email) {
      newErrors.email = "El email es requerido";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Ingresa un email válido";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (!form.username) {
      newErrors.username = "El nombre de usuario es requerido";
      isValid = false;
    } else {
      newErrors.username = "";
    }

    if (!form.name) {
      newErrors.name = "El nombre es requerido";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    if (!form.password) {
      newErrors.password = "La contraseña es requerida";
      isValid = false;
    } else if (form.password.length < 8 || form.password.length > 16) {
      newErrors.password =
        "La contraseña debe tener entre 8 y 16 caracteres";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
      isValid = false;
    } else {
      newErrors.confirmPassword = "";
    }

    if (!form.birthdate) {
      newErrors.birthdate = "La fecha de nacimiento es requerida";
      isValid = false;
    } else {
      newErrors.birthdate = "";
    }

    if (!form.nDni) {
      newErrors.nDni = "El DNI es requerido";
      isValid = false;
    } else if (form.nDni.length !== 8) {
      newErrors.nDni = "El DNI debe tener 8 dígitos";
      isValid = false;
    } else {
      newErrors.nDni = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Eliminar confirmPassword del objeto form antes de enviarlo
    const { confirmPassword, ...formData } = form;
    if (validateForm()) {
      axios
        .post("http://localhost:8080/users/register", formData)
        .then((response) => {
          console.log("Registro exitoso:", response.data);
          // Aquí podrías redirigir al usuario a una página de éxito o realizar otras acciones necesarias
        })
        .catch((error) => {
          console.error("Error en el registro:", error);
          // Aquí podrías manejar el error, como mostrar un mensaje al usuario
        });
    }
  };

  // Si el usuario está autenticado, no mostrar el formulario de registro
  if (user) {
    return null;
  }

  return (
    <div className={styles.formContainer}>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={errors.email && styles.inputError}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
        <label>Nombre de Usuario:</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          className={errors.username && styles.inputError}
        />
        {errors.username && <span className={styles.error}>{errors.username}</span>}
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className={errors.name && styles.inputError}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className={errors.password && styles.inputError}
        />
        {errors.password && <span className={styles.error}>{errors.password}</span>}
        <label>Confirmar Contraseña:</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          className={errors.confirmPassword && styles.inputError}
        />
        {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
        <label>Fecha de Nacimiento:</label>
        <input
          type="date"
          name="birthdate"
          value={form.birthdate}
          onChange={handleChange}
          className={errors.birthdate && styles.inputError}
        />
        {errors.birthdate && <span className={styles.error}>{errors.birthdate}</span>}
        <label>DNI:</label>
        <input
          type="text"
          name="nDni"
          value={form.nDni}
          onChange={handleChange}
          className={errors.nDni && styles.inputError}
        />
        {errors.nDni && <span className={styles.error}>{errors.nDni}</span>}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
