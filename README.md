# Sales Layer

  En este proyecto hemos usado varias tecnologías.  
  - HTML
  - SCSS / CSS
  - Bootstrap 4
  - Javascript ecmas6
  - Jquery
  - npm (node package manager para la gestión de dependencias)
  - Gulp (para automatizar tareas como la compilación de SCSS a css)
  - Git (para el control de versiones y cambios en nuestro proyecto)
  - GitHub como plataforma
 
# Algunas consideraciones:
  1. Hemos usado gulp para automatizar las tareas de compilación de los .scss. En este fichero por ejemplo hemos creado una tarea con autoprefixer para dar servicio de estilos a navegadores más antiguos.
  2. En la carpeta public/scss hay tres archivos:
      - _colors.scss donde tenemos las varibles de los colores
      - modal.scss donde tenemos los estilos de las ventanas modales PopUp de los partners
      - styles.scss donde tenemos los estilos de todo el proyecto, importando los dos anteriores a este fichero.
  3. En el archivo .gitignore tenemos las carpetas que no se han de subir a git, en este caso la carpeta node_modules
  4. Hemos usado bootstrap 4 como ayuda en la maquetación y estructura principal, así como conocimientos de css modernos mediante flexbox.
  5. Hemos usado la sintaxis de ecmas escript 6 y hemos hecho dinámica, mediante programación de javascript, la parte de partners suponiendo que la API nos devuelve un JSON con los partners asociados (Con la lista que me indicásteis).
  En el archivo custom.js situado en public/js hay mas comentarios con aclaraciones de las funciones y funcionalidad diversa del proyecto.
  6. Como aclaración final podemos comentar que sería recomendable usar babel para transpilar el código de javascrip a la version de ecmas5 (y tener soporte para navegadores antiguos) y minificarlo para que ocupe menos espacio en el servidor de producción.
  
  
  Creo que no me dejo nada.
  
  Espero este documento os sirva de ayuda para una mejor valoración de la prueba.
  
  Un saludo
  
  Aaron Lluesma
