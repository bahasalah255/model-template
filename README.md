# Portfolio Omar Bader

Site statique en Next.js 14 (App Router) + Tailwind CSS 3.

## Lancer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # génère le site statique dans /out
```

## Modifier le contenu

Tout se change dans `lib/data.js` : nom, bio, WhatsApp, email, Instagram, mensurations et liste des photos.

Pour ajouter une photo : la copier dans `public/photos/` (2000 px max sur le grand côté), puis ajouter une ligne dans `photos` (largeur, hauteur, série et étiquette). Les filtres du book se mettent à jour tout seuls.

## Avant la mise en ligne

- Vérifier les photos : 17 sont en place, en quatre séries (Editorial, Portrait, Lifestyle, Couleur).
- Remplir les mensurations, la bio, le WhatsApp et l'email.
- Supprimer le bandeau « Maquette de présentation » dans `app/page.jsx`.

## Structure

```
app/         layout, page, styles globaux (palette en variables CSS, thème clair/sombre automatique)
components/  Nav, Hero, Book (galerie + lightbox), Profile, Contact, Footer
lib/data.js  contenu du site
```
