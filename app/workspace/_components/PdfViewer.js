import React from 'react'

const PdfViewer = ({fileUrl}) => {
    return (
    <div>
        <iframe src={fileUrl+"#toolbar=0"} className='h-[90vh] w-full'></iframe>
    </div>
  )
}

export default PdfViewer