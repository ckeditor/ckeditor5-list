/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals console, window, document */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Table from '@ckeditor/ckeditor5-table/src/table';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import List from '../../src/list';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import TodoList from '../../src/todolist';

ClassicEditor
	.create( document.querySelector( '#editor' ), {
		plugins: [ Essentials, Heading, Highlight, Table, Bold, Paragraph, List, TodoList, Clipboard, Link, FontSize ],
		toolbar: [
			'heading',
			'|',
			'bulletedList', 'numberedList', 'todoList',
			'|',
			'bold', 'link', 'highlight', 'insertTable', 'fontSize',
			'|',
			'undo', 'redo'
		],
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		}
	} )
	.then( editor => {
		window.editor = editor;

		const contentPreviewBox = document.getElementById( 'preview' );

		contentPreviewBox.innerHTML = editor.getData();

		// editor.model.document.on( 'change:data', () => {
		// 	contentPreviewBox.innerHTML = editor.getData();
		// } );
	} )
	.catch( err => {
		console.error( err.stack );
	} );
