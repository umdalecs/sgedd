SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- \restrict b3eUhbq0enJvuQDtYEVeXDcYF79mD6K1ZkVnd2tbug7ilMMvsKLOCfgyVWfH3Z5

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
	('00000000-0000-0000-0000-000000000000', '7b7836cf-948e-4e6e-a44a-26994385f3c1', '{"action":"user_signedup","actor_id":"67995a19-ee54-4794-aeef-14429b700222","actor_username":"cesar1@sgedd.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2025-11-28 02:51:34.071189+00', ''),
	('00000000-0000-0000-0000-000000000000', '475b0d2b-8c7a-4ae4-8ca7-773a25388450', '{"action":"login","actor_id":"67995a19-ee54-4794-aeef-14429b700222","actor_username":"cesar1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-11-28 02:51:34.082842+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '67995a19-ee54-4794-aeef-14429b700222', 'authenticated', 'authenticated', 'cesar1@sgedd.com', '$2a$10$XRE.WR1mRXCUBYtkH69IBe.nItoXTpbQpWNoUbLRX3FOTkIlc.Obe', '2025-11-28 02:51:34.071638+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-11-28 02:51:34.083754+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "67995a19-ee54-4794-aeef-14429b700222", "email": "cesar1@sgedd.com", "email_verified": true, "phone_verified": false}', NULL, '2025-11-28 02:51:34.06601+00', '2025-11-28 02:51:34.086675+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('67995a19-ee54-4794-aeef-14429b700222', '67995a19-ee54-4794-aeef-14429b700222', '{"sub": "67995a19-ee54-4794-aeef-14429b700222", "email": "cesar1@sgedd.com", "email_verified": false, "phone_verified": false}', 'email', '2025-11-28 02:51:34.069304+00', '2025-11-28 02:51:34.069331+00', '2025-11-28 02:51:34.069331+00', '379e604a-fd13-41da-a1f1-e5dec12a962d');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_clients; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag", "oauth_client_id", "refresh_token_hmac_key", "refresh_token_counter", "scopes") VALUES
	('f582918d-f003-42f6-8a4e-79c80f0143e0', '67995a19-ee54-4794-aeef-14429b700222', '2025-11-28 02:51:34.083856+00', '2025-11-28 02:51:34.083856+00', NULL, 'aal1', NULL, NULL, 'node', '172.18.0.1', NULL, NULL, NULL, NULL, NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('f582918d-f003-42f6-8a4e-79c80f0143e0', '2025-11-28 02:51:34.087019+00', '2025-11-28 02:51:34.087019+00', 'password', '0ff6ff41-41aa-42ac-bbac-8841162ebe6d');


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

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 1, 'qifkv2xnq2zd', '67995a19-ee54-4794-aeef-14429b700222', false, '2025-11-28 02:51:34.085693+00', '2025-11-28 02:51:34.085693+00', NULL, 'f582918d-f003-42f6-8a4e-79c80f0143e0');


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
	('QTRÑ760530VF5', '2001-06-12', 40, 'Base', 'PB-2109', 'Ciencias Básicas', '984756120', 'PTC'),
	('LEÑH900716TP9', '2016-09-05', 28, 'Interino', 'PI-1120', 'Sistemas', '589621470', 'Asignatura'),
	('SUÑM930927WL2', '2020-01-17', 18, 'Interino', 'PI-1502', 'Industrial', '769845210', 'Asignatura'),
	('TORJ950724QR4', '2019-04-10', 16, 'Interino', 'PI-1333', 'Mecatrónica', '948512370', 'Asignatura'),
	('ÑEZM910211PA7', '2017-02-01', 30, 'Interino', 'PI-1470', 'Electrónica', '698745132', 'Asignatura'),
	('GARM990926TT5', '2018-08-14', 20, 'Media Jornada', 'MJ-2031', 'Ciencias Básicas', '785412963', 'Medio Tiempo'),
	('PERR920504SJ0', '2010-03-22', 37, 'Base', 'PB-3904', 'Industrial', '879654213', 'PTC'),
	('BENÑ870821VG2', '2007-09-11', 32, 'Base', 'PB-3018', 'Administración', '456987321', 'PTC');


--
-- Data for Name: actividadcomplementaria; Type: TABLE DATA; Schema: public; Owner: supabase_admin
--

