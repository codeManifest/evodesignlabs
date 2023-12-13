import React, { PureComponent } from 'react'
import bg from '../img/bg.jpg'
import Button from '../component/Button'
import Content from '../component/content'
import Image from '../component/Image'
// import Images
import Model from '../img/model.png'
import photo1 from '../img/scooty.png'
import photo2 from '../img/enquiry.png'



export default class Homepage extends PureComponent {
  render() {
    return (
      <main>
        <div className="h-screen w-full relative ">

            <img className='max-sm:w-auto  w-full  h-screen' src={bg} alt="" />
            <div className=" max-sm:flex-col c-wrapper  absolute flex items-center h-full z-10 top-0 left-0 px-8">
                <div className='  text-slate-50 max-sm:w-auto max-sm:text-center max-sm:py-6 max-sm:flex max-sm:flex-col max-sm:h-1/2	height: 50%; '>
                    <h1 className='text-8xl max-sm:text-xl2 max-sm:p-5 max-sm:text-4xl max-sm:mt-5'>  Crafting Digital Brilliance <br />for Your Unique Vision</h1>
                    <div className='m-8 flex items-center w-auto'>
                    <Button btn="Learn More "/>

                    </div>

                </div>
                <div className='w-1/2 max-sm:w-auto max-sm:h-1/2 '>
                    <img src={Model} alt="" className='' />
                </div>
                
            </div>

            
        </div>
        <div className='h-screen bg-gray-50 flex justify-around items-center max-sm:flex-col max-sm:h-min   '>
          <Image photo={photo1}/>
          <Content title="Crafting Digital Brilliance for Your Vision" desc="Evo Design Labs stands as your premier destination for transformative digital solutions. Specializing in web development, graphic design, video editing, and logo creation, we blend creativity and expertise to turn your ideas into impactful realities. Our dedicated team, driven by innovation, crafts bespoke solutions that elevate your brand. With a commitment to excellence, Evo Design Labs ensures a seamless journey from concept to creation. Join us in shaping the digital future, where your brand's story is not just told but beautifully rendered. Immerse yourself in a world where imagination meets implementation for a lasting and memorable digital presence."/>
          
        

        </div>
        <div className='h-screen flex-row-reverse bg-gray-50 flex justify-around items-center max-sm:flex-col max-sm:h-min '>
          <Image photo={photo2}/>
          <Content title="Tailored Content Creation Services" desc="Unlock the power of personalized content with our bespoke content creation services. Whether you need engaging blog posts, compelling product descriptions, or attention-grabbing social media content, our team of skilled writers is here to cater to your unique requirements. We specialize in crafting content that resonates with your audience, aligns with your brand voice, and drives meaningful engagement."/>
          
        

        </div>
        
      </main>
    )
  }
}
