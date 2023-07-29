import { styled } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';

const H1 = styled.h1`
	font-size: 30px;
	font-weight: 600;
`;

const StyledApp = styled.main`
	padding: 20px;
`;

const App = () => {
	return (
		<>
			<GlobalStyles />
			<StyledApp>
				<H1>The Wild Oasis</H1>
				<Button onClick={() => alert('Click')}>Checkin</Button>
				<Input type='number' placeholder='Number of Guests' />
			</StyledApp>
		</>
	);
};

export default App;
