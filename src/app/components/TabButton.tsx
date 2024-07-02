import React from 'react'

const TabButton = ( { active, selectTab, children }:{
  active: string
  selectTab: any
  children: JSX.Element
}) => {

    const buttonClasses = active ? 'text-black border-b border-black' : ' text-black '
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold ${buttonClasses}`}>
            {children}
        </p>
    </button>
  )
}

export default TabButton