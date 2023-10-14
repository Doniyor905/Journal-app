import '../Button/Button.css';

const checked = () => {
	console.log('Privet');
};

const Button = () => {
	return (
		<button onClick={checked} className="button accent">Сохранить</button>
	);
};

export default Button;