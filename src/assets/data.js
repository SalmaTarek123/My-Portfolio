// // Images — make sure these files exist at the paths below
// // (src/assets/images/projects/<project>/<file>.png)
// import walmart1 from './images/projects/walmart/sales-by-store.png';
// import walmart2 from './images/projects/walmart/semester-sales.png';
// import walmart3 from './images/projects/walmart/monthly-sales.png';
// import walmart4 from './images/projects/walmart/holiday-share.png';

// import airline1 from './images/projects/airline-satisfaction/satisfaction-split.png';
// import airline2 from './images/projects/airline-satisfaction/correlation-heatmap.png';
// import airline3 from './images/projects/airline-satisfaction/service-ratings.png';
// import airline4 from './images/projects/airline-satisfaction/gender-split.png';

// import tweets1 from './images/projects/twitter-sentiment/sentiment-distribution.png';
// import tweets2 from './images/projects/twitter-sentiment/negative-reasons.png';
// import tweets3 from './images/projects/twitter-sentiment/sentiment-by-airline.png';

// import hotel1 from './images/projects/hotel-reservations/distributions-overview.png';
// import hotel2 from './images/projects/hotel-reservations/monthly-booking-trends.png';
// import hotel3 from './images/projects/hotel-reservations/price-tier-decision-boundary.png';
// import hotel4 from './images/projects/hotel-reservations/kmeans-segments.png';

// import readiness1 from './images/projects/student-readiness/pca-projection.png';
// import readiness2 from './images/projects/student-readiness/cumulative-feature-importance.png';

