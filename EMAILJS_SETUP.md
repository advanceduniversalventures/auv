# EmailJS Setup Guide for Tennis Lesson Booking

This guide explains how to set up EmailJS to enable email notifications for the tennis lesson booking system.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)

## Step 2: Create an Email Service

1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account: `tennis@advanceduniversalventures.com`
5. Name your service (e.g., `service_tennis`)
6. Save the **Service ID**

## Step 3: Create Email Templates

### Template 1: Owner Notification (template_booking_owner)

Create a new template with these variables:

**Subject:**
```
New Tennis Lesson Booking - {{from_name}}
```

**Body:**
```html
<h2>New Booking Request</h2>

<p><strong>Customer Details:</strong></p>
<ul>
  <li><strong>Name:</strong> {{from_name}}</li>
  <li><strong>Email:</strong> {{from_email}}</li>
  <li><strong>Phone:</strong> {{phone}}</li>
</ul>

<p><strong>Lesson Details:</strong></p>
<ul>
  <li><strong>Date:</strong> {{date}}</li>
  <li><strong>Time:</strong> {{time}}</li>
  <li><strong>Location:</strong> {{location}}</li>
  <li><strong>Address:</strong> {{address}}</li>
  <li><strong>Participants:</strong> {{participants}}</li>
  <li><strong>Total Price:</strong> {{price}}</li>
</ul>

<p><strong>Additional Notes:</strong></p>
<p>{{notes}}</p>

<hr>
<p>Please contact the customer to confirm the booking.</p>
```

**To Email:** `{{to_email}}` (will be `tennis@advanceduniversalventures.com`)

### Template 2: Customer Confirmation (template_booking_customer)

**Subject:**
```
Tennis Lesson Booking Confirmation
```

**Body:**
```html
<h2>Booking Confirmation</h2>

<p>Dear {{customer_name}},</p>

<p>Thank you for booking a tennis lesson with Advanced Universal Ventures!</p>

<p><strong>Your Booking Details:</strong></p>
<ul>
  <li><strong>Date:</strong> {{date}}</li>
  <li><strong>Time:</strong> {{time}}</li>
  <li><strong>Location:</strong> {{location}}</li>
  <li><strong>Address:</strong> {{address}}</li>
  <li><strong>Participants:</strong> {{participants}}</li>
  <li><strong>Total Price:</strong> {{price}}</li>
</ul>

<p><strong>What to bring:</strong></p>
<ul>
  <li>Tennis racket (we can provide one if needed)</li>
  <li>Comfortable athletic clothing</li>
  <li>Water bottle</li>
  <li>Sunscreen (for outdoor courts)</li>
</ul>

<p>Payment will be collected at the beginning of the lesson.</p>

<p>If you need to cancel or reschedule, please contact us at least 24 hours in advance at {{coach_email}}.</p>

<p>See you on the court!</p>

<p>Best regards,<br>
Advanced Universal Ventures Tennis Team</p>
```

**To Email:** `{{to_email}}` (customer's email)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Copy your **Public Key**

## Step 5: Configure Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_tennis
NEXT_PUBLIC_EMAILJS_TEMPLATE_OWNER=template_booking_owner
NEXT_PUBLIC_EMAILJS_TEMPLATE_CUSTOMER=template_booking_customer
```

## Step 6: Test the Integration

1. Run `npm run dev` to start the development server
2. Go to `/tennis-education/book`
3. Select a time slot and fill in the booking form
4. Submit and verify that both emails are sent

## Admin Mode

The booking page includes an admin panel to manage time slots:

1. Scroll to the bottom of the booking page
2. Click "Admin Access"
3. Enter password: `tennis2026` (change this in production!)
4. Add, edit, or delete time slots

**Important:** For production, you should:
- Change the admin password
- Store time slots in a database instead of local state
- Consider using a proper authentication system

## Troubleshooting

- **Emails not sending:** Check browser console for errors
- **Invalid service ID:** Verify service ID in EmailJS dashboard
- **Template errors:** Check that all template variables match
- **Rate limiting:** Free tier has 200 emails/month limit
