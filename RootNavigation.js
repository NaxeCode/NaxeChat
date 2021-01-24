// RootNavigation.js

import * as React from "react";

export const navigationRef = React.createRef();

export function toggleDrawer() {
	navigationRef.current?.toggleDrawer();
	console.log("hey");
}
