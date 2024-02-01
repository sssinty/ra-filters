import { ChangeEventHandler, FormEventHandler } from "react";

interface IFormSerch {
	handleSubmitSerch: FormEventHandler<HTMLFormElement>,
	serchText: string,
	onChange: ChangeEventHandler<HTMLInputElement>,
	cancelSerch: any
}

const FormSerch = ({handleSubmitSerch, onChange, cancelSerch, serchText} : IFormSerch) => {
	return (
		<form onSubmit={handleSubmitSerch}>
			<input type="text" name="serch" onChange={onChange} value={serchText}/>
			<button type='submit'>🔎</button>
			<button type="button" onClick={cancelSerch}>Cancel</button>
		</form>
	)
}

export default FormSerch;