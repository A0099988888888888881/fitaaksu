/**
 * FitAasu - Main Application Logic
 * Interactive Workout Tracker, Day 1-7 Engine, Diet Navigator, Rest Timer & Calculators
 */

/* ==========================================================================
   EXERCISE IMAGE LOOKUP TABLE
   Maps each exercise imageType → animated GIF demo URL
   ========================================================================== */
const EXERCISE_IMAGES = {
  // ── DAY 1: Chest + Triceps ──────────────────────────────────────────────
  "bench-press":        "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif",
  "incline-press":      "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Barbell-Bench-Press.gif",
  "dips":               "https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Dip.gif",
  "cable-fly":          "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Fly.gif",
  "skull-crushers":     "https://fitnessprogramer.com/wp-content/uploads/2021/02/Skull-Crusher.gif",
  "rope-pushdown":      "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pushdown.gif",
  "overhead-triceps":   "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Overhead-Triceps-Extension.gif",
  "pushups":            "https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif",

  // ── DAY 2: Back + Biceps ────────────────────────────────────────────────
  "deadlift":           "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif",
  "barbell-row":        "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif",
  "lat-pulldown":       "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif",
  "seated-row":         "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif",
  "face-pull":          "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif",
  "bicep-curl":         "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif",
  "hammer-curl":        "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif",
  "preacher-curl":      "https://fitnessprogramer.com/wp-content/uploads/2021/02/Preacher-Curl.gif",

  // ── DAY 3: Legs ─────────────────────────────────────────────────────────
  "barbell-squat":      "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Squat.gif",
  "rdl":                "https://fitnessprogramer.com/wp-content/uploads/2021/02/Romanian-Deadlift.gif",
  "leg-press":          "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Press.gif",
  "bulgarian-split-squat": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Bulgarian-Split-Squat.gif",
  "leg-curl":           "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Leg-Curl.gif",
  "leg-extension":      "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Extension.gif",
  "standing-calf":      "https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Calf-Raise.gif",
  "seated-calf":        "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Calf-Raise.gif",

  // ── DAY 4: Shoulders + Abs ──────────────────────────────────────────────
  "overhead-press":     "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Standing-Military-Press.gif",
  "lateral-raise":      "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif",
  "arnold-press":       "https://fitnessprogramer.com/wp-content/uploads/2021/02/Arnold-Press.gif",
  "rear-delt-fly":      "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Fly.gif",
  "shrugs":             "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shrug.gif",
  "hanging-leg-raise":  "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hanging-Leg-Raise.gif",
  "cable-crunch":       "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crunch.gif",
  "plank":              "https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank.gif",

  // ── DAY 5: Full Body HIIT ───────────────────────────────────────────────
  "kettlebell-swing":   "https://fitnessprogramer.com/wp-content/uploads/2021/02/Kettlebell-Swing.gif",
  "thrusters":          "https://fitnessprogramer.com/wp-content/uploads/2021/06/Barbell-Thruster.gif",
  "pullups":            "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif",
  "renegade-row":       "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Renegade-Row.gif",
  "walking-lunges":     "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Walking-Lunge.gif",
  "burpee":             "https://fitnessprogramer.com/wp-content/uploads/2021/02/Burpee.gif",
  "farmers-walk":       "https://fitnessprogramer.com/wp-content/uploads/2021/02/Farmers-Walk.gif",
  "mountain-climber":   "https://fitnessprogramer.com/wp-content/uploads/2021/02/Mountain-Climber.gif",

  // ── DAY 6: Arms + Abs Specialization ────────────────────────────────────
  "close-grip-bench":       "https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Bench-Press.gif",
  "incline-curl":            "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Curl.gif",
  "overhead-cable-tricep":   "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Overhead-Triceps-Extension.gif",
  "reverse-curl":            "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Reverse-Curl.gif",
  "ab-wheel":                "https://fitnessprogramer.com/wp-content/uploads/2021/02/Ab-Wheel-Rollout.gif",
  "russian-twist":           "https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif",
  "hollow-body":             "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hollow-Body-Hold.gif",

  // ── DAY 7: Active Recovery ───────────────────────────────────────────────
  "wgs":               "https://fitnessprogramer.com/wp-content/uploads/2021/02/World-Greatest-Stretch.gif",
  "foam-roller":       "https://fitnessprogramer.com/wp-content/uploads/2021/02/Foam-Roller-Thoracic-Spine.gif",
  "couch-stretch":     "https://fitnessprogramer.com/wp-content/uploads/2021/02/Kneeling-Hip-Flexor-Stretch.gif",
  "hip-9090":          "https://fitnessprogramer.com/wp-content/uploads/2021/02/90-90-Hip-Rotation.gif",
  "cat-cow":           "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cat-Cow-Stretch.gif",
  "band-pullapart":    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Band-Pull-Apart.gif",
  "liss-walk":         "https://fitnessprogramer.com/wp-content/uploads/2021/02/Walking.gif",
  "breathing":         "https://fitnessprogramer.com/wp-content/uploads/2021/02/Diaphragmatic-Breathing.gif",
};

/** Returns image URL for an exercise, with a gradient SVG fallback */
function getExerciseImg(imageType) {
  return EXERCISE_IMAGES[imageType] || null;
}

// Application State
const state = {
  currentDay: 1,
  activeDietId: "bulking",
  activeExerciseFilter: "all",
  activeEquipmentFilter: "all",
  searchQuery: "",
  completedSets: JSON.parse(localStorage.getItem("fitaasu_completed_sets") || "{}"),
  waterIntake: parseInt(localStorage.getItem("fitaasu_water_count") || "0", 10),
  timer: {
    duration: 60,
    remaining: 60,
    interval: null,
    isRunning: false
  }
};

// Web Audio API Synthesizer for Rest Timer Chimes
class SoundFX {
  static init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
  }

  static playBeep(freq = 600, duration = 0.15, type = "sine") {
    try {
      this.init();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      console.warn("Audio playback not supported or user gesture needed:", e);
    }
  }

  static playFinishChime() {
    this.playBeep(523.25, 0.15); // C5
    setTimeout(() => this.playBeep(659.25, 0.15), 150); // E5
    setTimeout(() => this.playBeep(783.99, 0.35), 300); // G5
  }
}

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  initTransformationSection();
  initDayNavigation();
  renderDayWorkout(state.currentDay);
  initExerciseLibrary();
  initDietSection();
  initCalculators();
  initRestTimer();
  initWaterTracker();
  initMobileMenu();
  initCalorieTracker();
  initStepCounter();
  initRunningTracker();
  setupEventListeners();
});

/* ==========================================================================
   0. 30 KG Transformation Protocol & Interactive Calculator
   ========================================================================== */

let activeTransPhase = 1;

function initTransformationSection() {
  renderTransformationPhases();
  renderMilestones();
  renderAntiLooseSkin();
  renderCravingCrushers();

  const form = document.getElementById("trans-calc-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      calculate30KgTransformation();
    });
    const weightInput = document.getElementById("trans-weight");
    const paceSelect = document.getElementById("trans-pace");
    if (weightInput) weightInput.addEventListener("input", calculate30KgTransformation);
    if (paceSelect) paceSelect.addEventListener("change", calculate30KgTransformation);

    calculate30KgTransformation();
  }
}

function renderTransformationPhases() {
  const container = document.getElementById("trans-phases-container");
  if (!container || !window.TRANSFORMATION_30KG_DATA) return;

  const phases = TRANSFORMATION_30KG_DATA.phases;
  container.innerHTML = `
    <!-- Phase Tabs -->
    <div class="flex gap-2 pb-2 overflow-x-auto scrollbar-none mb-6">
      ${phases.map(p => `
        <button 
          onclick="switchTransPhase(${p.phaseNumber})" 
          class="trans-phase-btn px-4 py-2.5 rounded-xl border text-xs md:text-sm font-bold transition-all flex items-center gap-2 ${
            p.phaseNumber === activeTransPhase 
              ? 'bg-[#76e000] text-slate-950 border-[#8bf500] shadow-lg shadow-[#76e000]/25' 
              : 'bg-slate-800/60 text-slate-300 border-slate-700 hover:border-slate-600'
          }"
          id="trans-phase-btn-${p.phaseNumber}"
        >
          <span class="w-5 h-5 rounded-full ${p.phaseNumber === activeTransPhase ? 'bg-slate-950 text-[#76e000]' : 'bg-slate-700 text-slate-300'} text-[11px] font-bold flex items-center justify-center">
            ${p.phaseNumber}
          </span>
          <span>Phase ${p.phaseNumber}: ${p.lossTarget.split('(')[0]}</span>
        </button>
      `).join("")}
    </div>

    <!-- Active Phase Content Card -->
    <div id="trans-phase-card">
      ${renderPhaseCard(phases[activeTransPhase - 1])}
    </div>
  `;
}

function switchTransPhase(phaseNum) {
  activeTransPhase = phaseNum;
  document.querySelectorAll(".trans-phase-btn").forEach(btn => {
    const isThis = btn.id === `trans-phase-btn-${phaseNum}`;
    btn.className = `trans-phase-btn px-4 py-2.5 rounded-xl border text-xs md:text-sm font-bold transition-all flex items-center gap-2 ${
      isThis 
        ? 'bg-[#76e000] text-slate-950 border-[#8bf500] shadow-lg shadow-[#76e000]/25' 
        : 'bg-slate-800/60 text-slate-300 border-slate-700 hover:border-slate-600'
    }`;
    const badge = btn.querySelector("span");
    if (badge) {
      badge.className = `w-5 h-5 rounded-full ${isThis ? 'bg-slate-950 text-[#76e000]' : 'bg-slate-700 text-slate-300'} text-[11px] font-bold flex items-center justify-center`;
    }
  });

  const phaseCard = document.getElementById("trans-phase-card");
  if (phaseCard && window.TRANSFORMATION_30KG_DATA) {
    const phase = TRANSFORMATION_30KG_DATA.phases[phaseNum - 1];
    phaseCard.innerHTML = renderPhaseCard(phase);
  }
}

