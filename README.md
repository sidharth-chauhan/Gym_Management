# 🏋️ Gym Management System - Frontend

A modern **Gym Management System Mobile Application** built using **React Native (Expo)**.

The application allows gym owners to efficiently manage their gym by handling members, trainers, memberships, and viewing dashboard analytics through an intuitive mobile interface.

---

# ✨ Features

## 🔐 Authentication

- Owner Registration
- Secure Login
- JWT Authentication
- Logout
- Persistent Login using AsyncStorage

---

## 📊 Dashboard

- Total Members
- Total Trainers
- Total Membership Plans
- Total Revenue
- Quick Navigation

---

## 👥 Member Management

- View Members
- Add Member
- Assign Trainer
- Assign Membership
- Select Date of Birth
- Responsive Form Validation

---

## 💪 Trainer Management

- View Trainers
- Add Trainer
- Experience
- Specialization

---

## 🏆 Membership Management

- View Membership Plans
- Add Membership
- Duration
- Price

---

## 📱 Modern UI

- Responsive Design
- Professional Cards
- FlatList
- Search Ready
- Dropdown Selection
- Date Picker
- Loading States

---

# 🛠 Tech Stack

- React Native
- Expo
- TypeScript
- Expo Router
- Axios
- AsyncStorage
- React Hooks
- React Native Vector Icons

---

# 📂 Folder Structure

```text
app
│
├── (auth)
│   ├── login.tsx
│   └── register.tsx
│
├── (tabs)
│   ├── dashboard.tsx
│   ├── member.tsx
│   ├── trainer.tsx
│   └── membership.tsx
│
├── member
│   └── add.tsx
│
├── trainer
│   └── add.tsx
│
├── membership
│   └── add.tsx
│
├── _layout.tsx
└── index.tsx

api
│
├── api.ts
└── routes.ts
```

---

# 📱 Screens

- Login
- Register
- Dashboard
- Members
- Add Member
- Trainers
- Add Trainer
- Memberships
- Add Membership

---

# 🖼️ Screenshots

## Login

![Login](./assets/login.png)

---

## Register

![Register](./assets/register.png)

---

## Dashboard

![Dashboard](./assets/dashboard.png)

---

## Members

![Members](./assets/members.png)

---

## Add Member

![Add Member](./assets/add-member.png)

---

## Trainers

![Trainers](./assets/trainers.png)

---

## Add Trainer

![Add Trainer](./assets/add-trainer.png)

---

## Memberships

![Memberships](./assets/memberships.png)

---

## Add Membership

![Add Membership](./assets/add-membership.png)

---

# 🎥 Demo

Add your demo GIF or YouTube video here.

Example

```
https://youtu.be/your-demo-video
```

---

# 🚀 Quick Start

## Clone Repository

```bash
git clone https://github.com/yourusername/Gym_Management_Frontend.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Expo

```bash
npx expo start
```

---

## Run Android

```bash
npx expo run:android
```

---

## Run iOS

```bash
npx expo run:ios
```

---

# ⚙️ Environment Configuration

Update your backend URL inside

```text
api/api.ts
```

Example

```ts
const api = axios.create({
  baseURL: "http://YOUR_LOCAL_IP:3000/api",
});
```

For Android Emulator

```text
http://10.0.2.2:3000/api
```

For Physical Device

```text
http://YOUR_WIFI_IP:3000/api
```

---

# 🔑 Authentication

JWT Token is securely stored using

- AsyncStorage

Every protected request automatically sends

```http
Authorization: Bearer <JWT_TOKEN>
```

---

# 🌟 Future Improvements

- Edit Member
- Delete Member
- Edit Trainer
- Delete Trainer
- Edit Membership
- Delete Membership
- Search
- Pull To Refresh
- Pagination
- Charts
- Push Notifications
- Dark Mode
- Docker Deployment
- AWS Deployment

---

# 📚 Learning Outcomes

Through this project I learned

- React Native
- Expo Router
- TypeScript
- API Integration
- JWT Authentication
- AsyncStorage
- FlatList
- useEffect
- useState
- Axios
- Navigation
- Form Handling
- Dropdown Implementation
- Date Picker Integration
- Backend Communication

---

# 👨‍💻 Backend Repository

```
https://github.com/yourusername/Gym_Management_Backend
```

---

# 👨‍💻 Author

**Sidharth Chauhan**

B.Tech Student

Aspiring Backend Engineer

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourusername

---

## ⭐ If you like this project, consider giving it a Star!
