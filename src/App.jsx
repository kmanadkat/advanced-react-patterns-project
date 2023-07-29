import { styled } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';
import Row from './ui/Row';

const StyledApp = styled.main`
	padding: 20px;
`;

const App = () => {
	return (
		<>
			<GlobalStyles />
			<StyledApp>
				<Row>
					<Heading as='h1'>The Wild Oasis</Heading>
					<div>
						<Heading as='h2'>Check in and out</Heading>
						<Button onClick={() => alert('Check in')}>Check in</Button>
						<Button
							variation='danger'
							size='medium'
							onClick={() => alert('Check out')}>
							Check out
						</Button>
					</div>
				</Row>

				<Row type='vertical'>
					<Heading as='h3'>Form</Heading>
					<form>
						<Input type='number' placeholder='Number of Guests' />
						<Input type='number' placeholder='Number of days' />
						<Button
							variation='secondary'
							size='small'
							type='submit'
							onClick={() => alert('Submit')}>
							Submit
						</Button>
					</form>
				</Row>
			</StyledApp>
		</>
	);
};

export default App;
