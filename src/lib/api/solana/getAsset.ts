// getNFTById.ts

const { VITE_PUBLIC_API_KEY } = import.meta.env

export const getAsset = async (id: string) => {
    const response = await fetch(`https://rpc.helius.xyz/?api-key=${VITE_PUBLIC_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            jsonrpc: '2.0',
            id: '1',
            method: 'getAsset', 
            params: {
                "id": id,
            },
        }),
    });

    const data = await response.json();
    return data.result;
};
