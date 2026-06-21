// ── Questions ─────────────────────────────────────────────────────────────────
// Each emotion has an optional emotion-level subtext (shown on Q1 only)
// Each question has its own optional subtext and optional section header label

const questionsData = {
  anxious: {
    subtext: `List at least eight things. Each entry should only be one word or just a few.`,
    questions: [
      {
        text: `What are you presently anxious about?`,
        subtext: `If you're having trouble, search for things that might be anxiety inducing in the following categories: Work, Relationships, Children/Parents, Money, Things I have to do`,
        section: null
      },
      {
        text: `What steps do you need to take?`,
        subtext: null,
        section: `Practical Unpacking`
      },
      {
        text: `What do you need others to do?`,
        subtext: null,
        section: null
      },
      {
        text: `What needs to happen when?`,
        subtext: null,
        section: null
      },
      {
        text: `Describe the feeling in more detail. What do you feel it points to?`,
        subtext: null,
        section: `Emotional Unpacking`
      }
    ]
  },

  upset: {
    subtext: `As quickly as you can, without bothering how petty, unreasonable, or pretentious it might sound. The more, the better.`,
    questions: [
      {
        text: `If this happened to a friend, how would you advise them? What might you say?`,
        subtext: null,
        section: null
      }
    ]
  },

  excited: {
    subtext: null,
    questions: [
      {
        text: `What are you presently excited about?`,
        subtext: `Rapidly list several things that have caught your attention and excited your interest since the last meditation. A word or brief phrase is sufficient for now. Might include: Moments of envy, Daydreams/ideas about how life might ideally be, How nice someone or something was`,
        section: null
      },
      {
        text: `Describe the excitement as if to a sympathetic, interested friend.`,
        subtext: null,
        section: null
      },
      {
        text: `If you could change your life in certain ways, what would it be in light of this?`,
        subtext: null,
        section: null
      },
      {
        text: `This exciting thing holds a clue to what is missing in your life; what might it be?`,
        subtext: null,
        section: null
      },
      {
        text: `If this thing could talk, what might it tell you?`,
        subtext: null,
        section: null
      },
      {
        text: `If this thing could try to change your life, what might it advise?`,
        subtext: null,
        section: null
      }
    ]
  }
};


// ── Sayings ───────────────────────────────────────────────────────────────────
// Flat list — { text, source }. Source = the name shown in Browse Quotes.
// Use **bold** and *italic* in text; the formatText() function renders them.
// "Bits" is sorted last in the browser regardless of alphabetical order.

const sayingsData = [

  // ALAIN DE BOTTON
  { text: `We need to be sophisticated enough not to reject a truth because it sounds like something we already know`, source: `Alain de Botton` },
  { text: `In the face of a tirade, instead of going on the defensive, the diplomat might suggest some lunch`, source: `Alain de Botton` },
  { text: `When a harshly unfair criticism is launched at them, they might nod in partial agreement and declare that they've often said such things to themselves`, source: `Alain de Botton` },
  { text: `Being properly mature involves a **frank, unfrightened relationship** with one's own darkness, complexity, and ambition.`, source: `Alain de Botton` },
  { text: `We should dare to spend less time banning our partners from having lunch with strangers or travelling alone, and more time ensuring they feel understood for their flaws and confusions — and appreciated for their virtues.`, source: `Alain de Botton` },
  { text: `The road to greater confidence begins with a ritual of telling oneself solemnly every morning, before embarking on the challenges of the day, that one is a muttonhead, a cretin, a dumb-bell, and an imbecile. One or two more acts of folly should, thereafter, not feel so catastrophic after all.`, source: `Alain de Botton` },
  { text: `The need for perfection will only lead to loneliness. You cannot have perfection and company.`, source: `Alain de Botton` },

  // ALEX HORMOZI
  { text: `First 4 action items: (1) Get an LLC; (2) Take that LLC to the bank; (3) Connect that bank account to a payment processor; (4) Go ask a stranger if you can do something for money.`, source: `Alex Hormozi` },

  // ALYSSA EDWARDS
  { text: `Get a grip, get a life, and get over it.`, source: `Alyssa Edwards` },

  // ANN LANDERS
  { text: `Maturity: Be able to stick with a job until it is finished. Be able to bear an injustice without having to get even. Be able to carry money without spending it. Do your duty without being supervised.`, source: `Ann Landers` },

  // BRADY WILSON
  { text: `Meet others where they're at. Spontaneous, but see what's important for them. Be it freedom for you, social belonging for another, being significant for this other person, etc.`, source: `Brady Wilson` },
  { text: `When listening to someone, see things from what's important to them. When helping with a problem, ask what is important to them, or what they want.`, source: `Brady Wilson` },

  // CARA DELEVINGNE
  { text: `If you're bored, you're boring.`, source: `Cara Delevingne` },

  // CAITLYN JENNER
  { text: `I was obsessed with getting the most out of myself.`, source: `Caitlyn Jenner` },
  { text: `That was my best event, because I wasn't afraid of pain.`, source: `Caitlyn Jenner` },

  // CARL JUNG
  { text: `Union of your intelligence with the emotions and motivations so that they point to the same direction. Then union of that with the body, so you act out what you think and feel. Part of being honest is you act out what you believe.`, source: `Carl Jung` },
  { text: `Anything, no matter how small, if it is done everyday, is significant.`, source: `Carl Jung` },
  { text: `The ruler of your marital life should be your vow to tell each other the truth`, source: `Carl Jung` },
  { text: `In Sterquiliniis Invenitur`, source: `Carl Jung` },
  { text: `Schedule your exams, your assignments, and when to get them done. Stay on top of things.`, source: `Carl Jung` },
  { text: `Treat it as a full time job, and you can have fun at night.`, source: `Carl Jung` },

  // CONFUCIUS
  { text: `Before you embark on a journey of revenge, dig two graves.`, source: `Confucius` },

  // CYNTHIA ERIVO
  { text: `Whenever you do something, I want you to take it one step further. That thing that might hold you back from pushing a little bit further because you might be a bit afraid, and you might be wondering what people think — go one more step further, because that's where you wanna be.`, source: `Cynthia Erivo` },
  { text: `If you're not gonna fight for yourself, who else is gonna fight for you?`, source: `Cynthia Erivo` },

  // DAISY BATES
  { text: `No man or woman who tries to pursue an ideal in his or her own way is without enemies.`, source: `Daisy Bates` },

  // DAVID GOGGINS
  { text: `You've been average for so long you no longer know what it means to work hard.`, source: `David Goggins` },

  // DREW MANNING
  { text: `No one cares how much you know, unless they know how much you care first.`, source: `Drew Manning` },

  // ELIEZER YUDKOWSKY
  { text: `If you never fail, you're only trying things that are too easy and playing below your level. If you can't remember any time in the last six months when you failed, you aren't trying to do difficult enough things.`, source: `Eliezer Yudkowsky` },

  // ELIZABETH BARRETT BROWNING
  { text: `Measure not the work until the day's out and the labor done.`, source: `Elizabeth Barrett Browning` },

  // EPICURUS
  { text: `Pain is neither unbearable nor unending, as long as you keep in mind its limits and don't magnify them in your imagination.`, source: `Epicurus` },

  // ESO
  { text: `Your greatest fears contain your greatest growth.`, source: `ESO` },

  // ESTHER PEREL
  { text: `Behind every criticism is a wish`, source: `Esther Perel` },

  // FRANCISCO GOYA
  { text: `Fantasy, abandoned by reason, produces impossible monsters.`, source: `Francisco Goya` },

  // FRIEDRICH NIETZSCHE
  { text: `A man's character is defined by how much truth he can tolerate.`, source: `Friedrich Nietzsche` },

  // FYODOR DOSTOEVSKY
  { text: `Nothing easier than denouncing the evildoer, nothing more difficult than understanding them.`, source: `Fyodor Dostoevsky` },

  // GRIFFIN MAXWELL BROOKS
  { text: `If somebody has nothing nice to say about you, they're not looking out for you, they're looking out for their own insecurities.`, source: `Griffin Maxwell Brooks` },

  // HELEN KELLER
  { text: `Although the world is full of suffering, it is also full of overcoming it.`, source: `Helen Keller` },

  // INAYAH MCMILLAN
  { text: `People who are successful make decisions quickly and they stick to those decisions.`, source: `Inayah McMillan` },

  // JAMES CLEAR
  { text: `A simple rule for life and work: Don't rush, but don't wait. Thoughtful action.`, source: `James Clear` },
  { text: `Your life is purchased by where you spend your attention.`, source: `James Clear` },
  { text: `When listening to others, consciously quiet your thoughts and begin listening to your senses. Try to understand what matters to them, not what matters to you.`, source: `James Clear` },
  { text: `The best properties are rarely for sale. The best employees are rarely job hunting. The best clients are rarely shopping. The best option is usually off the market. Most people think this means you can't have it. What it really means is you have to go find it and sell yourself.`, source: `James Clear` },
  { text: `Patience is a competitive advantage. In a surprising number of fields, you can find success if you are simply willing to do the unreasonable thing longer than most people.`, source: `James Clear` },
  { text: `It is the way we approach the goal that matters. Everything is aiming.`, source: `James Clear` },

  // JOCKO WILLINK
  { text: `What's something remarkably stupid that you're constantly doing that's absolutely screwing up your life?`, source: `Jocko Willink` },
  { text: `Before I check myself, I'm checking you. How can I make your situation better?`, source: `Jocko Willink` },
  { text: `Losing your temper is a sign of weakness. Never yell.`, source: `Jocko Willink` },
  { text: `Everything you do is habit forming. Everything.`, source: `Jocko Willink` },
  { text: `Other than death, all failure is psychological.`, source: `Jocko Willink` },
  { text: `When you don't feel like doing something, that's **exactly** the best time to do it.`, source: `Jocko Willink` },
  { text: `If you want a downfall, just let your ego get out of control. So go forward with an open mind, a humble mind. Humble perspective on everything. Always think that you could be wrong.`, source: `Jocko Willink` },
  { text: `When frustrated, angry, or defensive, 99% of the time, it's EGO. Say "hold on, let's listen to what they have to say, and let's win. Let's win by listening and taking ownership of a blame." Stay balanced.`, source: `Jocko Willink` },
  { text: `De-escalate arguments. Just de-escalate. All the time.`, source: `Jocko Willink` },
  { text: `Take ownership of everything that happens in your life.`, source: `Jocko Willink` },
  { text: `Work because you respect the enemy. You don't fear them.`, source: `Jocko Willink` },
  { text: `When other people don't understand you, take a step back and understand their perspective.`, source: `Jocko Willink` },
  { text: `During critical moments with a lot of risk, that's when you need to detach emotionally. Stop.`, source: `Jocko Willink` },
  { text: `If you're gonna carry out an action that's weak, verbalize it first. Share it to a room full of people before you do.`, source: `Jocko Willink` },
  { text: `The training should be much harder than the war.`, source: `Jocko Willink` },
  { text: `Little disciplines. You can stray from the path 2-3 days, recognize and come back.`, source: `Jocko Willink` },
  { text: `Detaching from yourself is mental toughness.`, source: `Jocko Willink` },
  { text: `Flank, Maneuver. Indirect approach. Find a new way. He who flanks, wins.`, source: `Jocko Willink` },
  { text: `Make it a resolution of discipline to be a better person. Get better, faster, stronger, smarter, healthier, more productive, less agitated, to eat cleaner, live more, to go and DO, to work and follow through. Maintain your will.`, source: `Jocko Willink` },
  { text: `Some days I win, some days I don't. But each day, I get up. And I fight with everything I've got.`, source: `Jocko Willink` },
  { text: `Knowledge is fine, but common sense is important.`, source: `Jocko Willink` },
  { text: `People may not know what the truth is, but they can tell when you're lying.`, source: `Jocko Willink` },
  { text: `Most small scale combats are won or lost months before the battle, during training.`, source: `Jocko Willink` },
  { text: `When in chaos, a leader should always step back and assess.`, source: `Jocko Willink` },
  { text: `Do not try to control other people. You can only control your mind. Focus on that skill.`, source: `Jocko Willink` },
  { text: `People are crazy. Expect people to let you down, to do crazy things.`, source: `Jocko Willink` },
  { text: `In dealing with a bossy leader, massage their ego a little bit and nourish a relationship with them, making them feel more secure.`, source: `Jocko Willink` },
  { text: `When correcting an action, don't go too much on the other side. Just balance. Dichotomy of leadership again.`, source: `Jocko Willink` },
  { text: `When something bad happens, something good's gonna come out of it. Just say "good".`, source: `Jocko Willink` },
  { text: `**Lead** your life. Don't be reactive, be aggressive.`, source: `Jocko Willink` },
  { text: `The best way to win is when they don't even know that you won. Even better than that, is that they don't even know this was a game.`, source: `Jocko Willink` },
  { text: `Antagonistic relationships will **never** help you. At least neutral relationships will help.`, source: `Jocko Willink` },
  { text: `Never burn bridges. Very rarely will you need to do this.`, source: `Jocko Willink` },
  { text: `Treat everyone with respect and speak humbly.`, source: `Jocko Willink` },
  { text: `Never talk to people as if you know something that they don't.`, source: `Jocko Willink` },
  { text: `Don't pull rank or experience in arguments. Arguments should stand on their own.`, source: `Jocko Willink` },
  { text: `Search and destroy. Search for the best thing you could do, and destroy it.`, source: `Jocko Willink` },
  { text: `Do what it takes to win decisively and without question.`, source: `Jocko Willink` },
  { text: `Don't do anything your enemy wants you to do.`, source: `Jocko Willink` },
  { text: `Draw fire. Bring that pain to me. I can handle it when others cannot.`, source: `Jocko Willink` },
  { text: `Being enticed by small comforts is how you lose. Being enticed by the easy path is how you lose. Be vigilant.`, source: `Jocko Willink` },
  { text: `Do not hesitate.`, source: `Jocko Willink` },
  { text: `Train hard to be early as if being late will be the end of the world for you.`, source: `Jocko Willink` },
  { text: `The first and most important quality of a soldier is constancy in fatigue and hardship. Courage is only second.`, source: `Jocko Willink` },
  { text: `Poverty, privation, and want are the school of a good soldier.`, source: `Jocko Willink` },
  { text: `An extraordinary situation requires an extraordinary resolution.`, source: `Jocko Willink` },
  { text: `Don't be greedy. If it's offered to you without a price, too easy, too good to be true, don't take it.`, source: `Jocko Willink` },
  { text: `Marc Lee never complained. Never too hot. Never too cold. Never too tired. Sacrificed his life. Always the leading in patrol, highest risk of being attacked. With a smile on his face.`, source: `Jocko Willink` },
  { text: `Take the high ground or the high ground will take you.`, source: `Jocko Willink` },
  { text: `You can't let your fear of failure limit your boldness and your experimentation.`, source: `Jocko Willink` },
  { text: `People you're helping shouldn't know you're helping them. Don't make yourself sound threatening. Downplay what they don't know and subtly help them.`, source: `Jocko Willink` },
  { text: `Adaptability dominates friction. Identify deficiencies, discard outdated structures, and make modifications.`, source: `Jocko Willink` },
  { text: `Fighting power is the sum total of mental and physical qualities that make armies fight. Everything you do in life is either increasing or decreasing your fighting power.`, source: `Jocko Willink` },
  { text: `Seek responsibility. Look for work.`, source: `Jocko Willink` },
  { text: `Don't think about it. Get after it.`, source: `Jocko Willink` },
  { text: `Self-respect is derived directly from self-discipline. It is the root of all good characteristics.`, source: `Jocko Willink` },
  { text: `Knowing what to do is 5% of the task, 95% is making sure it's implemented.`, source: `Jocko Willink` },
  { text: `There is only one kind of discipline: perfect discipline. Discipline must be a habit so ingrained that it is stronger than the excitement of battle or the fear of death. Stay strong. Hold your discipline in line.`, source: `Jocko Willink` },
  { text: `One of the primary purposes of discipline is to produce alertness.`, source: `Jocko Willink` },
  { text: `A good job done viciously right now is better than a perfect job next week.`, source: `Jocko Willink` },
  { text: `Those things that you can't control, see what you can do to take advantage of it. Embrace it. Use it.`, source: `Jocko Willink` },
  { text: `To do what no one else can do, in the worst conditions. We crave the dirt, and sweat, and fire, and blood. Let there be no doubt. It is in our soul, it is in our nature. Sure, we can do any job well. But it is in the belly of the beast where we thrive.`, source: `Jocko Willink` },
  { text: `We must train brutally and without mercy, so we can win the same way. Brutally, and without mercy.`, source: `Jocko Willink` },
  { text: `It's not what you preach, it's what you tolerate. Raise the standard. Keep it high. Raise the standard for **yourself**.`, source: `Jocko Willink` },
  { text: `Mobilize your will.`, source: `Jocko Willink` },
  { text: `Train the mind to use common sense. Train the mind for the ability to act boldly and decisively. Free your mind.`, source: `Jocko Willink` },
  { text: `Display a sense of calm and self-worth. You will achieve more through this than through screaming obscenities.`, source: `Jocko Willink` },
  { text: `When people say "don't sugarcoat it", they don't mean it. They need it sugarcoated, in order to accept it.`, source: `Jocko Willink` },
  { text: `You can't let emotion sneak up on you. You have to detach.`, source: `Jocko Willink` },
  { text: `Detached — could be looking at yourself through binoculars from far away.`, source: `Jocko Willink` },
  { text: `When facing anything particularly challenging or miserable, just smile and say "good times".`, source: `Jocko Willink` },
  { text: `Take the hard tasks of the team that no one wants. If a member/subordinate complains about a task, do it for them. Your actual goal is to set them up so they can take your job. It becomes lazy delegation when you assign tasks because you don't want to do them.`, source: `Jocko Willink` },
  { text: `Try and detach yourself **before** the gravity of the emotion and the chaos builds up.`, source: `Jocko Willink` },
  { text: `When someone evaluates you and criticizes, listen. Not just with your ears, but also with your mind. With an open mind.`, source: `Jocko Willink` },
  { text: `Discipline is your best friend. It will take care of you like nothing else can. It will put you on the path to strength, to health, intelligence and **happiness**. Most importantly, it will put you on the path to freedom.`, source: `Jocko Willink` },
  { text: `Those men have fought on this soil from morning till night, forever. And they only sheath their swords when there was no one else to fight.`, source: `Jocko Willink` },
  { text: `You know, when I was a soldier, I knew I could survive anything. And I knew I could take care of myself. And it was actually kinda fun.`, source: `Jocko Willink` },
  { text: `Don't aim your passion and aggression at people, aim it at the mission.`, source: `Jocko Willink` },
  { text: `Train as hard as possible.`, source: `Jocko Willink` },
  { text: `Ask yourself everyday: Is this what I wanna be? This? Is this all I've got? Is this everything I can give? Is this going to be my life? Do I accept that? You gotta ask yourself those hard questions. And you've gotta answer them. You gotta answer them truthfully.`, source: `Jocko Willink` },
  { text: `Wake up and get out of bed. Shake off that dreadfulness and dreariness. Get up and go out into the world, that's what you need to do.`, source: `Jocko Willink` },
  { text: `You gotta stay physically in shape so your mind stays sharp.`, source: `Jocko Willink` },
  { text: `To have a good day, you wake up and do something you don't want to do. That's how.`, source: `Jocko Willink` },
  { text: `If you give it everything you've got, more often than not, you won't go down at all.`, source: `Jocko Willink` },
  { text: `Give every day everything you've got.`, source: `Jocko Willink` },

  // JOHN LEWIS
  { text: `Never let anyone, any person, or any force, dampen, dim, or diminish your light.`, source: `John Lewis` },

  // JORDAN B. PETERSON
  { text: `In being prescriptive and specific, the problem becomes manageable.`, source: `Jordan B. Peterson` },
  { text: `In relationships, there has to be a standard for each other. You want: someone you can build a future with, someone you can negotiate with, they have to know what they want or figure it out, they have to tell you what they want, they have to be satisfied when they get what they want. Continually update them.`, source: `Jordan B. Peterson` },
  { text: `In relationships, both of you are going to be extremely busy and the time you're going to find for spontaneous interaction decreases to zero. Therefore, find time for each other.`, source: `Jordan B. Peterson` },
  { text: `In relationships, more effort is necessary.`, source: `Jordan B. Peterson` },
  { text: `Spend at least 90 minutes a week talking with your partner. Tell each other about your life, stay in touch, discuss what needs to be done, lay out mutually acceptable visions of how the next weeks/months are going to go`, source: `Jordan B. Peterson` },
  { text: `You don't want bliss from your partner. You want periods of peace punctuated by a good fight/discussion/argument. Because this means you respect them, you have something to offer each other, and you're growing.`, source: `Jordan B. Peterson` },
  { text: `Take the potential in front of you, turn it into the present by using truth, courage, and careful articulation as a guide.`, source: `Jordan B. Peterson` },
  { text: `You need someone who will stand up. Doesn't need to be good at arguing, but someone who doesn't worship you at your current form.`, source: `Jordan B. Peterson` },
  { text: `Consider that someone you were foolish enough to commit to/marry might actually know something you don't know about something important.`, source: `Jordan B. Peterson` },
  { text: `When you have someone to contend with, then it's an adventure. Then, you have someone that you love, and that you respect, which isn't a bad combination for the longevity of relationships.`, source: `Jordan B. Peterson` },
  { text: `The truth can burn, because you cling to what you shouldn't be. Partly out of pride, partly out of ignorance, partly out of laziness.`, source: `Jordan B. Peterson` },
  { text: `If you commit to something, you have to sacrifice the most valuable thing to you now.`, source: `Jordan B. Peterson` },
  { text: `Let's admit for a second that it wouldn't be the end of the world if I wasn't being roasted over slow fire all the time for my inequities. I'll give myself a break.`, source: `Jordan B. Peterson` },
  { text: `If you're doing a task, see if you can do it 5-10x faster.`, source: `Jordan B. Peterson` },
  { text: `The most valuable thing you possess, by any stretch of the imagination, is your reputation.`, source: `Jordan B. Peterson` },
  { text: `Try not doing the things you know you shouldn't do and try not saying things you know to be false and just watch what happens.`, source: `Jordan B. Peterson` },
  { text: `If you love something/someone, you want the best in it to flourish.`, source: `Jordan B. Peterson` },
  { text: `Sometimes, the reason you're suffering is because you just won't let go of the thing that's biting you. So find what's valuable to you, and let it go. If people are impeding your development, you sacrifice your relationship with them.`, source: `Jordan B. Peterson` },
  { text: `When negotiating in a relationship, you want to negotiate the minimal necessary change that's gonna satisfy you. Let them do it for a few times, grudgingly or in a bad temper or whatever. Reward them for it.`, source: `Jordan B. Peterson` },
  { text: `Life is suffering. What do you do about that? You voluntarily accept it, and try to overcome the suffering. Do it for you, but do it in a way that makes it better for other people.`, source: `Jordan B. Peterson` },
  { text: `There are some games you don't get to play unless you're all in.`, source: `Jordan B. Peterson` },
  { text: `You're way more powerful than you think. You're blind to your weaknesses but you're also blind to your strengths.`, source: `Jordan B. Peterson` },
  { text: `It could be better for everyone if you get your act together. If you stop wasting time. If you stop lying. If you oriented yourself to the best possible good that you could conceive of, and you committed to that. How much good could you do? You try to find out. There's nothing in it but good.`, source: `Jordan B. Peterson` },
  { text: `Reduce the damn responsibility until it's tolerable. You don't have to fix everything at once. You could just start with fixing things that you could fix. You could even start just by fixing the things you wanna fix, without self-sacrifice.`, source: `Jordan B. Peterson` },
  { text: `Aim for the highest good, tool yourself into something that can attain it, and go out there and manifest it in the world. Everything that comes your way will be a blessing.`, source: `Jordan B. Peterson` },
  { text: `Hammer Price's Law into your heart: Square root of the number of people in a domain do 50% of the work.`, source: `Jordan B. Peterson` },
  { text: `Whatever you're worried about happening terribly in the future, it will be something else that you're not worried about that will actually cause the problem.`, source: `Jordan B. Peterson` },
  { text: `You can't win an argument in a relationship. If you win one, you're setting up another.`, source: `Jordan B. Peterson` },
  { text: `Relationships are built on some presuppositions: 1. Things could be better than they are now; and 2. Maybe we could figure out how to do that with collaborative communication.`, source: `Jordan B. Peterson` },
  { text: `The object of the conversation should be each person helping the other person make their point.`, source: `Jordan B. Peterson` },
  { text: `You want to focus on making your life better, maximizing the quality of your own life. And you should figure out how to do that in a way that it benefits your friends and your family and your community.`, source: `Jordan B. Peterson` },
  { text: `You can get a tremendous distance by engaging in incremental improvement.`, source: `Jordan B. Peterson` },
  { text: `When something bad happens to you because of other people, assume ignorance, or error, or stupidity, before you assume malevolence.`, source: `Jordan B. Peterson` },
  { text: `A question boxes you in, in a certain way. If you're going to answer the question, you have to make sure that you've properly processed the structure of the question.`, source: `Jordan B. Peterson` },
  { text: `When you're trying to face the problems you've been trying to avoid, but you're overwhelmed, you wanna break your problems down — think strategically — into units that are small enough so that you can confront them and master them with a high degree of probability.`, source: `Jordan B. Peterson` },
  { text: `Identify the fear. Break it down into small components. Lay out a schedule for confronting the subcomponents. Don't burden yourself with more than you can tolerate. But **you have to be willing to give yourself credit for small achievements**.`, source: `Jordan B. Peterson` },
  { text: `For any structure: minimum necessary rules, even for yourself. And you really have to enforce them, with minimal necessary force.`, source: `Jordan B. Peterson` },
  { text: `See if there is something you can do in your life that would make you more attractive to your partner.`, source: `Jordan B. Peterson` },
  { text: `Negotiate with yourself. You have to ask yourself as if you were asking a bratty nine year old kid what you might be willing to do to put another foot forward. And then you have to do it.`, source: `Jordan B. Peterson` },
  { text: `Tell the truth with humility and care always. Recognize that it could be wrong if you feel like it could be and why.`, source: `Jordan B. Peterson` },
  { text: `Don't be contemptuous of small victories.`, source: `Jordan B. Peterson` },
  { text: `Who you could be is the solution to the evil and suffering.`, source: `Jordan B. Peterson` },
  { text: `Never feel sorry for yourself, unless absolutely necessary. Which is almost never.`, source: `Jordan B. Peterson` },
  { text: `When speaking, you need to know about 3-4 times as much as you're gonna talk about. You need to have multiple stories at hand that you can use to illustrate your point. You need to have a point. Organize your talk around a problem. Speak directly to single people in the audience.`, source: `Jordan B. Peterson` },
  { text: `You need to have a problem to solve when you speak or write, because that just means solving it, grappling with it. It has to be a real problem too. A dragon of a problem. A nail-biter.`, source: `Jordan B. Peterson` },
  { text: `When arguing with your partner, assume that their character can be salvaged. Have hope for them. That's a good way to start the argument.`, source: `Jordan B. Peterson` },
  { text: `When someone's doing or something's happening that's frustrating, you pause, and then you watch. You see an opportunity to be helpful.`, source: `Jordan B. Peterson` },
  { text: `You can't expect anything when you have a family. Children or wife or husband. You're only going to be disappointed. You don't know what it's going to be like, you've never done it before. So don't expect anything. It's nice to have dreams or fantasies about what it's going to be like, but don't take that seriously. Just seeing who they are, in the moment, is fascinating.`, source: `Jordan B. Peterson` },
  { text: `You don't do something for someone else that they can do themselves.`, source: `Jordan B. Peterson` },
  { text: `You always need to have an aim, that's what life should be filled with. And the nobler the aim, the better your life. Without any noble aim, you only have shallow and trivial pleasures. Noble aims: to pay attention, to speak properly, to confront chaos, to make the world better, to tell the truth.`, source: `Jordan B. Peterson` },
  { text: `Once you announce the problem you can come up with a solution.`, source: `Jordan B. Peterson` },
  { text: `If you work 10% longer hours, you make 40% more money.`, source: `Jordan B. Peterson` },
  { text: `If you don't know what you want, or someone else doesn't know what they want, **just guess**. You have to know what you want so you can negotiate.`, source: `Jordan B. Peterson` },
  { text: `When you feel as though something's up, and you don't look into it, you pay a really high price for it in the future.`, source: `Jordan B. Peterson` },
  { text: `If the world's not showing itself to you in a manner that allows you to be productive, is it possible that you aren't aiming at the right thing?`, source: `Jordan B. Peterson` },
  { text: `You feel guilty and ashamed because you're breaking a divine commandment when you don't make the most out of the unbelievably rich possibility, when you're not living up to your potential.`, source: `Jordan B. Peterson` },
  { text: `It makes you angry and vengeful at the fact that you're wasting your life, and you're noticing it. You're making yourself much less than you could be.`, source: `Jordan B. Peterson` },
  { text: `You have to have some amount of silent tolerance in your relationships so that you can let small interactions go. But if there's something that's making you feel something you wouldn't want, that's happened 3 times, then you talk about it. Say your side of it, recognize your flaws. Don't directly blame. Then **hear their explanation of the situation**.`, source: `Jordan B. Peterson` },
  { text: `15% more work creates 40% more results.`, source: `Jordan B. Peterson` },
  { text: `Greatness is the capacity to utter and abide by beautiful truths.`, source: `Jordan B. Peterson` },
  { text: `Stop casual contempt. Don't hate what others are doing just because you're not doing it. Be open.`, source: `Jordan B. Peterson` },
  { text: `We all only learn when we do dangerous things carefully.`, source: `Jordan B. Peterson` },
  { text: `Defend yourself with minimum necessary force. And when disciplining children, do the **absolute minimum** necessary force to discipline them.`, source: `Jordan B. Peterson` },

  // JUNO BIRCH
  { text: `If you don't wet yourself at least once a day laughing your head off, then you're not living life properly.`, source: `Juno Birch` },

  // KARAMO BROWN
  { text: `My dreams don't hurt me. My dreams give me the best moments of my life.`, source: `Karamo Brown` },

  // KENNEDY DAVENPORT
  { text: `Do not be in your head, that's the key.`, source: `Kennedy Davenport` },
  { text: `I do know, as being a host and emcee, that you use everything around you. Everything around you, you use it to your advantage.`, source: `Kennedy Davenport` },

  // LEILA HORMOZI
  { text: `Only listen to advice from people who already have what you want.`, source: `Leila Hormozi` },
  { text: `Money loves speed, wealth loves time. To make money, you need speed. To accumulate wealth/invest, you need time.`, source: `Leila Hormozi` },
  { text: `**POWER** is the time between a thought to an action. The faster you can act on something, the more powerful you are.`, source: `Leila Hormozi` },
  { text: `Money flows where attention goes.`, source: `Leila Hormozi` },
  { text: `There's no shortage of money, only a shortage of attention you put on making it.`, source: `Leila Hormozi` },
  { text: `The best solutions are the simplest. Rich people never pay top dollar to solve something. Frugality drives innovation. It's not about having less, it's about learning to do more with less.`, source: `Leila Hormozi` },
  { text: `Having a safety net helps you make better decisions. Always have an *oh shit* fund.`, source: `Leila Hormozi` },
  { text: `You cannot be rushed by outside forces and FOMO to make the best money decisions. Rich people make decisions out of their values and principles. Always logical and non-emotional state.`, source: `Leila Hormozi` },
  { text: `How am I gonna feel about this purchase in the future and is it the right thing to do?`, source: `Leila Hormozi` },
  { text: `Money is available to anybody willing to learn the rules of the game and **play**.`, source: `Leila Hormozi` },
  { text: `More work and more effort and more time doesn't always equate to more value.`, source: `Leila Hormozi` },
  { text: `Only 20% of somebody's income correlates to their IQ.`, source: `Leila Hormozi` },
  { text: `Be optimistic enough to try as if you're gonna win.`, source: `Leila Hormozi` },
  { text: `People who look at their money everyday make 2-3x as much.`, source: `Leila Hormozi` },
  { text: `Businesses that measure their money on a consistent basis make it 2-3 times as fast.`, source: `Leila Hormozi` },
  { text: `If you spend money for now, make sure to think long-term as well. Benefits for the long-term, and also give you your time back. Back your time, not take from it.`, source: `Leila Hormozi` },
  { text: `Stop playing life on hard mode.`, source: `Leila Hormozi` },
  { text: `Cognitive diffusion: See your thoughts from afar. Includes: temptations, self-deprecating thoughts due to others' comments.`, source: `Leila Hormozi` },
  { text: `See your thoughts as a pond, and see which fish is poisoning the pond.`, source: `Leila Hormozi` },
  { text: `You have to eat the glass so that you can take the pain today. You're trying to take as much of the pain from tomorrow as you can today so you can get ahead.`, source: `Leila Hormozi` },
  { text: `Always re-evaluate the requirements of what you're doing today. Why am I doing this? If it doesn't contribute to your goal, it's not helpful. Delete what doesn't matter. You could probably get away with deleting 99% of what you're doing now.`, source: `Leila Hormozi` },
  { text: `You haven't boiled it down to what the inputs are that generate the most output. If starting out, that is letting people know about your stuff. You have to do it ruthlessly and consistently, beyond the time of being bored.`, source: `Leila Hormozi` },
  { text: `When doing something, ask yourself how long it would take in hours. **Accelerate**. What would it take for this to get done in less hours?`, source: `Leila Hormozi` },
  { text: `The principle that keeps me up at night is this: **getting to the next level requires no less effort than getting to this one**. The market doesn't give you a discount for past performance. It doesn't care what you built last year. The standard doesn't drop just because you've already hit it once.`, source: `Leila Hormozi` },

  // MARCUS AURELIUS
  { text: `Don't ever forget these things: the nature of the world, my nature, how I relate to the world, what proportion of it I make up, that you are part of nature, and no one can prevent you from speaking and acting in harmony with it, always.`, source: `Marcus Aurelius` },
  { text: `Uncomplicate yourself (integrity and truth).`, source: `Marcus Aurelius` },
  { text: `Something happens to you. Good. It was meant for you by nature, woven into the pattern from the beginning.`, source: `Marcus Aurelius` },
  { text: `Life is short. That's all there is to say. Get what you can from the present — thoughtfully, justly.`, source: `Marcus Aurelius` },
  { text: `Unrestrained moderation`, source: `Marcus Aurelius` },
  { text: `Everything and everyone will die. Then what should we work for? Only this: **proper understanding, unselfish action, truthful speech**`, source: `Marcus Aurelius` },
  { text: `A resolve to accept whatever happens as necessary and familiar, flowing like water from that same source and spring`, source: `Marcus Aurelius` },
  { text: `Remember this principle when something threatens to cause you pain: the thing itself was no misfortune at all; to endure it and prevail is great good fortune. How do we prevail? By persevering and continuing to act with justice, generosity, self-control, sanity, prudence, honesty, humility, straightforwardness, and all other qualities that allow a person's nature to fulfill itself.`, source: `Marcus Aurelius` },
  { text: `You don't have to turn this into something. You don't need to give meaning to everything. Some things just are.`, source: `Marcus Aurelius` },
  { text: `I can control my thoughts as necessary; then how can I be troubled? What is outside my mind means nothing to it. Absorb that lesson and your feet stand firm. You can return to life. Look at things as you did before. And life returns.`, source: `Marcus Aurelius` },
  { text: `I am a single limb of a larger body`, source: `Marcus Aurelius` },
  { text: `Self-contraction: the mind's requirements are satisfied by doing what we know we should, and by the calm it brings us.`, source: `Marcus Aurelius` },
  { text: `For times when you feel pain: see that it doesn't disgrace you or degrade your intelligence`, source: `Marcus Aurelius` },
  { text: `Concentrate on what you have to do. Fix your eyes on it. Remind yourself that your task is to be a good human being. Then do it, without hesitation, and speak the truth as you see it. But with kindness. With humility. Without hypocrisy.`, source: `Marcus Aurelius` },
  { text: `No pointless actions.`, source: `Marcus Aurelius` },
  { text: `You have to assemble your life yourself. Action by action.`, source: `Marcus Aurelius` },
  { text: `Work: Not to rouse pity, not to win sympathy or admiration. Only this: Activity. Stillness. As the logos of the state requires.`, source: `Marcus Aurelius` },
  { text: `Learn to ask of all actions, "Why are they doing that?" Starting with your own.`, source: `Marcus Aurelius` },
  { text: `Self-reliance.`, source: `Marcus Aurelius` },

  // MARIA RESSA
  { text: `The best way is to work really, really hard. 150%. It's proving that I belong. You have to prove that you deserve it.`, source: `Maria Ressa` },

  // MARK MANSON
  { text: `The only way you can fully enjoy the love in your life is to choose to make something else more important in your life than love.`, source: `Mark Manson` },
  { text: `You will always find a way to get rid of things you don't feel you deserve.`, source: `Mark Manson` },
  { text: `There's no scoreboard. Everything is given and done unconditionally. Without expectation of reward or manipulation of feelings.`, source: `Mark Manson` },
  { text: `Don't ever stop doing the little things. Take time to meet for lunch, go for a walk, go out to dinner or a movie with some regularity.`, source: `Mark Manson` },
  { text: `You need to be the kind of person you want your spouse to be.`, source: `Mark Manson` },
  { text: `Even if you feel like you could never love your partner any more, that can change, if you give it a chance. I think people give up too soon.`, source: `Mark Manson` },
  { text: `Be passionate about cleaning the house, preparing meals, and taking care of your home. This is required of everyone daily. Make it fun and happy and do it together.`, source: `Mark Manson` },
  { text: `Do not complain about your partner to anyone.`, source: `Mark Manson` },
  { text: `When it comes to dealing with social issues, ask yourself "What if I'm wrong?" Ask it all the damn time.`, source: `Mark Manson` },

  // MARK TWAIN
  { text: `Sometimes you must sacrifice yourself on the altar of effort to be reminded of what and who you could become if you applied yourself.`, source: `Mark Twain` },

  // MICHELLE VISAGE
  { text: `When you're performing, always be the biggest that you can be, to the point where you feel ridiculous.`, source: `Michelle Visage` },

  // MIKHAILA PETERSON
  { text: `The type of people who just immediately implement things they realize are good for them or will improve their lives. It's just a flip of a switch. Like yes I *am* having those cravings, but that's just not who I am anymore, I don't do that at all.`, source: `Mikhaila Peterson` },
  { text: `Contextualize what you're learning if it's boring.`, source: `Mikhaila Peterson` },

  // MITCH ALBOM
  { text: `The end of loneliness is when someone needs you. And the world is so full of need.`, source: `Mitch Albom` },

  // NORTHCOTE PARKINSON
  { text: `Delay is the deadliest form of denial.`, source: `Northcote Parkinson` },

  // OLIVIA LUX
  { text: `Opportunity is not a likely visitor, so go out and get it, and chase your dreams.`, source: `Olivia Lux` },

  // PHIL STUTZ
  { text: `(When overwhelmed) In its impossibility, something's gonna happen. What you have to say is, "I'm gonna do as best as I can now." "I'll go to the next thing and do the best I can there"`, source: `Phil Stutz` },
  { text: `I focus on you and block the rest of the world out`, source: `Phil Stutz` },

  // RALPH WALDO EMERSON
  { text: `In order to learn the important lessons in life, one must each day surmount a fear.`, source: `Ralph Waldo Emerson` },

  // RICHARD FEYNMAN
  { text: `Heisenberg got his mechanics by thinking: only talk about things that you can measure.`, source: `Richard Feynman` },
  { text: `The first person you must not fool is yourself, because you are the easiest person to fool.`, source: `Richard Feynman` },

  // RICOTAQUITO (TIKTOK)
  { text: `You have so much to offer the world, I wish you would just get out of your own way.`, source: `Ricotaquito (TikTok)` },

  // ROXIE NAFOUSI
  { text: `Your self-worth is determining your outcomes.`, source: `Roxie Nafousi` },

  // SAMUEL ULLMAN
  { text: `Maturity is the ability to think, speak, and act your feelings within the bounds of dignity.`, source: `Samuel Ullman` },

  // SLATER YOUNG
  { text: `If it's 80% to your liking, okay na yun, let it go na.`, source: `Slater Young` },

  // SOCRATES
  { text: `From the deepest desires, often come the deadliest hate.`, source: `Socrates` },

  // TAYCE
  { text: `Take a deep breath and get over it.`, source: `Tayce` },
  { text: `Oh nothing really pisses me off, it's just boys with their mixed messages or them taking 27 years to reply to a stupid message. That's the only thing that makes me angry. That's when Patricia comes out.`, source: `Tayce` },

  // THOMAS FRANK
  { text: `Give it a 5-second grind before giving up the rep.`, source: `Thomas Frank` },

  // THOMAS JEFFERSON
  { text: `When angry count to ten before you speak. If very angry, count to one hundred.`, source: `Thomas Jefferson` },

  // TOM BILYEU
  { text: `You can look at yourself in the mirror and say "I do what I say I'm going to do for me."`, source: `Tom Bilyeu` },

  // TOMMY HILFIGER
  { text: `Your first idea is your best idea. Go for it, don't look back.`, source: `Tommy Hilfiger` },

  // TONY ROBBINS
  { text: `7 Relationship Skills: (1) Heartfelt understanding; (2) Giving what they really need; (3) Creating and building trust and respect; (4) Reclaiming playfulness, presence, and passion; (5) Harnessing courage and embracing honesty; (6) Uncovering and creating alignment; (7) Live consciously, be an example.`, source: `Tony Robbins` },
  { text: `When you satisfy any 2 needs of a person, you have made a connection. 4 of their needs, you've created a bond. All 6 needs, the person will never want to leave you.`, source: `Tony Robbins` },
  { text: `Instead of focusing on your own needs, get out of yourself and into your own heart.`, source: `Tony Robbins` },
  { text: `Your partner may express doubt, hesitation, regret, disappointment. Don't beat yourself up. Instead, show your loving determination to put your partner first and to honor his or her need for love.`, source: `Tony Robbins` },
  { text: `Hear your partner's requests, learn about your partner's needs and give him or her a loving response.`, source: `Tony Robbins` },
  { text: `Repeat your declaration "I love you and I will take care of you no matter what", align your interests.`, source: `Tony Robbins` },
  { text: `Always end difficult conversations with an act of love. If you cannot end on a loving note, you have not succeeded in building trust. You don't fully understand your partner, and your partner may not feel fully understood.`, source: `Tony Robbins` },
  { text: `If your partner doesn't feel that they are the most important thing to you, then problems are coming. It doesn't matter if it's kids, doesn't matter if it's work, doesn't matter if it's sports. If they feel that there is something more important than them, you're moving in the direction of pain.`, source: `Tony Robbins` },
  { text: `It's **so easy** to heal things, but not when you start believing it's impossible.`, source: `Tony Robbins` },
  { text: `Problems need energy to live. You've given this problem too much energy. You can just ask for what you need and solve it as soon as possible, then leave it alone.`, source: `Tony Robbins` },
  { text: `Don't label "my" with your problems because it's not yours. It's everyone's and you're channeling it. You feel it when you label it that way.`, source: `Tony Robbins` },
  { text: `**Massive, relentless, unapologetic action everyday**.`, source: `Tony Robbins` },
  { text: `Anything you attach the words "I AM" to, and if you do consistently enough and intensely enough, you will become.`, source: `Tony Robbins` },
  { text: `You're not gonna get the right parts of you by thinking it. You have to name it and call on it.`, source: `Tony Robbins` },
  { text: `I won't settle for less than I can do, be, share, create, and give in my life for my family, for myself. Enough is enough, you have to take control.`, source: `Tony Robbins` },
  { text: `I will not be one of the many who can't. I will be one of the few who do.`, source: `Tony Robbins` },
  { text: `Regardless whether there's progress or not, I'm gonna find the good in this. I'm gonna find the great in this.`, source: `Tony Robbins` },
  { text: `"How can I give more?" instead of why isn't it working.`, source: `Tony Robbins` },
  { text: `If you give your all everyday, your gifts will make room for you.`, source: `Tony Robbins` },
  { text: `No problem is permanent. Only my soul is permanent.`, source: `Tony Robbins` },
  { text: `There's nothing wrong with me, this is just a situation my brain hasn't been prepared for.`, source: `Tony Robbins` },
  { text: `It's bullshit. There's still some aspects of your life that's great, beautiful, something you can appreciate.`, source: `Tony Robbins` },
  { text: `Sometimes you don't wanna change your state because there's a belief that if you feel good, this shit will happen again. **It won't.**`, source: `Tony Robbins` },
  { text: `Your state controls **everything**.`, source: `Tony Robbins` },
  { text: `When you have nothing, it's when you need to give. Not just money, your presence and love.`, source: `Tony Robbins` },
  { text: `Any decision made out of fear is almost always wrong, because you're living in a scarcity of some sort.`, source: `Tony Robbins` },
  { text: `When you think there's nothing you can do, that's when you can do something. When you think "I don't know what to do", that's when you know what to do. If you just **push** yourself.`, source: `Tony Robbins` },
  { text: `Creativity + caring. Be creative in how you care for the people you love and people you don't know.`, source: `Tony Robbins` },
  { text: `Negotiating with yourself on whether to do it right now or in five minutes is what destroys people's lives and dreams.`, source: `Tony Robbins` },
  { text: `Anyone can learn anything if it's important enough to you. You just have to really break it down to its simple core.`, source: `Tony Robbins` },
  { text: `Turn the snake into a rope.`, source: `Tony Robbins` },
  { text: `What am I focusing on right now?`, source: `Tony Robbins` },
  { text: `I'm gonna live in a beautiful state because me suffering isn't gonna serve anyone I love at all.`, source: `Tony Robbins` },
  { text: `Alternative words. (Anxious) a little concerned. (Disappointed) a little underwhelmed. (Confused) curious. (Overwhelmed) I'm in demand. (I'm an idiot) that was less helpful, let's try again. (Getting mad) annoyed, tinkled, peeved.`, source: `Tony Robbins` },
  { text: `If you get angry, the other person wins.`, source: `Tony Robbins` },
  { text: `Take note of the difference between *have to* and *get to*.`, source: `Tony Robbins` },
  { text: `If you let your learning lead to knowledge, you become a fool. If your learning leads to action, you create real change.`, source: `Tony Robbins` },
  { text: `You'll always be miserable when you're not your real self. You'll always be happy when you're being yourself. When you're trying to be many things for many people, then you have many pains.`, source: `Tony Robbins` },
  { text: `Love is an irresistible force when it's sincere. It'll get through the deepest shield if it's consistent and constant.`, source: `Tony Robbins` },
  { text: `People get rewarded in public for what they practice intensely in private.`, source: `Tony Robbins` },
  { text: `As great as it is to achieve, it's more important to enjoy.`, source: `Tony Robbins` },
  { text: `The capacity to strengthen and increase your hunger is the one common denominator amongst successful people. Get around where it's better and things will hit you. Who you spend time with is who you become.`, source: `Tony Robbins` },
  { text: `You value what you fight for.`, source: `Tony Robbins` },
  { text: `So many of us are focused on making a living instead of designing a life.`, source: `Tony Robbins` },
  { text: `A leader gets results by maximizing resources. The greatest leaders in the world have always found a way to maximize better than anyone else.`, source: `Tony Robbins` },
  { text: `Satisfied clients go away, raving fans stay.`, source: `Tony Robbins` },
  { text: `People don't buy products, they buy emotions. They buy identities.`, source: `Tony Robbins` },
  { text: `Engagement is the most important factor for success.`, source: `Tony Robbins` },
  { text: `Emotion comes from motion. Greet people as if they're your long lost best friend.`, source: `Tony Robbins` },
  { text: `Determination, faith, and courage began to be the forces that guided my every action moving forward.`, source: `Tony Robbins` },
  { text: `Fear is physical, but so is courage.`, source: `Tony Robbins` },
  { text: `Passion is the genesis of genius.`, source: `Tony Robbins` },
  { text: `**Decisions**, not conditions, determine my destiny. And my decisions will be based on what I focus on.`, source: `Tony Robbins` },
  { text: `It's not what you focus on in the moment that's gonna affect you, it's what you focus on regularly.`, source: `Tony Robbins` },
  { text: `Life changes the moment you make the decision that you're 100% responsible for your experience of life. Responsible = Response-able. Own yourself.`, source: `Tony Robbins` },
  { text: `Blaming other people will never make you happy, never make you fulfilled, never bring you closer to people, never make you grow. You don't have to blame anything. Instead ask yourself what do you want? and focus on that.`, source: `Tony Robbins` },
  { text: `Take your energy, because that's all you have in this life. Invest it in the things you love.`, source: `Tony Robbins` },
  { text: `You need absolute certainty. You can have all the skill in the world, but if you lose that certainty, the athlete goes down.`, source: `Tony Robbins` },
  { text: `If you do what you did in the beginning of the relationship **in the end**, there won't be an end.`, source: `Tony Robbins` },
  { text: `You know it's a great relationship if you want to be constantly wanting to be better for the person you love. If you don't care what they think, that's not a good sign.`, source: `Tony Robbins` },
  { text: `If you wanna change your life, figure out how your worst day was your best day.`, source: `Tony Robbins` },
  { text: `Don't ever beat yourself up. When you beat yourself up, you're sucking out the energy you need to move forward.`, source: `Tony Robbins` },
  { text: `Everyday work harder on yourself than anything else. Because if you become more intelligent, more valuable, more skilled, you can add more value to other people.`, source: `Tony Robbins` },
  { text: `Push will wear you out. You only have so much willpower. But when you're pulled, when there's something larger than yourself that you're here to serve and that you believe you're made for, that brings energy.`, source: `Tony Robbins` },
  { text: `Instead of trying to control her, I'm gonna learn from her. I'm gonna love her. I'm gonna grow me, and that pulls her closer.`, source: `Tony Robbins` },
  { text: `We all get what we tolerate. I'm gonna decide what I want. I'm not gonna tolerate anything inside myself that's less than I can be or do or share or give.`, source: `Tony Robbins` },
  { text: `I just really believe in people's love and caring. If they led with that, they'd find a way. I think they lead with their fear they're gonna fail, and I will *not* fail.`, source: `Tony Robbins` },
  { text: `What it takes to make a relationship work is really simple. It takes *unbelievable* courage. Because this takes you to the rawest place in yourself.`, source: `Tony Robbins` },
  { text: `Stay in your head, you're dead.`, source: `Tony Robbins` },
  { text: `Life is growth. I don't think people are happy staying where they are. If you sit at the table of success too long, you're gonna get bored.`, source: `Tony Robbins` },
  { text: `Train your brain for *"when we say go, we go"*. Because the longer you wait, the harder it gets.`, source: `Tony Robbins` },
  { text: `When I tell my mind what to do, we don't negotiate. I don't let my mind run me, I let my heart and soul run me.`, source: `Tony Robbins` },
  { text: `The brain is **always** looking for what's wrong, and it's always available.`, source: `Tony Robbins` },
  { text: `Problems are a sign of life. And all they are are challenges to be solved.`, source: `Tony Robbins` },
  { text: `Winners anticipate, losers react.`, source: `Tony Robbins` },
  { text: `All communication either builds, or destroys.`, source: `Tony Robbins` },
  { text: `The secret to life is getting outside yourself. Human beings do more things for others than for themselves, so tap into that.`, source: `Tony Robbins` },
  { text: `Once you get to know them or yourself, and **decide** that you know who they really are, you don't question their **intent** ever. Once you start doubting their intent or doubting yourself, that's where bridges are destroyed.`, source: `Tony Robbins` },
  { text: `Causes of suffering: loss, less, and never. Have a 90-second rule. The antidote is **appreciation**.`, source: `Tony Robbins` },
  { text: `Catch a thought of suffering and let it go. Realize that it's a thought of *THE* mind. Everyone has had these thoughts for thousands of years.`, source: `Tony Robbins` },
  { text: `Suffering comes **only** when we obsess about ourselves. What we're getting, what we're not getting, what others have done for us.`, source: `Tony Robbins` },
  { text: `Miracles become expectations immediately. Learn to direct your expectations because disappointments can make you angry. Discipline your disappointments.`, source: `Tony Robbins` },
  { text: `To be in a beautiful state, you first identify where you're suffering, what your favorite flavor is. Then decide. Take that feeling while it's little. Break the pattern, and see it as a thought going by. Then focus on something to **appreciate, enjoy, and love**.`, source: `Tony Robbins` },
  { text: `Each moment you spend suffering, your mind deletes everything it could be grateful for and appreciate.`, source: `Tony Robbins` },
  { text: `Find something to be passionate about in **each moment**.`, source: `Tony Robbins` },
  { text: `I don't need resources, I need resourcefulness.`, source: `Tony Robbins` },
  { text: `Before you achieve a goal, find the next goal so when you achieve the first one, you just move on to the next peak.`, source: `Tony Robbins` },
  { text: `Patterns of suffering: focus on what's missing/what you don't have, focus on what you can't control/what you can, focus on the past/present/future. Choice is a gift, choose what to focus on. What you focus on, you feel.`, source: `Tony Robbins` },
  { text: `Core beliefs: people are not their beliefs. There is always a positive intent behind all behavior. People do the best they can with the resources they have. There are no unresourceful people, only unresourceful states. No matter how thin you slice it, there are always two sides. In any communication, all responses are either a loving response or a cry for help.`, source: `Tony Robbins` },
  { text: `If you wanna improve something, you start with your emotional/mental state. If it's weak, it won't matter what you do, your actions are also weak.`, source: `Tony Robbins` },
  { text: `Your growth is the only limit to your happiness. If you're not happy, you're not growing in some area. And usually, it's a place where you're blaming, pointing the finger.`, source: `Tony Robbins` },
  { text: `People can **always** be unfair and unjust, but you can't change it. What you have to do is become stronger than any of it. Freedom comes from growth. Freedom does not come from control. Control is an illusion.`, source: `Tony Robbins` },
  { text: `WE! not ME in everything.`, source: `Tony Robbins` },

  // TRIXIE MATTEL
  { text: `You play stupid games, you win stupid prizes.`, source: `Trixie Mattel` },

  // WILL SMITH
  { text: `I'm world class at only a couple of things. And every hour I'm not doing those things, I am doing a disservice to myself and the world.`, source: `Will Smith` },
  { text: `There are people out there who are world-class at other things: cooking, marketing, whatever. And for me to *not* hire them and support what they do, also does a disservice to the world.`, source: `Will Smith` },
  { text: `You have a moral responsibility to do what you do best, because that is your service to the world. Similarly, you have a moral responsibility to support others in what they do best, because that is their service to the world.`, source: `Will Smith` },

  // BITS — unknown sources, movie/show quotes, random finds
  { text: `If men could only know each other, they would neither idolize nor hate.`, source: `Bits` },
  { text: `You can bitch about the situation, or you can make the situation your bitch.`, source: `Bits` },
  { text: `If you're running from your problems, it's a race you're never gonna win.`, source: `Bits` },
  { text: `If you bring up the past, it won't last.`, source: `Bits` },
  { text: `Everything's for sale`, source: `Bits` },
  { text: `Even if they don't like you, if you approach it with the mindset of "We'll see how long you'll last without liking me", I think it'll work out.`, source: `Bits` },
  { text: `You don't know. You can never be sure. But you take the plunge anyway. Sure is for people who don't love enough.`, source: `Bits` },
  { text: `Act with enormous decisiveness`, source: `Bits` },
  { text: `With extreme daring and with the sense of exploiting opportunities.`, source: `Bits` },
  { text: `Von Manstein was a man who kept his emotions **strictly** under control.`, source: `Bits` },
  { text: `Believe! Work! Fight!`, source: `Bits` }

];


// ── State ─────────────────────────────────────────────────────────────────────
let currentEmotion   = null;
let currentQuestions = [];
let currentIndex     = 0;
let todayAnswers     = [];
let currentSaying    = null;   // the saying currently shown on home screen
let viewerQuotes     = [];
let viewerIndex      = 0;


// ── Utility ───────────────────────────────────────────────────────────────────

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  const ratingGroup  = ['rating-calendar-screen', 'rate-today-screen', 'day-detail-screen'];
  const toolboxGroup = ['toolbox-screen', 'want-list-screen', 'want-form-screen'];
  let activeTab = 'tab-home';
  if (ratingGroup.includes(id))  activeTab = 'tab-rating';
  if (toolboxGroup.includes(id)) activeTab = 'tab-toolbox';

  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(activeTab).classList.add('active');
}

// Fisher-Yates shuffle — returns a new shuffled array
function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Groups the flat sayingsData array into { "Source Name": [{text,source}, ...] }
function groupBySource(sayings) {
  const groups = {};
  sayings.forEach(s => {
    if (!groups[s.source]) groups[s.source] = [];
    groups[s.source].push(s);
  });
  return groups;
}

// Converts **bold** and *italic* markers to HTML tags
function formatText(str) {
  if (!str) return '';
  str = str.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  str = str.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return str;
}

