import './Cards.scss'

import React from 'react'
import { IUsers } from '../../types/data';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../utils/Hook';


const Cards: React.FC = () => {
    const users = useTypedSelector(state => state.users.users)

    return (
        <div className='cards'>
            {users.map((user: IUsers) => {
                return (
                    <div key={user.id} className='cards__single-card'>
                        <div>
                            <h4>{user.name}</h4>
                            <p>{user.address.city}</p>
                        </div>
                        <Link to={`/${user.name}`} ><button>Смотреть Профиль</button></Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards