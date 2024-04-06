import './footer.styles.scss';

import githubIcon from "../../assets/github-mark.svg";
import linkedinIcon from "../../assets/linkedin.svg";

const FooterComponent = () => {
  return (
    <div className='container footer'>
      <div className='footer-content'>
        <span>
          2024 - React e-commerce demo site (<a href='https://github.com/fleps/clothing-store' className='underline' target='_blank'>repo</a>)
        </span>
        <div className='footer-icons'>
          <a href='https://www.linkedin.com/in/fleps/' target='_blank'>
            <img src={linkedinIcon} alt='LinkedIn' />
          </a>
          <a href='https://github.com/fleps' title='fleps github profile'>
            <img src={githubIcon} alt='Github' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
