import { FLOORS } from "../constants";
import "../styles/floor-select.css";

type Props = {
	onChange?: (floor: number) => void;
	floor: number;
};

export function FloorSelect({ onChange, floor }: Props) {
	return (
		<div className="floor-select">
			<h2>Этажи</h2>
			<ul className="floor-select__list">
				{FLOORS.map((_floor) => (
					<button
						className={
							_floor.floor === floor
								? "floor-select__button selected"
								: "floor-select__button"
						}
						key={_floor.floor}
						onClick={() => onChange && onChange(_floor.floor)}>
						{_floor.title}
					</button>
				))}
			</ul>
		</div>
	);
}