// export const projects = [
//   {
//     id: 'walmart',
//     color: '#DB2777',
//     tagLabel: 'Exploratory Data Analysis',
//     title: 'Retail Sales Analysis',
//     shortDesc: 'What really drives Walmart\u2019s weekly sales?',
//     description:
//       'Cleaned and explored three years of weekly sales data across 45 Walmart stores to see what actually drives revenue, store by store and season by season.',
//     problem:
//       'Walmart wanted to understand what drives its weekly sales: which stores are the strongest and most volatile performers, whether public holidays help or hurt sales, and whether external conditions \u2014 fuel prices, inflation (CPI), unemployment, weather \u2014 have any measurable effect on revenue.',
//     solution:
//       'Cleaned the data (checked duplicates and nulls, fixed date formats), detected and removed statistical outliers per numeric column with the IQR method, then explored the data through univariate plots (histograms, box and violin plots) and bivariate scatter plots against Weekly_Sales. Aggregated sales by store, by month and by semester, and isolated the average sales in the weeks of four major US holidays to compare against ordinary weeks.',
//     results: [
//       'Store 20 brings in the most total revenue (~$301M) while Store 14 is the most volatile (~$317K weekly std. dev.)',
//       'Thanksgiving week sells well above the non-holiday average, while Christmas week actually underperforms it',
//       'April\u2013August is consistently the strongest stretch of the year',
//       'Temperature, fuel price, CPI and unemployment show no strong individual correlation with sales',
//     ],
//     tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
//     images: [
//       { src: walmart1, caption: 'Total weekly sales by store' },
//       { src: walmart2, caption: 'Sales by semester \u2014 2nd semester is strongest' },
//       { src: walmart3, caption: 'Monthwise sales \u2014 dips in Jan & Nov' },
//       { src: walmart4, caption: 'Share of holiday vs. ordinary weeks' },
//     ],
//     link: null,
//   },
//   {
//     id: 'airline-satisfaction',
//     color: '#C2410C',
//     tagLabel: 'Classification',
//     title: 'Airline Passenger Satisfaction',
//     shortDesc: 'Predicting satisfied vs. dissatisfied flyers',
//     description:
//       'A supervised learning project that predicts whether an airline passenger is satisfied, based on trip details and 14 in-flight service ratings.',
//     problem:
//       'An airline needs to predict, from trip details and in-flight service ratings, whether a passenger will come away satisfied or not \u2014 and to see which of the fourteen service dimensions actually move the needle.',
//     solution:
//       'Imputed missing arrival-delay values, capped outliers with the IQR method, then ran a broad EDA pass: distribution plots, categorical breakdowns by gender/travel type/class, and a correlation heatmap across all fourteen service ratings. Encoded the categorical fields and benchmarked two classifiers \u2014 K-Nearest Neighbors and Gaussian Naive Bayes \u2014 on the same train/test split.',
//     results: [
//       'KNN reached 92.7% accuracy (F1 \u2248 0.93) vs. 86.4% for Naive Bayes',
//       '56.6% of surveyed passengers were neutral or dissatisfied',
//       'Comfort-related ratings (seat comfort, cleanliness, food & drink, entertainment) move together as one bundled factor',
//     ],
//     tags: ['Python', 'Pandas', 'Seaborn', 'Scikit-learn', 'KNN', 'GaussianNB'],
//     images: [
//       { src: airline1, caption: 'Satisfaction split across all respondents' },
//       { src: airline2, caption: 'Correlation heatmap across all 14 service ratings' },
//       { src: airline3, caption: 'Rating distributions per service category' },
//       { src: airline4, caption: 'Gender split of respondents' },
//     ],
//     link: null,
//   },
//   {
//     id: 'twitter-sentiment',
//     color: '#9D174D',
//     tagLabel: 'Sentiment Analysis \u00b7 NLP',
//     title: 'US Airline Twitter Sentiment',
//     shortDesc: 'What passengers complain about, in their own words',
//     description:
//       'A sentiment-analysis and text-mining pass over ~14.6K tweets aimed at six US airlines, digging into what specifically upsets flyers.',
//     problem:
//       'Airlines wanted a fast read on public sentiment on Twitter \u2014 and more importantly, on why customers are unhappy. Which specific complaints actually drive the negative volume, and do some airlines fare worse than others?',
//     solution:
//       'Cleaned duplicates and null values and parsed tweet timestamps, then explored the sentiment label and the free-text negative-reason field with count plots, and cross-tabulated sentiment against airline to compare carriers directly. An initial K-Medoids clustering pass was also tested as an unsupervised angle.',
//     results: [
//       '63% of tweets are negative vs. only 16% positive',
//       '"Customer Service Issue" is by far the top driver of negative tweets',
//       'Negative sentiment share varies noticeably from one airline to another',
//     ],
//     tags: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
//     images: [
//       { src: tweets1, caption: 'Sentiment distribution' },
//       { src: tweets2, caption: 'Most common reasons behind negative tweets' },
//       { src: tweets3, caption: 'Sentiment split by airline' },
//     ],
//     link: null,
//   },
//   {
//     id: 'hotel-reservations',
//     color: '#A21CAF',
//     tagLabel: 'End-to-end ML \u00b7 Business Analytics',
//     title: 'Hotel Reservations & Cancellations',
//     shortDesc: 'Cleaning, clustering and predicting cancellations',
//     description:
//       'An end-to-end analysis of 36K+ hotel bookings \u2014 cleaning, clustering, revenue analytics, and two machine-learning models to flag likely cancellations.',
//     problem:
//       'A hotel loses revenue every time a room is booked and then cancelled at the last minute. The business needed a trustworthy view of its booking data, a read on demand/revenue patterns, and a model that flags bookings likely to be cancelled.',
//     solution:
//       'Corrected illogical values, ran IQR outlier analysis on every numeric column, then a full descriptive pass covering room types, market segments, meal plans, lead time and monthly booking trends. Added a KMeans pass on price vs. party size, computed similarity/distance metrics, rolled up revenue by year, and trained Logistic Regression and KNN to predict cancellation, plus a separate model to bucket bookings into Low/Medium/High price tiers.',
//     results: [
//       'KNN edged out Logistic Regression for predicting cancellations (80.6% vs 79.8% accuracy)',
//       'Close to 1 in 3 bookings in the dataset ends up cancelled',
//       'Booking volume peaks around October and dips in July',
//       'Revenue grew from ~$1.05M (2017, partial) to ~$6.06M (2018)',
//     ],
//     tags: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Plotly', 'Scikit-learn', 'KMeans', 'KNN'],
//     images: [
//       { src: hotel1, caption: 'Key numeric fields before outlier handling' },
//       { src: hotel2, caption: 'Monthly booking trends, 2017 vs 2018' },
//       { src: hotel3, caption: 'Price-tier decision boundary' },
//       { src: hotel4, caption: 'KMeans segments on price vs. party size' },
//     ],
//     link: null,
//   },
//   {
//     id: 'student-readiness',
//     color: '#7C3AED',
//     tagLabel: 'Feature Selection',
//     title: 'Student Career Readiness',
//     shortDesc: 'Which few factors actually predict readiness?',
//     description:
//       'A feature-selection project that narrows a long student survey down to the handful of questions that actually predict career readiness.',
//     problem:
//       'With dozens of survey questions available, the real question was which handful of factors actually predict whether a student is \u201ccareer ready.\u201d A leaner, explainable model gives students and advisors concrete signals instead of a wall of questions.',
//     solution:
//       'Standardized the numeric features and used PCA to check how separable the Ready / Not Ready groups are in 2D. Ran Sequential Forward Feature Selection with a Random Forest, ranked every feature\u2019s importance, and used cumulative importance \u2014 with a 95% threshold \u2014 to decide how many features are actually needed.',
//     results: [
//       'Just 3 features \u2014 Career Readiness %, industry internship, and CGPA \u2014 explain 95% of the model\u2019s decisions',
//       'PCA shows Ready vs. Not Ready students separate reasonably well in 2D',
//     ],
//     tags: ['Python', 'Pandas', 'Scikit-learn', 'PCA', 'RandomForest'],
//     images: [
//       { src: readiness1, caption: 'PCA projection by readiness status' },
//       { src: readiness2, caption: 'Cumulative feature importance' },
//     ],
//     link: null,
//   },
//   {
//     id: 'compression-tool',
//     color: '#0D9488',
//     tagLabel: 'Algorithms \u00b7 Desktop App',
//     title: 'Multi-Algorithm Data Compression Tool',
//     shortDesc: 'RLE \u00b7 Golomb \u00b7 LZW \u00b7 Arithmetic coding, from scratch',
//     description:
//       'A Python desktop application implementing four classic compression algorithms from scratch, each with a working compress and decompress screen.',
//     problem:
//       'Classic compression algorithms are usually taught as pen-and-paper theory. The goal was to make them tangible: build something a person could type into, run four different algorithms on the same input, and immediately see the compressed result and the length saved.',
//     solution:
//       'Built a multi-page desktop GUI in Python with Tkinter, implementing four compression algorithms from scratch \u2014 Run-Length Encoding, Golomb coding, LZW, and Arithmetic coding \u2014 each with its own compress screen AND its own decompress screen, live inputs, and an instant side-by-side length comparison.',
//     results: [
//       'Implemented 4 algorithms from scratch: RLE, Golomb, LZW, and Arithmetic coding',
//       'Each algorithm has both a compress screen and a matching decompress screen',
//       'Shows original vs. encoded length side-by-side for an instant compression-ratio read',
//     ],
//     tags: ['Python', 'Tkinter', 'Pillow'],
//     images: [],
//     link: null,
//   },
// ];














