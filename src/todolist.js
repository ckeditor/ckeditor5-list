/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module list/todolist
 */

import TodoListEditing from './todolistediting';
import TodoListUI from './todolistui';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import '../theme/todolist.css';

/**
 * The to-do list feature.
 *
 * This is a "glue" plugin that loads the {@link module:list/todolistediting~TodoListEditing to-do list editing feature}
 * and the {@link module:list/todolistui~TodoListUI to-do list UI feature}.
 *
 * @extends module:core/plugin~Plugin
 */
export default class TodoList extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ TodoListEditing, TodoListUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'TodoList';
	}
}
