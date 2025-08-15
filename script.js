// Main application logic
let currentUser = null;
let currentHabitType = null;
let selectedHabit = null;
let currentStage = 1;
let quizScore = 0;
let currentQuestionIndex = 0;
let currentQuiz = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Check if user data exists in localStorage
    const userData = localStorage.getItem('atomicHabitsUser');
    if (userData) {
        currentUser = JSON.parse(userData);
        showWelcomeSection();
    } else {
        showRegistrationSection();
    }
    
    // Set up form submission
    document.getElementById('userForm').addEventListener('submit', handleUserRegistration);
}

function handleUserRegistration(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const userData = {
        fullName: formData.get('fullName'),
        designation: formData.get('designation'),
        team: formData.get('team'),
        city: formData.get('city'),
        createdAt: new Date().toISOString()
    };
    
    // Save to localStorage
    localStorage.setItem('atomicHabitsUser', JSON.stringify(userData));
    currentUser = userData;
    
    // Save to Supabase
    saveUserToDatabase(userData);
    
    // Show welcome animation and proceed
    showWelcomeAnimation();
    setTimeout(() => {
        showWelcomeSection();
    }, 2000);
}

async function saveUserToDatabase(userData) {
    try {
        showLoading();
        const success = await window.supabaseClient.createUser({
            full_name: userData.fullName,
            designation: userData.designation,
            team: userData.team,
            city: userData.city,
            habit_type: '',
            selected_habit: '',
            current_stage: 1,
            progress_percentage: 0
        });
        
        if (success) {
            console.log('User saved to database successfully');
        }
    } catch (error) {
        console.error('Error saving user to database:', error);
    } finally {
        hideLoading();
    }
}

function showRegistrationSection() {
    hideAllSections();
    document.getElementById('registrationSection').style.display = 'block';
}

function showWelcomeSection() {
    hideAllSections();
    document.getElementById('habitSelectionSection').style.display = 'block';
    
    // Update header with user welcome
    const welcomeElement = document.getElementById('userWelcome');
    const welcomeText = document.getElementById('welcomeText');
    welcomeText.textContent = `Welcome back, ${currentUser.fullName}!`;
    welcomeElement.style.display = 'block';
    
    fadeInSection('habitSelectionSection');
}

function selectHabitType(type) {
    currentHabitType = type;
    showHabitListSection();
}

function showHabitListSection() {
    hideAllSections();
    document.getElementById('habitListSection').style.display = 'block';
    
    const title = document.getElementById('habitListTitle');
    title.textContent = currentHabitType === 'good' ? 
        'Select a Good Habit to Build' : 
        'Select a Bad Habit to Break';
    
    populateFeaturedHabits();
    populateAllHabitsDropdown();
    
    fadeInSection('habitListSection');
}

function populateFeaturedHabits() {
    const grid = document.getElementById('featuredHabitsGrid');
    grid.innerHTML = '';
    
    const featuredHabits = habitsData[currentHabitType].filter(habit => habit.featured);
    
    featuredHabits.forEach(habit => {
        const card = document.createElement('div');
        card.className = 'habit-card';
        card.onclick = () => selectHabit(habit);
        
        card.innerHTML = `
            <h4>${habit.name}</h4>
            <p>${habit.description}</p>
        `;
        
        grid.appendChild(card);
    });
}

function populateAllHabitsDropdown() {
    const dropdown = document.getElementById('allHabitsDropdown');
    dropdown.innerHTML = '<option value="">Select from all habits...</option>';
    
    habitsData[currentHabitType].forEach(habit => {
        const option = document.createElement('option');
        option.value = habit.id;
        option.textContent = habit.name;
        dropdown.appendChild(option);
    });
    
    dropdown.addEventListener('change', function() {
        if (this.value) {
            const habit = habitsData[currentHabitType].find(h => h.id == this.value);
            selectHabit(habit);
        }
    });
}

function selectHabit(habit) {
    selectedHabit = habit;
    
    // Update user progress in database
    updateUserProgress();
    
    showStagesSection();
}

async function updateUserProgress() {
    try {
        const success = await window.supabaseClient.updateUserProgress(currentUser.fullName, {
            habit_type: currentHabitType,
            selected_habit: selectedHabit.name,
            current_stage: currentStage,
            progress_percentage: (currentStage - 1) * 25
        });
        
        if (success) {
            console.log('Progress updated successfully');
        }
    } catch (error) {
        console.error('Error updating progress:', error);
    }
}