INSERT INTO "public"."actividadcomplementaria" ("actividadcomplementid", "descripcionactividad", "periodo", "noalumnos", "noalumnosconcredito", "docente_rfc") VALUES
	('3f784591-fce3-4c94-97aa-5dc2f5fe0bdc', 'Participación en congreso tecnológico', '2025-A', 30, 28, 'GOMÑ920801TD8'),
	('5fc5e229-9f7d-4241-b48b-c7470045f64a', 'Feria de innovación', '2025-A', 25, 22, 'MÑLJ821102KD1'),
	('03bf4f6a-4a92-46c5-a393-f53340cfee42', 'Curso interdisciplinario', '2025-A', 20, 18, 'RMA921228TP9'),
	('a0f6a80f-2694-4cfc-9ea4-3dff5d9563bf', 'Rally de ciencias', '2025-A', 15, 14, 'LOP&850407XZ4'),
	('f22e9b82-fa94-4c4e-bf57-e5cdf4014866', 'Proyecto comunitario', '2025-A', 18, 17, 'ZULS830923ML2'),
	('ee0eb27c-eea4-4352-8568-cfd0c99c386d', 'Taller ambiental', '2025-A', 22, 20, 'FERA990105QH6'),
	('6eadb4fb-720f-4de6-9c6b-4384e10167cd', 'Simposio académico', '2025-A', 28, 25, 'CÑTA770916BW8'),
	('f43eb754-95b3-42e6-9873-cf9bdcd400a6', 'Concurso de prototipos', '2025-A', 26, 22, 'HERA880706C9A'),
	('7c4a7f0d-c6ab-4426-b0fe-85708068aae1', 'Olimpiada de matemáticas', '2025-A', 40, 39, 'QTRÑ760530VF5'),
	('313798c0-cd07-469b-ad0f-3c04f7be4b4c', 'Evento cultural', '2025-A', 12, 10, 'LEÑH900716TP9'),
	('5d72c982-864f-4edf-83fb-5225375d131a', 'Taller de liderazgo', '2025-A', 10, 9, 'SUÑM930927WL2'),
	('dbb3f1f0-382d-486f-8ce7-66ebb9558f7a', 'Actividad extracurricular', '2025-A', 8, 8, 'TORJ950724QR4'),
	('2893377d-c5b0-4039-8741-6970b7a8631e', 'Semana académica', '2025-A', 14, 13, 'ÑEZM910211PA7'),
	('fa33e3f0-8523-4b98-9f65-9d81214465fe', 'Cine-debate', '2025-A', 11, 10, 'GARM990926TT5'),
	('b479b726-cd3c-4a3b-8e8d-4242ae50af97', 'Cursos de apoyo', '2025-A', 16, 15, 'PERR920504SJ0'),
	('c648e017-aabf-46df-95b7-c6bd09a10f70', 'Festival educativo', '2025-A', 19, 17, 'BENÑ870821VG2');


--
-- Data for Name: actividadesadministrativas; Type: TABLE DATA; Schema: public; Owner: supabase_admin
--

INSERT INTO "public"."actividadesadministrativas" ("actadministrativaid", "puesto", "descripcionactividades", "unidadeshora", "docente_rfc") VALUES
	('92a3d554-80cd-4a01-b382-e86bcc0c0c80', 'Coordinador de carrera', 'Gestión de cargas, seguimiento académico', 6, 'GOMÑ920801TD8'),
	('cf5c94d7-0191-4adb-9384-0a2b18f38262', 'Jefe de laboratorio', 'Supervisión de equipo y prácticas', 4, 'MÑLJ821102KD1'),
	('fbae1569-3bb6-42d4-abb2-d5097161e644', 'Enlace de tutoría', 'Asignación y seguimiento de tutorados', 3, 'RMA921228TP9'),
	('591ca8b2-f698-4810-9d70-3b95244e0d56', 'Responsable de aula digital', 'Administración de equipos y soporte', 4, 'LOP&850407XZ4'),
	('72b35aff-66fc-4204-8af7-734816ccf730', 'Comité académico', 'Participación en dictámenes y evaluaciones', 3, 'ZULS830923ML2'),
	('3751c050-c206-41a0-a5fb-3b1b53d4b6e0', 'Apoyo administrativo', 'Gestión documental del departamento', 2, 'FERA990105QH6'),
	('c3e34d82-c3d6-485b-9a4a-7065c7b5fbd6', 'Responsable de prácticas', 'Control de prácticas escolares', 4, 'CÑTA770916BW8'),
	('59fdfc51-9827-4f70-b13a-0d55f6a0b830', 'Jefe de departamento', 'Gestión operativa y académica', 8, 'HERA880706C9A'),
	('87764fd3-8c1e-462d-9b3a-e4b714eaa8be', 'Revisor académico', 'Revisión de programas y evidencias docentes', 4, 'QTRÑ760530VF5'),
	('4296d395-bf21-4cab-bb91-40f767af9d4e', 'Auxiliar administrativo', 'Archivo y apoyo en procesos', 2, 'LEÑH900716TP9'),
	('554dc565-7db0-489e-8267-10dac32d9a79', 'Apoyo académico', 'Seguimiento de alumnos', 2, 'SUÑM930927WL2'),
	('87eaf8da-4ba9-4436-ac10-78dee346309e', 'Capturista', 'Ingreso de datos académicos', 1, 'TORJ950724QR4'),
	('56059566-a7ac-4d89-a49b-48a3b7a7ffe0', 'Control escolar', 'Procesos de reinscripción', 2, 'ÑEZM910211PA7'),
	('55f9c716-24b5-4aa1-816d-a5aa2d67a48f', 'Apoyo de biblioteca', 'Organización y gestión de recursos', 2, 'GARM990926TT5'),
	('f167d58b-ebed-4c88-8d00-153999fbe76d', 'Apoyo administrativo', 'Atención al alumnado', 2, 'PERR920504SJ0'),
	('28b69043-3b55-438c-8fb4-3040bd32b7f7', 'Apoyo académico', 'Supervisión de asistencias', 2, 'BENÑ870821VG2');


--
-- Data for Name: apoyoadocencia; Type: TABLE DATA; Schema: public; Owner: supabase_admin
--

