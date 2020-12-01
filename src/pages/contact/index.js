import React from "react"
import Layout from "../../components/Layout/Layout"
import styles from "./contact.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import Head from "../../components/head/Head"

const Contact = () => {
  return (
    <Layout>
      <Head title='Contact' />
      <section id={styles.contact}>
        <h2>Contact</h2>
        <div>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/igli-xhukellari-17ab1014b/"
                target="_blank"
                rel="noreferrer"
              >
                <span class={styles.one}></span>
                <FontAwesomeIcon
                  className={styles.fa}
                  icon={faLinkedinIn}
                  size="1x"
                  aria-hidden="true"
                ></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href="https://github.com/Igli7" target="_blank" rel="noreferrer">
                <span class={styles.two}></span>
                <FontAwesomeIcon
                  className={styles.fa}
                  icon={faGithub}
                  size="1x"
                  aria-hidden="true"
                ></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href="mailto: xhukellariigli@gmail.com" rel="noreferrer">
                <span class={styles.three}></span>
                <FontAwesomeIcon
                  className={styles.fa}
                  icon={faEnvelope}
                  size="1x"
                  aria-hidden="true"
                ></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/iglixhukellari/"
                target="_blank"
                rel="noreferrer"
              >
                <span class={styles.four}></span>
                <FontAwesomeIcon
                  className={styles.fa}
                  icon={faInstagram}
                  size="1x"
                  aria-hidden="true"
                ></FontAwesomeIcon>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