// Images — make sure these files exist at the paths below
// (src/assets/images/projects/<project>/<file>.png)
import walmart1 from './images/projects/walmart/sales-by-store.png';
import walmart2 from './images/projects/walmart/semester-sales.png';
import walmart3 from './images/projects/walmart/monthly-sales.png';
import walmart4 from './images/projects/walmart/holiday-share.png';

import airline1 from './images/projects/airline-satisfaction/satisfaction-split.png';
import airline2 from './images/projects/airline-satisfaction/correlation-heatmap.png';
import airline3 from './images/projects/airline-satisfaction/service-ratings.png';
import airline4 from './images/projects/airline-satisfaction/gender-split.png';

import tweets1 from './images/projects/twitter-sentiment/sentiment-distribution.png';
import tweets2 from './images/projects/twitter-sentiment/negative-reasons.png';
import tweets3 from './images/projects/twitter-sentiment/sentiment-by-airline.png';

import hotel1 from './images/projects/hotel-reservations/distributions-overview.png';
import hotel2 from './images/projects/hotel-reservations/monthly-booking-trends.png';
import hotel3 from './images/projects/hotel-reservations/price-tier-decision-boundary.png';
import hotel4 from './images/projects/hotel-reservations/kmeans-segments.png';

import readiness1 from './images/projects/student-readiness/pca-projection.png';
import readiness2 from './images/projects/student-readiness/cumulative-feature-importance.png';

