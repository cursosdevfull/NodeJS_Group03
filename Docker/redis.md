# Docker SonarQube

1. Descargar la imagen de Redis

```
    docker pull redis
```

2. Crear contenedor

```
    docker run -p 6379:6379 --name redis -d redis redis-server
```

3. Instalar un cliente de Redis

```
    npm i -g redis-commander
```

4. Ejecutarlo

```
    redis-commander
```
