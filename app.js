/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

//@require @packageOverrides
Ext.Loader.setConfig({

});

Ext.application({
    models: [
        'roomList'
    ],
    stores: [
        'MyStore'
    ],
    name: 'Booking',

    launch: function() {
        var drawComponent = new Ext.draw.Component({
            items: [{
                type: 'circle',
                fill: '#79BB3F',
                radius: 100,
                x: 100,
                y: 100
            }]
        });

        new Ext.Panel({
            fullscreen: true,
            items: [drawComponent]
        });
    }

});
