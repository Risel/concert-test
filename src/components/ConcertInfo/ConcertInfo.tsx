import './ConcertInfo.scss'
import counter from '../../assets/counter.png';
import line from '../../assets/line.png'
import Cards from '../Cards/Cards';
import {FC} from "react";

const ConcertInfo: FC = () => {

    return (
        <div className='main'>
            <div className='main__header'>
                <h3>Купили билеты</h3>
                <img src={counter} alt="number" />
            </div>
            <div className='main__cards'>
                <Cards />
            </div>

            <div className='main__about-wrapper'>
                <div className='main__about-text'>
                    <h3>О площадке</h3>
                    <div className='main__about-stage-text'>
                        <img className='main__line-blue' src={line} alt="line" />
                        <h5>Современная площадка
                            для проведения концертов и других
                            мероприятий любой сложности.
                        </h5>
                        <p>Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все основные задачи любого события, а также современное оборудование, соответствующее самым высоким мировым стандартам. </p>
                    </div>
                </div>
                <div className='main__form'>
                    <form action="">
                        <label htmlFor="">Оставить заявку на проведение концерта</label>
                        <textarea name="contact" id="" cols={30} rows={10} placeholder='Расскажите о вашем предложении '/>
                        <button>Отправить</button>
                    </form>
                </div>
            </div>
            <div className='main__about-band'>
                <h3>О группе</h3>
                <p>Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно выпустил два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.</p>
            </div>
        </div>
    )
}

export default ConcertInfo