# Docker SonarQube

1. Descargar la imagen de SonarQube

```
    docker pull sonarqube
```

2. Crear contenedor

```
    docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube
```

3. Login
   http://localhost:9000
   usuario: admin
   contraseña: admin
