// Modules
import axios from "axios"

// *************** Functions *************** //
// GET
export const getAPI = async (
  url: string
) => {
  const { data } = await axios.get(url)
  return data
}
/**
 * GET ALL Blog
 */
export const getBlogs = () => (
  axios.get(process.env.All_Blog_Url, { headers: {
      'Content-type': 'application/json',
      'X-API-KEY': process.env.API_KEY
    }})
)
/**
 * GET Blog Detail
 * @param id
 */
export const getBlogBy = id => (
  axios.get(`${process.env.All_Blog_Url}/${id}`, { headers: {
      'Content-type': 'application/json',
      'X-API-KEY': process.env.API_KEY
    }})
)