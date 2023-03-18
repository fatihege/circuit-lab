## How to install
1) First of all, download and install the LTS Node.js version.
2) Clone the Git repository or download and extract the source code.
3) Open the terminal or command prompt in the project directory.
4) Run `npm i` to install all packages.

---
## How to deploy
If you want to start the development server, run the `npm run dev` command, if you want to run the production server,
first compile the code with the `npm run build` command and then run the `npm run start` command. At the end of both
options, the server will start running at http://localhost:3000. (Default port is `3000`)

---
## How to change port
If you want to change the port of the application, add `-p <port>` to the end of the `dev` and `start` commands in the
`package.json` file

---
## How to use
Since this application is currently under development, it does not have a backend and therefore is not a dynamic
application. (For now)

Application endpoints:

| Title          | Endpoint              |
|----------------|-----------------------|
| Login          | `/login`              |
| Register       | `/register`           |
| Dashboard      | `/dashboard`          |
| Overview Panel | `/dashboard/overview` |
| Calendar Panel | `/dashboard/calendar` |
| Units Panel    | `/dashboard/units`    |
| Exams Panel    | `/dashboard/exams`    |
| Sharing Panel  | `/dashboard/sharing`  |
| Profile Panel  | `/dashboard/profile`  |

---
###### &copy; Copyright 2023 | Fatih EGE