INSERT INTO "public"."apoyoadocencia" ("apoyodocid", "nombreactividad", "meta", "horas", "docente_rfc") VALUES
	('ccab1de9-5ae5-4fc7-841d-14b5df7d0185', 'Asesorías Académicas', '20 estudiantes asesorados', 6, 'GOMÑ920801TD8'),
	('0c96cd91-b743-47cc-97b3-c2b2d6fa1bef', 'Diseño de material didáctico', '5 unidades de aprendizaje', 5, 'MÑLJ821102KD1'),
	('4eaa6dd8-d332-47bd-9cd4-77c672e4b08c', 'Actualización de contenidos', '3 programas actualizados', 4, 'RMA921228TP9'),
	('3089fbcd-816f-4503-8015-34d7e4d2b1ce', 'Apoyo en prácticas', '10 prácticas guiadas', 4, 'LOP&850407XZ4'),
	('c4afc7fe-88ee-45d8-924c-fbf45cf32328', 'Junta de academia', 'Participación mensual', 2, 'ZULS830923ML2'),
	('7021c06a-160f-4134-8ea4-d0bf3749e107', 'Laboratorio de química', '5 prácticas actualizadas', 4, 'FERA990105QH6'),
	('8ab93221-7318-40a5-9ddd-205cd1b4484f', 'Material administrativo', '80 documentos procesados', 3, 'CÑTA770916BW8'),
	('b15f5cb6-30da-44ce-902d-dd008e8292e3', 'Mantenimiento de equipos', '10 equipos revisados', 4, 'HERA880706C9A'),
	('bccb7104-b4a1-4ead-b660-3d067b2d08d9', 'Sesiones de regularización', '15 estudiantes atendidos', 5, 'QTRÑ760530VF5'),
	('a4888cfc-6270-401f-9a7c-866f687029f8', 'Sesiones de reforzamiento', '10 estudiantes', 2, 'LEÑH900716TP9'),
	('1f242cae-91b9-4c9b-a9cd-6a37e772b427', 'Asesorías básicas', '5 estudiantes', 2, 'SUÑM930927WL2'),
	('535aa784-c8a5-4947-9aa9-9155dd3eadec', 'Elaboración de guías', '3 guías', 1, 'TORJ950724QR4'),
	('b258a391-1c22-4411-985a-1995aeffa4a0', 'Material digital', '2 recursos', 1, 'ÑEZM910211PA7'),
	('23f01071-179d-478f-831a-5991204e599e', 'Actividades de apoyo', '5 tareas revisadas', 2, 'GARM990926TT5'),
	('cb4a6251-f876-4f1e-8db6-e1cdb10599b0', 'Revisión de actividades', '10 evidencias', 2, 'PERR920504SJ0'),
	('c05de2e5-0566-41ea-8c0c-06f6899e6591', 'Material de consulta', '3 documentos', 2, 'BENÑ870821VG2');


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
-- Data for Name: tipodocumento; Type: TABLE DATA; Schema: public; Owner: supabase_admin
--

INSERT INTO "public"."tipodocumento" ("tipodocid", "nombretipo", "tipoinf", "plantillaruta", "docintegrado") VALUES
	('5517c438-93a5-4ed4-b6fc-4fa8046c4577', 'Constancia docente', 'Documento que acredita la identidad del docente', '/plantillas/constancia_docente.docx', NULL),
	('0fd2c438-92ec-4571-b195-baa77223c63a', 'Formato para el horario de actividades A', 'Documento en que especifica el horario en que se van a realizar las actividades version A', '/plantillas/formato_horario_actividades_A.docx', NULL),
	('1a3f1214-09a7-4531-a636-41bbedf000d4', 'Formato para el horario de actividades B', 'Documento en que especifica el horario en que se van a realizar las actividades version B', '/plantillas/formato_horario_actividades_B.docx', NULL),
	('a62a558a-3fd6-4c66-90e7-e6b8d12767ee', 'Formato para el horario de actividades C', 'Documento en que especifica el horario en que se van a realizar las actividades version C', '/plantillas/formato_horario_actividades_C.docx', NULL);


--
-- Data for Name: asignaciongenerador; Type: TABLE DATA; Schema: public; Owner: supabase_admin
--