function renderPhaseCard(phase) {
  return `
    <div class="glass-card rounded-2xl p-6 md:p-8 border border-slate-800 hover:border-[#76e000]/30 transition-all">
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-800">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#76e000]/10 text-[#76e000] border border-[#76e000]/30">
              ${phase.timeline}
            </span>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-200 border border-slate-700">
              🎯 Target: ${phase.lossTarget}
            </span>
          </div>
          <h4 class="text-2xl font-extrabold text-white tracking-tight">${phase.name}</h4>
          <p class="text-slate-400 text-sm mt-1">${phase.focus}</p>
        </div>

        <div class="grid grid-cols-2 gap-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800 shrink-0">
          <div class="text-center px-2">
            <span class="text-[10px] font-mono uppercase text-slate-400 block">Daily Intake</span>
            <span class="text-lg font-extrabold text-[#76e000]">${phase.dailyCalories}</span>
          </div>
          <div class="text-center px-2">
            <span class="text-[10px] font-mono uppercase text-slate-400 block">Daily Steps</span>
            <span class="text-lg font-extrabold text-white">${phase.dailySteps}</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
        <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          <div class="text-xs font-mono font-bold text-[#76e000] uppercase mb-1 flex items-center gap-1.5">
            <i class="fa-solid fa-person-walking"></i> Cardio Strategy
          </div>
          <p class="text-xs md:text-sm text-slate-300">${phase.cardio}</p>
        </div>

        <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          <div class="text-xs font-mono font-bold text-cyan-400 uppercase mb-1 flex items-center gap-1.5">
            <i class="fa-solid fa-dumbbell"></i> Resistance Training
          </div>
          <p class="text-xs md:text-sm text-slate-300">${phase.lifting}</p>
        </div>
      </div>

      <div class="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
        <div class="flex items-start gap-2 text-emerald-400">
          <i class="fa-solid fa-trophy text-xs mt-0.5 shrink-0"></i>
          <span><strong>Physical Milestone:</strong> ${phase.milestone}</span>
        </div>
        <div class="flex items-start gap-2 text-amber-400">
          <i class="fa-solid fa-triangle-exclamation text-xs mt-0.5 shrink-0"></i>
          <span><strong>Coach's Rule:</strong> ${phase.proTip}</span>
        </div>
      </div>
    </div>
  `;
}

function renderMilestones() {
  const container = document.getElementById("trans-milestones-grid");
  if (!container || !window.TRANSFORMATION_30KG_DATA) return;

  container.innerHTML = TRANSFORMATION_30KG_DATA.milestones.map((m, idx) => `
    <div class="glass-card rounded-2xl p-5 border border-slate-800 text-center relative overflow-hidden group hover:border-[#76e000]/40 transition-all">
      <div class="absolute -right-4 -bottom-4 text-slate-800/40 text-6xl font-black font-display pointer-events-none select-none">
        -${m.kg}KG
      </div>
      <div class="w-10 h-10 rounded-xl bg-[#76e000]/15 text-[#76e000] border border-[#76e000]/30 font-black text-sm flex items-center justify-center mx-auto mb-3">
        -${m.kg}k
      </div>
      <h5 class="text-base font-bold text-white tracking-tight">${m.badge}</h5>
      <span class="text-[11px] font-mono text-[#76e000] font-semibold">${m.weeks}</span>
      <p class="text-slate-400 text-xs mt-2">${m.reward}</p>
    </div>
  `).join("");
}

function renderAntiLooseSkin() {
  const container = document.getElementById("anti-loose-skin-grid");
  if (!container || !window.TRANSFORMATION_30KG_DATA) return;

  container.innerHTML = TRANSFORMATION_30KG_DATA.antiLooseSkinRules.map((rule, idx) => `
    <div class="glass-card rounded-2xl p-5 border border-slate-800 hover:border-[#76e000]/30 transition-all">
      <div class="flex items-center gap-2.5 text-sm font-bold text-white mb-2">
        <span class="w-6 h-6 rounded-lg bg-[#76e000]/20 text-[#76e000] border border-[#76e000]/40 font-mono text-xs flex items-center justify-center shrink-0">
          0${idx + 1}
        </span>
        <span>${rule.title}</span>
      </div>
      <p class="text-xs text-slate-400 leading-relaxed">${rule.desc}</p>
    </div>
  `).join("");
}

function renderCravingCrushers() {
  const container = document.getElementById("craving-crushers-grid");
  if (!container || !window.TRANSFORMATION_30KG_DATA) return;

  container.innerHTML = TRANSFORMATION_30KG_DATA.cravingCrushers.map(c => `
    <div class="glass-card rounded-2xl p-4 border border-slate-800/90 text-xs">
      <div class="font-bold text-rose-400 flex items-center gap-1.5 mb-1">
        <i class="fa-solid fa-bell"></i> ${c.trigger}
      </div>
      <div class="text-slate-300">
        <strong class="text-[#76e000]">Fitaasu Solution:</strong> ${c.fix}
      </div>
    </div>
  `).join("");
}

function calculate30KgTransformation() {
  const weightInput = document.getElementById("trans-weight");
  const paceSelect = document.getElementById("trans-pace");
  const resultsBox = document.getElementById("trans-results-box");

  if (!weightInput || !paceSelect || !resultsBox) return;

  const currentWeight = parseFloat(weightInput.value) || 95;
  const paceWeeks = parseInt(paceSelect.value, 10) || 28;
  const targetWeight = Math.max(40, currentWeight - 30);

  // 1 kg of fat = ~7,700 kcal
  const totalCalorieDeficit = 30 * 7700; // 231,000 kcal
  const totalDays = paceWeeks * 7;
  const dailyDeficit = Math.round(totalCalorieDeficit / totalDays);
  const weeklyRate = (30 / paceWeeks).toFixed(2);

  // Projected Target Date
  const now = new Date();
  const finishDate = new Date();
  finishDate.setDate(now.getDate() + totalDays);
  const finishFormatted = finishDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  // Milestone Dates
  const date5kg = new Date(now.getTime() + (totalDays * (5 / 30) * 86400000)).toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const date10kg = new Date(now.getTime() + (totalDays * (10 / 30) * 86400000)).toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const date20kg = new Date(now.getTime() + (totalDays * (20 / 30) * 86400000)).toLocaleDateString("en-US", { month: "short", day: "numeric" });

  resultsBox.innerHTML = `
    <div class="glass-card rounded-2xl p-6 border border-[#76e000]/40 bg-slate-900/90 shadow-2xl">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div>
          <span class="text-xs font-mono uppercase text-[#76e000] font-bold">Your 30 KG Transformation Matrix</span>
          <div class="text-2xl font-black text-white mt-0.5">
            ${currentWeight} kg <i class="fa-solid fa-arrow-right text-xs text-[#76e000] mx-1"></i> ${targetWeight} kg (-30 KG)
          </div>
        </div>
        <div class="text-left sm:text-right">
          <span class="text-xs text-slate-400 font-mono block">Estimated Completion:</span>
          <span class="text-base font-extrabold text-[#76e000]">${finishFormatted}</span>
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
        <div class="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
          <span class="text-[10px] font-mono uppercase text-slate-400 block">Total Duration</span>
          <span class="text-lg font-extrabold text-white">${paceWeeks} Weeks</span>
          <span class="text-[10px] text-slate-400">${totalDays} Days</span>
        </div>
        <div class="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
          <span class="text-[10px] font-mono uppercase text-[#76e000] block">Weekly Fat Loss</span>
          <span class="text-lg font-extrabold text-[#76e000]">${weeklyRate} kg</span>
          <span class="text-[10px] text-slate-400">per week</span>
        </div>
        <div class="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
          <span class="text-[10px] font-mono uppercase text-amber-400 block">Daily Deficit</span>
          <span class="text-lg font-extrabold text-amber-400">-${dailyDeficit}</span>
          <span class="text-[10px] text-slate-400">kcal/day</span>
        </div>
        <div class="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
          <span class="text-[10px] font-mono uppercase text-cyan-400 block">Total Fat Burn</span>
          <span class="text-lg font-extrabold text-cyan-400">231,000</span>
          <span class="text-[10px] text-slate-400">kcal burned</span>
        </div>
      </div>

      <!-- Milestone Timeline Progress Ladder -->
      <div class="mt-4 pt-4 border-t border-slate-800">
        <div class="text-xs font-mono text-slate-400 uppercase mb-3 flex items-center justify-between">
          <span>Projected Milestone Calendar:</span>
          <span class="text-[#76e000] font-bold">100% Achievable</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-2">
          <div class="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-xs">
            <div class="text-[#76e000] font-bold">-5 KG Milestone</div>
            <div class="text-slate-400 font-mono text-[11px]">${date5kg}</div>
          </div>
          <div class="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-xs">
            <div class="text-[#76e000] font-bold">-10 KG Milestone</div>
            <div class="text-slate-400 font-mono text-[11px]">${date10kg}</div>
          </div>
          <div class="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-xs">
            <div class="text-[#76e000] font-bold">-20 KG Milestone</div>
            <div class="text-slate-400 font-mono text-[11px]">${date20kg}</div>
          </div>
          <div class="bg-[#76e000]/10 p-2.5 rounded-lg border border-[#76e000]/40 text-xs">
            <div class="text-[#76e000] font-bold">🏆 -30 KG Reborn!</div>
            <div class="text-white font-mono text-[11px] font-bold">${finishFormatted}</div>
          </div>
        </div>
      </div>

      <div class="mt-5 pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <span class="text-slate-400">
          <i class="fa-solid fa-circle-check text-[#76e000] mr-1"></i> Matches our <strong>1,620 kcal 30 KG Transformation Diet</strong>
        </span>
        <button onclick="goToTransformationDiet()" class="px-4 py-2 rounded-xl bg-gradient-to-r from-[#76e000] to-[#55a000] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md shadow-[#76e000]/20 hover:scale-[1.02] transition-all flex items-center gap-1.5">
          <i class="fa-solid fa-utensils"></i> Open 30 KG Meal Plan
        </button>
      </div>
    </div>
  `;
}

function goToTransformationDiet() {
  switchDietPlan("transformation-30kg");
  const dietSec = document.getElementById("diet-section");
  if (dietSec) {
    dietSec.scrollIntoView({ behavior: "smooth" });
  }
}

/* ==========================================================================
   1. Day 1 to 7 Workout Routine Engine
   ========================================================================== */

