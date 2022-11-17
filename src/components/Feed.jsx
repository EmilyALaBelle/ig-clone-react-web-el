import { useState, useEffect } from "react"
import { Button } from "antd"
import UploadModal from "./UploadModal"
import Post from "./Post"

export default function Feed() {
  const [photoList, setPhotoList] = useState()
  const [showUpload, setShowUpload] = useState(false)
  useEffect(() => {
    fetch('https://ig-web-clone-el.web.app/photos')
      .then(results => results.json())
      .then(data => setPhotoList(data))
      .catch(alert)
  }, [setPhotoList])
  return (
    <section className="photo-feed">
      {!photoList
        ? <p>Loading...</p>
        : photoList.map(post => (
          <Post post={post} key={post.photoId}/> //first Post refers to the conmponent, second post refers to prop called post in the Post component, The third post refers to what we called the big arrow function above. photoId comes from the api on (line 7) where we refer to the document id
        ))
      }
    {showUpload ? <UploadModal setPhotoList={setPhotoList} setShowUpload={setShowUpload}/> :null}
      <Button 
      onClick={() => setShowUpload(true)}
      className="fab" 
      type="primary" 
      shape="circle" 
      size="large">+</Button>
    </section>
  )
}