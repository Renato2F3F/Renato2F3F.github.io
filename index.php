<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- iconos -->
    <script src="https://kit.fontawesome.com/f7fb471b65.js" crossorigin="anonymous"></script>
    <!-- fuentes -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap" rel="stylesheet">
    <!-- Favicon -->
    <link rel="shortcut icon" href="favicon.ico"
    type="image/x-icon">
    <!-- Hoja de estilos -->
    <link rel="stylesheet" href="css/styles.css">
    <title>CAC-Movies</title>
</head>
<body>
    <header class="header">
        <nav class="navegacion">
            <a href="#" class="anclaLogo">
                <i class="fas fa-film" aria-hidden="true"></i>
                <span>CAC-Movies</span>
            </a>
            <ul class="listaNav">
                <li class="listaItem"><a href="#" class="linkNav">Tendencias</a></li>
                <li class="listaItem"><a href="formulario_registro.php" class="linkNav">Registrarse</a></li>
                <li class="listaItem"><a href="#" class="linkNav iniciarSesion">Iniciar Sesión</a></li>
                <li class="listaItem"><a href="contact.html" class="linkNav">Contacto</a></li>
            </ul>
        </nav>
    </header>
    <main id="main" class="main">
        <section class="sectionPrincipal">
            <h1 class="tituloPrincipal">Peliculas y series ilimitadas <br>en un solo lugar </h1>
            <h2 class="subtituloPrincipal">Disfruta donde quieras. <br>Cancela en cualquier momento.</h2>
            <a class="botonRegistrarse" href="formulario_registro.php">Registrarse</a>
        </section>
        <section class="buscadorPrincipal">
            <h2 class="tituloSection">¿Que estas buscando para ver?</h2>
            <form class="buscadorPeliculas">
                <input class="inputBuscador" type="text" placeholder="Buscar...">
                <input class="botonBuscador" type="submit" value="Buscar">
            </form>
        </section>
        <button id="llamar">LLAMAR API</button>
    <hr>
    <table width="100%">
        <thead>
            <tr>
                <th>ID</th>
                <th>email</th>
                <th>nombre</th>
                <th>apellido</th>
                <th>imagen</th>
            </tr>
        </thead>
        <tbody id="datos">
            <!-- <tr>
                <th>ID</th>
                <th>email</th>
                <th>nombre</th>
                <th>apellido</th>
                <th><img src="" alt=""></th>
            </tr> -->
        </tbody>
    </table>
    <script src="script.js"></script>
    </main>
     <footer>
        <div class="contenedor-footer">
            <a href="#" class="footer-link">Términos y condiciones</a>
            <a href="#" class="footer-link">Preguntas frecuentes</a>
            <a href="#" class="footer-link">Ayuda</a>
        </div>    
    </footer>
</body>
</html>
