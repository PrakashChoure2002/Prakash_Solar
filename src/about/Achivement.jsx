import React from 'react'

const Achivement = () => {
    const achievements = [
        {
          id: 1,
          src: 'https://m.media-amazon.com/images/I/71+miIAZUVL.jpg',
          alt: 'Certificate 1'
        },
        {
          id: 2,
          src: 'https://m.media-amazon.com/images/I/71+miIAZUVL.jpg',
          alt: 'Certificate 2'
        },
        {
          id: 3,
          src: 'https://m.media-amazon.com/images/I/71+miIAZUVL.jpg',
          alt: 'Certificate 3'
        }
      ];
  return (
    <div className=' p-10'>
        <div className="text-center mb-6">
        <h2 className="sm:text-5xl lg:text-3xl  font-bold text-black">Our Achivement</h2>
        <br/>
        <h2 className="sm:text-5xl lg:text-3xl  font-extrabold text-blue-600">"Empowering Tomorrow,</h2>
        
        <p className="text-black sm:text-5xl lg:text-3xl  font-bold "> One Solar Achievement at a Time."
        </p>
      </div>
      <div className="flex justify-center items-center space-x-4 p-4">
      {achievements.map(achievement => (
        <img
          key={achievement.id}
          src={achievement.src}
          alt={achievement.alt}
          className="w-1/3 h-auto rounded-lg shadow-md"
        />
      ))}
    </div>
      
    </div>
  )
}

export default Achivement