INSERT INTO "public"."asignaciongenerador" ("asignacionid", "nombrerol", "generador_rfc", "tipodocid") VALUES
	('c58bafac-992d-47e6-a55c-f07afe8a1886', 'Generador', 'GENA800101AA1', '5517c438-93a5-4ed4-b6fc-4fa8046c4577'),
	('fc27ce3b-b1d8-44e8-9d54-8d7437076409', 'Generador', 'GENA800101AA1', '0fd2c438-92ec-4571-b195-baa77223c63a'),
	('5d2a7489-8aba-478f-8ec6-e214b208f672', 'Generador', 'GENA800101AA1', '1a3f1214-09a7-4531-a636-41bbedf000d4'),
	('ee830bbf-8111-41ce-bede-edc3be230dda', 'Generador', 'GENA800101AA1', 'a62a558a-3fd6-4c66-90e7-e6b8d12767ee'),
	('7df5e3ea-d7b8-46c6-a34a-ebb3506d7b5f', 'Generador', 'GENB800102BB2', '5517c438-93a5-4ed4-b6fc-4fa8046c4577'),
	('708d90d4-3ae8-4684-944b-b741f78ba488', 'Generador', 'GENB800102BB2', '0fd2c438-92ec-4571-b195-baa77223c63a'),
	('7a90ade5-fdcf-41bd-82ec-6ab41c35a018', 'Generador', 'GENB800102BB2', '1a3f1214-09a7-4531-a636-41bbedf000d4'),
	('0957f4e2-131e-48bc-aeed-bcec230255c9', 'Generador', 'GENB800102BB2', 'a62a558a-3fd6-4c66-90e7-e6b8d12767ee'),
	('78ff943e-2c58-49ff-85d7-69db027fc3f1', 'Generador', 'GENC800103CC3', '5517c438-93a5-4ed4-b6fc-4fa8046c4577'),
	('1a661c74-ef41-4708-96c5-cef026526e13', 'Generador', 'GENC800103CC3', '0fd2c438-92ec-4571-b195-baa77223c63a'),
	('02aef6c5-12c6-48c2-99a0-2b220e70e90f', 'Generador', 'GENC800103CC3', '1a3f1214-09a7-4531-a636-41bbedf000d4'),
	('9f58b421-1c23-441b-9f75-29c37904b968', 'Generador', 'GENC800103CC3', 'a62a558a-3fd6-4c66-90e7-e6b8d12767ee'),
	('92f9e7ad-3924-4b1b-97c2-8c4c3fd6ad45', 'Generador', 'GEND800104DD4', '5517c438-93a5-4ed4-b6fc-4fa8046c4577'),
	('a3a968d1-eec5-4cad-9bb3-e4babe7e62c3', 'Generador', 'GEND800104DD4', '0fd2c438-92ec-4571-b195-baa77223c63a'),
	('3635f3a4-971c-4f99-abbb-0a2e57a242cd', 'Generador', 'GEND800104DD4', '1a3f1214-09a7-4531-a636-41bbedf000d4'),
	('1d96a365-625b-41bd-b0da-3454e46ce80b', 'Generador', 'GEND800104DD4', 'a62a558a-3fd6-4c66-90e7-e6b8d12767ee'),
	('47784dd1-78c7-4cbe-9841-573829d6beea', 'Generador', 'GENE800105EE5', '5517c438-93a5-4ed4-b6fc-4fa8046c4577'),
	('e87b8a68-f8b5-4ad7-b492-5c39a4ee7539', 'Generador', 'GENE800105EE5', '0fd2c438-92ec-4571-b195-baa77223c63a'),
	('dfb8f5f3-d519-4a1e-86e2-7257ed79e583', 'Generador', 'GENE800105EE5', '1a3f1214-09a7-4531-a636-41bbedf000d4'),
	('2a9b7c68-f3d5-4e57-9d43-b93782aff3ad', 'Generador', 'GENE800105EE5', 'a62a558a-3fd6-4c66-90e7-e6b8d12767ee');


--
-- Data for Name: materia; Type: TABLE DATA; Schema: public; Owner: supabase_admin
--



--
-- Data for Name: cargamaterias; Type: TABLE DATA; Schema: public; Owner: supabase_admin
--

INSERT INTO "public"."cargamaterias" ("cargaid", "periodo", "grupo", "aula", "noalumnos", "modalidad", "materiaid", "docente_rfc") VALUES
	('95914491-60a7-4563-9edf-4966ffc5e6d5', '2025-A', 'A1', 'Lab 3', 28, 'Presencial', NULL, 'GOMÑ920801TD8'),
	('7acd652e-930a-4fb4-bfad-7f96e6b99d47', '2025-A', 'A2', 'Aula 12', 31, 'Presencial', NULL, 'GOMÑ920801TD8'),
	('efb0ece8-dabe-4400-a630-3697c4a925b1', '2025-A', 'I1', 'Lab 7', 26, 'Presencial', NULL, 'MÑLJ821102KD1'),
	('52b55845-505a-43e0-915b-5f3036da0026', '2025-A', 'G1', 'Aula 4', 29, 'Presencial', NULL, 'RMA921228TP9'),
	('4f1158b6-65d1-4b68-ac32-1d25cb3271bf', '2025-A', 'S3', 'Aula 11', 27, 'Presencial', NULL, 'LOP&850407XZ4'),
	('e75d21f9-678a-4b20-aee1-3061ff782d15', '2025-A', 'M1', 'Lab 5', 24, 'Presencial', NULL, 'ZULS830923ML2'),
	('e3c6d406-261c-4f8a-9f58-049c6e09a1d7', '2025-A', 'Q2', 'Lab Q1', 22, 'Presencial', NULL, 'FERA990105QH6'),
	('daca546b-80ac-4d74-9767-2dbbe80b7771', '2025-A', 'A3', 'Aula 14', 30, 'Presencial', NULL, 'CÑTA770916BW8'),
	('0180ff5b-a646-4c9e-8a8a-ec76572bdba9', '2025-A', 'E1', 'Lab E2', 26, 'Presencial', NULL, 'HERA880706C9A'),
	('a0860034-e970-4dd3-af2c-487da5c3b70d', '2025-A', 'CB1', 'Aula 5', 33, 'Presencial', NULL, 'QTRÑ760530VF5'),
	('e360b7fe-db6f-46bb-95f1-a2fcf51cdf50', '2025-A', 'S2', 'Aula 1', 18, 'Presencial', NULL, 'LEÑH900716TP9'),
	('63e8473e-6e90-4fc9-910b-de73b2fc0152', '2025-A', 'I4', 'Aula 9', 15, 'Presencial', NULL, 'SUÑM930927WL2'),
	('2886f080-b2ae-45b9-9366-03ba8c7daa76', '2025-A', 'M5', 'Lab M1', 12, 'Presencial', NULL, 'TORJ950724QR4'),
	('e42da137-eecc-4bc1-a0d9-59956e1fdfca', '2025-A', 'E3', 'Aula 7', 20, 'Presencial', NULL, 'ÑEZM910211PA7'),
	('a25a9458-d1e2-4c45-9037-b48ba35fe777', '2025-A', 'CB2', 'Aula 13', 19, 'Presencial', NULL, 'GARM990926TT5'),
	('3a505715-3423-4b64-8bc8-1083fc86d078', '2025-A', 'I6', 'Aula 10', 25, 'Presencial', NULL, 'PERR920504SJ0'),
	('9ceef975-2ed1-403f-a0b4-ad330cd6f2cb', '2025-A', 'A8', 'Aula 8', 21, 'Presencial', NULL, 'BENÑ870821VG2');


