import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import store from "../../redux";
import MakingAnItems from "./MakingAnItems/MakingAnItems";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  coupon: Yup.string()
    .required(
      "Купон недействителен, просрочен или закончился лимит его использования!"
    )
    .min(6, "Это слишком короткий купон"),
});

const MakingAnOrder = () => {
  const task = useSelector((store) => store.task.task);
  const totalPrice = useSelector((store) =>
    store.task.task.reduce((acc, item) => acc + item.price, 0)
  );

  const validationOpt = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(validationOpt);
  const { errors } = formState;

  function onFormSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }

  return (
    <section className="Making">
      <div className="container">
        <h2 className="Making__title">ОФОРМЛЕНИЕ ЗАКАЗА</h2>
        <div className="Making__items">
          <form>
            {task.length !== 0 ? (
              task.map((item) => <MakingAnItems item={item} />)
            ) : (
              <div className="favorites__empty">Пусто добавьте вещей</div>
            )}
          </form>
        </div>
        {task.length !== 0 && (
          <div className="Making__info">
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <div className="Making__info-form">
                <input
                  name="coupon"
                  type="text"
                  placeholder="Введите промо код (если имеется)"
                  {...register("coupon")}
                />
                <div className="Making__info-form_error">
                  {errors.coupon?.message}
                </div>
                <button type="submit">Применить</button>
              </div>
            </form>
            <div className="Making__info-stock">
              Скидка
              <span>0%</span>
            </div>
            <div className="Making__info-price">
              ИТОГОВАЯ СТОИМОСТЬ:
              <span>{totalPrice}</span>
            </div>
          </div>
        )}
        {task.length !== 0 && (
          <div className="Making__blocks">
            <div className="Making__blocks-left">
              <div className="Making__blocks-left_title">ВЫБЕРИТЕ СПОСОБ ДОСТАВКИ</div>
              <div className="Making__blocks-left_check">
                <div className="Making__blocks-left_check-form">
                  <label>
                    <input type="radio" name="deliver"/>
                    <b></b>
                    <span>Шоурум</span>
                  </label>
                  <label>
                    <input type="radio" name="deliver"/>
                    <b></b>
                    <span>Курьером по Москве</span>
                  </label>
                  <label>
                    <input type="radio" name="deliver"/>
                    <b></b>
                    <span>Курьером по России</span>
                  </label>
                  <label>
                    <input type="radio" name="deliver"/>
                    <b></b>
                    <span>Курьером за границу</span>
                  </label>
                </div>
              </div>
              <div className="Making__blocks-left_select">
                <div className="Making__blocks-left_select-top">
                  <div>
                    <input type="text" />
                    <div></div>
                  </div>
                </div>
                <div></div>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <label></label>
              <button type="button"></button>
            </div>
            <div className="Making__blocks-right">
              <img src="https://eleanboutique.ru/image/catalog/demo/theme/cat/mob/oimg/delivery-1.jpg" alt="" />
              <p>
                Все заказы, размещенные на сайте ELEAN бережно и с любовью
                упакованы в картонную коробку и перевязанны лентой с логотипом
                бренда.
                <br />
                <br />
                Костюмы доставляются в тканевом чехле для комфортного хранения и
                перевозки. В каждый заказ вкладывается карточка с рекомендациями
                по уходу за изделиями.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MakingAnOrder;
