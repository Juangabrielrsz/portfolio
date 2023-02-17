import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from '../img/eu.png';

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Juan Gabriel" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="../files/curriculo.pdf" download target="_blank" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
