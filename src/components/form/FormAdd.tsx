import{ ChangeEventHandler, FormEventHandler, MouseEventHandler } from "react";

interface IFormAdd {
	edite: boolean,
	editeItem : FormEventHandler<HTMLFormElement>,
	handleSubmit : FormEventHandler<HTMLFormElement>,
	onChangeName: ChangeEventHandler<HTMLInputElement>,
	onChangePrice: ChangeEventHandler<HTMLInputElement>,
	onClick: MouseEventHandler<HTMLButtonElement>
	cancel: any,
	text: string,
	price: number | string,

}


const FormAdd = ({edite, editeItem, handleSubmit, onChangeName, text, cancel, price, onClick, onChangePrice} : IFormAdd) => {
	return (
		<form onSubmit={edite ? editeItem : handleSubmit}>
			<input name='name' onChange={onChangeName} value={text} />
			<input name='price' onChange={onChangePrice} value={price}/>
			<button type='submit'>Save</button>
			{edite ? <button type="button" onClick={cancel}>Cancel</button> : <button type="button" onClick={onClick}>🔎</button>}
		</form>
	)
}

export default FormAdd;