function initDayNavigation() {
  const dayTabsContainer = document.getElementById("day-tabs-nav");
  if (!dayTabsContainer) return;

  dayTabsContainer.innerHTML = WORKOUT_DAYS.map(day => `
    <button 
      class="day-tab-btn px-4 py-3 rounded-xl border border-slate-700/60 bg-slate-800/40 text-slate-300 font-semibold text-sm flex flex-col items-center gap-1 transition-all hover:border-[#76e000]/40 hover:bg-slate-800/80 ${day.dayNumber === state.currentDay ? 'active' : ''}" 
      data-day="${day.dayNumber}"
    >
      <span class="text-xs tracking-wider uppercase opacity-75 font-mono">Day ${day.dayNumber}</span>
      <span class="text-white font-bold whitespace-nowrap text-xs md:text-sm">${day.title.split('&')[0].trim()}</span>
    </button>
  `).join("");

  dayTabsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".day-tab-btn");
    if (!btn) return;
    const dayNum = parseInt(btn.dataset.day, 10);
    switchDay(dayNum);
  });
}

function switchDay(dayNumber) {
  state.currentDay = dayNumber;
  document.querySelectorAll(".day-tab-btn").forEach(btn => {
    const isThis = parseInt(btn.dataset.day, 10) === dayNumber;
    btn.classList.toggle("active", isThis);
  });
  renderDayWorkout(dayNumber);
}

