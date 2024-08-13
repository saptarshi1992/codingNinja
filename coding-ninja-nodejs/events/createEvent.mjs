//const UserEvent = require('events');
import * as event from 'events';


export class UserEvents extends event.EventEmitter {
    //event
    createPost(content) {
        console.log("post created");
        this.emit('PostCreated');
    }
}
