# Bridgemohan Technologies

Professional IT Software Consulting Services website built with [Next.js](https://nextjs.org/).

## About

Bridgemohan Technologies provides comprehensive IT software consulting services to help businesses leverage technology for growth and efficiency. Our services include:

- Custom Software Development
- Cloud Solutions  
- System Integration
- Security Consulting
- Technology Strategy
- Technical Support

## Contact Information

- **Email**: nbridgemohan@gmail.com

## Environment Setup

1. Create a `.env.local` file in the root directory with the following variables:

```env
MAILGUN_API_KEY=your_mailgun_api_key_here
```

**Note**: Get your Mailgun API key from [https://app.mailgun.com/app/account/security/api_keys](https://app.mailgun.com/app/account/security/api_keys)

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `pages/index.tsx` - Main landing page showcasing services
- `pages/contact.tsx` - Contact form and information
- `pages/api/` - API routes for contact form functionality
- `styles/` - Global styles and Tailwind configuration

## Technologies Used

- Next.js 13
- React 18  
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
