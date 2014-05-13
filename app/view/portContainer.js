Ext.define("Docket.view.portContainer",{extend:"Ext.Container",alias:"widget.portContainer",requires:["Ext.draw.Component"],config:{itemId:"portContainer",autoDestroy:false,scrollable:{direction:"vertical",directionLock:true},items:[{xtype:"draw",events:[],itemId:"inlinePortDraw",autoDestroy:true,listeners:[{fn:function(e,t){function x(e,t,n,r,i,s){c.add({type:"rect",fill:e,width:t,height:n,x:r,y:i,radius:s}).show(true)}function T(e,t,n,r,i){c.add({type:"text",text:n,font:t,fill:e,x:r,y:i}).show(true)}function N(e,t,n,r){c.add({type:"circle",cx:n,cy:r,r:t,fillStyle:e}).show(true)}function C(e){e=Date.parse(e);e=new Date(e);e=e.toTimeString().substring(0,5);if(parseInt(e.substring(0,2),10)>=12){if(e.substring(0,2)=="12"){e=e+"pm"}else if(parseInt(e.substring(0,2),10)-12<10){e=parseInt(e.substring(0,2),10)-12+e.substring(2)+"pm"}else{e=parseInt(e.substring(0,2),10)-12+e.substring(2)+"pm"}}else{if(e.substring(0,1)=="0"){e="12"+e.substring(2)+"am"}else if(parseInt(e.substring(0,2),10)<10){e=e+"am"}else{e=e+"am"}}return e}function k(e){try{p=0;e=e.replace(/\s+/g," ");var t=S.measureTextSingleLine(e,"22px OpenSans").width;var n=parseInt(t/(E*9.3));var r=0;for(var i=0;i<n;i++){for(var s=parseInt(e.length/n*(i+1));s>0;s--){if(i>0){e=e.substring(0,e.length/n*(i+1))+"...";p=p+20;i=n;r=0}else{if(e.substring(s,s+1)==" "){if(S.measureTextSingleLine(e.substring(0,s),"22px OpenSans").width<E*9.3){e=e.substring(0,s)+"\n"+e.substring(s+1);s=0;p=p+20}}}}}}catch(o){e=false}return e}function L(e){try{d=0;e=e.replace(/\s+/g," ");e=e.replace(/(\r\n|\n|\r)/g," ");var t=S.measureTextSingleLine(e,"16px OpenSans").width;var n=parseInt(t/(E*9.8));var r=0;var i=true;for(var s=0;s<n;s++){for(var o=parseInt(e.length/n*(s+1));o>0;o--){if(s>0){if(e.substring(o,o+1)==" "){if(S.measureTextSingleLine(e.substring(0,o),"16px OpenSans").width-E*9.8-r<E*9.5){r=S.measureTextSingleLine(e.substring(0,o),"16px OpenSans").width-E*9.8;e=e.substring(0,o)+"\n"+e.substring(o+1);o=0;i=false;d=d+5}}}else{if(e.substring(o,o+1)==" "){if(S.measureTextSingleLine(e.substring(0,o),"16px OpenSans").width-r<E*9.5){r=S.measureTextSingleLine(e.substring(0,o),"16px OpenSans").width-E*9.8;e=e.substring(0,o)+"\n"+e.substring(o+1);o=0;i=false;d=d+5}}}}if(s==2){e=e.substring(0,e.length/n*(s+1))+"...";d=d+5;s=n;r=0}}if(t>E*9.8){if(i){for(var o=e.length;o>0;o--){if(S.measureTextSingleLine(e.substring(0,o),"16px OpenSans").width<E*9){e=e.substring(0,o)+"...";o=0}}}else{var u=e.split("\n");for(var a=0;a<u.length;a++){if(S.measureTextSingleLine(u[a],"16px OpenSans").width>E*9.5){for(var f=u[a].length;f>0;f--){if(S.measureTextSingleLine(u[a].substring(0,f),"16px OpenSans").width<E*9.5){u[a]=u[a].substring(0,f);f=0}}}}e=u.join("\n")}}}catch(l){e=false}return e}function A(e,t,n,r,i,s,u,a){N(o,16,20,u+175);x(o,s*10,170,s*1.5,u+90,3);if(e!==false){T("#fff","22px OpenSans",e,s*1.7,u+118+p)}if(t!==false){T("#fff","16px OpenSans",t,s*1.7,u+173+d+p)}T("#fff","15px OpenSans",n+" - "+r,s*6.5-65,u+250);T("#fff","15px OpenSans",i,s*9.6,u+250)}var n=this,r=n.backgroundColor,i=n.timelineColor,s=n.roomText,o=n.boxColor,u=n.events;var a=n.parent.parent,f=Ext.getBody().getSize().height,l=Ext.getBody().getSize().width,c=n.getSurface("main"),h=new Date(Date.now()),p,d,v,m,g,y,b,w=f/10,E=l/12,S=Ext.draw.TextMeasurer;a.element.dom.style.background=r;if(210*u.length+90>f){f=210*u.length+90}n.setSize(l,f);c.setSize(l,f);x(r,l,f,0,0,0);setTimeout(function(){for(var e=0;e<document.getElementsByClassName("x-container x-draw-component x-paint-monitored x-size-monitored x-sized").length;e++){if(document.getElementsByClassName("x-container x-draw-component x-paint-monitored x-size-monitored x-sized")[e].id==n.element.getId()){document.getElementsByClassName("x-container x-draw-component x-paint-monitored x-size-monitored x-sized")[e].style.cssText="width: 100% !important; height: "+f+"px !important;"}}},1e3);x(i,20,f,10,0,0);T("#fff","20px OpenSans",s,33,30);x(o,40,40,l-55,5,3);T("#fff","28px OpenSans","+",l-43,36);for(var O=0;O<u.length;O++){d=0;b=k(u[O].summary);v=L(u[O].description);m=u[O].start.dateTime;if(typeof m==="undefined"){m=u[O].start.date;g="12:00am";y="11:59pm"}else{g=C(u[O].start.dateTime);y=C(u[O].end.dateTime)}date=new Date(Date.parse(m));if(date.getFullYear()==h.getFullYear()&&date.getDate()==h.getDate()&&date.getMonth()==h.getMonth()){m="Today"}else{if(h.getMonth()==date.getMonth()&&h.getDate()<parseInt(date.toDateString().substring(8,10))&&h.getDate()+7>parseInt(date.toDateString().substring(8,10))){m=date.toDateString().substring(0,3);if(m=="Mon"){m="    Mon"}else if(m=="Tue"){m="    Tue"}else if(m=="Wed"){m="    Wed"}else if(m=="Thu"){m="  Thurs"}else if(m=="Fri"){m="    Fri"}else if(m=="Sat"){m="    Sat"}else{m="    Sun"}}else{m=date.toDateString().substring(4,10);if(m.substring(4,5)=="0"){m=" "+m.substring(0,4)+m.substring(5)}}}w=O*200;A(b,v,g,y,m,E,w,O)}},event:"painted"}]}]},initialize:function(){var e=this,t=e.items.items[0],n=Ext.getBody().getSize().width;t.yScrollPosition=0;e.callParent();t.element.on({tap:function(r){console.log(r);e.onTap(r,t,n)},taphold:function(r){r.stopPropagation();var i=new Ext.MessageBox({hideOnMaskTap:true});i.setMessage("Delete event?");i.setButtons([{xtype:"button",text:"Delete",itemId:"yes",ui:"action",handler:function(s){e.deleteEvent(r,t,n);i.hide()}}]);i.show()}});e.getScrollable().getScroller().on({scrollend:function(n){e.onScroll(n,t)},scope:e.getScrollable().getScroller()});setTimeout(function(){e.reloadData.call(e)},9e5)},onTap:function(e,t,n){var r=e.pageY+t.yScrollPosition;if(r<=80&&e.pageX>=n-80){var i=new Docket.view.formPanel;Ext.Viewport.add(i)}else if(e.pageX>n/12*1.6&&e.pageX<n/12*11.4){var s=(r-90)%200,o=-1;if(e.touch.timeStamp+900<e.timeStamp&&s>15&&s<140){o=parseInt((r-90)/200);if(o<t.events.length&&typeof t.events[o].description!=="undefined"){var u=t.events[o].description.split(/[\n\s]/g);var a=-1;for(var f=0;f<u.length;f++){a=u[f].search("://");if(a>-1){window.location.href=u[f]}}}}}},onScroll:function(e,t){t.yScrollPosition=e.position.y},editEvent:function(e,t,n){function o(e){var t=Docket.app.authToken,n="464168127252.apps.googleusercontent.com",i="AIzaSyAy7JAsd5JlzjTR_fkkarby9N1c3YkhY6o",s="https://www.googleapis.com/auth/calendar",o=r.calendarId,u=new Docket.view.editPanel;try{gapi.client.setApiKey(i);gapi.auth.setToken(t)}catch(a){window.location.reload()}gapi.auth.authorize({client_id:n,scope:s,immediate:true},function(t){if(t){gapi.client.load("calendar","v3",function(){console.log("EDITED");var t=gapi.client.calendar.events.delete({calendarId:o,eventId:eventId});t.execute(function(t){u.originalEvent=e;Ext.Viewport.add(u)})})}})}var r=this,i=r.items.items[0],s=e.pageY+t.yScrollPosition;if(s>80&&e.pageX>n/12*1.6&&e.pageX<n/12*11.4){var u=(s-90)%200,a=-1;if(u>15&&u<140){a=parseInt((s-90)/200);if(a>=0){o(i.events[a])}}}},deleteEvent:function(e,t,n){function o(e){var t=Docket.app.authToken,n="464168127252.apps.googleusercontent.com",i="AIzaSyAy7JAsd5JlzjTR_fkkarby9N1c3YkhY6o",s="https://www.googleapis.com/auth/calendar",o=r.calendarId;try{gapi.client.setApiKey(i);gapi.auth.setToken(t)}catch(u){window.location.reload()}gapi.auth.authorize({client_id:n,scope:s,immediate:true},function(t){if(t){gapi.client.load("calendar","v3",function(){var t=gapi.client.calendar.events.delete({calendarId:o,eventId:e});t.execute(function(e){setTimeout(function(){r.reloadRequest.call(r)},1e3)})})}})}var r=this,i=r.items.items[0],s=e.pageY+t.yScrollPosition;if(s>80&&e.pageX>n/12*1.6&&e.pageX<n/12*11.4){var u=(s-90)%200,a=-1;if(u>15&&u<140){a=parseInt((s-90)/200);if(a>=0){o(i.events[a].id)}}}},reloadRequest:function(){var e=this,t=new Date,n=new Date,r=e.calendarId,i=e.items.items[0],s=Docket.app.authToken,o="464168127252.apps.googleusercontent.com",u="AIzaSyAy7JAsd5JlzjTR_fkkarby9N1c3YkhY6o",a="https://www.googleapis.com/auth/calendar";n.setFullYear(t.getFullYear());n=n.toISOString();t=t.toISOString();gapi.client.setApiKey(u);gapi.auth.setToken(s);gapi.auth.authorize({client_id:o,scope:a,immediate:true},function(n){gapi.client.load("calendar","v3",function(){var n=gapi.client.calendar.events.list({calendarId:r,singleEvents:true,orderBy:"startTime",timeMin:t});n.execute(function(t){if(Ext.isDefined(t)&&Ext.isDefined(t.items)&&Ext.isDefined(t.items[0])){i.events=t.items;i.element.redraw()}else{setTimeout(function(){e.reloadRequest.call(e)},2500)}})})})},reloadData:function(){var e=this;setTimeout(function(){e.reloadRequest.call(e)},1e3);setTimeout(function(){e.reloadData.call(e)},9e5)}})