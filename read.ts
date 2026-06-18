//1._DEJAR SOLO DENTRO DEL SRC app.module y eliminar lo demas (tambien importaciones) TAMBIEN BORRAR LA REFERENCIA A CONTROLADORES EN APP.MODULE
//2._nest g res pokemon --no-spec
//3._CREAR EL ARCHIVO DOCKER COMPOSE.YAML
//4._docker-compose up -d
//5._En docker se crea un contenedor e imagen
//6._TABLE PLUS nueva conexxion mongo dg crear y ponemos solo la url que es mongobd://localhost:27017/el nombre que le pusiste en tu docker compose MONGODB_DATABASE
//7._Concetar mongoose con nest yarn add @nestjs/mongoose mongoose
//8._EN APP.MODULE PONER EL MongooseModule.forRoot Y ADENTRO LA URL que antes pusimos en table
//9._TRABAJAR EN POKEMON ENTITY es para añadir colecciones y documentos en bd
//10._IR A POKEMON MODULE E IMPORTAR
//11._EMPEZAMOS CON LAS VALIDACIONES EN CREATEPOKEMON INSTALAMAOS yarn add class-validator class-transformer y en main ts poner de manera global el app.useGlobalPipes
//12._VALIDACIONES EN EL DTO CON DECORADORES DEPENDE DE LO QUE QUIERAS EVALUAR
//13._INSETAR EN BD, CONSTRUCTOR SOLO ES PARA INYECCION DE DEPENDENCIAS EN SERVICE CONSTRUCTOR
//14._CREAR METODOS EN SERVICIO Y CONTROLADOR
//15._PIPE CREAR nest g mo common Y nest g pi common/pipes/parseMongoId --no-spec Y ya dependiendo de lo que necesites...
//16._INYECCION DE SEED... inyectar el constructor con el modelo de pokemon
//17._EN POKEMON MODULO EXPORTAMOS EL MONGOOSE MODULE
//18._IMPORTAMOS EL POKEMON MODULE EN SEED MODULE
//19._COPIAMOS LA LINEA DE CREATE DE POKEMON SERVICE Y LA PEGAMOS EN SEED SERVICE
