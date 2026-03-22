# YouTube Clone 🎥

A high-performance video streaming application built with **React**, designed to replicate the core user experience and functionality of YouTube. This project focuses on efficient API integration, search optimization, and a responsive UI.

---

## 🚀 Features

* **Live Video Feeds:** Fetches real-time popular videos and statistics using the **YouTube Data API v3**.
* **Smart Search:** Integrated search bar with **Debounced** search suggestions to improve performance and reduce API calls.
* **Search Caching:** Implemented a caching mechanism using **Redux** to store previous search results, providing an instant UI response for repeated queries.
* **Video Playback:** Dedicated watch page with a functional embedded player.

## 🛠️ Tech Stack

* **Frontend:** React.js
* **State Management:** Redux Toolkit (used for Sidebar toggling and Search Slice)
* **Styling:** Tailwind CSS
* **Routing:** React Router v6
* **API:** YouTube Data API v3 (Google Cloud Console)
* **Bundler:** Vite / Create React App