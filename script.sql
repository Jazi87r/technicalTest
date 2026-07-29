//HECHO EN MYSQL
create database prueba;

use prueba;

create table users (

id int primary key,
nombre varchar(100),
email varchar(100),
activo tinyint

);

create table espacios (

id int primary key,
nombre varchar(100),
tipo varchar(50),
ubicacion varchar(50),
capacidad tinyint,
habilitado tinyint

);

create table reservas(
	id int auto_increment primary key,
	fechaYhora datetime,
    descripcion varchar(300),
    user_id int,
    espacio_id int,
        constraint user_fk
foreign key (user_id) references users(id)
	on delete set null
    on update cascade,
    constraint espacio_fk
    foreign key (espacio_id) references espacios(id)
	on delete set null
    on update cascade
);

insert into users (id, nombre, email, activo) values 
(1, 'Ana Torres', 'ana.torres@empresa.com',1),
(2, 'Carlos Ramírez', 'carlos.ramirez@empresa.com',1),
(3, 'Laura Gómez', 'laura.gomez@empresa.com',1),
(4, 'Andrés Martinéz', 'anres.martinez@empresa.com',1),
(5, 'Sofía Hernández', 'sofia.hernandez@empresa.com',1),
(6, 'Miguel Rojas', 'miguel.rojas@empresa.com',1),
(7, 'Valentina Castro', 'valentina.castro@empresa.com',1),
(8, 'Daniel Vargas', 'daniel.vargas@empresa.com',0),
(9, 'Camila Moreno', 'camila.moreno@empresa.com',1),
(10, 'Felipe Sánchez', 'felipe.sanchez@empresa.com',1);

insert into espacios (id, nombre, tipo, ubicacion, capacidad, habilitado) values 
(1, 'Sala Andina', 'Sala de reuniones','Piso 2',6,1 ),
(2, 'Sala Caribe', 'Sala de reuniones','Piso 2',10,1),
(3, 'Auditorio Central', 'Auditorio','Piso 1',50,1),
(4, 'Puesto Flexible 01', 'Puesto de trabajo','Piso 3',1,1),
(5, 'Puesto Flexible 02', 'Puesto de trabajo','Piso 3',1,1),
(6, 'Laboratorio Norte', 'Laboratorio','Piso 1',12,1),
(7, 'Sala Pacífico', 'Sala de reuniones','Piso 4',8,0),
(8, 'Terraza Colaborativa', 'Espacio colaborativo','Piso 5',20,1);

insert into reservas (fechaYhora, descripcion, user_id, espacio_id) values 
('2026-10-06 13:12:00', 'mi primera comunion', 2,3),
('2026-08-02 13:12:00', 'mi boda', 4,6),
('2026-04-16 13:12:00', 'mi bautizo', 7,5);


