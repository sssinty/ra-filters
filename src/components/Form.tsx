import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IData, IEdit } from "../interface/Interface";
import { addDataState, editData, serchData, serchStop, stopEdite } from "../redux/stateData";
import FormAdd from "./form/FormAdd";
import FormSerch from "./form/FormSerch";

const Form = () => {

	const {id, edite} = useSelector((state : {data : {isEdite : IEdit}}) => state.data.isEdite);
	const data = useSelector((state : IData) => state.data.data);
	const [serch, setSerch] = useState<boolean>(false)
	const [serchText, setSerchText] = useState<string>('')
	const [text, setText] = useState<string>("");
	const [price, setPrice] = useState<number | string>("");
	const dispatch = useDispatch();

	const clear = () => {
		setText('');
		setPrice('');
	};

	const handleSubmit = (evt: React.FormEvent) => {
		if(!evt) {
			return
		}
		evt.preventDefault();
		const target = evt.target as HTMLFormElement
		dispatch(addDataState({
			name: (target.name as HTMLFormElement[string]).value,
			price: target.price.value
		}));
		clear();
	};

	const handleSubmitSerch = (evt: React.FormEvent) => {
		const target = evt.target as HTMLFormElement
		evt.preventDefault();
		dispatch(serchData({name: (target.serch as HTMLFormElement[string]).value}))
	}

	useEffect(() => {
		if(edite) {
			const currentData = data.find((el) => el.id === id)
			if(currentData) {
				setText(currentData.name)
				setPrice(currentData.price)
			}
		}
	}, [id, edite, data]);

	const editeItem = (evt: React.FormEvent) => {
		evt.preventDefault();
		dispatch(editData({id, text, price}));
		clear();
		dispatch(stopEdite());
	}

  const cancel = () => {
    clear();
    dispatch(stopEdite());
  };

	const cancelSerch = () => {
		setSerch(false);
		dispatch(serchStop())
	}

	return (
		!serch ? 
		<FormAdd 
			cancel={cancel}
			edite={edite} 
			editeItem={editeItem} 
			handleSubmit={handleSubmit} 
			onChangeName={(e: React.ChangeEvent) => {
				const target = e.target as HTMLFormElement;
				setText(target.value)
			}}
			onChangePrice={(e: React.ChangeEvent) => {
				const target = e.target as HTMLInputElement;
				setPrice(Number(target.value));
			}} 
			onClick={() => setSerch(true)} 
			price={price} 
			text={text}
		/>
		: 
		<FormSerch
			handleSubmitSerch={handleSubmitSerch}
			onChange={(e: React.ChangeEvent) => {
				const target = e.target as HTMLFormElement;
				setSerchText(target.value)
			}}
			cancelSerch={cancelSerch}
			serchText={serchText}
		/>
	);
}

export default Form;