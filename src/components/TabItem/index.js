// Write your code here
import React from 'react'
import './index.css'

const TabItem = props => {
  const {tab, isActive, changeTab} = props
  const {tabId, displayText} = tab

  const onClickTab = () => {
    changeTab(tabId)
  }

  const tabClassName = isActive ? 'active-tab' : 'tab-item'

  return (
    <li className={tabClassName} onClick={onClickTab}>
      {displayText}
    </li>
  )
}

export default TabItem
