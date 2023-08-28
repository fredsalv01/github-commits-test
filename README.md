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

- nodejs v16.20.0
- max_request on github api: 20 request

Para iniciar el programa en tu computadora deberas de clonarlo utilizando el siguiente commando en tu terminal

```bash
  git clone https://github.com/fredsalv01/github-commits-test.git
```

luego ingresar a la carpeta del proyecto y utilizar el siguiente comando:

```bash
  npm install
```

una vez instaladas todas las dependencias del proyecto debera de crear un archivo `.env` en la raiz del proyecto
esto con la finalidad de poder hacer una configuracion de las variables de entorno que necesita el backend, esta es la variable de entorno
y su valor

```
  BACKEND_LINK_GITHUB='https://api.github.com/repos/fredsalv01/github-commits-test/commits'
```

este valor puede cambiarse por el siguiente ejemplo:
`https://api.github.com/repos/{github_username}/{repository_name}/commits`
de forma que el termino `{github_username}` se refiere al usuario de github y el campo `{repository_name}` se refiere al nombre del repositorio
del cual desea obtener la informacion de los commits.

una vez realizado el paso anterior deberas de utilizar el comando

```bash
  npm run start
```

para que el servidor inicie el backend en nestjs.
