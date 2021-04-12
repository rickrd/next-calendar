import doRequest from '../services/request'

export const getCityGeocode = async (city: string) => {
  const data = await doRequest(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyAYEg8S1BPZ02iJ--0hFjo4Qb0v5uS3BmQ`)
  return data
}
