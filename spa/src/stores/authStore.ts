import { createContext } from 'react';
import { observable, computed, action, runInAction } from 'mobx';
import agent from '../api/agent';
import jwtDecode from 'jwt-decode';
import * as alertify from 'alertifyjs';
import { history } from '..';

class AuthStore {
    @observable token: string | null = null
    @observable decodedToken: any = {}
    @observable userImage: string | null = null

    @computed get isLoggedIn() {
        if (this.token == null) {
            return false
        } else return true
    }

    @action getToken = () => {
        if (this.token) {
            return this.token
        } else {
            this.token = localStorage.getItem('token')
            this.userImage = localStorage.getItem('image')
            return this.token
        }
    }

    @action setTokenAndImage = (token: string, image: string) => {
        this.token = token
        this.userImage = image
        localStorage.setItem('token', token)
        localStorage.setItem('image', image)
    }

    @action login = async (user: any) => {
        try {
            var response = await agent.Auth.login(user)
            runInAction(() => {
                if(response.image !== null) {
                    this.setTokenAndImage(response.token, response.image)
                } else {
                    this.setTokenAndImage(response.token, 'default')
                }
                this.decodedToken = jwtDecode(response.token)
                history.push('/feed')
                alertify.success('Welcome')
            })
        } catch (error) {
            alertify.error('Unauthorized')
            console.log(error)
        }
    }

    @action logout = () => {
        localStorage.clear()
        this.token = null
        this.decodedToken = null
        history.push('/')
        alertify.message('Bye bye!')
    }
}

export const AuthStoreContext = createContext(new AuthStore())