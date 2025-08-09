import '../assets/styles/components/_banner.scss';
import useScreenSize from '../hooks/useScreenSize';

const Banner = ({ imgSrc, alt = "Banner", className = '', title, content}) => {
    const { isMobile } = useScreenSize();
    
    return (
        <div className='banner'>
            <img
                src={imgSrc}
                alt={alt}
                className={`${className}`}
            ></img>
            <div className='banner-mask'></div>
            <div className='banner-text'>
                {title && <h3 className={`${isMobile ? 'h6' : 'h3'}`}>{title}</h3>}
                {content && <p>{content}</p>}
            </div>
        </div>
    );
};

export default Banner;