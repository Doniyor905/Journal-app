import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/Journalltem/JournalItem';
function App() {

	const data = [
		{
			title:'Подготовка к обновлению курсов',
			text: 'Горные походы открывают удивительные природные ландшафты',
			date: new Date()
		},
		{
			title:'Поход в годы',
			text: 'Думал, что очень много време...',
			date: new Date()
		}
	];
	return (
		<div>
      Proyekt
			<Button/>
			<CardButton>
				Новое воспоминание
			</CardButton>
			<CardButton>
				<JournalItem title={data[0].title} text={data[0].text} date={data[0].date}/>
			</CardButton>
			<CardButton>
				<JournalItem title={data[1].title} text={data[1].text} date={data[1].date}/>
			</CardButton>
			
		</div>
	);
}

export default App;
