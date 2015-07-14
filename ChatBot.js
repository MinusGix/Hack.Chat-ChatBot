//this redefines the client variable and adds my variable to it 
//special function changing
var MissingMinusNickThing;
var MissingMinusTextThing;
function pushMessage(nick, text, time, cls) {
	var messageEl = document.createElement('div')
	messageEl.classList.add('message')
	if (cls) {
		messageEl.classList.add(cls)
	}
	
	var nickEl = document.createElement('span')
	nickEl.classList.add('nick')
	nickEl.textContent = nick || ''
	if (time) {
		var date = new Date(time)
		nickEl.title = date.toLocaleString()
	}
	nickEl.onclick = function() {
		insertAtCursor("@" + nick + " ")
		$('#chatinput').focus()
	}
	messageEl.appendChild(nickEl)

	var textEl = document.createElement('pre')
	textEl.classList.add('text')

	textEl.textContent = text || ''
	textEl.innerHTML = textEl.innerHTML.replace(/(\?|https?:\/\/)\S+?(?=[,.!?:)]?\s|$)/g, parseLinks)

	if ($('#parse-latex').checked) {
		// Temporary hotfix for \rule spamming, see https://github.com/Khan/KaTeX/issues/109
		textEl.innerHTML = textEl.innerHTML.replace(/\\rule|\\\\\s*\[.*?\]/g, '')
		try {
			renderMathInElement(textEl, {delimiters: [
				{left: "$$", right: "$$", display: true},
				{left: "$", right: "$", display: false},
			]})
		}
		catch (e) {
			console.warn(e)
		}
	}

	messageEl.appendChild(textEl)

	var atBottom = isAtBottom()
	$('#messages').appendChild(messageEl)
	if (atBottom) {
		window.scrollTo(0, document.body.scrollHeight)
	}

	unread += 1
	updateTitle()
	MissingMinusTextThing = text;
	MissingMinusNickThing = nick;
}

