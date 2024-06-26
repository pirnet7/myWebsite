import "./App.css";
import { Suspense } from 'react';

import Navbar from "./components/NavbarComponent/NavbarComponent";
import Header from "./components/HeaderComponent/HeaderComponent";
import Projects from "./components/ProjectsComponent/ProjectsComponent";
import Skills from "./components/SkillsComponent/SkillsComponent";
import CommonQuestions from "./components/CommonQuestionsComponent/CommonQuestionsComponent";
import Divider from "./components/DividerComponent/DividerComponent";
import Aboutme from "./components/AboutmeComponent/AboutmeComponent";
import QRCode from "./components/QRComponent/QRComponent";
import Footer from "./components/FooterComponent/FooterComponent";


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Divider />
      <Aboutme />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <CommonQuestions />
      <Divider />
      <QRCode />
      <Footer />
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="Loading Page... ">
      <App />
    </Suspense>
  )
}