--
-- Data for Name: convocatoria; Type: TABLE DATA; Schema: public; Owner: supabase_admin
--

INSERT INTO "public"."convocatoria" ("convocatoriaid", "nombreconvocatoria", "fechainicio", "fechafin") VALUES
	('c92e81b8-60c4-4656-8d77-008a5059c8e5', 'Convocatoria Semestral 2025-2', '2025-06-06', '2025-10-17'),
	('2d14f592-aceb-4b42-8c46-56ce34bd582f', 'Convocatoria Semestral ago-dic 2025', '2025-08-18', '2025-12-05');


--
-- Data for Name: curriculum; Type: TABLE DATA; Schema: public; Owner: supabase_admin
--

INSERT INTO "public"."curriculum" ("noderegistro", "fechaactualizacion", "docente_rfc") VALUES
	('faa33537-a4c8-499b-be40-b59abb7df37b', '2024-10-01', 'GOMÑ920801TD8'),
	('7105c2ad-6db9-417f-92f9-aa90b36bf0d9', '2024-11-12', 'MÑLJ821102KD1'),
	('d6be6344-e6db-4e80-b38e-d990b07863fd', '2025-01-20', 'RMA921228TP9'),
	('3c737b1e-e07f-40d1-9c9e-b33cd20907d1', '2024-09-15', 'LOP&850407XZ4'),
	('c1074894-fb57-49ab-a294-d03047edb045', '2024-12-02', 'ZULS830923ML2'),
	('6a3fe981-193f-4af3-82bf-2c35b7e36e52', '2024-08-27', 'FERA990105QH6'),
	('c745e1d1-948f-4e8a-94ed-a03554b7c37d', '2025-02-10', 'CÑTA770916BW8'),
	('a74c3488-bb9c-473e-ae71-fadac4c108f7', '2024-10-22', 'HERA880706C9A'),
	('4842a0a5-9d5f-4b5e-b47b-9d44745b819d', '2024-09-30', 'QTRÑ760530VF5'),
	('a6dcb241-f457-4753-92b5-0fa7ffc603ee', '2024-11-05', 'LEÑH900716TP9'),
	('ba924427-7068-4f56-8558-9c531611d413', '2025-01-14', 'SUÑM930927WL2'),
	('9f0c7494-b520-4426-a5af-552165a8d68b', '2024-12-20', 'TORJ950724QR4'),
	('6a9602cd-2be3-4157-881c-fecc817f6971', '2024-11-18', 'ÑEZM910211PA7'),
	('b9e76515-f52a-4441-8c05-82643da360d8', '2024-10-09', 'GARM990926TT5'),
	('5b31a7ea-e1f6-4504-9b7f-9dc53b0446b2', '2024-09-13', 'PERR920504SJ0'),
	('b4c5e9d1-5c5d-4d81-a69b-c8a630214d9e', '2025-02-02', 'BENÑ870821VG2');


--
-- Data for Name: expediente; Type: TABLE DATA; Schema: public; Owner: supabase_admin
--

INSERT INTO "public"."expediente" ("expedienteid", "fechacreacion", "estado", "convocatoriaid", "docente_rfc") VALUES
	('b72f17fe-68af-4a04-a8af-d684dae3ae61', '2025-06-07', 'ABIERTO', 'c92e81b8-60c4-4656-8d77-008a5059c8e5', 'GOMÑ920801TD8'),
	('c2d63fa0-0bf3-4079-9ea8-046f36db0913', '2025-06-07', 'ABIERTO', 'c92e81b8-60c4-4656-8d77-008a5059c8e5', 'MÑLJ821102KD1'),
	('a902e4b3-0f4d-422a-913a-fb448c2c9721', '2025-06-07', 'ABIERTO', 'c92e81b8-60c4-4656-8d77-008a5059c8e5', 'RMA921228TP9'),
	('6a417dd5-932d-4dc5-a7c1-c0f28bc2acf2', '2025-06-07', 'ABIERTO', 'c92e81b8-60c4-4656-8d77-008a5059c8e5', 'LOP&850407XZ4'),
	('67716c89-8466-42e2-9635-dc2e56dcaf1b', '2025-06-07', 'ABIERTO', 'c92e81b8-60c4-4656-8d77-008a5059c8e5', 'ZULS830923ML2'),
	('e32b38d5-8f25-453f-a485-81be074a107f', '2025-06-07', 'ABIERTO', 'c92e81b8-60c4-4656-8d77-008a5059c8e5', 'FERA990105QH6'),
	('f4cf1746-f855-437d-9e73-3cda30b08a57', '2025-06-07', 'ABIERTO', 'c92e81b8-60c4-4656-8d77-008a5059c8e5', 'CÑTA770916BW8'),
	('fba8f06f-8c3b-470c-86fc-d5bb16a91345', '2025-06-07', 'ABIERTO', 'c92e81b8-60c4-4656-8d77-008a5059c8e5', 'HERA880706C9A'),
	('de60b13e-95fa-449d-b7cf-98c727f56391', '2025-06-07', 'ABIERTO', 'c92e81b8-60c4-4656-8d77-008a5059c8e5', 'QTRÑ760530VF5');


