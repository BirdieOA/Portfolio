import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected
    ? "text-white bg-[#181818]"
    : "text-[#adb7be] hover:text-white border-[#FB1F5F] hover:border-white"   
  return (
    <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 cursor-pointer text-xl hover:bg-slate-800`} onClick={() => onClick(name)}>{name}</button>
  )
}

export default ProjectTag