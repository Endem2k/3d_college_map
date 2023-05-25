import { MapControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { halfPi } from "../constants";
import { Euler } from "three/src/Three.js";

export const SceneWrapper = ({ children }: { children: React.ReactNode }) => {
	const defEuler = new Euler(-0.7, 1, 1, Euler.DEFAULT_ORDER);

	return (
		<Canvas
			camera={{
				position: [725, 643, 540],
				rotation: defEuler,
				far: 10000,
				near: 1,
				aspect: window.innerWidth / window.innerHeight,
			}}>
			<color
				attach={"background"}
				args={["#333"]}></color>

			<perspectiveCamera />
			<ambientLight intensity={0.2} />
			<directionalLight
				color={0xfcfcfc}
				position={[1, 1, 1]}
			/>

			<directionalLight
				color={0x002288}
				position={[-1, -1, -1]}
			/>
			<MapControls
				enableDamping={true}
				dampingFactor={0.05}
				minDistance={100}
				maxDistance={750}
				maxPolarAngle={halfPi}
				screenSpacePanning={false}
			/>

			{children}
		</Canvas>
	);
};