function showStagesSection() {
    hideAllSections();
    document.getElementById('stagesSection').style.display = 'block';
    
    // Update selected habit info
    document.getElementById('selectedHabitTitle').textContent = selectedHabit.name;
    document.getElementById('selectedHabitDescription').textContent = selectedHabit.description;
    
    // Update stage availability
    updateStageAvailability();
    
    fadeInSection('stagesSection');
}

function updateStageAvailability() {
    for (let i = 1; i <= 4; i++) {
        const stageCard = document.getElementById(`stage${i}`);
        const stageStatus = document.getElementById(`stage${i}Status`);
        
        if (i <= currentStage) {
            stageCard.classList.remove('locked');
            stageStatus.innerHTML = i < currentStage ? 
                '<i class="fas fa-check"></i>' : 
                '<i class="fas fa-unlock"></i>';
        } else {
            stageCard.classList.add('locked');
            stageStatus.innerHTML = '<i class="fas fa-lock"></i>';
        }
        
        if (i < currentStage) {
            stageCard.classList.add('completed');
        }
    }
}

function openStage(stageNumber) {
    if (stageNumber > currentStage) {
        alert('Complete the previous stages first!');
        return;
    }
    
    showStageDetail(stageNumber);
}

function showStageDetail(stageNumber) {
    hideAllSections();
    document.getElementById('stageDetailSection').style.display = 'block';
    
    const stageContent = stagesContent[currentHabitType][stageNumber];
    document.getElementById('stageDetailTitle').textContent = stageContent.title;
    document.getElementById('stageDetailContent').innerHTML = stageContent.content;
    
    // Update complete button
    const completeBtn = document.getElementById('completeStageBtn');
    if (stageNumber < currentStage) {
        completeBtn.textContent = 'Stage Completed';
        completeBtn.disabled = true;
        completeBtn.style.opacity = '0.6';
    } else {
        completeBtn.textContent = 'Complete Stage';
        completeBtn.disabled = false;
        completeBtn.style.opacity = '1';
        completeBtn.onclick = () => completeStage(stageNumber);
    }
    
    fadeInSection('stageDetailSection');
}

function completeStage(stageNumber = currentStage) {
    if (stageNumber === currentStage && currentStage < 4) {
        currentStage++;
        updateUserProgress();
        
        // Show completion animation
        createConfetti();
        
        setTimeout(() => {
            showStagesSection();
        }, 1500);
    } else if (currentStage === 4) {
        // All stages completed, start quiz
        startQuiz();
    }
}

function startQuiz() {
    hideAllSections();
    document.getElementById('quizSection').style.display = 'block';
    
    // Initialize quiz
    currentQuestionIndex = 0;
    quizScore = 0;
    
    // Get quiz questions for the selected habit
    if (quizData[currentHabitType] && quizData[currentHabitType][selectedHabit.id]) {
        currentQuiz = quizData[currentHabitType][selectedHabit.id];
    } else {
        // Generate generic quiz questions
        currentQuiz = generateQuizForHabit(selectedHabit.id, currentHabitType);
    }
    
    document.getElementById('totalQuestions').textContent = currentQuiz.length;
    
    showQuestion();
    fadeInSection('quizSection');
}

function showQuestion() {
    if (currentQuestionIndex >= currentQuiz.length) {
        showFinalScore();
        return;
    }
    
    const question = currentQuiz[currentQuestionIndex];
    
    document.getElementById('questionNumber').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('currentScore').textContent = quizScore;
    
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionElement);
    });
}

function selectAnswer(selectedIndex) {
    const question = currentQuiz[currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option');
    
    // Disable all options
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Show correct/incorrect
    options[selectedIndex].classList.add(selectedIndex === question.correct ? 'correct' : 'incorrect');
    if (selectedIndex !== question.correct) {
        options[question.correct].classList.add('correct');
    }
    
    // Update score
    if (selectedIndex === question.correct) {
        quizScore++;
    }
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
    }, 2000);
}

function showFinalScore() {
    hideAllSections();
    document.getElementById('finalScoreSection').style.display = 'block';
    
    const percentage = Math.round((quizScore / currentQuiz.length) * 100);
    
    // Update certificate
    document.getElementById('certificateName').textContent = currentUser.fullName;
    document.getElementById('certificateCourse').textContent = 
        `${currentHabitType === 'good' ? 'Building' : 'Breaking'} the "${selectedHabit.name}" Habit`;
    document.getElementById('certificateScore').textContent = `${percentage}%`;
    document.getElementById('certificateDate').textContent = new Date().toLocaleDateString();
    
    // Save final results to database
    saveFinalResults(percentage);
    
    // Show celebration animation
    createFireworks();
    createConfetti();
    
    fadeInSection('finalScoreSection');
}