export const projects = [
  {
    id: 'walmart',
    color: '#E8998B',
    tagLabel: 'Exploratory Data Analysis',
    title: 'Retail Sales Analysis',
    shortDesc: 'What really drives Walmart\u2019s weekly sales?',
    description:
      'Cleaned and explored three years of weekly sales data across 45 Walmart stores to see what actually drives revenue, store by store and season by season.',
    problem:
      'Walmart wanted to understand what drives its weekly sales: which stores are the strongest and most volatile performers, whether public holidays help or hurt sales, and whether external conditions \u2014 fuel prices, inflation (CPI), unemployment, weather \u2014 have any measurable effect on revenue.',
    solution:
      'Cleaned the data (checked duplicates and nulls, fixed date formats), detected and removed statistical outliers per numeric column with the IQR method, then explored the data through univariate plots (histograms, box and violin plots) and bivariate scatter plots against Weekly_Sales. Aggregated sales by store, by month and by semester, and isolated the average sales in the weeks of four major US holidays to compare against ordinary weeks.',
    results: [
      'Store 20 brings in the most total revenue (~$301M) while Store 14 is the most volatile (~$317K weekly std. dev.)',
      'Thanksgiving week sells well above the non-holiday average, while Christmas week actually underperforms it',
      'April\u2013August is consistently the strongest stretch of the year',
      'Temperature, fuel price, CPI and unemployment show no strong individual correlation with sales',
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    images: [
      { src: walmart1, caption: 'Total weekly sales by store' },
      { src: walmart2, caption: 'Sales by semester \u2014 2nd semester is strongest' },
      { src: walmart3, caption: 'Monthwise sales \u2014 dips in Jan & Nov' },
      { src: walmart4, caption: 'Share of holiday vs. ordinary weeks' },
    ],
    link: null,
  },
  {
    id: 'airline-satisfaction',
    color: '#7FA8C9',
    tagLabel: 'Classification',
    title: 'Airline Passenger Satisfaction',
    shortDesc: 'Predicting satisfied vs. dissatisfied flyers',
    description:
      'A supervised learning project that predicts whether an airline passenger is satisfied, based on trip details and 14 in-flight service ratings.',
    problem:
      'An airline needs to predict, from trip details and in-flight service ratings, whether a passenger will come away satisfied or not \u2014 and to see which of the fourteen service dimensions actually move the needle.',
    solution:
      'Imputed missing arrival-delay values, capped outliers with the IQR method, then ran a broad EDA pass: distribution plots, categorical breakdowns by gender/travel type/class, and a correlation heatmap across all fourteen service ratings. Encoded the categorical fields and benchmarked two classifiers \u2014 K-Nearest Neighbors and Gaussian Naive Bayes \u2014 on the same train/test split.',
    results: [
      'KNN reached 92.7% accuracy (F1 \u2248 0.93) vs. 86.4% for Naive Bayes',
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
    link: null,
  },
  {
    id: 'twitter-sentiment',
    color: '#D98CA6',
    tagLabel: 'Sentiment Analysis \u00b7 NLP',
    title: 'US Airline Twitter Sentiment',
    shortDesc: 'What passengers complain about, in their own words',
    description:
      'A sentiment-analysis and text-mining pass over ~14.6K tweets aimed at six US airlines, digging into what specifically upsets flyers.',
    problem:
      'Airlines wanted a fast read on public sentiment on Twitter \u2014 and more importantly, on why customers are unhappy. Which specific complaints actually drive the negative volume, and do some airlines fare worse than others?',
    solution:
      'Cleaned duplicates and null values and parsed tweet timestamps, then explored the sentiment label and the free-text negative-reason field with count plots, and cross-tabulated sentiment against airline to compare carriers directly. An initial K-Medoids clustering pass was also tested as an unsupervised angle.',
    results: [
      '63% of tweets are negative vs. only 16% positive',
      '"Customer Service Issue" is by far the top driver of negative tweets',
      'Negative sentiment share varies noticeably from one airline to another',
    ],
    tags: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
    images: [
      { src: tweets1, caption: 'Sentiment distribution' },
      { src: tweets2, caption: 'Most common reasons behind negative tweets' },
      { src: tweets3, caption: 'Sentiment split by airline' },
    ],
    link: null,
  },
  {
    id: 'hotel-reservations',
    color: '#A992C9',
    tagLabel: 'End-to-end ML \u00b7 Business Analytics',
    title: 'Hotel Reservations & Cancellations',
    shortDesc: 'Cleaning, clustering and predicting cancellations',
    description:
      'An end-to-end analysis of 36K+ hotel bookings \u2014 cleaning, clustering, revenue analytics, and two machine-learning models to flag likely cancellations.',
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
    link: null,
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
      'With dozens of survey questions available, the real question was which handful of factors actually predict whether a student is \u201ccareer ready.\u201d A leaner, explainable model gives students and advisors concrete signals instead of a wall of questions.',
    solution:
      'Standardized the numeric features and used PCA to check how separable the Ready / Not Ready groups are in 2D. Ran Sequential Forward Feature Selection with a Random Forest, ranked every feature\u2019s importance, and used cumulative importance \u2014 with a 95% threshold \u2014 to decide how many features are actually needed.',
    results: [
      'Just 3 features \u2014 Career Readiness %, industry internship, and CGPA \u2014 explain 95% of the model\u2019s decisions',
      'PCA shows Ready vs. Not Ready students separate reasonably well in 2D',
    ],
    tags: ['Python', 'Pandas', 'Scikit-learn', 'PCA', 'RandomForest'],
    images: [
      { src: readiness1, caption: 'PCA projection by readiness status' },
      { src: readiness2, caption: 'Cumulative feature importance' },
    ],
    link: null,
  },
  {
    id: 'compression-tool',
    color: '#D9B36B',
    tagLabel: 'Algorithms \u00b7 Desktop App',
    title: 'Multi-Algorithm Data Compression Tool',
    shortDesc: 'RLE \u00b7 Golomb \u00b7 LZW \u00b7 Arithmetic coding, from scratch',
    description:
      'A Python desktop application implementing four classic compression algorithms from scratch, each with a working compress and decompress screen.',
    problem:
      'Classic compression algorithms are usually taught as pen-and-paper theory. The goal was to make them tangible: build something a person could type into, run four different algorithms on the same input, and immediately see the compressed result and the length saved.',
    solution:
      'Built a multi-page desktop GUI in Python with Tkinter, implementing four compression algorithms from scratch \u2014 Run-Length Encoding, Golomb coding, LZW, and Arithmetic coding \u2014 each with its own compress screen AND its own decompress screen, live inputs, and an instant side-by-side length comparison.',
    results: [
      'Implemented 4 algorithms from scratch: RLE, Golomb, LZW, and Arithmetic coding',
      'Each algorithm has both a compress screen and a matching decompress screen',
      'Shows original vs. encoded length side-by-side for an instant compression-ratio read',
    ],
    tags: ['Python', 'Tkinter', 'Pillow'],
    images: [],
    link: null,
  },
];