**Prerequisites:**

- **Git:** Ensure you have Git installed on your system ([https://git-scm.com/downloads](https://git-scm.com/downloads)).
- **Node.js and npm:** Make sure you have Node.js (version 14 or later) and npm (or yarn) installed ([https://nodejs.org/en](https://nodejs.org/en)).

**Steps:**

1. **Create a New Project Folder:**
   - Open your terminal or command prompt.
   - Navigate to the desired location on your computer where you want to create your project.
   - Run the following command to create a new folder named `chatbot-project`:

     ```bash
     mkdir chatbot-project
     ```

2. **Clone the Repository:**
  
     - Navigate into the newly created `chatbot-project` folder:

       ```bash
       cd chatbot-project
       ```

     - Run the `git clone` command: 
       ```bash
       git clone https://github.com/anshdeep02/Software-Delivery-Pipeline---Assignment.git
       ```

 

3. **Set up Frontend (React):**
     - Navigate into the `frontend` directory:

       ```bash
       cd frontend
       ```

   - Install the required dependencies for the React frontend:

     ```bash
     npm install
     ```

   - Start the React development server:

     ```bash
     npm start
     ```

     This will open your React app in the browser, typically at `http://localhost:3000` (unless you've configured a different port).

4. **Set up Backend (Express):**
  \
     - Navigate into the backend directory :

       ```bash
       cd ../backend
       ```

  

   - Install the required dependencies for the Express backend:

     ```bash
     npm install
     ```

   - Start the Express server:

     ```bash
     npm start
     ```

     This will start your backend server, typically on port 5000 (unless you've configured a different port).

**Running the Project:**

- With both the frontend and backend running, you should be able to access your chatbot in the browser.
- You can interact with the chatbot by sending messages in the chat interface.

**Additional Notes:**

- If you encounter any errors, refer to the specific error messages and troubleshooting guides for the relevant packages.
- Customize the project further by adding more features, styling it with Tailwind CSS (if you haven't already), and implementing your own message processing logic in the backend.
- Consider using version control features like Git branching and merging to manage your project's development effectively.
