SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- \restrict GhY6Mc5tlGXYl1jPqfdAaMx0rUXwkI02bc2AodgjsWPF0rEtfajpn9yqQYikG1Y

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '0ba77825-85dd-403f-8086-db19740de187', '{"action":"user_signedup","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2025-11-28 03:42:47.029531+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e4c30e33-0361-4f7e-acd8-c2c3946d3374', '{"action":"login","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-11-28 03:42:47.038636+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cfb1fc75-a356-4f16-bc69-d5c9bd3d2a02', '{"action":"logout","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-11-28 03:42:59.975266+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f947d665-fdc3-4325-8590-7bd4e62ad0a5', '{"action":"user_signedup","actor_id":"53798262-7c9d-4764-94e5-31e00c1790c5","actor_username":"cesar1@sgedd.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2025-11-28 03:43:17.068667+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bfa1f060-1ba1-45c8-93e8-f2dabeaa07c8', '{"action":"login","actor_id":"53798262-7c9d-4764-94e5-31e00c1790c5","actor_username":"cesar1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-11-28 03:43:17.079428+00', ''),
	('00000000-0000-0000-0000-000000000000', 'afc7ce97-5ded-493a-aaf7-8e8c6a51e70c', '{"action":"logout","actor_id":"53798262-7c9d-4764-94e5-31e00c1790c5","actor_username":"cesar1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-11-28 03:43:20.980965+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cdbceb17-e72b-436c-a212-7e4de9226227', '{"action":"user_signedup","actor_id":"1d9c6248-0cc0-4496-b8ca-1fa012fbf38e","actor_username":"diego1@sgedd.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2025-11-28 03:43:36.979819+00', ''),
	('00000000-0000-0000-0000-000000000000', '6f9c50cd-924d-44fc-912b-d0616b5173e6', '{"action":"login","actor_id":"1d9c6248-0cc0-4496-b8ca-1fa012fbf38e","actor_username":"diego1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-11-28 03:43:36.990798+00', ''),
	('00000000-0000-0000-0000-000000000000', '053e755e-ef1a-4d79-9489-d9d5030e6284', '{"action":"logout","actor_id":"1d9c6248-0cc0-4496-b8ca-1fa012fbf38e","actor_username":"diego1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-11-28 03:43:39.477166+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '1d9c6248-0cc0-4496-b8ca-1fa012fbf38e', 'authenticated', 'authenticated', 'diego1@sgedd.com', '$2a$10$azxS.YxVfX4sPQQsEcuBzuTbotYnByqjGsju4ckEQ9RdKFlcY..l6', '2025-11-28 03:43:36.980086+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-11-28 03:43:36.99158+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "1d9c6248-0cc0-4496-b8ca-1fa012fbf38e", "email": "diego1@sgedd.com", "email_verified": true, "phone_verified": false}', NULL, '2025-11-28 03:43:36.976052+00', '2025-11-28 03:43:36.99353+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', 'authenticated', 'authenticated', 'alejandro1@sgedd.com', '$2a$10$jkAMamNVz.3xuvoLSxVGAuvW7ixb3Rb.5WZKuAP/a3FLUSJvx31c.', '2025-11-28 03:42:47.029909+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-11-28 03:42:47.039356+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "748ba0b1-73d2-49ec-b48c-1f7a20df69bb", "email": "alejandro1@sgedd.com", "email_verified": true, "phone_verified": false}', NULL, '2025-11-28 03:42:47.02484+00', '2025-11-28 03:42:47.041803+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '53798262-7c9d-4764-94e5-31e00c1790c5', 'authenticated', 'authenticated', 'cesar1@sgedd.com', '$2a$10$fQttNyo9OzymuNVcaWwzW.v0a5snB30VoXyT8vUwS3BprfoiKEJKG', '2025-11-28 03:43:17.069043+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-11-28 03:43:17.080283+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "53798262-7c9d-4764-94e5-31e00c1790c5", "email": "cesar1@sgedd.com", "email_verified": true, "phone_verified": false}', NULL, '2025-11-28 03:43:17.063834+00', '2025-11-28 03:43:17.08236+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{"sub": "748ba0b1-73d2-49ec-b48c-1f7a20df69bb", "email": "alejandro1@sgedd.com", "email_verified": false, "phone_verified": false}', 'email', '2025-11-28 03:42:47.027989+00', '2025-11-28 03:42:47.028016+00', '2025-11-28 03:42:47.028016+00', 'c81c0004-14db-447d-a4b2-f8430635f7aa'),
	('53798262-7c9d-4764-94e5-31e00c1790c5', '53798262-7c9d-4764-94e5-31e00c1790c5', '{"sub": "53798262-7c9d-4764-94e5-31e00c1790c5", "email": "cesar1@sgedd.com", "email_verified": false, "phone_verified": false}', 'email', '2025-11-28 03:43:17.067216+00', '2025-11-28 03:43:17.067249+00', '2025-11-28 03:43:17.067249+00', '122088c4-a10a-4a2e-b127-6952a31b83f1'),
	('1d9c6248-0cc0-4496-b8ca-1fa012fbf38e', '1d9c6248-0cc0-4496-b8ca-1fa012fbf38e', '{"sub": "1d9c6248-0cc0-4496-b8ca-1fa012fbf38e", "email": "diego1@sgedd.com", "email_verified": false, "phone_verified": false}', 'email', '2025-11-28 03:43:36.978709+00', '2025-11-28 03:43:36.978736+00', '2025-11-28 03:43:36.978736+00', 'dc181434-fe69-4e61-93ee-656d8570bc7b');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_clients; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_authorizations; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_consents; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: docente; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."docente" ("rfc", "fecha_ingreso", "hrs_carga", "estatus_plaza", "clave_presupuestal", "departamento", "numero_afiliacion", "categoria_plaza") VALUES
	('GOMÑ920801TD8', '2008-02-14', 40, 'Base', 'PB-4021', 'Sistemas', '789456123', 'PTC'),
	('MÑLJ821102KD1', '2011-08-20', 42, 'Base', 'PB-3812', 'Industrial', '695214789', 'PTC'),
	('RMA921228TP9', '2015-09-01', 44, 'Base', 'PB-4510', 'Gestión Empresarial', '845796321', 'PTC'),
	('LOP&850407XZ4', '2006-03-10', 40, 'Base', 'PB-3308', 'Arquitectura', '695874102', 'PTC'),
	('ZULS830923ML2', '2012-07-12', 41, 'Base', 'PB-5020', 'Mecatrónica', '458793614', 'PTC'),
	('FERA990105QH6', '2018-02-05', 43, 'Base', 'PB-5112', 'Química', '891274563', 'PTC'),
	('CÑTA770916BW8', '2004-11-23', 40, 'Base', 'PB-2901', 'Administración', '478596132', 'PTC'),
	('HERA880706C9A', '2009-05-18', 45, 'Base', 'PB-3107', 'Electrónica', '897461325', 'PTC'),
	('QTRÑ760530VF5', '2001-06-12', 40, 'Base', 'PB-2109', 'Ciencias Básicas', '984756120', 'PTC');


