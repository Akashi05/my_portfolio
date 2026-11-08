import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@formspree/react+[...].mjs";
import { i as useFrame, n as Environment, o as require_jsx_runtime, r as Canvas, t as Lightformer } from "../_libs/@react-three/drei+[...].mjs";
import { o as BufferGeometry, p as Float32BufferAttribute } from "../_libs/monogrid__gainmap-js+three.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/HeroScene-CvfVOBIO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function makeRibbon() {
	const points = 240;
	const cross = 12;
	const vertices = [];
	const indices = [];
	for (let i = 0; i <= points; i++) {
		const t = i / points * Math.PI * 2;
		for (let j = 0; j <= cross; j++) {
			const a = j / cross * Math.PI * 2;
			const width = Math.cos(a) * .53;
			const depth = Math.sin(a) * .065;
			const radial = 1.48 + width * Math.cos(t / 2) - depth * Math.sin(t / 2);
			vertices.push(radial * Math.cos(t), radial * Math.sin(t), width * Math.sin(t / 2) + depth * Math.cos(t / 2));
			if (i < points && j < cross) {
				const k = i * 13 + j;
				indices.push(k, k + cross + 1, k + 1, k + 1, k + cross + 1, k + cross + 2);
			}
		}
	}
	const geometry = new BufferGeometry();
	geometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));
	geometry.setIndex(indices);
	geometry.computeVertexNormals();
	return geometry;
}
function Ribbon({ color, reducedMotion }) {
	const mesh = (0, import_react.useRef)(null);
	const geometry = (0, import_react.useMemo)(makeRibbon, []);
	const phase = (0, import_react.useRef)(0);
	const ready = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => () => geometry.dispose(), [geometry]);
	useFrame((state, delta) => {
		if (!ready.current) {
			state.gl.domElement.parentElement?.setAttribute("data-scene-ready", "");
			ready.current = true;
		}
		if (!mesh.current || reducedMotion) return;
		const dt = Math.min(delta, .05);
		phase.current += dt * .14;
		const follow = 1 - Math.exp(-2.5 * dt);
		mesh.current.rotation.x += (.65 + state.pointer.y * .18 - mesh.current.rotation.x) * follow;
		mesh.current.rotation.y += (-.4 + Math.sin(phase.current) * .45 + state.pointer.x * .25 - mesh.current.rotation.y) * follow;
		mesh.current.rotation.z = -.48 + Math.sin(phase.current * .7) * .16;
		mesh.current.position.y = Math.sin(phase.current * 1.7) * .09;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
		ref: mesh,
		geometry,
		rotation: [
			.65,
			-.4,
			-.48
		],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color,
			metalness: .32,
			roughness: .38,
			side: 2
		})
	});
}
function HeroScene({ darkMode }) {
	const [color, setColor] = (0, import_react.useState)(null);
	const [reducedMotion, setReducedMotion] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const css = getComputedStyle(document.documentElement);
		setColor(css.getPropertyValue(darkMode ? "--scene-light" : "--scene-dark").trim());
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		const update = () => setReducedMotion(media.matches);
		update();
		media.addEventListener("change", update);
		return () => media.removeEventListener("change", update);
	}, [darkMode]);
	if (!color) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		dpr: [1, 1.5],
		camera: {
			position: [
				0,
				0,
				8.3
			],
			fov: 36
		},
		gl: {
			antialias: true,
			alpha: true
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .65 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				color,
				position: [
					3,
					5,
					4
				],
				intensity: 2.4
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ribbon, {
				color,
				reducedMotion
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Environment, {
				resolution: 128,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightformer, {
						intensity: 3,
						position: [
							0,
							5,
							2
						],
						scale: [
							8,
							3,
							1
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightformer, {
						intensity: 2,
						position: [
							-5,
							0,
							2
						],
						"rotation-y": Math.PI / 2,
						scale: [
							8,
							4,
							1
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightformer, {
						intensity: 1.5,
						position: [
							5,
							-2,
							1
						],
						"rotation-y": -Math.PI / 2,
						scale: [
							5,
							2,
							1
						]
					})
				]
			})
		]
	});
}
//#endregion
export { HeroScene as default };
