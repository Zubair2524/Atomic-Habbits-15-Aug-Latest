// Quiz questions for different habits
const quizData = {
    // Good habits quizzes
    good: {
        1: [ // Daily Reading
            {
                question: "According to Atomic Habits, what is the best way to make reading a daily habit?",
                options: [
                    "Read for 2 hours every day from the start",
                    "Start with just one page per day",
                    "Only read bestselling books",
                    "Read only in the morning"
                ],
                correct: 1
            },
            {
                question: "Which environmental cue would best support a daily reading habit?",
                options: [
                    "Keeping books hidden in a closet",
                    "Reading only on your phone",
                    "Placing a book on your pillow",
                    "Reading in a noisy environment"
                ],
                correct: 2
            },
            {
                question: "How can you make reading more attractive?",
                options: [
                    "Only read boring textbooks",
                    "Bundle reading with something you enjoy",
                    "Read in uncomfortable positions",
                    "Set unrealistic reading goals"
                ],
                correct: 1
            },
            {
                question: "What makes reading immediately satisfying?",
                options: [
                    "Tracking pages read in a journal",
                    "Reading only difficult books",
                    "Never taking breaks",
                    "Reading multiple books simultaneously"
                ],
                correct: 0
            },
            {
                question: "According to the Two-Minute Rule, how should you start a reading habit?",
                options: [
                    "Read for exactly two minutes",
                    "Read two books per day",
                    "Start with something that takes less than two minutes",
                    "Read two pages minimum"
                ],
                correct: 2
            },
            {
                question: "What is habit stacking in relation to reading?",
                options: [
                    "Reading multiple books at once",
                    "Linking reading to an existing habit",
                    "Stacking books on your desk",
                    "Reading for stacked hours"
                ],
                correct: 1
            },
            {
                question: "How can you reduce friction for daily reading?",
                options: [
                    "Keep books in another room",
                    "Only read physical books",
                    "Prepare your reading space in advance",
                    "Read only when you feel motivated"
                ],
                correct: 2
            },
            {
                question: "What role does identity play in building a reading habit?",
                options: [
                    "Identity doesn't matter for habits",
                    "You should see yourself as 'someone who reads'",
                    "Only smart people can be readers",
                    "Identity changes after reading 100 books"
                ],
                correct: 1
            },
            {
                question: "How should you handle missing a day of reading?",
                options: [
                    "Give up the habit completely",
                    "Read double the next day",
                    "Get back on track the next day",
                    "Wait until next month to restart"
                ],
                correct: 2
            },
            {
                question: "What is the most important factor in maintaining a reading habit long-term?",
                options: [
                    "Reading speed",
                    "Book selection",
                    "Consistency over intensity",
                    "Reading environment"
                ],
                correct: 2
            }
        ],
        2: [ // Morning Exercise
            {
                question: "What is the best way to start a morning exercise habit?",
                options: [
                    "Begin with intense 2-hour workouts",
                    "Start with just putting on workout clothes",
                    "Only exercise when you feel energetic",
                    "Exercise at different times each day"
                ],
                correct: 1
            },
            {
                question: "How can you make morning exercise obvious?",
                options: [
                    "Hide your workout clothes",
                    "Lay out workout clothes the night before",
                    "Keep exercise equipment in the garage",
                    "Only think about exercising"
                ],
                correct: 1
            },
            {
                question: "Which strategy makes exercise more attractive?",
                options: [
                    "Focus only on the difficulty",
                    "Exercise alone always",
                    "Listen to favorite music while exercising",
                    "Choose exercises you hate"
                ],
                correct: 2
            },
            {
                question: "How can you make exercise easier to start?",
                options: [
                    "Start with complex routines",
                    "Exercise for hours from day one",
                    "Begin with simple movements",
                    "Only use expensive equipment"
                ],
                correct: 2
            },
            {
                question: "What makes exercise immediately satisfying?",
                options: [
                    "Only focusing on long-term results",
                    "Tracking workouts and celebrating completion",
                    "Comparing yourself to others",
                    "Exercising until exhaustion"
                ],
                correct: 1
            },
            {
                question: "How does habit stacking apply to morning exercise?",
                options: [
                    "After I wake up, I will put on workout clothes",
                    "Exercise whenever convenient",
                    "Stack weights during exercise",
                    "Exercise multiple times per day"
                ],
                correct: 0
            },
            {
                question: "What environmental design supports morning exercise?",
                options: [
                    "Keeping equipment hard to access",
                    "Setting up a dedicated workout space",
                    "Exercising in different locations daily",
                    "Avoiding any exercise preparation"
                ],
                correct: 1
            },
            {
                question: "How should you handle motivation fluctuations?",
                options: [
                    "Only exercise when highly motivated",
                    "Rely on systems and habits, not motivation",
                    "Wait for perfect conditions",
                    "Exercise intensely when motivated"
                ],
                correct: 1
            },
            {
                question: "What identity should you cultivate for exercise?",
                options: [
                    "I am someone who exercises regularly",
                    "I am not athletic",
                    "I only exercise when convenient",
                    "I am too busy to exercise"
                ],
                correct: 0
            },
            {
                question: "How do you maintain consistency in morning exercise?",
                options: [
                    "Exercise intensely every day",
                    "Skip days when tired",
                    "Focus on showing up consistently",
                    "Only exercise on weekends"
                ],
                correct: 2
            }
        ]
        // Add more quiz sets for other good habits...
    },
    // Bad habits quizzes
    bad: {
        1: [ // Excessive Social Media
            {
                question: "What is the most effective way to reduce social media usage?",
                options: [
                    "Use willpower to resist",
                    "Delete apps from your phone",
                    "Set time limits but keep apps visible",
                    "Only use social media on weekends"
                ],
                correct: 1
            },
            {
                question: "How can you make social media invisible?",
                options: [
                    "Keep apps on your home screen",
                    "Log out of all accounts after each use",
                    "Use social media more mindfully",
                    "Check social media first thing in the morning"
                ],
                correct: 1
            },
            {
                question: "What makes social media unattractive?",
                options: [
                    "Focusing on the positive aspects",
                    "Highlighting how it wastes time and creates comparison",
                    "Using it more frequently",
                    "Following more accounts"
                ],
                correct: 1
            },
            {
                question: "How can you make social media more difficult to access?",
                options: [
                    "Keep your phone next to your bed",
                    "Enable all notifications",
                    "Put your phone in another room",
                    "Use social media as a reward"
                ],
                correct: 2
            },
            {
                question: "What makes social media usage unsatisfying?",
                options: [
                    "Tracking time spent and seeing the waste",
                    "Getting more likes and comments",
                    "Following more interesting accounts",
                    "Using multiple platforms"
                ],
                correct: 0
            },
            {
                question: "What should replace social media scrolling?",
                options: [
                    "Watching more TV",
                    "Reading, exercising, or learning",
                    "Playing mobile games",
                    "Online shopping"
                ],
                correct: 1
            },
            {
                question: "How can you change your identity regarding social media?",
                options: [
                    "I am a heavy social media user",
                    "I am someone who values real connections",
                    "I need social media to stay informed",
                    "I can't live without social media"
                ],
                correct: 1
            },
            {
                question: "What environmental change supports reducing social media?",
                options: [
                    "Using social media in bed",
                    "Creating phone-free zones in your home",
                    "Having multiple devices for social media",
                    "Following more accounts for variety"
                ],
                correct: 1
            },
            {
                question: "How should you handle social media urges?",
                options: [
                    "Immediately give in to the urge",
                    "Use the urge as a cue for a better habit",
                    "Fight the urge with willpower",
                    "Distract yourself with other digital activities"
                ],
                correct: 1
            },
            {
                question: "What is the key to breaking social media addiction?",
                options: [
                    "Going cold turkey immediately",
                    "Gradually reducing usage with systems",
                    "Using social media only for work",
                    "Switching to different platforms"
                ],
                correct: 1
            }
        ]
        // Add more quiz sets for other bad habits...
    }
};

