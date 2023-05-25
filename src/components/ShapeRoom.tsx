import { ExtrudeGeometryOptions, Shape } from "three";

type Props = {
	x: number;
	y: number;
	points: Array<{
		x: number;
		y: number;
	}>;
};

const extrudeSettings: ExtrudeGeometryOptions = {
	depth: 5,
	bevelEnabled: false,
};

export function ShapeRoom({ points }: Props) {
	const shape = new Shape();
	shape.moveTo(0, 0);

	points.forEach((item) => {
		shape.lineTo(item.x * 10, -1 * item.y * 10);
	});

	shape.lineTo(0, 0);

	return (
		<extrudeGeometry
			attach="geometry"
			args={[shape, extrudeSettings]}></extrudeGeometry>
	);
}
