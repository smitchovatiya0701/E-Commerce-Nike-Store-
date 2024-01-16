import React, { useEffect, useState } from "react";

function useProductInfo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
    console.log(data);
  }, []);
  return data;
}

export default useProductInfo;
