import React from "react"
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css"
import { UserProfileProvider } from "./providers/UserProfileProvider";
import ApplicationViews from "./components/ApplicationViews";
import Header from "./components/Header";
import { PostProvider } from "./providers/PostProvider"

function App() {
  return (
    <div className="App">
      <Router>
        <UserProfileProvider>
          <PostProvider>
            <Header />
            <ApplicationViews />
          </PostProvider>
        </UserProfileProvider>
      </Router>
    </div>
  )
}

export default App
