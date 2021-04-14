import doRequest from '../services/request'

export const getCityGeocode = async (city: string) => {
  const data = await doRequest(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`)
  return data
}
