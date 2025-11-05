# EmailJS Setup Guide

This contact form uses EmailJS to send emails directly to your Gmail inbox. Follow these steps to set it up:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier allows 200 emails/month)

## Step 2: Connect Your Email

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail** (or your email provider)
4. Click **Connect Account** and authorize EmailJS
5. Note your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. In the EmailJS dashboard, go to **Email Templates** (left sidebar)
2. Click **Create New Template** button
3. You'll see a template editor with two sections:
   - **Subject** field (top)
   - **Content** field (main body)

4. **Set the Subject Line:**
   - In the Subject field, enter: `Contact Form: {{subject}}`
   - This will use the subject the user selected in your form

5. **Set the Email Content:**
   - In the Content field, paste this template:

```
New Contact Form Submission

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Newsletter Subscription: {{newsletter}}

Message:
{{message}}

---
Reply to this email to respond to: {{from_email}}
```

6. **Configure Template Settings:**
   - **Template Name**: Give it a name like "Contact Form" or "AstroByKrishna Contact"
   - **Service**: Select the Gmail service you created in Step 2
   - **To Email**: Enter `astrobykrishna@gmail.com` (or your email)
   - **From Name**: You can use `{{from_name}}` or a fixed name like "AstroByKrishna Website"
   - **From Email**: Use your Gmail address (same as To Email)
   - **Reply To**: Enter `{{from_email}}` so you can reply directly to the sender

7. **Save the Template:**
   - Click **Save** button
   - Note your **Template ID** (you'll see it in the URL or template details - it looks like `template_xxxxxxxxx`)

### Template Variable Reference

These variables match what your contact form sends:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email address
- `{{subject}}` - Selected subject (Collaboration, Press/Media, etc.)
- `{{message}}` - User's message
- `{{newsletter}}` - "Yes" or "No" based on checkbox

### Example Template Preview

When someone submits the form, you'll receive an email like this:

```
Subject: Contact Form: Collaboration

New Contact Form Submission

From: John Doe
Email: john@example.com
Subject: Collaboration
Newsletter Subscription: Yes

Message:
Hi, I'm interested in collaborating on a project...

---
Reply to this email to respond to: john@example.com
```

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key** (also called API Key)

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root of your project
2. Add these variables:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the values with your actual EmailJS credentials

## Step 6: Deploy to Vercel

When deploying to Vercel:

1. Go to your project settings in Vercel
2. Navigate to **Environment Variables**
3. Add the same three variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Redeploy your site

## Testing

After setup, test the form by submitting a message. You should receive an email directly in your Gmail inbox!

## Troubleshooting

- Make sure all environment variables are set correctly
- Check that your EmailJS service is connected
- Verify the template variables match the form data
- Check browser console for any error messages

