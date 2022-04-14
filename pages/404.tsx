import { Fragment } from 'react'

const ErrorPage = () => {
  return (
    <Fragment>
      <div className=" hstack align-center h-1/2 justify-center font-light tracking-widest lg:h-auto">
        <h1 className="font-bold">404</h1>
        <h1>|</h1>
        <div>
          <p>This page could not be found.</p>
        </div>
      </div>
    </Fragment>
  )
}

export default ErrorPage
