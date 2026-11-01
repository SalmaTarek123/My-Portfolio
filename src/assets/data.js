// Import images
import walmart1 from '../assets/images/projects/walmart/sales-by-store.png';
import walmart2 from '../assets/images/projects/walmart/semester-sales.png';
import walmart3 from '../assets/images/projects/walmart/monthly-sales.png';
import walmart4 from '../assets/images/projects/walmart/holiday-share.png';

import airline1 from '../assets/images/projects/airline-satisfaction/satisfaction-split.png';
import airline2 from '../assets/images/projects/airline-satisfaction/correlation-heatmap.png';
import airline3 from '../assets/images/projects/airline-satisfaction/service-ratings.png';
import airline4 from '../assets/images/projects/airline-satisfaction/gender-split.png';

import tweets1 from '../assets/images/projects/twitter-sentiment/sentiment-distribution.png';
import tweets2 from '../assets/images/projects/twitter-sentiment/negative-reasons.png';
import tweets3 from '../assets/images/projects/twitter-sentiment/sentiment-by-airline.png';

import hotel1 from '../assets/images/projects/hotel-reservations/distributions-overview.png';
import hotel2 from '../assets/images/projects/hotel-reservations/monthly-booking-trends.png';
import hotel3 from '../assets/images/projects/hotel-reservations/price-tier-decision-boundary.png';
import hotel4 from '../assets/images/projects/hotel-reservations/kmeans-segments.png';

import readiness1 from '../assets/images/projects/student-readiness/pca-projection.png';
import readiness2 from '../assets/images/projects/student-readiness/cumulative-feature-importance.png';

