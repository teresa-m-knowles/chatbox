$(document).ready(function() {
	App.chat = App.cable.subscriptions.create("ChatChannel", {

		// Called when the subscription is
		// ready for use on the server.
		connected: function() {
			console.log("I got here!");
		},

		// Called when the subscription has
		// been terminated by the server.
		disconnected: function() {
			console.log("Disconnected");
		},

		// Called when there's incoming data
		//on the websocket for this channel.
		received: function(data) {
			var messages = $('#chatbox');
			messages.append(data['message']);
			messages.scrollTop(messages[0].scrollHeight);
		},
	});
});