// Generate additional quiz questions for remaining habits
function generateQuizForHabit(habitId, habitType) {
    // This would generate contextual quiz questions based on the specific habit
    // For now, we'll use template questions that can be customized
    const templateQuestions = [
        {
            question: `What is the first step in ${habitType === 'good' ? 'building' : 'breaking'} this habit?`,
            options: [
                "Rely on motivation alone",
                "Make small, consistent changes",
                "Make dramatic changes immediately",
                "Wait for the perfect time"
            ],
            correct: 1
        },
        {
            question: "According to Atomic Habits, what percentage better do you need to get each day?",
            options: ["1%", "10%", "25%", "50%"],
            correct: 0
        },
        {
            question: "What is more important for long-term success?",
            options: [
                "Intensity of effort",
                "Consistency of effort",
                "Perfect conditions",
                "Motivation levels"
            ],
            correct: 1
        },
        {
            question: "How long does it typically take to form a habit?",
            options: [
                "21 days exactly",
                "It varies greatly by person and habit",
                "Always 66 days",
                "One year minimum"
            ],
            correct: 1
        },
        {
            question: "What should you focus on when building habits?",
            options: [
                "Outcomes only",
                "Systems and processes",
                "Comparing to others",
                "Perfect execution"
            ],
            correct: 1
        }
    ];
    
    return templateQuestions;
}

// Make quiz data globally available
window.quizData = quizData;
window.generateQuizForHabit = generateQuizForHabit;