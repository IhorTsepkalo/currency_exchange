import {useEffect, useState} from "react";
import Data from "./currencyRow";
import "./cuurrencyTableStyle.css"

export default function Table () {

   let [table, setTable] = useState([]);

    useEffect(()=>
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            .then(value => value.json())
            .then(value => setTable([...value])),[])

    return (<div>
        <div>{

            table.map((value, index) => <Data key={index} item ={value}/>)
        }


        </div>
        <div>

            <form>
               USD<input type={'radio'} name={'cur'}></input>
               EUR<input type={'radio'}name={'cur'}></input>
               RUR<input type={'radio'}name={'cur'}></input>
               BTC<input type={'radio'}name={'cur'}></input>


                <div><input type={'text'}></input></div>

            </form>
        </div>


    </div>)

}