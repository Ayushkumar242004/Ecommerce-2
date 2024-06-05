import React from 'react'

const AddressCard = ({address}) => {
  return (
    <div className='space-y-3'>
      {/* address?.firstName */}
      {/* address?.lastName */}
        <p className='font-semibold'>{"Ayush" +" "+"Kumar"}</p>
        {/* {address?.state},{address?.streetAddress},{address?.zipCode} */}
        <p>Uttar Pradesh,D-562,Nandgram, Ghaziabad, 40001</p>
        <div className="space-y-1">
            <p className='font-semibold'>Phone number</p>
            <p>{address?.mobile}</p>
        </div>
    </div>
  )
}

export default AddressCard