--
-- Data for Name: actividadcomplementaria; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."actividadcomplementaria" ("actividadcomplementid", "descripcionactividad", "periodo", "noalumnos", "noalumnosconcredito", "docente_rfc") VALUES
	('ae56d278-21ec-49e0-8e1e-86f1e9c8697a', 'Participación en congreso tecnológico', '2025-A', 30, 28, 'GOMÑ920801TD8'),
	('983ad230-2d67-4bcb-9ee9-ca38e5e4e95e', 'Feria de innovación', '2025-A', 25, 22, 'MÑLJ821102KD1'),
	('92e1c817-01f0-46aa-a8c6-c9bd78249b47', 'Curso interdisciplinario', '2025-A', 20, 18, 'RMA921228TP9'),
	('8390c9bd-3daf-4415-879e-75e7ad20de49', 'Rally de ciencias', '2025-A', 15, 14, 'LOP&850407XZ4'),
	('c0818a42-3121-4e7b-998c-bd65f44fb7ed', 'Proyecto comunitario', '2025-A', 18, 17, 'ZULS830923ML2'),
	('9438b6de-5d14-4bbf-860e-fbe3564f823c', 'Taller ambiental', '2025-A', 22, 20, 'FERA990105QH6'),
	('13d35c0c-6409-41da-ac0f-5d2649e621f1', 'Simposio académico', '2025-A', 28, 25, 'CÑTA770916BW8'),
	('fd363317-cca8-4e75-b6c3-86be272106f1', 'Concurso de prototipos', '2025-A', 26, 22, 'HERA880706C9A'),
	('4b6407a3-9b24-489c-b691-69333aa8fb37', 'Olimpiada de matemáticas', '2025-A', 40, 39, 'QTRÑ760530VF5');


