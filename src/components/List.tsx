import { useDispatch, useSelector } from "react-redux";
import { IData, IFilter} from "../interface/Interface";
import { removeService, setEdite, stopEdite } from "../redux/stateData";

const List = () => {
	const items = useSelector((state : IData) => state.data.data);
	const {newData, isFilter} = useSelector((state : {data : {filterData : IFilter}}) => state.data.filterData);
	const dispatch = useDispatch();

	const handleRemove = (event : React.MouseEvent) => {
		const target = event.target as HTMLElement;
		dispatch(removeService({id: (target.parentNode as HTMLFormElement).id}));
		dispatch(stopEdite());
	};

	const handleEdite = (event : React.MouseEvent) => {
		const target = event.target as HTMLElement;
		dispatch(setEdite({id: (target.parentNode as HTMLFormElement).id}));
	};

	const getItems = !isFilter ? items : newData

	return (
		<ul>
		{getItems.map((item) => (
			<li key={item.id} id={item.id}>
				{item.name} {item.price}
				<button onClick={handleEdite}> ✏️</button>
				<button onClick={handleRemove}>✕</button>
			</li>
		))}
	</ul>
	)
}

export default List;