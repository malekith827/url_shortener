# URL Shortener

A full-stack URL shortener built using Node.js, Express, PostgreSQL, and deployed on Render.

## Features

- Shorten long URLs
- Redirect users using generated short links
- Track click counts
- PostgreSQL database storage
- Simple frontend UI
- Cloud deployment

## Tech Stack

Frontend:
- HTML
- CSS
- JavaScript

Backend:
- Node.js
- Express

Database:
- PostgreSQL

Deployment:
- Render

## Live Demo

https://your-app.onrender.com

## API Endpoints

### Create Short URL

POST /shorten

Example:

```json
{
  "url": "https://google.com"
}
```

Response:

```json
{
  "short_url": "https://yourapp.onrender.com/abc123"
}
```

### Redirect

GET /:code

Example:

```plaintext
/abc123
```

Redirects users to the original URL and increments click count.

## Run Locally

```bash
git clone YOUR_REPO_URL
cd url_shortener
npm install
node index.js
```

## Future Improvements

- JWT Authentication
- User dashboard
- Analytics
- Custom aliases
- Expiring URLs
