
// http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/

let materialColors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548', '#9E9E9E', '#607D8B']

export default function intToMaterialColor(int = 1) {
	return materialColors[Math.abs(int) % materialColors.length];
}
