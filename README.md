
## Steps to test

1. Create .env at root and add your envs form supabase with following name:
  ```bash
  SUPABASE_URL=you-url
  SUPABASE_ANON_KEY=you-anon-key
```
2. run dev server with
 ```bash
 npm run dev
```

## Schema

- Contacts
```bash
  contactqueries (
       id serial primary key,
       name varchar not null,
       email varchar not null,
       message varchar not null,
       interest varchar not null
)

```