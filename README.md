# MangaSync

Este es un proyecto llevado a cabo con el fin de practicar el desarrollo de Frontend con react así cómo lidiar con peticiones de usuarios conectando con nuestro propio backend

---

# 📚 Índice

* [✨ Funciones](#-funcionalidades)
* [🛠 Tecnologías utilizadas](#-tecnologías-utilizadas)
* [📂 Estructura general](#-estructura-general-de-la-api)
* [⚙ Instalación](#-instalación)
* [🚀 Ejecución del proyecto](#-ejecución-del-proyecto)
* [🔑 Endpoints principales](#-endpoints-principales)
* [📈 Futuras mejoras](#-futuras-mejoras)
* [👨‍💻 Autor](#-autor)

---

# 📖 Descripción

MangaSync es una página web diseñada para gestionar mangas y usuarios,permitiendo que estos puedan visitar los mangas siempre y cuando tengan una cuenta.

La aplicación permite crear cuentas de usuario, iniciar sesión de forma segura, y revisar tarjetas con información de los mangas.

El proyecto está enfocado en el desarrollo frontend utilizando React, Vite y Tailwind.

---

# ✨ Funciones

## 👤 Gestión de usuarios

* Registro de nuevos usuarios.
* Inicio de sesión.

---

## 📚 Gestión de mangas

* Buscar todos los mangas.
* Consultar información detallada de un manga.

---

# 🛠 Tecnologías utilizadas

| Tecnología        | Función                              |
| ----------------- | ------------------------------------ |
| React             | Lenguaje principal                   |
| Tailwind          | Customización de la página           |

---

# 📂 Estructura general de la Página

```text
src/
│
├── Components/
│   ├─Atoms/
│   ├─Molecules/
│   ├─Organisms/
│   ├─Templates/
│   ├─Pages/
│   ├─Context/
│   ├─Hooks/
│
├ app.jsx
├ app.css
├ index.jsx
└ index.css
```

### Descripción

* **Atoms/** → La estructura más básica de HTML, desde inputs hasta botones.
* **Molecules/** → La unión de átomos para formar estructuras mayores.
* **Organisms/** → La compilación que da como resultado elementos practicos con fin de tener que hacerlos a lo sumo una vez, por ejemplo un formulario.
* **Templates/** → Páginas básicas con la estructura elemental, totalmente polivalentes.
* **Pages/** → Templates adaptadas a cada endpoint para su uso específico.

---

# ⚙ Instalación del proyecto

## 1️⃣ Clonar el repositorio

Abre la consola de tu ordenador o bien por el comando Win + R, abriendo con click derecho en el escritorio o buscando "Terminal" en la barra de navegación. A continuación introduce este comando y pulsa Enter: 

```bash
git clone https://github.com/WEX279/manga_react.git
```

---

## 2️⃣ Acceder al directorio del proyecto

Nota: con escribir las primeras letras y tabular se autocompleta la ruta a la carpeta.

```bash
cd manga_react
```
---

## 3️⃣ Abrir el proyecto en Visual Studio Code

Instálalo desde internet o la store de tu ordenador si no lo tienes.

```bash
code .
```

---

## 4️⃣ Instalar dependencias

```bash
npm install
```

---

# 📈 Futuras mejoras


## 📚 Gestión de mangas

* Barra de búsqueda por nombre
* Filtros por género

---

## 👤 Cuenta

* Edición del perfil
* Adición de mangas a una llista de favoritos.
* Organización de mangas categorías en listas personalizadas.
* Acceso a las listav y decición de la misma.
* Eliminación de listas.

---

# 👨‍💻 Autor

Proyecto desarrollado con fines educativos para practicar:

* Desarrollo de Frontend.
* Diseño molecular.
* Conexión con Backend.
* Validación de datos.

---
