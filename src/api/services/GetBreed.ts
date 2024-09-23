import { Breed, BreedImage } from "@/types/breeds"
import { sendRequest } from "../functions"
import { GET_BREED_IMAGE, GET_BREEEDS_LIST_ENDPOINT } from "../endpoints"


export async function getBreedsList() {
    return await sendRequest<Breed[]>({endpoint: GET_BREEEDS_LIST_ENDPOINT})
  }


export async function getBreedImage(id: string) {
    return await sendRequest<BreedImage>({endpoint: GET_BREED_IMAGE(id)})
}