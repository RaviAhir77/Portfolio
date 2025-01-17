import React, { useState } from 'react'
import Header from '../component/Header'
import '../css/Profile.css'
import ProfileImg from '../asset/rb_41562.png'

const Profile = () => {

    const [isAnimationFinished,setIsAnimationFinished] = useState(false)

    const handleAnimation = () => {
        setIsAnimationFinished(true)
    }

    const colorLinkedin = '#0a66c2'
    const colorGitHub = '#24292e'
    const colorGmail = '#959191'
    const gmailfill =  '#EA4335';
    const allfill = 'white';

    const handleDownload = () => {
        const fileUrl = `${process.env.PUBLIC_URL}/resume.pdf`;
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Resume.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up
      };
  return (
    <>
    <Header/>
    <div className='profile-wrapper'>
    <div className='Profile'>
        <div className='PContent'>
            <div className='intro' >
                <p className={isAnimationFinished ? 'animationEnd' : 'p'}
                onAnimationEnd={handleAnimation}>Hi there! 👋 Welcome to my portfolio.</p>
            </div>
            <div className='info'>My Name, <span>Ravi Gagiya</span></div>
            <div className='info-skill'>MERN STACK DEVELOPER</div>
            <div className='info-text'>I'm a computer science student who loves working with
                technology. I know languages like HTML, CSS, JavaScript, React,
                NodeJs and Express, and I've done projects in software
                development and web design. I enjoy solving problems and
                working with others to create cool stuff. I'm always excited to
                learn more and make a positive impact in the world of
                computer science.
            </div>

            <div className='social-media'>
                <button className='cv-button' onClick={handleDownload}>Download CV</button>
                <a href='https://www.linkedin.com/in/ravi-gagiya-08a05a2b5/' className='media-icon' style={{'--bg-color' : colorLinkedin, '--icon-color' : allfill }}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
                    <path d="M 30.306641 17.654297 C 23.138641 17.654297 17.306641 23.486297 17.306641 30.654297 L 17.306641 69.654297 C 17.306641 76.822297 23.138641 82.654297 30.306641 82.654297 L 69.306641 82.654297 C 76.474641 82.654297 82.306641 76.822297 82.306641 69.654297 L 82.306641 30.654297 C 82.306641 23.485297 76.475641 17.654297 69.306641 17.654297 L 30.306641 17.654297 z M 30.306641 19.654297 L 69.306641 19.654297 C 75.371641 19.654297 80.306641 24.589297 80.306641 30.654297 L 80.306641 69.654297 C 80.306641 75.719297 75.371641 80.654297 69.306641 80.654297 L 30.306641 80.654297 C 24.241641 80.654297 19.306641 75.719297 19.306641 69.654297 L 19.306641 30.654297 C 19.306641 24.589297 24.241641 19.654297 30.306641 19.654297 z M 33.144531 22.652344 C 27.168531 22.652344 22.306641 27.514234 22.306641 33.490234 L 22.306641 66.816406 C 22.306641 72.792406 27.168531 77.652344 33.144531 77.652344 L 66.470703 77.652344 C 72.446703 77.652344 77.306641 72.792406 77.306641 66.816406 L 77.306641 48.154297 C 77.306641 47.877297 77.082641 47.654297 76.806641 47.654297 C 76.530641 47.654297 76.306641 47.878297 76.306641 48.154297 L 76.306641 66.816406 C 76.306641 72.240406 71.894703 76.654297 66.470703 76.654297 L 33.144531 76.654297 C 27.720531 76.654297 23.306641 72.240406 23.306641 66.816406 L 23.306641 33.490234 C 23.306641 28.066234 27.720531 23.652344 33.144531 23.652344 L 66.806641 23.652344 C 67.082641 23.652344 67.306641 23.428344 67.306641 23.152344 C 67.306641 22.876344 67.082641 22.652344 66.806641 22.652344 L 33.144531 22.652344 z M 38.824219 35.695312 C 36.737219 35.695312 35.222656 37.157828 35.222656 39.173828 C 35.222656 41.189828 36.706109 42.652344 38.787109 42.652344 C 40.874109 42.652344 42.390625 41.190109 42.390625 39.162109 C 42.340625 37.121109 40.872219 35.695312 38.824219 35.695312 z M 38.824219 36.695312 C 40.345219 36.695312 41.353625 37.674781 41.390625 39.175781 C 41.391625 40.634781 40.321906 41.654297 38.753906 41.654297 C 37.264906 41.654297 36.222656 40.634781 36.222656 39.175781 C 36.222656 37.715781 37.292219 36.695312 38.824219 36.695312 z M 76.806641 37.654297 C 76.530641 37.654297 76.306641 37.877297 76.306641 38.154297 L 76.306641 40.154297 C 76.306641 40.430297 76.530641 40.654297 76.806641 40.654297 C 77.082641 40.654297 77.306641 40.430297 77.306641 40.154297 L 77.306641 38.154297 C 77.306641 37.878297 77.082641 37.654297 76.806641 37.654297 z M 76.806641 41.654297 C 76.530641 41.654297 76.306641 41.878297 76.306641 42.154297 L 76.306641 46.154297 C 76.306641 46.430297 76.530641 46.654297 76.806641 46.654297 C 77.082641 46.654297 77.306641 46.430297 77.306641 46.154297 L 77.306641 42.154297 C 77.306641 41.877297 77.082641 41.654297 76.806641 41.654297 z M 57.576172 44.53125 C 55.376172 44.54425 53.592687 45.201031 52.304688 46.582031 L 52.304688 45.152344 C 52.304688 44.876344 52.080688 44.652344 51.804688 44.652344 L 45.730469 44.652344 C 45.593469 44.652344 45.462188 44.707641 45.367188 44.806641 C 45.273187 44.905641 45.224469 45.039781 45.230469 45.175781 C 45.311469 46.924781 45.230469 63.978391 45.230469 64.150391 C 45.229469 64.284391 45.282 64.411859 45.375 64.505859 C 45.469 64.599859 45.596516 64.652344 45.728516 64.652344 L 51.806641 64.652344 C 52.082641 64.652344 52.306641 64.428344 52.306641 64.152344 L 52.306641 53.539062 C 52.306641 52.927062 52.365422 52.472547 52.482422 52.185547 C 52.725422 51.585547 53.481625 50.189453 55.265625 50.189453 C 57.933625 50.189453 58.222656 52.896453 58.222656 54.064453 L 58.304688 64.15625 C 58.306688 64.43125 58.530688 64.652344 58.804688 64.652344 L 64.804688 64.652344 C 65.080687 64.652344 65.304688 64.428344 65.304688 64.152344 L 65.304688 53.974609 C 65.304688 50.644609 64.483281 48.135578 62.863281 46.517578 C 61.543281 45.199578 59.765172 44.53125 57.576172 44.53125 z M 35.806641 44.654297 C 35.530641 44.654297 35.306641 44.878297 35.306641 45.154297 L 35.306641 64.154297 C 35.306641 64.430297 35.530641 64.654297 35.806641 64.654297 L 41.806641 64.654297 C 42.082641 64.654297 42.306641 64.430297 42.306641 64.154297 L 42.306641 45.154297 C 42.306641 44.878297 42.082641 44.654297 41.806641 44.654297 L 35.806641 44.654297 z M 57.560547 45.533203 L 57.576172 45.533203 C 59.491172 45.533203 61.033203 46.103563 62.158203 47.226562 C 63.583203 48.649563 64.306641 50.919609 64.306641 53.974609 L 64.306641 63.654297 L 59.302734 63.654297 L 59.222656 54.0625 C 59.222656 51.0575 57.707578 49.189453 55.267578 49.189453 C 53.607578 49.189453 52.219641 50.168594 51.556641 51.808594 C 51.388641 52.220594 51.306641 52.786062 51.306641 53.539062 L 51.306641 63.652344 L 46.232422 63.652344 C 46.245422 60.956344 46.295188 48.681297 46.242188 45.654297 L 51.306641 45.654297 L 51.306641 47.957031 C 51.250641 48.098031 51.273609 48.261437 51.349609 48.398438 C 51.438609 48.555437 51.625641 48.654297 51.806641 48.654297 C 52.014641 48.654297 52.192578 48.488063 52.267578 48.289062 C 52.997578 47.089062 54.345547 45.533203 57.560547 45.533203 z M 36.306641 45.654297 L 41.306641 45.654297 L 41.306641 63.654297 L 36.306641 63.654297 L 36.306641 45.654297 z"></path>
                </svg>
                </a>
                <a href='https://github.com/RaviAhir77' className='media-icon' style={{'--bg-color' : colorGitHub , '--icon-color' : allfill}}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
                        <path d="M 29 17 C 22.383 17 17 22.383 17 29 L 17 71 C 17 77.617 22.383 83 29 83 L 71 83 C 77.617 83 83 77.617 83 71 L 83 29 C 83 22.383 77.617 17 71 17 L 29 17 z M 29 19 L 71 19 C 76.514 19 81 23.486 81 29 L 81 71 C 81 76.514 76.514 81 71 81 L 29 81 C 23.486 81 19 76.514 19 71 L 19 29 C 19 23.486 23.486 19 29 19 z M 34.5 23 C 28.159 23 23 28.159 23 34.5 L 23 65.5 C 23 71.841 28.159 77 34.5 77 L 41.976562 77 L 58.976562 77 L 65.5 77 C 71.841 77 77 71.841 77 65.5 L 77 50.5 C 77 50.224 76.776 50 76.5 50 C 76.224 50 76 50.224 76 50.5 L 76 65.5 C 76 71.29 71.29 76 65.5 76 L 59.476562 76 L 59.476562 67.654297 C 59.476563 65.441297 58.439422 63.368 56.732422 62 L 57.425781 62 C 64.598781 62 70.433594 56.186062 70.433594 49.039062 C 70.433594 45.802062 69.233828 42.710641 67.048828 40.306641 C 67.378828 38.242641 67.384219 35.143797 66.449219 32.341797 C 66.380219 32.137797 66.189609 32 65.974609 32 C 61.923609 32 58.503172 34.689 57.076172 36 L 44.667969 36 C 41.167969 32.696 38.012563 32 35.976562 32 C 35.761563 32 35.570953 32.137797 35.501953 32.341797 C 34.733953 34.642797 34.396469 37.396609 34.605469 39.599609 C 32.006469 42.053609 30.521484 45.479016 30.521484 49.041016 C 30.521484 56.187016 36.355344 62 43.527344 62 L 44.195312 62 C 42.874313 63.032 41.928406 64.451094 41.566406 65.996094 C 39.569406 65.964094 37.279938 65.668453 36.210938 64.064453 C 33.785937 60.424453 32.562609 60.152344 30.974609 60.152344 C 30.311609 60.152344 29.812516 60.442266 29.603516 60.947266 C 29.309516 61.655266 29.652484 62.597797 30.521484 63.466797 C 31.693484 64.639797 31.694672 64.638391 32.888672 67.025391 C 33.610672 68.469391 35.679563 70.863141 41.476562 70.994141 L 41.476562 76 L 34.5 76 C 28.71 76 24 71.29 24 65.5 L 24 34.5 C 24 28.71 28.71 24 34.5 24 L 65.5 24 C 65.776 24 66 23.776 66 23.5 C 66 23.224 65.776 23 65.5 23 L 34.5 23 z M 36.337891 33.007812 C 38.205891 33.091813 40.957156 33.850344 44.035156 36.777344 L 44.126953 36.865234 C 44.219953 36.952234 44.34175 37 44.46875 37 L 57.273438 37 C 57.400437 37 57.533953 36.942469 57.626953 36.855469 C 58.818953 35.732469 61.931281 33.169812 65.613281 33.007812 C 66.412281 35.652813 66.354484 38.524906 66.021484 40.378906 C 65.993484 40.535906 66.041391 40.695547 66.150391 40.810547 C 68.266391 43.052547 69.433594 45.975062 69.433594 49.039062 C 69.433594 55.634062 64.046781 61 57.425781 61 L 54.976562 61 C 54.741562 61 54.538281 61.163578 54.488281 61.392578 C 54.437281 61.621578 54.553578 61.855125 54.767578 61.953125 C 57.019578 62.986125 58.476562 65.223297 58.476562 67.654297 L 58.476562 76 L 42.476562 76 L 42.476562 70.5 C 42.476562 70.224 42.252563 70 41.976562 70 C 37.795563 70 34.885203 68.784125 33.783203 66.578125 C 32.540203 64.093125 32.515516 64.046766 31.228516 62.759766 C 30.557516 62.087766 30.441344 61.536078 30.527344 61.330078 C 30.590344 61.175078 30.834609 61.152344 30.974609 61.152344 C 32.097609 61.152344 33.067906 61.152141 35.378906 64.619141 C 36.785906 66.728141 39.643563 67 41.976562 67 C 42.221562 67 42.42975 66.822078 42.46875 66.580078 C 42.78675 64.631078 44.209594 62.859078 46.183594 61.955078 C 46.397594 61.857078 46.515844 61.623531 46.464844 61.394531 C 46.414844 61.164531 46.211562 61 45.976562 61 L 43.529297 61 C 36.909297 61 31.521484 55.634062 31.521484 49.039062 C 31.521484 45.674062 32.958844 42.439062 35.464844 40.164062 C 35.583844 40.055063 35.645953 39.896328 35.626953 39.736328 C 35.397953 37.769328 35.675891 35.169812 36.337891 33.007812 z M 76.5 34 C 76.224 34 76 34.224 76 34.5 L 76 38 C 76 38.276 76.224 38.5 76.5 38.5 C 76.776 38.5 77 38.276 77 38 L 77 34.5 C 77 34.224 76.776 34 76.5 34 z M 76.5 41 C 76.224 41 76 41.224 76 41.5 L 76 48 C 76 48.276 76.224 48.5 76.5 48.5 C 76.776 48.5 77 48.276 77 48 L 77 41.5 C 77 41.224 76.776 41 76.5 41 z"></path>
                    </svg>
                </a>
                <a href='mailto:ravigagiya.cse@gmail.com' className='media-icon' style={{'--bg-color' : colorGmail, '--icon-color' : gmailfill }}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
                        <path d="M 31.011719 17.988281 C 23.831719 17.988281 18.011719 23.808281 18.011719 30.988281 L 18.011719 69.988281 C 18.011719 77.168281 23.831719 82.988281 31.011719 82.988281 L 70.011719 82.988281 C 77.190719 82.988281 83.011719 77.168281 83.011719 69.988281 L 83.011719 30.988281 C 83.011719 23.808281 77.191719 17.988281 70.011719 17.988281 L 31.011719 17.988281 z M 31.011719 19.988281 L 70.011719 19.988281 C 76.086719 19.988281 81.011719 24.913281 81.011719 30.988281 L 81.011719 69.988281 C 81.011719 76.063281 76.086719 80.988281 70.011719 80.988281 L 31.011719 80.988281 C 24.936719 80.988281 20.011719 76.063281 20.011719 69.988281 L 20.011719 30.988281 C 20.011719 24.913281 24.935719 19.988281 31.011719 19.988281 z M 33.847656 22.988281 C 27.862656 22.988281 23.011719 27.839219 23.011719 33.824219 L 23.011719 67.150391 C 23.011719 73.135391 27.862656 77.988281 33.847656 77.988281 L 67.173828 77.988281 C 73.158828 77.988281 78.011719 73.136391 78.011719 67.150391 L 78.011719 48.488281 C 78.011719 48.212281 77.787719 47.988281 77.511719 47.988281 C 77.235719 47.988281 77.011719 48.212281 77.011719 48.488281 L 77.011719 67.150391 C 77.011719 72.583391 72.606828 76.988281 67.173828 76.988281 L 33.849609 76.988281 C 28.416609 76.988281 24.011719 72.583391 24.011719 67.150391 L 24.011719 33.824219 C 24.011719 28.391219 28.414656 23.988281 33.847656 23.988281 L 67.511719 23.988281 C 67.787719 23.988281 68.011719 23.764281 68.011719 23.488281 C 68.011719 23.212281 67.787719 22.988281 67.511719 22.988281 L 33.847656 22.988281 z M 33.599609 36 C 32.585655 36 31.656131 36.341353 30.894531 36.900391 A 0.50005 0.50005 0 0 0 30.638672 37.111328 C 29.645481 37.956016 29 39.19825 29 40.599609 L 29 61.400391 C 29 62.80121 29.644189 64.043991 30.636719 64.888672 A 0.50059592 0.50059592 0 0 0 30.914062 65.117188 C 31.671846 65.666829 32.595065 66 33.599609 66 L 67.400391 66 C 68.671958 66 69.824377 65.47895 70.658203 64.640625 A 0.50005 0.50005 0 0 0 70.929688 64.3125 C 71.587992 63.516551 72 62.510346 72 61.400391 L 72 40.599609 C 72 39.488669 71.587089 38.481804 70.927734 37.685547 A 0.50005 0.50005 0 0 0 70.681641 37.388672 C 69.845853 36.534702 68.685404 36 67.400391 36 L 33.599609 36 z M 77.511719 36.566406 C 77.235719 36.566406 77.011719 36.790406 77.011719 37.066406 L 77.011719 39.066406 C 77.011719 39.342406 77.235719 39.566406 77.511719 39.566406 C 77.787719 39.566406 78.011719 39.343406 78.011719 39.066406 L 78.011719 37.066406 C 78.011719 36.790406 77.787719 36.566406 77.511719 36.566406 z M 33.599609 37 L 67.400391 37 C 68.300037 37 69.110465 37.338868 69.740234 37.880859 L 58.371094 50.798828 A 0.50005 0.50005 0 0 0 58.257812 50.929688 L 55.882812 53.626953 C 53.048879 56.847162 48.034513 56.788664 45.275391 53.503906 L 43.126953 50.945312 A 0.50005 0.50005 0 0 0 43.017578 50.814453 A 0.50005 0.50005 0 0 0 43.013672 50.8125 L 31.820312 37.484375 C 32.346323 37.184177 32.948365 37 33.599609 37 z M 31.021484 38.089844 L 42.033203 51.199219 L 31.033203 63.921875 C 30.395822 63.273056 30 62.385733 30 61.400391 L 30 40.599609 C 30 39.620232 30.390917 38.737639 31.021484 38.089844 z M 70.412109 38.628906 C 70.782111 39.194729 71 39.870407 71 40.599609 L 71 61.400391 C 71 62.139309 70.77755 62.824191 70.398438 63.394531 L 59.359375 51.189453 L 70.412109 38.628906 z M 77.511719 40.566406 C 77.235719 40.566406 77.011719 40.790406 77.011719 41.066406 L 77.011719 45.066406 C 77.011719 45.342406 77.235719 45.566406 77.511719 45.566406 C 77.787719 45.566406 78.011719 45.343406 78.011719 45.066406 L 78.011719 41.066406 C 78.011719 40.790406 77.787719 40.566406 77.511719 40.566406 z M 58.693359 51.945312 L 69.720703 64.134766 C 69.093476 64.667021 68.290997 65 67.400391 65 L 33.599609 65 C 32.954619 65 32.358487 64.818297 31.835938 64.523438 L 42.683594 51.974609 L 44.509766 54.148438 C 47.650644 57.887678 53.406746 57.952901 56.632812 54.287109 L 58.693359 51.945312 z"></path>
                    </svg>
                </a>
            </div>
        </div>
        <div className='Pimage'>
            <img src={ProfileImg} alt="Profile" className='profile-img'/>
        </div>
    </div>

    </div>
    
    </>
  )
}

export default Profile