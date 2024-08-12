import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
  const data = useLoaderData();
  return (
    <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
            <h2>{data.login}</h2>
            <img src={data.avatar_url} width={300} alt="" />
        </div>    
    </>
  )
}

export const gitHubInfosLoader = async () => {

    const response = await fetch('https://api.github.com/users/rayhanrahman25');
    return response.json()

}


