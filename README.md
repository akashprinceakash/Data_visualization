



# Data Visualization Project

This project is a full-stack application that visualizes sales data using various chart types (Bar, Pie, and Line) powered by Chart.js and React on the frontend. It retrieves sales data from a MongoDB database via an Express.js backend, allowing users to view and analyze  trends for different products over time.



## Features

-Bar Char: Visualize sales data by product category.
-Pie Char: Show the distribution of sales among different products.
-Line Char: Display sales trends over time.
-API Integratio: Fetch sales data dynamically from a MongoDB database.
-Responsive Desig: View charts across devices of various screen sizes.

## Tech Stack

-Frontend: React, Chart.js (with `react-chartjs-2`)
-Backend: Node.js, Express.js
-Database: MongoDB (MongoDB Atlas)
-Tool: Vite for development server, npm for package management

## Setup Instructions

Follow these instructions to set up and run the project locally.

### Prerequisites

-Node.j: Make sure you have Node.js installed (version 14+).
-MongoD: create a cluster on MongoDB Atlas.
-Gi: To clone the repository.

### Installation

1.Clone the Repository:
   ```bash
   git clone https://github.com/akashprinceakash/Data_visualization.git
   cd Data-visualization
   ```

2.Install Backend Dependencie:
   Navigate to the `backend` directory and install dependencies.
   ```bash
   cd backend
   npm install
   ```

3.Set Up Environment Variable:
   Create a `.env` file in the `backend` directory with the following content:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

   Replace `your_mongodb_connection_string` with your actual MongoDB URI.

4.Start the Backend Server:
   ```bash
   npm start
   ```

5.Install Frontend Dependencies:
   Open a new terminal, navigate to the `frontend` directory, and install dependencies.
   ```bash
   cd ../frontend
   npm install
   ```

6.Start the Frontend Server:
   ```bash
   npm run dev
   ```



