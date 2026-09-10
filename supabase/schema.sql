create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.blogs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null default '',
  content jsonb not null default '[]'::jsonb,
  cover_image_url text,
  category text not null default 'Conseil',
  author text not null default 'EGYMAR Consulting',
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.formations (
  id uuid primary key default gen_random_uuid(),
  code text,
  slug text,
  title text not null,
  category text not null default 'Formations générales / transversales',
  audience text not null default '',
  duration text not null default '',
  objective text not null default '',
  description text not null default '',
  format text not null default '',
  status text not null default 'draft' check (status in ('draft', 'published')),
  image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.formations add column if not exists slug text;
update public.formations set slug = lower(regexp_replace(regexp_replace(title, '[^a-zA-Z0-9]+', '-', 'g'), '(^-|-$)', '', 'g')) where slug is null;
create unique index if not exists formations_slug_key on public.formations (slug);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null default '',
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;
alter table public.blogs enable row level security;
alter table public.formations enable row level security;
alter table public.contact_messages enable row level security;

create or replace function public.is_admin() returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.admin_users where user_id = auth.uid());
$$;

create policy "published blogs are public" on public.blogs for select using (status = 'published' or public.is_admin());
create policy "admins manage blogs" on public.blogs for all using (public.is_admin()) with check (public.is_admin());
create policy "published formations are public" on public.formations for select using (status = 'published' or public.is_admin());
create policy "admins manage formations" on public.formations for all using (public.is_admin()) with check (public.is_admin());
create policy "visitors can send messages" on public.contact_messages for insert with check (true);
create policy "admins can read messages" on public.contact_messages for select using (public.is_admin());
create policy "admins can read admin membership" on public.admin_users for select using (user_id = auth.uid() or public.is_admin());

-- Create these buckets first in Storage, or uncomment equivalent bucket inserts in a controlled deployment.
insert into storage.buckets (id, name, public) values ('blog-images', 'blog-images', true), ('formation-images', 'formation-images', true) on conflict (id) do update set public = excluded.public;
create policy "public can read CMS images" on storage.objects for select using (bucket_id in ('blog-images', 'formation-images'));
create policy "admins can upload CMS images" on storage.objects for insert with check (bucket_id in ('blog-images', 'formation-images') and public.is_admin());
create policy "admins can update CMS images" on storage.objects for update using (bucket_id in ('blog-images', 'formation-images') and public.is_admin()) with check (bucket_id in ('blog-images', 'formation-images') and public.is_admin());
create policy "admins can delete CMS images" on storage.objects for delete using (bucket_id in ('blog-images', 'formation-images') and public.is_admin());

insert into public.blogs (title, slug, excerpt, content, category, author, status, published_at)
values
('Comment structurer un système qualité performant', 'comment-structurer-un-systeme-qualite-performant', 'Des bonnes pratiques concrètes pour aligner organisation, processus et conformité.', '["Un système qualité performant repose avant tout sur des processus clairs, une gouvernance stable et une culture de l’amélioration continue.", "Ensuite, il est essentiel d’impliquer les équipes à chaque niveau.", "Enfin, un tableau de bord simple permet de suivre les indicateurs clés."]'::jsonb, 'Conseil', 'EGYMAR Consulting', 'published', now()),
('L’audit interne comme levier de transformation', 'laudit-interne-comme-levier-de-transformation', 'Identifier les risques, renforcer la gouvernance et améliorer la continuité.', '["L’audit interne est un levier stratégique pour mieux piloter les risques.", "Il permet de valider la pertinence des processus et de proposer des recommandations concrètes."]'::jsonb, 'Audit', 'EGYMAR Consulting', 'published', now()),
('Former les équipes pour une amélioration durable', 'former-les-equipes-pour-une-amelioration-durable', 'Une approche pédagogique pensée pour favoriser l’adhésion et la performance.', '["La formation est un vecteur majeur de transformation lorsqu’elle repose sur des objectifs précis.", "La combinaison entre transmission, pratique et accompagnement crée une vraie culture d’amélioration continue."]'::jsonb, 'Formation', 'EGYMAR Consulting', 'published', now())
on conflict (slug) do nothing;

insert into public.formations (code, title, duration, status) values
('EGY-001', 'Management de la qualité avancé', '3 jours', 'published'),
('EGY-002', 'Audit interne et conformité', '2 jours', 'published'),
('EGY-003', 'Formation à la culture qualité', '1 jour', 'published'),
('EGY-004', 'Maîtrise des risques et contrôles', '2 jours', 'published')
on conflict do nothing;

