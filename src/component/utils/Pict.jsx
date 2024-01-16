import React from 'react'
import useProductInfo from '../../custumhook/useProductInfo';

const Pict = () => {

  const data = useProductInfo();
  console.log(data);
  return (
    <>
    <div>pict</div>
    </>
  )
}

export default Pict;