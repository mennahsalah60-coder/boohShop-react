import styles from "./ProductCard.module.css"
import burger from '../images/burger-simple-svgrepo-com.svg'
import close from '../images/close-svgrepo-com.svg'
import { useState } from 'react';


function ProductCard() {
    const [isAdd, setIsAdd] = useState(false)

    return (
        <section className={styles.container}>
            <div className={styles.overlay}></div>
            <div className={styles.overlay_nav}></div>
            <div className={styles.nav}>
                <div className={styles.home}>
                    <div className={styles.bookshop}>
                        <svg width="25" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.33325 0H25.3333C27.5386 0 29.3333 1.79467 29.3333 4V28C29.3333 30.2053 27.5386 32 25.3333 32H2.66658V2.66667C2.66658 1.196 3.86259 0 5.33325 0ZM5.33325 24H21.3333V2.66667H15.9999V14.6667L12.6666 11.3333L9.33325 14.6667V2.66667H5.33325V24ZM25.3333 2.66667H23.9999V24H25.3333C25.8013 24 26.2493 24.0813 26.6666 24.2293V4C26.6666 3.26533 26.0679 2.66667 25.3333 2.66667ZM25.3333 29.3333C26.0679 29.3333 26.6666 28.7347 26.6666 28C26.6666 27.2653 26.0679 26.6667 25.3333 26.6667H5.33325V29.3333H25.3333Z" fill="white" />
                        </svg>
                        <p>BookShop</p>
                    </div>
                    <ul className={`${styles.menu} ${isAdd ? styles.active : ""}`}>
                        <li>Home</li>
                        <li>Books</li>
                        <li>About us</li>
                    </ul>
                    <div onClick={() => setIsAdd(prev => !prev)} >
                        {isAdd ? <img className={styles.burger} src={close} alt="mm" />
                        : 
                        <img className={styles.burger} src={burger} alt="mm" />}
                    </div>
                    <p className={styles.none}>|</p>
                    <p className={styles.warm}>Home</p>
                    <p className={styles.none}>Books</p>
                    <p className={styles.none}>About Us</p>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btn1}>Log in</button>
                    <button className={styles.btn2}>Sign Up</button>
                </div>
            </div>

            <div className={styles.two}>
                <div className={styles.search}>
                    <input type="text" placeholder="Seasrch" />
                </div>
                <button>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_6473_1976)">
                            <path d="M21.7315 20.4353L16.2599 14.9637C17.751 13.1401 18.4841 10.8131 18.3076 8.46414C18.1311 6.11516 17.0585 3.92386 15.3117 2.34352C13.5648 0.763179 11.2774 -0.0853045 8.92255 -0.0264253C6.56768 0.0324538 4.32552 0.994191 2.65986 2.65986C0.994191 4.32552 0.0324538 6.56768 -0.0264253 8.92255C-0.0853045 11.2774 0.763179 13.5648 2.34352 15.3117C3.92386 17.0585 6.11516 18.1311 8.46414 18.3076C10.8131 18.4841 13.1401 17.751 14.9637 16.2599L20.4353 21.7315C20.6082 21.8984 20.8397 21.9908 21.0801 21.9888C21.3204 21.9867 21.5503 21.8903 21.7203 21.7203C21.8903 21.5503 21.9867 21.3204 21.9888 21.0801C21.9908 20.8397 21.8984 20.6082 21.7315 20.4353ZM9.16671 16.5C7.71632 16.5 6.29849 16.07 5.09253 15.2642C3.88657 14.4584 2.94664 13.313 2.39159 11.9731C1.83655 10.6331 1.69133 9.15858 1.97429 7.73605C2.25724 6.31352 2.95568 5.00685 3.98126 3.98126C5.00685 2.95568 6.31352 2.25724 7.73605 1.97429C9.15858 1.69133 10.6331 1.83655 11.9731 2.39159C13.313 2.94664 14.4584 3.88657 15.2642 5.09253C16.07 6.29849 16.5 7.71632 16.5 9.16671C16.4979 11.111 15.7245 12.975 14.3498 14.3498C12.975 15.7245 11.111 16.4979 9.16671 16.5Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_6473_1976">
                                <rect width="22" height="22" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default ProductCard