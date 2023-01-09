import React, { useState } from 'react'
import styles from './MainPage.module.scss'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const MainPage = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const onChange = (e) => {
        setInput(e.target.value)
    }

    const keyDown = (e) => {
        if (e.keyCode === 13) {
            navigate("user/" + input)
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
                <Link to={"user/" + input}><button>Generate</button></Link>
            </div>
        </div>
    );
};
export default MainPage