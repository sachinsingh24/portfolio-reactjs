/** @format */

import React from 'react';
import './skill.css';
import Data from './Skill_Data.js';
import skill_img from '../img/skill.png';

const Skill = () => {
  return (
    <section>
      <div className='anchor' id='Skills'></div>
      <div className='container-fluid'>
        <div className='skill-wrap'>
          <div className='skill-heading'>
            <h2>Technical Skills</h2>
            <p>
              I have practiced .net programming by my own which includes c#,
              ASP.net and MSSQl. after that NodeJS, ReactJS, Python and MongoDB
              learned in <span className='skill-P'>Skill Safari</span>.
            </p>
            <img src={skill_img} alt='skill-structure' className='img-fluid' />
          </div>
          <div className='skill-content'>
            {Data.map((item, index) => {
              return (
                <article className='skill-bars' key={index}>
                  <div className='bar'>
                    <div className='info'>
                      <span>{item.program}</span>
                    </div>
                    <div className='progress-line title'>
                      <span
                        value={item.percent}
                        style={{ width: item.percent }}></span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
