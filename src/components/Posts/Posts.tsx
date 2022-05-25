import './Posts.scss'
import React, { useState } from 'react'

import { IPosts } from '../../types/data'
import { Link, useParams } from 'react-router-dom'
import { useTypedSelector } from '../../utils/Hook'


interface IUserIdProps {
    id: number;
}


const Posts: React.FC<IUserIdProps> = ({ id }): JSX.Element => {
    const posts = useTypedSelector(state => state.posts.posts)

    const [isShow, setShow] = useState<boolean>(false)

    const { name } = useParams()

    return (
        <div className='posts'>
            <div className='posts__header'>
                <h2 >Посты</h2>
                <button onClick={() => setShow(true)}>Посмотреть все посты</button>
            </div>
            <div className='posts__container'>
                {isShow ? (posts.filter((post: IPosts): boolean => post.userId === id)
                    .map((post: IPosts, index: number) => {
                        return (
                            <Link key={index} to={`/${name}/${post.title}`} className='posts__single-post'>
                                <div className='posts__single-post-header'>
                                    <h4>{post.title}</h4>
                                </div>
                                <p className='posts__text'>{post.body}</p>

                            </Link>
                        )

                    })) : (
                    posts.filter((post: IPosts): boolean => post.userId === id)
                        .map((post: IPosts, index: number)=> {
                            if (index < 3) {
                                return (
                                    <Link key={index} to={`/${name}/${post.title}`} className='posts__single-post'>
                                        <div className='posts__single-post-header'>
                                            <h4>{post.title}</h4>
                                        </div>
                                        <p className='posts__text'>{post.body}</p>
                                    </Link>
                                )
                            } else {
                                return null;
                            }
                        })
                    )
                }
            </div>
        </div>
    )
}

export default Posts