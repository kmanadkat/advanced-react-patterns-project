import { styled } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';

const StyledApp = styled.main`
	padding: 20px;
`;

const App = () => {
	return (
		<>
			<GlobalStyles />
			<StyledApp>
				<Heading as='h1'>The Wild Oasis</Heading>
				<Heading as='h2'>Check in and out</Heading>

				<Heading as='h3'>Form</Heading>
				<Input type='number' placeholder='Number of Guests' />
				<br />
				<Button onClick={() => alert('Click')}>Checkin</Button>
			</StyledApp>
		</>
	);
};

export default App;
