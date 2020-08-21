import { IBook } from './../models/book';
import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody)
}

const Book = {
    getBooks: (): Promise<IBook[]> => request.get(`/books`),
    getBook: (id: number): Promise<IBook> => request.get(`/books/${id}`)
}

export default { Book }