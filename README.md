# Sports Sync

Synced is an all in one sports/productivity application for athletes and teams. It was made to help manage the lives of athletes in one platform. Athletes use Whats App to create group chats, Google Calender to schedule their events, FitNotes to track their workouts, why not do it all in one app?
![Synced](/app/assets/synced.png)


## Features

- Calender section for tracking athletic events, such as workouts, games, team meetings, etc
- Workout log to track workouts for specific days in the gym
- Messaging system, to contact your teammates, or friends, to schedule games, with full mod functionalities, ability to invite users and boot users(if your the mod).
- A user dashboard to track workout consistency, intensity, and more over the course of a long period of time.
- Full progressive overload tracker for every exercise completed, with charts showing your progression.
- Full workspace tam calender, so users can create private teams, and schedule and render events everyone in the team can see.

## Technologies Used

- Leveraged NextJS13 modern app router for server side rendering and build in API route handlers
- Used Fullcalendar js for a fully functional calendar, allowing athletes to schedule any event needed, such as games, practices, meetings, etc, along with shadcn/ui for a smaller calendar for the workout log
- Integrated Pusher for real-time web socket communication, allowing teams to create group chats and get instant updates from everyone, fostering great communication. 
- Utilized  prisma and mongodb for a highly scalable database allowing users to seamlessly post workout logs, calendar events, and messages, along with being able to add a certain workout to their calendar.
- Employed tremor for beautiful charts tracking user progress, such as consistency, intensity, and progressive overload for every exercise logged.


## Prerequisites

- Knowledge of React and Javascript is required.
- Basic knowledge of Nextjs is required.
- Knowledge of database management is required.

## Installation

Clone the repository:

    ```ssh key```
    git clone git@github.com:Eshwar1212-maker/Sports-Sync.git

Get your env variables:

    There is a .env-example file that has all of the variables you will need to run this locally:
        For Mongodb atlast
            DATABASE_URL=
        For Google authentication
            GOOGLE_CLIENT_ID=
            GOOGLE_CLIENT_SECRET=
        For Next-auth authentication
            NEXTAUTH_SECRET=
        A cloundary set up for image upload
            NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
        Pusher client variables for web socket communication
            PUSHER_APP_ID =
            NEXT_PUBLIC_PUSHER_APP_KEY =
            PUSHER_SECRET =
            cluster =
## Screenshots

![Calender Feature](/app/assets/cal.png)
![Messaging Feature](/app/assets/message.png)
![Workout Log Feature](/app/assets/hey.pn")
![Progressive Overload Tracker Feature](/app/assets/tr.png)
![Consistency and Intensity Tracker Feature](/app/assets/das.png)
