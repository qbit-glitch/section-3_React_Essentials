import React from 'react'

function TabButton({children, onSelect, selectedButton}) {

    console.log("Tab Button component is rendering")

  return (
    <li><button className={selectedButton ? 'active': null} onClick={onSelect}>{children}</button></li>
  )
}

export default TabButton