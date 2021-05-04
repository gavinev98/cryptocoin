import axios from 'axios';

//api call for fetching data.
export const retriveCoins = () => axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false');

//api call for retreving specified coin
export const retrieveSpecificCoin = (id) => axios.get('https://api.coingecko.com/api/v3/coins/'+`${id}`+'?tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false');