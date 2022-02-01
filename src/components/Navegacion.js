import React from 'react';
import { Link } from 'react-router-dom';
import Barcelona3 from '../images/barcelona.jpg';
import London3 from '../images/london.jpg';
import Paris3 from '../images/paris.jpg';
import Rome3 from '../images/rome.jpg';
import Athens3 from '../images/athens.jpg';
import Berlin3 from '../images/berlin.jpg';
import Amsterdam3 from '../images/amsterdam.jpg';

const Navegacion = () => {
  return (
    <div className='container mt-5' className='padre'>
        <Link to="/Barcelona" className='links'>
            <figure>
                <img src={Barcelona3} alt='' className='tamaño-imagen'/>
                <figcaption className='figcaption'>Barcelona</figcaption>
            </figure>
        </Link>
        <Link to="/London" className='links'>
            <figure>
                <img src={London3} alt='' className='tamaño-imagen'/>
                <figcaption className='figcaption'>London</figcaption>
            </figure>
        </Link>
        <Link to="/Paris" className='links'>
            <figure>
                <img src={Paris3} alt='' className='tamaño-imagen'/>
                <figcaption className='figcaption'>Paris</figcaption>
            </figure>
        </Link>
        <Link to="/Rome" className='links'>
            <figure>
                <img src={Rome3} alt='' className='tamaño-imagen'/>
                <figcaption className='figcaption'>Rome</figcaption>
            </figure>
        </Link>
        <Link to="/Athens" className='links'>
            <figure>
                <img src={Athens3} alt='' className='tamaño-imagen'/>
                <figcaption className='figcaption'>Athens</figcaption>
            </figure>
        </Link>
        <Link to="/Berlin" className='links'>
            <figure>
                <img src={Berlin3} alt='' className='tamaño-imagen'/>
                <figcaption className='figcaption'>Berlin</figcaption>
            </figure>
        </Link>
        <Link to="/Amsterdam" className='links'>
            <figure>
                <img src={Amsterdam3} alt='' className='tamaño-imagen'/>
                <figcaption className='figcaption'>Amsterdam</figcaption>
            </figure>
        </Link>
        
    </div>
  )
};

export default Navegacion;
