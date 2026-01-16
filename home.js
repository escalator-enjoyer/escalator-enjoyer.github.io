const marquotes = [
    "YO what is up you guys! On TONIGHT'S video, WE... ordered the AMONG US potion from the DARK WEB. And SUPPOSEDLY, when you drink this AMONG US potion at (!) THREE A.M... you turn into the IMPOSTER from AMONG US. And we're gonna find out if it actually is REAL, or if it's not. And it BETTER be REAL you guys. 'Cause I LITERALLY spent FIVE-HUNDRED dollars... and SIXTY-NINE cents. Before the video starts guys, I NEED you guys to like the video, you guys. I need EVERYONE to try to like the video with your KNUCKLES. Only TWO percent of the WHOLE WIDE WORLD can ACTUALLY like the video, with your KNUCKLES. Try it RIGHT now, we'll count to TRHEE seconds okay? Three, two, one... OOOOOOOOOOOOOHHH... Sussy BAKA! Ay, you little SUSSY BAKAS 'boutta make me ACT up...",
    "meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow",

];
const marquote = marquotes[Math.floor(Math.random() * marquotes.length)];
const marquees = document.getElementsByClassName("marquee")[0].children;
marquees[0].textContent = marquote;
marquees[1].textContent = marquote;