--
-- Data for Name: actividadesadministrativas; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."actividadesadministrativas" ("actadministrativaid", "puesto", "descripcionactividades", "unidadeshora", "docente_rfc") VALUES
	('63a7cabf-f64a-4ff0-b900-486af972fa7c', 'Coordinador de carrera', 'Gestión de cargas, seguimiento académico', 6, 'GOMÑ920801TD8'),
	('09924581-476c-487c-ad52-86e51bdeb40e', 'Jefe de laboratorio', 'Supervisión de equipo y prácticas', 4, 'MÑLJ821102KD1'),
	('3861771c-8de2-4294-b23a-97ddbdcfe3ea', 'Enlace de tutoría', 'Asignación y seguimiento de tutorados', 3, 'RMA921228TP9'),
	('1c38ae47-6e06-48b6-ae5d-c4bb02c59085', 'Responsable de aula digital', 'Administración de equipos y soporte', 4, 'LOP&850407XZ4'),
	('3464d9dc-bc54-4317-a697-e85aea50c634', 'Comité académico', 'Participación en dictámenes y evaluaciones', 3, 'ZULS830923ML2'),
	('076d2280-261e-4cc0-a6ae-fb9ee384b4b0', 'Apoyo administrativo', 'Gestión documental del departamento', 2, 'FERA990105QH6'),
	('51c694b8-ddd3-4d00-aa89-6ed06ae35c6c', 'Responsable de prácticas', 'Control de prácticas escolares', 4, 'CÑTA770916BW8'),
	('e9e0cb5c-165e-4d02-93fe-a7b789e2bc26', 'Jefe de departamento', 'Gestión operativa y académica', 8, 'HERA880706C9A'),
	('7f3f507e-4ab4-4629-a8ca-d101a2e8a574', 'Revisor académico', 'Revisión de programas y evidencias docentes', 4, 'QTRÑ760530VF5');


--
-- Data for Name: apoyoadocencia; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."apoyoadocencia" ("apoyodocid", "nombreactividad", "meta", "horas", "docente_rfc") VALUES
	('3910b988-f23e-4c7f-a31e-70b54ffbcc1f', 'Asesorías Académicas', '20 estudiantes asesorados', 6, 'GOMÑ920801TD8'),
	('898c31d8-a745-469f-b0f4-4a870fe529af', 'Diseño de material didáctico', '5 unidades de aprendizaje', 5, 'MÑLJ821102KD1'),
	('f0427cad-71c7-4080-84b2-b436a5e1c316', 'Actualización de contenidos', '3 programas actualizados', 4, 'RMA921228TP9'),
	('bf9a454f-fd88-4602-865b-e44278ca4b1f', 'Apoyo en prácticas', '10 prácticas guiadas', 4, 'LOP&850407XZ4'),
	('ec29d909-aa6b-494a-a773-78205c36c542', 'Junta de academia', 'Participación mensual', 2, 'ZULS830923ML2'),
	('c9b1e739-c01c-4a26-aae4-c43f55e9a3dd', 'Laboratorio de química', '5 prácticas actualizadas', 4, 'FERA990105QH6'),
	('8e861bff-c9cf-43ff-bf58-2cc477b6006a', 'Material administrativo', '80 documentos procesados', 3, 'CÑTA770916BW8'),
	('eb9d076f-ce47-40e6-847d-fa6024b0d3d8', 'Mantenimiento de equipos', '10 equipos revisados', 4, 'HERA880706C9A'),
	('c78a4765-0844-4e85-b3ae-606e1b3ef34c', 'Sesiones de regularización', '15 estudiantes atendidos', 5, 'QTRÑ760530VF5');


--
-- Data for Name: generador; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."generador" ("rfc") VALUES
	('GENA800101AA1'),
	('GENB800102BB2'),
	('GENC800103CC3'),
	('GEND800104DD4'),
	('GENE800105EE5');


--
-- Data for Name: tipodocumento; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tipodocumento" ("tipodocid", "nombretipo", "tipoinf", "plantillaruta", "docintegrado") VALUES
	('068fe9fd-c111-4753-be14-a101729b2748', 'Constancia docente', 'Documento que acredita la identidad del docente', '/plantillas/constancia_docente.docx', NULL),
	('5f76042e-fffe-40ab-a950-8c083839e7b0', 'Formato para el horario de actividades A', 'Documento en que especifica el horario en que se van a realizar las actividades version A', '/plantillas/formato_horario_actividades_A.docx', NULL),
	('a0473e8a-832f-4565-8a84-71a25a263930', 'Formato para el horario de actividades B', 'Documento en que especifica el horario en que se van a realizar las actividades version B', '/plantillas/formato_horario_actividades_B.docx', NULL),
	('9d1749bd-0136-4b3b-8ff4-c686fcf0a766', 'Formato para el horario de actividades C', 'Documento en que especifica el horario en que se van a realizar las actividades version C', '/plantillas/formato_horario_actividades_C.docx', NULL);


