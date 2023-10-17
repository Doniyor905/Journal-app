import { useEffect, useReducer } from 'react';
import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import cn from 'classnames';
import { INITIAL_STATE, formReducer } from './JournalForm.state';



const JournalForm = ({ onSubmit }) => {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const {isValid, isFormReadyToSubmit, values} = formState;

	useEffect(() => {
		let timerId;
		if (!isValid.date || !isValid.text || !isValid.title) {
			timerId = setTimeout(() => {
				console.log('Очистка состоянии');
				dispatchForm({type: 'RESET_VALIDITY'});
			}, 2000);
		}

		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if(isFormReadyToSubmit) {
			onSubmit(values);
		}
	}, [isFormReadyToSubmit]);

	const AddJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		dispatchForm({type: 'SUBMIT', payload: formProps});
		
		console.log(formProps);
	};
	return (
		<form onSubmit={AddJournalItem} className={styles['journal-form']}>
			<div>
				<input type="title" placeholder='Title...' name="title" className={cn(styles['journal-title'], {
					[styles['invalid']]: !isValid.title
				})} />
			</div>
			<label className={styles['journal-input-date']}>
				<img src="./date-icon.svg" alt="" />
				<p>Дата</p>
				<input type="date" name="date" className={cn(styles['journal-date'], {
					[styles['invalid']]: !isValid.date
				})} />
			</label>
			<label className={styles['journal-input-tag']}>
				<img src="./tag-icon.svg" alt="" />
				<p>Метки</p>
				<input type="text" name="tag" />
			</label>
			<textarea placeholder='Сообщения...' name="text" className={cn(styles['journal-text'], {
				[styles['invalid']]: !isValid.text
			})} id="" cols="30" rows="10"></textarea>
			<Button text="Сохранить" onClick={() => console.log('Hello')} />
		</form>
	);
};

export default JournalForm;