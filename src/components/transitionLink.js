import React, {useRef} from "react"
import gsap from "gsap";
import {TransitionPortal} from 'gatsby-plugin-transition-link';

import Link from 'gatsby-plugin-transition-link'




const FadeLink = (props) => {
    
    const cover = useRef(null);
    const duration = 0.8;
    const easing =  "power4.inOut";

    const exit = ({exit,node}) => {
        console.log('exit',exit);

        gsap.fromTo(cover.current,{
            y: '100%',
        },
        {
        duration: duration,
        y: '0%',
        ease: easing,
        });


        gsap.set(node,{
            delay: duration,
            display: 'none',
        });

        gsap.fromTo(cover.current,{
        y: '0%',
        delay:duration
        },
        {
        duration: duration,
        y: '-100%',
        delay:duration,
        ease: easing,
        });

    }

  return (
<>
      <Link
        exit={{
            length: duration*2,
            trigger: exit
        }}
        entry={{
            delay:duration
        }}
        {...props}
        >
        {props.children}</Link>

        <TransitionPortal>
            <div
            ref={n => cover.current = n}
            className="fixed top-0 left-0 w-screen h-screen bg-black"
            style={{
                transform: 'translateY(100%)',
            }}
            />
        </TransitionPortal>
        </>
        
  )
}

export default FadeLink;
