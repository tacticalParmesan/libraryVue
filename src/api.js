export async function requestBook(searchedTitle){
    const url = `https://openlibrary.org/search.json?q=${searchedTitle}&limit=5`

    try {
        console.info('Requesting ' + searchedTitle)
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Couldn't fetch the book");
        }
        const data = await response.json()
        return data.docs.slice(0, 5);

    } catch (error) {
        console.error(error)
    }
}