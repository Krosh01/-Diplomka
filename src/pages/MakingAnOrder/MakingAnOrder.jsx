import React from 'react'
import { useSelector } from 'react-redux'
import store from '../../redux'
import MakingAnItems from './MakingAnItems/MakingAnItems';

const MakingAnOrder = () => {

  const task = useSelector((store) => store.task.task);
  const totalPrice = useSelector((store) => store.task.task.reduce((acc, item) => acc + item.price, 0))



  return (
    <section className='Making'>
        <div className='container'>
            <h2 className='Making__title'>ОФОРМЛЕНИЕ ЗАКАЗА</h2>
            <div className='Making__items'>
                <form>
                    {task.length !==0 ?
                        task.map((item) => (
                            <MakingAnItems item={item}/>
                        ))
                        : <div className='favorites__empty'>Пусто добавьте вещей</div>
                    }
                </form>
            </div>
            {task && <div>

            </div>}
            <div>

            </div>
        </div>
    </section>
  )
}

export default MakingAnOrder