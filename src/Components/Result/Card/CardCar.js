import React from "react";

import CardDetail from "./CardDetail";

import style from "../result.module.css";

const CardCar = () => {
    return (
        <div className={style.result_container}>
            <div className={style.car_card}>
                <CardDetail value="Harga" />
                <CardDetail value="Loremmmmmahsghdsjhask" />
                <CardDetail value="4 Orang" />
                <CardDetail value="Manual" />
                <CardDetail value="Tahun 2020" />

                <div>
                    <button>Lihat</button>
                </div>
            </div>
        </div>
    );
};

export default CardCar;