--
-- Data for Name: asignaciongenerador; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."asignaciongenerador" ("asignacionid", "nombrerol", "generador_rfc", "tipodocid") VALUES
	('4f600ee1-b9ca-4db5-9f56-af1d5263f098', 'generador', 'GENA800101AA1', '068fe9fd-c111-4753-be14-a101729b2748'),
	('ecb44144-629d-4299-a508-be6c570c1b28', 'generador', 'GENA800101AA1', '5f76042e-fffe-40ab-a950-8c083839e7b0'),
	('f8f1fb1d-1a03-49c8-80eb-82859a14104b', 'generador', 'GENA800101AA1', 'a0473e8a-832f-4565-8a84-71a25a263930'),
	('6392a4b7-1d9f-4ac2-ba20-60248a2bf53b', 'generador', 'GENA800101AA1', '9d1749bd-0136-4b3b-8ff4-c686fcf0a766'),
	('d67ffeac-1077-4795-b26b-1226fe7aae3f', 'generador', 'GENB800102BB2', '068fe9fd-c111-4753-be14-a101729b2748'),
	('a8d63531-c554-4287-9de4-083c35a06286', 'generador', 'GENB800102BB2', '5f76042e-fffe-40ab-a950-8c083839e7b0'),
	('fb2d3f7e-8c9f-4d77-b798-9f22bc0ee600', 'generador', 'GENB800102BB2', 'a0473e8a-832f-4565-8a84-71a25a263930'),
	('af89d906-bf9e-44b6-99de-83fd60c61f36', 'generador', 'GENB800102BB2', '9d1749bd-0136-4b3b-8ff4-c686fcf0a766'),
	('4ad842d4-b838-44e6-9cb5-036288f1afa9', 'generador', 'GENC800103CC3', '068fe9fd-c111-4753-be14-a101729b2748'),
	('833c7e47-7536-4887-8930-6603deb7fbd3', 'generador', 'GENC800103CC3', '5f76042e-fffe-40ab-a950-8c083839e7b0'),
	('d8999b54-72f2-4eb1-95be-6ef028040297', 'generador', 'GENC800103CC3', 'a0473e8a-832f-4565-8a84-71a25a263930'),
	('8df8bc10-99f1-4a3e-8fd6-2f29b881c9a7', 'generador', 'GENC800103CC3', '9d1749bd-0136-4b3b-8ff4-c686fcf0a766'),
	('19707ff9-a283-43cb-88b0-87f4590603f9', 'generador', 'GEND800104DD4', '068fe9fd-c111-4753-be14-a101729b2748'),
	('f1048b72-4efb-4c86-9cc6-ad568ce11f3d', 'generador', 'GEND800104DD4', '5f76042e-fffe-40ab-a950-8c083839e7b0'),
	('9570a522-d1c5-4e89-bc1c-5f3410bf8f96', 'generador', 'GEND800104DD4', 'a0473e8a-832f-4565-8a84-71a25a263930'),
	('39149a97-6f7d-476f-9660-9ab823f6282e', 'generador', 'GEND800104DD4', '9d1749bd-0136-4b3b-8ff4-c686fcf0a766'),
	('0f86c2ee-8b8f-4c20-b2a1-48d0fdd07364', 'generador', 'GENE800105EE5', '068fe9fd-c111-4753-be14-a101729b2748'),
	('02035f93-f73a-4587-9af0-6ded898682b9', 'generador', 'GENE800105EE5', '5f76042e-fffe-40ab-a950-8c083839e7b0'),
	('9a9dde8e-4aa3-4aa8-8efb-89c3732e3b6a', 'generador', 'GENE800105EE5', 'a0473e8a-832f-4565-8a84-71a25a263930'),
	('054e5e3f-a001-4cf7-82c9-2c2c140c3b7d', 'generador', 'GENE800105EE5', '9d1749bd-0136-4b3b-8ff4-c686fcf0a766');


