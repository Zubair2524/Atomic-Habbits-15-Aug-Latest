// Comprehensive habits data based on Atomic Habits principles
const habitsData = {
    good: [
        {
            id: 1,
            name: "Daily Reading",
            description: "Read for at least 20 minutes every day to expand knowledge, improve vocabulary, and enhance cognitive function while developing a lifelong learning mindset.",
            featured: true
        },
        {
            id: 2,
            name: "Morning Exercise",
            description: "Start each day with 30 minutes of physical activity to boost energy, improve mood, and maintain physical health throughout your life.",
            featured: true
        },
        {
            id: 3,
            name: "Meditation Practice",
            description: "Spend 10-15 minutes daily in mindfulness meditation to reduce stress, improve focus, and develop emotional regulation skills.",
            featured: true
        },
        {
            id: 4,
            name: "Gratitude Journaling",
            description: "Write down three things you're grateful for each day to cultivate positivity, improve mental health, and appreciate life's blessings.",
            featured: true
        },
        {
            id: 5,
            name: "Healthy Eating",
            description: "Choose nutritious, whole foods over processed options to fuel your body properly, maintain energy levels, and support long-term health.",
            featured: true
        },
        {
            id: 6,
            name: "Early Rising",
            description: "Wake up early to have quiet time for personal development, planning, and starting the day with intention and purpose.",
            featured: true
        },
        {
            id: 7,
            name: "Daily Planning",
            description: "Spend 10 minutes each evening planning the next day's priorities to increase productivity and reduce decision fatigue.",
            featured: true
        },
        {
            id: 8,
            name: "Learning New Skills",
            description: "Dedicate time daily to learning something new, whether it's a language, instrument, or professional skill to keep growing.",
            featured: true
        },
        {
            id: 9,
            name: "Regular Sleep Schedule",
            description: "Go to bed and wake up at consistent times to optimize sleep quality, improve cognitive function, and maintain physical health.",
            featured: true
        },
        {
            id: 10,
            name: "Daily Water Intake",
            description: "Drink adequate water throughout the day to maintain hydration, support bodily functions, and improve overall health and energy.",
            featured: true
        },
        // Additional habits (11-100)
        {
            id: 11,
            name: "Deep Work Sessions",
            description: "Dedicate focused time blocks to important tasks without distractions to maximize productivity and produce high-quality work.",
            featured: false
        },
        {
            id: 12,
            name: "Regular Stretching",
            description: "Incorporate daily stretching routines to improve flexibility, reduce muscle tension, and prevent injury from sedentary lifestyle.",
            featured: false
        },
        {
            id: 13,
            name: "Mindful Eating",
            description: "Eat slowly and pay attention to hunger cues, flavors, and textures to improve digestion and develop a healthy relationship with food.",
            featured: false
        },
        {
            id: 14,
            name: "Digital Detox",
            description: "Set specific times to disconnect from devices and social media to reduce stress, improve focus, and enhance real-world connections.",
            featured: false
        },
        {
            id: 15,
            name: "Regular Decluttering",
            description: "Spend time organizing and removing unnecessary items from your space to create a more peaceful and productive environment.",
            featured: false
        },
        // Continue with more habits...
        {
            id: 16,
            name: "Active Listening",
            description: "Practice giving full attention when others speak, asking clarifying questions, and showing empathy to build stronger relationships.",
            featured: false
        },
        {
            id: 17,
            name: "Financial Tracking",
            description: "Monitor daily expenses and income to develop financial awareness, make better spending decisions, and work toward financial goals.",
            featured: false
        },
        {
            id: 18,
            name: "Creative Expression",
            description: "Engage in creative activities like drawing, writing, or music daily to stimulate imagination and provide emotional outlet.",
            featured: false
        },
        {
            id: 19,
            name: "Nature Connection",
            description: "Spend time outdoors daily, whether walking in a park or gardening, to reduce stress and connect with the natural world.",
            featured: false
        },
        {
            id: 20,
            name: "Positive Self-Talk",
            description: "Replace negative internal dialogue with encouraging and constructive thoughts to build confidence and resilience.",
            featured: false
        }
        // Add more habits up to 100...
    ],
    bad: [
        {
            id: 1,
            name: "Excessive Social Media",
            description: "Spending hours scrolling through social media platforms, leading to time waste, comparison, and decreased productivity in daily life.",
            featured: true
        },
        {
            id: 2,
            name: "Procrastination",
            description: "Consistently delaying important tasks and responsibilities, creating stress, missed opportunities, and reduced quality of work and life.",
            featured: true
        },
        {
            id: 3,
            name: "Negative Self-Talk",
            description: "Engaging in harsh internal criticism and pessimistic thinking patterns that undermine confidence, motivation, and mental well-being.",
            featured: true
        },
        {
            id: 4,
            name: "Junk Food Consumption",
            description: "Regularly eating processed, high-sugar, and high-fat foods that provide little nutrition while contributing to health problems.",
            featured: true
        },
        {
            id: 5,
            name: "Late Night Screen Time",
            description: "Using electronic devices before bed, disrupting sleep patterns, reducing sleep quality, and affecting next-day performance and mood.",
            featured: true
        },
        {
            id: 6,
            name: "Chronic Complaining",
            description: "Habitually focusing on and vocalizing problems without seeking solutions, creating negative atmosphere and limiting personal growth.",
            featured: true
        },
        {
            id: 7,
            name: "Multitasking",
            description: "Attempting to do multiple tasks simultaneously, reducing efficiency, increasing errors, and creating mental fatigue and stress.",
            featured: true
        },
        {
            id: 8,
            name: "Skipping Meals",
            description: "Irregularly eating or missing meals, leading to energy crashes, poor nutrition, and potential overeating later in the day.",
            featured: true
        },
        {
            id: 9,
            name: "Gossiping",
            description: "Engaging in negative talk about others, damaging relationships, creating toxic environments, and reflecting poorly on character.",
            featured: true
        },
        {
            id: 10,
            name: "Impulse Spending",
            description: "Making unplanned purchases without considering budget or necessity, leading to financial stress and accumulation of unnecessary items.",
            featured: true
        },
        // Additional bad habits (11-100)
        {
            id: 11,
            name: "Chronic Lateness",
            description: "Consistently arriving late to appointments and commitments, showing disrespect for others' time and damaging professional reputation.",
            featured: false
        },
        {
            id: 12,
            name: "Perfectionism",
            description: "Setting unrealistically high standards that prevent completion of tasks and create unnecessary stress and self-criticism.",
            featured: false
        },
        {
            id: 13,
            name: "Avoiding Difficult Conversations",
            description: "Postponing or avoiding necessary but uncomfortable discussions, allowing problems to escalate and relationships to deteriorate.",
            featured: false
        },
        {
            id: 14,
            name: "Mindless Snacking",
            description: "Eating without awareness or hunger cues, often while distracted, leading to overconsumption and poor nutritional choices.",
            featured: false
        },
        {
            id: 15,
            name: "Comparing to Others",
            description: "Constantly measuring personal success against others' achievements, leading to dissatisfaction, envy, and loss of self-worth.",
            featured: false
        },
        // Continue with more bad habits...
        {
            id: 16,
            name: "Interrupting Others",
            description: "Cutting off people mid-sentence or not allowing them to finish their thoughts, showing disrespect and hindering communication.",
            featured: false
        },
        {
            id: 17,
            name: "Chronic Worrying",
            description: "Obsessing over potential future problems that may never occur, creating unnecessary anxiety and preventing present-moment enjoyment.",
            featured: false
        },
        {
            id: 18,
            name: "Making Excuses",
            description: "Consistently blaming external factors for personal failures instead of taking responsibility and learning from mistakes.",
            featured: false
        },
        {
            id: 19,
            name: "Sedentary Lifestyle",
            description: "Spending most of the day sitting without regular movement, leading to physical health problems and decreased energy levels.",
            featured: false
        },
        {
            id: 20,
            name: "Emotional Eating",
            description: "Using food to cope with stress, sadness, or other emotions rather than addressing the underlying feelings directly.",
            featured: false
        }
        // Add more bad habits up to 100...
    ]
};

