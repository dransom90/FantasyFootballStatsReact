import { useEffect, useState } from 'react'

interface IDataModel {
  userId: number,
  id: number,
  body: string,
  title: string
}

export default function App() {
  const [data, setData] = useState<IDataModel[]>([])
  useEffect(() => {
    const GetPost = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      })
      const json = await response.json() as IDataModel[]
      if (response.ok) setData(json)
    }
    GetPost()
  }, [data])
  return (
    <div className='row container-fluid py-3'>{
      data && data.map(post => <div className='col-lg-4 mb-3' key={post.id}>
        <div className="card">
          <div className="card-body">
            <div>Post number: {post.id}</div>
            <div className="card-title fs-4 fw-normal">{post.title.slice(0, 10)}</div>
            <div>{post.body.slice(0, 20)}</div>
          </div>
        </div>
      </div>)
    }</div>
  )
}

