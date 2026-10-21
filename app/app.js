// ===== YOU ARE THE CEO OF YOU — book content (adult digital edition) =====
const BOOK = {
  howItWorks: [
    ["READ", "30 entries, at your pace. Read more if you like; give actions time to work."],
    ["DAILY", "Choose one useful action. Check back on what happened."],
    ["WEEKLY", "Reuse the habit tracker and board meeting after Entries 5 and 7."],
    ["CHECK", "Score your departments at Entry 2, after Entry 15, and at Entry 29."],
    ["CONTINUE", "Entry 30 helps you plan the next 90 days. Start with one priority."]
  ],
  note: {
    title: "A note from Mark",
    sub: "Why I wrote this",
    paras: [
      "I don't come from money. I've had to work hard, make mistakes, and fail more times than I wanted to get where I am today. And let me be honest: I still haven't “made it.” I'm grateful for what I have, but I have a lot of work left to do.",
      "In high school, I started thinking about the family I hoped to have one day. I hadn't met them yet, but I wanted to make them proud. That purpose gave my decisions meaning. Today, I'm a husband, a father, and a business owner, still learning how to become the man I want to be. I'm sharing this straight from my heart because we all need guidance. We need someone to help us see what's possible, especially when we can't see it for ourselves.",
      "Along the way, I've learned how much taking responsibility matters. When I manage my time better, my family gets more of my attention. When I keep my word, people can count on me. When I learn from a mistake, I have something useful to carry forward. That's what I want to share with you. These pages bring together lessons I've learned and practices I'm still working on myself.",
      "Wherever you are in life, I hope this journal helps you see a way forward and gives you something useful to do next. You are the CEO of you. Let's take care of your company, one choice at a time."
    ],
    signoff: "Mark Hanna"
  },
  depts: {
    company: { name: "Your Personal Company", tag: "See the whole company. Choose a starting point." },
    time:    { name: "Time and Habits",       tag: "Make time. Build habits. Do the work." },
    lead:    { name: "Leadership",            tag: "Take responsibility. Make thoughtful decisions." },
    money:   { name: "Money",                 tag: "Know the numbers. Give your money a purpose." },
    health:  { name: "Health and Energy",     tag: "Care for your body, mind, and recovery." },
    rel:     { name: "Relationships",         tag: "Give attention. Communicate with respect." },
    rep:     { name: "Reputation",            tag: "Keep your word. Deliver good work." },
    learn:   { name: "Learning and Growth",   tag: "Ask, practice, and apply." },
    purpose: { name: "Purpose",               tag: "Know your reason. Let it guide your choices." },
    review:  { name: "Company Review",        tag: "Check your progress. Adjust your plan." }
  },
  scoreDepts: ["Time and Habits","Leadership","Money","Health and Energy","Relationships","Reputation","Learning and Growth","Purpose"],
  entries: [
  { n:1, dept:"lead", deptLabel:"Leadership", title:"Make the Commitment",
    sub:"Give yourself a reason to say, “I kept my word.”",
    paras:[
      "Let's be honest. You probably already know something you need to change. Maybe you keep spending money you meant to save. Putting off something important. Neglecting your health. Or telling yourself you'll start when life slows down.",
      "I've had days when keeping the business moving took everything I had. I know what it feels like to work hard and still wonder if you're getting anywhere. That's why we're starting with a commitment to yourself.",
      "You are the CEO of you. Your life is your personal company. Your time, money, health, relationships, and habits need your attention.",
      "You won't control everything that happens. You will need help along the way. But you can take responsibility for your choices and what you do next.",
      "These 30 entries give you a place to read, think, and act. Move at a pace that lets you practice what you learn.",
      "Some days you'll feel motivated. Other days you'll be tired or frustrated. When you fall short, come back. You don't have to wait until Monday to make your next good choice.",
      "Read the commitment below. Think about what it means. Sign it for yourself, then keep one small promise today."
    ],
    rr:"Your life deserves care.", pr:"Begin with one promise kept.",
    practice:{ title:"My Commitment", sub:"Make a promise you are ready to practice.",
      fields:[
        { t:"commit", lines:[
          "I commit to building my personal company.",
          "I will take responsibility for my choices and follow through on the promises I make to myself.",
          "I will keep learning, keep growing, and put what I learn into action.",
          "I will be proud of my progress without deciding I'm done growing.",
          "I will ask for help, own my mistakes, and change direction when I need to.",
          "When I fall short, I will return to the work.",
          "I will remember that becoming better helps me be there for my family, my neighbors, and my community.",
          "I commit to making time for this journal and practicing the actions I choose.",
          "I will keep building, one good choice at a time."
        ]},
        { t:"sig", k:"sig", label:"Signature" },
        { t:"area", k:"promise", label:"My promise", hint:"Keep one small promise today. Choose something you can finish." }
      ]}},
  { n:2, dept:"company", deptLabel:"Your Personal Company", title:"Build Your Departments",
    sub:"You can build something better when you know what you're working on.",
    paras:[
      "I'm going to show you how to manage yourself like a business. When you pay attention to how you operate, you give yourself a chance to improve. Improvement leads to progress. Progress gives us hope. Hope helps us find happiness. And with that happiness can come peace. To me, peace in life is one of the greatest blessings. I'm still building toward that myself.",
      "You've heard the saying: diamonds are made under pressure. I'm not telling you this will be easy. There will still be hard days and things outside your control. But a clear vision, a plan, and specific things to work on help you move forward.",
      "When everything stays in your head, you forget something, put something off, and suddenly everything feels urgent. Sometimes we create our own chaos.",
      "Let's give your life some direction. Start with these eight departments:",
      "• Time and Habits: How you use your day and repeat useful actions.\n• Leadership: The decisions you make and the responsibility you take.\n• Money: What you earn, spend, save, and owe.\n• Health and Energy: Your body, mind, and rest.\n• Relationships: How you show up for people.\n• Reputation: Your word, actions, and trust.\n• Learning and Growth: Your skills and education.\n• Purpose: Why the work matters and who you are building for.",
      "Add departments such as faith, parenting, or community service if they need their own attention. This is your company. Let's get to know it."
    ],
    rr:"Honesty gives you a starting point.", pr:"You can build from here.",
    practice:{ title:"Your Starting Point", sub:"You are scoring how a department runs, not your worth.",
      note:"Score each department from 1 to 10. 1–3: needs support now. 4–6: uneven. 7–8: mostly steady. 9–10: strong and maintained. Evidence means something real: bills paid late, walks taken, promises kept.",
      fields:[
        { t:"score", cp:"start" },
        { t:"area", k:"first", label:"The one department I will work on first" }
      ]}},
  { n:3, dept:"time", deptLabel:"Time and Habits · Direction", title:"Goals, Goals, Goals",
    sub:"Give your personal company something to work toward.",
    paras:[
      "There's no goal too big or too small to put on paper. Choose something meaningful to you and build a plan to work toward it.",
      "Maybe you want to get in the best shape of your life. Finish school. Learn a trade. Earn a promotion. Start a business. Or save your first $1,000.",
      "Once you choose a goal, reverse engineer it. That means starting with the result you want and working backward to figure out what needs to happen.",
      "If you want to get in better shape, look at your workouts, meals, and recovery. Decide what you can practice regularly and how you'll notice progress.",
      "If you want to save $1,000, choose a realistic deadline. Break the amount into smaller savings targets. Look at the spending choices that could help you get there.",
      "Turn the goal into work you can actually do. What needs to happen over the next few months? What can you finish this week? What can you do next?",
      "A big goal becomes easier to approach when you can see the smaller steps. Choose one goal to focus on first.",
      "Some goals take longer than expected. Keep learning and adjusting. Give your company a direction and yourself a clear place to begin."
    ],
    rr:"Choose a goal that matters to you.", pr:"A big goal can have a small beginning.",
    practice:{ title:"Give Your Goal a Plan", sub:"One clear goal. A number to follow. A next step.",
      note:"Example: Save $300 in 12 weeks. Starting savings: $0. Weekly action: set aside $25 if my budget allows. Progress number: dollars saved.",
      fields:[
        { t:"area", k:"goal", label:"My goal, why it matters, and target date" },
        { t:"row", items:[ {k:"pnum",label:"My progress number"}, {k:"pstart",label:"Starting amount / level"}, {k:"ptarget",label:"Target"} ]},
        { t:"area", k:"milestone", label:"This week: one milestone and the action that supports it" },
        { t:"area", k:"whenwhere", label:"When and where I will take that action" }
      ]}},
  { n:4, dept:"time", deptLabel:"Time and Habits · Scheduling", title:"Get Organized With Your Time",
    sub:"How you spend your time shapes your results.",
    paras:[
      "I find that we waste a lot of time. We pick up our phones for a minute and keep scrolling. We let whatever comes up decide how we spend the day. Then we say, “I didn't have time.”",
      "Sometimes our responsibilities really do fill the day. But sometimes we need to be honest about where our time went.",
      "Get a calendar. Written or on your phone, use what works for you. Put your fitness time on it. Meals. When you need to leave and arrive at work. Appointments, family responsibilities, and time for your goal.",
      "Be detailed. Allow time to prepare, travel, and arrive on time. Leave room for rest and unexpected problems.",
      "I personally wake up at 4:30 a.m. That quiet time lets me get a workout in and prepare my mind before the demands of the day arrive. It helps me give the work in front of me my attention.",
      "That time works for me. Find a routine that fits your life and gives you enough sleep. Then be present: in your work, your workout, and your time with family.",
      "Managing your time gives you more say in how your plans get carried out. Make time for what matters. Then make that time count."
    ],
    rr:"Your real life belongs in the plan.", pr:"Leave yourself room to breathe.",
    practice:{ title:"Give Your Next Day a Plan", sub:"Your real life belongs on the calendar.",
      note:"Include work, meals, movement, family, travel, sleep and room for surprises. Transfer this plan to the calendar you actually use.",
      fields:[
        { t:"area", k:"result", label:"One important result for this day" },
        { t:"table", k:"dayplan", cols:[ {k:"time",label:"Time / length",w:36}, {k:"what",label:"What I will do"} ], addLabel:"Add a time block" },
        { t:"area", k:"crowded", label:"What I will move or remove if the day gets crowded" }
      ]}},
  { n:5, dept:"time", deptLabel:"Time and Habits · Routines", title:"Build Habits That Move You Forward",
    sub:"Stop repeating what holds you back. Start practicing what helps you grow.",
    paras:[
      "Building good habits is a game changer. Think about the things you do every day. Some help you grow. Others hurt you, slow you down, or make life harder than it needs to be.",
      "Maybe you stay up scrolling and wake up tired. Put off important work until it becomes a problem. Or spend money without paying attention to what you can afford.",
      "Be honest with yourself. You probably already know a habit that needs to change. Stop giving that habit a free pass in your company.",
      "Choose something better to do in its place. Instead of scrolling before bed, put the phone away and prepare for the morning. Instead of starting work without direction, check your plan and choose your first task.",
      "Building a habit takes time. Make the action clear and small enough to repeat. “Walk for 10 minutes after lunch” gives you somewhere to start.",
      "Help yourself follow through. Set out your workout clothes. Put your journal where you'll see it. Make the useful choice easier to make.",
      "When you miss, look at what got in the way. Adjust and come back. One missed opportunity doesn't have to become a month of putting yourself off.",
      "Build the right habits, and you'll have routines you can count on when motivation is low."
    ],
    rr:"Practice gives you another chance.", pr:"A missed attempt need not end the effort.",
    practice:{ title:"Build a Habit You Can Repeat", sub:"Make the useful choice easier to make.",
      note:"Example: After lunch, walk for 10 minutes. On a hard day, step outside for two minutes. Track it with the seven-day tracker in the Habits tab.",
      fields:[
        { t:"area", k:"slowing", label:"A habit that is slowing me down" },
        { t:"area", k:"instead", label:"The small habit I will practice instead" },
        { t:"area", k:"when", label:"After this routine / at this time, I will…" },
        { t:"area", k:"small", label:"My smaller version for a difficult day" },
        { t:"habitbtn" }
      ]}},
  { n:6, dept:"time", deptLabel:"Time and Habits · Execution", title:"Take Your Future Seriously",
    sub:"Take a deep breath and get it done. You'll thank yourself later.",
    paras:[
      "The call you keep avoiding. The application you haven't finished. The training you keep putting off. These things matter because they're connected to something you want for your life.",
      "Take your future seriously. Give the work in front of you an honest effort. Your choices and practice help shape what you can do next.",
      "You can stay busy all day while the thing that matters most keeps waiting. Messages and small tasks can fill every hour if you let them.",
      "Choose a task from the goal you set in Entry 3. Make it clear enough to finish. A student might replace “study for the test” with “complete three practice questions and check my answers.” Clear work gives you somewhere to begin.",
      "Get what you need in front of you. Put away the distractions. Take a deep breath and begin.",
      "You may feel uncomfortable. You may need help or another attempt. Work through the next step. For a bigger task, finish the part you can reasonably tackle and decide what comes next.",
      "Rest, health, and family belong in the life you're building, too. Give your important work an honest effort. You'll thank yourself later."
    ],
    rr:"One useful step counts.", pr:"Finish this step. Then choose the next.",
    practice:{ title:"Finish One Important Task", sub:"A focused block needs a clear finish line.",
      fields:[
        { t:"area", k:"piece", label:"The piece I will finish and what finished looks like" },
        { t:"row", items:[ {k:"start",label:"When I will start"}, {k:"protect",label:"Time I will protect"} ]},
        { t:"area", k:"distraction", label:"One distraction I will remove before I begin" },
        { t:"area", k:"happened", label:"What happened / the next step if it is unfinished", hint:"If you cannot finish, choose the next step and give it a time. Carry the promise forward honestly." }
      ]}},
  { n:7, dept:"time", deptLabel:"Time and Habits · Review", title:"Celebrate the Small Wins",
    sub:"Enjoy the small steps forward. They all add up.",
    paras:[
      "You look at your goal and see how far you still have to go. It's easy to overlook what you've already done.",
      "Maybe you made time for a workout. Finished something you'd been avoiding. Put your phone away and gave someone your full attention. Give yourself credit. You followed through.",
      "You don't have to wait until you reach the big goal to enjoy making progress. When you're building something, it's easy to finish one thing and immediately start worrying about the next. Take a moment to appreciate the step you just took.",
      "Then look at what helped. Did preparing ahead make a difference? Did you ask someone for support? Keep what works.",
      "A good CEO checks the results and learns from them. Look back at your schedule and habits. Be honest about what happened.",
      "If you planned more than you could finish, build a more realistic schedule. If you kept getting distracted, change something about where or how you work.",
      "Progress won't always happen as quickly as you want. Recognize the effort you made, learn from the result, and choose your next adjustment.",
      "Be proud of how far you've come. Give yourself a clear next step. Keep building."
    ],
    rr:"You can appreciate how far you have come.", pr:"Keep the lesson as well as the win.",
    practice:{ title:"Notice the Small Wins", sub:"Give yourself credit for something real.",
      note:"Use the Weekly Board Meeting in the Board tab to review promises, not just pages read. Repeat it each week, whatever entry you are on.",
      fields:[
        { t:"table", k:"wins", cols:[ {k:"win",label:"A small win"}, {k:"helped",label:"What helped it happen"} ], addLabel:"Add a win" },
        { t:"area", k:"keep", label:"One thing I will keep doing" },
        { t:"area", k:"change", label:"One thing I will change" }
      ]}},
  { n:8, dept:"lead", deptLabel:"Leadership", title:"Own Your Next Move",
    sub:"When the plan falls apart, give yourself a chance to build a better one.",
    paras:[
      "You worked hard for something, and it didn't happen. The deal fell through. You didn't get the job. The opportunity you were counting on went to someone else.",
      "It hurts. Especially when you gave it everything you had. Give yourself time to process the disappointment. Then look for the next step available to you.",
      "Try looking at the setback as something you can learn from.",
      "I remind myself that things can happen for me, even when they feel like they're happening to me. That doesn't make every experience good or fair. It helps me look for something useful to carry forward.",
      "Maybe I need more preparation. Maybe the plan needs work. Maybe it's time to try a different direction.",
      "You won't always see the lesson right away. A conversation with someone you trust may help you see your options.",
      "Wake up and try again. Pivot when you need to. Don't give up on something meaningful just because your first approach didn't work. Look at the results. Ask for honest feedback. Change what needs changing.",
      "Sometimes moving forward means making another attempt. Sometimes it means closing one door and putting your effort somewhere better.",
      "Your Leadership department grows when you practice facing problems and working through them. One setback doesn't get to make every decision about your future. You still have a next move."
    ],
    rr:"Disappointment does not erase your possibilities.", pr:"Support can help you find another way.",
    practice:{ title:"Own Your Next Move", sub:"You can feel disappointed and still choose a next step.",
      fields:[
        { t:"area", k:"facts", label:"What happened: the facts, without judging my whole life" },
        { t:"pair", items:[ {k:"outside",label:"Outside my control"}, {k:"influence",label:"Something I can influence"} ]},
        { t:"area", k:"next", label:"My next move and the help I may need" }
      ]}},
  { n:9, dept:"lead", deptLabel:"Leadership", title:"Make the Decision",
    sub:"Time keeps moving. Give yourself a chance to move with it.",
    paras:[
      "You have an idea. You think about it. Research it. Talk about it. Weeks pass, and you're still deciding whether to start. Meanwhile, time keeps moving.",
      "Your company needs a CEO who makes decisions and takes action.",
      "You don't need every answer before taking a useful first step. If you want to apply for a job, submit the application. If you want to learn a skill, choose a course and begin.",
      "It's hard to accomplish anything when every decision stays in your head.",
      "Move quickly on choices you can reasonably change. Try something, pay attention to the results, and adjust when you learn more. If the approach doesn't work, change the approach. You'll have real experience to help you make the next decision.",
      "Some choices need more care. When a decision involves a major commitment, someone's safety, or money you can't afford to lose, take time to understand it and get advice. Set a deadline for that work so you keep moving toward a choice.",
      "Be honest with yourself: are you gathering information you need, or putting off the discomfort of starting?",
      "You won't always feel ready. Choose a sensible first step and give it your effort. Make the decision. Start the work. Learn and adjust as you go."
    ],
    rr:"Certainty is not required for every first step.", pr:"You can learn while you move forward.",
    practice:{ title:"Make a Thoughtful Decision", sub:"Move forward with a choice you can explain.",
      note:"Can I reasonably change this choice later? For a major commitment, safety issue or money I cannot afford to lose, get the facts and advice first.",
      fields:[
        { t:"area", k:"decision", label:"The decision and when I need to make it" },
        { t:"table", k:"options", fixed:["A","B"], cols:[ {k:"opt",label:"Option",w:20}, {k:"benefit",label:"Benefit"}, {k:"cost",label:"Cost / risk"} ] },
        { t:"area", k:"need", label:"What I still need to know / who can help" },
        { t:"area", k:"choice", label:"My choice and first small step" }
      ]}},
  { n:10, dept:"lead", deptLabel:"Leadership", title:"Set the Standard",
    sub:"What you repeatedly allow becomes part of how your company runs.",
    paras:[
      "Imagine a company where people keep showing up late. Deadlines come and go. Someone promises to handle a problem, but nobody follows up. Eventually, people stop expecting anything different.",
      "Now look at your personal company. Are there things you keep allowing that are making your life harder? Being late? Leaving work unfinished? Saying yes when you already know you can't follow through?",
      "Your Leadership department sets the standard for how you operate. A standard is a clear expectation you're willing to practice.",
      "“I'll be more responsible” is hard to measure. “If I can't keep a commitment, I'll communicate before the deadline” gives you something specific to live by.",
      "Standards reach every department. Your Money department needs spending limits. Your Relationships department needs time and attention. Your Reputation department needs your actions to match your word.",
      "Choose standards you can carry out. Make room for real responsibilities and unexpected problems. Then hold yourself to them.",
      "When you fall short, acknowledge it. Repair what you can. Look at what needs to change so the same problem doesn't keep repeating.",
      "You're building a company people can count on. Start by making your own expectations clear."
    ],
    rr:"Clear standards give you something to practice.", pr:"Give yourself room to correct and improve.",
    practice:{ title:"Set a Standard You Can Show", sub:"A standard becomes useful when your actions show it.",
      note:"Example: If I will miss a deadline, I will tell the person before it passes and offer a realistic new plan.",
      fields:[
        { t:"area", k:"standard", label:"My standard" },
        { t:"area", k:"visible", label:"What someone would see me doing" },
        { t:"area", k:"repair", label:"If I fall short, here is how I will repair it" }
      ]}},
  { n:11, dept:"money", deptLabel:"Money", title:"Know Your Numbers",
    sub:"Start managing the money you have while you work toward the money you want.",
    paras:[
      "I've had business income come in and go right back out to keep things operating. I know how frustrating it feels to work hard and still face a cash gap. That taught me something: money coming in does not replace a plan for money going out.",
      "It's hard to manage what you aren't measuring.",
      "Open a spreadsheet or grab a piece of paper. Start with your monthly take-home income, the money you actually receive.",
      "Then list your expenses. Separate the essentials, like housing, food, utilities, transportation, and required payments, from extras like subscriptions, upgrades, and purchases you could live without.",
      "Be honest. Something can be enjoyable without being essential.",
      "Subtract expenses from take-home income. Then give savings a place in the plan. The plan below helps you see what is left, or where there is a shortfall.",
      "Fill in your plan first. Come back with actual numbers. Your Money department needs both.",
      "Enjoy what you earn, but pay attention to the tradeoffs. Don't let things you keep buying take away the money you need for something that matters more.",
      "Choose spending to reduce or eliminate because it no longer serves your priorities. If essentials already use your income, recognize that cutting extras may only be part of the answer.",
      "Managing more money takes practice. Start building that skill with the dollars you have today."
    ],
    rr:"Your numbers do not measure your worth.", pr:"Clarity can make the next choice easier.",
    practice:{ title:"Your Monthly Money Plan", sub:"Know what comes in, what goes out, and what remains.",
      note:"Use take-home income. Estimate first, then update with real numbers. For uneven income, use a cautious estimate. Count each expense once. A negative result means the plan needs attention — look at spending, income, timing or support; do not treat a shortfall as a character flaw.",
      fields:[
        { t:"money" },
        { t:"area", k:"change", label:"One change I can make in the next seven days" }
      ]}},
  { n:12, dept:"money", deptLabel:"Money", title:"Think Beyond Today",
    sub:"Some things you pass on today make room for something more important tomorrow.",
    paras:[
      "Managing money takes discipline. Sometimes that means passing on something you want, keeping what you already have, or choosing a less expensive option.",
      "Those choices can feel like sacrifices. But putting off learning to manage money can come with a price, too.",
      "Payments pile up. A purchase you barely remember still takes money out of your account. Something unexpected happens, and there's less room to handle it.",
      "Start learning now, wherever you are in life. You don't need to punish yourself for past decisions. Look at what they taught you and make your next choice with more attention.",
      "A $600 phone upgrade would use more than half of a $1,000 savings goal. If your current phone still meets your needs, look at that tradeoff before choosing.",
      "What does it cost in full? What are you committing to? What goal will have to wait if you spend this money?",
      "Your Money department needs you to think beyond today. Enjoyment belongs in your life and your plan. Choose what you can afford and what you'll actually value.",
      "You may decide a purchase is worth it. You may decide that keeping the money matters more.",
      "Every thoughtful decision is practice. Learn to manage what you have while you work toward what you want. Give your future self something to thank you for."
    ],
    rr:"Enjoyment can belong in a thoughtful plan.", pr:"A deliberate choice is practice.",
    practice:{ title:"Make the Tradeoff Visible", sub:"A purchase gets a place in the plan, not a free pass.",
      fields:[
        { t:"area", k:"buying", label:"What I am thinking of buying and the full cost" },
        { t:"pair", items:[ {k:"needextra",label:"Need or extra?"}, {k:"ongoing",label:"Ongoing payments / added costs"} ]},
        { t:"area", k:"lessmoney", label:"The goal or expense that would get less money" },
        { t:"area", k:"lower", label:"A lower-cost choice, a wait, or a reason to buy" },
        { t:"area", k:"decision", label:"My decision and how it fits my money plan" }
      ]}},
  { n:13, dept:"money", deptLabel:"Money", title:"Build Peace for Your Family",
    sub:"Every step toward being prepared is something you do for yourself and the people you love.",
    paras:[
      "Imagine an unexpected bill showing up and knowing you have money set aside to handle it. You'd still have a problem to solve. But you'd have some breathing room. That peace is something worth building.",
      "Take care of your credit. Know what you owe, when payments are due, and what commitments you're making before adding another one.",
      "Build a cushion for emergencies and a nest egg for your family's future. Give both a place in your plan.",
      "They serve different purposes. Emergency money helps with unexpected needs. Your nest egg is something you build toward longer-term goals.",
      "I'm still building for my family. I haven't figured everything out, but every day I try to take one small step forward. We all can start with the step available to us.",
      "Maybe that means setting aside a small amount. Getting your bills organized. Checking your credit report for mistakes. Or asking for help when you're struggling to keep up.",
      "Your Money department is helping you build a life with more choices and less uncertainty.",
      "Being prepared won't guarantee that every emergency is easy. But having a plan and some resources can make a difficult moment more manageable.",
      "Take a moment to think about what that would mean for you and your family. Keep building. Small steps count here, too."
    ],
    rr:"Preparation is an act of care.", pr:"A realistic beginning is worth making.",
    practice:{ title:"Build Some Breathing Room", sub:"Choose a savings step your real budget can support.",
      note:"Choose a first emergency savings target based on a likely unexpected expense in your life. It can grow later. Keep emergency savings separate from longer-term goals. If there is no room to save yet, your first step can be making a shortfall plan or asking for help.",
      fields:[
        { t:"gaprow" },
        { t:"area", k:"setaside", label:"Amount I can set aside, how often, and where" },
        { t:"area", k:"longterm", label:"My longer-term savings goal and next step" },
        { t:"area", k:"check", label:"One bill, credit record or payment I need to check" }
      ]}},
  { n:14, dept:"health", deptLabel:"Health and Energy", title:"Invest in the Person Running the Company",
    sub:"You deserve some of the care you give to everything else.",
    paras:[
      "Think about what you take in every day. The food you eat. The people you spend time with. The things you watch and listen to. The words you repeat to yourself.",
      "Pay attention to how those things leave you feeling. Your Health and Energy department needs care, inside and out.",
      "You expect a lot from yourself. Give yourself support to meet those demands. Make room for physical activity that fits your abilities. Choose meals that help you feel nourished. Get rest. Spend time with people who respect you and encourage you to grow.",
      "And listen to how you speak to yourself. “I'm a failure” leaves you with little direction. “I made a mistake, and I can work on it” gives you somewhere to go.",
      "Encouraging yourself doesn't mean pretending everything is fine. Be honest about the problem while giving yourself a chance to improve.",
      "I make time for morning workouts because they help me prepare for the day. Find something that helps you care for yourself, too.",
      "Listen to your body. Take concerns seriously and ask for help when you need it.",
      "You don't have to be in perfect health to lead yourself well. Start with the care available to you and the choices you can make.",
      "No one gets everything right. Each day gives you another opportunity to pay attention and practice. You are worth investing in."
    ],
    rr:"You deserve care along the way.", pr:"Ask for the support you need.",
    practice:{ title:"Take Care of Your CEO", sub:"Choose care you can practice in your actual life.",
      fields:[
        { t:"table", k:"care", fixed:["Movement","Meals / hydration","Sleep / rest","People / self-talk"], cols:[ {k:"area",label:"Area",w:34}, {k:"change",label:"One useful change"} ] },
        { t:"area", k:"startwith", label:"The one change I will start with and when" },
        { t:"area", k:"support", label:"Support or professional guidance I need" }
      ]}},
  { n:15, dept:"health", deptLabel:"Health and Energy", title:"Believe in the Person in the Mirror",
    sub:"Give yourself words that help you move forward.",
    paras:[
      "Wake up. Look yourself in the mirror and try these words: “You are a winner.”",
      "If that feels useful, make it part of your routine. You can also choose words you believe, such as “I can learn and improve.”",
      "Other people may see potential you haven't recognized yet. Let their support in. Practice encouraging yourself, too.",
      "Listen to the words you use when things go wrong. “I always mess things up.” “I'll never figure this out.” One mistake becomes a judgment about your whole life.",
      "Be honest about what happened. Then give yourself a useful response. “I wasn't prepared. I can prepare better.” Or, “That didn't work. I can ask for help and try another way.”",
      "You don't have to pretend every day feels good. You can be disappointed and still believe you're capable of learning.",
      "Your Health and Energy department includes how you care for yourself through difficult moments.",
      "Being a winner doesn't mean winning every time. It means giving yourself a chance. Taking responsibility. Practicing. Coming back when the work gets difficult.",
      "Look yourself in the mirror. Speak with respect. Then give those words an action to stand behind."
    ],
    rr:"Encourage yourself with honesty and respect.", pr:"You can learn and improve.",
    practice:{ title:"Give Yourself a Useful Response", sub:"Speak with respect. Back it with one action.",
      note:"Example: “I never finish anything” becomes “I left this unfinished. I can finish one small part and ask for help.” Then choose that part.",
      fields:[
        { t:"area", k:"harsh", label:"A harsh thought I keep repeating" },
        { t:"area", k:"fairer", label:"A fairer response that I actually believe" },
        { t:"area", k:"action", label:"One action that gives that response something to stand on" }
      ]}},
  { n:16, dept:"health", deptLabel:"Health and Energy", title:"Give Yourself Time to Recharge",
    sub:"Be productive with your effort. Make room to recover.",
    paras:[
      "You worked all day. Answered messages. Jumped between tasks. Stayed late. But the important work is still waiting.",
      "Before adding more hours, look at how you're using the ones you have. Being busy doesn't always mean you're making progress.",
      "Choose what deserves your attention. Focus on it. Give yourself a clear stopping point. You may accomplish more in a focused hour than in several hours of switching between things.",
      "Then give yourself time to recharge. Don't work yourself into the ground trying to build a better life. Your Health and Energy department needs recovery.",
      "Step away from the screen. Take a walk. Enjoy a meal without checking messages. Spend time with your family and let yourself be there.",
      "You don't have to fill every quiet moment. Sometimes stepping away gives you room to see something differently.",
      "An idea may come to you. A problem may feel clearer when you return. You may simply get some rest, and that matters, too.",
      "When work is still on your mind, write down where you stopped and what needs attention next. Give yourself a place to return to.",
      "Some days will demand more from you. Keep paying attention to what that effort is costing and what you need to recover.",
      "Work with focus. Recharge with intention. Build a company you can keep running."
    ],
    rr:"Rest belongs in a full life.", pr:"A quiet moment does not need a task.",
    practice:{ title:"Make Room to Recharge", sub:"Rest belongs in the plan you are building.",
      fields:[
        { t:"area", k:"sign", label:"One sign that I need to slow down or recover" },
        { t:"pair", items:[ {k:"pause",label:"What I will pause, shorten or delegate"}, {k:"use",label:"How I will use that space"} ]},
        { t:"area", k:"protected", label:"My protected recharge time on the calendar" },
        { t:"area", k:"afterward", label:"Afterward: what helped / what still needs attention" }
      ]}},
  { n:17, dept:"rel", deptLabel:"Relationships", title:"Invest in the People Who Matter",
    sub:"The people who care about you deserve some of your time and attention.",
    paras:[
      "You've been meaning to call a friend. Someone keeps suggesting coffee. You say, “We need to catch up,” but another month passes.",
      "Life gets busy. Relationships can quietly become something we keep putting off. Your Relationships department needs regular care.",
      "Family, friends, colleagues: the people who love you, support you, and want to see you do well deserve your attention.",
      "Make the call. Get the coffee or tea. Invite someone for a walk.",
      "You can combine time together with something useful. Work out with a friend. Prepare a meal together. Spend time learning something you both enjoy.",
      "When you're together, be there. Listen. Ask how they're doing and give them room to answer.",
      "Investing time in people who matter is time worth making.",
      "Encourage the people around you to keep growing, too. Ask what they're working toward. Offer support. Celebrate their progress.",
      "Share what you're learning: “You are the CEO of you.” Let that be an invitation to recognize their ability to lead their own life. Listen to what matters to them before offering advice.",
      "You can help each other follow through, learn, and become better. Build your personal company with room for people. Give them reasons to feel valued along the way."
    ],
    rr:"People can feel a small act of attention.", pr:"An invitation is a place to start.",
    practice:{ title:"Make the Invitation", sub:"Give someone your attention, not just your good intentions.",
      fields:[
        { t:"table", k:"people", cols:[ {k:"person",label:"Person I want to invest in",w:40}, {k:"way",label:"A useful way to connect"} ], addLabel:"Add a person" },
        { t:"area", k:"invite", label:"The invitation I will make and when" },
        { t:"area", k:"present", label:"How I will be present when we are together" }
      ]}},
  { n:18, dept:"rel", deptLabel:"Relationships", title:"Be Clear. Be Respectful. Speak Up.",
    sub:"Give people a chance to understand what you feel and what you need.",
    paras:[
      "You're sharing responsibilities at home, but the same unfinished tasks keep falling to you. You say nothing.",
      "It happens again. You keep quiet. Eventually, one small thing sets you off, and everything you've been holding inside comes out at once.",
      "Practice speaking up before frustration takes over.",
      "Clear communication is a CEO strength. Your Relationships department needs you to explain what matters, make clear requests, and listen.",
      "You can be direct without being mean. “That didn't sit right with me. Can we talk about it?” “I need us to agree on who handles each task.” “I can help with this, but I can't take on everything.”",
      "Choose a time when you can both pay attention. Describe the situation without attacking the person. Tell them how it affected you and what you need moving forward. Then give them room to respond.",
      "You can control how you communicate. You can't control their reaction.",
      "Someone may feel surprised or upset and still be willing to work through it. One difficult reaction doesn't tell you everything about a relationship.",
      "Pay attention to the pattern. Can you disagree respectfully? Do they listen? Do both of you make an effort?",
      "If speaking honestly repeatedly brings insults, intimidation, or disregard for your boundaries, consider how much access that person should have to your life.",
      "Build relationships where honesty and respect go both ways."
    ],
    rr:"Respect can accompany a difficult conversation.", pr:"You can speak clearly and listen openly.",
    practice:{ title:"Say It Clearly", sub:"Be direct about the need and respectful of the person.",
      note:"A useful opening: “When ___ happened, it affected ___. I need ___. Can we agree on ___?” Describe behavior rather than labeling the person.",
      fields:[
        { t:"area", k:"facts", label:"The facts and the need I want to explain" },
        { t:"area", k:"opening", label:"My opening words" },
        { t:"area", k:"listen", label:"What I will listen for / a fair next step" }
      ]}},
  { n:19, dept:"rel", deptLabel:"Relationships", title:"Protect Your Time and Energy",
    sub:"Be thoughtful about who gets your time and how much you give.",
    paras:[
      "You finish a conversation and feel exhausted. Your goals were dismissed. Your boundaries were ignored. You spent the whole time handling someone else's problems, with no room to speak about your own.",
      "When that happens repeatedly, pay attention.",
      "People sometimes call these relationships “energy vampires.” Whatever you call them, you need to recognize when a pattern is wearing you down.",
      "Your Relationships department needs boundaries.",
      "It can be hard to reduce contact with someone, especially when you have history together. But history alone doesn't decide how much access someone gets to your life today.",
      "You can shorten a call. Decline an invitation. Stop responding immediately to every message. In some relationships, you may need more distance.",
      "Be clear and respectful about what you can give.",
      "Support goes both ways, even when it looks different from season to season. Someone going through a hard time may need more from you for a while. A friend who disagrees with you may be offering useful honesty.",
      "Look at the pattern: is there care, respect, and a willingness to listen?",
      "Then consider your own behavior. Give people the same room to protect their time that you want for yourself.",
      "Care for others without repeatedly abandoning your own needs. Your company needs your energy, too."
    ],
    rr:"Your limits deserve consideration, too.", pr:"Care does not require unlimited availability.",
    practice:{ title:"Protect Your Time With a Boundary", sub:"A clear limit can protect care, work and rest.",
      fields:[
        { t:"area", k:"pattern", label:"The pattern that is draining my time or energy" },
        { t:"area", k:"boundary", label:"My boundary: what I can offer and what I cannot" },
        { t:"area", k:"words", label:"The words I will use" },
        { t:"area", k:"follow", label:"How I will follow through / support I may need" }
      ]}},
  { n:20, dept:"rep", deptLabel:"Reputation", title:"Your Word Is Everything",
    sub:"If you say you're going to do something, do it. If you can't, communicate.",
    paras:[
      "Someone is waiting for the call you promised. A coworker needs the work you agreed to finish. Your family is counting on you to show up.",
      "To you, it may be one task among many. To them, it's something they're relying on. Your word matters. Treat it that way.",
      "We're not perfect. Plans change. Sometimes we take on more than we can handle. When that happens, communicate before someone has to chase you.",
      "Tell them what happened, take responsibility for your part, and explain what you can realistically do next. Then keep that commitment.",
      "It's taken me 10 years to build a positive reputation in my commercial real estate market. You build yours through the way you show up, handle problems, and treat people.",
      "If you want to go farther, look for ways to do more than expected.",
      "Check your work before handing it over. Include the information someone will need next. Make the extra effort that helps them get something done.",
      "Be thoughtful about what's useful and what you can deliver.",
      "Doing quality work and following through gives people reasons to trust you with more responsibility. That trust can create opportunities to grow.",
      "Build a company people feel confident counting on."
    ],
    rr:"Trust is worth tending.", pr:"Useful extra care can be simple.",
    practice:{ title:"Keep Track of Your Word", sub:"Trust grows through promises handled with care.",
      fields:[
        { t:"table", k:"promises", cols:[ {k:"promise",label:"Promise / person"}, {k:"due",label:"Due date",w:26}, {k:"next",label:"Next step or update"} ], addLabel:"Add a promise" },
        { t:"area", k:"repairneed", label:"A commitment I need to clarify or repair" },
        { t:"area", k:"extra", label:"One useful extra I can realistically deliver" }
      ]}},
  { n:21, dept:"rep", deptLabel:"Reputation", title:"Put Your Name on Good Work",
    sub:"Let your work show that you cared enough to do it well.",
    paras:[
      "You finish a task and rush to hand it over. Then someone finds missing information. A mistake you could have caught. Something unfinished that they now have to handle.",
      "You met the deadline, but you left someone else with more work. Your Reputation department includes the quality of what you deliver.",
      "Before starting, understand what's needed. Ask questions. Know what a finished job should look like. Then check your work before calling it done.",
      "Read the message before sending it. Confirm the details. Test what you can. Make sure the next person has what they need to use it.",
      "Those few minutes of care can make a difference. This applies whether you're preparing a report, repairing something, completing an assignment, or helping at home.",
      "Take pride in work that serves its purpose.",
      "You'll still make mistakes. Some tasks require skills you're learning. Ask for guidance and use feedback to improve.",
      "Aim for work that is accurate, useful, and complete enough for the job. Know when it's ready to deliver so you don't keep polishing while someone waits.",
      "Every task is a chance to practice your standards. When your name goes on something, let it represent an honest effort."
    ],
    rr:"Your effort can make another person's work easier.", pr:"Useful and ready is a worthy standard.",
    practice:{ title:"Your Final Quality Check", sub:"Put your name on work you have checked.",
      fields:[
        { t:"area", k:"work", label:"The work I am about to deliver" },
        { t:"checks", k:"qc", items:[
          "It answers the actual request.",
          "The details, names, dates and numbers are checked.",
          "The person receiving it can understand the next step.",
          "I have corrected what I can and flagged what is uncertain.",
          "I can meet the deadline or have communicated a new plan."
        ]},
        { t:"area", k:"correction", label:"One correction I will make before I send it" },
        { t:"area", k:"standard", label:"A quality standard specific to my work" }
      ]}},
  { n:22, dept:"rep", deptLabel:"Reputation", title:"Own It. Learn. Come Back Better.",
    sub:"A mistake is something you made. It doesn't have to define who you become.",
    paras:[
      "You made an error. Something you tried fell apart. Maybe you fell flat on your face in front of people whose opinions matter to you.",
      "It's embarrassing. You keep replaying it. Take a breath. You have something to learn from.",
      "Stop turning every mistake into a judgment about who you are. You can admit that you got something wrong without deciding you're a failure. The sooner you make that distinction, the sooner you can work on what comes next.",
      "Mistakes can have real consequences. Your Reputation department needs you to face those honestly.",
      "If someone was affected, acknowledge it. Listen. Correct what you can and follow through on the repair. Then look at the lesson.",
      "Did you need more preparation? Did you rush? Did you ignore something you should have checked? Ask for feedback if you need help seeing it.",
      "Turn the experience into a change in how you operate. Add a final check. Practice the skill. Ask a question sooner. Give yourself a better process for the next attempt.",
      "That's part of life: learning, growing, and returning with more understanding than you had before.",
      "You won't erase the mistake by being hard on yourself. Give the experience a useful purpose. Own your part. Use the lesson. Come back better."
    ],
    rr:"An error does not define your whole life.", pr:"Carry the lesson forward.",
    practice:{ title:"Turn the Mistake Into a Change", sub:"Take the lesson without making it your identity.",
      fields:[
        { t:"area", k:"happened", label:"What happened and the part I am responsible for" },
        { t:"area", k:"repair", label:"What I can repair and who needs an update" },
        { t:"area", k:"change", label:"The change I will make so it is less likely to repeat" },
        { t:"area", k:"practice", label:"Where I will practice or check that change" }
      ]}},
  { n:23, dept:"learn", deptLabel:"Learning and Growth", title:"Be Coachable",
    sub:"Stay open to becoming better, even when the lesson is hard to hear.",
    paras:[
      "Someone offers you feedback. Before they finish, you're already preparing your defense. You want to explain why you did it that way. Tell them what they missed. Prove you know what you're doing.",
      "Pause. There may be something here that can help you.",
      "Being coachable is one of the most valuable skills you can build. It means you're willing to listen, practice, and change. You can have experience and still have room to improve.",
      "Think about an athlete working with a coach. The coach notices something, suggests an adjustment, and the athlete practices it. That same willingness belongs in your personal company.",
      "Your Learning and Growth department needs more than information. It needs you to use what you learn.",
      "You can learn something from people at every level. A coworker. A teacher. A friend. Someone who sees your work from a different angle.",
      "Ask them to be specific. Listen to the example. Make sure you understand before responding.",
      "You don't have to accept every opinion as fact. Consider whether the advice is informed, useful, and relevant to what you're trying to accomplish. Then put a useful lesson into practice.",
      "Being coachable gives you a way to keep getting better. You're allowing new experience to improve how you operate. Stay willing to learn. Give yourself room to grow."
    ],
    rr:"You can be experienced and still learn.", pr:"A useful adjustment is worth practicing.",
    practice:{ title:"Put Feedback to Work", sub:"Being coachable shows up in what you practice.",
      fields:[
        { t:"area", k:"skill", label:"The skill I want to improve / who can give useful feedback" },
        { t:"area", k:"feedback", label:"The specific feedback I received" },
        { t:"area", k:"adjustment", label:"One adjustment I will practice and when" },
        { t:"area", k:"changed", label:"What changed after I tried it" }
      ]}},
  { n:24, dept:"learn", deptLabel:"Learning and Growth", title:"Prepare for the Opportunity You Want",
    sub:"Start building the skills your next opportunity will require.",
    paras:[
      "You want more responsibility. A better job. A chance to grow in your industry. Start preparing before the opportunity arrives.",
      "To me, three things belong in that preparation: communicate clearly, present yourself with care, and learn your field.",
      "Learn to explain what you mean. Practice writing a clear message, asking a useful question, and helping someone understand an idea. Listen carefully enough to understand what they need, too.",
      "Show up prepared and presentable. You've heard, “Dress for the job you want.” Think about what that means in your field. Clean, appropriate clothing and attention to the setting show care. You don't need an expensive wardrobe.",
      "Then build knowledge people can rely on. Choose the industry you're in, or the one you want to enter, and study it. Learn how the work gets done, what problems people face, and what good results require.",
      "Someone learning a trade might ask an experienced worker to explain a task, then practice under appropriate supervision. Ask questions. Check the standards for the work you want to do.",
      "Expertise takes sustained work, and there's always more to learn. The sooner you start, the sooner you begin building that experience.",
      "Your company grows more capable when you give your education a direction."
    ],
    rr:"Every practiced skill has a beginning.", pr:"Give yourself permission to be new.",
    practice:{ title:"Prepare for Your Opportunity", sub:"Make the next skill gap visible and workable.",
      fields:[
        { t:"area", k:"opp", label:"The opportunity I want to be ready for" },
        { t:"table", k:"gaps", cols:[ {k:"needs",label:"What the role needs"}, {k:"evidence",label:"Evidence I have"}, {k:"gap",label:"Gap to work on"} ], addLabel:"Add a row" },
        { t:"area", k:"sample", label:"One practice task / work sample I will create" },
        { t:"area", k:"feedback", label:"How and when I will get feedback" }
      ]}},
  { n:25, dept:"learn", deptLabel:"Learning and Growth", title:"Ask Better Questions. Keep Growing.",
    sub:"You don't have to wait for a classroom to start learning.",
    paras:[
      "You pick up your phone to pass a few minutes. Before you know it, you've spent half an hour scrolling. Imagine giving some of that time to something you want to understand.",
      "You have tools in your hands that can help you learn. Use them with purpose. Technology and AI give you another place to ask questions, explore ideas, and practice explaining what you know.",
      "Start with something connected to your life, your work, or your goals. Why is it done this way? What's the history behind it? Is there a better approach? How could I use this in my own life?",
      "Keep asking. Request an example. Ask for a simpler explanation. Explore a different perspective.",
      "Your Learning and Growth department gets stronger when curiosity becomes a habit.",
      "Be thoughtful about the answers. AI can make mistakes, and information online can be outdated or incorrect. Check important facts against reliable sources. Ask someone with relevant experience when you need guidance.",
      "Then put a useful lesson to work. Test an idea on a manageable task and see what you learn.",
      "You don't have to wait for a course to begin or someone to hand you an assignment. Open your phone or computer. Ask a thoughtful question. Start learning something that helps you grow."
    ],
    rr:"Curiosity gives you somewhere to begin.", pr:"Understanding grows through questions and practice.",
    practice:{ title:"Learn Something You Can Use", sub:"Ask. Check. Practice. Explain it in your own words.",
      fields:[
        { t:"area", k:"question", label:"A useful question and where I will investigate it" },
        { t:"area", k:"learned", label:"What I learned, in my own words" },
        { t:"area", k:"checked", label:"How I checked it / what I still need to verify" },
        { t:"area", k:"use", label:"One way I will use it in my personal company" }
      ]}},
  { n:26, dept:"purpose", deptLabel:"Purpose", title:"Give Yourself a Reason to Keep Going",
    sub:"When the work gets difficult, remember who and what you're building for.",
    paras:[
      "I started building myself as the CEO of my life in high school. I began to realize that the decisions I was making would affect me later.",
      "My purpose was to make my future family proud. I hadn't met them yet. There was no way to know exactly what life would look like. But I wanted my future family to have someone they could count on. That gave the choices I was making in high school a reason beyond that moment.",
      "A purpose gives you a reason to keep going when the excitement wears off.",
      "Yours can start simply. “I want to be proud of myself.” “I want a better life.” “I'm tired of feeling disappointed, and I want to make a change.”",
      "Start there. Then think about what that better life would make possible, for you and the people around you.",
      "For me, building for others gives the work lasting meaning. Being a husband, father, and leader gives me reasons to keep growing, especially when things get difficult.",
      "Your Purpose department connects the work to something you care about. A goal tells you what you want to accomplish. Your purpose helps explain why it matters.",
      "Write that reason somewhere you can return to. Let it help you choose your next step, ask for support, or find another route when a plan falls apart.",
      "Build something that matters to you. Give yourself a reason to keep showing up."
    ],
    rr:"A simple purpose can matter deeply.", pr:"Your reason does not have to impress anyone.",
    practice:{ title:"Give the Work a Reason", sub:"Your purpose can be simple and still matter.",
      fields:[
        { t:"area", k:"who", label:"Who or what I am building for" },
        { t:"area", k:"person", label:"The kind of person I want them to experience" },
        { t:"area", k:"purpose", label:"My purpose, in one honest sentence" },
        { t:"area", k:"action", label:"One action that shows that purpose this week" }
      ]}},
  { n:27, dept:"purpose", deptLabel:"Purpose", title:"Let Your Purpose Guide Your Choices",
    sub:"Give your reason for growing a place in how you live.",
    paras:[
      "You say your family matters most, but they keep getting whatever time is left. You want a different future, but your choices keep supporting the same routine.",
      "That gap can be uncomfortable to notice. Pay attention to it. Your Purpose department needs a voice in your decisions.",
      "If you're building a better life for your family, think about what they need from you now. It may be financial preparation. It may also be your patience, attention, or help with something ordinary.",
      "If you want to be proud of yourself, choose an action you'll feel good about standing behind.",
      "Your purpose becomes useful when it helps you decide what deserves your effort and what you need to pass on.",
      "You won't be able to give everything equal attention. There will be responsibilities you can't avoid and seasons that demand more from you. Be honest about those limits.",
      "Then look for one choice you can make that reflects what matters. Maybe it's protecting a family meal. Finishing the training that opens a new opportunity. Or declining something that would leave you unable to keep an important commitment.",
      "You don't need every choice to be a grand gesture. Build a personal company whose daily decisions reflect its purpose."
    ],
    rr:"Meaning can show up in ordinary choices.", pr:"Small acts can honor what matters.",
    practice:{ title:"Let Purpose Help You Choose", sub:"A meaningful yes may need a thoughtful no.",
      fields:[
        { t:"area", k:"choice", label:"A choice competing for my time, energy or money" },
        { t:"pair", items:[ {k:"supports",label:"How it supports my purpose"}, {k:"takes",label:"What it would take away from"} ]},
        { t:"area", k:"decision", label:"My decision and the tradeoff I accept" },
        { t:"area", k:"schedule", label:"How I will communicate or schedule that decision" }
      ]}},
  { n:28, dept:"purpose", deptLabel:"Purpose", title:"Be Someone People Are Glad They Met",
    sub:"Be kind. You may never know how much that moment matters.",
    paras:[
      "You cross paths with someone you haven't seen in 10 years. They remember a conversation you barely recall. You helped them understand something. Encouraged them when they were unsure. Treated them with respect when they needed it.",
      "That moment stayed with them. Being kind is always worth the effort.",
      "You'll meet people from all walks of life. Someone starting their first job. Someone leading a company. Someone going through a difficult season you know nothing about.",
      "Give each person your respect. Learn their name. Listen when they speak. Offer encouragement when you mean it. Help when you can.",
      "Your Purpose department reaches beyond your own goals. How you treat people is part of what your personal company contributes to the world.",
      "Years later, someone may remember your kindness and think of you for an introduction, a job, or an opportunity you'd hoped for.",
      "You can't predict that. You also won't always hear what your kindness meant to someone. Give it anyway.",
      "Be thoughtful about what help you can offer and follow through. You can be kind while protecting your time and setting clear boundaries.",
      "Build a life where people have good reasons to be glad your paths crossed."
    ],
    rr:"Kindness matters without a return.", pr:"Someone may remember this care.",
    practice:{ title:"Put Kindness Into Practice", sub:"Care matters even when there is nothing to gain.",
      fields:[
        { t:"area", k:"need", label:"A person or community need I have noticed" },
        { t:"area", k:"act", label:"A useful act of kindness I can offer within my limits" },
        { t:"area", k:"when", label:"When I will follow through" },
        { t:"area", k:"noticed", label:"What I noticed or learned after showing up" }
      ]}},
  { n:29, dept:"review", deptLabel:"Company Review", title:"Keep Your Company Moving Forward",
    sub:"Maintain what works. Improve what needs attention. Adjust as you learn.",
    paras:[
      "Building a company never stops. You keep paying attention to how it operates. Your personal company needs that same care.",
      "A routine that worked before may need adjusting. A department you've strengthened still needs maintenance. A goal may require a different approach.",
      "Keep monitoring. Keep learning about yourself.",
      "Go back to your first checkup in Entry 2 and the midpoint checkup after Entry 15. Use the same scoring guide to review your eight departments.",
      "Look for evidence. What are you doing differently? What still needs work? Then return to your goals.",
      "Does your daily activity support what you say you want? If you want to learn a skill, look for time spent practicing it. If you want stronger relationships, look for moments when you gave people your attention. If you want to save money, check whether your spending and saving decisions support that goal.",
      "Being busy can fill the day while an important goal keeps waiting. Review what you actually did.",
      "Give yourself credit for progress. If something isn't working, change the plan. You may need a smaller step, more time, or someone's help.",
      "Use the company report after this entry to record goals, habits and evidence of change. A good CEO checks whether the company's actions match its direction. Use what you discover to make your next plan better."
    ],
    rr:"Your company can change as life changes.", pr:"Progress gives you information, too.",
    practice:{ title:"Your Company: Then and Now", sub:"Compare the evidence. Keep the scoring guide the same.",
      note:"Score now using the same 1–10 guide. No improvement yet? That is useful information. Change the support, action or timeline. A score is a starting point for a decision, not a grade on you.",
      fields:[
        { t:"score", cp:"now", compare:true },
        { t:"area", k:"evidence", label:"My strongest evidence of change" }
      ]}},
  { n:30, dept:"review", deptLabel:"Company Review and Next Steps", title:"You're Still Building",
    sub:"Keep becoming someone you're proud to be.",
    paras:[
      "A friend from high school saw me at my son's school festival. We hadn't seen each other in more than 15 years.",
      "He told me he'd been following me on Facebook. He turned to his son and said, “I always knew he was going to make it big.”",
      "I was grateful. But I told him the truth: I'm blessed to be where I am, and I'm still building.",
      "I still have work to do. Goals to reach. Departments that need my attention. You probably do, too.",
      "Finishing this journal gives you something to build on. You've looked at your personal company. Made decisions about your time, habits, money, health, relationships, reputation, learning, and purpose.",
      "Some actions may already be helping. Others will take more practice.",
      "Keep using the daily check-in, habit tracker and weekly board meeting. They can help you carry the work beyond this journal.",
      "You don't have to change everything at once. Keep taking responsibility for your next step.",
      "When you grow, the people around you can benefit from that growth. Let your family, friends, coworkers, and neighbors experience it through how you show up.",
      "Thank you for giving this work your attention. Choose one priority for your next 90 days. Set a progress number, put the next action on your calendar and keep your weekly review.",
      "You are the CEO of you. Keep building a company you're proud to lead."
    ],
    rr:"You have something to build on.", pr:"Keep becoming someone you are proud to be.",
    practice:{ title:"Your Next 90 Days", sub:"One priority. A plan you can repeat. Regular reviews.",
      fields:[ { t:"plan90" } ]}}
  ],
  tools: [
    { id:"direction", after:2, title:"Give Your Company Direction", sub:"Choose what matters before filling the calendar.", kind:"screen",
      note:"You do not need eight goals at once. Choose one department first. Use this as your simple company plan and update it as life changes. Your rhythm: one daily action, a weekly review, a midpoint checkup after Entry 15, and a company report at the end.",
      fields:[
        { t:"area", k:"mission", label:"My mission: the kind of person I want to be and who benefits" },
        { t:"area", k:"oneyear", label:"One year from now, I want my life to look more like this" },
        { t:"area", k:"priority", label:"My first 90-day priority" },
        { t:"area", k:"pnum", label:"My progress number", hint:"Simple evidence that helps you manage. Time: planned work blocks kept. Money: dollars set aside. Relationships: time together. Learning: practice sessions." },
        { t:"area", k:"less", label:"What I will give less time, energy or money to" }
      ], rem:"A clear direction makes the next choice easier." },
    { id:"checkin", after:5, title:"Your Daily CEO Check-In", sub:"A little attention each day helps you follow through.", kind:"link", goto:"today",
      desc:"Two short check-ins each day: one useful action before the day, the result after. It lives in the Today tab.", rem:"Come back to the next useful choice." },
    { id:"tracker", after:5, title:"My Seven-Day Habit Tracker", sub:"Choose one to three habits. Mark done, missed, or rest.", kind:"link", goto:"habits",
      desc:"Plan your days, tap to log, and watch your follow-through ratio. It lives in the Habits tab.", rem:"Come back to the next useful choice." },
    { id:"board", after:7, title:"Your Weekly Board Meeting", sub:"Ten honest minutes. Three promises for the week ahead.", kind:"link", goto:"board",
      desc:"Meet once a week, whatever entry you are reading. Review last week's promise, your progress number, and set this week's promise. It lives in the Board tab.", rem:"A promise deserves a plan and a review." },
    { id:"debts", after:13, title:"Organize What You Owe", sub:"Give every bill a place and every debt a clear record.", kind:"screen",
      note:"Use current statements. Include loans, cards and other amounts owed. Record a balance once; required monthly payments belong in the monthly money plan, not the full debt balance. If a payment looks unmanageable, contact the provider early about available options. More free tools: consumerfinance.gov / Your Money, Your Goals.",
      fields:[
        { t:"table", k:"debts", sum:"bal", cols:[ {k:"debt",label:"Debt / lender"}, {k:"bal",label:"Balance $",w:20,num:true}, {k:"rate",label:"Rate / fees",w:18}, {k:"min",label:"Min. due $",w:18}, {k:"due",label:"Due date",w:18} ], addLabel:"Add a debt" },
        { t:"area", k:"next", label:"A balance or payment I need to check / my next step" }
      ], rem:"Knowing the numbers gives you a place to begin." },
    { id:"cashflow", after:13, title:"When Money Comes and Goes", sub:"A monthly total can hide a difficult week.", kind:"screen",
      note:"Add exact income and bill dates to your calendar. Start with money available for this plan, leaving out savings already reserved for other needs. Closing balance = starting balance + income − spending − savings set aside. Each closing balance carries into the next week automatically.",
      fields:[
        { t:"cashweeks" },
        { t:"area", k:"short", label:"A short week / my next call or change" }
      ], rem:"Timing belongs in the money plan, too." },
    { id:"midpoint", after:15, title:"Your Midpoint Checkup", sub:"Pause to learn before you keep adding work.", kind:"screen",
      note:"Copy of your Entry 2 scores is shown automatically. Use the same guide: 1–3 needs support; 4–6 uneven; 7–8 mostly steady; 9–10 strong and maintained. Then resume your weekly review.",
      fields:[
        { t:"score", cp:"mid", compare:true },
        { t:"area", k:"priority", label:"My priority: keep, change or ask for help" },
        { t:"area", k:"calendar", label:"The next action I will put on my calendar" }
      ], rem:"Use what you learn to improve the plan." },
    { id:"report", after:29, title:"Your Personal Company Report", sub:"Give your progress evidence you can come back to.", kind:"screen",
      note:"Keep this report. Use Entry 30 for your next 90 days. Keep reusing the daily check-in and weekly board meeting.",
      fields:[
        { t:"table", k:"goals", cols:[ {k:"goal",label:"Goal / progress number"}, {k:"started",label:"Where I started",w:25}, {k:"now",label:"Where I am now",w:25} ], addLabel:"Add a goal" },
        { t:"area", k:"milestone", label:"One goal completed or milestone reached / the evidence" },
        { t:"area", k:"habit", label:"My habit: done / planned in the latest week" },
        { t:"area", k:"promise", label:"A promise repaired or lesson I have put to work" },
        { t:"area", k:"attention", label:"What needs attention / next priority department" }
      ], rem:"Keep the evidence. Carry the lesson forward." }
  ]
};
"use strict";
/* ================= storage ================= */
const LS_KEY = "ceoyou-companion-v1";
function blankStore(){
  return { v:1, started:todayKey(), entries:{}, tools:{}, checkins:{}, habits:[],
           score:{ start:{}, mid:{}, now:{} }, board:[], plan90:{ f:{} } };
}
let S = (function(){
  try{
    const raw = localStorage.getItem(LS_KEY);
    if(raw){ const p = JSON.parse(raw); return Object.assign(blankStore(), p); }
  }catch(e){}
  return blankStore();
})();
["start","mid","now"].forEach(k=>{ if(!S.score[k]) S.score[k]={}; });
if(!S.plan90 || !S.plan90.f) S.plan90={f:{}};

