// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

	const [news, setNews] = useState([]);

	useEffect(() => {
		fetch('https://api.spaceflightnewsapi.net/v3/articles')
			.then(response => response.json())
			.then(data => {
				setNews(data);
			})
	})

	return (
		<div className="App">
			<div>
				<h1>space news</h1>
			</div>
			<div className='newsArticles'>
				{news && news?.map(data => {
					return (
						<div className='news-card' key={data.id}> 
							<h3>{data.title}</h3>
							<p>{data.summary}</p>
							<p>{data.publishedAt}</p>
							<a href={data.url}>visit page</a>
						</div>
					)
				})}

			</div>
		</div>
	);
}

export default App;
