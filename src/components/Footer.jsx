import styled from "@emotion/styled";

const Foot = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 7rem;
`;
const Footer = () => {
  return (
    <Foot>
      <a
        href="https://cafecito.app/marcoluchi11"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          srcSet="https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x"
          src="https://cdn.cafecito.app/imgs/buttons/button_5.png"
          alt="Invitame un café en cafecito.app"
        />
      </a>
    </Foot>
  );
};

export default Footer;
