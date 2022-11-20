import styles from '../styles/BookCard.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export const authorName = (author) => {
  return author.map((item, index) => {
    return <span key={index}>{item.name}</span>
  })
}

const BookCard = (props) => {
  const { id, title, formats, authors, download_count } = props.item
  const [press, setPress] = useState(false)

  return (
    <Link href={`/${id}`}>
      <div
        className={press ? `${styles.card} active` : styles.card}
        onClick={() => setPress(true)}
      >
        <figure>
          <img src={formats['image/jpeg']} alt="book" loading="lazy" />
        </figure>

        <h2>{title}</h2>
        <h3>
          authors: <span>{authorName(authors)}</span>
        </h3>

        <p>
          download: <span>{download_count}</span>
        </p>
      </div>
    </Link>
  )
}

export default BookCard
