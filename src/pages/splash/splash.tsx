import { IonContent, IonPage } from "@ionic/react"
import { useHistory } from "react-router"
import React, { useEffect } from "react"
import styles from './splash.module.css'
import logo from '../../assets/images/Logo-Eng-Learn.png'

const Splash : React.FC = () => {
    const history = useHistory()
    useEffect(() => {
        setTimeout(() => {
            history.push('/home')
        },2000)
    })

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className={styles.content}>
                    <img src={logo} alt="logo" />
                    <h1>Copyright 2023 by Onfua</h1>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Splash