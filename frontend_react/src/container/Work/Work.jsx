import React,{useState,useEffect} from 'react';
import {AiFillGithub} from 'react-icons/ai';
import {motion} from 'framer-motion';
import {AppWrap,MotionWrap} from '../../wrapper';
import {urlFor,client} from '../../client';
import './Work.scss';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({y:0, opacity : 1});
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
   const query = '*[_type== "works"]';

   client.fetch(query)
    .then((data)=>(
      setWorks(data),
      setFilterWork(data)
    ))
  }, [])
  
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">Here are some <span>Projects</span> <br /> I worked on</h2>

      <div className='app__work-filter'>
        {['All', 'UI/UX', 'Web Apps', 'React JS'].map((item,index)=>(
          <div
           key={index}
           onClick={()=>handleWorkFilter(item)}
           className={`app__work-filter_item app__flex p-text ${activeFilter === item? 'item-active' : '' }`}
          > 
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{duration:0.5, delayChildren:0.5}}
        className='app__work-portfolio'
      >
        {filterWork.map((item,index)=>(
          <div className='app__work-item app__flex' key={item.title + index}>
              <div className='app__work-img app__flex'>
                 <img src={urlFor(item.imgUrl)} alt={item.title} />

                <motion.div
                  whileHover={{opacity: [0,1]}}
                  transition={{duration:0.25, ease:'easeInOut', staggerChildren: 0.5}}
                  className='app__work-hover app__flex'
                >
                  <a href={item.codeLink} target='_blank' rel='noreferrer'>
                    <motion.div
                       whileInView={{scale: [0,1]}}
                       whileHover={{opacity: [1,0.9]}}
                       transition={{duration:0.25}}
                       className='app__flex'
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className='app__work-content app__flex'>
                  <h4 className='bold-text'>{item.title}</h4>
                  <p className='p-text' style={{marginTop:10}}>{item.description}</p>

                  <div className='app__work-tag app__flex'>
                    <p className='p-text'>{item.tags[0]}</p>
                  </div>
              </div>
          </div>

        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
);