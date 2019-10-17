/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module list/listui
 */

import { createUIComponent } from './utils';

import numberedListIcon from '../theme/icons/numberedlist.svg';
import bulletedListIcon from '../theme/icons/bulletedlist.svg';
import alphaListIcon from '../theme/icons/alphalist.svg';


import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import {
	addToolbarToDropdown,
  	createDropdown,
} from '@ckeditor/ckeditor5-ui/src/dropdown/utils';


/**
 * The list UI feature. It introduces the `'numberedList'` and `'bulletedList'` buttons that
 * allow to convert paragraphs to and from list items and indent or outdent them.
 *
 * @extends module:core/plugin~Plugin
 */
export default class ListUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
	    const componentFactory = editor.ui.componentFactory;
	    const options = ['numberedList', 'letteredList', 'bulletedList'];
		const t = this.editor.t;

		// Create two buttons and link them with numberedList and bulletedList commands.
	    createUIComponent(this.editor, 'numberedList', t('Number List'), numberedListIcon);
	    createUIComponent(this.editor, 'letteredList', t('Alpha List'), alphaListIcon);
	    createUIComponent(this.editor, 'bulletedList', t('Bullet List'), bulletedListIcon);

	    componentFactory.add('listStyle', locale => {
			const dropdownView = createDropdown(locale);

			const buttons = options.map(option => componentFactory.create(option));
			addToolbarToDropdown(dropdownView, buttons);

			// Configure dropdown properties an behavior.
			dropdownView.buttonView.set({
				icon: bulletedListIcon,
				withText: false,
				tooltip: false,
			});
			dropdownView.toolbarView.isVertical = true;
			// Enable button if any of the buttons is enabled.
			dropdownView.bind('isEnabled').toMany(buttons, 'isEnabled', 
				(...areEnabled) => areEnabled.some(isEnabled => isEnabled));

			return dropdownView;
		});
	}
}
