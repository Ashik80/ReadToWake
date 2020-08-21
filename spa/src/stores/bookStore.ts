import { IBook } from './../models/book';
import { createContext } from "react"
import { observable, action, configure, runInAction } from 'mobx'
import agent from "../api/agent"

configure({ enforceActions: 'always' })

class BookStore {
    @observable books: IBook[] = []
    @observable book: IBook | null = null;

    @action getBooks = async () => {
        try {
            const books = await agent.Book.getBooks()
            runInAction(() => {
                this.books = books
            })
        } catch (error) {
            console.log(error)
        }
    }

    @action getBook = async (id: number) => {
        try {
            const book = await agent.Book.getBook(id)
            runInAction(() => {
                this.book = book
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export default createContext(new BookStore())