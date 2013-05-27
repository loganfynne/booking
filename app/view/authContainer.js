/*
 * File: app/view/authContainer.js
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

Ext.define('Booking.view.authContainer', {
    extend: 'Ext.Container',

    config: {
        itemId: 'authContainer',
        style: '#authFrame {height:100%; width:100%; overflow:hidden;}',
        listeners: [
            {
                fn: 'onContainerPainted',
                event: 'painted'
            }
        ]
    },

    onContainerPainted: function(element, eOpts) {
        var parameters = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            console.log(value);
            parameters[key] = value;
        });

        function isEmpty(ob) {
            for(var i in ob){
                return false;
            }
            return true;
        }

        if (isEmpty(parameters)) {
            console.log("Empty");
            window.location.href = 'authiframe.html';
        } else {
            console.log("Not empty");
            Booking.app.authToken = decodeURI(parameters.auth);
            this.generateItems();
        }
    },

    generateItems: function() {
        var myContainer = Ext.create('Booking.view.MyContainer1'),
            mainCarousel = Ext.create('Booking.view.mainCarousel'),
            token = Booking.app.authToken,
            clientId = '464168127252.apps.googleusercontent.com',
            apiKey = 'AIzaSyAy7JAsd5JlzjTR_fkkarby9N1c3YkhY6o',
            scopes = 'https://www.googleapis.com/auth/calendar',
            addContainer = "",
            items = [],
            obj;

        var backgroundColors = [
        '#0d6289', //Blue
        '#d27f56', //Orange
        '#4E2B52', //Purple
        '#FF4242', //Red
        '#53ab73', //Green
        '#D9D1A9', //Beige
        '#FFF',
        '#FFF',
        '#FFF',
        '#FFF',
        '#FFF'
        ];

        gapi.client.setApiKey(apiKey);
        gapi.auth.setToken(token);

        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, function(authResult) {
        if (authResult) {
            gapi.client.load('calendar', 'v3', function() {
                var request = gapi.client.calendar.calendarList.list();
                request.execute(function(outer) {
                    for (var i = 0; i < outer.items.length; i++) {
                        if (outer.items[i].id.substring(0,16) === 'bestfitmedia.com') {
                            obj = new Booking.view.MyContainer1();
                            console.log(obj.getItems());
                            obj.items.indexOf(0).calendarId = outer.items[i].id;
                            obj.items.indexOf(0).style = 'background:' + backgroundColors[i] + ';';
                            obj.items.indexOf(0).boxColor = '#43aad5';
                            items.push(obj);
                            console.log('Inside authContainer' + outer.items[i].id);
                        } else {
                            console.log("Not a resource");
                        }
                    }
                    mainCarousel.setItems(items);
                    Ext.ComponentQuery.query('#authContainer')[0].destroy();
                    Ext.Viewport.setActiveItem('mainCarousel');
                });
            });
        }
    });
    }

});