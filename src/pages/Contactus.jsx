import React, { PureComponent } from 'react'
import Button from '../component/Button'

export default class Contactus extends PureComponent {
  render() {
    return (
      <div className='flex items-center h-screen bg-gray-700'>

      <div className='w-3/5 mx-auto bg-slate-600 min-h-fit py-8 rounded-xl  shadow-indigo-100/40 shadow-lg'>
        <div className='flex  px-8 items-center justify-around '>
          <div className='flex flex-col'>


            <h5 className='py-3 px-3 font-bold  text-slate-100' >Contact Us</h5>
            <input type="text" name="" id="" placeholder='Your Name' className='my-3 py-2 rounded-xl w-80 px-2' />
            <input type="email" name="" id="" placeholder='Your Email' className='my-3 py-2 rounded-xl w-80 px-2' />
            <textarea name="" id="" cols="30" rows="10" className='my-3 py-2 rounded-xl w-80 px-2' placeholder='Your Massage'></textarea>
            <Button  btn='Send' />
            
          </div>
          <div className='w-2/4  text-slate-100'>
            <h1><span className='font-light'>Transforming Visions</span> into Digital Masterpieces. <span className='font-light'>Connect Now!</span> </h1>


          </div>

        </div>
      </div>

      </div>
    )
  }
}
