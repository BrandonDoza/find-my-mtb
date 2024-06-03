export async function fetchBikes() {
    try {
        let response = await fetch('http://localhost:3001/api/v1/bikes')
        if (!response.ok) {
            throw new Error('There is an issue getting the bikes')
        }
        let data = await response.json()
        // console.log('data', data)
        return data
    }
    catch(error) {
        console.log(error)
        throw error;
    }
}

export async function fetchSingleBike(id) {
    try {
        let response = await fetch(`http://localhost:3001/api/v1/bikes/${id}`)
        if (!response.ok) {
            throw new Error('The bike you requested could not be found')
        }
        let data = await response.json()
        
        return data
    }
    catch(error) {
        console.log(error)
        throw error
    }
}

export async function postBike(dataToPost) {
    try {
        let response = await fetch('http://localhost:3001/api/v1/bikes', {
            method: "POST",
    body: JSON.stringify(dataToPost),
    headers: { "Content-Type": "application/json" }
        })
        if (!response.ok) {
            throw new Error('Trouble adding you bike')
        }
        let data = await response.json()
    }
    catch(error) {
        throw error
    }
}
