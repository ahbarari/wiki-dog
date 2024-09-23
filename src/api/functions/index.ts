interface SendRequestArgs {
    endpoint: string
}

export async function sendRequest<T> (args: SendRequestArgs) {
    try {
        const response = await fetch(args.endpoint)
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status} ${response.statusText}`)
        }
        return await response.json() as T
    } catch (error) {
        throw new Error(`Error fetching data: ${error}`)
    }

}