--
-- Data for Name: documento; Type: TABLE DATA; Schema: public; Owner: supabase_admin
--



--
-- Data for Name: documentoinfoextra; Type: TABLE DATA; Schema: public; Owner: supabase_admin
--



--
-- Data for Name: estrategiadidactica; Type: TABLE DATA; Schema: public; Owner: supabase_admin
--

INSERT INTO "public"."estrategiadidactica" ("estrategiadidactid", "descripcionestrategia", "materiaid", "docente_rfc") VALUES
	('e6d80dfa-209d-41da-9f23-c683a05edc42', 'Aprendizaje basado en proyectos', NULL, 'GOMÑ920801TD8'),
	('31d9aee2-1b2d-492b-85a4-867e3521eb8d', 'Método de casos', NULL, 'GOMÑ920801TD8'),
	('49bf49aa-5c82-440e-8a5d-31a0e526b160', 'Laboratorios guiados', NULL, 'MÑLJ821102KD1'),
	('732c78aa-a08a-4119-855f-8b27e5f182de', 'Simulación industrial', NULL, 'MÑLJ821102KD1'),
	('db7aa8fd-c16a-4223-b17d-9121d02fb26f', 'Investigación aplicada', NULL, 'RMA921228TP9'),
	('ef9917b9-6414-4db9-89c3-e24c264ba300', 'Prácticas en campo', NULL, 'LOP&850407XZ4'),
	('86b983ad-acf5-4b5c-983c-d94298f3fc2a', 'Resolución de problemas', NULL, 'ZULS830923ML2'),
	('7ecdbee6-9830-49a2-b3eb-c9148ad60e75', 'Tutoría personalizada', NULL, 'FERA990105QH6'),
	('08514b70-fa43-4da3-8a00-00dd37e96f3f', 'Clases invertidas', NULL, 'CÑTA770916BW8'),
	('15efe6ae-ce4f-402e-8730-388d7e6cf0d3', 'Laboratorio avanzado', NULL, 'HERA880706C9A'),
	('ece32712-fad9-457f-b518-373e4aa4a1e0', 'Modelado matemático', NULL, 'QTRÑ760530VF5'),
	('0b9460af-ef9b-4341-9623-41094a4c2b1f', 'Trabajo colaborativo', NULL, 'LEÑH900716TP9'),
	('d1588b2c-6d63-4adf-9d2d-9db67e6941e5', 'Aprendizaje autónomo', NULL, 'SUÑM930927WL2'),
	('aff2fc4e-8653-4bc2-99fa-8bca59fc5f96', 'Estudio dirigido', NULL, 'TORJ950724QR4'),
	('27729ed4-8566-432a-9bf4-d18bce434e1c', 'Sesiones reforzadas', NULL, 'ÑEZM910211PA7'),
	('9eb8d866-f755-423b-9816-c09455229dde', 'Exposición guiada', NULL, 'GARM990926TT5'),
	('ea947c21-6fdd-40cb-ab0d-513ba48d543c', 'Lecturas académicas', NULL, 'PERR920504SJ0'),
	('26a31540-24d9-4dba-9850-9cec14a78c23', 'Prácticas individuales', NULL, 'BENÑ870821VG2');


--
-- Data for Name: eventogeneracion; Type: TABLE DATA; Schema: public; Owner: supabase_admin
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
-- Data for Name: eventovistobueno; Type: TABLE DATA; Schema: public; Owner: supabase_admin
--



--
-- Data for Name: programa; Type: TABLE DATA; Schema: public; Owner: supabase_admin
--

INSERT INTO "public"."programa" ("programaid", "periodovalidez", "docente_rfc") VALUES
	('3c34836e-bdd5-472a-bb41-ebb72cf420ac', '2025-A', 'GOMÑ920801TD8'),
	('1f77a61b-99af-4405-84aa-1ec06ecc24f2', '2025-A', 'MÑLJ821102KD1'),
	('bc25882e-a78c-444e-9415-bb53c74213a9', '2024-B', 'RMA921228TP9'),
	('89bde46a-07bc-4f02-b4bb-141fb5f29a2d', '2025-A', 'LOP&850407XZ4'),
	('7a6cbda7-b17d-41ed-9627-3491b9a5777b', '2024-B', 'ZULS830923ML2'),
	('22b7d24a-bc9f-4977-a797-c57c502952cb', '2025-A', 'FERA990105QH6'),
	('6823631a-5aae-4157-85e1-58cbf7debc24', '2024-B', 'CÑTA770916BW8'),
	('0b3f1871-d306-4af7-a2dc-c4bbbb25c3ed', '2025-A', 'HERA880706C9A'),
	('33d83652-bed6-4aa8-9be5-f58578612727', '2025-A', 'QTRÑ760530VF5'),
	('c4b7b2f6-b113-4f16-a170-2daebe86ef8c', '2024-B', 'LEÑH900716TP9'),
	('5fb88776-2615-4952-9700-b3c23cdffe9a', '2024-B', 'SUÑM930927WL2'),
	('56aa0164-6be1-4b75-ae80-c1ad676265df', '2024-B', 'TORJ950724QR4'),
	('da0ccd44-f933-4d46-9af7-761bc7fc7a95', '2025-A', 'ÑEZM910211PA7'),
	('bcce7ea0-df9d-48b6-a5b5-e5b53f8d675c', '2025-A', 'GARM990926TT5'),
	('c9929710-4111-43c7-8196-9741eac0321d', '2024-B', 'PERR920504SJ0'),
	('901654e0-8c4f-47f6-8f36-9c9661b97751', '2025-A', 'BENÑ870821VG2');


