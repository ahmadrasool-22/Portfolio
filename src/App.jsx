import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import About from "./sections/About";

function App(){
  return (

    <div className= "bg-gray-900 h-screen ">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>



    </div>
  )
}
export default App;