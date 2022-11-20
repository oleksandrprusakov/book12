import React, { useEffect, useState } from 'react'

const SearchBook = ({ array }) => {
  const [searc, setSearch] = useState()
  const [dataList, setDataList] = useState()
  const [languages, setLanguages] = useState(array)
  console.log(array)

  console.log(languages)
  const sortData = async () => {
    const link =
      array.length === 2
        ? 'https://gutendex.com/books?languages=en,fr'
        : `https://gutendex.com/books?languages=${array[0]}`
    const response = await fetch(
      `https://gutendex.com/books?languages=${array[0]}`
    )
    const data = await response.json()
    setDataList(data)
    console.log(response)
    return data
  }

  return { dataList }
}

export default SearchBook
