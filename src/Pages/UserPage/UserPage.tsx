import './UserPage.scss'
import React from 'react'
import { useParams } from 'react-router-dom'
import { IUsers } from '../../types/data';
import Posts from '../../components/Posts/Posts';
import { useTypedSelector } from '../../utils/Hook';

const colors: string[] = ['#63B4EE', '#2B9FF2', '#547FED', '#4366E1', '#2040B0', '#0C257C']

const UserPage: React.FC = () => {
    const { name } = useParams()

    console.log(name)
    const users = useTypedSelector(state => state.users.users)


    const createPublications = () => {
        const publications = [];
        for (let i = 0; i < 6; i++) {
            publications.push(
                <div key={`publication${i}`} style={{ background:`${colors[i]}`}}/>
            );
        }
        return publications;
    }

    return (
        <>
            {users.filter((user: IUsers): boolean => user.name === name)
                .map((user: IUsers, index: number): JSX.Element => {
                    return (
                        <div key={index}>
                            <table className="user">
                                <tbody>
                                    <tr >
                                        <td width={60}/>
                                        <td colSpan={5} style={{ padding: '11px 0 13px 18px' }} >
                                            <h3 className='user__username'>{user.username}</h3>
                                        </td>
                                        <td width={60}/>
                                    </tr>
                                    <tr className='user__second-row'>
                                        <td width={60}/>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.website}</td>
                                        <td>{user.company.name}: {user.company.bs}</td>
                                        <td width={60}/>
                                    </tr>
                                    <tr className='user__third-row'>
                                        <td width={60}/>
                                        <td colSpan={5}>
                                            <button>Написать сообщение</button>
                                        </td>
                                        <td width={60}/>
                                    </tr>
                                </tbody>
                            </table>
                            <Posts id={user.id} />
                        </div>
                    )
                })
            }
            <div className='user__publications'>
                <h2 className='user__publications-header'>Публикации</h2>
                <div className='user__publications-container'>
                    {createPublications()}
                </div>
            </div>
        </>
    )
}

export default UserPage