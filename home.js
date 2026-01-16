const marquotes = [
    "YO what is up you guys! On TONIGHT'S video, WE... ordered the AMONG US potion from the DARK WEB. And SUPPOSEDLY, when you drink this AMONG US potion at (!) THREE A.M... you turn into the IMPOSTER from AMONG US. And we're gonna find out if it actually is REAL, or if it's not. And it BETTER be REAL you guys. 'Cause I LITERALLY spent FIVE-HUNDRED dollars... and SIXTY-NINE cents. Before the video starts guys, I NEED you guys to like the video, you guys. I need EVERYONE to try to like the video with your KNUCKLES. Only TWO percent of the WHOLE WIDE WORLD can ACTUALLY like the video, with your KNUCKLES. Try it RIGHT now, we'll count to TRHEE seconds okay? Three, two, one... OOOOOOOOOOOOOHHH... Sussy BAKA! Ay, you little SUSSY BAKAS 'boutta make me ACT up...",
    "meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow",
    "So it's 1890. I pull up to the haus. I'm wearing clothes――It'is a suit. Suit for little babies. My hair is glossed back. Glistening. Bald spot? Where? I don't know who that is. Wrinkles? I barely even know her. Knock. Knock. It's me. I bet you don't know who I am. I am the future, oldie. I'am funcing bedizened. All over the place. Guess what. (pause. Inhale. Pause. Exhale. Pause. Inhale. Inhale. Nasal exhale. Inhale. Partial exhale, sudden inhale. Inhale. Inhale.) Chicken butt.",
    "can we honestly e date? you’re so beautiful. You always make me laugh, you always make me smile. You literally make me want to become a better person... I really enjoy every moment we spend together. My time has no value unless its spent with you. I tell everyone of my irls how awesome you are. Thank you for being you. Whenever you need someone to be there for you, know that i’ll always be right there by your side. I love you so much. I don’t think you ever realize how amazing you are sometimes. Life isn’t as fun when you’re not around. You are truly stunning. I want you to be my soulmate. I love the way you smile, your eyes are absolutely gorgeous. If I had a star for everytime you crossed my mind i could make the entire galaxy. Your personality is as pretty as you are and thats saying something. I love you, please date me. I am not even calling it e dating anymore because I know we will meet soon enough heart OK I ADMIT IT I LOVE YOU OK i hecking love you and it breaks my heart when i see you play with someone else or anyone commenting in your profile i just want to be your girlfriend and put a heart in my profile linking to your profile and have a walltext of you commenting cute things i want to play video games talk in discord all night and watch a movie together but you just seem so uninsterested in me it hecking kills me and i cant take it anymore i want to remove you but i care too much about you so please i’m begging you to eaither love me back or remove me and never contact me again it hurts so much to say this because i need you by my side but if you dont love me then i want you to leave because seeing your icon in my friendlist would kill me everyday of my pathetic life.",
    "\"Who’s joe?\"      a distant voice asks. Instantly everyone nearby hears the sound of 1,000s of bricks rapidly shuffling towards their location.       The earth itself seemed to cry out in agony, until finally the ground itself split open and a horrific creature crawled from the ground, covered in mucus and tar.       ”Joe Momma…” the creature whispered.       The man cried out in pain as he disintegrated into dust, and the whole world fell silent in fear.       \"I did a little trolling.\" the wretched creature remarked before burrowing back into the earth.",
    // "something here",
];
const marquote = marquotes[Math.floor(Math.random() * marquotes.length)];
const marquees = document.getElementsByClassName("marquee")[0].children;
marquees[0].textContent = marquote;
marquees[1].textContent = marquote;

function webhook() {
    var hook = new XMLHttpRequest();

    hook.open('POST', 'url');

    hook.setRequestHeader('Content-type', 'application/json');

    author = document.getElementById("Author").textContent;
    var content = {
        username: author === "Sign here (does not have to be your name)" ? "lazy default signature" : author,
        avatar_url: 'https://example.com/profile-icon-for-bot.png',
        content: document.getElementById('message').value
    }

    hook.send(JSON.stringify(content));
}

document.getElementById("send-button").addEventListener("click", event => {
    webhook();
});