--
-- Data for Name: materia; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."materia" ("materiaid", "clavemateria", "nombre", "creditos", "carrera") VALUES
	('89bd872a-e764-4180-8ee5-9f0d56a7b300', 'IS101', 'Programación I', 8, 'Ingeniería en Sistemas'),
	('2ebf03c0-ecff-4b06-a068-cb0822a33515', 'IS202', 'Estructura de Datos', 8, 'Ingeniería en Sistemas'),
	('b9727344-da75-4f04-b3d3-696ae3af42d5', 'IN301', 'Procesos Industriales', 7, 'Ingeniería Industrial'),
	('71818795-a389-49a9-bd94-c8fd98417b1a', 'AD110', 'Fundamentos de Administración', 6, 'Lic. en Administración'),
	('69705d46-7334-4976-a634-82b6f238eed9', 'AR205', 'Diseño Arquitectónico', 7, 'Arquitectura'),
	('d3071682-0373-4ea6-bd85-1ddb63e94f58', 'ME210', 'Sistemas de Manufactura', 8, 'Mecatrónica'),
	('5253fbd2-9b2b-4195-90fa-2c0b685f19ff', 'QU101', 'Química General', 6, 'Química'),
	('889304a7-2534-416f-a47e-18566ded9abe', 'EL303', 'Electrónica II', 7, 'Electrónica'),
	('721af641-ea34-49cd-89d4-81e453ebadfa', 'CB100', 'Cálculo Diferencial', 6, 'Ciencias Básicas'),
	('d050a797-f247-43b3-86ab-095e4b389705', 'IN205', 'Seguridad Industrial', 6, 'Ingeniería Industrial');


--
-- Data for Name: cargamaterias; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."cargamaterias" ("cargaid", "periodo", "grupo", "aula", "noalumnos", "modalidad", "materiaid", "docente_rfc") VALUES
	('6b303f62-db0a-467a-9066-ad9ec7767042', '2025-A', 'A1', 'Lab 3', 28, 'Presencial', NULL, 'GOMÑ920801TD8'),
	('c212d50e-f3b0-45e8-be64-631f6aea28c1', '2025-A', 'A2', 'Aula 12', 31, 'Presencial', NULL, 'GOMÑ920801TD8'),
	('8eeded19-5c4a-4d2a-92d2-e7dd4738efa0', '2025-A', 'I1', 'Lab 7', 26, 'Presencial', NULL, 'MÑLJ821102KD1'),
	('556eaae5-f6ec-4c2e-96a5-2b4d7a66a52c', '2025-A', 'G1', 'Aula 4', 29, 'Presencial', NULL, 'RMA921228TP9'),
	('428b1584-ed4e-4d63-83da-b8a4a62a632c', '2025-A', 'S3', 'Aula 11', 27, 'Presencial', NULL, 'LOP&850407XZ4'),
	('3acd5716-7116-4f5a-b80b-85037e76ae66', '2025-A', 'M1', 'Lab 5', 24, 'Presencial', NULL, 'ZULS830923ML2'),
	('e11b7c7e-1008-47cc-86c5-f8e019abb988', '2025-A', 'Q2', 'Lab Q1', 22, 'Presencial', NULL, 'FERA990105QH6'),
	('85b32d0c-adff-410c-8af5-667c7b446496', '2025-A', 'A3', 'Aula 14', 30, 'Presencial', NULL, 'CÑTA770916BW8'),
	('03d3121a-3adb-4280-9f20-59cb51c884b9', '2025-A', 'E1', 'Lab E2', 26, 'Presencial', NULL, 'HERA880706C9A'),
	('93d03ad3-8834-445a-abd9-7f72b40f592d', '2025-A', 'CB1', 'Aula 5', 33, 'Presencial', NULL, 'QTRÑ760530VF5');


--
-- Data for Name: convocatoria; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."convocatoria" ("convocatoriaid", "nombreconvocatoria", "fechainicio", "fechafin") VALUES
	('c92e81b8-60c4-4656-8d77-008a5059c8e5', 'Convocatoria Semestral 2025-2', '2025-06-06', '2025-10-17');


--
-- Data for Name: curriculum; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."curriculum" ("noderegistro", "fechaactualizacion", "docente_rfc") VALUES
	('c2611c72-7980-4fdd-960b-eceedefe579e', '2024-10-01', 'GOMÑ920801TD8'),
	('50f770ae-c20e-4be2-82b4-b49b96bedf0b', '2024-11-12', 'MÑLJ821102KD1'),
	('84bef2c5-5c68-4752-9d8e-3764c2c38554', '2025-01-20', 'RMA921228TP9'),
	('cd11cad6-3060-4971-8d53-245c0def7c94', '2024-09-15', 'LOP&850407XZ4'),
	('1048b86d-734c-4bc5-9196-b5595ab4a291', '2024-12-02', 'ZULS830923ML2'),
	('6b9f9ce7-a54e-4159-b1db-06b766cfc0ca', '2024-08-27', 'FERA990105QH6'),
	('d69214a6-6988-4e2b-b680-5d63729e6f07', '2025-02-10', 'CÑTA770916BW8'),
	('72b2c90b-9fb4-4554-b2c8-28323f601ad6', '2024-10-22', 'HERA880706C9A'),
	('65ff36c7-e245-454a-b5d0-e7ae07476228', '2024-09-30', 'QTRÑ760530VF5');


