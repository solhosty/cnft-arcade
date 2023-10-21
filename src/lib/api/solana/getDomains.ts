import { userPublicKey } from "../../stores"
import { get } from "svelte/store"

const { VITE_PUBLIC_API_KEY } = import.meta.env

const getDomain = async () => {
    const url = `https://api.helius.xyz/v0/addresses/${userPublicKey}/names?api-key=${VITE_PUBLIC_API_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export {getDomain}