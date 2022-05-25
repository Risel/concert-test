import './Comments.scss'
import React, {FC, useEffect, useState} from 'react'
import { useTypedDispatch, useTypedSelector } from '../../utils/Hook';
import { fetchComments } from '../../store/slices/commentSlice';
import { addComment } from '../../store/slices/commentSlice';
import { nanoid } from 'nanoid'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Popup from "../Popup/Popup";

interface ICommentsProps {
    id: number;
}

const Comments: FC<ICommentsProps> = ({ id }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur'
    });
    const comments = useTypedSelector(state => state.comments.comments)
    const [popup, setPopup] = useState(false);
    const dispatch = useTypedDispatch()

    const onClose = () => setPopup(false);

    useEffect(() => {
        dispatch(fetchComments())
    }, [dispatch])

    const sendComment: SubmitHandler<FieldValues> = (data: any) => {
        data.postId = id
        data.id = nanoid()

        dispatch(addComment(data))
        reset()
    }
    return (
        <>
            {(comments
                    .filter((comment) => comment.postId === id)
                    .map((comment) => {
                        return (
                            <div key={comment.id} className='comment'>
                                <div>
                                    <h4>{comment.email}</h4>
                                    <h3>{comment.name}</h3>
                                    <p>{comment.body}</p>
                                </div>
                            </div>
                        )
                    }))}
            <button onClick={() => setPopup(true)}>Написать комментарий</button>
            <Popup
                visible={popup}
                onClose={onClose}
            >
                <form onSubmit={handleSubmit(sendComment)} className="comment__submit" action="">
                    <label>Имя:</label>
                    <input {...register("name", {required: true,})}
                           type="text" name='name'
                           style={{outline: `${errors?.name ? '1px solid brown' : ''}`}}
                    />
                    <div className='comment__warning'>
                        {errors?.name && <p>Обязательно к заполнению</p>}
                    </div>
                    <label>Email</label>
                    <input {...register("email", {
                        required: true,
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Неправильный формат почты"
                        }
                    })}
                           type="text" name='email'
                           style={{outline: `${errors?.email ? '1px solid brown' : ''}`}}
                    />

                    <div className='comment__warning'>
                        {errors?.email && <p>{errors?.email?.message}</p>}
                    </div>
                    <textarea id="" cols={30} rows={10}
                              {...register("body", {
                                  required: true,
                              })}
                    />
                    <button>Отправить</button>
                </form>
            </Popup>
        </>
    )
}

export default Comments