function renderDayWorkout(dayNumber) {
  const day = WORKOUT_DAYS.find(d => d.dayNumber === dayNumber);
  if (!day) return;

  // Render Day Header Banner
  const banner = document.getElementById("day-header-banner");
  if (banner) {
    const totalSets = day.exercises.reduce((acc, ex) => acc + ex.sets, 0);
    const completedForThisDay = countCompletedSetsForDay(day);
    const pct = totalSets > 0 ? Math.round((completedForThisDay / totalSets) * 100) : 0;

    banner.innerHTML = `
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#76e000]/10 text-[#76e000] border border-[#76e000]/30">
              DAY ${day.dayNumber} OF 7
            </span>
            <span class="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
              ${day.focus}
            </span>
            <span class="px-3 py-1 rounded-full text-xs font-bold ${
              day.intensity === 'Extreme' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
              day.intensity === 'High' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
              'bg-[#76e000]/20 text-[#76e000] border border-[#76e000]/30'
            }">
              ${day.intensity} Intensity
            </span>
          </div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">${day.title}</h2>
          <p class="text-slate-400 text-sm md:text-base mt-1 max-w-2xl">${day.tagline}</p>
        </div>

        <div class="flex items-center gap-6 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
          <div class="text-center">
            <div class="text-xs text-slate-400 uppercase tracking-wider font-mono">Duration</div>
            <div class="text-lg font-bold text-white flex items-center justify-center gap-1.5 mt-0.5">
              <i class="fa-regular fa-clock text-[#76e000] text-sm"></i> ${day.duration}
            </div>
          </div>
          <div class="h-8 w-px bg-slate-800"></div>
          <div class="text-center">
            <div class="text-xs text-slate-400 uppercase tracking-wider font-mono">Burn Est.</div>
            <div class="text-lg font-bold text-amber-400 flex items-center justify-center gap-1.5 mt-0.5">
              <i class="fa-solid fa-fire text-amber-400 text-sm"></i> ${day.caloriesBurn}
            </div>
          </div>
          <div class="h-8 w-px bg-slate-800"></div>
          <div class="text-center">
            <div class="text-xs text-slate-400 uppercase tracking-wider font-mono">Exercises</div>
            <div class="text-lg font-bold text-[#76e000] flex items-center justify-center gap-1.5 mt-0.5">
              <i class="fa-solid fa-dumbbell text-[#76e000] text-sm"></i> ${day.exercises.length}
            </div>
          </div>
        </div>
      </div>

      <!-- Workout Progress & Warmup bar -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        <!-- Progress Bar -->
        <div class="lg:col-span-1 glass-card p-4 rounded-xl flex flex-col justify-between">
          <div class="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
            <span>DAY ${day.dayNumber} PROGRESS</span>
            <span class="text-[#76e000] font-bold" id="day-progress-pct">${pct}% (${completedForThisDay}/${totalSets} sets)</span>
          </div>
          <div class="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
            <div id="day-progress-fill" class="bg-gradient-to-r from-[#76e000] to-emerald-400 h-full rounded-full transition-all duration-300" style="width: ${pct}%"></div>
          </div>
          <div class="mt-3 flex gap-2">
            <button onclick="markAllSetsComplete(${day.dayNumber})" class="flex-1 py-1.5 px-3 rounded-lg bg-[#76e000]/15 hover:bg-[#76e000]/25 text-[#76e000] border border-[#76e000]/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all">
              <i class="fa-solid fa-check-double"></i> Mark Day Complete
            </button>
            <button onclick="resetDaySets(${day.dayNumber})" class="py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs font-medium transition-all" title="Reset progress">
              <i class="fa-solid fa-rotate-left"></i>
            </button>
          </div>
        </div>

        <!-- Dynamic Warm-Up Guidance -->
        <div class="lg:col-span-2 glass-card p-4 rounded-xl">
          <div class="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 mb-2 uppercase">
            <i class="fa-solid fa-person-running"></i> Recommended Pre-Workout Warm-Up (5-8 Mins)
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            ${day.warmup.map(item => `
              <div class="flex items-start gap-2">
                <i class="fa-solid fa-circle-check text-[#76e000] text-[10px] mt-1 shrink-0"></i>
                <span>${item}</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }

  // Render Exercise Cards
  const exerciseContainer = document.getElementById("day-exercises-list");
  if (!exerciseContainer) return;

  exerciseContainer.innerHTML = day.exercises.map((ex, idx) => {
    const completedSetList = state.completedSets[ex.id] || [];

    // Parse rest duration to seconds for timer
    let restSec = 60;
    if (ex.rest.includes("120")) restSec = 120;
    else if (ex.rest.includes("90")) restSec = 90;
    else if (ex.rest.includes("75")) restSec = 75;
    else if (ex.rest.includes("45")) restSec = 45;

    return `
      <div class="glass-card rounded-2xl p-5 md:p-6 border border-slate-800 hover:border-slate-700/80 transition-all" id="card-${ex.id}">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <!-- Exercise Info -->
          <div class="flex items-start gap-4">
            ${(() => {
              const imgUrl = getExerciseImg(ex.imageType);
              if (imgUrl) {
                return `<div class="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-[#76e000]/30 shrink-0 bg-slate-900 relative">
                  <img src="${imgUrl}" alt="${ex.name}" class="w-full h-full object-cover"
                    onerror="this.onerror=null;this.style.display='none';this.parentElement.classList.add('flex','items-center','justify-center');this.parentElement.innerHTML='<span class=\\'text-[#76e000] font-extrabold text-lg\\'>#${idx + 1}</span>'">
                  <span class="absolute bottom-1 right-1 bg-slate-950/70 text-[#76e000] text-[9px] font-bold font-mono px-1.5 py-0.5 rounded">#${idx + 1}</span>
                </div>`;
              } else {
                return `<div class="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-[#76e000]/20 to-emerald-600/20 border border-[#76e000]/30 flex items-center justify-center text-[#76e000] font-extrabold text-lg shrink-0">#${idx + 1}</div>`;
              }
            })()}
            <div>
              <div class="flex flex-wrap items-center gap-2 mb-1">
                <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#76e000]/10 text-[#76e000] border border-[#76e000]/30">
                  ${ex.target}
                </span>
                <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                  <i class="fa-solid fa-dumbbell text-[10px] text-slate-400 mr-1"></i>${ex.equipment}
                </span>
                <span class="px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  ex.difficulty === 'Advanced' ? 'text-rose-400 bg-rose-500/10 border border-rose-500/20' :
                  ex.difficulty === 'Intermediate' ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20' :
                  'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                }">
                  ${ex.difficulty}
                </span>
              </div>
              <h3 class="text-xl font-bold text-white tracking-tight">${ex.name}</h3>
              <p class="text-slate-400 text-xs md:text-sm mt-0.5 line-clamp-2">${ex.description}</p>
            </div>
          </div>

          <!-- Target Stats -->
          <div class="flex items-center gap-4 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80 self-start lg:self-center shrink-0">
            <div class="text-center px-2">
              <span class="text-[10px] uppercase font-mono text-slate-400 block">Sets x Reps</span>
              <span class="text-sm font-extrabold text-[#76e000]">${ex.sets} Sets × ${ex.reps.split(' ')[0]}</span>
            </div>
            <div class="w-px h-7 bg-slate-800"></div>
            <div class="text-center px-2">
              <span class="text-[10px] uppercase font-mono text-slate-400 block">Rest Period</span>
              <span class="text-sm font-bold text-amber-400">${ex.rest}</span>
            </div>
            <div class="w-px h-7 bg-slate-800"></div>
            <button 
              onclick="startQuickTimer(${restSec}, '${escapeHtml(ex.name)}')" 
              class="px-3 py-1.5 rounded-lg bg-[#76e000]/10 hover:bg-[#76e000]/20 text-[#76e000] border border-[#76e000]/30 text-xs font-semibold flex items-center gap-1.5 transition-all"
              title="Start Rest Countdown"
            >
              <i class="fa-solid fa-stopwatch"></i> Rest
            </button>
          </div>
        </div>

        <!-- Interactive Set Logger & Action Bar -->
        <div class="mt-5 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-xs font-mono text-slate-400 uppercase tracking-wider mr-1">Check Sets:</span>
            ${Array.from({ length: ex.sets }, (_, i) => {
              const setNum = i + 1;
              const isDone = completedSetList.includes(setNum);
              return `
                <button 
                  onclick="toggleSetCompleted('${ex.id}', ${setNum}, ${dayNumber})"
                  class="set-pill px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 ${
                    isDone 
                      ? 'completed bg-[#76e000] text-slate-950 border-[#8bf500]' 
                      : 'bg-slate-800/70 text-slate-300 border-slate-700 hover:border-[#76e000]/50'
                  }"
                  id="set-btn-${ex.id}-${setNum}"
                >
                  <i class="fa-solid ${isDone ? 'fa-circle-check' : 'fa-circle'} text-[10px]"></i>
                  Set ${setNum}
                </button>
              `;
            }).join("")}
          </div>

          <div class="flex items-center gap-2">
            <button 
              onclick="openExerciseModal('${ex.id}')"
              class="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700/80 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 flex items-center gap-1.5 transition-all"
            >
              <i class="fa-solid fa-circle-info text-[#76e000]"></i> Coaching Cues & Form
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Cool Down section at bottom of day
  const cooldownContainer = document.getElementById("day-cooldown-section");
  if (cooldownContainer) {
    cooldownContainer.innerHTML = `
      <div class="glass-card rounded-2xl p-6 border border-slate-800 mt-6">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 text-xs font-mono font-bold text-[#76e000] uppercase mb-1">
              <i class="fa-solid fa-spa"></i> Post-Workout Cool Down & Recovery Protocol
            </div>
            <h4 class="text-lg font-bold text-white">Flush Lactic Acid & Accelerate Protein Synthesis</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs text-slate-300">
              ${day.cooldown.map(item => `
                <div class="flex items-center gap-2">
                  <i class="fa-solid fa-check text-emerald-400 text-xs"></i>
                  <span>${item}</span>
                </div>
              `).join("")}
            </div>
          </div>
          <div class="shrink-0">
            <button onclick="triggerWorkoutCelebration(${dayNumber})" class="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#76e000] to-[#55a000] text-slate-950 font-extrabold text-sm shadow-lg shadow-[#76e000]/25 hover:shadow-[#76e000]/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <i class="fa-solid fa-trophy"></i> Finish & Log Day ${dayNumber} Workout
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

function countCompletedSetsForDay(day) {
  let count = 0;
  day.exercises.forEach(ex => {
    const list = state.completedSets[ex.id] || [];
    count += list.length;
  });
  return count;
}

function toggleSetCompleted(exerciseId, setNum, dayNumber) {
  if (!state.completedSets[exerciseId]) {
    state.completedSets[exerciseId] = [];
  }
  const idx = state.completedSets[exerciseId].indexOf(setNum);
  if (idx >= 0) {
    state.completedSets[exerciseId].splice(idx, 1);
  } else {
    state.completedSets[exerciseId].push(setNum);
    SoundFX.playBeep(800, 0.08); // high tick sound
  }

  localStorage.setItem("fitaasu_completed_sets", JSON.stringify(state.completedSets));
  renderDayWorkout(dayNumber);
}

function markAllSetsComplete(dayNumber) {
  const day = WORKOUT_DAYS.find(d => d.dayNumber === dayNumber);
  if (!day) return;

  day.exercises.forEach(ex => {
    state.completedSets[ex.id] = Array.from({ length: ex.sets }, (_, i) => i + 1);
  });
  localStorage.setItem("fitaasu_completed_sets", JSON.stringify(state.completedSets));
  renderDayWorkout(dayNumber);
  triggerWorkoutCelebration(dayNumber);
}

function resetDaySets(dayNumber) {
  const day = WORKOUT_DAYS.find(d => d.dayNumber === dayNumber);
  if (!day) return;

  day.exercises.forEach(ex => {
    delete state.completedSets[ex.id];
  });
  localStorage.setItem("fitaasu_completed_sets", JSON.stringify(state.completedSets));
  renderDayWorkout(dayNumber);
  showToast(`Day ${dayNumber} sets reset.`, "info");
}

function triggerWorkoutCelebration(dayNumber) {
  SoundFX.playFinishChime();
  if (window.confetti) {
    window.confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
  showToast(`🎉 Day ${dayNumber} Workout Completed! Phenomenal work!`, "success");
}

/* ==========================================================================
   2. Exercise Directory, Search & Filter Engine
   ========================================================================== */

function initExerciseLibrary() {
  const container = document.getElementById("exercise-library-grid");
  const searchInput = document.getElementById("exercise-search-input");
  const muscleFilterContainer = document.getElementById("muscle-filter-chips");
  const equipmentFilterContainer = document.getElementById("equipment-filter-chips");

  if (!container) return;

  // Render Filter Chips
  const muscles = ["all", "Chest", "Back", "Legs", "Shoulders", "Biceps", "Triceps", "Core", "Mobility"];
  if (muscleFilterContainer) {
    muscleFilterContainer.innerHTML = muscles.map(m => `
      <button 
        class="filter-chip px-3 py-1 rounded-full text-xs font-semibold border ${m === 'all' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40' : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-600'} transition-all" 
        data-filter-type="muscle" 
        data-value="${m}"
      >
        ${m === 'all' ? 'All Muscles' : m}
      </button>
    `).join("");
  }

  const equipment = ["all", "Barbell", "Dumbbell", "Cable", "Bodyweight", "Machine"];
  if (equipmentFilterContainer) {
    equipmentFilterContainer.innerHTML = equipment.map(eq => `
      <button 
        class="filter-chip px-3 py-1 rounded-full text-xs font-semibold border ${eq === 'all' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40' : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-600'} transition-all" 
        data-filter-type="equipment" 
        data-value="${eq}"
      >
        ${eq === 'all' ? 'All Equipment' : eq}
      </button>
    `).join("");
  }

  // Filter click handlers
  document.addEventListener("click", (e) => {
    const chip = e.target.closest(".filter-chip");
    if (!chip) return;
    const type = chip.dataset.filterType;
    const val = chip.dataset.value;

    if (type === "muscle") {
      state.activeExerciseFilter = val;
      document.querySelectorAll('[data-filter-type="muscle"]').forEach(c => {
        const isMatch = c.dataset.value === val;
        c.className = `filter-chip px-3 py-1 rounded-full text-xs font-semibold border ${isMatch ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40' : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-600'} transition-all`;
      });
    } else if (type === "equipment") {
      state.activeEquipmentFilter = val;
      document.querySelectorAll('[data-filter-type="equipment"]').forEach(c => {
        const isMatch = c.dataset.value === val;
        c.className = `filter-chip px-3 py-1 rounded-full text-xs font-semibold border ${isMatch ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40' : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-600'} transition-all`;
      });
    }
    renderExerciseLibrary();
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderExerciseLibrary();
    });
  }

  renderExerciseLibrary();
}

function renderExerciseLibrary() {
  const container = document.getElementById("exercise-library-grid");
  const countLabel = document.getElementById("exercise-count-label");
  if (!container) return;

  const filtered = ALL_EXERCISES.filter(ex => {
    // Search query
    const matchSearch = !state.searchQuery || 
      ex.name.toLowerCase().includes(state.searchQuery) ||
      ex.target.toLowerCase().includes(state.searchQuery) ||
      ex.equipment.toLowerCase().includes(state.searchQuery);

    // Muscle filter
    let matchMuscle = true;
    if (state.activeExerciseFilter !== "all") {
      const f = state.activeExerciseFilter.toLowerCase();
      matchMuscle = ex.target.toLowerCase().includes(f) || 
                    ex.secondary.toLowerCase().includes(f) ||
                    ex.dayTitle.toLowerCase().includes(f);
    }

    // Equipment filter
    let matchEquipment = true;
    if (state.activeEquipmentFilter !== "all") {
      matchEquipment = ex.equipment.toLowerCase().includes(state.activeEquipmentFilter.toLowerCase());
    }

    return matchSearch && matchMuscle && matchEquipment;
  });

  if (countLabel) {
    countLabel.textContent = `Showing ${filtered.length} of ${ALL_EXERCISES.length} Exercises`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 glass-card rounded-2xl">
        <i class="fa-solid fa-magnifying-glass text-3xl text-slate-500 mb-3"></i>
        <h4 class="text-lg font-bold text-slate-300">No exercises found</h4>
        <p class="text-sm text-slate-500 mt-1">Try clearing your search query or choosing another filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(ex => `
    <div class="glass-card glass-card-interactive rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between">
      <!-- Exercise GIF Preview -->
      ${(() => {
        const imgUrl = getExerciseImg(ex.imageType);
        if (imgUrl) {
          return `<div class="w-full h-40 overflow-hidden bg-slate-900 relative">
            <img src="${imgUrl}" alt="${ex.name}" class="w-full h-full object-cover"
              onerror="this.onerror=null;this.parentElement.style.background='linear-gradient(135deg,rgba(118,224,0,0.15),rgba(16,185,129,0.1))';this.remove()">
          </div>`;
        } else {
          return `<div class="w-full h-40 bg-gradient-to-br from-[#76e000]/10 to-emerald-600/10 flex items-center justify-center">
            <i class="fa-solid fa-dumbbell text-4xl text-[#76e000]/40"></i>
          </div>`;
        }
      })()}
      <div class="p-5">
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            DAY ${ex.dayNumber}
          </span>
          <span class="text-xs text-slate-400 font-medium">
            <i class="fa-solid fa-dumbbell text-[10px] mr-1"></i>${ex.equipment}
          </span>
        </div>
        <h4 class="text-lg font-bold text-white tracking-tight">${ex.name}</h4>
        <div class="text-xs text-cyan-400 font-medium mt-0.5">${ex.target}</div>
        <p class="text-slate-400 text-xs mt-2 line-clamp-2">${ex.description}</p>
      </div>

      <div class="px-5 pb-5 pt-0 border-t border-slate-800/80 flex items-center justify-between mt-auto">
        <div class="text-xs text-slate-400 font-mono">
          <span class="text-white font-bold">${ex.sets}</span> sets × <span class="text-white font-bold">${ex.reps.split(' ')[0]}</span>
        </div>
        <button 
          onclick="openExerciseModal('${ex.id}')"
          class="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-semibold border border-slate-700/80 transition-all flex items-center gap-1"
        >
          Details <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </button>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   3. Exercise Deep-Dive Modal
   ========================================================================== */

function openExerciseModal(exerciseId) {
  const ex = ALL_EXERCISES.find(e => e.id === exerciseId);
  if (!ex) return;

  const modal = document.getElementById("exercise-modal");
  const modalContent = document.getElementById("exercise-modal-body");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <!-- Exercise Demo Image -->
    ${(() => {
      const imgUrl = getExerciseImg(ex.imageType);
      if (imgUrl) {
        return `<div class="w-full h-56 md:h-72 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 mb-5 relative">
          <img src="${imgUrl}" alt="${ex.name} demonstration" class="w-full h-full object-contain bg-slate-900"
            onerror="this.onerror=null;this.parentElement.style.display='none'">
          <div class="absolute bottom-3 right-3 bg-slate-950/80 px-3 py-1 rounded-lg text-[10px] font-mono text-slate-400">Live Demo</div>
        </div>`;
      }
      return '';
    })()}

    <!-- Modal Header -->
    <div class="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
      <div>
        <div class="flex items-center gap-2 mb-1.5 flex-wrap">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            DAY ${ex.dayNumber}: ${ex.dayTitle}
          </span>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
            ${ex.equipment}
          </span>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold ${
            ex.difficulty === 'Advanced' ? 'text-rose-400 bg-rose-500/10 border border-rose-500/20' :
            ex.difficulty === 'Intermediate' ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20' :
            'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
          }">
            ${ex.difficulty} Level
          </span>
        </div>
        <h3 class="text-2xl font-extrabold text-white tracking-tight">${ex.name}</h3>
        <p class="text-slate-400 text-sm mt-1">${ex.description}</p>
      </div>
      <button onclick="closeExerciseModal()" class="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>

    <!-- Quick Stats Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
      <div class="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-center">
        <div class="text-[10px] font-mono uppercase text-slate-400">Primary Target</div>
        <div class="text-sm font-bold text-cyan-400 mt-0.5">${ex.target}</div>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-center">
        <div class="text-[10px] font-mono uppercase text-slate-400">Sets & Reps</div>
        <div class="text-sm font-bold text-white mt-0.5">${ex.sets} Sets × ${ex.reps}</div>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-center">
        <div class="text-[10px] font-mono uppercase text-slate-400">Rest Interval</div>
        <div class="text-sm font-bold text-amber-400 mt-0.5">${ex.rest}</div>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-center">
        <div class="text-[10px] font-mono uppercase text-slate-400">Rep Tempo</div>
        <div class="text-sm font-bold text-emerald-400 mt-0.5">${ex.tempo || '2-0-1-0'}</div>
      </div>
    </div>

    <!-- Secondary Muscles -->
    <div class="mb-5 text-xs text-slate-400">
      <strong class="text-slate-300">Secondary Muscles Involved:</strong> ${ex.secondary}
    </div>

    <!-- Step-by-Step Execution Guide -->
    <div class="space-y-4">
      <div class="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
        <h4 class="text-sm font-bold text-cyan-400 uppercase font-mono flex items-center gap-2 mb-3">
          <i class="fa-solid fa-list-check"></i> Step-by-Step Form & Coaching Cues
        </h4>
        <ul class="space-y-2.5 text-sm text-slate-300">
          ${ex.cues.map((cue, i) => `
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                ${i + 1}
              </span>
              <span>${cue}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <!-- Critical Mistakes to Avoid -->
      <div class="bg-rose-950/20 p-4 rounded-xl border border-rose-500/20">
        <h4 class="text-sm font-bold text-rose-400 uppercase font-mono flex items-center gap-2 mb-2">
          <i class="fa-solid fa-triangle-exclamation"></i> Common Pitfalls to Avoid
        </h4>
        <ul class="space-y-1.5 text-xs text-rose-200/90">
          ${ex.mistakes.map(m => `
            <li class="flex items-start gap-2">
              <i class="fa-solid fa-circle-xmark text-rose-400 text-xs mt-0.5 shrink-0"></i>
              <span>${m}</span>
            </li>
          `).join("")}
        </ul>
      </div>
    </div>

    <!-- Modal Footer Actions -->
    <div class="mt-6 pt-4 border-t border-slate-800 flex justify-end gap-3">
      <button 
        onclick="switchDay(${ex.dayNumber}); closeExerciseModal();" 
        class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all"
      >
        Go to Day ${ex.dayNumber} Routine
      </button>
      <button 
        onclick="closeExerciseModal()" 
        class="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all"
      >
        Got it!
      </button>
    </div>
  `;

  modal.classList.remove("modal-hidden");
}

function closeExerciseModal() {
  const modal = document.getElementById("exercise-modal");
  if (modal) {
    modal.classList.add("modal-hidden");
  }
}

/* ==========================================================================
   4. Diet & Nutrition Section Logic
   ========================================================================== */

function initDietSection() {
  const dietTabsContainer = document.getElementById("diet-tabs-nav");
  if (!dietTabsContainer) return;

  dietTabsContainer.innerHTML = DIET_PLANS.map(plan => `
    <button 
      class="diet-tab-btn px-4 py-2.5 rounded-xl border text-xs md:text-sm font-bold transition-all ${
        plan.id === state.activeDietId 
          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/20' 
          : 'bg-slate-800/60 text-slate-300 border-slate-700 hover:border-slate-600'
      }" 
      data-diet="${plan.id}"
    >
      ${plan.title.split('&')[0].trim()}
    </button>
  `).join("");

  dietTabsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".diet-tab-btn");
    if (!btn) return;
    const dietId = btn.dataset.diet;
    switchDietPlan(dietId);
  });

  renderDietPlan(state.activeDietId);
  renderGroceryList();
  renderSupplementGuide();
}

