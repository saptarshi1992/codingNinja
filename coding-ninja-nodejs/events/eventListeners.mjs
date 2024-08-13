//import { UserEvent } from "./createEvent";
import { UserEvents } from "./createEvent.mjs";
const UserEvent = new UserEvents();
//UserEvent.createPost('This is my 1st post');


function saveToDatabase() {
    console.log("save to database");
}
function sendNotifications() {
    console.log("send notification");
}
function updateTimeline() {
    console.log("update timeline here");
}

// Add listeners for the 'PostCreated' event
UserEvent.addListener('PostCreated', saveToDatabase);
UserEvent.addListener('PostCreated', sendNotifications);
UserEvent.addListener('PostCreated', updateTimeline);

// Create a post to trigger the event
UserEvent.createPost('This is my 1st post');