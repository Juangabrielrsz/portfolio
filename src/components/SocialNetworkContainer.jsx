import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass';

import React from 'react'

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/juan-gabriel-421886252/" },
  { name: "github", icon: <FaGithub />, link: "https://github.com/Juangabrielrsz" },
  { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/juangabrielrsz/" },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} target="_blank" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks