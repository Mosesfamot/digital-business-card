import React from 'react';
import UserImage from '../images/user-1.png';

export default function Info() {
    return (
        <section>
            <img src={UserImage} alt="User-image"></img>
            <h3>Moses Ojo</h3>
            <p>Frontend Developer</p>
            <a href='https://github.com/Mosesfamot'>mosesfamot.github</a>
            <article className="button">
                <a className="email-button" href='mailto:mosesojo.adegoke@gmail.com'><i class='bx bxs-envelope'></i>Email</a>
                <a className="linkedin-button" href='https://linkedin.com/mosesojo'><i class='bx bxl-linkedin-square'></i>LinkedIn</a>
            </article>
        </section>
    )
}