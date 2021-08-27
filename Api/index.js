import axios from "axios";

const list = "hardcover-nonfiction";
const apiKey = `0nG5do2caU59G7F2PT1eRQD0RAsaX5Du`;
const baseUrl = `https://api.nytimes.com/svc/books/v3`;
const urlList = `${baseUrl}/lists/names.json?api-key=${apiKey}`;

export const getList = async () => {
    try {
        const res = axios.get(urlList);
        return {
            data: (await res).data
        }
    } catch (error) {
        return {
            data: []
        }
    }
}