async function saveFinalResults(percentage) {
    try {
        const success = await window.supabaseClient.saveQuizResult(currentUser.fullName, {
            score: quizScore,
            total_questions: currentQuiz.length,
            percentage: percentage,
            progress_percentage: 100
        });
        
        if (success) {
            console.log('Final results saved successfully');
        }
    } catch (error) {
        console.error('Error saving final results:', error);
    }
}

function downloadCertificate() {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('landscape', 'mm', 'a4');
    
    // Set background color
    pdf.setFillColor(26, 26, 26);
    pdf.rect(0, 0, 297, 210, 'F');
    
    // Add border
    pdf.setDrawColor(255, 215, 0);
    pdf.setLineWidth(3);
    pdf.rect(10, 10, 277, 190);
    
    // Add title
    pdf.setTextColor(255, 215, 0);
    pdf.setFontSize(32);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Certificate of Completion', 148.5, 40, { align: 'center' });
    
    // Add user name
    pdf.setFontSize(24);
    pdf.setTextColor(255, 255, 255);
    pdf.text('This is to certify that', 148.5, 70, { align: 'center' });
    
    pdf.setFontSize(28);
    pdf.setTextColor(255, 215, 0);
    pdf.setFont('helvetica', 'bold');
    pdf.text(currentUser.fullName.toUpperCase(), 148.5, 90, { align: 'center' });
    
    // Add course info
    pdf.setFontSize(18);
    pdf.setTextColor(255, 255, 255);
    pdf.setFont('helvetica', 'normal');
    pdf.text('has successfully completed the', 148.5, 110, { align: 'center' });
    
    pdf.setFontSize(20);
    pdf.setTextColor(135, 206, 235);
    pdf.setFont('helvetica', 'bold');
    const courseText = `${currentHabitType === 'good' ? 'Building' : 'Breaking'} the "${selectedHabit.name}" Habit`;
    pdf.text(courseText, 148.5, 130, { align: 'center' });
    
    // Add score
    pdf.setFontSize(16);
    pdf.setTextColor(255, 255, 255);
    pdf.text('with a score of', 148.5, 150, { align: 'center' });
    
    pdf.setFontSize(36);
    pdf.setTextColor(255, 215, 0);
    pdf.setFont('helvetica', 'bold');
    const percentage = Math.round((quizScore / currentQuiz.length) * 100);
    pdf.text(`${percentage}%`, 148.5, 170, { align: 'center' });
    
    // Add signature
    pdf.setFontSize(14);
    pdf.setTextColor(255, 255, 255);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Zubair Ahmad', 50, 185);
    pdf.text('Senior SFE Manager', 50, 195);
    pdf.text('STAR-Shaigan Learning Portal', 50, 205);
    
    // Add date
    pdf.text(new Date().toLocaleDateString(), 247, 185);
    
    // Save the PDF
    pdf.save(`${currentUser.fullName}_Atomic_Habits_Certificate.pdf`);
}

function startNewJourney() {
    // Reset all variables
    currentHabitType = null;
    selectedHabit = null;
    currentStage = 1;
    quizScore = 0;
    currentQuestionIndex = 0;
    currentQuiz = [];
    
    // Show habit selection
    showWelcomeSection();
}

function changeTheme(themeName) {
    document.body.className = themeName;
    localStorage.setItem('selectedTheme', themeName);
}

function hideAllSections() {
    const sections = [
        'registrationSection',
        'habitSelectionSection', 
        'habitListSection',
        'stagesSection',
        'stageDetailSection',
        'quizSection',
        'finalScoreSection'
    ];
    
    sections.forEach(sectionId => {
        document.getElementById(sectionId).style.display = 'none';
    });
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        changeTheme(savedTheme);
    }
});

// Make functions globally available
window.selectHabitType = selectHabitType;
window.selectHabit = selectHabit;
window.openStage = openStage;
window.completeStage = completeStage;
window.downloadCertificate = downloadCertificate;
window.startNewJourney = startNewJourney;
window.changeTheme = changeTheme;