export const projects = [
  {
    id: 'smart-sports',
    color: '#5B8DEF',
    tagLabel: 'Full-Stack · AI Integration',
    title: 'Smart Sports',
    shortDesc: 'AI-powered sports networking & fitness platform',
    description:
      'A full-stack web platform (graduation project) where I built both the React frontend and the FastAPI backend and integrated the AI models: a React frontend and a FastAPI backend that connect players and clubs, while a set of computer-vision, NLP and LLM models coach, analyze and match users.',
    problem:
      'Players struggle to get noticed by clubs and to train with proper form on their own, while clubs have no quick, objective way to compare candidates. The goal was one platform that handles the networking side (profiles, offers, jobs) and adds AI on top: automatic exercise analysis, live coaching, nutrition and workout planning, CV matching and a conversational assistant.',
    solution:
      'Built the React frontend (separate player, club and admin dashboards, dark mode, live camera) and the FastAPI backend (SQLAlchemy with PostgreSQL, JWT authentication with bcrypt, role-based access control). Then integrated each AI component behind its own endpoint or module: MediaPipe Pose and OpenCV analyze uploaded exercise videos (joint angles, adaptive rep counting for 20+ exercises, FFmpeg to merge the annotated skeleton video with audio); TensorFlow.js MoveNet runs in the browser for live webcam tracking with good/bad-rep counting; the backend calls an LLM hosted on Kaggle/Colab and exposed through ngrok, which returns spoken (mp3) feedback plus coaching text for each workout; pdfplumber, python-docx and spaCy extract skills from player CVs and score them against each club\'s position requirements; a nutrition engine (rule-based macro calculation plus a Keras model) and an exercise planner generate 7-day plans stored per user as JSON; and a LangGraph + Groq multi-agent chatbot (medical RAG, guide, CV feedback, player analysis with a radar chart) runs as a separate service plugged into the React app.',
    results: [
      'Delivered a complete platform: frontend, backend, database, authentication and AI integrations',
      'Exercise analysis for 20+ exercises with automatic rep counting from video, and real-time form feedback from the webcam',
      'AI voice coach returns spoken feedback and coaching text for every analyzed workout',
      'CV-to-club matching scores players against position requirements; chatbot gives CV feedback and player analysis',
      'Complete club–player workflow: requests, offers, accept/reject, notifications, job board and an admin analytics panel',
    ],
    githubUrl: 'https://github.com/polamaher20/Smart-Sports-System-GP-',
    // Demo video (Google Drive). Right now it opens the Drive folder.
    // To play it inside the page: open the video in Drive > Share > "Anyone with the link",
    // copy the id from  drive.google.com/file/d/<FILE_ID>/view  and paste it into fileId below.
    demoVideo: {
      folderUrl: 'https://drive.google.com/drive/folders/1sCG-Pi_bAWVZTpma24yfpGkej1_zfsMJ?usp=sharing',
      // Played with the browser's own video player (best on phones): files live in /public.
      src: 'Smart_Sports_Demo.mp4',
      poster: 'Smart_Sports_Demo_poster.jpg',
      // Drive copy: used as a fallback link under the video.
      fileId: '1TNdcZrrUmsJeJ7CYGG3WHx8TRzSPi9M5',
    },
    challenges: [
      'Accurate rep counting across 20+ exercises: every exercise moves different joints, so each got its own angle thresholds and "safe range". Edge cases (jumping jacks, butt kicks, leg swings) needed dedicated counters, and joint angles are smoothed over a few frames to stop landmark jitter from creating false reps.',
      'Good vs. bad reps: added per-exercise form rules (minimum/maximum safe angle) and kept the bad-rep logic identical between the live-camera stream and the uploaded-video pipeline so both give the same result.',
      'Browser-playable output: OpenCV writes a raw video with no audio, so FFmpeg re-encodes it to H.264/AAC and merges the AI coach audio into a single MP4.',
      'Running an LLM without a GPU server: the model is hosted on Kaggle/Colab and exposed through ngrok. The backend calls it with a timeout and treats it as optional, so video analysis still completes if the tunnel is down; coaching text travels in a URL-encoded response header next to the audio.',
      'Resilient nutrition engine: the Keras model, scaler and feature columns are loaded at startup, and a rule-based weighted-macro calculation takes over if any of them fails to load.',
    ],
    tags: ['React', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'MediaPipe', 'OpenCV', 'TensorFlow.js', 'Keras', 'spaCy', 'LangGraph', 'Groq', 'LLM'],
    images: [],
  },
  {
    id: 'walmart',
    color: '#EC4899',
    tagLabel: 'Exploratory Data Analysis',
    title: 'Retail Sales Analysis',
    shortDesc: 'What really drives Walmart weekly sales?',
    description:
      'Cleaned and explored three years of weekly sales data across 45 Walmart stores to see what actually drives revenue, store by store and season by season.',
    problem:
      'Walmart wanted to understand what drives its weekly sales: which stores are the strongest and most volatile performers, whether public holidays help or hurt sales, and whether external conditions — fuel prices, inflation (CPI), unemployment, weather — have any measurable effect on revenue.',
    solution:
      'Cleaned the data (checked duplicates and nulls, fixed date formats), detected and removed statistical outliers per numeric column with the IQR method, then explored the data through univariate plots (histograms, box and violin plots) and bivariate scatter plots against Weekly_Sales. Aggregated sales by store, by month and by semester, and isolated the average sales in the weeks of four major US holidays to compare against ordinary weeks.',
    results: [
      'Store 20 brings in the most total revenue (~$301M) while Store 14 is the most volatile (~$317K weekly std. dev.)',
      'Thanksgiving week sells well above the non-holiday average, while Christmas week actually underperforms it',
      'April–August is consistently the strongest stretch of the year',
      'Temperature, fuel price, CPI and unemployment show no strong individual correlation with sales',
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    images: [
      { src: walmart1, caption: 'Total weekly sales by store' },
      { src: walmart2, caption: 'Sales by semester — 2nd semester is strongest' },
      { src: walmart3, caption: 'Monthwise sales — dips in Jan & Nov' },
      { src: walmart4, caption: 'Share of holiday vs. ordinary weeks' },
    ],
  },
  {
    id: 'airline-satisfaction',
    githubUrl: 'https://github.com/SalmaTarek123/Machine-Learning',
    color: '#C2410C',
    tagLabel: 'Classification',
    title: 'Airline Passenger Satisfaction',
    shortDesc: 'Predicting satisfied vs. dissatisfied flyers',
    description:
      'A supervised learning project that predicts whether an airline passenger is satisfied, based on trip details and 14 in-flight service ratings.',
    problem:
      'An airline needs to predict, from trip details and in-flight service ratings, whether a passenger will come away satisfied or not — and to see which of the fourteen service dimensions actually move the needle.',
    solution:
      'Imputed missing arrival-delay values, capped outliers with the IQR method, then ran a broad EDA pass: distribution plots, categorical breakdowns by gender/travel type/class, and a correlation heatmap across all fourteen service ratings. Encoded the categorical fields and benchmarked two classifiers — K-Nearest Neighbors and Gaussian Naive Bayes — on the same train/test split.',
    results: [
      'KNN reached 92.7% accuracy (F1 ≈ 0.93) vs. 86.4% for Naive Bayes',
      '56.6% of surveyed passengers were neutral or dissatisfied',
      'Comfort-related ratings (seat comfort, cleanliness, food & drink, entertainment) move together as one bundled factor',
    ],
    tags: ['Python', 'Pandas', 'Seaborn', 'Scikit-learn', 'KNN', 'GaussianNB'],
    images: [
      { src: airline1, caption: 'Satisfaction split across all respondents' },
      { src: airline2, caption: 'Correlation heatmap across all 14 service ratings' },
      { src: airline3, caption: 'Rating distributions per service category' },
      { src: airline4, caption: 'Gender split of respondents' },
    ],
  },
  {
    id: 'twitter-sentiment',
    color: '#D98CA6',
    tagLabel: 'Sentiment Analysis · NLP',
    title: 'US Airline Twitter Sentiment',
    shortDesc: 'What passengers complain about, in their own words',
    description:
      'A sentiment-analysis and text-mining pass over ~14.6K tweets aimed at six US airlines, digging into what specifically upsets flyers.',
    problem:
      'Airlines wanted a fast read on public sentiment on Twitter — and more importantly, on why customers are unhappy. Which specific complaints actually drive the negative volume, and do some airlines fare worse than others?',
    solution:
      'Cleaned duplicates and null values and parsed tweet timestamps, then explored the sentiment label and the free-text negative-reason field with count plots, and cross-tabulated sentiment against airline to compare carriers directly. An initial K-Medoids clustering pass was also tested as an unsupervised angle.',
    results: [
      '63% of tweets are negative vs. only 16% positive',
      'Customer Service Issue is by far the top driver of negative tweets',
      'Negative sentiment share varies noticeably from one airline to another',
    ],
    tags: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
    images: [
      { src: tweets1, caption: 'Sentiment distribution' },
      { src: tweets2, caption: 'Most common reasons behind negative tweets' },
      { src: tweets3, caption: 'Sentiment split by airline' },
    ],
  },
  {
    id: 'hotel-reservations',
    color: '#A992C9',
    tagLabel: 'End-to-end ML · Business Analytics',
    title: 'Hotel Reservations & Cancellations',
    shortDesc: 'Cleaning, clustering and predicting cancellations',
    description:
      'An end-to-end analysis of 36K+ hotel bookings — cleaning, clustering, revenue analytics, and two machine-learning models to flag likely cancellations.',
    problem:
      'A hotel loses revenue every time a room is booked and then cancelled at the last minute. The business needed a trustworthy view of its booking data, a read on demand/revenue patterns, and a model that flags bookings likely to be cancelled.',
    solution:
      'Corrected illogical values, ran IQR outlier analysis on every numeric column, then a full descriptive pass covering room types, market segments, meal plans, lead time and monthly booking trends. Added a KMeans pass on price vs. party size, computed similarity/distance metrics, rolled up revenue by year, and trained Logistic Regression and KNN to predict cancellation, plus a separate model to bucket bookings into Low/Medium/High price tiers.',
    results: [
      'KNN edged out Logistic Regression for predicting cancellations (80.6% vs 79.8% accuracy)',
      'Close to 1 in 3 bookings in the dataset ends up cancelled',
      'Booking volume peaks around October and dips in July',
      'Revenue grew from ~$1.05M (2017, partial) to ~$6.06M (2018)',
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Plotly', 'Scikit-learn', 'KMeans', 'KNN'],
    images: [
      { src: hotel1, caption: 'Key numeric fields before outlier handling' },
      { src: hotel2, caption: 'Monthly booking trends, 2017 vs 2018' },
      { src: hotel3, caption: 'Price-tier decision boundary' },
      { src: hotel4, caption: 'KMeans segments on price vs. party size' },
    ],
  },
  {
    id: 'student-readiness',
    color: '#7FBFA0',
    tagLabel: 'Feature Selection',
    title: 'Student Career Readiness',
    shortDesc: 'Which few factors actually predict readiness?',
    description:
      'A feature-selection project that narrows a long student survey down to the handful of questions that actually predict career readiness.',
    problem:
      'With dozens of survey questions available, the real question was which handful of factors actually predict whether a student is career ready. A leaner, explainable model gives students and advisors concrete signals instead of a wall of questions.',
    solution:
      'Standardized the numeric features and used PCA to check how separable the Ready / Not Ready groups are in 2D. Ran Sequential Forward Feature Selection with a Random Forest, ranked every feature importance, and used cumulative importance — with a 95% threshold — to decide how many features are actually needed.',
    results: [
      'Just 3 features — Career Readiness %, industry internship, and CGPA — explain 95% of the model decisions',
      'PCA shows Ready vs. Not Ready students separate reasonably well in 2D',
    ],
    tags: ['Python', 'Pandas', 'Scikit-learn', 'PCA', 'RandomForest'],
    images: [
      { src: readiness1, caption: 'PCA projection by readiness status' },
      { src: readiness2, caption: 'Cumulative feature importance' },
    ],
  },
  {
    id: 'compression-tool',
    githubUrl: 'https://github.com/SalmaTarek123/Data-Compression',
    color: '#D9B36B',
    tagLabel: 'Algorithms · Desktop App',
    title: 'Multi-Algorithm Data Compression Tool',
    shortDesc: 'RLE · Golomb · LZW · Arithmetic coding, from scratch',
    description:
      'A Python desktop application implementing four classic compression algorithms from scratch, each with a working compress and decompress screen.',
    problem:
      'Classic compression algorithms are usually taught as pen-and-paper theory. The goal was to make them tangible: build something a person could type into, run four different algorithms on the same input, and immediately see the compressed result and the length saved.',
    solution:
      'Built a multi-page desktop GUI in Python with Tkinter, implementing four compression algorithms from scratch — Run-Length Encoding, Golomb coding, LZW, and Arithmetic coding — each with its own compress screen AND its own decompress screen, live inputs, and an instant side-by-side length comparison.',
    results: [
      'Implemented 4 algorithms from scratch: RLE, Golomb, LZW, and Arithmetic coding',
      'Each algorithm has both a compress screen and a matching decompress screen',
      'Shows original vs. encoded length side-by-side for an instant compression-ratio read',
    ],
    tags: ['Python', 'Tkinter', 'Pillow'],
    images: [],
  },
];