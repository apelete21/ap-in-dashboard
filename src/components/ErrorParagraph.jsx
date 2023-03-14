import React from 'react'

const errorStyle = {
    color: "red",
    fontSize: 12,
    marginTop: 1 + 'rem',
}

function ErrorParagraph({error}) {
  return (
    <p style={errorStyle}>
      {error}
    </p>
  )
}

export default ErrorParagraph
