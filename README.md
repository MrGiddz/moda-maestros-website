# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## SMTP form setup

The contact form and get started form now submit through the Supabase Edge Function `send-form-email`. SMTP credentials must be stored as Supabase secrets, not in the frontend `.env`.

Set the required secrets:

```sh
supabase secrets set \
  SMTP_HOST=smtp.your-provider.com \
  SMTP_PORT=587 \
  SMTP_USER=your-smtp-username \
  SMTP_PASS=your-smtp-password \
  SMTP_FROM_EMAIL=hello@modamaestro.com.ng \
  SMTP_TO_EMAIL=hello@modamaestro.com.ng \
  SMTP_FROM_NAME="Moda Maestro Website" \
  SMTP_SECURE=false
```

Deploy the function:

```sh
supabase functions deploy send-form-email
```

If you test locally with the Supabase CLI, serve the function with your local secrets file:

```sh
supabase functions serve send-form-email --env-file supabase/.env.local
```

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
