import React from 'react'
import { useMatch } from 'react-router-dom'

import useDataFetch from '../hooks/fetch'

interface CountryData {
  population: number
}

export default function Country () {
  const match = useMatch('/country/:country')
  const [data, loading, error] = useDataFetch<CountryData>('/country/' + (match?.params.country ?? ''))

  if (error) {
    return <div>Error: {error.message}</div>
  }
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      Population: {data?.population}
    </div>
  )
}
