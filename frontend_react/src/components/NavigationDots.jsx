import React from 'react'

const navigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        {['Home', 'about', 'work' ,'skills','testimonial', 'contact'].map((item,index)=>(
            <a
                href={`#${item}`} 
                key =  {item+index}
                style={active === item ? { backgroundColor: '#313BAC' } : {}}
                className='app__navigation-dot'
             />
        ))}
    </div>
  )
}

export default navigationDots