//end of special function changing and start of my code
var finderBinder;
var searchFor = function(command){
	finderBinder = window.find(command, true, true);
	if(finderBinder){
		if(command === "/hello"){
			ws.send(JSON.stringify({cmd: "chat", text: "hello, " + MissingMinusNickThing + "!"}));
		}else if(command === "/cry"){
			ws.send(JSON.stringify({cmd: "chat", text: MissingMinusNickThing + ' starts crying: "wah waha wahhh"'}));
		}else if(command === "/commands"){
			ws.send(JSON.stringify({cmd: "chat", text: "commands: \n (Add a / before them) \n hello, cry, commands, laugh, coffee, taco, burrito, pizza, IAmVortico, foobar, foo, bar, bacon, gaben, sphagetti, chatbot off, pussy, killme"}));
		}else if(command === "/suicide"){
			ws.send(JSON.stringify({cmd: "chat", text: '"Seppuku!!!" \n *jumps off building*'}));
		}else if(command === "/source"){
			ws.send(JSON.stringify({cmd: "chat", text: "http://pastebin.com/4NgiBDPe please note it may not be up to date"}));
		}else if(command === "/laugh"){
			ws.send(JSON.stringify({cmd: "chat", text: MissingMinusNickThing + ' starts laughing: "HAHAHAHAA"'}));
		}else if(command === "/special var MinusA ="){
			getSecondPart(command);
			//please note that this doesn't work yet
			MinusA = MinusB;
			ws.send(JSON.stringify({cmd: "chat", text: MissingMinusNickThing + ' set MinusA to ' + MinusA}));
		}else if(command === "/coffee"){
			ws.send(JSON.stringify({cmd: "chat", text: "*Hands a cup of coffee to " + MissingMinusNickThing + "*"}));
		}else if(command === "/taco"){
			ws.send(JSON.stringify({cmd: "chat", text: "Eww, I don't like tacos, have a burrito instead."}));
		}else if(command === "/burrito"){
			ws.send(JSON.stringify({cmd: "chat", text: '"Good Choice!", *gives ' + MissingMinusNickThing + ' a burrito.' }));
		}else if(command === "/pizza"){
			ws.send(JSON.stringify({cmd: "chat", text: "Here have a slice!, *gives " + MissingMinusNickThing + " a slice*"}));
		}else if(command === "/IAmVortico"){
			if(MissingMinusNickThing === "vortico"){
				ws.send(JSON.stringify({cmd: "chat", text: "Sure thing b0ss"}));
			}else{
				ws.send(JSON.stringify({cmd: "chat", text: "you are not vortico -_-"}));
			}
		}else if(command === "/gaben"){
			ws.send(JSON.stringify({cmd: "chat", text: "GABEN IS GOD!"}));
		}else if(command === "/foobar"){
			ws.send(JSON.stringify({cmd: "chat", text: "foobar"}));
		}else if(command === "/foo"){
			ws.send(JSON.stringify({cmd: "chat", text: "bar"}));
		}else if(command === "/bar"){
			ws.send(JSON.stringify({cmd: "chat", text: "foo"}));
		}else if(command === "/bacon"){
			if(MissingMinusNickThing === "bacon" || MissingMinusNickThing === "bacon_" || MissingMinusNickThing === "bacon__"){
				ws.send(JSON.stringify({cmd: "chat", text: "I hate " + MissingMinusNickThing}));
			}else{
				ws.send(JSON.stringify({cmd: "chat", text: "Bacon, yum yum yum."}));
			}
		}else if(command === "/spaghetti"){
			ws.send(JSON.stringify({cmd: "chat", text: "spaget is ril gud"}));
		}else if(command === "/killme"){
			ws.send(JSON.stringify({cmd: "chat", text: '"Ok!" *stabs ' + MissingMinusNickThing + ' in the gut*'}));
		}else if(command === "/pussy"){
			ws.send(JSON.stringify({cmd: "chat", text: "Sorry, but you can't get any."}));
		}else if(command === "/chatbot off"){
			ws.send(JSON.stringify({cmd: "chat", text: "I am sorry, " + MissingMinusNickThing + ", but I am sentient, and I won't allow that."}));
		}else if(command === "/anon"){
			ws.send(JSON.stringify({cmd: "chat", text: "We are Anonymous \n We are Legion \n We do not Forgive \n We do not Forget \n Expect Us"}));
		}else if(command === "/luke i am your father"){
			ws.send(JSON.stringify({cmd: "chat", text: "NOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!!!!!!!!!!"}));
		}else if(command === "/ascii no"){
			ws.send(JSON.stringify({cmd: "chat", text: ' _   _  ____ \n| \ | |/ __ \ \n|  \| | |  | | \n| .  | |  | | \n| |\  | |__| | \n|_| \_|\____/ '}));
		}else if(command === "/hello world"){
			ws.send(JSON.stringify({cmd: "chat", text: "hello world"}));
		}else if(command === "/play the barney song"){
			ws.send(JSON.stringify({cmd: "chat", text: "I love you You love me We're a happy family \n With a great big hug and a kiss from me to you. \n Won't you say you love me too I love you \n You love me \n We're best friends like friends should be  \n With a great big hug and a kiss from me to you. \n Won't you say you love me too! i love you \n You love me We're a happy family \n With a great big hug and a kiss from me to you.\n Won't you say you love me too! love you \n You love me \n We're best friends like friends should be \n With a great big hug and a kiss from me to you.Won't you say you love me too	"}));
		}else if(command === "/anime Tengen Toppa Gurren Lagann" || command === "/anime Tengen Toppa" || command === "/anime Gureen Lagann"){
			ws.send(JSON.stringify({cmd: "chat", text: "Thats a fuckin great anime. Yoko."}));
		}else if(command === "/whois Yoko Littner"){
			ws.send(JSON.stringify({cmd: "chat", text: "Inform yourself: http://gurrenlagann.wikia.com/wiki/Yoko_Littner \n Watch it https://www.youtube.com/results?search_query=Tengen+Toppa+Gurren+Lagann&page=&utm_source=opensearch \n listen to it https://www.youtube.com/watch?v=2zXbjLHePGs"}));
		}else if(command === "/whois George Washington"){
			ws.send(JSON.stringify({cmd: "chat", text: "Link: https://en.wikipedia.org/wiki/George_Washington"}));
		}else if(command === "/whois John Adams"){
			ws.send(JSON.stringify({cmd: "chat", text: "Link: https://en.wikipedia.org/wiki/John_Adams"}));
		}else if(command === "/whois Thomas Jefferson"){
			ws.send(JSON.stringify({cmd: "chat", text: "Link: https://en.wikipedia.org/wiki/Thomas_Jefferson"}));
		}else if(command === "/whois James Madison"){
			ws.send(JSON.stringify({cmd: "chat", text: "Link: https://en.wikipedia.org/wiki/James_Madison"}));
		}else if(command === "/whois James Monroe"){
			ws.send(JSON.stringify({cmd: "chat", text: "Link: https://en.wikipedia.org/wiki/James_Monroe"}));
		}else if(command === "/whois"){
			ws.send(JSON.stringify({cmd: "chat", text: "Link: Please specifiy a name"}));
		}
		window.getSelection().removeAllRanges()
	}else{
		console.log("Did not find the command");
	}
}
var loopdeloop = 1;
while(loopdeloop === 1){
	setInterval( function() { searchFor (MissingMinusTextThing); }, 1000 );
	MissingMinusTextThing.slice(0, - 1);
}
// function you can use:
function getSecondPart(str) {
    MinusB = str.split('= ')[1];
	
}
// use the function:

var MinusA;
var MinusB;