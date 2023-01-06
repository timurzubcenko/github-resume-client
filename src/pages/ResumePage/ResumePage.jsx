import React from 'react'
import styles from './ResumePage.module.scss'
import { Link } from 'react-router-dom'

const ResumePage = ({ arrUser }) => {
    return (
        <div className={styles.resume}>
            <header>
                <div className={`${styles.in_header} container`}>
                    <Link to="/github-resume-client"><button>Back</button></Link>
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