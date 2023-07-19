import './App.css'
import testimonialData from "./data.json";

function App() {
  
  return (
    <main className="testimonial-grid">
      {
        testimonialData.map((testimony, idx) => <article key={idx} className={`testimonial flow ${testimony.colors}`}>
        <div className="flex">
          <div>
            <img  src={testimony.image} alt={`photo of ${testimony.name}`} />
          </div>
          <div>
            <h2 className="name">{ testimony.name }</h2>
            <p className="position">{ testimony.position }</p>
          </div>
          </div>
          {
            testimony.testimonial.map ((para, idx) => <p key={idx}>{para}</p>)
          } 
        </article>)
    }
    </main>
  )
}

export default App
