/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import ViewListItemElement from 'ckeditor5/list/viewlistitemelement.js';
import ViewContainerElement from 'ckeditor5/engine/view/containerelement.js';
import ViewText from 'ckeditor5/engine/view/text.js';

describe( 'ViewListItemElement', () => {
	it( 'should extend ViewContainerElement', () => {
		const item = new ViewListItemElement();

		expect( item ).to.be.instanceof( ViewContainerElement );
	} );

	it( 'should have li name', () => {
		const item = new ViewListItemElement();

		expect( item.name ).to.equal( 'li' );
	} );

	describe( 'getFillerOffset', () => {
		it( 'should return 0 if item is empty', () => {
			const item = new ViewListItemElement();

			expect( item.getFillerOffset() ).to.equal( 0 );
		} );

		it( 'should return 0 if item has only lists as children', () => {
			const item = new ViewListItemElement( null, [
				new ViewContainerElement( 'ul', null, [
					new ViewListItemElement( null, new ViewText( 'foo' ) ),
					new ViewListItemElement( null, new ViewText( 'bar' ) )
				] )
			] );

			expect( item.getFillerOffset() ).to.equal( 0 );
		} );

		it( 'should return null if item has non-list contents', () => {
			const item = new ViewListItemElement( null, new ViewText( 'foo' ) );

			expect( item.getFillerOffset() ).to.be.null;
		} );

		it.only( 'should work in a clone', () => {
			// We chose the case with "return 0 if has only lists as children"
			// because this is a special behavior of this class.
			const item = new ViewListItemElement( null, [
				new ViewContainerElement( 'ul', null, [
					new ViewListItemElement()
				] )
			] );

			const clone = item.clone();

			expect( clone.getFillerOffset() ).to.equal( 0 );
		} );
	} );
} );