--
-- Data for Name: expediente; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."expediente" ("expedienteid", "fechacreacion", "estado", "convocatoriaid", "docente_rfc") VALUES
	('4ea98a9f-4fa0-45cd-8b3a-ca16ea885489', '2025-06-07', 'ABIERTO', 'c92e81b8-60c4-4656-8d77-008a5059c8e5', 'GOMÑ920801TD8'),
	('7dd679bb-1d27-4b2d-9d5b-830d8b858b78', '2025-06-07', 'ABIERTO', 'c92e81b8-60c4-4656-8d77-008a5059c8e5', 'MÑLJ821102KD1'),
	('a64350ee-b8c5-4829-8ca8-8c27278ebb9a', '2025-06-07', 'ABIERTO', 'c92e81b8-60c4-4656-8d77-008a5059c8e5', 'RMA921228TP9'),
	('6724fd69-72bc-4ec5-b43d-c73ce127ff60', '2025-06-07', 'ABIERTO', 'c92e81b8-60c4-4656-8d77-008a5059c8e5', 'LOP&850407XZ4'),
	('06192453-999d-487c-bb5b-76db5dc08236', '2025-06-07', 'ABIERTO', 'c92e81b8-60c4-4656-8d77-008a5059c8e5', 'ZULS830923ML2'),
	('a04b0625-7a49-48ec-986f-a25e67af86fc', '2025-06-07', 'ABIERTO', 'c92e81b8-60c4-4656-8d77-008a5059c8e5', 'FERA990105QH6'),
	('6ac0d58c-7933-40b2-84ed-bdfaba796108', '2025-06-07', 'ABIERTO', 'c92e81b8-60c4-4656-8d77-008a5059c8e5', 'CÑTA770916BW8'),
	('f8d95b2c-3ec6-4830-9c59-8f4efc356ed6', '2025-06-07', 'ABIERTO', 'c92e81b8-60c4-4656-8d77-008a5059c8e5', 'HERA880706C9A'),
	('ef2e4960-5f67-4804-a7ea-bf2c61ec5112', '2025-06-07', 'ABIERTO', 'c92e81b8-60c4-4656-8d77-008a5059c8e5', 'QTRÑ760530VF5');


--
-- Data for Name: documento; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: documentoinfoextra; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: estrategiadidactica; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."estrategiadidactica" ("estrategiadidactid", "descripcionestrategia", "materiaid", "docente_rfc") VALUES
	('ffba5cc4-6ff7-4287-999b-8c98e9281fd6', 'Aprendizaje basado en proyectos', NULL, 'GOMÑ920801TD8'),
	('6282725d-041d-4713-92d4-95e2e43e65d7', 'Método de casos', NULL, 'GOMÑ920801TD8'),
	('a969c1fe-9824-4501-b7c6-aea178e1b532', 'Laboratorios guiados', NULL, 'MÑLJ821102KD1'),
	('1bbe466f-dcd3-4fbc-9364-f418208d4675', 'Simulación industrial', NULL, 'MÑLJ821102KD1'),
	('44b73ff2-7b83-4cfd-a578-8e5299129eed', 'Investigación aplicada', NULL, 'RMA921228TP9'),
	('33987e1d-4564-4490-bdca-d3a1a68f06ed', 'Prácticas en campo', NULL, 'LOP&850407XZ4'),
	('29a2eab0-c78d-4ee1-91a2-165288e3daa5', 'Resolución de problemas', NULL, 'ZULS830923ML2'),
	('3f6b4961-a82f-48fc-8f58-bf9835c5d8d9', 'Tutoría personalizada', NULL, 'FERA990105QH6'),
	('bda401c2-f631-45b8-b530-416902fca7b3', 'Clases invertidas', NULL, 'CÑTA770916BW8'),
	('ea6745ab-6afb-4987-9624-b53f03e8dc98', 'Laboratorio avanzado', NULL, 'HERA880706C9A'),
	('b334b969-3a43-4930-b4ac-f084fda3890c', 'Modelado matemático', NULL, 'QTRÑ760530VF5');


--
-- Data for Name: eventogeneracion; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: revisor; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."revisor" ("rfc") VALUES
	('REV900101AA1'),
	('REV900102BB2'),
	('REV900103CC3'),
	('REV900104DD4'),
	('REV900105EE5');


