/** @format */

import React, { useState } from 'react';
import './Portfolio.css';
import { Data } from './Data.js';
import { FaCode, FaEye } from 'react-icons/fa';
import { BsNodePlus, BsNodeMinus } from 'react-icons/bs';

const Portfolio = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className='container-fluid'>
      <div className='anchor' id='Portfolio'></div>
      <div className='port-warp'>
        <div className='container'>
          <div className='row py-4'>
            <h4 className='display-5'>
              <b>My Projects</b>
            </h4>
            <p>
              Listed below projects created while learning in skill safari as a
              intern.
            </p>
          </div>
          <div className='row py-2'>
            {Data.map((item, index) => {
              const { Project, Source, demo, description, github } = item;
              return (
                <div key={index} className='col-md-6 col-12 col-lg-3 mb-3 '>
                  <div className=' project-Box'>
                    <div className='card-center'>
                      <img className='img-Size' src={Source} alt={Project} />
                    </div>
                    <div className='card-center'>
                      <p className='description'>
                        {readMore
                          ? description
                          : `${description.substring(0, 50)}...`}
                        <button
                          className={`readmore`}
                          onClick={() => setReadMore(!readMore)}>
                          {readMore ? (
                            <BsNodeMinus className='h4' />
                          ) : (
                            <BsNodePlus className='h4' />
                          )}
                        </button>
                      </p>
                      <span className='icons'>
                        <a href={demo}>
                          <button className='btn btn-primary btn-sm'>
                            <FaEye />
                          </button>
                        </a>
                        <a href={github}>
                          <button className='btn btn-secondary btn-sm'>
                            <FaCode />
                          </button>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
