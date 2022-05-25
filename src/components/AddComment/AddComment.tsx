import React, {FC, useState} from 'react';
import {IComments} from "../../types/data";
import {useTypedSelector} from "../../utils/Hook";

const AddComment: FC = () => {
    const posts = useTypedSelector(state => state.posts.posts)

    const [mail, setMail] = useState('');
    const [name, setName] = useState('');
    const [body, setBody] = useState('');

    function addNewComment(e: any){
        e.preventDefault();
        const newComment = {
            postId: 22,
            id: 33,
            mail,
            name,
            body
        }
        return [...posts, newComment]

    }

    return (
        <div className = "post-page popup">
            <form>
                <input type="email" placeholder="Введите почту" value = {mail} onChange={e => setMail(e.target.value)}/>
                <input type="text" placeholder="Введите имя" value = {name} onChange={e => setName(e.target.value)}/>
                <input type="text" placeholder="Текст комментария" value = {body} onChange={e => setBody(e.target.value)}/>
            </form>

            <button onClick = {addNewComment}>Создать Комментарий</button>
        </div>
    );
};

export default AddComment;
