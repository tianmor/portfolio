# Contact form email setup

The form uses EmailJS so visitors can email `christianmorando6@gmail.com` without exposing Gmail credentials or an email API secret in the website.

## EmailJS dashboard setup

1. Create an EmailJS account and add a Gmail email service. Authorize your Gmail account directly with EmailJS; never put your Gmail password in this project.
2. Create a template with **To Email** set to `christianmorando6@gmail.com`.
3. Use these template variables:
   - **From Name:** `{{name}}`
   - **Reply-To:** `{{email}}`
   - **Subject:** `Portfolio contact: {{subject}}`
   - **Message body:** include `{{name}}`, `{{email}}`, `{{subject}}`, and `{{message}}`.
4. In EmailJS account security, allow only your deployed portfolio hostname and `localhost` for local testing. Enable available anti-spam protections.
5. Copy the EmailJS Service ID, Template ID, and Public Key.

## Local development

Create `.env.local` in this project root (it is git-ignored) with:

```dotenv
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart `npm run dev` after changing environment variables. Submit a test from the Contact section and confirm it arrives in Gmail.

## Vercel deployment

In the Vercel project, open **Settings → Environment Variables** and add the same three variables for **Production** (and Preview if desired). Save, then redeploy the latest deployment. Test the live form and verify the message reaches the inbox.

The EmailJS public key is designed for browser use, but restrict allowed origins in EmailJS and enable anti-spam protections. Do not add Gmail passwords, app passwords, or private API keys to `NEXT_PUBLIC_*` variables.
