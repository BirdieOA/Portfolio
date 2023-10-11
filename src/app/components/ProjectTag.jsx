import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected
    ? "text-white bg-[#401D50]"
    : "text-[#adb7be] border-[#FB1F5F] hover:border-white"   
  return (
    <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 cursor-pointer text-xl hover:bg-slate-800`} onClick={() => onClick(name)}>{name}</button>
  )
}

export default ProjectTag