// Four Laws of Behavior Change content for each habit
const stagesContent = {
    good: {
        1: { // Make it Obvious
            title: "Make it Obvious",
            content: `
                <h3>The First Law: Make it Obvious</h3>
                <p>The foundation of building any good habit is making it impossible to ignore. Your environment and cues play a crucial role in triggering the behavior you want to develop.</p>
                
                <h4>Implementation Strategies:</h4>
                <ul>
                    <li><strong>Design Your Environment:</strong> Place visual cues in your immediate surroundings. If you want to read more, leave books on your pillow or coffee table where you'll see them first thing.</li>
                    <li><strong>Use Implementation Intentions:</strong> Create specific if-then plans. "After I pour my morning coffee, I will read for 20 minutes" creates a clear trigger.</li>
                    <li><strong>Stack Your Habits:</strong> Link your new habit to an existing one. "After I brush my teeth, I will do 10 push-ups" leverages an established routine.</li>
                    <li><strong>Create Visual Reminders:</strong> Use sticky notes, phone alarms, or apps to remind yourself of your commitment throughout the day.</li>
                </ul>
                
                <p>The key is to make the cue for your good habit so obvious that you can't miss it. When the environment supports your goals, willpower becomes less necessary.</p>
            `
        },
        2: { // Make it Attractive
            title: "Make it Attractive",
            content: `
                <h3>The Second Law: Make it Attractive</h3>
                <p>Humans are motivated by the anticipation of reward. The more attractive an opportunity seems, the more likely it is to become habit-forming.</p>
                
                <h4>Implementation Strategies:</h4>
                <ul>
                    <li><strong>Temptation Bundling:</strong> Pair an action you want to do with an action you need to do. "After I exercise for 30 minutes, I will watch my favorite show."</li>
                    <li><strong>Join a Culture:</strong> Surround yourself with people who have the habits you want. Join a running club, book club, or online community of like-minded individuals.</li>
                    <li><strong>Reframe Your Mindset:</strong> Instead of "I have to exercise," think "I get to build strength and energy." Focus on the benefits, not the burden.</li>
                    <li><strong>Create a Motivating Environment:</strong> Make your habit space appealing. Set up a beautiful reading nook or organize your workout gear attractively.</li>
                </ul>
                
                <p>When you make a habit attractive, you're working with your brain's natural reward system rather than against it. This creates sustainable motivation that doesn't rely on willpower alone.</p>
            `
        },
        3: { // Make it Easy
            title: "Make it Easy",
            content: `
                <h3>The Third Law: Make it Easy</h3>
                <p>The easier a habit is to do, the more likely you are to stick with it. Focus on reducing friction and making the good choice the easy choice.</p>
                
                <h4>Implementation Strategies:</h4>
                <ul>
                    <li><strong>Start Small:</strong> Begin with the smallest possible version. Want to exercise? Start with one push-up. Want to meditate? Start with one minute.</li>
                    <li><strong>Prepare Your Environment:</strong> Set up your environment for success. Lay out workout clothes the night before, prep healthy snacks, or set up your meditation space.</li>
                    <li><strong>Use the Two-Minute Rule:</strong> When starting a new habit, it should take less than two minutes to do. "Read before bed" becomes "Read one page before bed."</li>
                    <li><strong>Reduce Friction:</strong> Eliminate obstacles that make your habit harder. Keep healthy snacks at eye level, put your guitar in the living room, or download meditation apps.</li>
                </ul>
                
                <p>Remember, the goal is not to do one push-up or read one page forever. The goal is to master the habit of showing up. Once the habit is established, you can gradually increase the intensity.</p>
            `
        },
        4: { // Make it Satisfying
            title: "Make it Satisfying",
            content: `
                <h3>The Fourth Law: Make it Satisfying</h3>
                <p>We are more likely to repeat a behavior when the experience is satisfying. The human brain prioritizes immediate rewards over delayed ones.</p>
                
                <h4>Implementation Strategies:</h4>
                <ul>
                    <li><strong>Use Immediate Rewards:</strong> Give yourself a small reward immediately after completing your habit. This could be checking off a box, treating yourself to something small, or simply celebrating the win.</li>
                    <li><strong>Track Your Progress:</strong> Use a habit tracker, journal, or app to visually see your progress. The act of tracking itself becomes rewarding.</li>
                    <li><strong>Never Miss Twice:</strong> If you miss one day, make sure to get back on track the next day. Missing once is an accident; missing twice is the start of a new habit.</li>
                    <li><strong>Celebrate Small Wins:</strong> Acknowledge your progress, no matter how small. Did you read for 5 minutes instead of 20? That's still a win worth celebrating.</li>
                </ul>
                
                <p>The feeling of success is a powerful motivator. By making your habits immediately satisfying, you create a positive feedback loop that encourages repetition and builds momentum over time.</p>
            `
        }
    },
    bad: {
        1: { // Make it Invisible
            title: "Make it Invisible",
            content: `
                <h3>Inversion of the First Law: Make it Invisible</h3>
                <p>To break a bad habit, you need to make the cues that trigger it invisible or remove them from your environment entirely.</p>
                
                <h4>Implementation Strategies:</h4>
                <ul>
                    <li><strong>Remove Triggers:</strong> Eliminate or hide the cues that prompt your bad habit. Delete social media apps, remove junk food from your house, or put your TV remote in another room.</li>
                    <li><strong>Change Your Environment:</strong> Modify your surroundings to make the bad habit harder to perform. Work in a different location, take a different route home, or rearrange your living space.</li>
                    <li><strong>Reduce Exposure:</strong> Limit your exposure to contexts where the bad habit typically occurs. If you overeat while watching TV, eat meals at the dining table instead.</li>
                    <li><strong>Create Barriers:</strong> Add friction to make the bad habit less convenient. Log out of social media accounts, put junk food in hard-to-reach places, or remove apps from your phone's home screen.</li>
                </ul>
                
                <p>Self-control is a short-term strategy, not a long-term one. It's easier to avoid temptation than to resist it. By making bad habits invisible, you remove the need for willpower.</p>
            `
        },
        2: { // Make it Unattractive
            title: "Make it Unattractive",
            content: `
                <h3>Inversion of the Second Law: Make it Unattractive</h3>
                <p>Reframe your mindset to highlight the negative aspects of your bad habits and make them less appealing.</p>
                
                <h4>Implementation Strategies:</h4>
                <ul>
                    <li><strong>Highlight the Costs:</strong> Focus on the immediate and long-term negative consequences of your bad habit. Write them down and review them regularly.</li>
                    <li><strong>Reframe Your Identity:</strong> Instead of "I'm trying to quit smoking," say "I'm not a smoker." Change how you see yourself in relation to the habit.</li>
                    <li><strong>Find a New Tribe:</strong> Surround yourself with people who don't engage in your bad habit. Join groups or communities that support your desired change.</li>
                    <li><strong>Create Negative Associations:</strong> Link your bad habit with something unpleasant. Every time you engage in the habit, do something you dislike immediately after.</li>
                </ul>
                
                <p>Your habits are modern-day solutions to ancient desires. By making a bad habit unattractive, you reduce the craving and make it easier to choose better alternatives.</p>
            `
        },
        3: { // Make it Difficult
            title: "Make it Difficult",
            content: `
                <h3>Inversion of the Third Law: Make it Difficult</h3>
                <p>Increase the friction associated with your bad habits. The more steps required to perform the habit, the less likely you are to do it.</p>
                
                <h4>Implementation Strategies:</h4>
                <ul>
                    <li><strong>Add Steps:</strong> Make your bad habit require more effort. Put your phone in another room, delete apps and require re-downloading, or keep junk food in the basement.</li>
                    <li><strong>Use Commitment Devices:</strong> Make it costly to engage in your bad habit. Give money to a friend who will donate it to a cause you hate if you engage in the habit.</li>
                    <li><strong>Change the Default:</strong> Alter your environment so that the good choice becomes the default. Replace junk food with healthy snacks, or set your phone to airplane mode by default.</li>
                    <li><strong>Automate Good Choices:</strong> Use technology to make good choices automatic. Set up automatic savings, use website blockers, or schedule healthy meal deliveries.</li>
                </ul>
                
                <p>Every habit is just an obstacle to getting what you really want. When you make bad habits more difficult, you create space for better choices to emerge naturally.</p>
            `
        },
        4: { // Make it Unsatisfying
            title: "Make it Unsatisfying",
            content: `
                <h3>Inversion of the Fourth Law: Make it Unsatisfying</h3>
                <p>Add immediate consequences to your bad habits to make them less rewarding and more likely to be avoided in the future.</p>
                
                <h4>Implementation Strategies:</h4>
                <ul>
                    <li><strong>Create Immediate Consequences:</strong> Add a cost that occurs right after the bad habit. Put money in a jar every time you engage in the habit, or do something unpleasant immediately after.</li>
                    <li><strong>Get an Accountability Partner:</strong> Share your goal with someone who will check in on your progress and hold you accountable for your actions.</li>
                    <li><strong>Track Your Habit:</strong> Keep a record of every time you engage in the bad habit. The act of tracking makes you more aware and often naturally reduces the behavior.</li>
                    <li><strong>Use Social Consequences:</strong> Make your habit change public. Tell friends and family about your goal, or post about it on social media to create social pressure.</li>
                </ul>
                
                <p>The last step is crucial because it takes advantage of one of our most powerful motivators: the desire to avoid loss. When bad habits have immediate negative consequences, we naturally avoid them.</p>
            `
        }
    }
};

// Make data globally available
window.habitsData = habitsData;
window.stagesContent = stagesContent;