insert into public.formations (code, slug, title, category, audience, duration, objective, description, format, status)
values
('F-GT1', 'sensibilisation-systemes-management-iso', 'Sensibilisation aux systèmes de management ISO', 'Formations générales / transversales', 'Direction, encadrement, nouveaux collaborateurs', '0,5 à 1 jour', 'Comprendre les enjeux et principes d’un système de management', 'Comprendre les enjeux et principes d’un système de management', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-GT2', 'approche-processus-amelioration-continue-pdca', 'Approche processus et amélioration continue (PDCA)', 'Formations générales / transversales', 'Pilotes de processus, managers qualité', '1 jour', 'Cartographier les processus et piloter la performance', 'Cartographier les processus et piloter la performance', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-GT3', 'analyse-gestion-risques-iso-31000', 'Analyse et gestion des risques (ISO 31000 / approche par les risques)', 'Formations générales / transversales', 'Managers qualité, direction', '1 jour', 'Identifier, évaluer et traiter les risques et opportunités', 'Identifier, évaluer et traiter les risques et opportunités', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-GT4', 'redaction-documents-qualite', 'Rédaction de documents qualité (procédures, modes opératoires)', 'Formations générales / transversales', 'Référents qualité', '1 jour', 'Structurer une documentation claire et conforme', 'Structurer une documentation claire et conforme', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-SM01', 'comprendre-interpreter-iso-9001-2015', 'Comprendre et interpréter l’ISO 9001:2015', 'ISO 9001 — Système de management de la qualité', 'Managers qualité, comité de direction', '1 à 2 jours', 'Maîtriser les exigences de la norme', 'Maîtriser les exigences de la norme', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-SM02', 'mise-en-oeuvre-smq-iso-9001', 'Mise en œuvre d’un SMQ ISO 9001', 'ISO 9001 — Système de management de la qualité', 'Responsables qualité, chefs de projet', '2 à 3 jours', 'Construire et déployer un système documentaire complet', 'Construire et déployer un système documentaire complet', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-SM03', 'formation-auditeurs-internes-iso-9001', 'Formation d’auditeurs internes ISO 9001', 'ISO 9001 — Système de management de la qualité', 'Auditeurs internes désignés', '2 jours', 'Savoir préparer, mener et conclure un audit interne', 'Savoir préparer, mener et conclure un audit interne', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-SM04', 'preparation-audit-certification-iso-9001', 'Préparation à l’audit de certification ISO 9001', 'ISO 9001 — Système de management de la qualité', 'Équipe de direction, référents qualité', '1 jour', 'Se préparer efficacement au passage devant l’organisme certificateur', 'Se préparer efficacement au passage devant l’organisme certificateur', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-LE 01', 'interpretation-iso-cei-17025-2017', 'Interprétation de l’ISO/CEI 17025:2017', 'ISO/CEI 17025 — Laboratoires d’étalonnage et d’essais', 'Responsables qualité laboratoire, techniciens', '2 jours', 'Maîtriser les exigences générales, techniques et de management', 'Maîtriser les exigences générales, techniques et de management', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-LE 02', 'metrologie-incertitudes-mesure', 'Métrologie et incertitudes de mesure', 'ISO/CEI 17025 — Laboratoires d’étalonnage et d’essais', 'Techniciens, métrologues', '2 jours', 'Calculer et exprimer les incertitudes de mesure', 'Calculer et exprimer les incertitudes de mesure', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-LE 03', 'validation-verification-methodes-essai-etalonnage', 'Validation et vérification des méthodes d’essai/étalonnage', 'ISO/CEI 17025 — Laboratoires d’étalonnage et d’essais', 'Responsables techniques', '1 à 2 jours', 'Garantir la fiabilité des méthodes utilisées', 'Garantir la fiabilité des méthodes utilisées', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-LE 04', 'impartialite-confidentialite-risques-laboratoire', 'Impartialité, confidentialité et gestion des risques au laboratoire', 'ISO/CEI 17025 — Laboratoires d’étalonnage et d’essais', 'Direction, personnel de laboratoire', '1 jour', 'Répondre aux exigences d’indépendance du référentiel', 'Répondre aux exigences d’indépendance du référentiel', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-LE 05', 'auditeurs-internes-iso-17025', 'Formation d’auditeurs internes ISO 17025', 'ISO/CEI 17025 — Laboratoires d’étalonnage et d’essais', 'Auditeurs internes', '2 jours', 'Auditer un laboratoire selon les exigences COFRAC', 'Auditer un laboratoire selon les exigences COFRAC', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-LE 06', 'preparation-accreditation-laboratoire', 'Préparation à l’accréditation', 'ISO/CEI 17025 — Laboratoires d’étalonnage et d’essais', 'Équipe de direction, référents qualité', '1 à 2 jours', 'Anticiper les attendus de l’évaluation d’accréditation', 'Anticiper les attendus de l’évaluation d’accréditation', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-OI 01', 'interpretation-iso-cei-17020-2012', 'Interprétation de l’ISO/CEI 17020:2012', 'ISO/CEI 17020 — Organismes d’inspection', 'Responsables qualité, inspecteurs', '2 jours', 'Maîtriser les exigences applicables aux organismes d’inspection', 'Maîtriser les exigences applicables aux organismes d’inspection', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-OI 02', 'impartialite-independance-organisme-inspection', 'Impartialité et indépendance de l’organisme d’inspection', 'ISO/CEI 17020 — Organismes d’inspection', 'Direction, inspecteurs', '1 jour', 'Garantir la conformité aux exigences d’impartialité', 'Garantir la conformité aux exigences d’impartialité', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-OI 03', 'auditeurs-internes-iso-17020', 'Formation d’auditeurs internes ISO 17020', 'ISO/CEI 17020 — Organismes d’inspection', 'Auditeurs internes', '2 jours', 'Réaliser des audits internes conformes au référentiel', 'Réaliser des audits internes conformes au référentiel', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-OI 04', 'preparation-accreditation-inspection', 'Préparation à l’accréditation (inspection)', 'ISO/CEI 17020 — Organismes d’inspection', 'Direction, responsables qualité', '1 à 2 jours', 'Se préparer à l’évaluation d’accréditation', 'Se préparer à l’évaluation d’accréditation', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-CP 01', 'cadre-reglementaire-normatif', 'Cadre réglementaire et normatif', 'Certification produits et marque NM (BTP)', 'Directions, responsables qualité', '1 jour', 'Connaître le cadre réglementaire marocain', 'Connaître le cadre réglementaire marocain', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-CP 02', 'smq-certification-produits-btp', 'Système de management de la qualité', 'Certification produits et marque NM (BTP)', 'Responsables qualité, chefs de projet', '2 jours', 'Connaître les exigences de la norme ISO 9001', 'Connaître les exigences de la norme ISO 9001', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
('F-CP 03', 'exigences-techniques-produits-btp', 'Exigences techniques produits BTP', 'Certification produits et marque NM (BTP)', 'Responsables techniques, chefs de projet', '2 jours', 'Caractéristiques et essais spécifiques par famille de produits', 'Caractéristiques et essais spécifiques par famille de produits', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
(null, 'habilitation-qualification-personnel-technique', 'Habilitation et qualification du personnel technique', 'Formations métiers / complémentaires', 'Personnel technique et responsables qualité', '1 jour', 'Structurer l’habilitation et la qualification des compétences', 'Structurer l’habilitation et la qualification des compétences', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
(null, 'gestion-equipements-etalonnage-interne', 'Gestion des équipements et étalonnage interne', 'Formations métiers / complémentaires', 'Techniciens, responsables techniques', '1 à 2 jours', 'Maîtriser le suivi des équipements et des étalonnages', 'Maîtriser le suivi des équipements et des étalonnages', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
(null, 'traitement-reclamations-non-conformites', 'Traitement des réclamations et non-conformités', 'Formations métiers / complémentaires', 'Managers, référents qualité', '1 jour', 'Traiter les écarts et améliorer la satisfaction client', 'Traiter les écarts et améliorer la satisfaction client', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
(null, 'communication-reporting-client-laboratoires-inspection', 'Communication et reporting client (spécifique laboratoires/inspection)', 'Formations métiers / complémentaires', 'Équipes laboratoires et inspection', '1 jour', 'Produire une communication client claire et fiable', 'Produire une communication client claire et fiable', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
(null, 'certification-iso-45001-14001', 'Certification ISO 45001 ou ISO 14001', 'Formations métiers / complémentaires', 'Managers qualité, HSE, direction', '2 jours', 'Comprendre les principes d’un système santé-sécurité ou environnement', 'Comprendre les principes d’un système santé-sécurité ou environnement', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
(null, 'essais-laboratoire-secteur-btp', 'Essais de laboratoire (secteur BTP)', 'Formations métiers / complémentaires', 'Techniciens et responsables de laboratoire', '2 jours', 'Renforcer la maîtrise des essais appliqués au secteur BTP', 'Renforcer la maîtrise des essais appliqués au secteur BTP', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
(null, 'sauveteur-secouriste-travail', 'Sauveteur secouriste du travail', 'Formations métiers / complémentaires', 'Salariés et équipes opérationnelles', '2 jours', 'Réagir efficacement face aux situations d’urgence', 'Réagir efficacement face aux situations d’urgence', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
(null, 'risques-securite-epi', 'Risques sécurité et EPI', 'Formations métiers / complémentaires', 'Personnel exposé et encadrement', '1 jour', 'Prévenir les risques et choisir les équipements adaptés', 'Prévenir les risques et choisir les équipements adaptés', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published'),
(null, 'securite-incendie-evacuation', 'Sécurité incendie et évacuation', 'Formations métiers / complémentaires', 'Personnel et équipes d’évacuation', '1 jour', 'Prévenir les incendies et organiser une évacuation efficace', 'Prévenir les incendies et organiser une évacuation efficace', 'Présentiel ou à distance, en intra ou inter-entreprises', 'published')
on conflict (slug) do nothing;

-- Create the storage buckets in Dashboard > Storage, then apply matching policies:
-- blog-images and formation-images, both public for read and admin-only for upload/update/delete.
