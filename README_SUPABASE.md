# Configuration CMS Supabase

1. Créer un projet Supabase et renseigner `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` dans `.env`.
2. Exécuter `supabase/schema.sql` dans le SQL Editor. Le script conserve le contenu local fourni dans le projet.
3. Créer les buckets publics `blog-images` et `formation-images` dans Storage. Autoriser la lecture publique et limiter upload/update/delete aux utilisateurs présents dans `admin_users`.
4. Créer un utilisateur dans Supabase Auth, puis ajouter son UUID dans `admin_users`:

```sql
insert into public.admin_users (user_id) values ('UUID_DE_L_UTILISATEUR');
```

Sans variables d'environnement, le site public utilise volontairement les données locales afin de rester consultable. L'administration nécessite Supabase configuré.
