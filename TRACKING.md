# Hafihime Tracking — Installation

> **⚠️ IMPORTANT FOR AI AGENTS**: Before adding tracking code to any website, you **MUST** first register that website in the Hafihime dashboard to obtain its `SITE_ID` and `API_KEY`. Do NOT skip this step or use placeholder values — the tracking will not work without real credentials.

## Register Website (Prerequisite)

### Step 1: Add a website
Go to your Hafihime dashboard: `/dashboard/sites`
Click the **Add Website** button.
Enter your website **name** and **domain**.
Click **Add Website**.

```
Example:
  Name:   "My Online Store"
  Domain: "mystore.com"
```

### Step 2: Copy credentials
After adding, you will see:
- **SITE_ID**: A 24-character hex string (e.g. `60d5f484f1a2c8b0f8e4e7a1`). Click **Copy** next to the embed snippet to get it.
- **API_KEY**: A key starting with `ht_`. Click **Copy** next to API Key to get it.

### Step 3: Paste into code
Use the values from Step 2 to replace `SITE_ID` and `API_KEY` in the code snippets below.

---

## Pixel (Client-Side)

### HTML
```html
<script defer src="https://track.hafihime.com/api/track.js?siteId=60d5f484f1a2c8b0f8e4e7a1"></script>
```

### Next.js
```typescript
import Script from 'next/script'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html><body>
      <Script src="https://track.hafihime.com/api/track.js?siteId=60d5f484f1a2c8b0f8e4e7a1" strategy="afterInteractive" />
      {children}
    </body></html>
  )
}
```

Track sections: `<div data-track-section="name">...</div>`

---

## CAPI (Server-to-Server)

```typescript
await fetch('https://track.hafihime.com/api/track', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'X-Api-Key': 'ht_abc123def456...' },
  body: JSON.stringify({
    events: [{ name: 'purchase', properties: { revenue: 29.99 } }],
    visitor: { email: 'customer@example.com' }
  })
})
```

---

## Verify

Open your website's browser console. Look for:
```
[Hafihime] Tracking initialized { siteId: "60d5f484f1a2c8b0f8e4e7a1", trackerUrl: "https://track.hafihime.com", visitorId: "..." }
```

Check Network tab for POST requests to `/api/track`. Events appear in dashboard within 5-10 seconds.