--
-- Data for Name: eventovistobueno; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: programa; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."programa" ("programaid", "periodovalidez", "docente_rfc") VALUES
	('84faeba3-4a0d-4b55-92ba-a34e2a63d8ab', '2025-A', 'GOMÑ920801TD8'),
	('11ed850b-eb93-4d1e-b285-b4634d77e8ef', '2025-A', 'MÑLJ821102KD1'),
	('efb4f27f-c69c-4e60-9eed-e189bcfbf0e8', '2024-B', 'RMA921228TP9'),
	('086a5f60-6138-42b5-86c0-8a5fd85ecd38', '2025-A', 'LOP&850407XZ4'),
	('2ff17143-f457-4808-9500-6d108e25f294', '2024-B', 'ZULS830923ML2'),
	('8387d544-3d19-495f-9d01-2f09947e30a7', '2025-A', 'FERA990105QH6'),
	('ed858804-c5ed-4b58-a58f-c25509b2a4bd', '2024-B', 'CÑTA770916BW8'),
	('6dbb1c50-525c-4e4d-be34-9b834edd26d3', '2025-A', 'HERA880706C9A'),
	('e4d246e7-fec9-4f30-b51d-fa099f014294', '2025-A', 'QTRÑ760530VF5');


--
-- Data for Name: recursoeducativo; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."recursoeducativo" ("recursoeduid", "semestreelaboracion", "programaeducativo", "materialid", "docente_rfc") VALUES
	('46a5ea11-8b52-4654-9c3d-1d52fb377bb8', '2025-1', 'Ingeniería en Sistemas', NULL, 'GOMÑ920801TD8'),
	('68ff2b17-fef1-4401-aa99-91775f723b7f', '2024-2', 'Ingeniería Industrial', NULL, 'MÑLJ821102KD1'),
	('8217ef95-8fff-4fe3-8073-03c71649da5c', '2025-1', 'Lic. en Administración', NULL, 'RMA921228TP9'),
	('f6281907-0ef3-49f9-94db-c4c86eb1be28', '2024-2', 'Arquitectura', NULL, 'LOP&850407XZ4'),
	('7f68b31b-3260-4f52-9bd7-60dfa164b5e3', '2025-1', 'Mecatrónica', NULL, 'ZULS830923ML2'),
	('86ddf5ae-6bd8-41e2-9bf3-dffd66044132', '2024-2', 'Química', NULL, 'FERA990105QH6'),
	('50940e1c-fe5d-4839-974a-0fea7d4de027', '2025-1', 'Contaduría', NULL, 'CÑTA770916BW8'),
	('a1e89f76-cbc9-488f-a4c7-910d56406e08', '2024-2', 'Electrónica', NULL, 'HERA880706C9A'),
	('3cbb593d-75a3-48f9-90a7-ab6e13f40d4b', '2025-1', 'Ciencias Básicas', NULL, 'QTRÑ760530VF5');


--
-- Data for Name: tutores; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tutores" ("tutoriaid", "periodo", "notutorados", "carreratutorados", "docente_rfc") VALUES
	('2454746e-1afb-42ff-9d94-9fe5d03ef3c0', '2025-A', 12, 'Sistemas', 'GOMÑ920801TD8'),
	('66e191d7-5270-47be-8401-82f4671466ae', '2025-A', 10, 'Industrial', 'MÑLJ821102KD1'),
	('afaffbf9-3628-43d9-a3a0-8b6a476833d8', '2025-A', 9, 'Administración', 'RMA921228TP9'),
	('217eb364-2a61-45f1-8930-6efe94a88e05', '2025-A', 8, 'Arquitectura', 'LOP&850407XZ4'),
	('cda613ca-cd80-4f98-951a-ac0fd109fa6f', '2025-A', 11, 'Mecatrónica', 'ZULS830923ML2'),
	('fd627caa-6c5d-4e67-aea8-74b3ae42cebf', '2025-A', 13, 'Química', 'FERA990105QH6'),
	('7d988ef5-e834-488c-9747-b2ce95bfd901', '2025-A', 12, 'Contaduría', 'CÑTA770916BW8'),
	('130cf6a5-ee5a-4478-9de1-85055cb6c95e', '2025-A', 14, 'Electrónica', 'HERA880706C9A'),
	('102f843b-3d75-45a8-9fd2-7f43a0d85ead', '2025-A', 9, 'Ciencias Básicas', 'QTRÑ760530VF5');


