import React from 'react'

interface Props {
  code: string
  size?: number
}

export default function Flag (props: Props) {
  let { code, size = 20 } = props
  switch (code) {
    case 'dev': return null
    case 'en': code = 'gb'; break
  }

  return (
    <img
      className='countryFlag'
      loading='lazy'
      width={size}
      src={`https://flagcdn.com/${code}.svg`}
      alt={code}
    />
  )
}
