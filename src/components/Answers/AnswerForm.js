import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { postAnswer } from '../../redux/actions/postActions';
import api from '../utils/api';

import axios from 'axios';
/*
Step 1) Create a form to submit a new answer to a question
*/

function AnswerForm(props) {

    const [newAnswer, setNewAnswer] = useState({
        answer: '',
        question_id: props.questionid,
        bus_owner_username: '',
    })
    // componentWillMount() {
    //     this.props.fetchPosts()
    // }

    // useEffect(() => {
    //     props.postAnswer()
    // }, [])
     
    const handleChange = (e) => {
        setNewAnswer({
            ...newAnswer,
            [e.target.name]: e.target.value
        })
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        
        axios
        .post('https://jesse-tingle-mentor-me.herokuapp.com/api/answers')
        .then(res => {
            console.log('post answer', res)
            // setNewAnswer(res)
        })
        .catch(err => {
            console.log(err)
        })

    }

        return (
        <form onSubmit={handleSubmit}>
            <textarea name="answer" placeholder="Answer" value={newAnswer.answer} onChange={handleChange}  />
            <br />
            {/* <input name="question_id" placeholder="Question ID" value={newAnswer.question_id} onChange={handleChange} />
            <br /> */}
            <input name="bus_owner_username" placeholder="Business Owner Username" value={newAnswer.bus_owner_username} onChange={handleChange} />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
    
}

// const mapStateToProps = state => ({
//     posts: state.posts.items
// })

// export default connect(mapStateToProps, {postAnswer})(AnswerForm);
export default AnswerForm;