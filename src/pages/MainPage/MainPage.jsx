import React, { useState } from 'react'
import styles from './MainPage.module.scss'
import axios from 'axios'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

const MainPage = ({ arrUser, setArrUser }) => {
    const [input, setInput] = useState('')

    const onChange = (e) => {
        setInput(e.target.value)
    }

    const getUsers = () => {
        axios.get('https://api.github.com/users/' + input)
            .then(res => {
                console.log(res.data)
                setArrUser({
                    ...arrUser,
                    name: res.data.login,
                    avatar: res.data.avatar_url,
                    followers: res.data.followers,
                    following: res.data.following,
                    created: res.data.created_at,
                    public_repos: res.data.public_repos,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const keyDown = (e) => {
        if (e.keyCode === 13) {
            getUsers()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyDown)
        return () => {
            document.removeEventListener('keydown', keyDown)
        }
    })

    return (
        <div className={styles.main}>
            <header>
                <h1>GITHUB RESUME</h1>
            </header>
            <div className={`${styles.search} container`}>
                <input
                    placeholder='Type profile in GitHub!'
                    type="text"
                    onChange={onChange}
                />
                <Link to="/:username"><button onClick={getUsers}>Generate</button></Link>
            </div>
        </div>
    );
};
export default MainPage