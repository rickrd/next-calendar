import doRequest from '../services/request'

export const getWeatherByLatLon = async (lat: any, lng: any) => {
  const data = await doRequest(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&lang=en`)
  return data
}