// Formats a timestamp into a human-readable date string
function formatDate(timestamp) {
  return new Date(timestamp).toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
}

function show(id)  { document.getElementById(id).classList.remove('hidden'); }
function hide(id)  { document.getElementById(id).classList.add('hidden'); }
function setText(id, text) { document.getElementById(id).textContent = text; }
function setHtml(id, html) { document.getElementById(id).innerHTML = html; }


// ── Backup: export / import everything ──────────────────────────────────────────
// iOS wipes localStorage when a home-screen web app is deleted, so this is the
// safety net — export before deleting/re-adding the icon, import after.

const BACKUP_KEYS = ['toolboxWants', 'lifeRatings', 'reflections', 'sayingReflections'];

function exportBackup() {
  const dump = {};
  BACKUP_KEYS.forEach(k => {
    const v = localStorage.getItem(k);
    if (v !== null) dump[k] = v;
  });
  const payload = { app: 'reflection-app', exportedAt: new Date().toISOString(), data: dump };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = 'reflection-backup-' + new Date().toISOString().slice(0, 10) + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importBackup(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      const data = parsed.data || parsed;   // tolerate a raw file too
      let restored = 0;
      BACKUP_KEYS.forEach(k => {
        if (data[k] != null) {
          localStorage.setItem(k, typeof data[k] === 'string' ? data[k] : JSON.stringify(data[k]));
          restored++;
        }
      });
      if (restored > 0) { alert('Backup restored — reloading.'); location.reload(); }
      else alert("That file didn't have any data I recognized.");
    } catch (e) {
      alert("Couldn't read that file — make sure it's a backup exported from this app.");
    }
  };
  reader.readAsText(file);
}


