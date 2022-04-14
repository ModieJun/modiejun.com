import { Fragment } from 'react'

const ExperiencePage = () => {
  return (
    <Fragment>
      <div className="mx-auto mt-20 grid grid-cols-1 space-y-2 md:container md:max-w-4xl lg:mt-0  lg:grid-cols-2">
        <h1 className="inline justify-self-center tracking-wide">Experience</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-44 w-full bg-red-400"></div>
          <div className="h-44 w-full bg-blue-400"></div>
        </div>
      </div>
    </Fragment>
  )
}

export default ExperiencePage
