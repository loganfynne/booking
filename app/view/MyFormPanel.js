/*
 * File: app/view/MyFormPanel.js
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

Ext.define('Conflux.view.MyFormPanel', {
    extend: 'Ext.form.Panel',

    requires: [
        'Conflux.view.timeSlider'
    ],

    config: {
        centered: true,
        height: 387,
        width: 600,
        hideOnMaskTap: true,
        modal: true,
        items: [
            {
                xtype: 'textfield',
                label: 'Summary: ',
                required: true
            },
            {
                xtype: 'textareafield',
                label: 'Description: ',
                autoCapitalize: true
            },
            {
                xtype: 'datepickerfield',
                itemId: 'datepicker',
                label: 'Date: ',
                required: true
            },
            {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'container',
                        width: 515,
                        items: [
                            {
                                xtype: 'timeSlider',
                                listeners: {
                                    change: function(f) {
                                        var hours = f.getValue() / 2;
                                        var minutes = (hours - parseInt(hours, 10)) * 60;
                                        var ampm = ' am';
                                        hours = parseInt(hours, 10);
                                        if (hours > 12) {
                                            hours = hours - 12;
                                            ampm = ' pm';
                                        } else if (hours == 12) {
                                            ampm = ' pm';
                                        }
                                        
                                        Ext.ComponentQuery.query('#startLabel')[0].setHtml(hours + ':' + minutes + ampm);
                                        
                                    }
                                },
                                label: 'Start:'
                            }
                        ]
                    },
                    {
                        xtype: 'label',
                        html: '12:00 am',
                        itemId: 'startLabel',
                        style: 'background:#FFF;',
                        width: 80
                    }
                ]
            },
            {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'container',
                        width: 515,
                        items: [
                            {
                                xtype: 'timeSlider',
                                listeners: {
                                    change: function(f) {
                                        var hours = f.getValue() / 2;
                                        var minutes = (hours - parseInt(hours, 10)) * 60;
                                        var ampm = ' am';
                                        hours = parseInt(hours, 10);
                                        if (hours > 12) {
                                            hours = hours - 12;
                                            ampm = ' pm';
                                        } else if (hours == 12) {
                                            ampm = ' pm';
                                        }
                                        
                                        var endLabel = Ext.ComponentQuery.query('#endLabel')[0];
                                        console.log(endLabel);
                                        endLabel.update(hours + ':' + minutes + ampm);
                                        //endLabel.setHtml();
                                        
                                    }
                                },
                                label: 'End: '
                            }
                        ]
                    },
                    {
                        xtype: 'label',
                        html: '12:00 am',
                        itemId: 'endLabel',
                        style: 'background:#FFF;',
                        width: 80
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                layout: {
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        margin: '0 20 0 20',
                        ui: 'confirm',
                        width: '120px',
                        text: 'Submit'
                    },
                    {
                        xtype: 'button',
                        margin: '0 20 0 20',
                        ui: 'decline',
                        width: '120px',
                        text: 'Discard'
                    }
                ]
            }
        ]
    },

    addEvent: function(calendarId, roomText) {
        var resource = {
            "summary": "Appointment",
            "location": "Somewhere",
            "start": {
                "dateTime": "2011-12-16T10:00:00.000-07:00"
            },
            "end": {
                "dateTime": "2011-12-16T10:25:00.000-07:00"
            }
        };

        var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': resource
        });

        request.execute(function(resp) {
            console.log(resp);
        });
    },

    initialize: function() {
        this.callParent();

        this.down('#datepicker').setValue(new Date());
    }

});