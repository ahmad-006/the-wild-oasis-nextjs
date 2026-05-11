# 🌲 The Wild Oasis (Next.js Edition)

**The Wild Oasis** is a high-end, full-stack cabin booking application designed for luxury retreats. Built with the latest bleeding-edge technologies, this platform provides a seamless guest experience from browsing exclusive cabins to managing private reservations.

---

## 🚀 Vision & Purpose
This application serves as the customer-facing side of "The Wild Oasis" ecosystem. It focuses on performance, security, and a premium user experience, leveraging **React Server Components (RSC)** and **Server Actions** for a lightning-fast, modern web experience.

## ✨ Core Features
- **🏠 Luxury Cabin Catalog:** Browse a curated list of cabins with detailed information, pricing, and high-resolution imagery.
- **📅 Dynamic Booking System:** Real-time availability checking and intuitive date range selection using `react-day-picker`.
- **🔐 Secure Authentication:** Seamless social login via Google, powered by **NextAuth.js v5**.
- **👤 Guest Dashboard:** Private area for guests to manage their profile, view past bookings, and handle upcoming reservations.
- **⚡ Server-Side Power:** Optimized data fetching with Next.js App Router and efficient caching strategies.
- **🛠️ Reservation Management:** Guests can create, update (guest count/observations), and delete their own reservations with immediate UI feedback.

## 🛠️ Technical Architecture

### **The Stack**
- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Backend-as-a-Service:** [Supabase](https://supabase.com/) (PostgreSQL + Auth + Storage)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Using the new `@theme` engine)
- **Authentication:** [NextAuth.js v5 (Beta)](https://authjs.dev/)
- **Date Utilities:** `date-fns`

### **Key Implementation Details**
- **React Server Components:** Used for data fetching to minimize client-side JavaScript bundle sizes.
- **Server Actions:** Securely handles all mutations (bookings, profile updates) directly on the server.
- **Optimistic UI:** (Where applicable) Enhances perceived speed by updating the UI before server confirmation.
- **Compound Component Pattern:** Used in complex UI elements like `Reservation` for better state management and flexibility.

---

## ⚙️ Getting Started

### **1. Prerequisites**
- Node.js (Latest LTS recommended)
- A Supabase Project
- Google Cloud Console Project (for OAuth)

### **2. Environment Variables**
Create a `.env` file in the root directory and add the following:

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret

# Google OAuth
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
```

### **3. Installation**
```bash
# Clone the repository
git clone https://github.com/your-username/the-wild-oasis-nextjs.git

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📂 Project Structure
- `/app`: Contains all routes, layouts, and pages (Next.js App Router).
  - `/_components`: Reusable UI components.
  - `/_lib`: Core logic, data fetching services, and server actions.
- `/public`: Static assets (images, logos).
- `/starter`: Initial starter files (if any).

---

## 📈 Future Roadmap
- [ ] Integration of a payment gateway (e.g., Stripe).
- [ ] Multi-language support (i18n).
- [ ] Dark mode toggle.
- [ ] Real-time notifications for booking confirmations.

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

---
Built with ❤️ by [Ahmad Aamir](https://github.com/ahmadaamir1806)
