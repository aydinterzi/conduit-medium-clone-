import React from 'react'
import { useParams } from 'react-router-dom'

const SingleArticle = () => {
    const {title} = useParams();
    console.log(title);
  return (
    <div>
        asdasd
    </div>
  )
}

export default SingleArticle