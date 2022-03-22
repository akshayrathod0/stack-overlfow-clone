import React from 'react'
import { useState} from 'react'
import { postAnswer, deleteQuestion, voteQuestion } from '../../actions/question'
import { useNavigate } from 'react-router-dom'
import QuestionsDetails from './QuestionsDetails'
import './Comment.css'

import ReactDOM from 'react-dom';
  
const Comment = () => {

  
  function MyForm() {
    const [comment, setComment] = useState("");
  
    return (
      <div className='comment'>
        
       <form>
        
          <input type="text" className='int' onChange={(e) => setComment(e.target.value)} value={comment} placeholder='write something' />
           <button className='btn'style={{backgroundColor:'blue', color:'black'}}>post comment</button>
           
    
      </form>
      </div>
    )
  }
  
  ReactDOM.render(<MyForm />, document.getElementById('root'));
  return (
    <div>

    </div>
  )
}

export default Comment