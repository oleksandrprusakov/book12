import { authorName } from './BookCard'
import styles from '../styles/BookInfo.module.scss'

const BookInfo = ({ item }) => {
  const { id, title, formats, authors, download_count, subjects } = item || {}
  console.log(subjects)
  if (!item) {
    return <h1>No information</h1>
  }
  return (
    <section className={styles.book_info} key={id}>
      <figure>
        <img src={formats['image/jpeg']} alt="book" />
      </figure>
      <div className="ook_info--details">
        <h1>{title}</h1>
        <h5>
          authors: <span>{authorName(authors)}</span>
        </h5>

        {subjects.length > 0 && (
          <div>
            <h3>subjects</h3>
            <ul>
              {subjects.map((subj, index) => {
                return <li key={index}>{subj}</li>
              })}
            </ul>
          </div>
        )}
        <h5>
          download: <span>{download_count}</span>
        </h5>
      </div>
    </section>
  )
}

export default BookInfo