// ── Life Rating ───────────────────────────────────────────────────────────────

// Tony Robbins Pyramid of Mastery — physical is the foundation (base), celebrate is the peak
const AREAS = ['physical', 'emotions', 'relationships', 'time', 'career', 'finances', 'celebrate'];
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAY_NAMES   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

let calYear  = new Date().getFullYear();
let calMonth = new Date().getMonth();
let currentRatingKey    = null;
let currentRatingValues = {};

// 8–10 = blues (light → navy); 0–7 = pinks/reds (light → deep). Hard jump at 8.
function ratingColor(v) {
  if (v >= 8) {
    return ['#aed6f1', '#5dade2', '#1b4f72'][v - 8];
  }
  return ['#fce4e7','#f9cdd1','#f5b5ba','#ef9ba2','#e77f87','#dc606a','#cd4050','#b52435'][v];
}

function todayKey() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}

function makeDateKey(year, month, day) {
  return year + '-' + String(month + 1).padStart(2,'0') + '-' + String(day).padStart(2,'0');
}

function buildCalendar() {
  const ratings = JSON.parse(localStorage.getItem('lifeRatings') || '{}');
  const tk = todayKey();
  const todayDate = new Date();

  setText('cal-month-label', MONTH_NAMES[calMonth] + ' ' + calYear);

  const grid = document.getElementById('cal-grid');
  grid.innerHTML = '';

  // Day-of-week headers
  DAY_NAMES.forEach(name => {
    const h = document.createElement('div');
    h.className = 'cal-day-header';
    h.textContent = name;
    grid.appendChild(h);
  });

  const firstWeekday = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth  = new Date(calYear, calMonth + 1, 0).getDate();

  // Empty cells before month starts
  for (let i = 0; i < firstWeekday; i++) {
    const blank = document.createElement('div');
    blank.className = 'cal-day empty';
    grid.appendChild(blank);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const key    = makeDateKey(calYear, calMonth, d);
    const rating = ratings[key];
    const isToday  = key === tk;
    const isFuture = new Date(calYear, calMonth, d) > todayDate;

    const cell = document.createElement('button');
    cell.className = 'cal-day';
    cell.textContent = d;

    if (rating) {
      cell.classList.add('rated');
      cell.style.backgroundColor = ratingColor(Math.round(rating.avg));
    } else if (isToday) {
      cell.classList.add('today');
    } else if (isFuture) {
      cell.classList.add('future');
    }

    if (rating) {
      cell.addEventListener('click', () => openDayDetail(key, rating));
    } else if (isToday) {
      cell.addEventListener('click', () => openRateDay(key));
    } else if (!isFuture) {
      cell.style.cursor = 'default';
    }

    grid.appendChild(cell);
  }

  // Button text: "Edit today" if today is already rated, otherwise "Rate today"
  document.getElementById('rate-today-btn').textContent = ratings[tk] ? 'Edit today' : 'Rate today';
}