let saveT=null, toastT=null;
function persist(){ try{ localStorage.setItem(LS_KEY, JSON.stringify(S)); }catch(e){} }
function save(quiet){
  clearTimeout(saveT);
  saveT=setTimeout(()=>{ persist(); if(!quiet) toast("Saved"); }, 500);
}
function toast(msg){
  const t=document.getElementById("toast"); t.textContent=msg; t.classList.add("show");
  clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove("show"), 1500);
}
function eSt(n){ if(!S.entries[n]) S.entries[n]={f:{}}; if(!S.entries[n].f) S.entries[n].f={}; return S.entries[n]; }
function tSt(id){ if(!S.tools[id]) S.tools[id]={f:{}}; if(!S.tools[id].f) S.tools[id].f={}; return S.tools[id]; }

/* ================= helpers ================= */
const $ = s=>document.querySelector(s);
function esc(s){ return String(s==null?"":s).replace(/[&<>"]/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }
function div(cls, html){ const d=document.createElement("div"); if(cls) d.className=cls; if(html!=null) d.innerHTML=html; return d; }
function todayKey(d){ d=d||new Date(); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function addDays(key, n){ const p=key.split("-"); const d=new Date(+p[0], +p[1]-1, +p[2]); d.setDate(d.getDate()+n); return todayKey(d); }
function fmtLong(d){ return d.toLocaleDateString(undefined,{weekday:"long", month:"long", day:"numeric"}); }
function fmtShort(key){ const p=key.split("-"); const d=new Date(+p[0], +p[1]-1, +p[2]); return d.toLocaleDateString(undefined,{month:"short", day:"numeric", year:"numeric"}); }
function weekDates(){
  const d=new Date(); const dow=(d.getDay()+6)%7; const mon=new Date(d); mon.setDate(d.getDate()-dow);
  return Array.from({length:7},(_,i)=>{ const x=new Date(mon); x.setDate(mon.getDate()+i); return x; });
}
function money(n){ return (n<0?"-$":"$")+Math.abs(n).toLocaleString(undefined,{maximumFractionDigits:0}); }
function num(v){ const n=parseFloat(String(v==null?"":v).replace(/[^0-9.\-]/g,"")); return isNaN(n)?0:n; }
function hasVal(o){ return o && Object.values(o).some(v=>typeof v==="string" ? v.trim() : (Array.isArray(v)? v.some(hasVal) : v)); }

/* ================= generic field renderer ================= */
function renderFields(fields, st, px){
  const root=document.createElement("div");
  fields.forEach(fd=>{
    if(fd.t==="area" || fd.t==="text"){
      const w=div("fld");
      w.innerHTML = `<label for="f_${px}_${fd.k}">${esc(fd.label)}</label>` +
        (fd.hint?`<div class="hint">${esc(fd.hint)}</div>`:"");
      const inp=document.createElement(fd.t==="area"?"textarea":"input");
      inp.className = fd.t==="area"?"ta":"inp";
      inp.id = `f_${px}_${fd.k}`;
      inp.value = st.f[fd.k]||"";
      inp.addEventListener("input", ()=>{ st.f[fd.k]=inp.value; save(); });
      w.appendChild(inp); root.appendChild(w);
    }
    else if(fd.t==="row"){
      const r=div("row2");
      fd.items.forEach(it=>{
        const w=div("fld");
        w.innerHTML=`<label for="f_${px}_${it.k}">${esc(it.label)}</label>`;
        const inp=document.createElement("input"); inp.className="inp"; inp.id=`f_${px}_${it.k}`;
        inp.value=st.f[it.k]||"";
        inp.addEventListener("input",()=>{ st.f[it.k]=inp.value; save(); });
        w.appendChild(inp); r.appendChild(w);
      });
      root.appendChild(r);
    }
    else if(fd.t==="pair"){
      const r=div("row2");
      fd.items.forEach(it=>{
        const w=div("fld");
        w.innerHTML=`<label for="f_${px}_${it.k}">${esc(it.label)}</label>`;
        const ta=document.createElement("textarea"); ta.className="ta"; ta.id=`f_${px}_${it.k}`;
        ta.value=st.f[it.k]||"";
        ta.addEventListener("input",()=>{ st.f[it.k]=ta.value; save(); });
        w.appendChild(ta); r.appendChild(w);
      });
      root.appendChild(r);
    }
    else if(fd.t==="commit"){
      const c=div("commit-card");
      c.innerHTML=fd.lines.map(l=>`<p>${esc(l)}</p>`).join("");
      root.appendChild(c);
    }
    else if(fd.t==="sig"){
      const w=div("fld");
      w.innerHTML=`<label for="f_${px}_sig">Signature</label>`;
      const inp=document.createElement("input"); inp.className="sig-line"; inp.id=`f_${px}_sig`;
      inp.placeholder="Sign your name"; inp.autocomplete="name";
      inp.value=st.f.sig||"";
      const dt=div("sig-date", st.f.sigDate?("Signed "+fmtShort(st.f.sigDate)):"");
      inp.addEventListener("input",()=>{
        st.f.sig=inp.value;
        if(inp.value.trim() && !st.f.sigDate){ st.f.sigDate=todayKey(); dt.textContent="Signed "+fmtShort(st.f.sigDate); }
        if(!inp.value.trim()){ st.f.sigDate=""; dt.textContent=""; }
        save();
      });
      w.appendChild(inp); w.appendChild(dt); root.appendChild(w);
    }
    else if(fd.t==="table"){ root.appendChild(renderTable(fd, st, px)); }
    else if(fd.t==="checks"){ root.appendChild(renderChecks(fd, st, px)); }
    else if(fd.t==="score"){ root.appendChild(renderScoreEditor(fd.cp, fd.compare)); }
    else if(fd.t==="money"){ root.appendChild(renderMoneyPlan(st, px)); }
    else if(fd.t==="gaprow"){ root.appendChild(renderGapRow(st, px)); }
    else if(fd.t==="cashweeks"){ root.appendChild(renderCashWeeks(st, px)); }
    else if(fd.t==="plan90"){ root.appendChild(renderPlan90()); }
    else if(fd.t==="habitbtn"){
      const b=document.createElement("button"); b.type="button"; b.className="btn ghost";
      b.textContent="+ Add this habit to my tracker";
      b.addEventListener("click", ()=>{
        const name=(st.f.instead||"").trim(), small=(st.f.small||"").trim();
        if(!name){ toast("Write the habit first"); return; }
        if(S.habits.length>=3){ toast("Tracker is full (3 habits)"); return; }
        S.habits.push({ id:Date.now(), name:name, small:small, days:[1,1,1,1,1,0,0], log:{} });
        persist(); toast("Added to Habits"); closeSheet(); switchTab("habits");
      });
      root.appendChild(b);
    }
  });
  return root;
}

function renderTable(fd, st, px){
  const wrap=div("fld");
  if(fd.label) wrap.innerHTML=`<label>${esc(fd.label)}</label>`;
  const tbl=document.createElement("table"); tbl.className="tbl";
  const head="<tr>"+fd.cols.map(c=>`<th${c.w?` style="width:${c.w}%"`:""}>${esc(c.label)}</th>`).join("")+"</tr>";
  const tbody=document.createElement("tbody");
  tbl.innerHTML=`<thead>${head}</thead>`; tbl.appendChild(tbody);
  const fixed=!!fd.fixed;
  if(!Array.isArray(st.f[fd.k])) st.f[fd.k]=[];
  const rows=st.f[fd.k];
  if(fixed){ while(rows.length<fd.fixed.length) rows.push({}); }
  else if(rows.length===0){ rows.push({},{}); }
  const sumEl = fd.sum ? div("sumrow") : null;
  function recalcSum(){
    if(!sumEl) return;
    const total=rows.reduce((a,r)=>a+num(r[fd.sum]),0);
    sumEl.innerHTML=`<span>Total listed</span><span>${money(total)}</span>`;
  }
  function drawRows(){
    tbody.innerHTML="";
    rows.forEach((r,ri)=>{
      const tr=document.createElement("tr");
      fd.cols.forEach((c,ci)=>{
        const td=document.createElement("td");
        if(fixed && ci===0){
          td.className="rowlabel"; td.textContent=fd.fixed[ri];
        } else {
          const inp=document.createElement("input");
          inp.className="inp"+(c.num?" num":""); inp.id=`f_${px}_${fd.k}_${ri}_${c.k}`;
          if(c.num) inp.inputMode="decimal";
          inp.value=r[c.k]||"";
          inp.addEventListener("input",()=>{ r[c.k]=inp.value; recalcSum(); save(); });
          td.appendChild(inp);
        }
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    recalcSum();
  }
  drawRows();
  wrap.appendChild(tbl);
  if(sumEl) wrap.appendChild(sumEl);
  if(!fixed){
    const add=document.createElement("button"); add.type="button"; add.className="btn ghost sm";
    add.textContent="+ "+(fd.addLabel||"Add row");
    add.addEventListener("click",()=>{ rows.push({}); drawRows(); save(true); });
    wrap.appendChild(add);
  }
  return wrap;
}

function renderChecks(fd, st, px){
  const ul=document.createElement("ul"); ul.className="ckl";
  if(!Array.isArray(st.f[fd.k])) st.f[fd.k]=fd.items.map(()=>false);
  fd.items.forEach((label,i)=>{
    const li=document.createElement("li"); li.className="ck"+(st.f[fd.k][i]?" on":"");
    li.setAttribute("role","checkbox"); li.setAttribute("aria-checked", String(!!st.f[fd.k][i])); li.tabIndex=0; li.id=`f_${px}_${fd.k}_${i}`;
    li.innerHTML=`<span class="ckbox"><svg viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5"/></svg></span><span>${esc(label)}</span>`;
    const flip=()=>{ st.f[fd.k][i]=!st.f[fd.k][i]; li.classList.toggle("on", st.f[fd.k][i]); li.setAttribute("aria-checked", String(!!st.f[fd.k][i])); save(); };
    li.addEventListener("click", flip);
    li.addEventListener("keydown", e=>{ if(e.key===" "||e.key==="Enter"){ e.preventDefault(); flip(); } });
    ul.appendChild(li);
  });
  return ul;
}

/* -------- money plan (entry 11) -------- */
function renderMoneyPlan(st, px){
  const wrap=div("fld");
  const rows=[
    {k:"a",label:"Take-home income (A)",income:true},
    {k:"housing",label:"Housing / utilities"},
    {k:"food",label:"Food / transportation"},
    {k:"ess",label:"Other essentials / required debt payments"},
    {k:"extras",label:"Extras / subscriptions"}
  ];
  const tbl=document.createElement("table"); tbl.className="tbl";
  tbl.innerHTML=`<thead><tr><th>Monthly item</th><th style="width:21%">Plan $</th><th style="width:21%">Actual $</th></tr></thead>`;
  const tbody=document.createElement("tbody"); tbl.appendChild(tbody);
  rows.forEach(r=>{
    const tr=document.createElement("tr");
    tr.innerHTML=`<td class="rowlabel">${esc(r.label)}</td>`;
    ["p","x"].forEach(side=>{
      const td=document.createElement("td");
      const inp=document.createElement("input");
      inp.className="inp num"; inp.inputMode="decimal"; inp.id=`f_${px}_mp_${r.k}_${side}`;
      inp.value=st.f["mp_"+r.k+"_"+side]||"";
      inp.addEventListener("input",()=>{ st.f["mp_"+r.k+"_"+side]=inp.value; calc(); save(); });
      td.appendChild(inp); tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  wrap.appendChild(tbl);
  const calcB=div("calcrow"), calcC=div("calcrow");
  wrap.appendChild(calcB); wrap.appendChild(calcC);
  const r2=div("row2");
  [["d","Emergency savings (D)"],["e","Other goal savings (E)"]].forEach(pair=>{
    const w=div("fld");
    w.innerHTML=`<label for="f_${px}_mp_${pair[0]}">${esc(pair[1])}</label>`;
    const inp=document.createElement("input"); inp.className="inp num"; inp.inputMode="decimal"; inp.id=`f_${px}_mp_${pair[0]}`;
    inp.value=st.f["mp_"+pair[0]]||"";
    inp.addEventListener("input",()=>{ st.f["mp_"+pair[0]]=inp.value; calc(); save(); });
    w.appendChild(inp); r2.appendChild(w);
  });
  wrap.appendChild(r2);
  const calcU=div("calcrow hero");
  wrap.appendChild(calcU);
  function side(s){
    const B=["housing","food","ess","extras"].reduce((a,k)=>a+num(st.f["mp_"+k+"_"+s]),0);
    const A=num(st.f["mp_a_"+s]);
    return {A,B,C:A-B};
  }
  function calc(){
    const p=side("p"), x=side("x");
    calcB.innerHTML=`<span>All spending (B)</span><span class="val">plan ${money(p.B)} · actual ${money(x.B)}</span>`;
    calcC.innerHTML=`<span>Money left: A − B (C)</span><span class="val">plan ${money(p.C)} · actual ${money(x.C)}</span>`;
    calcC.classList.toggle("neg", p.C<0||x.C<0);
    const U=p.C-num(st.f.mp_d)-num(st.f.mp_e);
    calcU.innerHTML=`<span>${U<0?"Short this month":"Unassigned"}</span><span class="val">${money(U)}</span>`;
    calcU.classList.toggle("neg", U<0);
  }
  calc();
  return wrap;
}

/* -------- emergency gap row (entry 13) -------- */
function renderGapRow(st, px){
  const r=div("row2");
  const defs=[["target","First emergency target $"],["saved","Already set aside $"]];
  const gapW=div("fld");
  gapW.innerHTML=`<label>Gap: target − saved</label>`;
  const gapV=div("calcrow"); gapW.appendChild(gapV);
  function calc(){
    const g=num(st.f.target)-num(st.f.saved);
    gapV.innerHTML=`<span>To go</span><span class="val">${money(Math.max(g,0))}</span>`;
  }
  defs.forEach(d=>{
    const w=div("fld");
    w.innerHTML=`<label for="f_${px}_${d[0]}">${esc(d[1])}</label>`;
    const inp=document.createElement("input"); inp.className="inp num"; inp.inputMode="decimal"; inp.id=`f_${px}_${d[0]}`;
    inp.value=st.f[d[0]]||"";
    inp.addEventListener("input",()=>{ st.f[d[0]]=inp.value; calc(); save(); });
    w.appendChild(inp); r.appendChild(w);
  });
  r.appendChild(gapW); calc();
  return r;
}

/* -------- cash weeks (tool) -------- */
function renderCashWeeks(st, px){
  const wrap=div("fld");
  const w0=div("fld");
  w0.innerHTML=`<label for="f_${px}_cwstart">Starting available balance $ / month</label>`;
  const sb=document.createElement("input"); sb.className="inp num"; sb.inputMode="decimal"; sb.id=`f_${px}_cwstart`;
  sb.value=st.f.cwstart||"";
  w0.appendChild(sb); wrap.appendChild(w0);
  if(!Array.isArray(st.f.cw)) st.f.cw=[{},{},{},{},{}];
  const tbl=document.createElement("table"); tbl.className="tbl";
  tbl.innerHTML=`<thead><tr><th>Wk</th><th>Income $</th><th>Spending $</th><th>Savings $</th><th style="width:22%">End $</th></tr></thead>`;
  const tbody=document.createElement("tbody"); tbl.appendChild(tbody);
  const endCells=[];
  st.f.cw.forEach((r,ri)=>{
    const tr=document.createElement("tr");
    tr.innerHTML=`<td class="rowlabel">${ri+1}</td>`;
    ["inc","sp","sv"].forEach(k=>{
      const td=document.createElement("td");
      const inp=document.createElement("input"); inp.className="inp num"; inp.inputMode="decimal"; inp.id=`f_${px}_cw_${ri}_${k}`;
      inp.value=r[k]||"";
      inp.addEventListener("input",()=>{ r[k]=inp.value; calc(); save(); });
      td.appendChild(inp); tr.appendChild(td);
    });
    const tdE=document.createElement("td"); tdE.className="rowlabel num"; endCells.push(tdE); tr.appendChild(tdE);
    tbody.appendChild(tr);
  });
  sb.addEventListener("input",()=>{ st.f.cwstart=sb.value; calc(); save(); });
  function calc(){
    let bal=num(st.f.cwstart);
    st.f.cw.forEach((r,ri)=>{
      bal = bal + num(r.inc) - num(r.sp) - num(r.sv);
      endCells[ri].textContent = money(bal);
      endCells[ri].style.color = bal<0 ? "var(--warn)" : "var(--ink)";
    });
  }
  calc();
  wrap.appendChild(tbl);
  return wrap;
}

/* -------- 90-day plan (entry 30 / company) -------- */
function renderPlan90(){
  const st=S.plan90;
  return renderFields([
    { t:"area", k:"priority", label:"Priority department and one result I want" },
    { t:"row", items:[ {k:"pnum",label:"Progress number"}, {k:"pstart",label:"Starting point"}, {k:"ptarget",label:"90-day target"} ]},
    { t:"row", items:[ {k:"d30",label:"By day 30"}, {k:"d60",label:"By day 60"}, {k:"d90",label:"By day 90"} ]},
    { t:"area", k:"nextaction", label:"My next seven-day action and its calendar time" },
    { t:"area", k:"obstacle", label:"Obstacle / smaller backup step / who can help" },
    { t:"row", items:[ {k:"reviewtime",label:"Weekly review time"}, {k:"reviewdate",label:"90-day review date"} ]}
  ], st, "p90");
}

/* ================= scorecard editor + chart ================= */
const CP_META={ start:{label:"Start", at:"Entry 2"}, mid:{label:"Midpoint", at:"after Entry 15"}, now:{label:"Now", at:"Entry 29"} };
function renderScoreEditor(cp, compare){
  const root=div("");
  BOOK.scoreDepts.forEach((name,i)=>{
    if(!S.score[cp][i]) S.score[cp][i]={};
    const rec=S.score[cp][i];
    const row=div("dept-row");
    const hd=div("hd");
    hd.appendChild(div("nm", esc(name)));
    const stp=div("stepper");
    const minus=document.createElement("button"); minus.type="button"; minus.textContent="−"; minus.setAttribute("aria-label","Lower "+name);
    const val=div("v"+(rec.s?"":" unset"), rec.s?String(rec.s):"tap +");
    const plus=document.createElement("button"); plus.type="button"; plus.textContent="+"; plus.setAttribute("aria-label","Raise "+name);
    stp.append(minus,val,plus); hd.appendChild(stp); row.appendChild(hd);
    const bar=div("scorebar"); const fill=document.createElement("i"); fill.style.width=(rec.s?rec.s*10:0)+"%"; bar.appendChild(fill); row.appendChild(bar);
    if(compare){
      const bits=[];
      ["start","mid","now"].forEach(k=>{
        if(k!==cp && S.score[k][i] && S.score[k][i].s) bits.push(CP_META[k].label+" "+S.score[k][i].s);
      });
      if(bits.length) row.appendChild(div("prevref", esc(bits.join(" · "))));
    }
    const ta=document.createElement("textarea"); ta.className="ta ev-ta"; ta.rows=2; ta.id=`sc_${cp}_${i}_ev`;
    ta.placeholder="Evidence from real life";
    ta.value=rec.ev||"";
    ta.addEventListener("input",()=>{ rec.ev=ta.value; save(); });
    row.appendChild(ta);
    function set(n){
      rec.s=Math.min(10,Math.max(1,n));
      val.textContent=String(rec.s); val.classList.remove("unset");
      fill.style.width=(rec.s*10)+"%";
      save();
      const ch=$("#scorechart"); if(ch) drawScoreChart(ch);
    }
    minus.addEventListener("click",()=>set((rec.s||6)-1));
    plus.addEventListener("click",()=>set((rec.s||4)+1));
    root.appendChild(row);
  });
  return root;
}

function drawScoreChart(mount){
  const any=["start","mid","now"].some(k=>Object.values(S.score[k]).some(r=>r&&r.s));
  if(!any){
    mount.innerHTML=`<div class="notebox">Your chart appears here once you score a checkpoint. Start with Entry 2.</div>`;
    return;
  }
  const W=360, rowH=46, padT=8, padL=10, padR=34, labelH=15;
  const H=padT+BOOK.scoreDepts.length*rowH;
  const x=v=>padL+ (v-1)/9 * (W-padL-padR);
  let s=`<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Department scores by checkpoint">`;
  BOOK.scoreDepts.forEach((name,i)=>{
    const yTop=padT+i*rowH, yDot=yTop+labelH+14;
    s+=`<text x="${padL}" y="${yTop+10}" font-size="11.5" font-weight="700" fill="var(--ink2)">${esc(name)}</text>`;
    s+=`<line x1="${x(1)}" y1="${yDot}" x2="${x(10)}" y2="${yDot}" stroke="var(--line)" stroke-width="2" stroke-linecap="round"/>`;
    [1,5,10].forEach(t=>{ s+=`<line x1="${x(t)}" y1="${yDot-3}" x2="${x(t)}" y2="${yDot+3}" stroke="var(--line)" stroke-width="1.5"/>`; });
    const pts=[];
    [["start","--c1",4.5],["mid","--c2",4.5],["now","--c3",5.5]].forEach(cfg=>{
      const rec=S.score[cfg[0]][i];
      if(rec && rec.s) pts.push({cp:cfg[0], v:rec.s, c:cfg[1], r:cfg[2]});
    });
    if(pts.length>1){
      const vs=pts.map(p=>p.v);
      s+=`<line x1="${x(Math.min.apply(null,vs))}" y1="${yDot}" x2="${x(Math.max.apply(null,vs))}" y2="${yDot}" stroke="var(--ink3)" stroke-width="2"/>`;
    }
    pts.forEach(p=>{
      s+=`<circle cx="${x(p.v)}" cy="${yDot}" r="${p.r}" fill="var(${p.c})" stroke="var(--bg)" stroke-width="1.5"/>`;
    });
    const nowRec=S.score.now[i], latest=pts.length?pts[pts.length-1]:null;
    if(latest){
      s+=`<text x="${x(latest.v)+ (latest.v>8?-12:10)}" y="${yDot+4}" font-size="12" font-weight="800" fill="var(--ink)">${latest.v}</text>`;
    }
  });
  s+="</svg>";
  mount.innerHTML=s;
}
/* ================= sheet ================= */
let sheetOpen=false;
function openSheet(kicker, title, build){
  $("#sheetKicker").textContent=kicker; $("#sheetTitle").textContent=title;
  const inner=$("#sheetInner"); inner.innerHTML=""; build(inner);
  const bd=$("#backdrop"); bd.hidden=false;
  requestAnimationFrame(()=>{ bd.classList.add("show"); $("#sheetwrap").classList.add("show"); });
  $("#sheetBody").scrollTop=0;
  sheetOpen=true; document.documentElement.style.overflow="hidden";
}
function closeSheet(){
  if(!sheetOpen) return;
  sheetOpen=false;
  const bd=$("#backdrop");
  bd.classList.remove("show"); $("#sheetwrap").classList.remove("show");
  setTimeout(()=>{ bd.hidden=true; }, 380);
  document.documentElement.style.overflow="";
  renderScreen(currentTab);
}

/* ================= entry sheet ================= */
function buildEntryInto(inner, n){
  const E=BOOK.entries[n-1], st=eSt(n), D=BOOK.depts[E.dept];
  $("#sheetKicker").textContent="Entry "+n+" of 30";
  $("#sheetTitle").textContent=E.title;
  inner.innerHTML="";
  const head=div("");
  head.innerHTML=
    `<p class="eyebrow">${esc(E.deptLabel)}</p>`+
    `<h2 class="read-title">${esc(E.title)}</h2>`+
    `<p class="read-sub">${esc(E.sub)}</p>`+
    `<div class="dept-tag">${esc(D.tag)}</div>`;
  inner.appendChild(head);
  const body=div("read-body");
  body.innerHTML=E.paras.map(p=>`<p>${esc(p)}</p>`).join("");
  inner.appendChild(body);
  inner.appendChild(div("reminder",`<div><span class="rl">A reminder for you</span><span class="rt">${esc(E.rr)}</span></div>`));
  inner.appendChild(div("practice-brk","<span>Practice</span>"));
  const P=E.practice;
  inner.appendChild(div("", `<h3 class="p-title">${esc(P.title)}</h3><p class="p-sub">${esc(P.sub)}</p>`+(P.note?`<div class="notebox">${esc(P.note)}</div>`:"")));
  inner.appendChild(renderFields(P.fields, st, "e"+n));
  inner.appendChild(div("reminder",`<div><span class="rl">A reminder for you</span><span class="rt">${esc(E.pr)}</span></div>`));
  const done=document.createElement("button"); done.type="button";
  done.className="btn donebtn"+(st.done?" done":"");
  done.textContent= st.done ? "✓ Completed"+(st.doneAt?" · "+fmtShort(st.doneAt):"") : "Mark Entry "+n+" complete";
  done.addEventListener("click",()=>{
    st.done=!st.done;
    if(st.done){ st.doneAt=todayKey(); confettiAt(done); toast(n===30?"Journal complete. Keep building.":"Entry "+n+" complete"); }
    done.className="btn donebtn"+(st.done?" done":"");
    done.textContent= st.done ? "✓ Completed · "+fmtShort(st.doneAt) : "Mark Entry "+n+" complete";
    persist();
  });
  const navr=div("entry-nav");
  navr.appendChild(done);
  inner.appendChild(navr);
  const pn=div("entry-nav");
  if(n>1){ const b=document.createElement("button"); b.type="button"; b.className="btn sec"; b.textContent="← Entry "+(n-1);
    b.addEventListener("click",()=>{ buildEntryInto(inner,n-1); $("#sheetBody").scrollTop=0; }); pn.appendChild(b); }
  if(n<30){ const b=document.createElement("button"); b.type="button"; b.className="btn sec"; b.textContent="Entry "+(n+1)+" →";
    b.addEventListener("click",()=>{ buildEntryInto(inner,n+1); $("#sheetBody").scrollTop=0; }); pn.appendChild(b); }
  inner.appendChild(pn);
}
function openEntry(n){ openSheet("Entry "+n+" of 30", BOOK.entries[n-1].title, inner=>buildEntryInto(inner,n)); }

function openTool(id){
  const T=BOOK.tools.find(t=>t.id===id);
  if(!T) return;
  if(T.kind==="link"){ switchTab(T.goto); return; }
  openSheet("Tools for your company", T.title, inner=>{
    inner.innerHTML=`<p class="eyebrow">Simple tools. Honest progress.</p>`+
      `<h2 class="read-title" style="font-size:23px">${esc(T.title)}</h2>`+
      `<p class="read-sub" style="font-size:16px">${esc(T.sub)}</p>`+
      (T.note?`<div class="notebox">${esc(T.note)}</div>`:"");
    inner.appendChild(renderFields(T.fields, tSt(id), id));
    inner.appendChild(div("reminder",`<div><span class="rl">A reminder for you</span><span class="rt">${esc(T.rem)}</span></div>`));
  });
}

function openNote(){
  openSheet("You are the CEO of you", "A note from Mark", inner=>{
    inner.innerHTML=`<p class="eyebrow">Why I wrote this</p><h2 class="read-title">${esc(BOOK.note.title)}</h2>`;
    const b=div("read-body");
    b.innerHTML=BOOK.note.paras.map(p=>`<p>${esc(p)}</p>`).join("")+
      `<p style="font-weight:700;font-family:var(--font-ui);font-size:15px">— ${esc(BOOK.note.signoff)}</p>`;
    inner.appendChild(b);
    inner.appendChild(div("practice-brk","<span>How this works</span>"));
    const ul=div("");
    ul.innerHTML=BOOK.howItWorks.map(x=>
      `<div class="calcrow" style="justify-content:flex-start;gap:12px;font-weight:600;font-size:13.5px">`+
      `<span style="flex:none;font-weight:800;letter-spacing:.08em;color:var(--accent-ink);min-width:74px">${esc(x[0])}</span><span style="text-align:left">${esc(x[1])}</span></div>`).join("");
    inner.appendChild(ul);
    inner.appendChild(div("reminder",`<div><span class="rl">A reminder for you</span><span class="rt">You can start where you are and build from there.</span></div>`));
  });
}

/* ================= TODAY ================= */
function dayHasActivity(key){
  const c=S.checkins[key];
  if(c && ((c.before||"").trim()||(c.after||"").trim())) return true;
  return S.habits.some(h=>h.log && h.log[key]==="done");
}
function streakCount(){
  let n=0, k=todayKey();
  if(!dayHasActivity(k)) k=addDays(k,-1);
  while(dayHasActivity(k) && n<3650){ n++; k=addDays(k,-1); }
  return n;
}
const ALL_REMINDERS=[];
BOOK.entries.forEach(e=>{ ALL_REMINDERS.push(e.rr, e.pr); });
function renderToday(){
  const el=$("#scr-today"); el.innerHTML="";
  const now=new Date(), hr=now.getHours();
  const greet= hr<12?"Good morning, CEO.":(hr<17?"Good afternoon, CEO.":"Good evening, CEO.");
  const doneCount=BOOK.entries.filter(e=>S.entries[e.n]&&S.entries[e.n].done).length;
  const dayN=Math.max(1, Math.round((new Date(todayKey()) - new Date(S.started))/86400000)+1);
  const stk=streakCount();
  const hero=div("day-hero");
  hero.innerHTML=`<div class="date">${esc(fmtLong(now))}</div><h1>${esc(greet)}</h1>`+
    `<div class="statrow">`+
    `<div class="stat"><div class="n">${dayN}</div><div class="l">Day</div></div>`+
    `<div class="stat hot"><div class="n">${stk}<em> day${stk===1?"":"s"}</em></div><div class="l">Streak</div></div>`+
    `<div class="stat"><div class="n">${doneCount}<em> / 30</em></div><div class="l">Entries</div></div></div>`;
  el.appendChild(hero);
  if(!S.noticeOff){
    const nb=div("card flat");
    nb.innerHTML=`<p class="eyebrow">Early access</p><p class="small muted" style="margin:0 0 12px">Your journal saves to this device. Accounts that sync between devices are coming — until then, stick with one phone or tablet, and add this page to your home screen so it is always one tap away.</p>`;
    const ok=document.createElement("button"); ok.type="button"; ok.className="btn sec sm"; ok.textContent="Got it";
    ok.addEventListener("click",()=>{ S.noticeOff=true; persist(); nb.remove(); });
    nb.appendChild(ok); el.appendChild(nb);
  }
  const doy=Math.floor((now - new Date(now.getFullYear(),0,0))/86400000);
  el.appendChild(div("quote-card",`<span class="rl">A reminder for you</span><span class="q">${esc(ALL_REMINDERS[doy % ALL_REMINDERS.length])}</span>`));

  /* check-in */
  if(!S.checkins[todayKey()]) S.checkins[todayKey()]={};
  const ci=S.checkins[todayKey()];
  const card=div("card");
  card.innerHTML=`<p class="eyebrow">Your daily CEO check-in</p><p class="tiny muted" style="margin:0 0 12px">A little attention each day helps you follow through.</p>`;
  const seg=div("checkin-seg");
  const bBefore=document.createElement("button"); bBefore.type="button"; bBefore.textContent="Before the day";
  const bAfter=document.createElement("button"); bAfter.type="button"; bAfter.textContent="After the day";
  seg.append(bBefore,bAfter); card.appendChild(seg);
  const pane=div("");
  card.appendChild(pane);
  function paint(which){
    bBefore.classList.toggle("on", which==="before"); bAfter.classList.toggle("on", which==="after");
    pane.innerHTML="";
    const w=div("fld");
    const isB=which==="before";
    w.innerHTML=`<label for="ci_${which}">${isB?"My one useful action and when I will do it":"Result / lesson / next step if unfinished"}</label>`;
    const ta=document.createElement("textarea"); ta.className="ta"; ta.id="ci_"+which;
    ta.placeholder=isB?"One action. Small enough to finish today.":"What happened? What did it teach you?";
    ta.value=ci[which]||"";
    ta.addEventListener("input",()=>{ ci[which]=ta.value; save(); });
    w.appendChild(ta); pane.appendChild(w);
  }
  bBefore.addEventListener("click",()=>paint("before"));
  bAfter.addEventListener("click",()=>paint("after"));
  paint((ci.before||"").trim()? "after":"before");
  el.appendChild(card);

  /* habits quick log */
  if(S.habits.length){
    const hc=div("card");
    hc.innerHTML=`<p class="eyebrow">Today's habits</p>`;
    const list=div("habit-quick");
    const tk=todayKey(), idx=(now.getDay()+6)%7;
    S.habits.forEach(h=>{
      const st=h.log[tk];
      const planned=!!h.days[idx];
      const row=div("hq"+(st==="done"?" done":""));
      row.innerHTML=`<span class="nm">${esc(h.name)}</span><span class="st">${st==="done"?"Done ✓":(planned?"Planned today":"Rest day")}</span>`;
      row.addEventListener("click",()=>{
        if(h.log[tk]==="done") delete h.log[tk]; else h.log[tk]="done";
        save(true); renderToday();
        if(h.log[tk]==="done") toast("Habit logged ✓");
      });
      list.appendChild(row);
    });
    hc.appendChild(list); el.appendChild(hc);
  }

  /* continue reading */
  const next=BOOK.entries.find(e=>!(S.entries[e.n]&&S.entries[e.n].done));
  const cc=div("card continue-card");
  if(next){
    cc.innerHTML=`<div class="num">${next.n}</div><div class="meta"><div class="a">${doneCount?"Continue the journal":"Start the journal"}</div>`+
      `<div class="b">${esc(next.title)}</div><div class="c">${esc(next.deptLabel)}</div></div>`+
      `<svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>`;
    cc.addEventListener("click",()=>openEntry(next.n));
  } else {
    cc.innerHTML=`<div class="num">✓</div><div class="meta"><div class="a">Journal complete</div><div class="b">You're still building</div><div class="c">Keep the check-in, tracker and board meeting going.</div></div>`;
  }
  el.appendChild(cc);
}

/* ================= JOURNAL ================= */
function renderJournal(){
  const el=$("#scr-journal"); el.innerHTML="";
  el.appendChild(div("",`<h1 class="screen-title">The Journal</h1><p class="screen-sub">30 entries. Read the lesson, then put it to work.</p>`));
  const doneCount=BOOK.entries.filter(e=>S.entries[e.n]&&S.entries[e.n].done).length;
  const C=2*Math.PI*32;
  const prog=div("card prog-card");
  prog.innerHTML=
    `<div class="ring"><svg width="76" height="76" viewBox="0 0 76 76">`+
    `<circle class="bgc" cx="38" cy="38" r="32" stroke-width="7"/>`+
    `<circle class="fgc" id="ringfg" cx="38" cy="38" r="32" stroke-width="7" stroke-dasharray="${C}" stroke-dashoffset="${C}"/>`+
    `</svg><div class="num">${doneCount}<small>/30</small></div></div>`+
    `<div><div style="font-weight:900;font-size:17px">${doneCount===0?"Your journal is ready.":(doneCount>=30?"Company report time.":doneCount+" entr"+(doneCount===1?"y":"ies")+" complete")}</div>`+
    `<div class="small muted" style="margin-top:3px">${doneCount===0?"Entry 1 starts with a commitment to yourself.":(doneCount>=30?"All 30 entries complete. Keep building.":"Self-paced. Give each action time to work.")}</div></div>`;
  el.appendChild(prog);
  requestAnimationFrame(()=>{ const r=$("#ringfg"); if(r) r.style.strokeDashoffset=String(C*(1-doneCount/30)); });

  const noteRow=div("toolrow");
  noteRow.innerHTML=`<div class="ic" style="font-family:var(--font-read);font-style:italic;font-weight:600;font-size:17px">M</div>`+
    `<div class="meta"><div class="a">Before you begin</div><div class="t">A note from Mark · How this works</div></div>`;
  noteRow.addEventListener("click",openNote);
  el.appendChild(noteRow);

  const ul=document.createElement("ul"); ul.className="elist";
  BOOK.entries.forEach(E=>{
    const li=document.createElement("li");
    const st=S.entries[E.n];
    const row=div("erow"+(st&&st.done?" done":""));
    row.innerHTML=`<div class="n">${st&&st.done?"✓":E.n}</div>`+
      `<div class="meta"><div class="t">${esc(E.title)}</div><div class="d">${esc(E.deptLabel)}</div></div>`+
      `<svg class="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>`;
    row.addEventListener("click",()=>openEntry(E.n));
    li.appendChild(row);
    BOOK.tools.filter(t=>t.after===E.n).forEach(T=>{
      const tr=div("toolrow");
      tr.innerHTML=`<div class="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L3 18l3 3 5.7-5.7a4.5 4.5 0 0 0 6-6L14 13l-3-3 3.7-3.7z"/></svg></div>`+
        `<div class="meta"><div class="a">Tool for your company</div><div class="t">${esc(T.title)}</div></div>`;
      tr.addEventListener("click",()=>openTool(T.id));
      li.appendChild(tr);
    });
    ul.appendChild(li);
  });
  el.appendChild(ul);
}

/* ================= HABITS ================= */
function renderHabits(){
  const el=$("#scr-habits"); el.innerHTML="";
  el.appendChild(div("",`<h1 class="screen-title">Habit Tracker</h1><p class="screen-sub">Choose one to three habits. Mark done, missed, or leave rest days empty.</p>`));
  const wk=weekDates(), tk=todayKey();
  const DL=["M","T","W","T","F","S","S"];
  if(!S.habits.length){
    const em=div("card empty");
    em.innerHTML=`<div class="big" aria-hidden="true">↺</div><h3>No habits yet</h3><p>Entry 5 helps you choose one small habit worth repeating — or add one here now.</p>`;
    el.appendChild(em);
  }
  S.habits.forEach((h,hi)=>{
    const card=div("card habit-card");
    const hd=div("hd");
    hd.innerHTML=`<div class="nm">${esc(h.name)}</div>`;
    const edit=document.createElement("button"); edit.type="button"; edit.className="btn sec sm"; edit.textContent="Edit";
    edit.addEventListener("click",()=>habitForm(h,hi));
    hd.appendChild(edit); card.appendChild(hd);
    if(h.small) card.appendChild(div("small-v","Hard-day version: "+esc(h.small)));
    const grid=div("weekgrid");
    wk.forEach((d,i)=>{
      const k=todayKey(d);
      const log=h.log[k];
      const state= log || (h.days[i]?"planned":"un");
      const wd=div("wd");
      wd.innerHTML=`<span class="dl">${DL[i]} ${d.getDate()}</span>`;
      const cell=document.createElement("button"); cell.type="button";
      cell.className="cell "+state+(k===tk?" today":"");
      cell.id=`hb_${h.id}_${i}`;
      cell.setAttribute("aria-label", h.name+" "+k+" "+state);
      cell.innerHTML= state==="done" ? `<svg viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
                   : state==="miss" ? "–" : "";
      cell.addEventListener("click",()=>{
        if(!h.log[k]) h.log[k]="done";
        else if(h.log[k]==="done") h.log[k]="miss";
        else delete h.log[k];
        save(true); renderHabits();
      });
      wd.appendChild(cell); grid.appendChild(wd);
    });
    card.appendChild(grid);
    const planned=wk.reduce((a,d,i)=>a+(h.days[i]?1:0),0);
    const doneN=wk.reduce((a,d)=>a+(h.log[todayKey(d)]==="done"?1:0),0);
    const stk=habitStreak(h);
    const rt=div("ratio");
    rt.innerHTML=`<span>My follow-through: <b>${doneN} / ${planned}</b> planned</span><span>${stk>0?("🔥 "+stk+"-day streak"):"Build the streak"}</span>`;
    card.appendChild(rt);
    el.appendChild(card);
  });
  if(S.habits.length<3){
    const add=document.createElement("button"); add.type="button"; add.className="btn"+(S.habits.length?" sec":"");
    add.textContent="+ New habit";
    add.addEventListener("click",()=>habitForm(null));
    el.appendChild(add);
  }
  el.appendChild(div("notebox",{}.x||"Do not count rest days as misses. Miss a day? Return at the next opportunity."));
}
function habitStreak(h){
  let n=0; const d=new Date();
  const plannedOn=dt=>!!h.days[(dt.getDay()+6)%7];
  if(plannedOn(d) && h.log[todayKey(d)]!=="done") d.setDate(d.getDate()-1);
  for(let i=0;i<730;i++){
    const k=todayKey(d);
    if(plannedOn(d)){ if(h.log[k]==="done") n++; else break; }
    else if(h.log[k]==="done") n++;
    d.setDate(d.getDate()-1);
  }
  return n;
}
function habitForm(h, hi){
  const isNew=!h;
  const draft=h?{name:h.name,small:h.small,days:h.days.slice()}:{name:"",small:"",days:[1,1,1,1,1,0,0]};
  openSheet("Seven-day habit tracker", isNew?"New habit":"Edit habit", inner=>{
    inner.innerHTML=`<h2 class="read-title" style="font-size:23px">${isNew?"Build a habit you can repeat":"Edit habit"}</h2>`+
      `<p class="read-sub" style="font-size:16px">Make the action clear and small enough to repeat.</p>`;
    const f1=div("fld");
    f1.innerHTML=`<label for="hf_name">The small habit</label><div class="hint">Example: After lunch, walk for 10 minutes.</div>`;
    const i1=document.createElement("input"); i1.className="inp"; i1.id="hf_name"; i1.value=draft.name;
    i1.addEventListener("input",()=>draft.name=i1.value);
    f1.appendChild(i1); inner.appendChild(f1);
    const f2=div("fld");
    f2.innerHTML=`<label for="hf_small">Smaller version for a difficult day</label>`;
    const i2=document.createElement("input"); i2.className="inp"; i2.id="hf_small"; i2.value=draft.small;
    i2.addEventListener("input",()=>draft.small=i2.value);
    f2.appendChild(i2); inner.appendChild(f2);
    const f3=div("fld");
    f3.innerHTML=`<label>Planned days</label>`;
    const dts=div("daytoggles");
    ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].forEach((d,i)=>{
      const b=document.createElement("button"); b.type="button"; b.className="dt"+(draft.days[i]?" on":""); b.textContent=d; b.id="hf_day"+i;
      b.addEventListener("click",()=>{ draft.days[i]=draft.days[i]?0:1; b.classList.toggle("on",!!draft.days[i]); });
      dts.appendChild(b);
    });
    f3.appendChild(dts); inner.appendChild(f3);
    const saveB=document.createElement("button"); saveB.type="button"; saveB.className="btn"; saveB.textContent=isNew?"Add habit":"Save changes";
    saveB.addEventListener("click",()=>{
      if(!draft.name.trim()){ toast("Give the habit a name"); return; }
      if(isNew) S.habits.push({id:Date.now(), name:draft.name.trim(), small:draft.small.trim(), days:draft.days, log:{}});
      else { h.name=draft.name.trim(); h.small=draft.small.trim(); h.days=draft.days; }
      persist(); toast(isNew?"Habit added":"Saved"); closeSheet(); switchTab("habits");
    });
    inner.appendChild(saveB);
    if(!isNew){
      const del=document.createElement("button"); del.type="button"; del.className="btn ghost"; del.style.marginTop="10px";
      del.style.borderColor="var(--warn)"; del.style.color="var(--warn)";
      let armed=false;
      del.textContent="Delete habit";
      del.addEventListener("click",()=>{
        if(!armed){ armed=true; del.textContent="Tap again to delete — the log goes too"; return; }
        S.habits.splice(hi,1); persist(); toast("Habit deleted"); closeSheet(); switchTab("habits");
      });
      inner.appendChild(del);
    }
  });
}

/* ================= BOARD ================= */
function thisWeekMeeting(){
  const monKey=todayKey(weekDates()[0]);
  return S.board.find(m=>m.date>=monKey);
}
function renderBoard(){
  const el=$("#scr-board"); el.innerHTML="";
  el.appendChild(div("",`<h1 class="screen-title">The Board Room</h1><p class="screen-sub">Ten honest minutes. Three promises for the week ahead.</p>`));
  const done=thisWeekMeeting();
  const cta=div("card");
  cta.innerHTML=`<p class="eyebrow">Your weekly board meeting</p>`+
    `<p class="small muted" style="margin:0 0 14px">Meet once a week, whatever entry you are reading. Check your calendar, tracker and goal number. Review unfinished promises.</p>`;
  const b=document.createElement("button"); b.type="button"; b.className="btn"+(done?" sec":"");
  b.textContent= done? "Hold another meeting" : "Start this week's meeting";
  b.addEventListener("click",openBoardMeeting);
  cta.appendChild(b);
  if(done) cta.appendChild(div("tiny", `<span class="chip on" style="margin-top:12px">✓ This week's meeting is in the minutes</span>`));
  el.appendChild(cta);
  if(S.board.length){
    el.appendChild(div("",`<p class="eyebrow gray" style="margin:20px 0 10px">Meeting minutes</p>`));
    S.board.forEach(m=>{
      const f=m.f||{};
      const card=div("card meet-card");
      const badge= f.kept==="kept"?`<span class="badge kept">Kept</span>`: f.kept==="part"?`<span class="badge part">Partly</span>`: f.kept==="no"?`<span class="badge no">Not yet</span>`:"";
      card.innerHTML=`<div class="dt2">${esc(fmtShort(m.date))} ${badge}</div>`+
        (f.promise?`<div style="font-weight:800;font-size:15px;margin-bottom:5px">This week: ${esc(f.promise)}</div>`:"")+
        (f.whenwhere?`<div class="small muted">When / where: ${esc(f.whenwhere)}</div>`:"")+
        (f.numnow||f.numbefore?`<div class="small muted" style="margin-top:5px">Progress number: ${esc(f.numbefore||"—")} → <b style="color:var(--ink)">${esc(f.numnow||"—")}</b></div>`:"")+
        (f.lesson?`<div class="small muted" style="margin-top:5px">Lesson: ${esc(f.lesson)}</div>`:"")+
        (f.support?`<div class="small muted" style="margin-top:5px">Support: ${esc(f.support)}</div>`:"");
      el.appendChild(card);
    });
  } else {
    const em=div("card empty");
    em.innerHTML=`<div class="big" aria-hidden="true">☷</div><h3>No minutes yet</h3><p>Your first board meeting takes about ten minutes. The minutes build a record of promises made and kept.</p>`;
    el.appendChild(em);
  }
}
function openBoardMeeting(){
  const draft={};
  const last=S.board[0];
  openSheet("Weekly board meeting", "Ten honest minutes", inner=>{
    const dots=div("stepdots","<i class='on'></i><i></i><i></i><i></i>");
    inner.appendChild(dots);
    const steps=[];
    function mkStep(title, sub, build){
      const s=div("step");
      s.innerHTML=`<h2 class="read-title" style="font-size:22px">${esc(title)}</h2><p class="read-sub" style="font-size:15.5px">${esc(sub)}</p>`;
      build(s); steps.push(s); inner.appendChild(s); return s;
    }
    mkStep("Last week's promise","Kept, partly kept, or not yet — evidence over excuses.", s=>{
      if(last && last.f && last.f.promise) s.appendChild(div("notebox","Your promise last week: “"+esc(last.f.promise)+"”"));
      const seg=div("seg3");
      [["kept","Kept"],["part","Partly"],["no","Not yet"]].forEach(o=>{
        const b=document.createElement("button"); b.type="button"; b.textContent=o[1]; b.id="bm_kept_"+o[0];
        b.addEventListener("click",()=>{ draft.kept=o[0]; seg.querySelectorAll("button").forEach(x=>x.classList.remove("on")); b.classList.add("on"); });
        seg.appendChild(b);
      });
      s.appendChild(seg);
      const f=div("fld");
      f.innerHTML=`<label for="bm_ev">Evidence / next move</label>`;
      const ta=document.createElement("textarea"); ta.className="ta"; ta.id="bm_ev";
      ta.addEventListener("input",()=>draft.evidence=ta.value);
      f.appendChild(ta); s.appendChild(f);
    });
    mkStep("My progress number","Before, now, and what it taught you.", s=>{
      const r=div("row2");
      [["numbefore","Before"],["numnow","Now"]].forEach(p=>{
        const w=div("fld"); w.innerHTML=`<label for="bm_${p[0]}">${p[1]}</label>`;
        const i=document.createElement("input"); i.className="inp"; i.id="bm_"+p[0];
        i.addEventListener("input",()=>draft[p[0]]=i.value);
        w.appendChild(i); r.appendChild(w);
      });
      s.appendChild(r);
      const f=div("fld"); f.innerHTML=`<label for="bm_lesson">Lesson</label>`;
      const ta=document.createElement("textarea"); ta.className="ta"; ta.id="bm_lesson";
      ta.addEventListener("input",()=>draft.lesson=ta.value);
      f.appendChild(ta); s.appendChild(f);
    });
    mkStep("This week's promise","One promise with a time and place.", s=>{
      const f=div("fld"); f.innerHTML=`<label for="bm_promise">This week's promise</label>`;
      const ta=document.createElement("textarea"); ta.className="ta"; ta.id="bm_promise";
      ta.addEventListener("input",()=>draft.promise=ta.value);
      f.appendChild(ta); s.appendChild(f);
      const f2=div("fld"); f2.innerHTML=`<label for="bm_ww">When / where</label>`;
      const i=document.createElement("input"); i.className="inp"; i.id="bm_ww";
      i.addEventListener("input",()=>draft.whenwhere=i.value);
      f2.appendChild(i); s.appendChild(f2);
    });
    mkStep("Support and next meeting","Ask someone you trust to check in if useful.", s=>{
      const f=div("fld"); f.innerHTML=`<label for="bm_support">Support I need</label>`;
      const ta=document.createElement("textarea"); ta.className="ta"; ta.id="bm_support";
      ta.addEventListener("input",()=>draft.support=ta.value);
      f.appendChild(ta); s.appendChild(f);
      const f2=div("fld"); f2.innerHTML=`<label for="bm_next">Next meeting time</label>`;
      const i=document.createElement("input"); i.className="inp"; i.id="bm_next"; i.placeholder="Sunday 7:00 pm";
      i.addEventListener("input",()=>draft.nextmeet=i.value);
      f2.appendChild(i); s.appendChild(f2);
    });
    let cur=0;
    const nav=div("entry-nav");
    const back=document.createElement("button"); back.type="button"; back.className="btn sec"; back.textContent="Back";
    const fwd=document.createElement("button"); fwd.type="button"; fwd.className="btn"; fwd.textContent="Next";
    nav.append(back,fwd); inner.appendChild(nav);
    function paint(){
      steps.forEach((s,i)=>s.classList.toggle("on", i===cur));
      dots.querySelectorAll("i").forEach((d,i)=>d.classList.toggle("on", i<=cur));
      back.style.visibility=cur===0?"hidden":"visible";
      fwd.textContent= cur===3 ? "Save the minutes" : "Next";
      $("#sheetBody").scrollTop=0;
    }
    back.addEventListener("click",()=>{ if(cur>0){cur--; paint();} });
    fwd.addEventListener("click",()=>{
      if(cur<3){ cur++; paint(); }
      else {
        S.board.unshift({date:todayKey(), f:draft});
        persist(); confettiAt(fwd); toast("Meeting saved to the minutes");
        setTimeout(closeSheet, 500);
      }
    });
    paint();
  });
}

/* ================= COMPANY ================= */
let curCp = (Object.values(S.score.now).some(r=>r&&r.s) && "now") || (Object.values(S.score.mid).some(r=>r&&r.s) && "mid") || "start";
function renderCompany(){
  const el=$("#scr-company"); el.innerHTML="";
  el.appendChild(div("",`<h1 class="screen-title">Your Company</h1><p class="screen-sub">Eight departments. Score how each runs — not your worth.</p>`));

  const chartCard=div("card");
  chartCard.innerHTML=`<p class="eyebrow">Company scorecard</p>`+
    `<div class="legend"><span><i style="background:var(--c1)"></i>Start</span><span><i style="background:var(--c2)"></i>Midpoint</span><span><i style="background:var(--c3)"></i>Now</span></div>`+
    `<div class="chartwrap" id="scorechart"></div>`;
  el.appendChild(chartCard);
  drawScoreChart(chartCard.querySelector("#scorechart"));

  const edCard=div("card");
  edCard.innerHTML=`<p class="eyebrow">Score a checkpoint</p>`+
    `<div class="notebox">1–3 needs support now · 4–6 uneven · 7–8 mostly steady · 9–10 strong and maintained. Use the same guide each time.</div>`;
  const seg=div("cpseg");
  ["start","mid","now"].forEach(cp=>{
    const b=document.createElement("button"); b.type="button"; b.id="cpseg_"+cp;
    b.innerHTML=`${CP_META[cp].label}<br><span style="font-weight:600;font-size:10px;color:var(--ink3)">${CP_META[cp].at}</span>`;
    b.classList.toggle("on", cp===curCp);
    b.addEventListener("click",()=>{ curCp=cp; renderCompany(); });
    seg.appendChild(b);
  });
  edCard.appendChild(seg);
  edCard.appendChild(renderScoreEditor(curCp, curCp!=="start"));
  el.appendChild(edCard);

  const dir=BOOK.tools.find(t=>t.id==="direction");
  const dirCard=div("card");
  dirCard.innerHTML=`<p class="eyebrow">Company direction</p><p class="small muted" style="margin:0 0 12px">${esc(dir.sub)}</p>`;
  dirCard.appendChild(renderFields(dir.fields, tSt("direction"), "direction"));
  el.appendChild(dirCard);

  const p90=div("card");
  p90.innerHTML=`<p class="eyebrow">Your next 90 days</p><p class="small muted" style="margin:0 0 12px">One priority. A plan you can repeat. Regular reviews. (Also Entry 30.)</p>`;
  p90.appendChild(renderPlan90());
  el.appendChild(p90);

  const rep=div("toolrow");
  rep.innerHTML=`<div class="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>`+
    `<div class="meta"><div class="a">After Entry 29</div><div class="t">Your Personal Company Report</div></div>`;
  rep.addEventListener("click",()=>openTool("report"));
  el.appendChild(rep);
}

/* ================= tabs / confetti / init ================= */
let currentTab="today";
function renderScreen(name){
  if(name==="today") renderToday();
  else if(name==="journal") renderJournal();
  else if(name==="habits") renderHabits();
  else if(name==="board") renderBoard();
  else if(name==="company") renderCompany();
}
function switchTab(name){
  currentTab=name;
  document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active", b.dataset.tab===name));
  renderScreen(name);
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  const scr=$("#scr-"+name);
  void scr.offsetWidth;
  scr.classList.add("active");
  window.scrollTo(0,0);
}
function confettiAt(el){
  try{ if(matchMedia("(prefers-reduced-motion: reduce)").matches) return; }catch(e){}
  const r=el.getBoundingClientRect(), cx=r.left+r.width/2, cy=r.top+r.height/2;
  const cs=getComputedStyle(document.documentElement);
  const colors=[cs.getPropertyValue("--accent"),cs.getPropertyValue("--c1"),cs.getPropertyValue("--c2"),cs.getPropertyValue("--c3"),cs.getPropertyValue("--ink")];
  for(let i=0;i<26;i++){
    const p=document.createElement("i"); p.className="confetti";
    p.style.left=cx+"px"; p.style.top=cy+"px";
    p.style.background=colors[i%colors.length];
    p.style.setProperty("--dx",(Math.random()*260-130).toFixed(0)+"px");
    p.style.setProperty("--dy",(-(Math.random()*230)-50).toFixed(0)+"px");
    p.style.setProperty("--rot",(Math.random()*720-360).toFixed(0)+"deg");
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),1250);
  }
}
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>switchTab(b.dataset.tab)));
$("#sheetClose").addEventListener("click",closeSheet);
$("#backdrop").addEventListener("click",closeSheet);
window.addEventListener("beforeunload", persist);

/* ================= access gate =================
   The app ships with every adult-edition purchase. Buyers arrive with a
   signed token (?t=...) from the thank-you page or download email; it is
   validated once by /api/app-access, then this device stays unlocked. */
const UNLOCK_KEY="ceoyou-unlocked";
let memUnlocked=false;
function isUnlocked(){ try{ if(localStorage.getItem(UNLOCK_KEY)==="1") return true; }catch(e){} return memUnlocked; }
function setUnlocked(){ memUnlocked=true; try{ localStorage.setItem(UNLOCK_KEY,"1"); }catch(e){} }
function extractToken(s){
  const m=String(s||"").match(/[?&]t=([A-Za-z0-9_\-]+\.[A-Za-z0-9_\-]+)/);
  if(m) return m[1];
  const r=String(s||"").trim();
  return /^[A-Za-z0-9_\-]+\.[A-Za-z0-9_\-]+$/.test(r)? r : "";
}
function validateAccess(query){
  return fetch("/api/app-access?"+query)
    .then(r=>r.json()).catch(()=>({ok:false, error:"network"}));
}
function lockMsg(text, good){
  const m=document.getElementById("lock-msg");
  if(m){ m.textContent=text||""; m.classList.toggle("ok", !!good); }
}
function failText(d){
  if(d && d.error==="edition") return "That order is for the High School edition — its app is coming soon. Email support with any questions.";
  if(d && d.error==="network") return "Couldn't reach the server — check your connection and try again.";
  if(d && d.error==="bad_code") return "That code didn't match. Check it with whoever gave it to you, or use the link from your download email.";
  return "That link didn't check out. Use the link from your download email, or email support@youaretheceoofyou.com.";
}
function bootApp(){
  document.getElementById("lock").hidden=true;
  document.getElementById("app").hidden=false;
  switchTab("today");
}
function showLock(msg){
  document.getElementById("app").hidden=true;
  document.getElementById("lock").hidden=false;
  if(msg!==undefined) lockMsg(msg);
}
(function initGate(){
  const btn=document.getElementById("lock-btn");
  btn.addEventListener("click",()=>{
    const raw=document.getElementById("lock-code").value;
    const t=extractToken(raw);
    const code=t? "" : String(raw||"").trim();
    if(!t && !code){ lockMsg("Paste the unlock link from your email, or enter your access code."); return; }
    lockMsg("Checking…", true);
    validateAccess(t? "t="+encodeURIComponent(t) : "code="+encodeURIComponent(code)).then(d=>{
      if(d && d.ok){ setUnlocked(); lockMsg("Unlocked. Welcome in.", true); setTimeout(bootApp, 450); }
      else lockMsg(failText(d));
    });
  });
  document.getElementById("lock-code").addEventListener("keydown",e=>{ if(e.key==="Enter"){ e.preventDefault(); btn.click(); } });
  if(isUnlocked()){ bootApp(); return; }
  const urlT=extractToken(location.search);
  let urlC="";
  try{ urlC=(new URLSearchParams(location.search).get("code")||"").trim(); }catch(e){}
  if(urlT || urlC){
    showLock("Checking your link…");
    validateAccess(urlT? "t="+encodeURIComponent(urlT) : "code="+encodeURIComponent(urlC)).then(d=>{
      if(d && d.ok){
        setUnlocked();
        try{ history.replaceState(null,"",location.pathname); }catch(e){}
        bootApp();
      } else showLock(failText(d));
    });
  } else {
    showLock();
  }
})();
