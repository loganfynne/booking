/*
 * File: app/view/timeSlider.js
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

Ext.define('Conflux.view.timeSlider', {
    extend: 'Ext.field.Slider',
    alias: 'widget.timeSlider',

    config: {
        width: 515,
        labelWidth: 175,
        required: true,
        maxValue: 48
    },

    initialize: function() {
        this.callParent();
        this.getComponent().on({
            scope: this,
            change: 'onSliderChange',
            drag: 'onSliderChange'
        });
    }

});