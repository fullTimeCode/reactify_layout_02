import './App.css'

function App() {

  const testimonialData = [
    {
      "name": "Daniel Clifford",
      "position": "Verified Graduate",
      "testimonial": [
        "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
        `
        “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
        transition and have heard some people who had an amazing experience here. I signed up
        for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
        The next 12 weeks was the best - and most grueling - time of my life. Since completing
        the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
       `],
      "image": "./image-daniel.jpg",
      "colors": "bg-primary-400 quote text-neutral-100"
    }, 

    {
      "name": "Jonathan Walters",
      "position": "Verified Graduate",
      "testimonial": [
        "The team was very supportive and kept me motivated",
        `
        “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
        for a big company. This was one of the best investments I’ve made in myself. ”
       `],
      "image": "./image-jonathan.jpg",
      "colors": "bg-secondary-400 text-neutral-100"
    }, 

    {
      "name": "Jeanette Harmon",
      "position": "Verified Graduate",
      "testimonial": [
        "An overall wonderful and rewarding experience",
        `
       “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
        while doing something I love. ”
       `],
      "image": "./image-jeanette.jpg",
      "colors": "bg-neutral-100 text-secondary-400"
    },
    
    {
      "name": "Patrick Abrams",
      "position": "Verified Graduate",
      "testimonial": [
        "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
        `
        “ The staff seem genuinely concerned about my progress which I find really refreshing. The program
        gave me the confidence necessary to be able to go out in the world and present myself as a capable
        junior developer. The standard is above the rest. You will get the personal attention you need from
        an incredible community of smart and amazing people. ”
       `],
      "image": "./image-patrick.jpg",
      "colors": "bg-secondary-500 text-neutral-100"
    },

     {
      "name": "Kira Whittle",
      "position": "Verified Graduate",
      "testimonial": [
        "Such a life-changing experience. Highly recommended!",
        `
        “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
        professionals who can help me learn programming step by step. I was encouraged to enroll by a former
        student of theirs who can only say wonderful things about the program. The entire curriculum and staff
        did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
        project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
        could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
        experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
        100% recommend! ”
       `],
      "image": "./image-kira.jpg",
      "colors": "bg-neutral-100 text-secondary-400"
    },
    
  ]


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
