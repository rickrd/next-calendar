import doRequest from '../services/request'

export const getWeatherByLatLon = async (lat: any, lng: any) => {
  const data = await doRequest(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=01460cb31eb2c443498031402b438f94&lang=en`)
  return data
}
