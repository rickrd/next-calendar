import axios from 'axios'

const doRequest = async (url: string) => {
  try {
    const raw = await axios.get(url)
    console.log(raw)

    if (raw.status === 204) {
      return true
    }

    const parsed = await raw.data

    return parsed
  } catch (e) {
    throw new Error(e)
  }
}

export default doRequest
