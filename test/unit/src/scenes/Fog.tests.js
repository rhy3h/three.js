/* global QUnit */

import { Fog } from '../../../../src/scenes/Fog.js';

export default QUnit.module( 'Scenes', () => {

	QUnit.module( 'Fog', () => {

		// INSTANCING
		QUnit.test( 'Instancing', ( assert ) => {

			// Fog( color, near = 1, far = 1000 )

			// no params
			const object = new Fog();
			assert.ok( object, 'Can instantiate a Fog.' );

			// color
			const object_color = new Fog( 0xffffff );
			assert.ok( object_color, 'Can instantiate a Fog with color.' );

			// color, near, far
			const object_all = new Fog( 0xffffff, 0.015, 100 );
			assert.ok( object_all, 'Can instantiate a Fog with color, near, far.' );

		} );

		// PROPERTIES
		QUnit.test( 'name', ( assert ) => {

			const object = new Fog();
			assert.ok( object.name === '' );

		} );

		QUnit.test( 'color', ( assert ) => {

			let object = new Fog();
			assert.ok( object.color.r, 'Red: ' + object.color.r );
			assert.ok( object.color.g, 'Green: ' + object.color.g );
			assert.ok( object.color.b, 'Blue: ' + object.color.b );

			object = new Fog( 0xffffff );
			assert.ok( object.color.r === 1, 'Passed' );
			assert.ok( object.color.g === 1, 'Passed' );
			assert.ok( object.color.b === 1, 'Passed' );

		} );

		QUnit.test( 'near', ( assert ) => {

			let object = new Fog();
			assert.ok( object.near === 1, 'Passed' );

			object = new Fog( null, 1000 );
			assert.ok( object.near === 1000, 'Passed' );

		} );

		QUnit.test( 'far', ( assert ) => {

			let object = new Fog();
			assert.ok( object.far === 1000, 'Passed' );

			object = new Fog( null, null, 1 );
			assert.ok( object.far === 1, 'Passed' );

		} );

		// PUBLIC
		QUnit.test( 'isFog', ( assert ) => {

			const object = new Fog();
			assert.ok(
				object.isFog,
				'Fog.isFog should be true'
			);

		} );

		QUnit.todo( 'clone', ( assert ) => {

			assert.ok( false, 'everything\'s gonna be alright' );

		} );

		QUnit.todo( 'toJSON', ( assert ) => {

			assert.ok( false, 'everything\'s gonna be alright' );

		} );

	} );

} );
