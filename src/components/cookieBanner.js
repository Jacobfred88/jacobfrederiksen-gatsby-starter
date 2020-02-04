import React, {useEffect, useRef} from 'react';
import Link from '../components/transitionLink';
import gsap from 'gsap';

const CookieBanner = () => {

    const banner = useRef(null);

    useEffect(() => {
        
        if (document.cookie.split(';').filter(function(item) {
            return item.trim().indexOf('comply_cookie') == 0
        }).length) {
            
        } else {
            
            banner.current.style.display = 'block';
        }
    },[]);

    const accept = () => {
    
        const days = 365; //number of days to keep the cookie
        const myDate = new Date();
        myDate.setTime(myDate.getTime()+(days*24*60*60*1000));
        document.cookie = 'comply_cookie = comply_yes; expires = ' + myDate.toGMTString(); //creates


        gsap.to(banner.current, {
            yPercent:100,
            onComplete: () => {
                banner.current.style.display = 'none';
            },
        })
    }

    return (
        <div className="fixed left-0 bottom-0 w-full bg-black py-4 md:py-8 z-40 hidden" ref={banner}>
            <div className="w-full px-8  flex items-center justify-between">
                <p className="text-sm md:text-base text-white mr-12">We use cookies to provide a personalized site experience. By continuing to use & browse this site, you agree to our <Link to="/privacy-policy" className="font-medium">Privacy Policy.</Link></p>
                <div className="w-3 md:w-5 h-auto cursor-pointer flex-shrink-0" onClick={accept}>
                    <svg className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 19">
                        <g fill="#FFF" fillRule="evenodd">
                            <path d="M.45405845 16.9246212L17.4246212-.04594155l2.12132035 2.12132035L2.5753788 19.04594155z"/>
                            <path d="M2.5753788-.04594155L19.54594155 16.9246212l-2.12132035 2.12132035L.45405845 2.0753788z"/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}
export default CookieBanner;