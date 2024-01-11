'use client'
import WebsiteScreen from '@/lib/components/website-screen';
import { COURSE_WELCOME_TEXT } from '@/lib/config';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Home() {
  const [isSectionVisible, setSectionVisibility] = useState(false);

  const turnOnSection = () => {
    setSectionVisibility(true);
  };

  const turnOffSection = () => {
    setSectionVisibility(false);
  };

  return (
      
      <div className="grid"  style={{ backgroundColor: 'yellow' }}>

        <div className="center padding-2 text-xl">
          <span>
            {COURSE_WELCOME_TEXT}
          </span>
        </div>

        <div className="center padding-2">
          <Image
            src="/us_flag_and_statue_of_liberty.jpg"
            alt="us flag and satue of liberty"
            width={320}
            height={100}
            priority
          />
        </div>

        <div className="center padding-2">
          <Image
            src="/brown_bear.jpeg"
            alt="brown bear photo"
            className="item"
            width={320}
            height={100}
            priority
          />
        </div>

        <div>
          <h1 className="center text-xxxl">
            
            when I grow up I want to . . .

          </h1>
      
          <ul>
            <li><em>be the presidant of the united states.</em></li>
            <li><strong>master all elemnts.</strong></li>
            <li><em>build a house.</em></li>
            <li><strong>be a billionair.</strong></li>
          </ul>

          <div className="center padding-2">
          <p>here is the wikipedia page of my role model</p>
          </div>

          <div className="center padding-2">
                <button onClick={turnOnSection}> click to go to the moon! </button>
          </div>
          
          <div className="center padding-2">
              <iframe src="https://en.wikipedia.org/wiki/Donald_Trump"  height="200" width="900" title='here is my role model'></iframe>
          </div>

          {isSectionVisible && (
              <div className="center padding-2">
              <p>moons in our solar system</p>
              <br></br>
              <iframe src="https://science.nasa.gov/gallery/moons/"  height="500" width="900" title='moons of our solar system'></iframe>
              <br></br>
            <button onClick={turnOffSection}>close</button>
            </div>
            )}

        </div>

      </div>
  )
}
