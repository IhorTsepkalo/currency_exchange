import './cuurrencyTableStyle.css'
export default function Data ({item}) {

    return  <div className={'currencyTable'}>
        {console.log(item)}
        <div>Currency: {item.ccy}</div> -- <div>buy: {item.buy}</div>, <div>sale: {item.sale}</div>

    </div>
}