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
      <a href="file:///C:/Users/juang/OneDrive/%C3%81rea%20de%20Trabalho/Curriculo.pdf" target="_blank" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
