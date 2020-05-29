import React, { useEffect, useRef, useCallback, useState } from 'react'

function ListView (props) {
  const {
    header = null,
    footer = null,
    data = null,
    convertView = null
  } = props

  const [isLoading, setIsLoading] = useState(false)

  return <div>
    {header}
    {data && data.map((item, index) => {
      return (item) => convertView(item)
    })
    }
    {footer}
  </div>
}

export default ListView
