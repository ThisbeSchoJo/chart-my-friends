# Chart My Friends
### Myers-Briggs Compatibility Chart
An interactive web app for visualizing Myers–Briggs personality types and calculating compatibility between friends. Instead of only using the classic 4-letter MBTI type, this app lets users input their percentage breakdown for each personality trait (I/E, N/S, T/F, J/P). The app then charts the user’s personality profile, compares it against their friends’, and generates compatibility scores.

✨ Features

Custom Trait Input – Users enter their MBTI percentages (e.g. 70% Introvert / 30% Extrovert).

Interactive Chart – Profiles are displayed on a radar/spider chart with four axes (I–E, N–S, T–F, J–P).

Friend System – Add friends manually or via invite link; see everyone’s personality plotted on the same chart.

Compatibility Scores – The app calculates how similar or complementary two users are using trait distances.

Insights – Short descriptions highlight strengths and challenges in each connection.

Fun Extras – Compatibility leaderboard, group visualization, and personality blurbs.

🚀 Getting Started
Prerequisites

Node.js (v18+)

npm or yarn

(Optional) Python/Flask backend if you want account storage

Installation
# Clone the repo
git clone https://github.com/yourusername/myers-briggs-compatibility.git
cd myers-briggs-compatibility

# Install dependencies
npm install

# Start the dev server
npm run dev

🖼️ Usage

Create your profile by entering your MBTI trait percentages.

View your radar chart visualization.

Add friends (manually or via link).

See friends’ profiles on the chart.

Explore compatibility scores + insights.

🔬 How Compatibility Works

Compatibility is calculated using the distance between trait profiles:

Each personality is represented as four percentage values (I/E, N/S, T/F, J/P).

A simple Euclidean distance formula compares two profiles.

The smaller the distance, the higher the compatibility score (scaled 0–100%).

Future versions may include weighted formulas based on psychology-backed MBTI pairing theories.

🛠️ Tech Stack

Frontend: React, Recharts (or D3.js) for data visualization

Backend (optional): Flask or Node.js for account management + friend system

Database (optional): PostgreSQL or SQLite for persistence