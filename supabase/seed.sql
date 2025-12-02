SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- \restrict U4ULVffY8bNyGccqpEwMppQD2Qt4nYovZLRyeKE6oeMRDkHRoB3Z5xJOedIKb1G

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
	('00000000-0000-0000-0000-000000000000', '053e755e-ef1a-4d79-9489-d9d5030e6284', '{"action":"logout","actor_id":"1d9c6248-0cc0-4496-b8ca-1fa012fbf38e","actor_username":"diego1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-11-28 03:43:39.477166+00', ''),
	('00000000-0000-0000-0000-000000000000', 'da8bc367-6ca6-4d3d-a951-29e5229eb433', '{"action":"login","actor_id":"53798262-7c9d-4764-94e5-31e00c1790c5","actor_username":"cesar1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-11-28 05:56:19.202968+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ded0b41b-6339-4ace-9d65-3b9354d26806', '{"action":"logout","actor_id":"53798262-7c9d-4764-94e5-31e00c1790c5","actor_username":"cesar1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-11-28 05:56:53.318014+00', ''),
	('00000000-0000-0000-0000-000000000000', '5aef1d6d-5226-4e7f-9c5a-b1ac06ef3d5f', '{"action":"login","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-11-28 05:57:03.698698+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f9a193fe-3dab-48e8-91c4-c25ff6f9e330', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-11-28 06:57:29.690022+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd067cec0-9753-4949-b708-d8c95fbd6834', '{"action":"token_revoked","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-11-28 06:57:29.694714+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e4c4c4da-dbfc-491a-bf14-bf52e5d351e8', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-11-28 06:57:30.514597+00', ''),
	('00000000-0000-0000-0000-000000000000', '9bf26fa5-6c52-42bc-bfc0-1504b6f0e414', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-11-28 06:57:30.697209+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd3409aac-4de8-42a4-a653-0217e9aa73ef', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-11-28 07:56:23.436977+00', ''),
	('00000000-0000-0000-0000-000000000000', '7308179a-7ee2-49c5-9971-5220f167512c', '{"action":"token_revoked","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-11-28 07:56:23.441789+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c8d89583-2fcb-4847-8aab-109f72154f76', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-11-28 09:21:08.932277+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f0d29022-7df5-4c83-b0d2-862b5190da26', '{"action":"token_revoked","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-11-28 09:21:08.958536+00', ''),
	('00000000-0000-0000-0000-000000000000', '39bfb952-7fee-4dfe-8746-5ace995d4423', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-11-28 09:21:25.761958+00', ''),
	('00000000-0000-0000-0000-000000000000', '77c5fc66-21f9-4b82-adfc-266c1d14d5bb', '{"action":"logout","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-11-28 09:59:04.206886+00', ''),
	('00000000-0000-0000-0000-000000000000', '6e17daf6-497d-4e99-a9f1-28a85302bcfb', '{"action":"login","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-11-28 09:59:13.256193+00', ''),
	('00000000-0000-0000-0000-000000000000', '99eba34c-ce67-4d8f-bb3e-2e5aa0b47512', '{"action":"logout","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-11-28 09:59:57.731136+00', ''),
	('00000000-0000-0000-0000-000000000000', '669e3c77-b7c4-4690-b41d-b365cb72895e', '{"action":"login","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-11-28 16:19:56.688211+00', ''),
	('00000000-0000-0000-0000-000000000000', '337f31d8-8a10-4181-b903-cfd1b28eec32', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-01 05:13:37.052099+00', ''),
	('00000000-0000-0000-0000-000000000000', '38877dcc-3996-4a4c-bad4-462059e6cfba', '{"action":"token_revoked","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-01 05:13:37.061316+00', ''),
	('00000000-0000-0000-0000-000000000000', '273c7640-09f7-44ba-998a-2ccda856431b', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-01 05:13:53.076934+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd65971ef-cc0e-4b5b-a302-d3df96718d9c', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-01 05:13:53.479393+00', ''),
	('00000000-0000-0000-0000-000000000000', '32e4045a-32a9-4459-862a-f5e6c2880dc2', '{"action":"logout","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-12-01 05:14:15.644929+00', ''),
	('00000000-0000-0000-0000-000000000000', '2f65bc38-3056-441f-9f23-5d8a0eeedd26', '{"action":"login","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-12-01 05:14:34.501509+00', ''),
	('00000000-0000-0000-0000-000000000000', '3afc4c3b-21f8-4351-bb9c-fd5a64ce4f99', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-01 21:10:50.301745+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c02f96c3-dad3-4079-9f65-14d8d53c0886', '{"action":"token_revoked","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-01 21:10:50.306845+00', ''),
	('00000000-0000-0000-0000-000000000000', '16f93a54-31ff-4a98-bf85-7eeba9923160', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-01 21:11:10.71868+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f67cd228-c9dc-4812-8874-c698e88a47ff', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-01 21:11:11.065353+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e96ff6a8-f7ce-4da1-a0c2-22aac90827cb', '{"action":"logout","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-12-01 21:11:58.517551+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b51895b0-ab76-47bf-9b72-95279a758fc3', '{"action":"login","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-12-01 21:12:18.38699+00', ''),
	('00000000-0000-0000-0000-000000000000', '0dee9744-0036-4df3-acf5-fd1f58de09e6', '{"action":"logout","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-12-01 21:12:42.765813+00', ''),
	('00000000-0000-0000-0000-000000000000', '5a3984b4-714c-492a-85fb-5299720f3c85', '{"action":"login","actor_id":"53798262-7c9d-4764-94e5-31e00c1790c5","actor_username":"cesar1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-12-01 21:12:50.155874+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c95ce7ba-5bf3-4f8b-8074-fd326c540296', '{"action":"logout","actor_id":"53798262-7c9d-4764-94e5-31e00c1790c5","actor_username":"cesar1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-12-01 21:46:11.965177+00', ''),
	('00000000-0000-0000-0000-000000000000', 'efc14cc4-b5e4-491f-8bf2-b0cea9c61cc6', '{"action":"login","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-12-01 21:46:18.026529+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd8963c6e-6592-4c85-bfba-9c40c3d8f324', '{"action":"logout","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-12-01 21:47:48.419743+00', ''),
	('00000000-0000-0000-0000-000000000000', '3cb77bdc-c2b6-45fe-b5df-b530304cf949', '{"action":"login","actor_id":"53798262-7c9d-4764-94e5-31e00c1790c5","actor_username":"cesar1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-12-01 21:47:55.491762+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f5029f6a-727c-4acc-a4ed-fcaa026bfc13', '{"action":"logout","actor_id":"53798262-7c9d-4764-94e5-31e00c1790c5","actor_username":"cesar1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-12-01 21:48:17.343132+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e5c7d812-2bdf-4abb-90c8-39b871662f68', '{"action":"user_repeated_signup","actor_id":"1d9c6248-0cc0-4496-b8ca-1fa012fbf38e","actor_username":"diego1@sgedd.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}', '2025-12-01 21:48:34.215944+00', ''),
	('00000000-0000-0000-0000-000000000000', '72fbb9e0-4a00-473f-b817-be6178b97436', '{"action":"login","actor_id":"1d9c6248-0cc0-4496-b8ca-1fa012fbf38e","actor_username":"diego1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-12-01 21:49:17.971464+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cd6c92f8-5401-459e-81de-baf6b084e6ef', '{"action":"logout","actor_id":"1d9c6248-0cc0-4496-b8ca-1fa012fbf38e","actor_username":"diego1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-12-01 21:49:24.902561+00', ''),
	('00000000-0000-0000-0000-000000000000', '36d2eab0-12bc-494d-948c-2fb5d3134836', '{"action":"user_signedup","actor_id":"d1e7797e-7e6e-423f-9056-f1bda4a3bc1d","actor_username":"abel1@sgedd.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2025-12-01 21:49:59.827662+00', ''),
	('00000000-0000-0000-0000-000000000000', '9fe3bad1-9156-4afd-a7c6-48f2cf70eb5b', '{"action":"login","actor_id":"d1e7797e-7e6e-423f-9056-f1bda4a3bc1d","actor_username":"abel1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-12-01 21:49:59.849647+00', ''),
	('00000000-0000-0000-0000-000000000000', '2715f57b-9658-42c3-adcd-f9068f216016', '{"action":"logout","actor_id":"d1e7797e-7e6e-423f-9056-f1bda4a3bc1d","actor_username":"abel1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-12-01 22:06:52.589138+00', ''),
	('00000000-0000-0000-0000-000000000000', '00e6fc11-aa38-4cfc-a7d9-8a9c719fbf3d', '{"action":"login","actor_id":"53798262-7c9d-4764-94e5-31e00c1790c5","actor_username":"cesar1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-12-01 22:06:59.354976+00', ''),
	('00000000-0000-0000-0000-000000000000', '3e51d814-1de0-44d7-8dbf-1800884e1177', '{"action":"logout","actor_id":"53798262-7c9d-4764-94e5-31e00c1790c5","actor_username":"cesar1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-12-01 22:07:04.519682+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b0c6fb09-4dc8-489a-ab54-51e93c087827', '{"action":"login","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-12-01 22:07:10.046814+00', ''),
	('00000000-0000-0000-0000-000000000000', '6c6aa84e-d849-4fd0-89a7-95123c0b93b7', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-01 23:29:19.263973+00', ''),
	('00000000-0000-0000-0000-000000000000', '63da8a01-0f31-45b3-9b4c-d2153bbba65b', '{"action":"token_revoked","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-01 23:29:19.27649+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a688ad7c-3d6a-4ef7-b714-c4f6d8454030', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-01 23:29:20.17974+00', ''),
	('00000000-0000-0000-0000-000000000000', '89885aee-8ae9-4c08-849f-1be43f9ec9a2', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-02 05:53:05.640307+00', ''),
	('00000000-0000-0000-0000-000000000000', '4b23b020-4c1e-4819-8574-a3acabed8e2f', '{"action":"token_revoked","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-02 05:53:05.646166+00', ''),
	('00000000-0000-0000-0000-000000000000', '14e43a6e-145d-4403-9942-c8452448c782', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-02 05:53:15.164869+00', ''),
	('00000000-0000-0000-0000-000000000000', 'af6a2602-5d51-47d6-bbdc-b7c2fc9758c6', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-02 05:53:15.326067+00', ''),
	('00000000-0000-0000-0000-000000000000', '3eaf762f-7ab8-4fdb-951e-884bb711f159', '{"action":"logout","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-12-02 06:01:18.676258+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e7083866-7b9c-4144-8579-e03051bfcb70', '{"action":"login","actor_id":"d1e7797e-7e6e-423f-9056-f1bda4a3bc1d","actor_username":"abel1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-12-02 06:01:26.320416+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b92960d1-bfef-4997-a9ea-69b969a77187', '{"action":"logout","actor_id":"d1e7797e-7e6e-423f-9056-f1bda4a3bc1d","actor_username":"abel1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-12-02 06:02:19.696947+00', ''),
	('00000000-0000-0000-0000-000000000000', '8013842e-ef45-44dc-8f64-8180f7c0fb58', '{"action":"login","actor_id":"53798262-7c9d-4764-94e5-31e00c1790c5","actor_username":"cesar1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-12-02 06:02:24.178192+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aa54b8ef-f675-487a-83db-a9a5c3f0d8f8', '{"action":"logout","actor_id":"53798262-7c9d-4764-94e5-31e00c1790c5","actor_username":"cesar1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-12-02 06:02:28.212142+00', ''),
	('00000000-0000-0000-0000-000000000000', '5e9e13b0-5ad8-4aff-b975-7487d630b985', '{"action":"login","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-12-02 06:02:33.372166+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a14787a4-fffc-4287-bf37-e03376c873a9', '{"action":"logout","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-12-02 06:05:05.924296+00', ''),
	('00000000-0000-0000-0000-000000000000', '21b91135-3e43-4676-a24f-2130a5f0d0fb', '{"action":"login","actor_id":"d1e7797e-7e6e-423f-9056-f1bda4a3bc1d","actor_username":"abel1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-12-02 06:05:11.454014+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bbf66025-0882-48ff-9c3b-e5585381deb3', '{"action":"logout","actor_id":"d1e7797e-7e6e-423f-9056-f1bda4a3bc1d","actor_username":"abel1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-12-02 06:14:40.911799+00', ''),
	('00000000-0000-0000-0000-000000000000', '29800d3a-58cf-472b-b426-406903836143', '{"action":"login","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-12-02 06:14:48.35964+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f173e579-cd30-47cf-982d-35b05447c2f3', '{"action":"logout","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-12-02 06:41:15.068526+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b6168e70-a4fa-4522-b52d-8e9ab1f576da', '{"action":"login","actor_id":"d1e7797e-7e6e-423f-9056-f1bda4a3bc1d","actor_username":"abel1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-12-02 06:41:20.254391+00', ''),
	('00000000-0000-0000-0000-000000000000', '54a2b5d5-39d7-44c1-a27f-e10dd68210e5', '{"action":"logout","actor_id":"d1e7797e-7e6e-423f-9056-f1bda4a3bc1d","actor_username":"abel1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-12-02 06:41:25.276765+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a0799fdd-39e4-4394-a160-ad735bb2bd4b', '{"action":"login","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-12-02 06:41:32.974736+00', ''),
	('00000000-0000-0000-0000-000000000000', '852d0124-758e-40d6-b67a-0ede08b1da2f', '{"action":"logout","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-12-02 06:41:55.714524+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dd4920ce-e26c-4840-ab6f-6cf88692a8a6', '{"action":"login","actor_id":"d1e7797e-7e6e-423f-9056-f1bda4a3bc1d","actor_username":"abel1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-12-02 06:42:01.519515+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b2b4e1ff-475d-473c-9109-96efea287c48', '{"action":"logout","actor_id":"d1e7797e-7e6e-423f-9056-f1bda4a3bc1d","actor_username":"abel1@sgedd.com","actor_via_sso":false,"log_type":"account"}', '2025-12-02 06:57:35.129602+00', ''),
	('00000000-0000-0000-0000-000000000000', '1f9caf2f-7718-4486-a117-a3a524cd8d0b', '{"action":"login","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-12-02 06:57:50.867657+00', ''),
	('00000000-0000-0000-0000-000000000000', '64fd43a4-59b1-40c5-bcb5-79f88fa98ab4', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-02 18:58:43.153598+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ecfddaea-2c5c-459d-9ab7-724cfc29f91b', '{"action":"token_revoked","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-02 18:58:43.176263+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f2ab95c2-c601-451d-8dda-5754d844530a', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-02 18:58:43.477227+00', ''),
	('00000000-0000-0000-0000-000000000000', '35434cb2-5081-4f30-a561-a3dbfe6167a4', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-02 19:58:26.468564+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aa72b65c-8b07-4f24-a95e-c46c3cfbc530', '{"action":"token_revoked","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-02 19:58:26.474349+00', ''),
	('00000000-0000-0000-0000-000000000000', '2762a258-2696-426c-b501-c62146bb4910', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-02 19:58:26.972409+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b6111eed-0a8f-4047-b6a8-8862783c6eca', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-02 19:58:27.316494+00', ''),
	('00000000-0000-0000-0000-000000000000', '37362997-09c9-4fb5-83fc-ef9579629947', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-02 20:59:32.23328+00', ''),
	('00000000-0000-0000-0000-000000000000', '2daf1f9b-c520-490c-bfd5-3160084ed7ac', '{"action":"token_revoked","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-02 20:59:32.237518+00', ''),
	('00000000-0000-0000-0000-000000000000', '4848352e-a84b-492e-9edc-3525e1f28689', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-02 20:59:33.00127+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a032801c-f89c-4b99-8159-8fc2e4be338a', '{"action":"token_refreshed","actor_id":"748ba0b1-73d2-49ec-b48c-1f7a20df69bb","actor_username":"alejandro1@sgedd.com","actor_via_sso":false,"log_type":"token"}', '2025-12-02 20:59:33.200185+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '1d9c6248-0cc0-4496-b8ca-1fa012fbf38e', 'authenticated', 'authenticated', 'diego1@sgedd.com', '$2a$10$azxS.YxVfX4sPQQsEcuBzuTbotYnByqjGsju4ckEQ9RdKFlcY..l6', '2025-11-28 03:43:36.980086+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-12-01 21:49:17.97347+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "1d9c6248-0cc0-4496-b8ca-1fa012fbf38e", "email": "diego1@sgedd.com", "email_verified": true, "phone_verified": false}', NULL, '2025-11-28 03:43:36.976052+00', '2025-12-01 21:49:17.979506+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', 'd1e7797e-7e6e-423f-9056-f1bda4a3bc1d', 'authenticated', 'authenticated', 'abel1@sgedd.com', '$2a$10$BEP.DDUIDwC3sR0QjqwYWe0SM0TrvPeJec2TGpVJoo8JrEeL9xm0W', '2025-12-01 21:49:59.829337+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-12-02 06:42:01.52145+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "d1e7797e-7e6e-423f-9056-f1bda4a3bc1d", "email": "abel1@sgedd.com", "email_verified": true, "phone_verified": false}', NULL, '2025-12-01 21:49:59.808037+00', '2025-12-02 06:42:01.526709+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', 'authenticated', 'authenticated', 'alejandro1@sgedd.com', '$2a$10$jkAMamNVz.3xuvoLSxVGAuvW7ixb3Rb.5WZKuAP/a3FLUSJvx31c.', '2025-11-28 03:42:47.029909+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-12-02 06:57:50.86976+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "748ba0b1-73d2-49ec-b48c-1f7a20df69bb", "email": "alejandro1@sgedd.com", "email_verified": true, "phone_verified": false}', NULL, '2025-11-28 03:42:47.02484+00', '2025-12-02 20:59:32.246433+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '53798262-7c9d-4764-94e5-31e00c1790c5', 'authenticated', 'authenticated', 'cesar1@sgedd.com', '$2a$10$fQttNyo9OzymuNVcaWwzW.v0a5snB30VoXyT8vUwS3BprfoiKEJKG', '2025-11-28 03:43:17.069043+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-12-02 06:02:24.179956+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "53798262-7c9d-4764-94e5-31e00c1790c5", "email": "cesar1@sgedd.com", "email_verified": true, "phone_verified": false}', NULL, '2025-11-28 03:43:17.063834+00', '2025-12-02 06:02:24.184986+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{"sub": "748ba0b1-73d2-49ec-b48c-1f7a20df69bb", "email": "alejandro1@sgedd.com", "email_verified": false, "phone_verified": false}', 'email', '2025-11-28 03:42:47.027989+00', '2025-11-28 03:42:47.028016+00', '2025-11-28 03:42:47.028016+00', 'c81c0004-14db-447d-a4b2-f8430635f7aa'),
	('53798262-7c9d-4764-94e5-31e00c1790c5', '53798262-7c9d-4764-94e5-31e00c1790c5', '{"sub": "53798262-7c9d-4764-94e5-31e00c1790c5", "email": "cesar1@sgedd.com", "email_verified": false, "phone_verified": false}', 'email', '2025-11-28 03:43:17.067216+00', '2025-11-28 03:43:17.067249+00', '2025-11-28 03:43:17.067249+00', '122088c4-a10a-4a2e-b127-6952a31b83f1'),
	('1d9c6248-0cc0-4496-b8ca-1fa012fbf38e', '1d9c6248-0cc0-4496-b8ca-1fa012fbf38e', '{"sub": "1d9c6248-0cc0-4496-b8ca-1fa012fbf38e", "email": "diego1@sgedd.com", "email_verified": false, "phone_verified": false}', 'email', '2025-11-28 03:43:36.978709+00', '2025-11-28 03:43:36.978736+00', '2025-11-28 03:43:36.978736+00', 'dc181434-fe69-4e61-93ee-656d8570bc7b'),
	('d1e7797e-7e6e-423f-9056-f1bda4a3bc1d', 'd1e7797e-7e6e-423f-9056-f1bda4a3bc1d', '{"sub": "d1e7797e-7e6e-423f-9056-f1bda4a3bc1d", "email": "abel1@sgedd.com", "email_verified": false, "phone_verified": false}', 'email', '2025-12-01 21:49:59.822297+00', '2025-12-01 21:49:59.822403+00', '2025-12-01 21:49:59.822403+00', '6be3c09d-4425-44b0-8b8d-fca0f2036455');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_clients; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag", "oauth_client_id", "refresh_token_hmac_key", "refresh_token_counter") VALUES
	('e84a2c6a-0c2b-46ec-a0f5-8ffe99d4be19', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 06:57:50.869896+00', '2025-12-02 20:59:33.204198+00', NULL, 'aal1', NULL, '2025-12-02 20:59:33.204019', 'node', '172.18.0.1', NULL, NULL, NULL, NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('e84a2c6a-0c2b-46ec-a0f5-8ffe99d4be19', '2025-12-02 06:57:50.877399+00', '2025-12-02 06:57:50.877399+00', 'password', '1c3941df-aa2c-4eb6-a46f-faaec94c5c37');


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
	('00000000-0000-0000-0000-000000000000', 64, 'zkr4w7ux2imh', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', true, '2025-12-02 06:57:50.873595+00', '2025-12-02 18:58:43.178156+00', NULL, 'e84a2c6a-0c2b-46ec-a0f5-8ffe99d4be19'),
	('00000000-0000-0000-0000-000000000000', 65, 'ua62bggcryel', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', true, '2025-12-02 18:58:43.180085+00', '2025-12-02 19:58:26.477422+00', 'zkr4w7ux2imh', 'e84a2c6a-0c2b-46ec-a0f5-8ffe99d4be19'),
	('00000000-0000-0000-0000-000000000000', 66, 'bxu75744tzsn', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', true, '2025-12-02 19:58:26.482188+00', '2025-12-02 20:59:32.238823+00', 'ua62bggcryel', 'e84a2c6a-0c2b-46ec-a0f5-8ffe99d4be19'),
	('00000000-0000-0000-0000-000000000000', 67, 'o5w3opolfiqq', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', false, '2025-12-02 20:59:32.243414+00', '2025-12-02 20:59:32.243414+00', 'bxu75744tzsn', 'e84a2c6a-0c2b-46ec-a0f5-8ffe99d4be19');


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
	('5f76042e-fffe-40ab-a950-8c083839e7b0', 'Carta de Exclusividad Laboral', 'Documento en que especifica el horario en que se van a realizar las actividades version A', '/plantillas/formato_horario_actividades_A.docx', NULL),
	('9d1749bd-0136-4b3b-8ff4-c686fcf0a766', 'Constancia Actualizacion Curriculum', 'Documento en que especifica el horario en que se van a realizar las actividades version C', '/plantillas/formato_horario_actividades_C.docx', NULL),
	('a0473e8a-832f-4565-8a84-71a25a263930', 'Constancia Alumnos Atendidos', 'Documento en que especifica el horario en que se van a realizar las actividades version B', '/plantillas/formato_horario_actividades_B.docx', NULL),
	('068fe9fd-c111-4753-be14-a101729b2748', 'Constancia Docente', 'Documento que acredita la identidad del docente', '/plantillas/constancia_docente.docx', NULL);


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
	('03d3121a-3adb-4280-9f20-59cb51c884b9', '2025-A', 'E1', 'Lab E2', 26, 'Presencial', '2ebf03c0-ecff-4b06-a068-cb0822a33515', 'HERA880706C9A'),
	('428b1584-ed4e-4d63-83da-b8a4a62a632c', '2025-A', 'S3', 'Aula 11', 27, 'Presencial', '69705d46-7334-4976-a634-82b6f238eed9', 'LOP&850407XZ4'),
	('3acd5716-7116-4f5a-b80b-85037e76ae66', '2025-A', 'M1', 'Lab 5', 24, 'Presencial', '5253fbd2-9b2b-4195-90fa-2c0b685f19ff', 'ZULS830923ML2'),
	('556eaae5-f6ec-4c2e-96a5-2b4d7a66a52c', '2025-A', 'G1', 'Aula 4', 29, 'Presencial', '89bd872a-e764-4180-8ee5-9f0d56a7b300', 'RMA921228TP9'),
	('6b303f62-db0a-467a-9066-ad9ec7767042', '2025-A', 'A1', 'Lab 3', 28, 'Presencial', '721af641-ea34-49cd-89d4-81e453ebadfa', 'GOMÑ920801TD8'),
	('85b32d0c-adff-410c-8af5-667c7b446496', '2025-A', 'A3', 'Aula 14', 30, 'Presencial', '889304a7-2534-416f-a47e-18566ded9abe', 'CÑTA770916BW8'),
	('8eeded19-5c4a-4d2a-92d2-e7dd4738efa0', '2025-A', 'I1', 'Lab 7', 26, 'Presencial', 'd050a797-f247-43b3-86ab-095e4b389705', 'MÑLJ821102KD1'),
	('93d03ad3-8834-445a-abd9-7f72b40f592d', '2025-A', 'CB1', 'Aula 5', 33, 'Presencial', 'd3071682-0373-4ea6-bd85-1ddb63e94f58', 'QTRÑ760530VF5'),
	('e11b7c7e-1008-47cc-86c5-f8e019abb988', '2025-A', 'Q2', 'Lab Q1', 22, 'Presencial', '89bd872a-e764-4180-8ee5-9f0d56a7b300', 'FERA990105QH6'),
	('c212d50e-f3b0-45e8-be64-631f6aea28c1', '2025-A', 'A2', 'Aula 12', 31, 'Presencial', 'b9727344-da75-4f04-b3d3-696ae3af42d5', 'GOMÑ920801TD8'),
	('4c882bab-63d4-41dc-a2e8-12e50f33693a', '2025-A', 'EF121', 'C4', 21, 'Presencial', '2ebf03c0-ecff-4b06-a068-cb0822a33515', 'ZULS830923ML2');


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
	('6b9f9ce7-a54e-4159-b1db-06b766cfc0ca', '2024-08-27', 'FERA990105QH6'),
	('d69214a6-6988-4e2b-b680-5d63729e6f07', '2025-02-10', 'CÑTA770916BW8'),
	('72b2c90b-9fb4-4554-b2c8-28323f601ad6', '2024-10-22', 'HERA880706C9A'),
	('65ff36c7-e245-454a-b5d0-e7ae07476228', '2024-09-30', 'QTRÑ760530VF5'),
	('fb70f775-4af5-4b98-886b-dd3d07ef9cd0', '2025-01-20', 'ZULS830923ML2');


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

INSERT INTO "public"."documento" ("documentoid", "estadoactual", "rutaarchivo", "tipodocid", "expedienteid") VALUES
	('b0998caf-7abe-49f7-8975-c38992739aa4', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764657698002.pdf', '068fe9fd-c111-4753-be14-a101729b2748', '06192453-999d-487c-bb5b-76db5dc08236'),
	('d4f8de38-7d6a-411d-a0f2-d7b04fe95759', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764658682265.pdf', '068fe9fd-c111-4753-be14-a101729b2748', '06192453-999d-487c-bb5b-76db5dc08236'),
	('67d81ad8-b850-498f-a724-ee16df48c401', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764658766610.pdf', '068fe9fd-c111-4753-be14-a101729b2748', '06192453-999d-487c-bb5b-76db5dc08236'),
	('1d389dfa-0f11-4f08-b7c3-8a288407d0b5', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764703911269.pdf', '5f76042e-fffe-40ab-a950-8c083839e7b0', '06192453-999d-487c-bb5b-76db5dc08236'),
	('ae392c55-017b-4c65-a96d-a916ccaef1f7', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764703979090.pdf', '5f76042e-fffe-40ab-a950-8c083839e7b0', '06192453-999d-487c-bb5b-76db5dc08236'),
	('9269a17a-3463-4109-9f32-13d592c48224', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764704013425.pdf', '5f76042e-fffe-40ab-a950-8c083839e7b0', '06192453-999d-487c-bb5b-76db5dc08236'),
	('988b3139-d07e-44c8-a3d6-d9d841f09509', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764704293757.pdf', '5f76042e-fffe-40ab-a950-8c083839e7b0', '06192453-999d-487c-bb5b-76db5dc08236'),
	('b3304f56-ed49-4bc4-977b-e4388efb9671', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764704472024.pdf', '068fe9fd-c111-4753-be14-a101729b2748', '06192453-999d-487c-bb5b-76db5dc08236'),
	('e8ac2a54-2bc6-4e25-91f2-9a669d38545a', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764704492367.pdf', '5f76042e-fffe-40ab-a950-8c083839e7b0', '06192453-999d-487c-bb5b-76db5dc08236'),
	('66343b7f-6894-4f0e-b1ff-03139bb386af', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764705082864.pdf', '5f76042e-fffe-40ab-a950-8c083839e7b0', '06192453-999d-487c-bb5b-76db5dc08236'),
	('50259bb5-a016-4b0c-aaee-ce50cba92a57', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764705221340.pdf', '5f76042e-fffe-40ab-a950-8c083839e7b0', '06192453-999d-487c-bb5b-76db5dc08236'),
	('c2b0af92-45de-43ae-87b2-ac48f6e786d1', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764705331757.pdf', '5f76042e-fffe-40ab-a950-8c083839e7b0', '06192453-999d-487c-bb5b-76db5dc08236'),
	('3eb07b22-ea72-445f-95d8-eb4515be9010', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764705508477.pdf', '5f76042e-fffe-40ab-a950-8c083839e7b0', '06192453-999d-487c-bb5b-76db5dc08236'),
	('bf3a9089-b954-4385-94a0-8e98d971b906', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764705598630.pdf', '5f76042e-fffe-40ab-a950-8c083839e7b0', '06192453-999d-487c-bb5b-76db5dc08236'),
	('1979d827-be65-441f-85a7-d61bd29a5e6c', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764706352494.pdf', '9d1749bd-0136-4b3b-8ff4-c686fcf0a766', '06192453-999d-487c-bb5b-76db5dc08236'),
	('b05c6643-602f-4cc4-a7a7-51183e791fb7', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764706594443.pdf', '9d1749bd-0136-4b3b-8ff4-c686fcf0a766', '06192453-999d-487c-bb5b-76db5dc08236'),
	('2fee4c5d-a041-4873-99a6-a4bb45b3ea46', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764706702409.pdf', '9d1749bd-0136-4b3b-8ff4-c686fcf0a766', '06192453-999d-487c-bb5b-76db5dc08236'),
	('995ddaf4-8e74-44d0-b7bc-2b25409da9af', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764706781889.pdf', '9d1749bd-0136-4b3b-8ff4-c686fcf0a766', '06192453-999d-487c-bb5b-76db5dc08236'),
	('05276e9a-7c66-42a5-8612-dc1e8f35db07', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764706976880.pdf', '068fe9fd-c111-4753-be14-a101729b2748', '06192453-999d-487c-bb5b-76db5dc08236'),
	('47a3a98d-3a85-402a-a073-73af79b4d497', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764707080109.pdf', '9d1749bd-0136-4b3b-8ff4-c686fcf0a766', '06192453-999d-487c-bb5b-76db5dc08236'),
	('7a4708e2-1e16-47e6-bb69-7dba4d37f684', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764709582004.pdf', 'a0473e8a-832f-4565-8a84-71a25a263930', '06192453-999d-487c-bb5b-76db5dc08236'),
	('68d18870-333d-429f-8f0a-668d576f5d16', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764709812750.pdf', 'a0473e8a-832f-4565-8a84-71a25a263930', '06192453-999d-487c-bb5b-76db5dc08236'),
	('d41372e4-3559-4ca1-aa20-b585fde1c65f', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764709893925.pdf', 'a0473e8a-832f-4565-8a84-71a25a263930', '06192453-999d-487c-bb5b-76db5dc08236'),
	('47e06f1d-53bd-4dcf-81d0-b5f6b54395bd', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764709948961.pdf', 'a0473e8a-832f-4565-8a84-71a25a263930', '06192453-999d-487c-bb5b-76db5dc08236'),
	('d7ad25a2-b937-4218-96b3-493054dc49af', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764710033831.pdf', 'a0473e8a-832f-4565-8a84-71a25a263930', '06192453-999d-487c-bb5b-76db5dc08236'),
	('897f549b-1a17-463f-a950-33e0fe3af4ee', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764710292585.pdf', '9d1749bd-0136-4b3b-8ff4-c686fcf0a766', '06192453-999d-487c-bb5b-76db5dc08236'),
	('46f5bef0-8d7d-4eeb-a7bb-67a7ea26713b', 'Generado', 'http://127.0.0.1:54321/storage/v1/object/public/documentos/ZULS830923ML2-1764710314108.pdf', 'a0473e8a-832f-4565-8a84-71a25a263930', '06192453-999d-487c-bb5b-76db5dc08236');


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

INSERT INTO "public"."eventogeneracion" ("generador_rfc", "fechasolicitud", "idevento", "idsolicitante", "tipodocumento") VALUES
	('GENE800105EE5', '2025-12-02', '466e3686-2f86-41e5-8582-7155411ecbad', 'ZULS830923ML2', '068fe9fd-c111-4753-be14-a101729b2748'),
	('GENE800105EE5', '2025-12-02', '07402628-5a9a-45ee-99a4-86e461da0493', 'ZULS830923ML2', '068fe9fd-c111-4753-be14-a101729b2748'),
	('GENE800105EE5', '2025-12-02', '1114bb29-88db-4308-b83e-a45d1de9c359', 'ZULS830923ML2', '068fe9fd-c111-4753-be14-a101729b2748'),
	('GEND800104DD4', '2025-12-02', '23aaecd7-e75a-4bf9-9786-451be45d77c9', 'ZULS830923ML2', '5f76042e-fffe-40ab-a950-8c083839e7b0'),
	('GEND800104DD4', '2025-12-02', '3e9b8ee2-23ff-4773-8f3b-7a91f58cb383', 'ZULS830923ML2', '5f76042e-fffe-40ab-a950-8c083839e7b0'),
	('GEND800104DD4', '2025-12-02', 'c31361fb-6875-46b4-961e-9e5452e96552', 'ZULS830923ML2', '5f76042e-fffe-40ab-a950-8c083839e7b0'),
	('GEND800104DD4', '2025-12-02', '91ca87a5-d655-4a84-8ec6-ac7e10a5180c', 'ZULS830923ML2', '5f76042e-fffe-40ab-a950-8c083839e7b0'),
	('GENE800105EE5', '2025-12-02', '54c1055f-b555-47de-953a-bdcb52527dd5', 'ZULS830923ML2', '068fe9fd-c111-4753-be14-a101729b2748'),
	('GEND800104DD4', '2025-12-02', '3b27bff1-4665-4ddc-b219-15ca239851fb', 'ZULS830923ML2', '5f76042e-fffe-40ab-a950-8c083839e7b0'),
	('GEND800104DD4', '2025-12-02', '5533d1ae-bc33-475e-8339-43da354c82da', 'ZULS830923ML2', '5f76042e-fffe-40ab-a950-8c083839e7b0'),
	('GEND800104DD4', '2025-12-02', 'b74da571-8364-4297-94d6-5d076b08ad72', 'ZULS830923ML2', '5f76042e-fffe-40ab-a950-8c083839e7b0'),
	('GEND800104DD4', '2025-12-02', 'b9b81cdf-b31c-4f39-9a20-66ce4d66466b', 'ZULS830923ML2', '5f76042e-fffe-40ab-a950-8c083839e7b0'),
	('GEND800104DD4', '2025-12-02', 'fcd8ff28-25fd-4e05-8c72-1fba49b98a46', 'ZULS830923ML2', '5f76042e-fffe-40ab-a950-8c083839e7b0'),
	('GEND800104DD4', '2025-12-02', '04662a5c-ef25-455e-be27-303f3a7f72db', 'ZULS830923ML2', '5f76042e-fffe-40ab-a950-8c083839e7b0'),
	('GENB800102BB2', '2025-12-02', '385fa425-dd20-46a6-8ffd-0d752eb02fd3', 'ZULS830923ML2', '9d1749bd-0136-4b3b-8ff4-c686fcf0a766'),
	('GENB800102BB2', '2025-12-02', 'a804d7b9-69b9-4fd6-a0a7-0c94fa1a9d10', 'ZULS830923ML2', '9d1749bd-0136-4b3b-8ff4-c686fcf0a766'),
	('GENB800102BB2', '2025-12-02', '76867b5a-bea5-42e5-96b0-daa6f084cf14', 'ZULS830923ML2', '9d1749bd-0136-4b3b-8ff4-c686fcf0a766'),
	('GENB800102BB2', '2025-12-02', '55451318-c1ab-4b56-b960-a1be17747dac', 'ZULS830923ML2', '9d1749bd-0136-4b3b-8ff4-c686fcf0a766'),
	('GENB800102BB2', '2025-12-02', 'c61573f8-145d-46b7-8234-10eb38a38e80', 'ZULS830923ML2', '9d1749bd-0136-4b3b-8ff4-c686fcf0a766'),
	('GENE800105EE5', '2025-12-02', '8ef64704-b510-4fd8-9b54-66ad8c6704c7', 'ZULS830923ML2', '068fe9fd-c111-4753-be14-a101729b2748'),
	('GENB800102BB2', '2025-12-02', '46ed08a5-ab52-4422-8ce4-0bedd3966e96', 'ZULS830923ML2', '9d1749bd-0136-4b3b-8ff4-c686fcf0a766'),
	('GENC800103CC3', '2025-12-02', 'a22408a1-8618-4e9d-aba5-487e9a97fc24', 'ZULS830923ML2', 'a0473e8a-832f-4565-8a84-71a25a263930'),
	('GENC800103CC3', '2025-12-02', 'd9360ab2-ba98-44f9-a36d-6a018eb5443c', 'ZULS830923ML2', 'a0473e8a-832f-4565-8a84-71a25a263930'),
	('GENC800103CC3', '2025-12-02', '9430adaf-cb9c-49f8-94f8-840c892917c2', 'ZULS830923ML2', 'a0473e8a-832f-4565-8a84-71a25a263930'),
	('GENC800103CC3', '2025-12-02', '391b3068-b622-489f-b312-3a895ef9f02f', 'ZULS830923ML2', 'a0473e8a-832f-4565-8a84-71a25a263930'),
	('GENC800103CC3', '2025-12-02', 'ee36921c-e90f-4774-b76e-57b8d33d525c', 'ZULS830923ML2', 'a0473e8a-832f-4565-8a84-71a25a263930'),
	('GENB800102BB2', '2025-12-02', '76d8c105-ef76-4635-b895-4844286af9cf', 'ZULS830923ML2', '9d1749bd-0136-4b3b-8ff4-c686fcf0a766'),
	('GENC800103CC3', '2025-12-02', '773b77e8-e0e7-47f4-a216-52e0dcbe0927', 'ZULS830923ML2', 'a0473e8a-832f-4565-8a84-71a25a263930');


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
	('a2c573eb-1148-45e8-8e33-1ecd92167c06', 'revisor', 'Arturo', 'Santos', 'Ríos', 'Revisor Académico', '1d9c6248-0cc0-4496-b8ca-1fa012fbf38e', NULL, NULL, 'REV900101AA1'),
	('44e4c1d3-db35-4f9e-9443-5ace7fff70c7', 'generador', 'Diego', 'Torres', 'Vega', 'Recursos Humanos', NULL, NULL, 'GEND800104DD4', NULL),
	('a23d0701-0502-4b3a-b355-efe4c8ce9f04', 'generador', 'Bruno', 'Méndez', 'Paz', 'Jefe del Departamento de Desarrollo Academico', NULL, NULL, 'GENB800102BB2', NULL),
	('011fc7ed-9c1b-44f3-a232-1dfa8f57394c', 'generador', 'Elisa', 'Hernández', 'Mora', 'Jefe de Departamento de Administración', 'd1e7797e-7e6e-423f-9056-f1bda4a3bc1d', NULL, 'GENE800105EE5', NULL),
	('bd949366-d2e4-480b-b61d-c51ea82cfdc6', 'generador', 'Celia', 'Ramírez', 'Solís', 'Jefe del Departamento de Servicios Escolares', NULL, NULL, 'GENC800103CC3', NULL),
	('384d9b4d-28c5-441a-9c17-cad7b4187224', 'generador', 'Ana', 'Gómez', 'Luna', 'Capturista', '53798262-7c9d-4764-94e5-31e00c1790c5', NULL, 'GENA800101AA1', NULL);


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id", "type") VALUES
	('documentos', 'documentos', NULL, '2025-12-01 23:30:43.331488+00', '2025-12-01 23:30:43.331488+00', true, false, NULL, NULL, NULL, 'STANDARD');


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

INSERT INTO "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id", "user_metadata", "level") VALUES
	('1e81deda-04ae-4e45-ba60-ff76feab5ca7', 'documentos', '.emptyFolderPlaceholder', NULL, '2025-12-02 05:55:50.247378+00', '2025-12-02 05:55:50.247378+00', '2025-12-02 05:55:50.247378+00', '{"eTag": "\"d41d8cd98f00b204e9800998ecf8427e\"", "size": 0, "mimetype": "application/octet-stream", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T05:55:50.237Z", "contentLength": 0, "httpStatusCode": 200}', '6854833d-d4d8-4a97-9c5c-0c7173e81ae2', NULL, '{}', 1),
	('6dd2977a-0136-44c1-b0ef-850d570385fd', 'documentos', 'ZULS830923ML2-1764655486803.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 06:04:46.840847+00', '2025-12-02 06:04:46.840847+00', '2025-12-02 06:04:46.840847+00', '{"eTag": "\"09098d65b25590aecda611a0f9d70883\"", "size": 97690, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T06:04:46.823Z", "contentLength": 97690, "httpStatusCode": 200}', '91342187-e335-4e4d-af1e-a139c610b058', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('56d8bfee-ceeb-4cef-b805-d3fe93998c50', 'documentos', 'ZULS830923ML2-1764656098848.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 06:14:58.887489+00', '2025-12-02 06:14:58.887489+00', '2025-12-02 06:14:58.887489+00', '{"eTag": "\"c84580c8de6b277da6bf630249ef71ae\"", "size": 97690, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T06:14:58.877Z", "contentLength": 97690, "httpStatusCode": 200}', '2409f8d8-fd3e-479e-bdbf-b872b855729d', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('a2eb4173-5ea2-4215-8032-297dfa067633', 'documentos', 'ZULS830923ML2-1764656498858.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 06:21:38.915038+00', '2025-12-02 06:21:38.915038+00', '2025-12-02 06:21:38.915038+00', '{"eTag": "\"6188297c8002542d3333d695d70064ab\"", "size": 97691, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T06:21:38.907Z", "contentLength": 97691, "httpStatusCode": 200}', 'b4ec2a7c-899f-4549-b680-29a298e721da', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('8addffbf-3f29-4029-8eff-f9b0d4f4663a', 'documentos', 'ZULS830923ML2-1764656609918.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 06:23:29.964004+00', '2025-12-02 06:23:29.964004+00', '2025-12-02 06:23:29.964004+00', '{"eTag": "\"3c86241c9da94239bf8b78b1c2f1ea43\"", "size": 97690, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T06:23:29.955Z", "contentLength": 97690, "httpStatusCode": 200}', '5a0f6120-b9ba-4a27-98cc-94ea3a9bd5e1', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('ae978827-89d3-4426-aa44-91139421273d', 'documentos', 'ZULS830923ML2-1764657698002.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 06:41:38.073851+00', '2025-12-02 06:41:38.073851+00', '2025-12-02 06:41:38.073851+00', '{"eTag": "\"3c90756c48c16b5d5ada0ab43405a77d\"", "size": 97690, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T06:41:38.058Z", "contentLength": 97690, "httpStatusCode": 200}', '030b5040-01ae-4e80-861d-c7048ca4823d', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('3a021c8e-e735-46bf-a4ae-c5e097782295', 'documentos', 'ZULS830923ML2-1764658682265.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 06:58:02.340436+00', '2025-12-02 06:58:02.340436+00', '2025-12-02 06:58:02.340436+00', '{"eTag": "\"cd13e3f519bf9dbb6f9e54882c6a47d1\"", "size": 97690, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T06:58:02.324Z", "contentLength": 97690, "httpStatusCode": 200}', '92d687dc-b074-4fc9-9892-49474bb8bc1e', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('739791bb-68af-44d1-91a4-5a3a86423e31', 'documentos', 'ZULS830923ML2-1764658766610.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 06:59:26.683221+00', '2025-12-02 06:59:26.683221+00', '2025-12-02 06:59:26.683221+00', '{"eTag": "\"b8780893c4fb0950e9d5430c22344dc7\"", "size": 97690, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T06:59:26.667Z", "contentLength": 97690, "httpStatusCode": 200}', '19a856df-f3c3-49a3-816f-86b032ef54f2', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('72cf8ac2-ed33-4ced-aca1-1c3a94729440', 'documentos', 'ZULS830923ML2-1764703911269.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 19:31:51.959009+00', '2025-12-02 19:31:51.959009+00', '2025-12-02 19:31:51.959009+00', '{"eTag": "\"d6fd4f9a13ed9ad33b629dbf2ee82e86\"", "size": 116553, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T19:31:51.921Z", "contentLength": 116553, "httpStatusCode": 200}', 'f5c585d9-97d3-4d6e-abf1-b969ce295c5a', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('dec34620-558f-432e-b5db-f6ba51e07d74', 'documentos', 'ZULS830923ML2-1764703979090.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 19:32:59.199242+00', '2025-12-02 19:32:59.199242+00', '2025-12-02 19:32:59.199242+00', '{"eTag": "\"5386db4cc9919dbca76be14e793d52b1\"", "size": 116567, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T19:32:59.175Z", "contentLength": 116567, "httpStatusCode": 200}', 'a1f0fd13-a657-4e5f-8ae0-25ee0bb6ebe0', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('7cc64a9c-039d-4472-a484-d40f370995ea', 'documentos', 'ZULS830923ML2-1764704013425.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 19:33:33.513682+00', '2025-12-02 19:33:33.513682+00', '2025-12-02 19:33:33.513682+00', '{"eTag": "\"d396e3836c3afe0b7249992d64e90b95\"", "size": 116567, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T19:33:33.500Z", "contentLength": 116567, "httpStatusCode": 200}', '4a9598af-b828-4cde-840e-be9fa8054a39', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('0ee6534b-5427-408c-b1e8-3b45e0cd4221', 'documentos', 'ZULS830923ML2-1764704293757.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 19:38:13.86012+00', '2025-12-02 19:38:13.86012+00', '2025-12-02 19:38:13.86012+00', '{"eTag": "\"be8e0e0a2cfa0c75ea4047dd5f2e8992\"", "size": 116567, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T19:38:13.848Z", "contentLength": 116567, "httpStatusCode": 200}', '2703c49f-fc4e-4541-ab1e-5079e9b947b9', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('d3973ee4-8611-49b9-907c-d180676cd5b3', 'documentos', 'ZULS830923ML2-1764704472024.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 19:41:12.081054+00', '2025-12-02 19:41:12.081054+00', '2025-12-02 19:41:12.081054+00', '{"eTag": "\"5e222c2fdcdbb9e4bab722f2c410fb0f\"", "size": 97690, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T19:41:12.072Z", "contentLength": 97690, "httpStatusCode": 200}', '67344c85-e6d8-4ba6-ac7a-03699d020ff2', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('73641173-dee3-476f-9322-28107a0a2448', 'documentos', 'ZULS830923ML2-1764704492367.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 19:41:32.427099+00', '2025-12-02 19:41:32.427099+00', '2025-12-02 19:41:32.427099+00', '{"eTag": "\"df2f14c3a7dc667853e1071ce79aeeff\"", "size": 116567, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T19:41:32.416Z", "contentLength": 116567, "httpStatusCode": 200}', '60829557-8713-46f1-ac10-40551bbd4d25', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('f1417cde-6834-4e4b-8e85-6512afaf7df4', 'documentos', 'ZULS830923ML2-1764705082864.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 19:51:22.921273+00', '2025-12-02 19:51:22.921273+00', '2025-12-02 19:51:22.921273+00', '{"eTag": "\"06505360f38ddf1ac2d535c6f3083dea\"", "size": 119540, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T19:51:22.911Z", "contentLength": 119540, "httpStatusCode": 200}', 'b393d9f8-818b-4978-8d89-ba3374807d33', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('db3e2b5e-f0d1-42cc-8bfa-d6b34c0c20f9', 'documentos', 'ZULS830923ML2-1764705221340.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 19:53:41.39534+00', '2025-12-02 19:53:41.39534+00', '2025-12-02 19:53:41.39534+00', '{"eTag": "\"846719a493e49cf7ab9ce6173b890638\"", "size": 119556, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T19:53:41.385Z", "contentLength": 119556, "httpStatusCode": 200}', 'b62ee03c-3fe7-4c1d-847e-87705861dac0', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('7086c244-ed7a-4ffa-b3e3-39919d3007ef', 'documentos', 'ZULS830923ML2-1764705331757.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 19:55:31.810736+00', '2025-12-02 19:55:31.810736+00', '2025-12-02 19:55:31.810736+00', '{"eTag": "\"d06f743a0191658225bdcd3886bb992a\"", "size": 119550, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T19:55:31.797Z", "contentLength": 119550, "httpStatusCode": 200}', '65d13e14-21de-4fae-aef7-7faccdb27456', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('7d6d9758-e9d0-445a-93ff-72369426de07', 'documentos', 'ZULS830923ML2-1764705508477.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 19:58:28.619943+00', '2025-12-02 19:58:28.619943+00', '2025-12-02 19:58:28.619943+00', '{"eTag": "\"cf43f63618dfc84ad66b2ff5263e4c7a\"", "size": 119552, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T19:58:28.606Z", "contentLength": 119552, "httpStatusCode": 200}', '79315473-1d92-4e33-b2ef-63db3c41880e', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('c45a1270-40eb-402c-a3b7-92dcf42adc16', 'documentos', 'ZULS830923ML2-1764705598630.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 19:59:58.687521+00', '2025-12-02 19:59:58.687521+00', '2025-12-02 19:59:58.687521+00', '{"eTag": "\"d0144322f1a7e4fb16be9685605d001d\"", "size": 119552, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T19:59:58.680Z", "contentLength": 119552, "httpStatusCode": 200}', '7f8be898-c6a0-49a0-8ad9-c36542dd1cdd', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('dc495ea5-5971-4eff-83fe-04a8cc52ea86', 'documentos', 'ZULS830923ML2-1764706352494.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 20:12:32.570464+00', '2025-12-02 20:12:32.570464+00', '2025-12-02 20:12:32.570464+00', '{"eTag": "\"30b10a1af00e79003973e698ed27e58c\"", "size": 90481, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T20:12:32.559Z", "contentLength": 90481, "httpStatusCode": 200}', '32895537-e49f-4f1c-bf35-4edcf95d9bcb', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('e7a46a4c-9491-4f1f-93cc-fa8439f85686', 'documentos', 'ZULS830923ML2-1764706594443.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 20:16:34.520792+00', '2025-12-02 20:16:34.520792+00', '2025-12-02 20:16:34.520792+00', '{"eTag": "\"e1cf7189c1a7455a4eb085b00ee28b39\"", "size": 90481, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T20:16:34.504Z", "contentLength": 90481, "httpStatusCode": 200}', '855c97d9-ba45-49d2-a0dd-bbd05006ceec', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('5ab54ad2-0c0e-4681-9bc4-e57a5327ef51', 'documentos', 'ZULS830923ML2-1764706702409.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 20:18:22.508483+00', '2025-12-02 20:18:22.508483+00', '2025-12-02 20:18:22.508483+00', '{"eTag": "\"c1c71765c8e1d9abff4b30fc7a863080\"", "size": 92991, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T20:18:22.496Z", "contentLength": 92991, "httpStatusCode": 200}', 'a4bd26bb-2318-441f-8317-fbfc66cd3e22', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('970ef5bd-53a3-408e-9f0b-53dadd06e223', 'documentos', 'ZULS830923ML2-1764706781889.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 20:19:42.132316+00', '2025-12-02 20:19:42.132316+00', '2025-12-02 20:19:42.132316+00', '{"eTag": "\"b08aa2485ad5b7723a6ddbd56ba7fa3f\"", "size": 93365, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T20:19:42.109Z", "contentLength": 93365, "httpStatusCode": 200}', 'da6557a1-033b-4e4a-8189-cc98311c61b2', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('b8fff0d2-cd9a-4141-907e-3f8072b2ef98', 'documentos', 'ZULS830923ML2-1764706976880.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 20:22:56.944343+00', '2025-12-02 20:22:56.944343+00', '2025-12-02 20:22:56.944343+00', '{"eTag": "\"cd4fafea5be0fa347b18968b0cfcfa8f\"", "size": 97689, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T20:22:56.936Z", "contentLength": 97689, "httpStatusCode": 200}', '8b9b4f19-6630-4032-a87d-cb1e995b610d', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('cb6c1856-d99b-4fda-a2d1-d7dd600ae544', 'documentos', 'ZULS830923ML2-1764707080109.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 20:24:40.197123+00', '2025-12-02 20:24:40.197123+00', '2025-12-02 20:24:40.197123+00', '{"eTag": "\"161fa387b84365e6f3e9b378e59fe41c\"", "size": 93368, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T20:24:40.187Z", "contentLength": 93368, "httpStatusCode": 200}', 'e43b1148-8510-408c-830c-d5d3ecbdef91', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('7a496b47-fca9-4f53-ba36-3b541eb094a5', 'documentos', 'ZULS830923ML2-1764709582004.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 21:06:22.373008+00', '2025-12-02 21:06:22.373008+00', '2025-12-02 21:06:22.373008+00', '{"eTag": "\"0ea6b8902ff7fc9e3be562201931e9dc\"", "size": 100976, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T21:06:22.332Z", "contentLength": 100976, "httpStatusCode": 200}', '2e1938c6-f078-4bd8-9aa1-f55e5d3cda29', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('ebf7e7df-e260-4618-a8f3-0787f44627c8', 'documentos', 'ZULS830923ML2-1764709812750.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 21:10:12.837808+00', '2025-12-02 21:10:12.837808+00', '2025-12-02 21:10:12.837808+00', '{"eTag": "\"deae0c100664deda02b1a5a01d96096a\"", "size": 100976, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T21:10:12.827Z", "contentLength": 100976, "httpStatusCode": 200}', '794e54a0-3719-4ce3-9233-a1c2ea8d29fb', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('2c87e9dd-9530-4577-860d-effb03f2af03', 'documentos', 'ZULS830923ML2-1764709893925.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 21:11:34.102477+00', '2025-12-02 21:11:34.102477+00', '2025-12-02 21:11:34.102477+00', '{"eTag": "\"100d29f3285e26ec206faa5ecc609518\"", "size": 100976, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T21:11:34.084Z", "contentLength": 100976, "httpStatusCode": 200}', '06778e77-44ae-4fd3-952a-7e7e89dd2430', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('bc80b2e1-6460-4a82-9b04-f3e6209a86b8', 'documentos', 'ZULS830923ML2-1764709948961.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 21:12:29.007531+00', '2025-12-02 21:12:29.007531+00', '2025-12-02 21:12:29.007531+00', '{"eTag": "\"05de6419d980360037d68f8d40bff6ab\"", "size": 103787, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T21:12:28.993Z", "contentLength": 103787, "httpStatusCode": 200}', '73284267-a703-41df-87ad-1a31d04ae85f', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('e877d086-3f6c-46df-8824-ce853c33ce44', 'documentos', 'ZULS830923ML2-1764710033831.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 21:13:53.884114+00', '2025-12-02 21:13:53.884114+00', '2025-12-02 21:13:53.884114+00', '{"eTag": "\"23c2984a56bee4355c37e734ebf91c2f\"", "size": 103865, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T21:13:53.875Z", "contentLength": 103865, "httpStatusCode": 200}', 'a0da39d0-163c-4679-9c39-54e62e3413e5', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('086d7c77-daa1-4f4d-8c79-aaff46f1f7d3', 'documentos', 'ZULS830923ML2-1764710292585.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 21:18:12.645135+00', '2025-12-02 21:18:12.645135+00', '2025-12-02 21:18:12.645135+00', '{"eTag": "\"4b4ff47065dfb02f8b2f99a696a00b35\"", "size": 93369, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T21:18:12.633Z", "contentLength": 93369, "httpStatusCode": 200}', '0398d7a4-51bd-4827-ba1f-780b965983a1', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1),
	('6ce959d3-bac7-4323-bd02-0fc91996aaa8', 'documentos', 'ZULS830923ML2-1764710314108.pdf', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '2025-12-02 21:18:34.242283+00', '2025-12-02 21:18:34.242283+00', '2025-12-02 21:18:34.242283+00', '{"eTag": "\"f8f51b51bd69411724d1d307aaae58ce\"", "size": 104629, "mimetype": "application/pdf", "cacheControl": "max-age=3600", "lastModified": "2025-12-02T21:18:34.205Z", "contentLength": 104629, "httpStatusCode": 200}', '0bd9f2c4-d5b2-45f2-ac9d-914f21feb0cd', '748ba0b1-73d2-49ec-b48c-1f7a20df69bb', '{}', 1);


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

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 67, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

-- \unrestrict U4ULVffY8bNyGccqpEwMppQD2Qt4nYovZLRyeKE6oeMRDkHRoB3Z5xJOedIKb1G

RESET ALL;
