## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Task Management App

Overview: 

  ark tasks as completed, with a focus on sorting tasks by priority. The app utilizes Server-Side Rendering (SSR) to load the initial list of tasks.

Features:

  1. Add a Task: Create new tasks with a title, description, and priority level.
  2. Edit a Task: Modify existing tasks.
  3. Delete a Task: Remove tasks from the list.
  4. Toggle Completion: Mark tasks as completed or pending.
  5. Dynamic Sorting: Tasks are sorted by priority (high, medium, low) and completed tasks are displayed at the bottom.
  6. Responsive Design: Basic styling for a clean and user-friendly interface.

Technology Stack:

  Next.js: Framework for server-rendered React applications.
  React.js: Library for building user interfaces.
  CSS: Styling for the application.
  Tailwind: For basic css.

Setup Instructions:

  1. Clone the Repository
    git clone https://github.com/vanshhhhh05/task-management-app.git
    cd task-management-app

  2. Install Dependencies Ensure you have Node.js installed. Then, install the required dependencies:
    npm install

  3. Run the Development Server Start the Next.js development server:
    npm run dev

  4. Open your browser and navigate to http://localhost:3000.


  Sorting Tasks by Priority

    The app implements a sorting mechanism that organizes tasks based on their priority levels: high, medium, and low. The sorting approach involves the following steps:

    1. Priority Levels: Each task has a priority assigned:

      1.1 High priority (highest urgency): Color-coded red.
      1.2 Medium priority: Color-coded yellow.
      1,3 Low priority (lowest urgency): Color-coded green.

    2. Sorting Logic:

      The app utilizes a custom sort function that assigns numeric values to each priority level:
        High: 1
        Medium: 2
        Low: 3

      Completed tasks are always moved to the bottom of the list, ensuring that they do not interfere with the visibility of pending tasks.
