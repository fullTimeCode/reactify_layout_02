import './testimonial.css'

type Testimony = {
  colors: string;
  name: string;
  testimonial: string[];
  position: string;
  image: string;
}

const Testimonial = (testimony: Testimony) => {  
    return (
        <article className={`testimonial flow ${testimony.colors}`}>
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
      </article>
    )
}

export default Testimonial
