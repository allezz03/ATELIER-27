# ATELIER 27 — Interior Design Studio

Sito vetrina demo realizzato con React, Vite, React Router, Framer Motion e Supabase.

## Requisiti
- Node.js 20 o superiore (consigliato)
- npm

## Avvio in locale

```bash
npm install
npm run dev
```

Apri l'indirizzo mostrato da Vite (di solito http://localhost:5173).

## Build di produzione

```bash
npm run build
npm run preview
```

La cartella pronta per il deployment sarà `dist/`.

## Supabase (facoltativo ma consigliato)

1. Crea un progetto su https://supabase.com.
2. Apri il SQL Editor e incolla il contenuto di `supabase/schema.sql`.
3. Copia Project URL e anon/public key dalle impostazioni API.
4. Crea un file `.env.local` nella root:

```env
VITE_SUPABASE_URL=https://TUO-PROGETTO.supabase.co
VITE_SUPABASE_ANON_KEY=LA_TUA_ANON_PUBLIC_KEY
```

5. Riavvia il server (`npm run dev`).

Senza Supabase configurato il form funziona in modalità anteprima: mostra una conferma ma non salva i dati. Con Supabase configurato, le richieste vengono inserite in `contact_requests`.

> La chiave anon/public è destinata all'uso frontend. Non inserire mai service_role key o altre chiavi segrete nel frontend.

## GitHub

Crea un repository vuoto chiamato `atelier-27`, poi dalla cartella del progetto:

```bash
git init
git add .
git commit -m "Initial commit - ATELIER 27"
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/atelier-27.git
git push -u origin main
```

## Vercel

1. Accedi a https://vercel.com.
2. Seleziona **Add New → Project** e importa `atelier-27` da GitHub.
3. Framework: Vite (rilevato automaticamente).
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Se usi Supabase, inserisci `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` in **Settings → Environment Variables**.
7. Fai il deploy.

Vercel gestisce automaticamente il routing delle pagine tramite la configurazione standard del progetto Vite. Se in futuro aggiungi regole personalizzate, verifica che i percorsi React Router restituiscano `index.html`.

## Pagine incluse

- `/` Home
- `/studio` Studio
- `/progetti` Portfolio con filtri
- `/progetti/:id` Dettaglio progetto
- `/servizi` Servizi
- `/contatti` Form contatti

## Personalizzazione

- Dati e immagini dei progetti: `src/data/projects.js`
- Layout e pagine: `src/App.jsx`
- Stile: `src/styles.css`
- Integrazione Supabase: `src/lib/supabase.js`

Le immagini attualmente utilizzate sono immagini remote Unsplash: per una pubblicazione commerciale definitiva, sostituiscile con immagini autorizzate dal cliente o con licenza adeguata.

Il link esterno **Torna su TRIMAP** è presente nella testata di tutte le pagine e apre https://trimap.it in una nuova scheda.
