<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## EJECUTAR EN DESARROLLO

1.\_CLONAR EL REPOSITORIO

2.\_EJECUTAR

```
yarn install
```

3.\_TENER NEST CLI INSTALADO

```
npm i -g @nestjs/cli
```

4.\_LEVANTAR BASE DE DATOS

```
docker-compose up -d
```

5.\_CLONAR EL ARCHIVO **.ENV.TEMPLATE** Y RENOMBRAR LA COPIA A .ENV
6.\_LLENAR LAS VARIABLES DE ENTORNO DEFINIDAS CON ENV
7.\_EJECUTAR LA APLICACION EN DEV

```
yarn start:dev
```

8.\_RECONSTRUIR LA BASE DE DATOS CON LA SEMILLA

```
http://localhost:3000/api/v2/seed
```

# nest-pok
