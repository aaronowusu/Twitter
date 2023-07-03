# Twitter Clone

This is a Twitter clone project built with modern web technologies:

- **Frontend**: Next.js, React, and Tailwind CSS
- **Backend**: MongoDB and Prisma

<img width="1440" alt="website" src="https://github.com/aaronowusu/Twitter/assets/34800051/2e07a080-f0f5-4892-91a3-3b4d4f0669d2">


## Live Demo

Check out the live demo of the Twitter clone: [Live Demo](https://twitter-peregbhf1-aaronowusu.vercel.app)

Please note that the live demo may not reflect the latest version of the code and some features might be disabled or limited for demonstration purposes.

## Features

- Registration and Login
- Likes and Notifications
- Follow
- Edit User Profile
- Tweets

## Installation

To run this project locally, follow these steps:

1. Clone the repository


   ```bash
   git clone https://github.com/aaronowusu/Twitter.git


2. Navigate to the project directory and install dependencies
   ```bash
   npm install

5. Set up environment variables
   
   Create a .env file and add the environment variables with your configuration values:
   ```bash
      DATABASE_URL=""
      JWT_SECRET=''
      SECRET=''   

6. Set up the database
   - Install MongoDB if you haven't already
   - Create a new database for the project 
   - Update the Prisma database db in schema.prisma if needed

7. Run database migrations
   ```bash  
   npx prisma migrate dev

8. Start the development server
   ```bash
   npm run dev

9. Open your browser and navigate to http://localhost:3000 to access the Twitter clone.

## Screenshots

### Registration
<img width="1439" alt="Register" src="https://github.com/aaronowusu/Twitter/assets/34800051/ea86f12d-2626-464b-80b9-4c48c2981a71">


### Log In
<img width="1440" alt="Login" src="https://github.com/aaronowusu/Twitter/assets/34800051/28e2f330-7d77-4081-8606-75e93b50e711">




### Home Page
<img width="1920" alt="Screenshot 2023-07-03 at 10 09 47" src="https://github.com/aaronowusu/Twitter/assets/34800051/4fc6c959-4821-4a29-b0cc-0dfb76d1daab">


### Profile Page
<img width="1920" alt="Screenshot 2023-07-03 at 10 10 05" src="https://github.com/aaronowusu/Twitter/assets/34800051/0ec55701-cdef-48ac-acbf-6992f45d6f6e">


### Notifications
<img width="1920" alt="Screenshot 2023-07-03 at 10 10 19" src="https://github.com/aaronowusu/Twitter/assets/34800051/b1a285a6-b97a-4b0e-98b6-e5b775c3c70c">

### Tweet
<img width="1920" alt="Screenshot 2023-07-03 at 10 10 51" src="https://github.com/aaronowusu/Twitter/assets/34800051/857b62d9-8def-44f5-bfeb-f61f3e3fde50">


## WalkThrough


https://github.com/aaronowusu/Twitter/assets/34800051/42c95aa6-7ee3-4014-937e-097fc9905896


## Contributing
Contributions are welcome! If you find any issues or have suggestions, please feel free to open an issue or submit a pull request.


## Disclaimer ⚠️

This Twitter clone project is developed solely for educational and learning purposes. It is not intended to deceive, impersonate, or scam anyone. The project aims to demonstrate the functionality of a social media platform like Twitter, showcasing features such as user registration, following, likes, and notifications.

Please note that this Twitter clone is not affiliated with or endorsed by Twitter. It is an independent project created to simulate the user experience of a social media platform.

If you have any concerns, questions, or suggestions regarding this project, please feel free to reach out to me.


