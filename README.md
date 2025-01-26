# **📝 TO-DO LIST APP**
This is a To-Do List Application built with React.js and Redux. The application provides a user-friendly interface to manage tasks efficiently, integrates weather information using an external API, and includes features like user authentication and persistent storage.

### **Key Features**

- **User Authentication**:  
  - Toggle authentication status with persistent storage (session storage).

- **Task Management**:  
  - Add tasks with priority selection.  
  - Delete tasks with a single click.  
  - Task list is stored in local storage for persistence across browser sessions.

- **Weather Integration**:  
  - Fetch  weather  using the OpenWeather API.

- **Responsive Design**:  
  - Fully responsive and styled using Tailwind CSS to provide a seamless experience across all devices.

- **State Management**:  
  - Centralized state management using Redux for tasks,
    
### **File Structure**

The project is organized as follows:

📦 src ├── 📂 components │ ├── AuthMessage.js: Displays authentication status or a login prompt. │ ├── Header.js: Handles header rendering and logout functionality. │ ├── TaskInput.js: Allows users to add tasks with priority selection. │ ├── TaskList.js: Displays the list of tasks with delete functionality. │ ├── WeatherInfo.js: Fetches and displays weather data for a user-specified city. ├── 📂 store │ ├── store.js: Configures the Redux store. │ ├── reducers.js: Contains task, authentication, and weather reducers. ├── App.jsx: Main application component that connects all features. ├── main.jsx: Entry point of the application. Initializes the Redux store and renders the app. ├── index.css: Global styles for the app, configured with Tailwind CSS.

## **Screenshots**
***

![Capture](https://github.com/user-attachments/assets/62f50df6-c387-45ca-8cc9-2fd666f333d2)


![Capture2](https://github.com/user-attachments/assets/28e77128-9ae9-4fa2-8e42-9681429a9799)


### **Steps to Run**

1. **Clone the Repository**:  
   First, clone the repository to your local machine by running the following command in your terminal:
   ```bash
   git clone https://github.com/your-username/repository-name.git
2. **Open the App Folder:**
    Open the cloned folder in your preferred code editor, such as VS Code.
 3. **Start the Development Server:**
    run this on terminal :
    npm run dev
 4. **Access the App in Your Browser:**
    Once the server starts, a link to the development server will be displayed in the terminal. It will look something like this:
      Local: http://localhost:3000/
5. **Open the Link in Your Browser:**
   Take your cursor and click Ctrl + Click on the displayed link to open the app in your browser.
   You should now see the app running in your browser.








