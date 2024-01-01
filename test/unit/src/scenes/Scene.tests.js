/* global QUnit */

import { Scene } from '../../../../src/scenes/Scene.js';

import { Object3D } from '../../../../src/core/Object3D.js';

export default QUnit.module( 'Scenes', () => {

	QUnit.module( 'Scene', () => {

		// INHERITANCE
		QUnit.test( 'Extending', ( assert ) => {

			const object = new Scene();
			assert.strictEqual(
				object instanceof Object3D, true,
				'Scene extends from Object3D'
			);

		} );

		// INSTANCING
		QUnit.test( 'Instancing', ( assert ) => {

			const object = new Scene();
			assert.ok( object, 'Can instantiate a Scene.' );

		} );

		// PROPERTIES
		QUnit.test( 'type', ( assert ) => {

			const object = new Scene();
			assert.ok(
				object.type === 'Scene',
				'Scene.type should be Scene'
			);

		} );

		QUnit.test( 'background', ( assert ) => {

			const object = new Scene();
			assert.ok( object.background === null );

		} );

		QUnit.test( 'environment', ( assert ) => {

			const object = new Scene();
			assert.ok( object.environment === null );

		} );

		QUnit.test( 'fog', ( assert ) => {

			const object = new Scene();
			assert.ok( object.fog === null );

		} );

		QUnit.test( 'backgroundBlurriness', ( assert ) => {

			const object = new Scene();
			assert.ok( object.backgroundBlurriness === 0 );

		} );

		QUnit.test( 'backgroundIntensity', ( assert ) => {

			const object = new Scene();
			assert.ok( object.backgroundIntensity === 1 );

		} );

		QUnit.test( 'overrideMaterial', ( assert ) => {

			const object = new Scene();
			assert.ok( object.overrideMaterial === null );

		} );

		// PUBLIC
		QUnit.test( 'isScene', ( assert ) => {

			const object = new Scene();
			assert.ok(
				object.isScene,
				'Scene.isScene should be true'
			);

		} );

		QUnit.todo( 'copy', ( assert ) => {

			assert.ok( false, 'everything\'s gonna be alright' );

		} );

		QUnit.todo( 'toJSON', ( assert ) => {

			assert.ok( false, 'everything\'s gonna be alright' );

		} );

	} );

} );