function switchDietPlan(dietId) {
  state.activeDietId = dietId;
  document.querySelectorAll(".diet-tab-btn").forEach(btn => {
    const isThis = btn.dataset.diet === dietId;
    btn.className = `diet-tab-btn px-4 py-2.5 rounded-xl border text-xs md:text-sm font-bold transition-all ${
      isThis 
        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/20' 
        : 'bg-slate-800/60 text-slate-300 border-slate-700 hover:border-slate-600'
    }`;
  });
  renderDietPlan(dietId);
}

function renderDietPlan(dietId) {
  const plan = DIET_PLANS.find(p => p.id === dietId);
  const container = document.getElementById("active-diet-content");
  if (!plan || !container) return;

  container.innerHTML = `
    <!-- Diet Header Overview -->
    <div class="glass-card rounded-2xl p-6 md:p-8 border border-slate-800 mb-8">
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              ${plan.badge}
            </span>
            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
              Target: ${plan.target}
            </span>
          </div>
          <h3 class="text-3xl font-extrabold text-white tracking-tight">${plan.title}</h3>
          <p class="text-slate-400 text-sm md:text-base mt-1 max-w-2xl">${plan.tagline}</p>
        </div>

        <!-- Macro Summary Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900/90 p-4 rounded-2xl border border-slate-800 shrink-0">
          <div class="text-center px-2">
            <span class="text-[10px] font-mono uppercase text-slate-400 block">Total Energy</span>
            <span class="text-xl font-extrabold text-white">${plan.calories}</span>
            <span class="text-[10px] text-slate-400">kcal/day</span>
          </div>
          <div class="text-center px-2">
            <span class="text-[10px] font-mono uppercase text-emerald-400 block">Protein (${plan.macros.proteinPct}%)</span>
            <span class="text-xl font-extrabold text-emerald-400">${plan.macros.protein}g</span>
            <span class="text-[10px] text-slate-400">${plan.macros.protein * 4} kcal</span>
          </div>
          <div class="text-center px-2">
            <span class="text-[10px] font-mono uppercase text-cyan-400 block">Carbs (${plan.macros.carbsPct}%)</span>
            <span class="text-xl font-extrabold text-cyan-400">${plan.macros.carbs}g</span>
            <span class="text-[10px] text-slate-400">${plan.macros.carbs * 4} kcal</span>
          </div>
          <div class="text-center px-2">
            <span class="text-[10px] font-mono uppercase text-amber-400 block">Fats (${plan.macros.fatsPct}%)</span>
            <span class="text-xl font-extrabold text-amber-400">${plan.macros.fats}g</span>
            <span class="text-[10px] text-slate-400">${plan.macros.fats * 9} kcal</span>
          </div>
        </div>
      </div>

      <!-- Macro Ratio Bar Visualizer -->
      <div class="mt-6">
        <div class="flex justify-between text-xs font-mono text-slate-400 mb-2">
          <span>MACRONUTRIENT DISTRIBUTION RATIO</span>
          <span>P: ${plan.macros.proteinPct}% | C: ${plan.macros.carbsPct}% | F: ${plan.macros.fatsPct}%</span>
        </div>
        <div class="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex p-0.5 gap-1 border border-slate-700/60">
          <div class="bg-emerald-500 h-full rounded-l-full" style="width: ${plan.macros.proteinPct}%" title="Protein: ${plan.macros.protein}g"></div>
          <div class="bg-cyan-500 h-full" style="width: ${plan.macros.carbsPct}%" title="Carbs: ${plan.macros.carbs}g"></div>
          <div class="bg-amber-500 h-full rounded-r-full" style="width: ${plan.macros.fatsPct}%" title="Fats: ${plan.macros.fats}g"></div>
        </div>
      </div>

      <!-- Protocol Highlights -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
        ${plan.highlights.map(h => `
          <div class="flex items-center gap-2.5 text-xs md:text-sm text-slate-300">
            <i class="fa-solid fa-circle-check text-emerald-400 text-xs shrink-0"></i>
            <span>${h}</span>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- Daily Meal Timetable (Chronological) -->
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <h4 class="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
          <i class="fa-solid fa-utensils text-emerald-400"></i> Daily Meal Schedule & Exact Portions
        </h4>
        <button onclick="window.print()" class="no-print px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-all">
          <i class="fa-solid fa-print"></i> Print Meal Plan
        </button>
      </div>

      <div class="grid grid-cols-1 gap-4">
        ${plan.meals.map((meal, idx) => `
          <div class="glass-card rounded-2xl p-5 md:p-6 border border-slate-800 hover:border-slate-700 transition-all">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold text-xs flex items-center justify-center shrink-0">
                  M${idx + 1}
                </span>
                <div>
                  <span class="text-xs font-mono font-bold text-cyan-400">${meal.time}</span>
                  <h5 class="text-lg font-bold text-white tracking-tight">${meal.title}</h5>
                </div>
              </div>
              <div class="flex items-center gap-3 text-xs font-mono bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                <span class="text-white font-bold">${meal.calories} kcal</span>
                <span class="text-slate-500">|</span>
                <span class="text-emerald-400 font-semibold">${meal.protein}g P</span>
                <span class="text-slate-500">|</span>
                <span class="text-cyan-400 font-semibold">${meal.carbs}g C</span>
                <span class="text-slate-500">|</span>
                <span class="text-amber-400 font-semibold">${meal.fats}g F</span>
              </div>
            </div>

            <!-- Ingredients / Food Items -->
            <div class="mt-4">
              <ul class="space-y-1.5 text-sm text-slate-300">
                ${meal.items.map(item => `
                  <li class="flex items-start gap-2">
                    <i class="fa-solid fa-angle-right text-emerald-400 text-xs mt-1 shrink-0"></i>
                    <span>${item}</span>
                  </li>
                `).join("")}
              </ul>
            </div>

            <!-- Vegetarian Swap or Cooking Tip -->
            <div class="mt-4 pt-3 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              ${meal.vegAlternative ? `
                <div class="text-emerald-400/90 flex items-start gap-1.5">
                  <i class="fa-solid fa-leaf text-emerald-400 text-xs mt-0.5 shrink-0"></i>
                  <span><strong class="text-emerald-400">Veg Option:</strong> ${meal.vegAlternative}</span>
                </div>
              ` : `
                <div class="text-slate-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-circle-info text-cyan-400 text-xs shrink-0"></i>
                  <span>${meal.tip}</span>
                </div>
              `}
              ${meal.vegAlternative && meal.tip ? `
                <div class="text-slate-400 flex items-center gap-1">
                  <span class="italic text-[11px]">${meal.tip}</span>
                </div>
              ` : ''}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderGroceryList() {
  const container = document.getElementById("grocery-list-container");
  if (!container) return;

  container.innerHTML = GROCERY_CATEGORIES.map(cat => `
    <div class="glass-card rounded-2xl p-5 border border-slate-800">
      <div class="flex items-center gap-2.5 pb-3 border-b border-slate-800 text-cyan-400 font-bold text-base">
        <i class="fa-solid fa-${cat.icon}"></i>
        <span>${cat.category}</span>
      </div>
      <div class="mt-3 space-y-2">
        ${cat.items.map((item, idx) => `
          <label class="flex items-start gap-2.5 text-xs text-slate-300 hover:text-white cursor-pointer select-none">
            <input type="checkbox" class="rounded bg-slate-800 border-slate-700 text-cyan-500 focus:ring-0 mt-0.5">
            <div>
              <span class="font-semibold text-white">${item.name}</span>
              ${item.isVeg ? '<span class="ml-1 text-[10px] text-emerald-400 font-mono">(Veg)</span>' : ''}
              <div class="text-[11px] text-slate-400">${item.note}</div>
            </div>
          </label>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function renderSupplementGuide() {
  const container = document.getElementById("supplement-guide-container");
  if (!container) return;

  container.innerHTML = SUPPLEMENT_GUIDE.map(sup => `
    <div class="glass-card rounded-2xl p-5 border border-slate-800 hover:border-slate-700 transition-all">
      <div class="flex items-center justify-between gap-2 mb-2">
        <h5 class="text-base font-bold text-white tracking-tight">${sup.name}</h5>
        <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-${sup.badgeColor}-500/10 text-${sup.badgeColor}-400 border border-${sup.badgeColor}-500/30">
          ${sup.badge}
        </span>
      </div>
      <div class="text-xs text-slate-400 space-y-1">
        <div><strong class="text-slate-300">Dosage:</strong> ${sup.dosage}</div>
        <div><strong class="text-slate-300">Timing:</strong> ${sup.timing}</div>
      </div>
      <p class="text-slate-400 text-xs mt-2.5 pt-2.5 border-t border-slate-800">${sup.purpose}</p>
    </div>
  `).join("");
}

/* ==========================================================================
   5. Interactive Fitness Calculators (TDEE, Macros, BMI)
   ========================================================================== */

function initCalculators() {
  const calcForm = document.getElementById("tdee-macro-form");
  if (calcForm) {
    calcForm.addEventListener("submit", (e) => {
      e.preventDefault();
      calculateTDEE();
    });
  }

  const bmiForm = document.getElementById("bmi-calc-form");
  if (bmiForm) {
    bmiForm.addEventListener("submit", (e) => {
      e.preventDefault();
      calculateBMI();
    });
  }
}

function calculateTDEE() {
  const gender = document.getElementById("calc-gender").value;
  const age = parseFloat(document.getElementById("calc-age").value);
  const weight = parseFloat(document.getElementById("calc-weight").value);
  const height = parseFloat(document.getElementById("calc-height").value);
  const activity = parseFloat(document.getElementById("calc-activity").value);
  const goal = document.getElementById("calc-goal").value;

  if (!age || !weight || !height) {
    showToast("Please enter all physical stats.", "warning");
    return;
  }

  // Mifflin-St Jeor Equation for BMR
  let bmr = (10 * weight) + (6.25 * height) - (5 * age);
  if (gender === "male") {
    bmr += 5;
  } else {
    bmr -= 161;
  }

  const tdee = Math.round(bmr * activity);

  // Adjust for Fitness Goal
  let targetKcal = tdee;
  let proteinRatio = 2.0; // g per kg
  let fatRatio = 0.9;     // g per kg

  if (goal === "cut") {
    targetKcal = Math.round(tdee - 500); // 500 kcal deficit
    proteinRatio = 2.2;
    fatRatio = 0.8;
  } else if (goal === "bulk") {
    targetKcal = Math.round(tdee + 350); // 350 kcal surplus
    proteinRatio = 2.0;
    fatRatio = 1.0;
  } else {
    targetKcal = tdee;
    proteinRatio = 1.9;
    fatRatio = 0.9;
  }

  const proteinGrams = Math.round(weight * proteinRatio);
  const proteinKcal = proteinGrams * 4;

  const fatGrams = Math.round(weight * fatRatio);
  const fatKcal = fatGrams * 9;

  const remainingKcal = Math.max(0, targetKcal - proteinKcal - fatKcal);
  const carbGrams = Math.round(remainingKcal / 4);

  // Render Result Box
  const resultBox = document.getElementById("tdee-results-box");
  if (resultBox) {
    resultBox.classList.remove("hidden");
    resultBox.innerHTML = `
      <div class="glass-card rounded-2xl p-6 border border-cyan-500/40 bg-slate-900/90 glow-cyan">
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <span class="text-xs font-mono uppercase text-cyan-400">Your Personalized Targets</span>
            <h4 class="text-2xl font-extrabold text-white">Daily Target: ${targetKcal} kcal</h4>
          </div>
          <div class="text-right">
            <span class="text-xs text-slate-400 font-mono block">Basal BMR: ${Math.round(bmr)} kcal</span>
            <span class="text-xs text-slate-400 font-mono block">Maintenance: ${tdee} kcal</span>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3 my-4">
          <div class="bg-emerald-950/30 p-3 rounded-xl border border-emerald-500/30 text-center">
            <span class="text-[10px] font-mono uppercase text-emerald-400 block font-bold">Protein</span>
            <span class="text-xl font-extrabold text-white">${proteinGrams}g</span>
            <span class="text-[10px] text-slate-400 block">${proteinKcal} kcal (${Math.round((proteinKcal/targetKcal)*100)}%)</span>
          </div>
          <div class="bg-cyan-950/30 p-3 rounded-xl border border-cyan-500/30 text-center">
            <span class="text-[10px] font-mono uppercase text-cyan-400 block font-bold">Carbs</span>
            <span class="text-xl font-extrabold text-white">${carbGrams}g</span>
            <span class="text-[10px] text-slate-400 block">${remainingKcal} kcal (${Math.round((remainingKcal/targetKcal)*100)}%)</span>
          </div>
          <div class="bg-amber-950/30 p-3 rounded-xl border border-amber-500/30 text-center">
            <span class="text-[10px] font-mono uppercase text-amber-400 block font-bold">Fats</span>
            <span class="text-xl font-extrabold text-white">${fatGrams}g</span>
            <span class="text-[10px] text-slate-400 block">${fatKcal} kcal (${Math.round((fatKcal/targetKcal)*100)}%)</span>
          </div>
        </div>

        <div class="text-xs text-slate-300 bg-slate-800/60 p-3 rounded-xl border border-slate-700/80">
          <i class="fa-solid fa-lightbulb text-amber-400 mr-1.5"></i>
          <strong>FitAasu Pro Tip:</strong> To hit ${proteinGrams}g of protein daily, aim for ${Math.round(proteinGrams / 4)}g of protein in each of your 4 daily meals.
        </div>
      </div>
    `;
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function calculateBMI() {
  const weight = parseFloat(document.getElementById("bmi-weight").value);
  const height = parseFloat(document.getElementById("bmi-height").value);

  if (!weight || !height) {
    showToast("Please enter weight and height.", "warning");
    return;
  }

  const heightInMeters = height / 100;
  const bmi = parseFloat((weight / (heightInMeters * heightInMeters)).toFixed(1));

  let category = "Normal Weight";
  let color = "emerald";
  if (bmi < 18.5) {
    category = "Underweight";
    color = "cyan";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
    color = "amber";
  } else if (bmi >= 30) {
    category = "Obesity";
    color = "rose";
  }

  const minNormalWeight = Math.round(18.5 * heightInMeters * heightInMeters);
  const maxNormalWeight = Math.round(24.9 * heightInMeters * heightInMeters);

  const resultBox = document.getElementById("bmi-results-box");
  if (resultBox) {
    resultBox.classList.remove("hidden");
    resultBox.innerHTML = `
      <div class="glass-card rounded-2xl p-5 border border-slate-700 bg-slate-900/90">
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div>
            <span class="text-xs font-mono text-slate-400 uppercase">Body Mass Index</span>
            <div class="text-3xl font-extrabold text-${color}-400">${bmi}</div>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-${color}-500/10 text-${color}-400 border border-${color}-500/30">
            ${category}
          </span>
        </div>
        <div class="mt-3 text-xs text-slate-300">
          Healthy weight range for your height (${height} cm): 
          <strong class="text-white">${minNormalWeight} kg - ${maxNormalWeight} kg</strong>
        </div>
      </div>
    `;
  }
}

/* ==========================================================================
   6. Integrated Rest Stopwatch & Countdown Timer
   ========================================================================== */

function initRestTimer() {
  updateTimerDisplay();
}

function startQuickTimer(seconds, exerciseName = "") {
  state.timer.duration = seconds;
  state.timer.remaining = seconds;
  updateTimerDisplay();

  const label = document.getElementById("floating-timer-label");
  if (label && exerciseName) {
    label.textContent = exerciseName.length > 20 ? exerciseName.substring(0, 18) + '...' : exerciseName;
  }

  const widget = document.getElementById("floating-timer-widget");
  if (widget) {
    widget.classList.remove("hidden");
  }

  startTimer();
}

function startTimer() {
  if (state.timer.isRunning) return;
  state.timer.isRunning = true;
  SoundFX.init();

  const playBtn = document.getElementById("timer-play-btn");
  if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';

  state.timer.interval = setInterval(() => {
    state.timer.remaining--;
    updateTimerDisplay();

    // 3, 2, 1 warning beeps
    if (state.timer.remaining > 0 && state.timer.remaining <= 3) {
      SoundFX.playBeep(440, 0.08);
    }

    if (state.timer.remaining <= 0) {
      pauseTimer();
      SoundFX.playFinishChime();
      showToast("⏱ Rest is over! Time for your next set!", "success");
    }
  }, 1000);
}

function pauseTimer() {
  state.timer.isRunning = false;
  if (state.timer.interval) {
    clearInterval(state.timer.interval);
    state.timer.interval = null;
  }
  const playBtn = document.getElementById("timer-play-btn");
  if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
}

function toggleTimerPlay() {
  if (state.timer.isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function resetTimer() {
  pauseTimer();
  state.timer.remaining = state.timer.duration;
  updateTimerDisplay();
}

function setTimerPreset(seconds) {
  pauseTimer();
  state.timer.duration = seconds;
  state.timer.remaining = seconds;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const display = document.getElementById("timer-display-digits");
  const circle = document.getElementById("timer-svg-circle");

  const mins = Math.floor(state.timer.remaining / 60);
  const secs = state.timer.remaining % 60;
  const formatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  if (display) display.textContent = formatted;

  if (circle) {
    const totalCircumference = 283; // 2 * pi * r (approx r=45)
    const ratio = state.timer.remaining / (state.timer.duration || 1);
    const offset = totalCircumference - (totalCircumference * ratio);
    circle.style.strokeDashoffset = offset;
  }
}

function closeFloatingTimer() {
  pauseTimer();
  const widget = document.getElementById("floating-timer-widget");
  if (widget) widget.classList.add("hidden");
}

/* ==========================================================================
   7. Daily Water Intake Tracker
   ========================================================================== */

function initWaterTracker() {
  renderWaterGlasses();
}

function renderWaterGlasses() {
  const container = document.getElementById("water-glasses-container");
  const countLabel = document.getElementById("water-count-display");
  if (!container) return;

  const target = 8;
  if (countLabel) {
    countLabel.textContent = `${state.waterIntake} of ${target} Glasses (${state.waterIntake * 250} ml / 2000 ml)`;
  }

  container.innerHTML = Array.from({ length: target }, (_, i) => {
    const isFilled = i < state.waterIntake;
    return `
      <button 
        onclick="setWaterIntake(${i + 1})" 
        class="water-glass-btn w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${
          isFilled 
            ? 'filled bg-cyan-600 text-white border-cyan-400' 
            : 'bg-slate-800/80 text-slate-500 border-slate-700 hover:border-cyan-500/40'
        }"
        title="Glass ${i + 1} (250ml)"
      >
        <i class="fa-solid fa-glass-water text-sm"></i>
      </button>
    `;
  }).join("");
}

function setWaterIntake(val) {
  if (state.waterIntake === val) {
    state.waterIntake = val - 1;
  } else {
    state.waterIntake = val;
    SoundFX.playBeep(900, 0.05);
  }
  localStorage.setItem("fitaasu_water_count", state.waterIntake.toString());
  renderWaterGlasses();
  if (state.waterIntake === 8) {
    showToast("💧 Daily Hydration Target Complete! Excellent!", "success");
  }
}

function resetWaterIntake() {
  state.waterIntake = 0;
  localStorage.setItem("fitaasu_water_count", "0");
  renderWaterGlasses();
  showToast("Water tracker reset.", "info");
}

/* ==========================================================================
   8. Global UI Helpers, Mobile Menu & Toast System
   ========================================================================== */

function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-menu-drawer");
  const closeBtn = document.getElementById("mobile-menu-close");

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener("click", () => {
      drawer.classList.toggle("hidden");
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener("click", () => {
      drawer.classList.add("hidden");
    });
  }

  // Close when clicking mobile links
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (drawer) drawer.classList.add("hidden");
    });
  });
}

function setupEventListeners() {
  // Close modal on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeExerciseModal();
    }
  });

  // Close modal when clicking overlay background
  const modal = document.getElementById("exercise-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeExerciseModal();
      }
    });
  }
}

function showToast(message, type = "info") {
  const toastContainer = document.getElementById("toast-container");
  if (!toastContainer) return;

  const toast = document.createElement("div");
  const bg = type === "success" ? "bg-emerald-600 text-white" :
             type === "warning" ? "bg-amber-600 text-white" :
             "bg-slate-800 text-cyan-400 border border-cyan-500/40";

  toast.className = `${bg} px-4 py-2.5 rounded-xl shadow-2xl text-xs md:text-sm font-semibold flex items-center gap-2 transition-all transform translate-y-2 opacity-0`;
  toast.innerHTML = `<span>${message}</span>`;

  toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-2", "opacity-0");
  });

  setTimeout(() => {
    toast.classList.add("translate-y-2", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function escapeHtml(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}


/* ==========================================================================
   7. CALORIE TRACKER — Food Log, Macro Counter & Balance
   ========================================================================== */

const CALORIE_STORAGE_KEY = "fitaasu_food_log";
const CALORIE_GOAL_KEY = "fitaasu_calorie_goal";

function getTodayKey() {
  return new Date().toISOString().split("T")[0];
}

function getFoodLog() {
  const all = JSON.parse(localStorage.getItem(CALORIE_STORAGE_KEY) || "{}");
  return all[getTodayKey()] || [];
}

function saveFoodLog(log) {
  const all = JSON.parse(localStorage.getItem(CALORIE_STORAGE_KEY) || "{}");
  all[getTodayKey()] = log;
  localStorage.setItem(CALORIE_STORAGE_KEY, JSON.stringify(all));
}

function initCalorieTracker() {
  const form = document.getElementById("food-log-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      addFoodFromForm();
    });
  }
  renderFoodLog();
  updateMacroBars();
  updateNetCalories();
}

function addFoodFromForm() {
  const name = document.getElementById("food-name").value.trim();
  const calories = parseInt(document.getElementById("food-calories").value) || 0;
  const protein = parseFloat(document.getElementById("food-protein").value) || 0;
  const carbs = parseFloat(document.getElementById("food-carbs").value) || 0;
  const fat = parseFloat(document.getElementById("food-fat").value) || 0;
  const meal = document.getElementById("food-meal").value;

  if (!name || calories <= 0) {
    showToast("Please enter food name and calories.", "error");
    return;
  }

  const entry = {
    id: Date.now(),
    name, calories, protein, carbs, fat, meal,
    time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
  };

  const log = getFoodLog();
  log.push(entry);
  saveFoodLog(log);

  // Reset form
  document.getElementById("food-name").value = "";
  document.getElementById("food-calories").value = "";
  document.getElementById("food-protein").value = "";
  document.getElementById("food-carbs").value = "";
  document.getElementById("food-fat").value = "";

  renderFoodLog();
  updateMacroBars();
  updateNetCalories();
  SoundFX.playBeep(600, 0.1);
  showToast(`${name} (${calories} kcal) logged ✓`, "success");
}

function quickAddFood(name, cal, protein, carbs, fat, meal) {
  const entry = {
    id: Date.now(),
    name, calories: cal, protein, carbs, fat, meal,
    time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
  };
  const log = getFoodLog();
  log.push(entry);
  saveFoodLog(log);
  renderFoodLog();
  updateMacroBars();
  updateNetCalories();
  SoundFX.playBeep(600, 0.1);
  showToast(`${name} (${cal} kcal) added ✓`, "success");
}

function removeFoodEntry(id) {
  let log = getFoodLog();
  log = log.filter(e => e.id !== id);
  saveFoodLog(log);
  renderFoodLog();
  updateMacroBars();
  updateNetCalories();
}

function clearFoodLog() {
  saveFoodLog([]);
  renderFoodLog();
  updateMacroBars();
  updateNetCalories();
  showToast("Food log cleared.", "info");
}

const MEAL_ICONS = {
  breakfast: "🌅",
  lunch: "☀️",
  snack: "🍌",
  dinner: "🌙",
  "pre-workout": "💪",
  "post-workout": "🏋️"
};

function renderFoodLog() {
  const container = document.getElementById("food-log-list");
  if (!container) return;

  const log = getFoodLog();

  if (log.length === 0) {
    container.innerHTML = `
      <div class="text-center py-6 text-slate-500 text-sm">
        <i class="fa-solid fa-bowl-food text-2xl mb-2 block text-slate-600"></i>
        No food logged yet today. Start adding meals above!
      </div>`;
    return;
  }

  container.innerHTML = log.map(e => `
    <div class="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 group hover:border-slate-700 transition-all">
      <div class="flex items-center gap-3">
        <span class="text-lg">${MEAL_ICONS[e.meal] || "🍽️"}</span>
        <div>
          <div class="text-sm font-semibold text-white">${e.name}</div>
          <div class="text-[10px] text-slate-400 font-mono">${e.time} · ${e.meal.replace("-", " ")}</div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="text-right">
          <div class="text-sm font-bold text-rose-400">${e.calories} kcal</div>
          <div class="text-[9px] font-mono text-slate-500">P:${e.protein}g C:${e.carbs}g F:${e.fat}g</div>
        </div>
        <button onclick="removeFoodEntry(${e.id})" class="opacity-0 group-hover:opacity-100 w-7 h-7 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 flex items-center justify-center transition-all" title="Remove">
          <i class="fa-solid fa-xmark text-xs"></i>
        </button>
      </div>
    </div>
  `).join("");
}

function updateMacroBars() {
  const log = getFoodLog();
  const totals = log.reduce((acc, e) => {
    acc.calories += e.calories;
    acc.protein += e.protein;
    acc.carbs += e.carbs;
    acc.fat += e.fat;
    return acc;
  }, { calories: 0, protein: 0, carbs: 0, fat: 0 });

  const calGoal = 2500, proGoal = 150, carbGoal = 300, fatGoal = 80;

  // Update current values
  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = Math.round(val); };
  setEl("macro-cal-current", totals.calories);
  setEl("macro-pro-current", totals.protein);
  setEl("macro-carb-current", totals.carbs);
  setEl("macro-fat-current", totals.fat);
  setEl("dash-calories-in", totals.calories);

  // Update bars
  const setBar = (id, current, goal) => {
    const bar = document.getElementById(id);
    if (bar) bar.style.width = Math.min((current / goal) * 100, 100) + "%";
  };
  setBar("macro-cal-bar", totals.calories, calGoal);
  setBar("macro-pro-bar", totals.protein, proGoal);
  setBar("macro-carb-bar", totals.carbs, carbGoal);
  setBar("macro-fat-bar", totals.fat, fatGoal);
}


/* ==========================================================================
   8. STEP COUNTER — Daily Step Tracker with Circular Progress
   ========================================================================== */

const STEP_STORAGE_KEY = "fitaasu_steps";
const STEP_GOAL_STORAGE_KEY = "fitaasu_step_goal";

function getStepData() {
  const all = JSON.parse(localStorage.getItem(STEP_STORAGE_KEY) || "{}");
  return all[getTodayKey()] || 0;
}

function saveStepData(steps) {
  const all = JSON.parse(localStorage.getItem(STEP_STORAGE_KEY) || "{}");
  all[getTodayKey()] = steps;
  localStorage.setItem(STEP_STORAGE_KEY, JSON.stringify(all));
}

function getStepGoal() {
  return parseInt(localStorage.getItem(STEP_GOAL_STORAGE_KEY) || "10000");
}

function initStepCounter() {
  const goalSelect = document.getElementById("step-goal-select");
  if (goalSelect) goalSelect.value = getStepGoal();
  renderStepCounter();
}

function addSteps() {
  const input = document.getElementById("step-input");
  if (!input) return;
  const steps = parseInt(input.value) || 0;
  if (steps <= 0) { showToast("Enter a valid step count.", "error"); return; }

  const current = getStepData() + steps;
  saveStepData(current);
  input.value = "";
  renderStepCounter();
  updateNetCalories();
  SoundFX.playBeep(700, 0.08);
  showToast(`+${steps.toLocaleString()} steps added! 🚶`, "success");
}

function addQuickSteps(amount) {
  const current = getStepData() + amount;
  saveStepData(current);
  renderStepCounter();
  updateNetCalories();
  SoundFX.playBeep(700, 0.08);
  showToast(`+${amount.toLocaleString()} steps added! 🚶`, "success");
}

function resetSteps() {
  saveStepData(0);
  renderStepCounter();
  updateNetCalories();
  showToast("Steps reset to 0.", "info");
}

function updateStepGoal() {
  const goalSelect = document.getElementById("step-goal-select");
  if (goalSelect) {
    localStorage.setItem(STEP_GOAL_STORAGE_KEY, goalSelect.value);
  }
  renderStepCounter();
}

function renderStepCounter() {
  const steps = getStepData();
  const goal = getStepGoal();
  const pct = Math.min((steps / goal) * 100, 100);
  const caloriesBurned = Math.round(steps * 0.04); // ~0.04 cal/step average

  // Circular ring
  const ring = document.getElementById("step-progress-ring");
  if (ring) {
    const circumference = 264; // 2 * π * 42
    const offset = circumference - (pct / 100) * circumference;
    ring.style.strokeDashoffset = offset;
    // Change color when goal met
    ring.classList.toggle("stroke-emerald-400", pct >= 100);
    ring.classList.toggle("stroke-cyan-400", pct < 100);
  }

  // Numbers
  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setEl("step-count-display", steps.toLocaleString());
  setEl("step-pct-display", Math.round(pct) + "%");
  setEl("step-calories-burned", caloriesBurned.toLocaleString());
  setEl("dash-steps", steps.toLocaleString());
  setEl("step-goal-label", `Goal: ${goal.toLocaleString()} steps`);

  // Dashboard burned
  updateDashCaloriesOut();
}


/* ==========================================================================
   9. RUNNING TRACKER — Distance, Duration, Pace & Calorie Burn
   ========================================================================== */

const RUN_STORAGE_KEY = "fitaasu_runs";

function getRunLog() {
  const all = JSON.parse(localStorage.getItem(RUN_STORAGE_KEY) || "{}");
  return all[getTodayKey()] || [];
}

function saveRunLog(log) {
  const all = JSON.parse(localStorage.getItem(RUN_STORAGE_KEY) || "{}");
  all[getTodayKey()] = log;
  localStorage.setItem(RUN_STORAGE_KEY, JSON.stringify(all));
}

// MET values for different run types
const RUN_MET = {
  walk: 3.5,
  easy: 7,
  steady: 8.5,
  tempo: 10,
  intervals: 12,
  long: 9
};

function initRunningTracker() {
  const form = document.getElementById("run-log-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      addRunFromForm();
    });
  }
  renderRunLog();
}

function addRunFromForm() {
  const distance = parseFloat(document.getElementById("run-distance").value) || 0;
  const duration = parseInt(document.getElementById("run-duration").value) || 0;
  const type = document.getElementById("run-type").value;

  if (distance <= 0 || duration <= 0) {
    showToast("Enter distance and duration.", "error");
    return;
  }

  const pace = duration / distance; // min/km
  const bodyWeight = 70; // default kg
  const met = RUN_MET[type] || 7;
  const caloriesBurned = Math.round((met * bodyWeight * duration) / 60);

  const entry = {
    id: Date.now(),
    distance, duration, type, pace: pace.toFixed(1), caloriesBurned,
    time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
  };

  const log = getRunLog();
  log.push(entry);
  saveRunLog(log);

  // Reset form
  document.getElementById("run-distance").value = "";
  document.getElementById("run-duration").value = "";

  renderRunLog();
  updateNetCalories();
  SoundFX.playBeep(800, 0.15);
  showToast(`Run logged: ${distance}km in ${duration}min — ${caloriesBurned} kcal burned 🔥`, "success");
}

function clearRunLog() {
  saveRunLog([]);
  renderRunLog();
  updateNetCalories();
  showToast("Run history cleared.", "info");
}

const RUN_TYPE_LABELS = {
  walk: "🚶 Walk",
  easy: "🏃 Easy",
  steady: "🏃‍♂️ Steady",
  tempo: "⚡ Tempo",
  intervals: "🔥 Intervals",
  long: "🛣️ Long"
};

function renderRunLog() {
  const container = document.getElementById("run-log-list");
  if (!container) return;

  const log = getRunLog();

  if (log.length === 0) {
    container.innerHTML = `
      <div class="text-center py-4 text-slate-500 text-xs">
        <i class="fa-solid fa-person-running text-lg mb-1 block text-slate-600"></i>
        No runs logged yet today.
      </div>`;
  } else {
    container.innerHTML = log.map(e => `
      <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
        <div>
          <div class="text-sm font-semibold text-white">${e.distance} km — ${e.duration} min</div>
          <div class="text-[10px] text-slate-400 font-mono">${RUN_TYPE_LABELS[e.type] || e.type} · Pace: ${e.pace} min/km · ${e.time}</div>
        </div>
        <div class="text-sm font-bold text-amber-400">${e.caloriesBurned} kcal</div>
      </div>
    `).join("");
  }

  // Update totals
  const totalDistance = log.reduce((a, e) => a + e.distance, 0);
  const totalCalories = log.reduce((a, e) => a + e.caloriesBurned, 0);

  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setEl("run-total-distance", totalDistance.toFixed(1));
  setEl("run-calories-burned", totalCalories.toLocaleString());
  setEl("dash-distance", totalDistance.toFixed(1));

  updateDashCaloriesOut();
}


/* ==========================================================================
   10. NET CALORIE BALANCE — Integrates Food, Steps & Running
   ========================================================================== */

function updateDashCaloriesOut() {
  const steps = getStepData();
  const stepCalories = Math.round(steps * 0.04);
  const runLog = getRunLog();
  const runCalories = runLog.reduce((a, e) => a + e.caloriesBurned, 0);
  const totalBurned = stepCalories + runCalories;

  const el = document.getElementById("dash-calories-out");
  if (el) el.textContent = totalBurned.toLocaleString();

  updateNetCalories();
}

function updateNetCalories() {
  const foodLog = getFoodLog();
  const caloriesIn = foodLog.reduce((a, e) => a + e.calories, 0);

  const steps = getStepData();
  const stepCalories = Math.round(steps * 0.04);
  const runLog = getRunLog();
  const runCalories = runLog.reduce((a, e) => a + e.caloriesBurned, 0);
  const totalBurned = stepCalories + runCalories;

  const calGoal = 2500;
  const net = caloriesIn - totalBurned;
  const remaining = calGoal - net;

  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setEl("net-eaten", caloriesIn.toLocaleString());
  setEl("net-exercise", totalBurned.toLocaleString());
  setEl("net-total", net.toLocaleString());

  const netDisplay = document.getElementById("net-calorie-display");
  const netLabel = document.getElementById("net-calorie-label");
  const netAdvice = document.getElementById("net-calorie-advice");

  if (netDisplay) {
    netDisplay.textContent = remaining.toLocaleString();
    if (remaining > 0) {
      netDisplay.className = "text-4xl font-black font-mono text-[#76e000]";
    } else {
      netDisplay.className = "text-4xl font-black font-mono text-rose-400";
    }
  }

  if (netLabel) {
    netLabel.textContent = remaining > 0 ? "calories remaining" : "calories OVER budget";
  }

  if (netAdvice) {
    if (caloriesIn === 0 && totalBurned === 0) {
      netAdvice.textContent = "Log food and activity to see your balance";
    } else if (remaining > 500) {
      netAdvice.textContent = "💪 You have room — eat a nutritious meal!";
    } else if (remaining > 0) {
      netAdvice.textContent = "🎯 Almost at your goal — finish strong!";
    } else {
      netAdvice.textContent = "🔥 You're over your calorie target for today.";
    }
  }
}
