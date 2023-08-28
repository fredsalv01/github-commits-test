<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descripcion

En este proyecto se ha realizado una prueba tecnica la cual consistia en desarrollar un backend en Nestjs
y conectarlo con este mismo repositorio para listar los commits encontrados. Todo esto utilizando el api de Github.

En este caso el backend fue desarrollado utilizando Nestjs. Lo cual no requirio la creacion de bases de datos. Pero si la implemntacion de CORS
para la conexion entre el backend y frontend y el uso del HttpService y el HttpModule para realizar la conexion con el api de Github.

Para instalar seguir los pasos en el apartado de instalacion.

## Instalacion

Consideraciones: 
* nodejs v16.20.0
* max_request on github api: 20 request

Para iniciar el programa en tu computadora deberas de clonarlo utilizando el siguiente commando en tu terminal
```bash
  git clone https://github.com/fredsalv01/github-commits-test.git 
```

luego ingresar a la carpeta del proyecto y utilizar el siguiente comando:

```bash
  npm install
```

una vez realizado estos pasos deberas de utilizar el comando
```bash
  npm run start
```

para que el servidor inicie el backend en nestjs.