function openRateDay(key) {
  const ratings = JSON.parse(localStorage.getItem('lifeRatings') || '{}');
  currentRatingKey    = key;
  currentRatingValues = ratings[key] ? { ...ratings[key].areas } : {};

  // Format the date for display
  const [yr, mo, da] = key.split('-').map(Number);
  const label = new Date(yr, mo - 1, da).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric'
  });
  setText('rate-today-date', label);

  renderRateAreas();
  updateAvgDisplay();
  showScreen('rate-today-screen');
}

function renderRateAreas() {
  const container = document.getElementById('rate-areas-list');
  container.innerHTML = '';

  // Reversed so celebrate (pyramid peak) is at top, physical (base) is at bottom
  const displayOrder = [...AREAS].reverse();

  displayOrder.forEach((area, i) => {
    // Pyramid shape: celebrate (i=0) is narrowest, physical (i=6) is widest
    const widthPct = 58 + i * 7; // 58% → 100%

    const row = document.createElement('div');
    row.className = 'rate-area-row';
    row.style.width = widthPct + '%';

    const label = document.createElement('p');
    label.className = 'rate-area-label';
    label.textContent = area;
    row.appendChild(label);

    const dotsRow = document.createElement('div');
    dotsRow.className = 'rate-dots';

    const val = currentRatingValues[area];

    for (let seg = 0; seg <= 10; seg++) {
      const dot = document.createElement('button');
      dot.className = 'rate-dot';
      if (val !== undefined && seg <= val) {
        dot.style.backgroundColor = ratingColor(val);
      }
      dot.addEventListener('click', () => {
        currentRatingValues[area] = seg;
        renderRateAreas();
        updateAvgDisplay();
      });
      dotsRow.appendChild(dot);
    }

    row.appendChild(dotsRow);
    container.appendChild(row);
  });
}

function updateAvgDisplay() {
  const values = AREAS.map(a => currentRatingValues[a]).filter(v => v !== undefined);
  const el = document.getElementById('rate-avg-display');
  if (values.length === 0) {
    el.textContent = '—';
    el.style.color = '#5c4f47';
    return;
  }
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  el.textContent = avg.toFixed(1);
  el.style.color = ratingColor(Math.round(avg));
}

function saveRating() {
  const values = AREAS.map(a => currentRatingValues[a]).filter(v => v !== undefined);
  if (values.length === 0) return;
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  const ratings = JSON.parse(localStorage.getItem('lifeRatings') || '{}');
  ratings[currentRatingKey] = {
    areas: { ...currentRatingValues },
    avg:   parseFloat(avg.toFixed(2))
  };
  localStorage.setItem('lifeRatings', JSON.stringify(ratings));
  buildCalendar();
  showScreen('rating-calendar-screen');
}