--
-- Data for Name: recursoeducativo; Type: TABLE DATA; Schema: public; Owner: supabase_admin
--

INSERT INTO "public"."recursoeducativo" ("recursoeduid", "semestreelaboracion", "programaeducativo", "materialid", "docente_rfc") VALUES
	('d02b8d55-dd08-4f6e-bdc5-9e66dc547ab3', '2025-1', 'Ingeniería en Sistemas', NULL, 'GOMÑ920801TD8'),
	('f6d06df0-afce-4c34-be4b-38b0f4a623bd', '2024-2', 'Ingeniería Industrial', NULL, 'MÑLJ821102KD1'),
	('f8e1a419-1f78-4cb9-b5d1-5b403c7efd88', '2025-1', 'Lic. en Administración', NULL, 'RMA921228TP9'),
	('35923b1f-96ae-4786-a4e7-afd74a33383c', '2024-2', 'Arquitectura', NULL, 'LOP&850407XZ4'),
	('806126ae-8b0f-464d-bfc7-7d1f4112288f', '2025-1', 'Mecatrónica', NULL, 'ZULS830923ML2'),
	('1d8afccd-ec5f-4d9b-8fc3-c441de9e97eb', '2024-2', 'Química', NULL, 'FERA990105QH6'),
	('490570bb-8120-4063-9134-bbcffc2976a9', '2025-1', 'Contaduría', NULL, 'CÑTA770916BW8'),
	('ad78f156-1d1c-4581-bd74-d4b85157eaa1', '2024-2', 'Electrónica', NULL, 'HERA880706C9A'),
	('75161a0d-1fb9-45d1-8db8-89ccfafc92ff', '2025-1', 'Ciencias Básicas', NULL, 'QTRÑ760530VF5'),
	('2159a902-8aa3-4217-852a-e710b0d1061d', '2024-2', 'Sistemas', NULL, 'LEÑH900716TP9'),
	('4e16cd4a-ead0-4b88-9cb5-5a8a69dbff6f', '2025-1', 'Industrial', NULL, 'SUÑM930927WL2'),
	('4b10e63c-71f0-4c6e-8a3e-4bef6ac94eac', '2024-2', 'Mecatrónica', NULL, 'TORJ950724QR4'),
	('0a92496f-130b-4278-b6e0-696b7be857fe', '2024-2', 'Electrónica', NULL, 'ÑEZM910211PA7'),
	('f9ac2b58-72ae-447b-bb90-6dfb0ce38dda', '2025-1', 'Ciencias Básicas', NULL, 'GARM990926TT5'),
	('d69f7b76-7d49-4bdf-a5da-bcf3f7fc38f8', '2024-2', 'Industrial', NULL, 'PERR920504SJ0'),
	('87823412-c157-4d11-bce9-7a71fe5c75f7', '2025-1', 'Administración', NULL, 'BENÑ870821VG2');


--
-- Data for Name: tutores; Type: TABLE DATA; Schema: public; Owner: supabase_admin
--

INSERT INTO "public"."tutores" ("tutoriaid", "periodo", "notutorados", "carreratutorados", "docente_rfc") VALUES
	('6e341241-17f8-4d46-9f21-f4631f1a00f2', '2025-A', 12, 'Sistemas', 'GOMÑ920801TD8'),
	('3de57011-d13c-488d-9f83-2615f8007542', '2025-A', 10, 'Industrial', 'MÑLJ821102KD1'),
	('9180d2ea-b307-4086-ab0e-57a972e9ce7a', '2025-A', 9, 'Administración', 'RMA921228TP9'),
	('697b952f-cd71-4c36-aba4-aa12519770c1', '2025-A', 8, 'Arquitectura', 'LOP&850407XZ4'),
	('6babd03c-92ff-4028-83ea-c607037f56d3', '2025-A', 11, 'Mecatrónica', 'ZULS830923ML2'),
	('cce53174-495b-46ae-9c04-7a8ea1c38ade', '2025-A', 13, 'Química', 'FERA990105QH6'),
	('d891bb3d-52cc-4040-8bef-b951e76e0219', '2025-A', 12, 'Contaduría', 'CÑTA770916BW8'),
	('a9afdc8f-8653-4e6c-9e93-d2b12e2ef227', '2025-A', 14, 'Electrónica', 'HERA880706C9A'),
	('d25fdca3-ff3d-4c50-9eb3-5192a12e1a6d', '2025-A', 9, 'Ciencias Básicas', 'QTRÑ760530VF5'),
	('e92a2cf9-f79f-48dd-b0ec-098b8c66a5c3', '2025-A', 5, 'Sistemas', 'LEÑH900716TP9'),
	('8fa740b0-0040-421a-93d9-b2c4fb55f6c3', '2025-A', 3, 'Industrial', 'SUÑM930927WL2'),
	('82c986a2-7a5d-44c9-9a33-4ae3054166a2', '2025-A', 4, 'Mecatrónica', 'TORJ950724QR4'),
	('df6a3d66-d75f-4930-860b-ae42db1dfc57', '2025-A', 3, 'Electrónica', 'ÑEZM910211PA7'),
	('d2e07f6a-d233-4228-afd7-3eba35d5ee9b', '2025-A', 4, 'Ciencias Básicas', 'GARM990926TT5'),
	('a3ef4e11-2b11-4f58-865d-5eed16bfb24f', '2025-A', 6, 'Administración', 'PERR920504SJ0'),
	('45a4f1ad-c0c7-478c-bc67-9cbc33358b37', '2025-A', 4, 'Contaduría', 'BENÑ870821VG2');


