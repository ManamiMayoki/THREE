import './App.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugins once outside the component render loop
gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    gsap.to("html", {
      backgroundColor: "maroon",
      scrollTrigger: {
        trigger: "#section-1",
        start: "top top",
        markers: true,
        scrub: true,
        endTrigger: "#section-4",
        end: "top top"
      }
    });
  }, []); 

  return (
    <main>
      <section id="section-1">section-1</section>
      <section id="section-2">section-2</section>
      <section id="section-3">section-3</section>
      <section id="section-4">section-4</section>
    </main>
  );
}

export default App;