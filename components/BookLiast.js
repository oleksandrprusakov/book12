import { useEffect, useState } from 'react'

const BookLiast = (nexPage, visible) => {
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(nexPage)
  const [listdata, setList] = useState([])

  const [hasMore, setHasMore] = useState(false)

  const fetchMoreData = async () => {
    setLoading(true)

    const response = await fetch(`${nexPage}`)
    const data = await response.json()
    setList(data.results)
    setCurrentPage(data.next)
    setHasMore(data.next !== '')

    setLoading(false)
    return data
  }

  useEffect(() => {
    if (visible) {
      fetchMoreData()
    }
  }, [nexPage, visible])

  return { listdata, loading, currentPage, hasMore }
}

export default BookLiast
