# VR History Quiz Show - Screens Guide

This document outlines all 10 screens in the application with their unique background images and features.

## 1. Home Screen

- **Route**: `/`
- **Background Image**: VR Headset (https://images.unsplash.com/photo-1660190366607-9b192135e0d3)
- **Features**:
  - Large title with VR-themed gradient
  - "Start Adventure" button
  - Animated gradient orbs
  - VR headset background image with overlay

## 2. Login/Register Screen

- **Route**: `/login`
- **Background Image**: VR Device (https://images.unsplash.com/photo-1658808183854-97ed5e8632fb)
- **Features**:
  - Username and password fields with icons
  - Glass morphism card design
  - Register link
  - Back button to home

## 3. Dashboard

- **Route**: `/dashboard`
- **Background Image**: Ancient Pyramid (https://images.unsplash.com/photo-1705599017107-15ce6c54ab55)
- **Features**:
  - Welcome message with username
  - 4 main navigation cards:
    - Start Quiz (green gradient)
    - Leaderboard (yellow gradient)
    - Categories (blue gradient)
    - About (purple gradient)
  - Logout button

## 4. Category Selection

- **Route**: `/categories`
- **Background Images**:
  - Ancient: Pyramid interior (https://images.unsplash.com/photo-1705598931001-d2b3985f7460)
  - Medieval: Knight helmet (https://images.unsplash.com/photo-1600081522821-b6a482861e45)
  - Modern: Historical cannon (https://images.unsplash.com/photo-1563195416-6fa1b3187194)
- **Features**:
  - 3 category cards with unique images
  - Each card has distinct gradient and icon
  - Hover effects on cards
  - Back to dashboard button

## 5. Quiz Screen

- **Route**: `/quiz/:category`
- **Background Image**: Historical themed (https://images.unsplash.com/photo-1705598931001-d2b3985f7460)
- **Features**:
  - Question counter (X of 20)
  - 30-second countdown timer
  - 4 answer options
  - Progress bar at bottom
  - 20 questions per category

## 6. Correct Answer Popup

- **Shown during quiz**
- **Features**:
  - Green background with glow
  - CheckCircle icon
  - "Correct! Great job!" message
  - Highlights correct answer in green
  - Auto-advances after 2 seconds

## 7. Wrong Answer Popup

- **Shown during quiz**
- **Features**:
  - Red background with glow
  - XCircle icon
  - Shows correct answer
  - "Try Again!" message
  - Highlights wrong selection in red, correct in green
  - Auto-advances after 2 seconds

## 8. Score Screen

- **Route**: `/score`
- **Background Image**: Trophy Winner (https://images.unsplash.com/photo-1759701546980-1211be084c70)
- **Features**:
  - Large trophy icon
  - Score display (X/20)
  - Percentage calculation
  - Performance message (Outstanding/Great/Good/Keep Practicing)
  - Confetti animation for scores ≥70%
  - "Try Again" and "Dashboard" buttons
  - Auto-saves to leaderboard

## 9. Leaderboard

- **Route**: `/leaderboard`
- **Background Image**: Glass Trophy (https://images.unsplash.com/photo-1642104744809-14b986179927)
- **Features**:
  - Top 10 players list
  - Medal icons for top 3 (gold, silver, bronze)
  - Username, score, percentage, and date
  - Glass morphism cards
  - Back to dashboard button

## 10. About Page

- **Route**: `/about`
- **Background Image**: Medieval Armor (https://images.unsplash.com/photo-1600081523138-0bae23488dea)
- **Features**:
  - App description
  - 4 feature cards with icons:
    - Immersive Experience
    - Multiple Categories
    - Timed Challenges
    - Compete Globally
  - "How to Play" instructions
  - Back to dashboard button

## Design Features Across All Screens

- **Color Scheme**: Purple, indigo, and blue gradients
- **Glass Morphism**: Frosted glass effect with backdrop blur
- **Animations**: Smooth transitions, hover effects, scale transforms
- **Responsive**: Works on mobile and desktop
- **Icons**: Lucide React icons throughout
- **Typography**: Clean, modern sans-serif with hierarchy
- **Images**: High-quality Unsplash photos with overlays
- **Accessibility**: Clear contrast, readable text, proper focus states

## Quiz Data

Each category contains 20 questions:

- **Ancient History**: 20 questions about ancient civilizations, pharaohs, Greek/Roman history
- **Medieval**: 20 questions about knights, crusades, medieval kingdoms
- **Modern**: 20 questions about WWI/WWII, space race, civil rights, recent history

## Navigation Flow

```
Home → Login → Dashboard → Categories → Quiz → Score
                    ↓           ↓
              Leaderboard   About
```

All screens have proper back navigation and the app uses React Router for client-side routing.