
  create policy "permitir leer documentos"
  on "storage"."objects"
  as permissive
  for select
  to authenticated
using ((bucket_id = 'documentos'::text));



  create policy "permitir update documentos"
  on "storage"."objects"
  as permissive
  for update
  to authenticated
using ((bucket_id = 'documentos'::text));



  create policy "permitir upload documentos"
  on "storage"."objects"
  as permissive
  for insert
  to authenticated
with check ((bucket_id = 'documentos'::text));