function openDayDetail(key, rating) {
  const [yr, mo, da] = key.split('-').map(Number);
  const label = new Date(yr, mo - 1, da).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
  });
  setText('detail-date', label);

  const avgEl = document.getElementById('detail-avg');
  avgEl.textContent = rating.avg.toFixed(1);
  avgEl.style.color  = ratingColor(Math.round(rating.avg));

  const container = document.getElementById('detail-areas-list');
  container.innerHTML = '';

  const displayOrder = [...AREAS].reverse();
  displayOrder.forEach(area => {
    const val = rating.areas[area];
    if (val === undefined) return;

    const row = document.createElement('div');
    row.className = 'detail-area-row';

    const name = document.createElement('span');
    name.className = 'detail-area-name';
    name.textContent = area;

    const scoreWrap = document.createElement('div');
    scoreWrap.className = 'detail-area-score';

    const dot = document.createElement('span');
    dot.className = 'score-dot';
    dot.style.backgroundColor = ratingColor(val);

    const score = document.createElement('span');
    score.textContent = val;

    scoreWrap.appendChild(dot);
    scoreWrap.appendChild(score);
    row.appendChild(name);
    row.appendChild(scoreWrap);
    container.appendChild(row);
  });

  const editBtn = document.getElementById('edit-rating-btn');
  editBtn.dataset.key = key;
  editBtn.style.display = key === todayKey() ? '' : 'none';
  showScreen('day-detail-screen');
}


// ── Toolbox: Everything I Could Ever Want ───────────────────────────────────────

let wantViewFilter       = 'All';
let editingWantId        = null;   // null = adding a new item, otherwise the id being edited
let selectedWantCurrency = 'PHP';

function loadToolbox() {
  return JSON.parse(localStorage.getItem('toolboxWants') || '{"categories":["Uncategorized"],"items":[]}');
}

function saveToolbox(data) {
  localStorage.setItem('toolboxWants', JSON.stringify(data));
}

// Fetches PHP-per-USD at most once a day; falls back to the last cached rate when offline
async function ensureFxRate() {
  const cached = JSON.parse(localStorage.getItem('fxRate') || 'null');
  const oneDay = 24 * 60 * 60 * 1000;
  if (cached && Date.now() - cached.fetchedAt < oneDay) return cached;

  try {
    const res  = await fetch('https://open.er-api.com/v6/latest/USD');
    const data = await res.json();
    if (data.result === 'success' && data.rates && data.rates.PHP) {
      const fresh = { rate: data.rates.PHP, fetchedAt: Date.now() };
      localStorage.setItem('fxRate', JSON.stringify(fresh));
      return fresh;
    }
  } catch (e) {
    // offline or fetch failed — fall back to whatever is cached
  }
  return cached;
}

function formatMoney(amount, symbol) {
  return symbol + amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Returns { php, usd } for an item — the typed-in side is untouched, the other is computed from the cached rate
function convertWant(item, fx) {
  if (item.currency === 'PHP') {
    return { php: item.amount, usd: fx ? item.amount / fx.rate : null };
  }
  return { php: fx ? item.amount * fx.rate : null, usd: item.amount };
}

function buildWantViewSelect(data) {
  const select = document.getElementById('want-view-select');
  select.innerHTML = '';

  const allOpt = document.createElement('option');
  allOpt.value = 'All';
  allOpt.textContent = 'All';
  select.appendChild(allOpt);

  data.categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });

  select.value = wantViewFilter;

  document.getElementById('delete-category-btn').classList.toggle(
    'hidden', wantViewFilter === 'All' || wantViewFilter === 'Uncategorized'
  );
}

function buildWantList() {
  const data = loadToolbox();
  const fx   = JSON.parse(localStorage.getItem('fxRate') || 'null');

  buildWantViewSelect(data);

  const items = wantViewFilter === 'All'
    ? data.items
    : data.items.filter(i => i.category === wantViewFilter);

  const list = document.getElementById('want-items-list');
  list.innerHTML = '';

  if (items.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'empty-message';
    empty.textContent = 'Nothing here yet.';
    list.appendChild(empty);
  }

  let totalPhp = 0, totalUsd = 0;

  items.forEach(item => {
    const { php, usd } = convertWant(item, fx);
    if (php !== null) totalPhp += php;
    if (usd !== null) totalUsd += usd;

    const row = document.createElement('div');
    row.className = 'want-item';

    const top = document.createElement('div');
    top.className = 'want-item-top';

    const name = document.createElement('span');
    name.className = 'want-item-name';
    name.textContent = item.name;

    const actions = document.createElement('div');
    actions.className = 'want-item-actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'icon-btn';
    editBtn.title = 'Edit';
    editBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>';
    editBtn.addEventListener('click', () => openWantForm(item));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'icon-btn';
    deleteBtn.title = 'Delete';
    deleteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>';
    deleteBtn.addEventListener('click', () => {
      if (confirm('Delete "' + item.name + '"?')) {
        const d = loadToolbox();
        d.items = d.items.filter(i => i.id !== item.id);
        saveToolbox(d);
        buildWantList();
      }
    });

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    top.appendChild(name);
    top.appendChild(actions);

    const meta = document.createElement('p');
    meta.className = 'want-item-meta';
    const phpText = php !== null ? formatMoney(php, '₱') : '—';
    const usdText = usd !== null ? formatMoney(usd, '$') : '—';
    meta.textContent = phpText + '  ·  ' + usdText + '  ·  ' + item.category;

    row.appendChild(top);
    row.appendChild(meta);
    list.appendChild(row);
  });

  setText('want-total-php', formatMoney(totalPhp, '₱'));
  setText('want-total-usd', formatMoney(totalUsd, '$'));

  const rateNote = document.getElementById('want-rate-note');
  if (fx) {
    const updated = new Date(fx.fetchedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    rateNote.textContent = 'Rate: ₱' + fx.rate.toFixed(2) + ' / $1 · updated ' + updated + ' · via exchangerate-api.com';
  } else {
    rateNote.textContent = 'Rate unavailable — connect to the internet once to enable conversions.';
  }
}

function openWantForm(item) {
  editingWantId = item ? item.id : null;
  const data = loadToolbox();

  setText('want-form-title', item ? 'Edit item' : 'Add item');
  document.getElementById('want-name-input').value   = item ? item.name   : '';
  document.getElementById('want-amount-input').value = item ? item.amount : '';
  selectedWantCurrency = item ? item.currency : 'PHP';
  updateCurrencyButtons();

  populateCategorySelect(data, item ? item.category : 'Uncategorized');
  hide('want-new-category-area');
  document.getElementById('want-new-category-input').value = '';

  document.getElementById('delete-want-btn').classList.toggle('hidden', !item);

  showScreen('want-form-screen');
}

function updateCurrencyButtons() {
  document.querySelectorAll('.currency-btn').forEach(btn => {
    btn.classList.toggle('selected', btn.dataset.currency === selectedWantCurrency);
  });
}

function populateCategorySelect(data, selected) {
  const select = document.getElementById('want-category-select');
  select.innerHTML = '';

  data.categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });

  const addOpt = document.createElement('option');
  addOpt.value = '__add_new__';
  addOpt.textContent = '+ Add new category';
  select.appendChild(addOpt);

  select.value = selected;
}

function saveWant() {
  const name     = document.getElementById('want-name-input').value.trim();
  const amount   = parseFloat(document.getElementById('want-amount-input').value);
  const category = document.getElementById('want-category-select').value;

  if (!name || isNaN(amount) || category === '__add_new__') return;

  const data = loadToolbox();

  if (editingWantId) {
    const existing = data.items.find(i => i.id === editingWantId);
    existing.name     = name;
    existing.amount   = amount;
    existing.currency = selectedWantCurrency;
    existing.category = category;
  } else {
    data.items.push({
      id: Date.now(),
      name, amount,
      currency: selectedWantCurrency,
      category
    });
  }

  saveToolbox(data);
  buildWantList();
  showScreen('want-list-screen');
}

function deleteWant() {
  if (!editingWantId) return;
  if (!confirm('Delete this item?')) return;

  const data = loadToolbox();
  data.items = data.items.filter(i => i.id !== editingWantId);
  saveToolbox(data);
  buildWantList();
  showScreen('want-list-screen');
}


// ── Home screen ───────────────────────────────────────────────────────────────

function showHome() {
  currentSaying = sayingsData[Math.floor(Math.random() * sayingsData.length)];
  setHtml('saying-text',   formatText(currentSaying.text));
  setText('saying-source', '— ' + currentSaying.source);

  // Reset write-about area
  hide('write-about-area');
  document.getElementById('saying-reflection-input').value = '';

  showScreen('home-screen');
}

document.getElementById('shuffle-btn').addEventListener('click', () => {
  let next;
  do { next = sayingsData[Math.floor(Math.random() * sayingsData.length)]; }
  while (sayingsData.length > 1 && next === currentSaying);
  currentSaying = next;
  setHtml('saying-text',   formatText(currentSaying.text));
  setText('saying-source', '— ' + currentSaying.source);
  hide('write-about-area');
  document.getElementById('saying-reflection-input').value = '';
});

document.getElementById('write-about-btn').addEventListener('click', () => {
  const area = document.getElementById('write-about-area');
  if (area.classList.contains('hidden')) {
    show('write-about-area');
    document.getElementById('saying-reflection-input').focus();
  } else {
    hide('write-about-area');
  }
});

document.getElementById('save-saying-btn').addEventListener('click', () => {
  const text = document.getElementById('saying-reflection-input').value.trim();
  if (!text) return;

  const entry = {
    type:       'saying',
    timestamp:  Date.now(),
    date:       formatDate(Date.now()),
    quote:      { text: currentSaying.text, source: currentSaying.source },
    reflection: text
  };

  const existing = JSON.parse(localStorage.getItem('sayingReflections') || '[]');
  existing.unshift(entry);
  localStorage.setItem('sayingReflections', JSON.stringify(existing));

  hide('write-about-area');
  document.getElementById('saying-reflection-input').value = '';
});

// Emotion buttons — each one starts the right question flow
document.querySelectorAll('.emotion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentEmotion   = btn.dataset.emotion;
    currentQuestions = questionsData[currentEmotion].questions;
    currentIndex     = 0;
    todayAnswers     = [];
    showQuestion(0);
    showScreen('question-screen');
  });
});


// ── Question flow ─────────────────────────────────────────────────────────────

function showQuestion(index) {
  const q           = currentQuestions[index];
  const emotionData = questionsData[currentEmotion];
  const total       = currentQuestions.length;

  setText('emotion-label',   currentEmotion);
  setText('progress-label',  `Question ${index + 1} of ${total}`);
  setHtml('question-text',   formatText(q.text));

  // Section header — shown only when this question starts a new section
  if (q.section) {
    setText('section-header', q.section);
    show('section-header');
  } else {
    hide('section-header');
  }

  // Emotion subtext — shown only on the first question
  if (index === 0 && emotionData.subtext) {
    setText('emotion-subtext', emotionData.subtext);
    show('emotion-subtext');
  } else {
    hide('emotion-subtext');
  }

  // Per-question subtext
  if (q.subtext) {
    setText('question-subtext', q.subtext);
    show('question-subtext');
  } else {
    hide('question-subtext');
  }

  document.getElementById('answer-input').value = '';
}

