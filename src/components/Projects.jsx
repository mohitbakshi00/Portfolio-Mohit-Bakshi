import React from 'react'
import booking from "../assets/booking.png";
import courseWebsite from "../assets/courseWebsite.png"
import foodOrderingApp from "../assets/foodOrderingApp.png"
import technologyTrends from "../assets/technologyTrends.png"


const Projects = () => {

  const techs = [
    {
      id: 1,
      src: foodOrderingApp,
      title: "Food Ordering Website",
      link: "https://magical-sunshine-75560b.netlify.app/",
    },
    {
      id: 2,
      src: courseWebsite,
      title: "Course Website",
      link: "https://magical-sunshine-75560b.netlify.app/",
    },
    {
      id: 3,
      src: technologyTrends,
      title: "Technology Trends Analysis in IT Sector",
      link: "https://github.com/mohitbakshi00/technology-usage-trends-analysis",
    },
    {
      id: 4,
      src: booking,
      title: "Booking App",
      link: "https://magical-sunshine-75560b.netlify.app/",
    }
  ]

  return (
    <div name="projects" className="bg-black w-full h-full py-8">
      <h1 className="text-4xl text-white font-bold text-center py-8 underline ">My Projects</h1>
      <div className="sm:grid grid-cols-1  lg:grid-cols-2 gap-16 pt-4 mx-10">
        {techs.map(({ id, src, title, link }) => (
          <div
            key={id}
            className={`sm:w-[600px] h-[450px] mx-auto my-6 shadow-lg duration-500 py-2 rounded-lg bg-gray-900 `}
          >
            <p className="my-2 text-center text-2xl text-white py-1 font-bold">{title}</p>

            <img src={src} alt="" className="max-h-[300px]  md:max-h-[300px] w-full px-6 object-cover rounded-xl border-x-black" />
            <div className="flex mx-auto">

              <a href={link} target="_blank"><button className="text-white bg-gradient-to-b from-pink-500 to-red-500 px-6 py-2 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                View   </button></a>


            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects