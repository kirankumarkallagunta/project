import React,{useState, useEffect} from "react"
import axios from "axios"

function FiveC() {
  const [posts, setPosts]=useState([])
  const[userName, setUserName]=useState("")
  const[userNameFromButtonClick, setUserNameFromButtonClick]=useState("")

  const handleClick=()=>{
    setUserNameFromButtonClick(userName)
  }

  useEffect(()=>{
    axios.get(`https://api.github.com/users/${userNameFromButtonClick}/repos`)
    .then(res=>{
      console.log(res)
      setPosts(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[userNameFromButtonClick])

  return (
    <div>
      <input type="text" value={userName} onChange={e=>setUserName(e.target.value)} />
      <button type="button" onClick={handleClick}>submit</button>
      
      <ul>
        {posts.map(post=><li key={post.UserName}>
        <div>{post.name}
        </div>
        </li>)}   
      </ul>   
    </div>
  );
}

export default FiveC;