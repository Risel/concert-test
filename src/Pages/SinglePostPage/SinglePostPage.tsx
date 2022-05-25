import './SinglePostPage.scss'
import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../utils/Hook';
// import Comments from '../../components/Comments/Comments';
import AddComment from "../../components/AddComment/AddComment";
import Comments from "../../components/Comments/Comments";


const SinglePostPage: React.FC = () => {
    const { title } = useParams()
    const posts = useTypedSelector(state => state.posts.posts)

    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <div className='post-page'>
                {posts.filter(post => post.title === title)
                    .map((post) => {
                        return (
                            <div key = {post.id}>
                                <div className='post-page__post'>
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
                                </div>
                                <h2>Комментарии:</h2>
                                <Comments id={post.id}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SinglePostPage