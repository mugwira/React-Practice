import React from 'react'

function About() {
    return (
        <div className="container md:grid grid-cols-2 gap-4 mx-auto px-8 ">
            <div className="content my-32 mx-auto mx-4 ">
                <h1 className="text-2xl">About</h1>
                <p className="py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quae atque ullam, quaerat modi sit iusto ducimus aspernatur
                     voluptatum beatae quisquam cumque illum fuga ea ratione, 
                     iure doloribus voluptas natus delectus officia! 
                    Blanditiis ea facere iure natus voluptatem doloribus quaerat placeat.</p>
            </div>
            <div className="second-grid text-center my-32 mx-auto mx-4 ">
            
                <img className="rounded-lg" src="./assets/tour.jpg" alt="" />
                
            </div>
        </div>
    )
}

export default About
