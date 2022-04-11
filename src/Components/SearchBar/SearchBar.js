import React from "react";
import { useForm } from "react-hook-form";

import style from "./searchbar.module.css";

const SearchBar = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <form id="search-movie" onSubmit={handleSubmit(onSubmit)}>
                <div className={style.search_container}>
                    <div className={style.search_group}>
                        <label htmlFor="tipedriver">Tipe Driver</label>
                        <select name="tipedriver" id="tipedriver" {...register("tipedriver")}>
                            <option value="">--- Dengan Sopir ---</option>
                        </select>
                    </div>

                    <div className={style.search_group}>
                        <label htmlFor="date">Tanggal</label>
                        <input type="date" name="date" id="date" {...register("date")}></input>
                    </div>

                    <div className={style.search_group}>
                        <label htmlFor="time">Release Date After</label>
                        <input type="time" name="time" id="time" {...register("time")}></input>
                    </div>

                    <div className={style.search_group}>
                        <label htmlFor="jumlahpenumpang">Jumlah Penumpang</label>
                        <input type="text" name="jumlahpenumpang" id="jumlahpenumpang" {...register("jumlahpenumpang")}></input>
                    </div>

                    <div className={style.submit}>
                        <button type="submit">Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default SearchBar;