--
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."usuarios" ("id", "rol", "nombre", "ap_pat", "ap_mat", "puesto", "supabase_user", "docente_rfc", "generador_rfc", "revisor_rfc") VALUES
	('a23d0701-0502-4b3a-b355-efe4c8ce9f04', 'generador', 'Bruno', 'Méndez', 'Paz', 'Capturista', NULL, NULL, 'GENB800102BB2', NULL),
	('bd949366-d2e4-480b-b61d-c51ea82cfdc6', 'generador', 'Celia', 'Ramírez', 'Solís', 'Capturista', NULL, NULL, 'GENC800103CC3', NULL),
	('44e4c1d3-db35-4f9e-9443-5ace7fff70c7', 'generador', 'Diego', 'Torres', 'Vega', 'Capturista', NULL, NULL, 'GEND800104DD4', NULL),
	('011fc7ed-9c1b-44f3-a232-1dfa8f57394c', 'generador', 'Elisa', 'Hernández', 'Mora', 'Capturista', NULL, NULL, 'GENE800105EE5', NULL),
	('a6af43d0-1e16-4e41-8a5f-c9573eb3c634', 'revisor', 'Beatriz', 'López', 'Cano', 'Revisor Académico', NULL, NULL, NULL, 'REV900102BB2'),
	('3046f707-f40d-4acb-b9c4-bb3184f792e9', 'revisor', 'César', 'Martínez', 'Ortiz', 'Revisor Académico', NULL, NULL, NULL, 'REV900103CC3'),
	('d0930d29-b31d-4676-a20e-cc5e1462e3a9', 'revisor', 'Daniela', 'Flores', 'Nava', 'Revisor Académico', NULL, NULL, NULL, 'REV900104DD4'),
	('d41c9d4f-c0f3-417b-90e5-0816c377db7f', 'revisor', 'Esteban', 'Reyes', 'Ochoa', 'Revisor Académico', NULL, NULL, NULL, 'REV900105EE5'),
	('b34567d0-2c2b-4b7a-9fac-19ff366e931a', 'docente', 'Gerardo', 'Gómez', 'Ñuñez', 'Profesor de Tiempo Completo', NULL, 'GOMÑ920801TD8', NULL, NULL),
	('d8291555-5545-4ae0-8502-eeec4ae86c18', 'docente', 'María', 'Muñoz', 'López', 'Profesor de Tiempo Completo', NULL, 'MÑLJ821102KD1', NULL, NULL),
	('9125e214-f8f0-4a22-8b3b-3bce1a0d1e48', 'docente', 'Ricardo', 'Martínez', 'Aguilar', 'Profesor de Tiempo Completo', NULL, 'RMA921228TP9', NULL, NULL),
	('ef3542f7-c53d-4fef-a19a-ea42b9c1ca61', 'docente', 'Lorena', 'López', 'Andrade', 'Profesor de Tiempo Completo', NULL, 'LOP&850407XZ4', NULL, NULL),
	('0f8c5a9c-a979-4aea-9037-a4739b7158a8', 'docente', 'Fernando', 'Rentería', 'Alonso', 'Profesor de Tiempo Completo', NULL, 'FERA990105QH6', NULL, NULL),
	('e36d45de-a776-4977-abac-279cac28bc39', 'docente', 'Cynthia', 'Ñolasco', 'Tavares', 'Profesor de Tiempo Completo', NULL, 'CÑTA770916BW8', NULL, NULL),
	('1a078d60-61ae-4c50-96ed-7a39daf7bd4e', 'docente', 'Héctor', 'Hernández', 'Ramírez', 'Profesor de Tiempo Completo', NULL, 'HERA880706C9A', NULL, NULL),
	('9cd11827-9b0b-4475-bac4-d64323f54daa', 'docente', 'Quetzal', 'Trujillo', 'Ñanco', 'Profesor de Tiempo Completo', NULL, 'QTRÑ760530VF5', NULL, NULL),
	('c7b3cb2d-03d8-4464-8dcf-fbe0f9b50935', 'docente', 'Zulema', 'Santos', 'Lara', 'Profesor de Tiempo Completo', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', 'ZULS830923ML2', NULL, NULL),
	('384d9b4d-28c5-441a-9c17-cad7b4187224', 'generador', 'Ana', 'Gómez', 'Luna', 'Capturista', '53798262-7c9d-4764-94e5-31e00c1790c5', NULL, 'GENA800101AA1', NULL),
	('a2c573eb-1148-45e8-8e33-1ecd92167c06', 'revisor', 'Arturo', 'Santos', 'Ríos', 'Revisor Académico', '1d9c6248-0cc0-4496-b8ca-1fa012fbf38e', NULL, NULL, 'REV900101AA1');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: buckets_analytics; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: buckets_vectors; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: iceberg_namespaces; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: iceberg_tables; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: prefixes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: vector_indexes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 3, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

-- \unrestrict GhY6Mc5tlGXYl1jPqfdAaMx0rUXwkI02bc2AodgjsWPF0rEtfajpn9yqQYikG1Y

RESET ALL;
