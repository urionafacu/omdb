import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

const client = new QueryClient();

const Providers: React.FC = ({ children }) => {
	return (
		<QueryClientProvider client={client}>
			<BrowserRouter>
				{children}
			</BrowserRouter>
		</QueryClientProvider>
	);
};

export default Providers;