import axios from "axios";

export let getTrending = async(mediaType) => {
    let {data} = await axios.get (`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=1adb950950e870da078628a313fcac42`)
    return data.results;
}

export let getDetails = async(id,mediaType) => {
    let {data} = await axios.get (`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=1adb950950e870da078628a313fcac42`)
    return data;
}