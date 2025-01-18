import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32 px-6'>
        <div className='grid md:grid-cols-2 gap-20 items-centre'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-gray-500 pt-2'>
                    I'm proficient in using various programming languages, including JavaScript, TypeScript, and Tailwind CSS. I also have experience with backend technologies like Node.js.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">Javascript</h2>
                        <h2 data-aos="zoom-in-up">Tailwind Css</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">Node Js</h2>
                        <h2 data-aos="zoom-in-up">Html</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
