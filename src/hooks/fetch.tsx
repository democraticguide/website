import React from 'react'

type FetchState<T> = [T | null, boolean, Error | null]

/**
 *
 * @param url URL to fetch from, e.g. `/countries/ie`
 * @param options Options to pass to `fetch`
 * @returns FetchState object with `data`, `loading`, and `error` properties
 */
export default function useDataFetch<T = any> (url: string, options?: any): FetchState<T> {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(process.env.REACT_APP_DATA_URL + url + '.json', {
      mode: 'cors',
      ...options
    })
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [url, options])

  return [data, loading, error]
}
