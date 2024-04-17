import React from 'react'
import MenuBar from '../../GeneralComponents/MenubarV2'
import ClinicPictureDark from '../../../media/ClinicPictureDark.png'

const MyBooking = () => {
  return (
    
    <div className="bg-[#F1F9FC]">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${ClinicPictureDark})` }}
      ></div>

      <div>
          <MenuBar/>
      </div>

    </div>
  )
}

export default MyBooking