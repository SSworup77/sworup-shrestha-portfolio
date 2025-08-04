import React from 'react'

const Container = ({children, className}:{
    children: React.ReactNode;
    className?:string
}) => {
  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container