document.getElementById('next-btn').addEventListener('click', () => {
  const answer = document.getElementById('answer-input').value.trim();
  todayAnswers.push({ question: currentQuestions[currentIndex].text, answer });
  currentIndex++;

  if (currentIndex < currentQuestions.length) {
    showQuestion(currentIndex);
  } else {
    saveReflection();
    showScreen('done-screen');
  }
});

document.getElementById('back-question-btn').addEventListener('click', () => {
  if (currentIndex === 0) {
    showHome();
  } else {
    todayAnswers.pop();   // remove the answer saved when moving to this question
    currentIndex--;
    showQuestion(currentIndex);
  }
});

document.getElementById('home-question-btn').addEventListener('click', showHome);


// ── Save entries ──────────────────────────────────────────────────────────────

function saveReflection() {
  const entry = {
    type:      'reflection',
    timestamp: Date.now(),
    date:      formatDate(Date.now()),
    emotion:   currentEmotion,
    answers:   todayAnswers
  };
  const existing = JSON.parse(localStorage.getItem('reflections') || '[]');
  existing.unshift(entry);
  localStorage.setItem('reflections', JSON.stringify(existing));
}


// ── Archive ───────────────────────────────────────────────────────────────────

function buildArchive() {
  const reflections = JSON.parse(localStorage.getItem('reflections') || '[]');
  const sayings     = JSON.parse(localStorage.getItem('sayingReflections') || '[]');

  // Merge both entry types and sort newest first
  const all = [...reflections, ...sayings].sort((a, b) => {
    return (b.timestamp || 0) - (a.timestamp || 0);
  });

  const list = document.getElementById('entries-list');
  list.innerHTML = '';

  if (all.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'empty-message';
    empty.textContent = 'No entries yet.';
    list.appendChild(empty);
    return;
  }

  all.forEach(entry => {
    const block = document.createElement('div');
    block.className = 'entry-block';

    // Clickable date row — shows emotion or type as a hint
    const header = document.createElement('button');
    header.className = 'entry-header';
    let label = entry.date || 'Unknown date';
    if (entry.emotion)           label += '  ·  ' + entry.emotion;
    else if (entry.type === 'saying') label += '  ·  quote';
    header.textContent = label;

    // Content — hidden by default
    const content = document.createElement('div');
    content.className = 'entry-content hidden';

    header.addEventListener('click', () => {
      content.classList.toggle('hidden');
      header.classList.toggle('open');
    });

    // Build content based on entry type
    if (entry.type === 'reflection' || !entry.type) {
      (entry.answers || []).forEach(qa => {
        const qaEl = document.createElement('div');
        qaEl.className = 'entry-qa';

        const qEl = document.createElement('p');
        qEl.className = 'entry-q';
        qEl.textContent = qa.question;

        const aEl = document.createElement('p');
        aEl.className = 'entry-a';
        aEl.textContent = qa.answer || '—';

        qaEl.appendChild(qEl);
        qaEl.appendChild(aEl);
        content.appendChild(qaEl);
      });

    } else if (entry.type === 'saying') {
      const quoteEl = document.createElement('p');
      quoteEl.className = 'entry-quote';
      quoteEl.innerHTML = formatText(entry.quote.text) + ' <span style="color:#b0a39b; font-size:0.8rem;">— ' + entry.quote.source + '</span>';
      content.appendChild(quoteEl);

      const refEl = document.createElement('p');
      refEl.className = 'entry-reflection';
      refEl.textContent = entry.reflection;
      content.appendChild(refEl);
    }

    block.appendChild(header);
    block.appendChild(content);
    list.appendChild(block);
  });
}


// ── Quotes browser ────────────────────────────────────────────────────────────

let allGroups = {};   // populated once, reused for search filtering

function buildPeopleList(filter = '') {
  allGroups = groupBySource(sayingsData);
  const list = document.getElementById('people-list');
  list.innerHTML = '';

  const lc = filter.toLowerCase();

  // Alphabetical, Bits always last
  const names = Object.keys(allGroups)
    .filter(name => name.toLowerCase().includes(lc))
    .sort((a, b) => {
      if (a === 'Bits') return 1;
      if (b === 'Bits') return -1;
      return a.localeCompare(b);
    });

  if (names.length === 0) {
    const msg = document.createElement('p');
    msg.className = 'no-results';
    msg.textContent = 'No results.';
    list.appendChild(msg);
    return;
  }

  names.forEach(name => {
    const btn = document.createElement('button');
    btn.className = 'person-btn';
    btn.textContent = name + '  (' + allGroups[name].length + ')';
    btn.addEventListener('click', () => openQuoteViewer(name, allGroups[name]));
    list.appendChild(btn);
  });
}

function openQuoteViewer(sourceName, quotes) {
  viewerQuotes = shuffle(quotes);
  viewerIndex  = 0;
  setText('viewer-source', sourceName);
  renderViewerQuote();
  showScreen('quote-viewer-screen');
}

function renderViewerQuote() {
  setHtml('viewer-text',  formatText(viewerQuotes[viewerIndex].text));
  setText('viewer-count', (viewerIndex + 1) + ' of ' + viewerQuotes.length);
}

// Live search
document.getElementById('search-input').addEventListener('input', e => {
  buildPeopleList(e.target.value);
});


// ── Button wiring ─────────────────────────────────────────────────────────────

document.getElementById('browse-quotes-btn').addEventListener('click', () => {
  document.getElementById('search-input').value = '';
  buildPeopleList();
  showScreen('quotes-browser-screen');
});

document.getElementById('archives-btn').addEventListener('click', () => {
  buildArchive();
  showScreen('archive-screen');
});

document.getElementById('export-backup-btn').addEventListener('click', exportBackup);

document.getElementById('import-backup-btn').addEventListener('click', () => {
  document.getElementById('import-file-input').click();
});

document.getElementById('import-file-input').addEventListener('change', e => {
  if (e.target.files[0]) importBackup(e.target.files[0]);
  e.target.value = '';
});

document.getElementById('another-entry-btn').addEventListener('click', showHome);

document.getElementById('review-btn').addEventListener('click', () => {
  buildArchive();
  showScreen('archive-screen');
});

document.getElementById('done-home-btn').addEventListener('click', showHome);
document.getElementById('archive-home-btn').addEventListener('click', showHome);
document.getElementById('browser-home-btn').addEventListener('click', showHome);

document.getElementById('viewer-next-btn').addEventListener('click', () => {
  viewerIndex = (viewerIndex + 1) % viewerQuotes.length;
  renderViewerQuote();
});

document.getElementById('viewer-back-btn').addEventListener('click', () => {
  document.getElementById('search-input').value = '';
  buildPeopleList();
  showScreen('quotes-browser-screen');
});

document.getElementById('viewer-home-btn').addEventListener('click', showHome);


// ── Tab bar ───────────────────────────────────────────────────────────────────

document.getElementById('tab-home').addEventListener('click', showHome);

document.getElementById('tab-rating').addEventListener('click', () => {
  buildCalendar();
  showScreen('rating-calendar-screen');
});

document.getElementById('tab-toolbox').addEventListener('click', () => {
  showScreen('toolbox-screen');
});


// ── Life Rating button wiring ─────────────────────────────────────────────────

document.getElementById('cal-prev-btn').addEventListener('click', () => {
  calMonth--;
  if (calMonth < 0) { calMonth = 11; calYear--; }
  buildCalendar();
});

document.getElementById('cal-next-btn').addEventListener('click', () => {
  calMonth++;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  buildCalendar();
});

document.getElementById('rate-today-btn').addEventListener('click', () => {
  openRateDay(todayKey());
});

document.getElementById('save-rating-btn').addEventListener('click', saveRating);

document.getElementById('rating-cal-btn').addEventListener('click', () => {
  buildCalendar();
  showScreen('rating-calendar-screen');
});

document.getElementById('edit-rating-btn').addEventListener('click', () => {
  const key = document.getElementById('edit-rating-btn').dataset.key;
  openRateDay(key);
});

document.getElementById('detail-cal-btn').addEventListener('click', () => {
  buildCalendar();
  showScreen('rating-calendar-screen');
});


// ── Toolbox button wiring ─────────────────────────────────────────────────────

document.getElementById('open-want-list-btn').addEventListener('click', async () => {
  wantViewFilter = 'All';
  await ensureFxRate();
  buildWantList();
  showScreen('want-list-screen');
});

document.getElementById('want-view-select').addEventListener('change', e => {
  wantViewFilter = e.target.value;
  buildWantList();
});

document.getElementById('delete-category-btn').addEventListener('click', () => {
  const cat = wantViewFilter;
  if (cat === 'All' || cat === 'Uncategorized') return;
  if (!confirm('Delete category "' + cat + '"? Its items will move to Uncategorized.')) return;

  const data = loadToolbox();
  data.items.forEach(i => { if (i.category === cat) i.category = 'Uncategorized'; });
  data.categories = data.categories.filter(c => c !== cat);
  saveToolbox(data);

  wantViewFilter = 'All';
  buildWantList();
});

document.getElementById('add-want-btn').addEventListener('click', () => openWantForm(null));

document.getElementById('want-list-back-btn').addEventListener('click', () => {
  showScreen('toolbox-screen');
});

document.querySelectorAll('.currency-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedWantCurrency = btn.dataset.currency;
    updateCurrencyButtons();
  });
});

document.getElementById('want-category-select').addEventListener('change', e => {
  if (e.target.value === '__add_new__') {
    show('want-new-category-area');
  } else {
    hide('want-new-category-area');
  }
});

document.getElementById('confirm-new-category-btn').addEventListener('click', () => {
  const name = document.getElementById('want-new-category-input').value.trim();
  if (!name) return;

  const data = loadToolbox();
  if (!data.categories.includes(name)) {
    data.categories.push(name);
    saveToolbox(data);
  }

  populateCategorySelect(data, name);
  hide('want-new-category-area');
});

document.getElementById('save-want-btn').addEventListener('click', saveWant);
document.getElementById('delete-want-btn').addEventListener('click', deleteWant);
document.getElementById('cancel-want-btn').addEventListener('click', () => {
  buildWantList();
  showScreen('want-list-screen');
});


// ── Boot ──────────────────────────────────────────────────────────────────────
showHome();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/reflection-app/service-worker.js').then(registration => {
      // Ask the browser to check for a newer service-worker.js right now
      registration.update();

      // When a new worker takes over, reload once so the new HTML/JS/CSS loads.
      // The flag stops this from looping if controllerchange fires more than once.
      let hasReloaded = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (hasReloaded) return;
        hasReloaded = true;
        location.reload();
      });
    });
  });
}
