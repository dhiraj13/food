import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer Qtl90vZ_QTyCxZUVCNJikR9BiAyJs9WkropH6njVa3nzMWeAnmA9mptZjR9q4VMZA7zi81_hhGTMsZALDxNW7J_efwKdcj-V1-ZuRjnsMHeEHrHdrX4SBbUM-OLlYHYx',
  },
})