--
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."usuarios" ("id", "rol", "nombre", "ap_pat", "ap_mat", "puesto", "supabase_user", "docente_rfc", "generador_rfc", "revisor_rfc") VALUES
	('4ff00b7c-b460-435d-bfb7-4d940c02f2bd', 'Generador', 'Ana', 'Gómez', 'Luna', 'Capturista', NULL, NULL, 'GENA800101AA1', NULL),
	('4285d65b-de0d-41fc-aa00-2f231754dd92', 'Generador', 'Bruno', 'Méndez', 'Paz', 'Capturista', NULL, NULL, 'GENB800102BB2', NULL),
	('7a0a2414-3603-464c-b851-6577b7f1280d', 'Generador', 'Celia', 'Ramírez', 'Solís', 'Capturista', NULL, NULL, 'GENC800103CC3', NULL),
	('2589eb15-32d7-42fe-9cb7-76992a386e11', 'Generador', 'Diego', 'Torres', 'Vega', 'Capturista', NULL, NULL, 'GEND800104DD4', NULL),
	('4a794405-1189-4d84-a113-4f94bc3950bf', 'Generador', 'Elisa', 'Hernández', 'Mora', 'Capturista', NULL, NULL, 'GENE800105EE5', NULL),
	('9fba2d4c-26dc-4550-9969-4d80ba1d140c', 'Revisor', 'Arturo', 'Santos', 'Ríos', 'Revisor Académico', NULL, NULL, NULL, 'REV900101AA1'),
	('1a63331b-0b2b-4fb7-9301-ac9dbd24b373', 'Revisor', 'Beatriz', 'López', 'Cano', 'Revisor Académico', NULL, NULL, NULL, 'REV900102BB2'),
	('87de54d0-49b3-4f6f-a38c-0b2eecba87f3', 'Revisor', 'Daniela', 'Flores', 'Nava', 'Revisor Académico', NULL, NULL, NULL, 'REV900104DD4'),
	('bd3dcfc3-8ef8-42a6-8ed0-ba96fd88d207', 'Revisor', 'Esteban', 'Reyes', 'Ochoa', 'Revisor Académico', NULL, NULL, NULL, 'REV900105EE5'),
	('6f538cf3-8fd2-4f28-8a91-4a89fa6e157a', 'Docente', 'Gerardo', 'Gómez', 'Ñuñez', 'Profesor de Tiempo Completo', NULL, 'GOMÑ920801TD8', NULL, NULL),
	('082f7a90-d140-4312-a384-43abaf509b70', 'Docente', 'María', 'Muñoz', 'López', 'Profesor de Tiempo Completo', NULL, 'MÑLJ821102KD1', NULL, NULL),
	('1ce4f08a-8a3e-4cab-8f3c-75e1bbf29305', 'Docente', 'Ricardo', 'Martínez', 'Aguilar', 'Profesor de Tiempo Completo', NULL, 'RMA921228TP9', NULL, NULL),
	('2b41ddb7-e121-446a-adaa-148165cf2280', 'Docente', 'Lorena', 'López', 'Andrade', 'Profesor de Tiempo Completo', NULL, 'LOP&850407XZ4', NULL, NULL),
	('742c99af-f097-4eb1-8cc8-e8df197bed5b', 'Docente', 'Zulema', 'Santos', 'Lara', 'Profesor de Tiempo Completo', NULL, 'ZULS830923ML2', NULL, NULL),
	('e60fa6f3-4653-48ef-b7ec-e5c7e7fcf0d9', 'Docente', 'Fernando', 'Rentería', 'Alonso', 'Profesor de Tiempo Completo', NULL, 'FERA990105QH6', NULL, NULL),
	('14fcd44d-aa43-4710-8495-9dd72eac823f', 'Docente', 'Cynthia', 'Ñolasco', 'Tavares', 'Profesor de Tiempo Completo', NULL, 'CÑTA770916BW8', NULL, NULL),
	('b616d301-7879-4427-b84c-4e518fd5b222', 'Docente', 'Héctor', 'Hernández', 'Ramírez', 'Profesor de Tiempo Completo', NULL, 'HERA880706C9A', NULL, NULL),
	('4451daae-e5ec-4d4f-bef4-3302db1d8739', 'Docente', 'Quetzal', 'Trujillo', 'Ñanco', 'Profesor de Tiempo Completo', NULL, 'QTRÑ760530VF5', NULL, NULL),
	('67f2c7bd-7ff2-43ec-b688-96f6404737d7', 'Revisor', 'César', 'Martínez', 'Ortiz', 'Revisor Académico', '67995a19-ee54-4794-aeef-14429b700222', NULL, NULL, 'REV900103CC3');


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

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

-- \unrestrict b3eUhbq0enJvuQDtYEVeXDcYF79mD6K1ZkVnd2tbug7ilMMvsKLOCfgyVWfH3Z5

RESET ALL;
