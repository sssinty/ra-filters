
interface Data {
	id: string
	name: string,
	price: number
}
export interface IFilter {
	newData: Data[], isFilter: boolean;
}

export interface IEdit {
  id: string;
  edite: boolean;
}


export interface IData {
  data: {
    data: Data[];
  };
}

export interface IFilterData {
	filterData: IFilter
}