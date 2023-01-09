import React from 'react'
import styles from './ResumePage.module.scss'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Loading from '../../components/UI/loading/Loading';

const ResumePage = () => {
    const username = useParams().username
    console.log(username)

    const [arrUser, setArrUser] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            axios.get('https://api.github.com/users/' + username)
                .then(res => {
                    console.log(res.data)
                    setArrUser({
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
        }, 2000)
    }, [username])

    if (arrUser === null) {
        return <Loading />
    }

    return (
        <div className={styles.resume}>
            <header>
                <div className={`${styles.in_header} container`}>
                    <Link to="/"><button>Back</button></Link>
                    <h1>Resume</h1>
                    <div></div>
                </div>
            </header>
            <main className={`${styles.main} container`}>
                <div className={styles.user_card}>
                    <div className={styles.user_name_and_logo}>
                        <div className={styles.logo}>
                            <img src={arrUser.avatar} alt="" />
                        </div>
                        <h2>{arrUser.name}</h2>
                    </div>
                    <div className={styles.information}>
                        <div className={styles.follow}>
                            <h3>Followers: {arrUser.followers}</h3>
                            <h3>Following: {arrUser.following}</h3>
                        </div>
                        <h3>Repositories: {arrUser.public_repos}</h3>
                    </div>
                </div>
            </main>
        </div>
    );
};
export default ResumePage