import styled from 'styled-components';

export const Footer = () => {
	return (
		<FooterWr>
			<p>&copy; Landing page created by <a href={'https://github.com/Felirian'}>@Felirian</a></p>
		</FooterWr>
	);
};

const FooterWr = styled.footer`
  background: #282c34;
  padding: 10px;
  color: white;
  text-align: center;
  width: 100%;
  bottom: 0;
	a {
		text-decoration: underline;
	}
`;