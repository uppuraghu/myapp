import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const URL_PARAMS=useParams()
  console.log(URL_PARAMS)
  return (
    <div>
      ProductDetail
    </div>
  )
}

export default ProductDetail
