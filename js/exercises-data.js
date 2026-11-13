/**
 * FitAasu Workout & Exercise Database
 * Comprehensive Day 1 to Day 7 training split and full exercise directory
 */

const WORKOUT_DAYS = [
  {
    dayNumber: 1,
    id: "day-1",
    title: "Chest & Triceps",
    subtitle: "Push Power & Hypertrophy",
    focus: "Pectoralis Major, Upper/Lower Chest, Triceps Brachii",
    duration: "65-75 min",
    intensity: "High",
    caloriesBurn: "450-550 kcal",
    tagline: "Build a broad, armor-plated chest and horseshoe triceps with progressive overload.",
    warmup: [
      "5 min light cardio (treadmill incline walk or rowing)",
      "Arm circles & horizontal chest hugs (20 reps)",
      "Band pull-aparts & external shoulder rotations (2 sets of 15)",
      "2 warm-up sets on flat bench with empty bar, then 50% working weight"
    ],
    exercises: [
      {
        id: "d1-ex1",
        name: "Flat Barbell Bench Press",
        target: "Chest (Mid/Overall)",
        secondary: "Front Deltoids, Triceps",
        equipment: "Barbell & Bench",
        difficulty: "Intermediate",
        sets: 4,
        reps: "6 - 8 reps",
        rest: "90 - 120 sec",
        tempo: "3-0-1-0 (3s eccentric)",
        imageType: "bench-press",
        description: "The gold standard compound lift for maximum chest mass and raw pushing power.",
        cues: [
          "Retract your shoulder blades and pinch them firmly into the bench.",
          "Keep feet planted flat on the floor; maintain a slight natural arch in the lower back.",
          "Grip the bar slightly wider than shoulder-width with wrapped thumbs.",
          "Lower the bar under control to your mid-chest / sternum line.",
          "Press forcefully upward without flaring elbows past 75 degrees."
        ],
        mistakes: [
          "Bouncing the barbell off your sternum",
          "Flaring elbows straight out at 90 degrees (causes rotator cuff impingement)",
          "Lifting your glutes off the bench during heavy drive"
        ]
      },
      {
        id: "d1-ex2",
        name: "Incline Dumbbell Press",
        target: "Upper Chest (Clavicular Head)",
        secondary: "Anterior Deltoid, Triceps",
        equipment: "Incline Bench (30°), Dumbbells",
        difficulty: "Intermediate",
        sets: 4,
        reps: "8 - 10 reps",
        rest: "90 sec",
        tempo: "2-1-1-0",
        imageType: "incline-press",
        description: "Targets the upper clavicular fibers to create that full 'shelf' look at the top of the chest.",
        cues: [
          "Set the bench angle to 30 degrees (higher shifts tension to shoulders).",
          "Kick dumbbells up from knees into starting position at chest level.",
          "Press weights up in a slight arc; avoid clanking dumbbells together at the peak.",
          "Lower down until you feel a deep, comfortable stretch across your upper chest."
        ],
        mistakes: [
          "Setting bench angle too high (45-60° makes it a shoulder press)",
          "Over-arching the lower back to turn it into a flat press"
        ]
      },
      {
        id: "d1-ex3",
        name: "Weighted or Bodyweight Chest Dips",
        target: "Lower Chest & Triceps",
        secondary: "Front Delts, Core",
        equipment: "Parallel Dip Bars",
        difficulty: "Advanced",
        sets: 3,
        reps: "10 - 12 reps",
        rest: "75 sec",
        tempo: "2-0-1-0",
        imageType: "dips",
        description: "Superb compound mass builder that chisels the lower pectoral line and builds dense triceps.",
        cues: [
          "Lean your torso forward at a 30-degree angle to bias chest over triceps.",
          "Bend your knees and cross your ankles behind you.",
          "Lower yourself until your elbows reach a 90-degree angle.",
          "Drive back up using your chest, locking out gently without joint hyperextension."
        ],
        mistakes: [
          "Staying completely upright (shifts almost all load to triceps)",
          "Dropping too low and hyperextending vulnerable shoulder capsules"
        ]
      },
      {
        id: "d1-ex4",
        name: "Standing Cable Crossovers (High-to-Low)",
        target: "Lower & Inner Chest",
        secondary: "Serratus Anterior",
        equipment: "Dual Cable Pulley",
        difficulty: "Beginner",
        sets: 3,
        reps: "12 - 15 reps",
        rest: "60 sec",
        tempo: "2-1-1-1 (1s peak squeeze)",
        imageType: "cable-fly",
        description: "Constant tension isolation exercise for an intense peak contraction and chest pump.",
        cues: [
          "Set pulleys at the highest level; step forward into a staggered stance.",
          "Keep a slight bend in your elbows and lock them into position.",
          "Bring hands down and across each other in a sweeping arc hugging a large tree.",
          "Hold the peak contraction for 1 full second, squeezing pectorals hard."
        ],
        mistakes: [
          "Turning it into a press by bending and straightening elbows during the move",
          "Using excessive body momentum and rocking back and forth"
        ]
      },
      {
        id: "d1-ex5",
        name: "Lying EZ-Bar Skull Crushers",
        target: "Triceps (Long & Lateral Heads)",
        secondary: "Forearms",
        equipment: "EZ-Curl Bar, Flat Bench",
        difficulty: "Intermediate",
        sets: 3,
        reps: "10 - 12 reps",
        rest: "75 sec",
        tempo: "3-0-1-0",
        imageType: "skull-crushers",
        description: "One of the best isolation movements to pack thick slabs of mass onto the back of your arms.",
        cues: [
          "Lie on a flat bench, holding the EZ bar with a narrow overhand grip.",
          "Angle your upper arms back slightly (approx 75-80 degrees) instead of purely vertical.",
          "Hinge exclusively at the elbows, lowering the bar toward your hairline/crown.",
          "Extend arms back to starting position without letting elbows flare outward."
        ],
        mistakes: [
          "Flaring elbows wide to the sides, shifting load off triceps",
          "Letting upper arms move back and forth instead of keeping elbows stationary"
        ]
      },
      {
        id: "d1-ex6",
        name: "Triceps Rope Pushdowns",
        target: "Triceps (Lateral Head)",
        secondary: "Anconeus",
        equipment: "High Cable & Rope Attachment",
        difficulty: "Beginner",
        sets: 3,
        reps: "12 - 15 reps",
        rest: "60 sec",
        tempo: "2-0-1-1",
        imageType: "rope-pushdown",
        description: "Creates the coveted horseshoe shape by isolating the lateral head of the triceps.",
        cues: [
          "Pin your elbows tightly against your ribs.",
          "Slight forward lean at the hips for balanced stability.",
          "Push the rope downward and spread the rope ends outwards at the bottom.",
          "Lock out triceps with a hard 1-second contraction before controlled return."
        ],
        mistakes: [
          "Letting elbows drift forward and backward like a pendulum",
          "Using shoulder momentum or hunching over the rope"
        ]
      },
      {
        id: "d1-ex7",
        name: "Overhead Dumbbell Triceps Extension",
        target: "Triceps (Long Head)",
        secondary: "Core Stabilizers",
        equipment: "Single Heavy Dumbbell, Bench",
        difficulty: "Intermediate",
        sets: 3,
        reps: "12 - 15 reps",
        rest: "60 sec",
        tempo: "2-1-1-0",
        imageType: "overhead-triceps",
        description: "Fully stretches the long head of the triceps which accounts for 60% of total arm mass.",
        cues: [
          "Sit upright with back supported; cup the top dumbbell plate with both hands.",
          "Press overhead, keeping elbows pointing forward and tucked close to ears.",
          "Lower weight slowly behind your head until your forearms touch your biceps.",
          "Drive upward through the palms to full extension."
        ],
        mistakes: [
          "Allowing elbows to flare excessively wide",
          "Arching the lower back excessively instead of bracing core"
        ]
      },
      {
        id: "d1-ex8",
        name: "Push-Up Burnout Finisher",
        target: "Chest, Triceps, Shoulders, Core",
        secondary: "Serratus Anterior",
        equipment: "Bodyweight",
        difficulty: "Beginner",
        sets: 2,
        reps: "To Failure (AMRAP)",
        rest: "60 sec",
        tempo: "Continuous",
        imageType: "pushups",
        description: "High-metabolic burnout set that recruits remaining muscle fibers and flushes maximum blood into the chest.",
        cues: [
          "Maintain a straight plank line from head to heels.",
          "Lower chest all the way to 1 inch above the floor.",
          "Explode up and repeat until failure."
        ],
        mistakes: [
          "Sagging lower back or hiking hips in the air"
        ]
      }
    ],
    cooldown: [
      "Doorway pectoral stretch (30 seconds each side)",
      "Cross-body shoulder stretch (30 seconds each side)",
      "Overhead tricep stretch (30 seconds each side)",
      "Hydrate with 500ml water + electrolytes"
    ]
  },
  {
    dayNumber: 2,
    id: "day-2",
    title: "Back & Biceps",
    subtitle: "Pull Strength & V-Taper Thickness",
    focus: "Latissimus Dorsi, Rhomboids, Traps, Rear Delts, Biceps Brachii",
    duration: "70-80 min",
    intensity: "High",
    caloriesBurn: "480-600 kcal",
    tagline: "Carve deep back thickness, wide wings for an impressive V-taper, and peak bicep mountains.",
    warmup: [
      "5 min rowing machine (light to moderate resistance)",
      "Dead hangs from a pull-up bar (3 sets of 20-30 seconds)",
      "Cat-Cow spine mobility (15 reps)",
      "Resistance band face pulls (2 sets of 20 reps)"
    ],
    exercises: [
      {
        id: "d2-ex1",
        name: "Conventional Barbell Deadlift",
        target: "Erector Spinae, Lats, Traps",
        secondary: "Hamstrings, Glutes, Forearms, Core",
        equipment: "Olympic Barbell & Plates",
        difficulty: "Advanced",
        sets: 4,
        reps: "5 reps",
        rest: "120 - 150 sec",
        tempo: "2-1-1-0",
        imageType: "deadlift",
        description: "The ultimate king of pull movements, building unbreakable posterior chain density and total-body power.",
        cues: [
          "Stand with feet hip-width apart; bar directly over mid-foot.",
          "Hinge hips back, grasp bar just outside shins with double-overhand or hook grip.",
          "Pull chest up, pull the slack out of the barbell, pack your lats tightly.",
          "Push floor away with legs; lock out with glutes without hyperextending spine."
        ],
        mistakes: [
          "Rounding lumbar spine under heavy loads",
          "Letting the bar drift away from shins during the pull",
          "Jerking the bar off the floor without building lat tension"
        ]
      },
      {
        id: "d2-ex2",
        name: "Bent-Over Barbell Rows",
        target: "Middle Traps, Rhomboids, Lats",
        secondary: "Biceps, Posterior Deltoid",
        equipment: "Barbell & Plates",
        difficulty: "Intermediate",
        sets: 4,
        reps: "8 - 10 reps",
        rest: "90 sec",
        tempo: "2-0-1-1",
        imageType: "barbell-row",
        description: "Essential for 3D back thickness, dense upper-back musculature, and stable spinal erectors.",
        cues: [
          "Hinge forward at hips to roughly a 45-degree angle with a neutral spine.",
          "Grip bar with an overhand grip slightly wider than shoulder width.",
          "Pull elbows back toward the ceiling, driving the bar to your belly button.",
          "Squeeze shoulder blades together hard at the peak for a full second."
        ],
        mistakes: [
          "Standing too upright (turns exercise into a shrug)",
          "Using excessive hip thrusting to heave the weight"
        ]
      },
      {
        id: "d2-ex3",
        name: "Wide-Grip Lat Pulldowns",
        target: "Latissimus Dorsi (Width)",
        secondary: "Biceps, Brachialis, Teres Major",
        equipment: "Cable Lat Pulldown Machine",
        difficulty: "Beginner",
        sets: 4,
        reps: "10 - 12 reps",
        rest: "75 sec",
        tempo: "2-0-1-1",
        imageType: "lat-pulldown",
        description: "The foundational movement to expand your upper back width and achieve the dramatic V-taper silhouette.",
        cues: [
          "Grip the bar slightly wider than shoulder-width with knuckles facing up.",
          "Slight backward lean (10-15 degrees) with chest proudly elevated.",
          "Initiate the pull by depressing your shoulder blades down first.",
          "Pull elbows down and slightly back, touching bar to upper chest."
        ],
        mistakes: [
          "Pulling behind the neck (dangerous for rotator cuffs and cervical spine)",
          "Leaning back 45+ degrees and using bodyweight momentum"
        ]
      },
      {
        id: "d2-ex4",
        name: "Seated Close-Grip Cable Rows",
        target: "Lats (Lower), Rhomboids",
        secondary: "Biceps, Erector Spinae",
        equipment: "Low Cable Row Machine & V-Grip Handle",
        difficulty: "Beginner",
        sets: 3,
        reps: "10 - 12 reps",
        rest: "60-75 sec",
        tempo: "2-0-1-1",
        imageType: "seated-row",
        description: "Isolates the mid-to-lower lats and rhomboids with constant smooth cable resistance.",
        cues: [
          "Sit upright with knees slightly bent, feet on platforms.",
          "Keep torso perpendicular to the floor; do not swing back and forth.",
          "Pull V-grip handle toward your lower abdomen, retracting scaps firmly.",
          "Feel the full lat stretch on the return without letting shoulders round forward."
        ],
        mistakes: [
          "Excessive torso swinging like a rowing boat",
          "Shrugging shoulders into the ears during contraction"
        ]
      },
      {
        id: "d2-ex5",
        name: "Face Pulls with External Rotation",
        target: "Rear Deltoids, Infraspinatus, Upper Traps",
        secondary: "Rhomboids",
        equipment: "Cable Pulley & Rope Attachment",
        difficulty: "Beginner",
        sets: 3,
        reps: "15 reps",
        rest: "60 sec",
        tempo: "2-0-1-2",
        imageType: "face-pull",
        description: "The #1 posture-correcting exercise that protects the shoulders and builds bulletproof rear delts.",
        cues: [
          "Set cable at eye level with rope attachment.",
          "Grip rope with thumbs pointing backward toward your face.",
          "Pull rope straight toward your nose while pulling the ends apart.",
          "Finish with knuckles pointing back behind your ears, making a double-bicep pose."
        ],
        mistakes: [
          "Pulling downward toward the chest or throat",
          "Using weights too heavy, which engages lower back swinging"
        ]
      },
      {
        id: "d2-ex6",
        name: "Standing Barbell Bicep Curls",
        target: "Biceps Brachii (Short & Long Heads)",
        secondary: "Brachialis, Forearms",
        equipment: "Straight Barbell or EZ-Bar",
        difficulty: "Beginner",
        sets: 4,
        reps: "8 - 10 reps",
        rest: "75 sec",
        tempo: "2-0-1-1",
        imageType: "bicep-curl",
        description: "The undisputed mass-builder for thick, powerful bicep peaks.",
        cues: [
          "Stand tall with feet shoulder-width apart, elbows pinned against ribs.",
          "Curl the bar in an arc, squeezing biceps hard at top contraction.",
          "Lower under strict 2-3 second control until arms are fully extended.",
          "Avoid swinging or leaning back at all costs."
        ],
        mistakes: [
          "Swinging hips to generate momentum",
          "Letting elbows flare forward in front of torso to shorten range of motion"
        ]
      },
      {
        id: "d2-ex7",
        name: "Incline Dumbbell Hammer Curls",
        target: "Brachialis & Brachioradialis",
        secondary: "Outer Bicep Long Head",
        equipment: "Incline Bench (60°), Pair of Dumbbells",
        difficulty: "Intermediate",
        sets: 3,
        reps: "10 - 12 reps",
        rest: "60 sec",
        tempo: "2-0-1-0",
        imageType: "hammer-curl",
        description: "Builds the brachialis muscle beneath the biceps, pushing the biceps outward for thicker arm girth.",
        cues: [
          "Set bench to 60 degrees; keep palms facing each other (neutral grip).",
          "Curl dumbbells up toward shoulders while keeping palms neutral.",
          "Squeeze at peak and lower slowly for a deep bicep stretch."
        ],
        mistakes: [
          "Rotating wrists into supination (keep neutral like swinging a hammer)"
        ]
      },
      {
        id: "d2-ex8",
        name: "Preacher Curls / Concentration Finishers",
        target: "Bicep Peak (Short Head Isolation)",
        secondary: "Forearms",
        equipment: "Preacher Bench & Dumbbell / EZ-Bar",
        difficulty: "Intermediate",
        sets: 3,
        reps: "12 - 15 reps",
        rest: "60 sec",
        tempo: "3-0-1-1",
        imageType: "preacher-curl",
        description: "Eliminates all bodily momentum to isolate the bicep for maximal peak contraction and vascular pump.",
        cues: [
          "Rest upper arms firmly on the preacher pad.",
          "Curl the weight up toward forehead; pause 1 sec at top.",
          "Lower with extreme control to just before full elbow lockout."
        ],
        mistakes: [
          "Violently hyperextending elbows at the bottom of the movement"
        ]
      }
    ],
    cooldown: [
      "Lat stretch with upright pole or rack (40 seconds each side)",
      "Child's pose back decompression (1 minute)",
      "Bicep doorway stretch (30 seconds each arm)",
      "Post-workout whey protein shake & fast-digesting carbs"
    ]
  },
  {
    dayNumber: 3,
    id: "day-3",
    title: "Legs & Calves",
    subtitle: "Lower Body Domination & Growth Hormone Surge",
    focus: "Quadriceps, Hamstrings, Gluteus Maximus, Calves (Gastrocnemius & Soleus)",
    duration: "75-85 min",
    intensity: "Extreme",
    caloriesBurn: "550-700 kcal",
    tagline: "Never skip leg day! Forge tree-trunk quads, explosive hamstrings, and diamond calves.",
    warmup: [
      "5 min stationary cycle at moderate pace",
      "Dynamic leg swings (front-to-back, side-to-side - 15 each)",
      "Deep bodyweight goblet squats with 3-sec pause (2 sets of 10)",
      "Hip 90/90 mobility drill (1 minute each side)"
    ],
    exercises: [
      {
        id: "d3-ex1",
        name: "Barbell Back Squats",
        target: "Quadriceps, Glutes",
        secondary: "Hamstrings, Core, Spinal Erectors",
        equipment: "Squat Rack, Barbell & Plates",
        difficulty: "Advanced",
        sets: 4,
        reps: "6 - 8 reps",
        rest: "120 - 180 sec",
        tempo: "3-1-1-0 (1s pause at bottom)",
        imageType: "barbell-squat",
        description: "The absolute undisputed king of all lower-body exercises for systemic anabolic hormone release and leg mass.",
        cues: [
          "Rest bar securely across upper traps; grip firmly.",
          "Feet slightly wider than shoulder-width, toes angled 15-30 degrees outward.",
          "Take a deep diaphragmatic breath into belly, brace core hard.",
          "Break simultaneously at hips and knees, descending until hip crease passes below kneecap.",
          "Drive heels hard through the floor, spreading knees out on the ascent."
        ],
        mistakes: [
          "Knees caving inward (valgus collapse)",
          "Rising onto toes / heels lifting off the floor",
          "Rounding lower back at bottom ('butt wink')"
        ]
      },
      {
        id: "d3-ex2",
        name: "Romanian Deadlifts (RDL)",
        target: "Hamstrings, Gluteal Fold",
        secondary: "Lower Back, Core, Forearms",
        equipment: "Barbell or Heavy Dumbbells",
        difficulty: "Intermediate",
        sets: 4,
        reps: "8 - 10 reps",
        rest: "90 sec",
        tempo: "3-1-1-0",
        imageType: "rdl",
        description: "The premier hamstring lengthener and hip hinge movement for thick hamstrings and round glutes.",
        cues: [
          "Stand tall with soft, slightly bent knees.",
          "Push hips as far back as possible as if touching a wall behind you.",
          "Slide bar closely down your thighs and over your knees.",
          "Stop at mid-shin when you feel a strong stretch in your hamstrings.",
          "Drive hips forward and contract glutes forcefully to stand."
        ],
        mistakes: [
          "Turning it into a squat by bending knees too much",
          "Rounding upper or lower spine to reach lower"
        ]
      },
      {
        id: "d3-ex3",
        name: "Incline Leg Press",
        target: "Quadriceps (Vastus Medialis / Teardrop)",
        secondary: "Glutes, Adductors",
        equipment: "45-Degree Leg Press Machine",
        difficulty: "Intermediate",
        sets: 4,
        reps: "10 - 12 reps",
        rest: "90 sec",
        tempo: "3-0-1-0",
        imageType: "leg-press",
        description: "Allows high-volume loading of the quads without spinal compression.",
        cues: [
          "Position feet shoulder-width in center of plate.",
          "Keep lower back and glutes pressed flat against backrest throughout.",
          "Lower platform smoothly until knees reach 90 degrees.",
          "Press through whole foot to return, stopping just short of locking knees."
        ],
        mistakes: [
          "Locking knees violently at the top (extremely dangerous for joint safety)",
          "Letting lower back curl off the seat at bottom"
        ]
      },
      {
        id: "d3-ex4",
        name: "Bulgarian Split Squats",
        target: "Quads, Glute Medius",
        secondary: "Hamstrings, Core Balance",
        equipment: "Bench & Dumbbells",
        difficulty: "Advanced",
        sets: 3,
        reps: "10 - 12 reps per leg",
        rest: "75 sec between legs",
        tempo: "2-1-1-0",
        imageType: "bulgarian-split-squat",
        description: "Brutal unilateral exercise that fixes muscular imbalances, boosts athletic stability, and torches quads.",
        cues: [
          "Place one foot top-down on bench behind you; take a comfortable lunge stance.",
          "Lower hips straight down until rear knee hovers just above ground.",
          "Keep front heel pinned; drive up through front leg.",
          "Maintain a proud, slightly forward-leaning chest."
        ],
        mistakes: [
          "Stance too short causing excessive knee shearing",
          "Pushing off the rear foot instead of loading front working leg"
        ]
      },
      {
        id: "d3-ex5",
        name: "Lying or Seated Hamstring Curls",
        target: "Hamstrings (Knee Flexion)",
        secondary: "Calves",
        equipment: "Hamstring Curl Machine",
        difficulty: "Beginner",
        sets: 3,
        reps: "12 - 15 reps",
        rest: "60 sec",
        tempo: "2-0-1-1",
        imageType: "leg-curl",
        description: "Direct knee flexion isolation to fully stimulate both heads of the biceps femoris.",
        cues: [
          "Pad rested just below calf muscles on Achilles tendon.",
          "Curl heels smoothly toward glutes.",
          "Hold peak contraction for 1 full second, feeling intense hamstring tension.",
          "Control the descent slowly for 3 seconds."
        ],
        mistakes: [
          "Arching lower back off the pad to assist the curl",
          "Swinging weight dynamically without control"
        ]
      },
      {
        id: "d3-ex6",
        name: "Leg Extensions (Teardrop Focus)",
        target: "Quadriceps (Rectus Femoris)",
        secondary: "Vastus Lateralis",
        equipment: "Leg Extension Machine",
        difficulty: "Beginner",
        sets: 3,
        reps: "15 reps",
        rest: "60 sec",
        tempo: "2-0-1-1",
        imageType: "leg-extension",
        description: "Strict isolation exercise to build detailed quad separation and strengthen the knee patella tendon.",
        cues: [
          "Align knee joint directly with the machine's pivot axis.",
          "Extend legs until knees are straight; squeeze quads as hard as possible for 1-2 sec.",
          "Lower weights under full control."
        ],
        mistakes: [
          "Kicking weight up using jerking motions"
        ]
      },
      {
        id: "d3-ex7",
        name: "Standing Barbell / Machine Calf Raises",
        target: "Gastrocnemius (Upper Diamond Calf)",
        secondary: "Achilles Tendon",
        equipment: "Standing Calf Machine or Step + Barbell",
        difficulty: "Beginner",
        sets: 4,
        reps: "15 - 20 reps",
        rest: "60 sec",
        tempo: "2-2-1-1 (2s deep stretch at bottom)",
        imageType: "standing-calf",
        description: "Target the large visible gastrocnemius head with a full stretch and high peak squeeze.",
        cues: [
          "Balls of feet on the edge of the block with heels free.",
          "Drop heels down below block level for a deep, 2-second stretch.",
          "Rise all the way up onto big toes like a ballerina.",
          "Pause for 1 second at top squeeze."
        ],
        mistakes: [
          "Bouncing rapidly using Achilles tendon elasticity instead of muscular contraction",
          "Cutting range of motion short"
        ]
      },
      {
        id: "d3-ex8",
        name: "Seated Calf Raises",
        target: "Soleus (Deep Calf Muscle)",
        secondary: "Ankle Stabilizers",
        equipment: "Seated Calf Machine",
        difficulty: "Beginner",
        sets: 3,
        reps: "15 - 20 reps",
        rest: "45-60 sec",
        tempo: "2-1-1-1",
        imageType: "seated-calf",
        description: "With knees bent at 90 degrees, the soleus muscle underneath the calf takes over, adding total lower leg width.",
        cues: [
          "Adjust knee pad snug across lower thighs.",
          "Lower heels into deep calf stretch.",
          "Contract calves to lift heels as high as possible."
        ],
        mistakes: [
          "Short pulsing reps instead of full excursion"
        ]
      }
    ],
    cooldown: [
      "Standing quad stretch against wall (45 seconds each leg)",
      "Seated forward fold hamstring stretch (1 minute)",
      "Deep calf wall stretch (45 seconds each leg)",
      "Foam roll IT bands, glutes, and quads (5 minutes)"
    ]
  },
  {
    dayNumber: 4,
    id: "day-4",
    title: "Shoulders & Abs",
    subtitle: "Boulder Delts & Shredded Midsection",
    focus: "Anterior Delts, Lateral Delts, Rear Delts, Upper & Lower Abs, Obliques",
    duration: "65-75 min",
    intensity: "High",
    caloriesBurn: "420-530 kcal",
    tagline: "Build wide 3D cannonball shoulders to broaden your frame and carve a deep, chiseled six-pack.",
    warmup: [
      "Arm crossovers and overhead reach (20 reps)",
      "Light dumbbell lateral raise warm-up (2 sets of 15)",
      "Dead bug core activations (2 sets of 12 reps)",
      "Rotator cuff external rotations with light band"
    ],
    exercises: [
      {
        id: "d4-ex1",
        name: "Overhead Barbell Military Press (OHP)",
        target: "Front Deltoids, Lateral Deltoids",
        secondary: "Triceps, Upper Chest, Core Stabilizers",
        equipment: "Barbell & Squat Rack",
        difficulty: "Intermediate",
        sets: 4,
        reps: "6 - 8 reps",
        rest: "90 - 120 sec",
        tempo: "2-1-1-0",
        imageType: "overhead-press",
        description: "The gold standard vertical push for sheer shoulder strength, upper body stability, and dense deltoid mass.",
        cues: [
          "Grip bar just outside shoulder width; resting on collarbone/front delts.",
          "Squeeze glutes tight and brace abs like taking a punch.",
          "Press bar straight up, pulling head back slightly until bar clears forehead.",
          "Push head through 'the window' once bar passes top; lock out overhead."
        ],
        mistakes: [
          "Excessive backward lumbar hyperextension (causes back pain)",
          "Bending knees to push-press (keep it strict overhead military press)"
        ]
      },
      {
        id: "d4-ex2",
        name: "Dumbbell Lateral Raises",
        target: "Lateral Deltoids (Shoulder Width)",
        secondary: "Traps",
        equipment: "Dumbbells",
        difficulty: "Beginner",
        sets: 4,
        reps: "12 - 15 reps",
        rest: "60 sec",
        tempo: "2-0-1-1",
        imageType: "lateral-raise",
        description: "The single most effective exercise for expanding shoulder width and giving you that classic 3D capped look.",
        cues: [
          "Slight forward lean at hips (10 degrees); knees soft.",
          "Lead the motion with elbows rather than wrists.",
          "Raise arms out to sides until parallel to floor like pouring two pitchers of water.",
          "Hold for a split-second pause at the peak; lower smoothly."
        ],
        mistakes: [
          "Swinging upper body and using momentum",
          "Raising weights higher than shoulder level with shrugged traps"
        ]
      },
      {
        id: "d4-ex3",
        name: "Seated Arnold Dumbbell Press",
        target: "Anterior & Lateral Delts",
        secondary: "Triceps, Upper Traps",
        equipment: "90-Degree Bench & Dumbbells",
        difficulty: "Intermediate",
        sets: 3,
        reps: "10 - 12 reps",
        rest: "75 sec",
        tempo: "2-1-1-0",
        imageType: "arnold-press",
        description: "Arnold Schwarzenegger's signature shoulder builder that recruits all three deltoid heads through rotation.",
        cues: [
          "Start with dumbbells at chin level, palms facing toward you.",
          "As you press overhead, rotate your wrists outward until palms face forward.",
          "Reverse the rotation smoothly on the descent back to chin level."
        ],
        mistakes: [
          "Rushing the rotational movement",
          "Allowing dumbbells to drift away from the body"
        ]
      },
      {
        id: "d4-ex4",
        name: "Reverse Pec Deck Flyes (Rear Delts)",
        target: "Rear Deltoids",
        secondary: "Rhomboids, Infraspinatus",
        equipment: "Pec Deck Machine",
        difficulty: "Beginner",
        sets: 4,
        reps: "15 reps",
        rest: "60 sec",
        tempo: "2-0-1-1",
        imageType: "rear-delt-fly",
        description: "Isolates the often-neglected rear delts, essential for balanced posture and complete 3D shoulder shape.",
        cues: [
          "Sit facing the machine pad with chest supported.",
          "Grip handles with neutral or overhand grip; slight bend in elbows.",
          "Pull arms back in a wide arc horizontally.",
          "Focus on feeling the contraction solely in the back of your shoulders."
        ],
        mistakes: [
          "Squeezing shoulder blades too early and using traps instead of rear delts",
          "Bending elbows excessively during the pull"
        ]
      },
      {
        id: "d4-ex5",
        name: "Dumbbell Shrugs (Trapezius)",
        target: "Upper Trapezius",
        secondary: "Levator Scapulae, Forearms",
        equipment: "Heavy Dumbbells",
        difficulty: "Beginner",
        sets: 3,
        reps: "12 - 15 reps",
        rest: "60 sec",
        tempo: "2-1-1-1 (1s peak squeeze)",
        imageType: "shrugs",
        description: "Builds towering upper traps flanking your neck for a dominant athletic silhouette.",
        cues: [
          "Hold dumbbells at sides with neutral grip.",
          "Elevate shoulders straight up toward ears as high as possible.",
          "Hold peak contraction for 1-2 seconds; lower under strict control."
        ],
        mistakes: [
          "Rolling shoulders in circles (provides no extra benefit and strains neck)",
          "Bending elbows to assist the lift"
        ]
      },
      {
        id: "d4-ex6",
        name: "Hanging Leg / Knee Raises",
        target: "Lower Rectus Abdominis",
        secondary: "Hip Flexors, Grip Strength",
        equipment: "Pull-Up Bar",
        difficulty: "Intermediate",
        sets: 3,
        reps: "12 - 15 reps",
        rest: "60 sec",
        tempo: "2-0-1-1",
        imageType: "hanging-leg-raise",
        description: "Target the stubborn lower abdominal pouch by tilting the pelvis upward against gravity.",
        cues: [
          "Hang from bar with overhand grip; engage lats to prevent body swinging.",
          "Curl pelvis up and bring knees or straight toes toward chest level.",
          "Squeeze lower abs at the top; lower legs slowly without swinging."
        ],
        mistakes: [
          "Swinging back and forth like a pendulum",
          "Only lifting legs with hip flexors without curling pelvis"
        ]
      },
      {
        id: "d4-ex7",
        name: "Kneeling Cable Rope Crunches",
        target: "Upper Rectus Abdominis (Six-Pack Core)",
        secondary: "Internal Obliques",
        equipment: "High Cable & Rope Attachment",
        difficulty: "Beginner",
        sets: 3,
        reps: "15 - 20 reps",
        rest: "60 sec",
        tempo: "2-0-1-1",
        imageType: "cable-crunch",
        description: "Enables progressive overload on the abdominal wall to thicken the muscle bellies of your six-pack.",
        cues: [
          "Kneel in front of cable machine; hold rope handles beside temples.",
          "Keep hips pinned stationary; flex spine to crunch elbows toward knees.",
          "Exhale all air out and squeeze abs fiercely at maximum contraction."
        ],
        mistakes: [
          "Sitting down onto your heels (hips must remain high and locked)",
          "Pulling with arms rather than crunching with the core"
        ]
      },
      {
        id: "d4-ex8",
        name: "Standard & Side Plank Holds",
        target: "Transverse Abdominis & Obliques",
        secondary: "Glutes, Lower Back",
        equipment: "Exercise Mat",
        difficulty: "Beginner",
        sets: 3,
        reps: "45-60 sec holds",
        rest: "45 sec",
        tempo: "Isometric Hold",
        imageType: "plank",
        description: "Builds deep inner core stability, acts as a natural weight-belt to cinch the waistline.",
        cues: [
          "Elbows under shoulders; body forming a rigid straight plank line.",
          "Squeeze glutes, quads, and pull belly button in toward spine.",
          "Breathe steadily without letting hips sag down or pike up."
        ],
        mistakes: [
          "Dropping hips down creating lumbar arch"
        ]
      }
    ],
    cooldown: [
      "Cross-arm shoulder stretch (30s each)",
      "Cobra pose abdominal stretch (1 minute)",
      "Cat-Cow spinal mobility (10 reps)",
      "Rest, rehydrate, and consume high-protein meal"
    ]
  },
  {
    dayNumber: 5,
    id: "day-5",
    title: "Full Body Functional & HIIT",
    subtitle: "Athletic Conditioning & Maximum Calorie Torch",
    focus: "Full Kinetic Chain, Cardio Endurance, Power, Agility",
    duration: "55-65 min",
    intensity: "Extreme",
    caloriesBurn: "550-750 kcal",
    tagline: "Break plateaus, burn stubborn fat, and build real-world functional stamina with high-octane circuits.",
    warmup: [
      "Jumping jacks & high knees (2 minutes continuous)",
      "Inchworms to push-up (10 reps)",
      "Bodyweight air squats (20 reps)",
      "Thoracic bridge rotations (8 reps each side)"
    ],
    exercises: [
      {
        id: "d5-ex1",
        name: "Kettlebell / Dumbbell Swings",
        target: "Glutes, Hamstrings, Hip Hinge Power",
        secondary: "Core, Lats, Grip",
        equipment: "Kettlebell (16-24 kg) or Dumbbell",
        difficulty: "Intermediate",
        sets: 4,
        reps: "15 - 20 reps",
        rest: "60 sec",
        tempo: "Explosive",
        imageType: "kettlebell-swing",
        description: "High-power posterior chain drill that torches calories while building explosive hip drive.",
        cues: [
          "Hinge at the hips, letting kettlebell swing back between thighs.",
          "Snap hips forward explosively, squeezing glutes hard at the top.",
          "Let arms act only as pendulum guides; weight floats to chest level."
        ],
        mistakes: [
          "Squatting the weight down instead of hip hinging",
          "Lifting weight with shoulder muscles rather than hip thrust"
        ]
      },
      {
        id: "d5-ex2",
        name: "Dumbbell Thrusters (Squat to Overhead Press)",
        target: "Quads, Shoulders, Triceps",
        secondary: "Glutes, Core, Cardiovascular System",
        equipment: "Pair of Medium Dumbbells",
        difficulty: "Advanced",
        sets: 4,
        reps: "10 - 12 reps",
        rest: "75 sec",
        tempo: "Fluid & Explosive",
        imageType: "thrusters",
        description: "A devastating full-body compound exercise that links a deep squat directly to an overhead press.",
        cues: [
          "Hold dumbbells at shoulder level in front rack position.",
          "Squat down until thighs reach parallel.",
          "Drive up violently through heels and use leg momentum to press dumbbells overhead in one continuous motion.",
          "Lower weights back to shoulders as you descend into the next rep."
        ],
        mistakes: [
          "Pausing between the squat and the press (must be one fluid wave)"
        ]
      },
      {
        id: "d5-ex3",
        name: "Bodyweight Pull-Ups / Chin-Ups",
        target: "Lats, Biceps, Upper Back",
        secondary: "Forearms, Core",
        equipment: "Pull-Up Bar",
        difficulty: "Intermediate",
        sets: 4,
        reps: "8 - 12 reps (or to failure)",
        rest: "75 sec",
        tempo: "2-0-1-1",
        imageType: "pullups",
        description: "The premier test of relative upper-body strength and functional pulling capability.",
        cues: [
          "Hang from bar with full extension (dead hang).",
          "Pull chest up toward bar, driving elbows down into back pockets.",
          "Clear chin over bar; lower under full control."
        ],
        mistakes: [
          "Kicking legs or kipping violently"
        ]
      },
      {
        id: "d5-ex4",
        name: "Dumbbell Renegade Rows to Push-Up",
        target: "Core Anti-Rotation, Lats, Chest",
        secondary: "Triceps, Shoulders",
        equipment: "Pair of Hex Dumbbells",
        difficulty: "Intermediate",
        sets: 3,
        reps: "8 reps each arm",
        rest: "60 sec",
        tempo: "Controlled",
        imageType: "renegade-row",
        description: "Combines push-up strength with unilateral rowing and anti-rotational core stability.",
        cues: [
          "Start in high push-up position with hands gripping dumbbells on floor.",
          "Perform a strict push-up.",
          "At top, row one dumbbell to hip without twisting hips; set down and row opposite arm."
        ],
        mistakes: [
          "Twisting hips side to side (widen feet for better balance)"
        ]
      },
      {
        id: "d5-ex5",
        name: "Walking Dumbbell Lunges",
        target: "Quadriceps, Glutes, Hamstrings",
        secondary: "Calves, Balance",
        equipment: "Dumbbells",
        difficulty: "Beginner",
        sets: 3,
        reps: "20 total paces (10/leg)",
        rest: "60 sec",
        tempo: "Steady pace",
        imageType: "walking-lunges",
        description: "Dynamic unilateral leg developer that improves hip mobility, balance, and leg muscular endurance.",
        cues: [
          "Step forward into a long stride; drop rear knee to 1 inch above floor.",
          "Drive through front heel to step directly into the next stride.",
          "Keep torso tall and proud."
        ],
        mistakes: [
          "Letting front knee collapse inwards"
        ]
      },
      {
        id: "d5-ex6",
        name: "Full Burpees with Jump",
        target: "Full Body & Cardiovascular Capacity",
        secondary: "Chest, Triceps, Quads",
        equipment: "Bodyweight",
        difficulty: "Intermediate",
        sets: 3,
        reps: "12 - 15 reps",
        rest: "60 sec",
        tempo: "Fast & Controlled",
        imageType: "burpee",
        description: "The ultimate metabolic conditioning exercise to maximize heart rate and skyrocket EPOC caloric burn.",
        cues: [
          "Drop hands to floor, jump feet back into plank.",
          "Lower chest and thighs all the way to floor.",
          "Push up, snap feet under hips, jump straight up with arms overhead."
        ],
        mistakes: [
          "Arching lower back on the plank jump"
        ]
      },
      {
        id: "d5-ex7",
        name: "Heavy Farmer's Walk",
        target: "Grip Strength, Traps, Core",
        secondary: "Calves, Forearms",
        equipment: "Two Heavy Dumbbells or Kettlebells",
        difficulty: "Beginner",
        sets: 3,
        reps: "40-50 meters walk",
        rest: "60 sec",
        tempo: "Controlled march",
        imageType: "farmers-walk",
        description: "Old-school brute strength exercise that forges unbreakable grip, thick traps, and an iron core.",
        cues: [
          "Deadlift heavy weights up to sides.",
          "Stand tall with chest out and shoulders pulled back.",
          "Take short, brisk, controlled steps without swinging weights."
        ],
        mistakes: [
          "Slouching forward or letting weights bang against thighs"
        ]
      },
      {
        id: "d5-ex8",
        name: "Mountain Climbers (HIIT Finisher)",
        target: "Core, Hip Flexors, Shoulders",
        secondary: "Cardio",
        equipment: "Bodyweight / Mat",
        difficulty: "Beginner",
        sets: 3,
        reps: "45 seconds non-stop",
        rest: "45 sec",
        tempo: "High Speed Sprint",
        imageType: "mountain-climber",
        description: "High-speed sprinting motion in a plank position to ignite the cardiovascular system and burn final fat calories.",
        cues: [
          "Hold strict plank position.",
          "Drive knees alternatively toward chest as fast as possible.",
          "Keep hips level and shoulders directly over wrists."
        ],
        mistakes: [
          "Bouncing hips up in the air"
        ]
      }
    ],
    cooldown: [
      "Child's pose & deep diaphragmatic breathing (2 minutes)",
      "Pigeon pose glute stretch (1 minute each side)",
      "Full body floor stretch",
      "Electrolyte replenishment + hydration (750ml water)"
    ]
  },
  {
    dayNumber: 6,
    id: "day-6",
    title: "Arms & Core Sculpt",
    subtitle: "Guns & Midsection Hypertrophy Specialization",
    focus: "Biceps, Triceps, Forearms, Rectus Abdominis, Obliques",
    duration: "60-70 min",
    intensity: "Moderate-High",
    caloriesBurn: "380-480 kcal",
    tagline: "Dedicated arm supersets to stretch shirt sleeves and precision core carving for razor-sharp definition.",
    warmup: [
      "Light arm swings & wrist rotations (2 minutes)",
      "Band pushdowns & band curls (2 light sets of 20)",
      "Bird-dog core warm-up (10 reps each side)"
    ],
    exercises: [
      {
        id: "d6-ex1",
        name: "Close-Grip Barbell Bench Press",
        target: "Triceps (Inner Mass)",
        secondary: "Chest, Anterior Delts",
        equipment: "Barbell & Bench",
        difficulty: "Intermediate",
        sets: 4,
        reps: "8 - 10 reps",
        rest: "90 sec",
        tempo: "3-0-1-0",
        imageType: "close-grip-bench",
        description: "The heaviest compound overload exercise for raw tricep horsepower and overall pushing power.",
        cues: [
          "Grip barbell roughly shoulder-width apart (too narrow hurts wrists).",
          "Keep elbows tucked close to your torso at a 45-degree angle.",
          "Lower bar to lower chest; press up forcefully locking triceps."
        ],
        mistakes: [
          "Placing hands only 2-3 inches apart which strains wrist ligaments"
        ]
      },
      {
        id: "d6-ex2",
        name: "Incline Dumbbell Bicep Curls",
        target: "Biceps (Long Head Stretch)",
        secondary: "Brachialis",
        equipment: "Incline Bench (45°), Dumbbells",
        difficulty: "Intermediate",
        sets: 4,
        reps: "10 - 12 reps",
        rest: "75 sec",
        tempo: "2-1-1-0",
        imageType: "incline-curl",
        description: "Places the long head of the bicep on a tremendous passive stretch behind the torso for superior hypertrophy.",
        cues: [
          "Sit back against the 45-degree bench with arms hanging vertically.",
          "Curl dumbbells up while supinating wrists (palms up).",
          "Lower weights under control until arms are fully stretched."
        ],
        mistakes: [
          "Lifting shoulders forward off the bench"
        ]
      },
      {
        id: "d6-ex3",
        name: "Overhead Rope Triceps Extensions (Cable)",
        target: "Triceps Long Head",
        secondary: "Triceps Medial Head",
        equipment: "Low Cable & Rope Attachment",
        difficulty: "Beginner",
        sets: 3,
        reps: "12 - 15 reps",
        rest: "60 sec",
        tempo: "2-0-1-1",
        imageType: "overhead-cable-tricep",
        description: "Continuous tension stretch for the long head of the triceps with full cable resistance curve.",
        cues: [
          "Face away from pulley, rope held behind head.",
          "Keep upper arms stationary near ears.",
          "Extend arms forward and spread rope outward at peak."
        ],
        mistakes: [
          "Allowing elbows to flare wide outward"
        ]
      },
      {
        id: "d6-ex4",
        name: "EZ-Bar Preacher Curls (Spider Variation)",
        target: "Biceps Short Head (Width & Peak)",
        secondary: "Brachialis",
        equipment: "Preacher Bench & EZ-Bar",
        difficulty: "Intermediate",
        sets: 3,
        reps: "10 - 12 reps",
        rest: "60 sec",
        tempo: "3-0-1-1",
        imageType: "preacher-curl",
        description: "Locks the arm in front of the body to maximize peak tension at full bicep contraction.",
        cues: [
          "Upper arms flush against preacher pad.",
          "Curl bar to shoulder height, hold for 1 sec.",
          "Lower 3 seconds down to near extension."
        ],
        mistakes: [
          "Lifting hips off the seat to yank weight up"
        ]
      },
      {
        id: "d6-ex5",
        name: "Reverse Grip Barbell Curls",
        target: "Brachioradialis & Forearm Extensors",
        secondary: "Brachialis",
        equipment: "Barbell / EZ-Bar",
        difficulty: "Beginner",
        sets: 3,
        reps: "12 - 15 reps",
        rest: "60 sec",
        tempo: "2-0-1-0",
        imageType: "reverse-curl",
        description: "Develops thick, Popeye-style forearms and protects wrist stability for all heavy compound lifts.",
        cues: [
          "Grip bar with overhand (pronated) grip, palms facing down.",
          "Curl bar while keeping wrists locked neutral and elbows pinned."
        ],
        mistakes: [
          "Letting wrists bend backwards under the load"
        ]
      },
      {
        id: "d6-ex6",
        name: "Ab Wheel Rollouts",
        target: "Total Abdominal Wall (Anti-Extension)",
        secondary: "Lats, Lower Back",
        equipment: "Ab Roller Wheel",
        difficulty: "Advanced",
        sets: 3,
        reps: "10 - 12 reps",
        rest: "60 sec",
        tempo: "3-0-1-0",
        imageType: "ab-wheel",
        description: "One of the most scientifically proven EMG activation movements for the entire core and deep transverse abdominis.",
        cues: [
          "Kneel on mat, hold ab roller with both hands.",
          "Tuck pelvis under (posterior pelvic tilt), roll wheel forward slowly.",
          "Extend as far as comfortable without hyperextending lower spine.",
          "Pull back using your abs, not your hips."
        ],
        mistakes: [
          "Allowing lower back to sag and arch into a dip (causes back strain)"
        ]
      },
      {
        id: "d6-ex7",
        name: "Weighted Russian Twists",
        target: "Obliques & Rotational Core",
        secondary: "Hip Flexors, Rectus Abdominis",
        equipment: "Medicine Ball or Dumbbell",
        difficulty: "Beginner",
        sets: 3,
        reps: "20 total reps (10/side)",
        rest: "45 sec",
        tempo: "Controlled rotation",
        imageType: "russian-twist",
        description: "Carves the side oblique cuts and enhances athletic rotational power.",
        cues: [
          "Sit on floor with knees bent, feet elevated slightly.",
          "Lean back at 45 degrees.",
          "Rotate torso side to side, touching weight to floor beside hip."
        ],
        mistakes: [
          "Only moving arms side-to-side without turning the ribcage"
        ]
      },
      {
        id: "d6-ex8",
        name: "Hollow Body Rockers",
        target: "Deep Core & Pelvic Control",
        secondary: "Hip Flexors",
        equipment: "Mat",
        difficulty: "Intermediate",
        sets: 3,
        reps: "30-45 sec",
        rest: "45 sec",
        tempo: "Continuous Rock",
        imageType: "hollow-body",
        description: "Gymnastic core foundation that eliminates anterior pelvic tilt and locks down core stiffness.",
        cues: [
          "Lie flat, press lower back into floor with zero gap.",
          "Elevate legs and shoulder blades slightly; reach arms overhead.",
          "Maintain banana shape and rock gently forward and back."
        ],
        mistakes: [
          "Allowing lower back to lift off the ground"
        ]
      }
    ],
    cooldown: [
      "Forearm flexor and extensor stretch (30s each)",
      "Bicep and tricep overhead stretches (30s each)",
      "Child's pose decompression (1 min)",
      "Post-workout recovery meal"
    ]
  },
  {
    dayNumber: 7,
    id: "day-7",
    title: "Active Recovery & Mobility",
    subtitle: "Restoration, Flexibility & Nervous System Reset",
    focus: "Mobility, Fascial Release, Joint Health, Parasympathetic State",
    duration: "40-50 min",
    intensity: "Low / Restorative",
    caloriesBurn: "200-280 kcal",
    tagline: "Muscles grow when you rest. Recharge your joints, restore tissue length, and prepare to crush next week.",
    warmup: [
      "5 min easy walking in fresh air",
      "Gentle neck rolls and shoulder shrugs"
    ],
    exercises: [
      {
        id: "d7-ex1",
        name: "World's Greatest Stretch (Lunge with T-Spine Rotation)",
        target: "Hips, Groin, Thoracic Spine, Hamstrings",
        secondary: "Ankles",
        equipment: "Mat",
        difficulty: "Beginner",
        sets: 3,
        reps: "6 reps per side (slow)",
        rest: "30 sec",
        tempo: "Slow & Fluid",
        imageType: "wgs",
        description: "Revered by physical therapists and elite athletes, opening hip flexors, ankles, and thoracic rotation in one flow.",
        cues: [
          "Step into a long forward lunge with both hands inside front foot.",
          "Drop inside elbow toward the floor for a deep hip opener.",
          "Rotate torso and reach outside hand high to the ceiling, eyes following hand."
        ],
        mistakes: [
          "Rushing through the movement without breathing deeply"
        ]
      },
      {
        id: "d7-ex2",
        name: "Full Body Foam Rolling (Myofascial Release)",
        target: "IT Bands, Quads, Lats, Calves, Thoracic Spine",
        secondary: "Glutes",
        equipment: "High-Density Foam Roller",
        difficulty: "Beginner",
        sets: 1,
        reps: "60 sec per major muscle group",
        rest: "None",
        tempo: "Slow rolling",
        imageType: "foam-roller",
        description: "Breaks up muscular adhesions, releases trigger points, and promotes blood flow to accelerate muscular repair.",
        cues: [
          "Roll slowly over muscle bellies (avoid direct pressure on bones and joints).",
          "When you find a tender knot, pause on it for 20-30 seconds until tension releases.",
          "Breathe deeply and relax into the pressure."
        ],
        mistakes: [
          "Rolling too quickly like a steamroller"
        ]
      },
      {
        id: "d7-ex3",
        name: "Couch Stretch (Hip Flexor & Quad Opener)",
        target: "Psoas, Rectus Femoris (Tight Hips)",
        secondary: "Lower Back Relief",
        equipment: "Wall or Couch",
        difficulty: "Intermediate",
        sets: 2,
        reps: "90 seconds per side",
        rest: "30 sec",
        tempo: "Static hold with deep breaths",
        imageType: "couch-stretch",
        description: "Reverses the damaging effects of prolonged sitting by completely opening up the anterior hip capsule.",
        cues: [
          "Back knee placed against the corner of wall and floor, shin vertical against wall.",
          "Step other foot forward into a lunge.",
          "Contract glute on back leg and bring torso upright.",
          "Feel an immense stretch through the front of hip and thigh."
        ],
        mistakes: [
          "Arching lower back instead of tucking pelvis"
        ]
      },
      {
        id: "d7-ex4",
        name: "90/90 Hip Mobility Flow",
        target: "Internal & External Hip Rotation",
        secondary: "Gluteus Medius, Piriformis",
        equipment: "Floor Mat",
        difficulty: "Beginner",
        sets: 3,
        reps: "10 transitions",
        rest: "30 sec",
        tempo: "Controlled Transition",
        imageType: "hip-9090",
        description: "Restores natural hip rotational capacity to protect lower back and knees during heavy squatting.",
        cues: [
          "Sit on floor with front leg bent 90 degrees in front, back leg 90 degrees to side.",
          "Sit tall, lean gently over front shin for 20s.",
          "Transition knees across to the opposite side without using hands if possible."
        ],
        mistakes: [
          "Slumping forward with a rounded upper back"
        ]
      },
      {
        id: "d7-ex5",
        name: "Cat-Cow & Thoracic Extension",
        target: "Spinal Column & Paraspinal Muscles",
        secondary: "Neck, Core",
        equipment: "Mat",
        difficulty: "Beginner",
        sets: 3,
        reps: "15 reps",
        rest: "20 sec",
        tempo: "Synchronized with breathing",
        imageType: "cat-cow",
        description: "Lubricates the spinal vertebrae with synovial fluid and relieves pressure built from heavy axial loading.",
        cues: [
          "Hands under shoulders, knees under hips.",
          "Inhale: drop belly, arch back, look up (Cow).",
          "Exhale: tuck tailbone, dome back up, chin to chest (Cat)."
        ],
        mistakes: [
          "Moving aggressively instead of flowing with breath"
        ]
      },
      {
        id: "d7-ex6",
        name: "Band Dislocates & Pull-Aparts",
        target: "Shoulder Capsule & Rotator Cuff",
        secondary: "Upper Traps, Rhomboids",
        equipment: "Light Resistance Band",
        difficulty: "Beginner",
        sets: 3,
        reps: "15 reps each",
        rest: "30 sec",
        tempo: "Smooth Arc",
        imageType: "band-pullapart",
        description: "Lubricates the glenohumeral joint and opens the chest, reversing forward-rounded bench press shoulders.",
        cues: [
          "Grip band wide with straight arms in front of hips.",
          "Swing arms up and overhead in a smooth arc all the way behind hips.",
          "Only go as far as pain-free mobility allows."
        ],
        mistakes: [
          "Bending elbows to force the band over head"
        ]
      },
      {
        id: "d7-ex7",
        name: "30-45 Minute Low-Intensity Steady State (LISS) Walk",
        target: "Cardiovascular Capillary Density & Recovery",
        secondary: "Mental Clarity, Lymphatic Drainage",
        equipment: "Outdoor Path or Treadmill",
        difficulty: "Beginner",
        sets: 1,
        reps: "30-45 minutes continuous",
        rest: "None",
        tempo: "Zone 2 (Brisk conversational pace)",
        imageType: "liss-walk",
        description: "Promotes gentle blood circulation to flush lactic acid and metabolic waste without taxing the central nervous system.",
        cues: [
          "Walk briskly at a pace where you can easily hold a conversation.",
          "Keep posture upright and arms swinging naturally.",
          "Enjoy outdoor sunlight or relaxing podcast."
        ],
        mistakes: [
          "Walking too fast and turning it into high-intensity cardio"
        ]
      },
      {
        id: "d7-ex8",
        name: "10-Minute Box Breathing & Mental Decompression",
        target: "Autonomic Nervous System (Parasympathetic Switch)",
        secondary: "Cortisol Reduction, Heart Rate Variability",
        equipment: "Quiet Space / Mat",
        difficulty: "Beginner",
        sets: 1,
        reps: "10 minutes",
        rest: "Complete relaxation",
        tempo: "4s inhale, 4s hold, 4s exhale, 4s hold",
        imageType: "breathing",
        description: "Switches the body from sympathetic (fight or flight) into parasympathetic (rest and digest) to supercharge muscle synthesis.",
        cues: [
          "Sit comfortably or lie flat on back.",
          "Inhale through nose for 4 seconds into deep belly.",
          "Hold breath for 4 seconds.",
          "Exhale slowly through mouth for 4 seconds.",
          "Hold empty for 4 seconds, repeat."
        ],
        mistakes: [
          "Shallow chest breathing"
        ]
      }
    ],
    cooldown: [
      "Drink 1 liter of fresh lemon water with sea salt",
      "Ensure 8-9 hours of restorative sleep tonight",
      "Review upcoming week goals"
    ]
  }
];

// Helper to get total exercises across all 7 days
const ALL_EXERCISES = WORKOUT_DAYS.flatMap(day => 
  day.exercises.map(ex => ({
    ...ex,
    dayNumber: day.dayNumber,
    dayTitle: day.title
  }))
);

