

--Roles
INSERT INTO `colegcat_qa_system`.`roles` (`id`, `role`, `isActive`, `createdAt`, `updatedAt`) VALUES ('1', 'Administrador', '1', '2024-04-21 20:00:00', '2024-04-21 20:00:00');
INSERT INTO `colegcat_qa_system`.`roles` (`id`, `role`, `isActive`, `createdAt`, `updatedAt`) VALUES ('2', 'Acudiente', '1', '2024-04-21 20:00:00', '2024-04-21 20:00:00');
--Acudientes
INSERT INTO `colegcat_qa_system`.`acudientes` (`id`, `parentesco`, `estado`, `vive`, `tipoDocumento`, `identificacion`, `nombres`, `apellidos`, `profesion`, `dondeTrabaja`, `cargo`, `ingresoMensual`, `correoElectronico`, `direccion`, `telefono`, `celular`, `bolsillo`, `isActive`, `createdAt`) VALUES ('1', 'Padre', '1', 'si', 'CC', '1000000000', 'Acudiente', 'Tecnopac', 'Developer', 'Tecnopac', 'Senior Developer', '5000000', 'acudiente@gmai.com', 'Carrera 123', '60123123', '3000000000', '5000000', '1', '2024-04-21 20:00:00');

--Usuarios
INSERT INTO `colegcat_qa_system`.`users` (`id`, `name`, `email`, `password`, `isActive`, `createdAt`, `updatedAt`, `idRole`, `idAcudiente`) VALUES ('1', 'Acudiente Tecnopac', 'acudiente@gmai.com', '12345', '1', '2024-04-21 20:00:00', '2024-04-21 20:00:00', '1', '1');
INSERT INTO `colegcat_qa_system`.`users` (`id`, `name`, `email`, `password`, `isActive`, `createdAt`, `updatedAt`, `idRole`, `idAcudiente`) VALUES ('2', 'Admin Tecnopac', 'admin@gmail.com', '12345', '1', '2024-04-21 20:00:00', '2024-04-21 20:00:00', '1', '1');

--Grados
INSERT INTO `colegcat_qa_system`.`grades` (`id`, `description`, `isActive`, `createdAt`, `updatedAt`) VALUES ('1', '7', '1', '2024-04-21 20:00:00', '2024-04-21 20:00:00');