import React from 'react';
import ReactDom from 'react-dom';

import App from 'components/app';
import Grid from 'lib/maze/grid';

import Controller from 'lib/controller';
import gradiant from 'utilities/gradiant_picker';

document.addEventListener('DOMContentLoaded', () => {
	let rootEl = document.querySelector('.Root');
	ReactDom.render(<App />, rootEl);

	window.controller = new Controller();
	window.gradiant = gradiant;
});