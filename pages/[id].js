import BookInfo from '../components/BookInfo'

export const getServerSideProps = async (context) => {
  const { id } = context.params
  const response = await fetch(`https://gutendex.com/books/${id}`)
  const data = await response.json()
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { item: data },
  }
}

const BookDescription = ({ item }) => {
  return <BookInfo item={item} />
}

export default BookDescription
