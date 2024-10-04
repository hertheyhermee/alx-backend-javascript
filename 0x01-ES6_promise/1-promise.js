// Return a promise from a function
export default function getFullResponseFromAPI(success) {
    // Return a new promise
    return new Promise((resolve, reject) => {
        // Conditionally check if promise is boolean
        if (success === true) {
            // Fulfill promis with a value
            resolve({
                status: 200,
                body: 'Success'
            })
        } else {
            // Reject with a reason
            reject(Error("The fake API is not working currently"))
        }
    })
}