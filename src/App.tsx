import './App.css'
import Testimonial from './components/testimonial/Testimonial';
import testimonialData from "./data.json";

function App() {

  return (
    <main className="testimonial-grid">
      {
        testimonialData.map((testimony, idx) =>
          <Testimonial key={idx} {...testimony} />)
      }
    </main>
  )
}

export default App
