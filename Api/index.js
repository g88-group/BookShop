import axios from "axios";
const list = "combined-print-and-e-book-fiction";
const apiKey = `0nG5do2caU59G7F2PT1eRQD0RAsaX5Du`;
const baseUrl = `https://api.nytimes.com/svc/books/v3`;
const urlList = `${baseUrl}/lists/names.json?api-key=${apiKey}`;

export const getList = async () => {
    try {
        const res = await axios.get(urlList);
        return { data: res.data }
    } catch (error) {
        return { data: [] }
    }
}


export const getBooks = async (category = list) => {
    try {
        const res = await axios.get(`${baseUrl}/lists/current/${category}.json?api-key=${apiKey}`);
        return { data: res.data }
    } catch (error) {
        return { data: [] }
    }
}