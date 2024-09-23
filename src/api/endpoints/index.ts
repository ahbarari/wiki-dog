const API_BASE_URL = 'https://api.thedogapi.com/v1'
export const GET_BREEEDS_LIST_ENDPOINT = `${API_BASE_URL}/breeds`
export const GET_BREED_IMAGE = (id: string) => `${API_BASE_URL}/images/${id}`