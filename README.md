# brave-indigo-watermelon - Firebase Authentication & Gallimaps API

A React Native mobile application with Firebase authentication and Gallimaps API integration for discovering and managing local businesses.

## 🚀 Features

### Authentication
- ✅ Email/Password Sign Up
- ✅ Email/Password Login
- ✅ Password Reset via Email
- ✅ Secure Authentication with Firebase
- ✅ Persistent Login Sessions
- ✅ Beautiful Gradient UI

### Business Discovery
- ✅ Search Nearby Businesses using Gallimaps Places API
- ✅ View Business Details (ratings, reviews, hours, contact)
- ✅ Location-based Search
- ✅ Text-based Search
- ✅ Business Photos
- ✅ Call, Navigate, and Visit Website directly from app

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- A Firebase account
- A Google Cloud Platform account with Places API enabled

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable **Authentication** > **Email/Password** sign-in method
4. Go to Project Settings > General
5. Copy your Firebase configuration
6. Open `config/firebase.js` and replace the placeholder values:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 3. Gallimaps API Setup

1. Go to Gallimaps website and sign up for an account
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Places API
   - Maps API
4. Create API credentials (API Key)
5. Restrict your API key (recommended):
   - Application restrictions: Configure based on your needs
   - API restrictions: Select the APIs you enabled
6. Open `services/googleBusinessService.js` and replace:

```javascript
const GALLIMAPS_API_KEY = 'YOUR_GALLIMAPS_API_KEY';
```

### 4. Run the Application

```bash
# Start the Expo development server
npm start

# Or run on specific platform
npm run android  # For Android
npm run ios      # For iOS
npm run web      # For Web
```

## 📱 App Structure

```
Week4/
├── App.js                          # Main app entry point
├── config/
│   └── firebase.js                 # Firebase configuration
├── context/
│   └── AuthContext.js              # Authentication context & state
├── navigation/
│   └── Navigation.js               # Navigation structure
├── screens/
│   ├── LoginScreen.js              # Login screen
│   ├── SignupScreen.js             # Signup screen
│   ├── ForgotPasswordScreen.js     # Password reset screen
│   ├── BusinessListingScreen.js    # Business listing/search
│   └── BusinessDetailsScreen.js    # Business details view
└── services/
    └── googleBusinessService.js    # Gallimaps API service
```

## 🎨 Design Features

- **Modern Gradient UI**: Beautiful purple gradient theme
- **Smooth Animations**: Engaging user experience
- **Responsive Design**: Works on all screen sizes
- **Loading States**: Clear feedback during async operations
- **Error Handling**: User-friendly error messages
- **Form Validation**: Client-side validation for all forms

## 🔐 Security Best Practices

1. **Never commit API keys** to version control
2. Use environment variables for sensitive data
3. Enable API key restrictions in Gallimaps console
4. Set up Firebase Security Rules
5. Implement rate limiting for production

## 📝 Usage Guide

### For Users

1. **Sign Up**: Create an account with email and password
2. **Login**: Sign in with your credentials
3. **Search Businesses**: 
   - Allow location permissions to see nearby businesses
   - Use the search bar to find specific businesses
   - Pull to refresh the list
4. **View Details**: Tap on any business to see full details
5. **Take Action**: Call, visit website, or get directions

### For Developers

#### Adding New Authentication Methods

Edit `context/AuthContext.js` to add new auth providers (Google, Facebook, etc.):

```javascript
// Example: Google Sign-In
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
};
```

#### Customizing Business Search

Edit `services/googleBusinessService.js` to modify search parameters:

```javascript
// Change search radius, types, etc.
await searchNearbyBusinesses(lat, lng, 10000, 'restaurant|cafe');
```

## 🐛 Troubleshooting

### Firebase Authentication Issues
- Ensure Email/Password is enabled in Firebase Console
- Check that your Firebase config is correct
- Verify network connectivity

### Gallimaps API Issues
- Confirm API key is valid and not restricted
- Check that Places API is enabled
- Verify your account status and API limits
- Check API quotas and limits

### Location Permission Issues
- Ensure location permissions are granted in device settings
- For iOS, add location usage description in `app.json`

## 📄 License

This project is licensed under the 0BSD License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues and questions, please create an issue in the repository.

---

**Built with ❤️ using React Native, Firebase, and Gallimaps API**
