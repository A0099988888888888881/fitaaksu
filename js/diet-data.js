/**
 * FitAasu Nutrition & Diet Database
 * Complete Goal-Specific Meal Plans, Timetables, Recipes & Macro Breakdowns
 */

const DIET_PLANS = [
  {
    id: "transformation-30kg",
    title: "30 KG Extreme Transformation Shred Diet",
    tagline: "High-volume, hunger-crushing 1620 kcal protocol engineered specifically to drop 30 kg of pure body fat while preserving lean muscle and tightening skin.",
    target: "30 KG Transformation Shred",
    calories: 1620,
    macros: {
      protein: 165, // grams
      carbs: 135,   // grams
      fats: 48,     // grams
      proteinPct: 41,
      carbsPct: 33,
      fatsPct: 26
    },
    badge: "-30 KG Shred Protocol",
    badgeColor: "lime",
    overview: "Losing 30 kilograms requires a strategic, high-satiety nutritional environment. This protocol delivers 165g of pure protein to stimulate muscle retention and skin collagen synthesis, while massive volumes of low-density leafy greens and fiber prevent hunger pangs.",
    highlights: [
      "Precision 650-800 kcal deficit targeting 0.8 to 1.0 kg fat burn per week",
      "Stomach-stretching volume: Enormous portions of cruciferous veggies with minimal calories",
      "Anti-loose skin nutrition: Rich in Vitamin C, Zinc, and Proline to maximize skin retraction",
      "Low glycemic complex carbohydrates concentrated strictly around workout sessions"
    ],
    meals: [
      {
        time: "07:00 AM",
        name: "Morning Wake-Up",
        title: "Metabolic Primer & Detox",
        calories: 20,
        protein: 0,
        carbs: 4,
        fats: 0,
        items: [
          "500ml warm water with 1 tbsp raw unfiltered Apple Cider Vinegar + 1/2 lemon",
          "1 pinch Himalayan rock salt (essential adrenal electrolytes)",
          "1 cup organic green tea or black espresso (EGCG fat oxidation)"
        ],
        tip: "ACV enhances insulin sensitivity and blunts morning cortisol spikes."
      },
      {
        time: "08:30 AM",
        name: "Lean Breakfast",
        title: "Skin-Tightening Egg White & Spinach Scramble",
        calories: 340,
        protein: 38,
        carbs: 24,
        fats: 9,
        items: [
          "6 Egg whites + 1 whole egg scrambled with baby spinach, mushrooms, and cherry tomatoes",
          "1 slice 100% whole grain or sprouted sourdough bread (toasted dry)",
          "1 small orange or 1/2 grapefruit (rich in Vitamin C for skin collagen synthesis)"
        ],
        vegAlternative: "160g scrambled firm tofu with turmeric, bell peppers, spinach + 1 slice sprouted bread.",
        tip: "Egg whites provide pure albumin protein with zero saturated fat, perfect for extreme shredding."
      },
      {
        time: "11:30 AM",
        name: "Mid-Day Hunger Blocker",
        title: "Crisp Veggie Sticks & Greek Curd",
        calories: 160,
        protein: 20,
        carbs: 15,
        fats: 2,
        items: [
          "150g 0% Fat Greek Yogurt (or hung curd seasoned with roasted jeera & black salt)",
          "1 large sliced English cucumber + 1 carrot cut into dipping sticks",
          "1 cup chilled water with fresh mint leaves"
        ],
        tip: "High water-content vegetables physically expand stomach mechanoreceptors to stop hunger cold."
      },
      {
        time: "01:30 PM",
        name: "Fat-Incinerator Lunch",
        title: "Lean Protein & Giant Super-Green Bowl",
        calories: 440,
        protein: 48,
        carbs: 38,
        fats: 10,
        items: [
          "180g Herb-seasoned grilled chicken breast or white fish fillet",
          "1/2 cup cooked brown basmati rice or quinoa (measured cooked)",
          "Huge bowl (2 cups) steamed broccoli, shredded purple cabbage, zucchini, and kale",
          "1 tsp extra virgin olive oil + fresh lemon juice dressing"
        ],
        vegAlternative: "180g boiled soya chunks sautéed in dry spices OR 140g low-fat paneer tikka + giant salad.",
        tip: "Broccoli and cabbage contain DIM (Diindolylmethane), helping detoxify estrogenic fat stores."
      },
      {
        time: "04:45 PM (Pre-Gym)",
        name: "Pre-Workout Ignition",
        title: "Clean Energy Surge",
        calories: 150,
        protein: 4,
        carbs: 32,
        fats: 1,
        items: [
          "1 crisp green apple sliced + sprinkle of cinnamon",
          "2 plain brown rice cakes",
          "1 cup strong black coffee (zero sugar)"
        ],
        tip: "Green apples offer low-glycemic fructose that burns steadily during intense weight training."
      },
      {
        time: "07:00 PM (Post-Gym)",
        name: "Post-Workout Muscle Lock",
        title: "Rapid Amino Delivery & Recovery",
        calories: 180,
        protein: 30,
        carbs: 8,
        fats: 2,
        items: [
          "1 scoop Whey Protein Isolate (or Plant Isolate) in ice water",
          "5g Creatine Monohydrate (prevents muscle loss while in caloric deficit)",
          "5g L-Glutamine"
        ],
        tip: "Isolate provides pure amino acids directly to muscle fibers with virtually 0g fat and sugar."
      },
      {
        time: "08:30 PM",
        name: "Night Recovery Dinner",
        title: "Anti-Loose Skin Dinner Feast",
        calories: 330,
        protein: 35,
        carbs: 18,
        fats: 12,
        items: [
          "160g Grilled white fish (Tilapia / Cod / Basa) or lean grilled chicken breast",
          "Large bowl of sautéed asparagus, green beans, and cauliflower rice seasoned with garlic & herbs",
          "1 cup warm chamomile or peppermint tea before sleep"
        ],
        vegAlternative: "120g grilled tempeh or paneer with roasted asparagus, mushrooms, and cauliflower rice.",
        tip: "Eating a light, vegetable-rich dinner 2.5 hours before bed maximizes night-time growth hormone and fat burning."
      }
    ]
  },
  {
    id: "bulking",
    title: "Muscle Hypertrophy & Clean Mass",
    tagline: "High-protein caloric surplus designed to build rock-solid muscle mass without excessive body fat.",
    target: "Hypertrophy / Bulking",
    calories: 3050,
    macros: {
      protein: 195, // grams
      carbs: 380,   // grams
      fats: 85,     // grams
      proteinPct: 26,
      carbsPct: 50,
      fatsPct: 24
    },
    badge: "Maximum Growth",
    badgeColor: "emerald",
    overview: "To maximize muscle protein synthesis, your body requires an anabolic caloric surplus along with 1.8-2.2g of protein per kg of bodyweight. This clean bulking protocol fuels heavy training sessions, restores glycogen stores rapidly, and supports deep cellular recovery.",
    highlights: [
      "Consistent 300-500 kcal surplus above maintenance",
      "Timed complex carbohydrates around workout window",
      "High bioavailability protein sources in every feeding",
      "Healthy monounsaturated & polyunsaturated fats for testosterone optimization"
    ],
    meals: [
      {
        time: "07:00 AM",
        name: "Morning Wake-Up Hydration",
        title: "Cellular Hydration & Digestive Primer",
        calories: 25,
        protein: 0,
        carbs: 6,
        fats: 0,
        items: [
          "500ml warm water with 1/2 fresh lemon juice",
          "1 pinch Himalayan pink rock salt (electrolytes & adrenal support)",
          "5 soaked almonds & 2 soaked walnuts"
        ],
        tip: "Rehydrates the body after 8 hours of sleep and stimulates digestive bile production."
      },
      {
        time: "08:15 AM",
        name: "Power Breakfast",
        title: "Anabolic Breakfast Bowl & Eggs",
        calories: 680,
        protein: 42,
        carbs: 85,
        fats: 18,
        items: [
          "4 Whole eggs (or 3 whole + 2 egg whites) scrambled in 1 tsp pure ghee or olive oil",
          "1.5 cups (90g) Rolled oats cooked with whole milk / almond milk",
          "1 ripe banana sliced + 1 tbsp natural peanut butter",
          "1 tsp organic honey & sprinkle of Ceylon cinnamon"
        ],
        vegAlternative: "Replace eggs with 100g grilled low-fat paneer or tofu scramble with turmeric & spinach.",
        tip: "Oats provide slow-release beta-glucan complex carbs for sustained morning energy."
      },
      {
        time: "11:15 AM",
        name: "Mid-Morning Nutrition",
        title: "Greek Yogurt & Fruit Fuel",
        calories: 380,
        protein: 26,
        carbs: 45,
        fats: 10,
        items: [
          "200g Greek yogurt (or hung curd)",
          "1 cup fresh mixed berries (blueberries / strawberries) or apple slices",
          "1 tbsp chia seeds & pumpkin seeds",
          "Handful of roasted almonds (15g)"
        ],
        vegAlternative: "Same recipe (100% vegetarian naturally).",
        tip: "Probiotics in yogurt optimize gut microbiome for maximum nutrient absorption."
      },
      {
        time: "01:30 PM",
        name: "Powerhouse Lunch",
        title: "Clean Carb & Lean Protein Feast",
        calories: 780,
        protein: 52,
        carbs: 95,
        fats: 20,
        items: [
          "180g Grilled skinless chicken breast or lean ground turkey",
          "1.5 cups cooked brown basmati rice or quinoa",
          "1 cup steamed broccoli, asparagus, and carrots",
          "1 cup yellow or black lentils (dal) cooked with cumin",
          "1 tbsp extra virgin olive oil drizzle over green salad"
        ],
        vegAlternative: "150g grilled cottage cheese (paneer) / soya chunks curry + 1.5 cups dal + rice.",
        tip: "Lentils + rice provide a complete complementary amino acid profile."
      },
      {
        time: "04:30 PM (60 min pre-gym)",
        name: "Pre-Workout Fuel",
        title: "Intra-Muscular Energy Primer",
        calories: 340,
        protein: 15,
        carbs: 58,
        fats: 6,
        items: [
          "2 slices 100% whole grain or sourdough bread with 1.5 tbsp peanut butter",
          "1 banana or 3-4 Medjool dates",
          "1 cup black coffee (or green tea) for caffeine focus & vasodilation"
        ],
        vegAlternative: "Same (completely vegetarian).",
        tip: "Dates provide quick-digesting natural glucose to top off liver glycogen for heavy lifts."
      },
      {
        time: "06:45 PM (Post-Gym)",
        name: "Post-Workout Recovery",
        title: "Anabolic Window Replenishment",
        calories: 360,
        protein: 34,
        carbs: 45,
        fats: 4,
        items: [
          "1 scoop (30g) Whey Protein Isolate mixed in cold water",
          "5g Micronized Creatine Monohydrate",
          "1 large banana or 300ml coconut water (potassium & quick carbs)"
        ],
        vegAlternative: "1 scoop Plant Protein Isolate (Pea & Brown Rice blend) + 5g Creatine + banana.",
        tip: "Creatine monohydrate saturates muscle phosphocreatine reserves to boost strength and muscle fullness."
      },
      {
        time: "08:45 PM",
        name: "Nourishing Dinner",
        title: "Slow-Burning Recovery Dinner",
        calories: 485,
        protein: 40,
        carbs: 51,
        fats: 15,
        items: [
          "160g Grilled salmon fillet or baked chicken thigh",
          "1 medium baked sweet potato (mashed with sea salt)",
          "Large bowl of sautéed green beans, spinach, and mushrooms with garlic"
        ],
        vegAlternative: "120g grilled tofu / paneer tikka with stir-fry vegetables + sweet potato.",
        tip: "Wild salmon supplies Omega-3 EPA/DHA fatty acids that reduce training-induced joint inflammation."
      }
    ]
  },
  {
    id: "cutting",
    title: "Fat Shred & Lean Muscle Definition",
    tagline: "Targeted caloric deficit with high protein to strip stubborn fat while preserving every gram of hard-earned muscle.",
    target: "Fat Loss / Cutting",
    calories: 1920,
    macros: {
      protein: 180, // grams
      carbs: 150,   // grams
      fats: 62,     // grams
      proteinPct: 38,
      carbsPct: 32,
      fatsPct: 30
    },
    badge: "Maximum Shred",
    badgeColor: "rose",
    overview: "During a cutting phase, elevated protein intake (2.2-2.5g per kg) prevents muscle catabolism and boosts satiety. We keep complex carbohydrates timed around your workout for peak performance, while prioritizing high-volume, fiber-rich vegetables to keep you full and energized throughout the day.",
    highlights: [
      "Moderate, sustainable 400-500 kcal deficit",
      "High thermic effect of food (TEF) through extra-lean protein",
      "High dietary fiber (35-40g daily) to eliminate hunger spikes",
      "Carbohydrates strategically concentrated pre and post-workout"
    ],
    meals: [
      {
        time: "07:00 AM",
        name: "Morning Wake-Up",
        title: "Metabolic Awakening",
        calories: 15,
        protein: 0,
        carbs: 3,
        fats: 0,
        items: [
          "500ml warm water with 1 tbsp organic Apple Cider Vinegar + lemon",
          "1 cup pure green tea or black espresso (antioxidants & EGCG)"
        ],
        tip: "Apple cider vinegar promotes insulin sensitivity and helps regulate morning blood glucose."
      },
      {
        time: "08:30 AM",
        name: "Lean Breakfast",
        title: "High-Protein Egg White Omelet & Greens",
        calories: 380,
        protein: 40,
        carbs: 28,
        fats: 11,
        items: [
          "5 Egg whites + 1 whole egg scrambled with baby spinach, tomatoes, and bell peppers",
          "1 slice 100% sprouted Ezekiel bread (lightly toasted)",
          "1/4 medium avocado (healthy fats & potassium)"
        ],
        vegAlternative: "150g grilled tofu scramble cooked with veggies and nutritional yeast.",
        tip: "Egg whites are pure bioavailable albumin protein with almost zero fat."
      },
      {
        time: "11:30 AM",
        name: "Mid-Day Snack",
        title: "Low-Calorie Protein Crunch",
        calories: 180,
        protein: 22,
        carbs: 14,
        fats: 4,
        items: [
          "150g 0% Fat Plain Greek Yogurt",
          "1/2 cup fresh blueberries (low glycemic berries)",
          "Sprinkle of cinnamon and 1 tbsp ground flaxseeds"
        ],
        vegAlternative: "Same (Greek yogurt is vegetarian).",
        tip: "Flaxseeds provide insoluble fiber to curb hunger cravings between meals."
      },
      {
        time: "01:30 PM",
        name: "Lean Shred Lunch",
        title: "Grilled Chicken & Superfood Greens Bowl",
        calories: 460,
        protein: 48,
        carbs: 42,
        fats: 10,
        items: [
          "180g Herb-grilled chicken breast",
          "1/2 cup cooked brown rice or quinoa (measured cooked)",
          "Huge bowl of mixed leafy greens, cucumber, radishes, and bell peppers",
          "Dressing: 1 tsp olive oil + fresh lemon juice + Dijon mustard"
        ],
        vegAlternative: "180g boiled soya chunks sautéed in Indian dry spices + 1/2 cup brown rice + massive salad.",
        tip: "Filling half your plate with raw cruciferous greens expands stomach volume for zero guilt."
      },
      {
        time: "04:30 PM (Pre-Workout)",
        name: "Pre-Workout Ignition",
        title: "Light Glycogen & Pump",
        calories: 160,
        protein: 4,
        carbs: 34,
        fats: 1,
        items: [
          "1 medium green apple sliced",
          "1 rice cake with a thin spread of almond butter",
          "Pre-workout or double espresso"
        ],
        vegAlternative: "Same.",
        tip: "Low-fat pre-workout allows rapid gastric emptying so blood flows to working muscles, not digestion."
      },
      {
        time: "06:45 PM (Post-Workout)",
        name: "Post-Workout Recovery",
        title: "Pure Protein Synthesis",
        calories: 170,
        protein: 30,
        carbs: 8,
        fats: 2,
        items: [
          "1 scoop Whey Protein Isolate in cold water",
          "5g L-Glutamine or BCAAs + 5g Creatine Monohydrate"
        ],
        vegAlternative: "1 scoop Pea & Rice Protein Isolate.",
        tip: "Isolate provides virtually 0g sugar and 0g fat for direct lean amino delivery."
      },
      {
        time: "08:30 PM",
        name: "Evening Dinner",
        title: "White Fish / Paneer & Roasted Veggies",
        calories: 410,
        protein: 42,
        carbs: 21,
        fats: 18,
        items: [
          "200g Grilled white fish (Tilapia / Cod / Basa) or lean chicken breast",
          "2 cups oven-roasted zucchini, cauliflower florets, and asparagus with sea salt",
          "1/2 cup cooked black beans or green lentils"
        ],
        vegAlternative: "120g low-fat paneer or tempeh grilled with spices + roasted cauliflower & zucchini bowl.",
        tip: "White fish is extremely lean, low in calories, and rich in iodine to support thyroid hormone production."
      }
    ]
  },
  {
    id: "indian-desi",
    title: "High-Protein Indian Gym Diet (Desi Diet)",
    tagline: "Real, affordable Indian home-cooked foods packed with protein to build muscle on a practical budget.",
    target: "Indian Fitness / Desi Gym",
    calories: 2480,
    macros: {
      protein: 165, // grams
      carbs: 275,   // grams
      fats: 76,     // grams
      proteinPct: 27,
      carbsPct: 45,
      fatsPct: 28
    },
    badge: "Desi Power",
    badgeColor: "amber",
    overview: "Crafted specifically for Indian lifestyles and budgets. Leverages high-yield protein staples like eggs, chicken, paneer, soya chunks, sattu, yellow moong dal, roasted chana, and curd, without needing exotic or expensive imported ingredients.",
    highlights: [
      "100% familiar Indian pantry ingredients (Paneer, Soya, Chana, Dal, Eggs, Dahi)",
      "High natural protein (165g+) without relying solely on multiple supplements",
      "Cost-effective: High nutrient density per rupee spent",
      "Includes Desi superfoods: Turmeric, Sattu, Ghee in controlled portions"
    ],
    meals: [
      {
        time: "07:00 AM",
        name: "Subah ki Shuruat",
        title: "Ayurvedic Gut Starter & Dry Fruits",
        calories: 110,
        protein: 4,
        carbs: 8,
        fats: 7,
        items: [
          "1 glass warm water with half lemon + 1/2 tsp jeera (cumin) water",
          "6 soaked almonds (badaam) + 2 soaked walnuts (akhrot)",
          "1 boiled egg (or 2 figs/anjeer)"
        ],
        tip: "Soaking nuts removes phytates and enzyme inhibitors for better mineral absorption."
      },
      {
        time: "08:30 AM",
        name: "Desi Power Nashta (Breakfast)",
        title: "High-Protein Cheela / Egg Bhurji",
        calories: 520,
        protein: 36,
        carbs: 55,
        fats: 16,
        items: [
          "Option A (Non-Veg): 4 Whole eggs Bhurji with onions, green chillies & tomatoes + 2 whole wheat rotis / brown bread",
          "Option B (Veg): 2 Moong Dal / Besan Cheela stuffed with 80g grated paneer & coriander",
          "1 cup low-fat curd (dahi) with pinch of black salt & roasted jeera"
        ],
        tip: "Besan and moong dal cheela stuffed with paneer is the ultimate vegetarian protein powerhouse."
      },
      {
        time: "11:30 AM",
        name: "Mid-Morning Refresh",
        title: "Desi Protein Drink (Sattu Sharbat)",
        calories: 220,
        protein: 14,
        carbs: 32,
        fats: 3,
        items: [
          "1 tall glass Chana Sattu drink (35g roasted chana flour stirred in chilled water with lemon, mint & black salt)",
          "1 seasonal fruit (guava, orange, or papaya bowl)"
        ],
        tip: "Sattu is known as India's natural protein shake, cooling the body while providing sustained energy."
      },
      {
        time: "01:30 PM",
        name: "Bhari Dopahar ka Khana (Lunch)",
        title: "Desi Fitness Thali",
        calories: 680,
        protein: 45,
        carbs: 82,
        fats: 19,
        items: [
          "Option A: 150g Tari Chicken Curry or Chicken Tikka (cooked with minimal oil)",
          "Option B (Veg): 60g Soya Chunks curry (soya gives 31g pure protein!) or 120g Paneer curry",
          "1 large katori thick yellow Arhar / Moong Dal",
          "2 Phulkas (multigrain rotis without ghee) OR 1 cup steamed rice",
          "Huge plate cucumber, tomato, onion & carrot salad with green chutney"
        ],
        tip: "Soya chunks contain over 52g of protein per 100g dry weight—the most affordable protein on earth."
      },
      {
        time: "05:00 PM (Pre-Workout)",
        name: "Shaam ka Naashta (Pre-Gym)",
        title: "Energy & Pump Booster",
        calories: 290,
        protein: 10,
        carbs: 48,
        fats: 6,
        items: [
          "2 slices brown bread with 1 tbsp peanut butter + 1 sliced banana",
          "OR 1 katori boiled sweet potato (shakarkandi) sprinkled with chaat masala",
          "1 cup Desi strong black coffee with no sugar"
        ],
        tip: "Sweet potato provides steady complex carbs that won't cause mid-workout insulin crashes."
      },
      {
        time: "07:15 PM (Post-Workout)",
        name: "Post-Gym Recovery",
        title: "Muscle Repair Shake & Chana",
        calories: 260,
        protein: 30,
        carbs: 26,
        fats: 3,
        items: [
          "1 scoop Whey Protein in water (OR 4 boiled egg whites + 1 handful roasted bhuna chana)",
          "1 banana for glycogen refill"
        ],
        tip: "Roasted chana with jaggery or boiled egg whites is a classic budget desi post-workout option."
      },
      {
        time: "09:00 PM",
        name: "Raat ka Khana (Dinner)",
        title: "Light & High-Protein Night Meal",
        calories: 400,
        protein: 26,
        carbs: 42,
        fats: 12,
        items: [
          "1 katori Rajma (kidney beans) / Chole / Paneer Bhurji (80g paneer)",
          "1 whole wheat Phulka + 1 katori palak or mixed vegetable sabzi",
          "1 small bowl green salad"
        ],
        tip: "Eating dinner 2 hours before bed enhances growth hormone secretion during deep sleep."
      }
    ]
  },
  {
    id: "vegetarian",
    title: "100% Vegetarian High-Protein Plan",
    tagline: "Completely plant & dairy powered muscle synthesis without meat or eggs.",
    target: "Pure Vegetarian Fitness",
    calories: 2350,
    macros: {
      protein: 160, // grams
      carbs: 265,   // grams
      fats: 68,     // grams
      proteinPct: 28,
      carbsPct: 45,
      fatsPct: 27
    },
    badge: "100% Veg",
    badgeColor: "green",
    overview: "Proving beyond a shadow of doubt that you can build world-class muscle on a 100% vegetarian diet. By combining complementary plant proteins (lentils, chickpeas, tofu, soya chunks, hemp seeds, oats) with high-quality dairy (paneer, Greek curd, whey), all essential amino acids (EAAs & BCAAs) are abundantly supplied.",
    highlights: [
      "Zero meat, zero fish, zero eggs",
      "Combines complete plant amino profiles to maximize Leucine threshold (3g/meal)",
      "High natural micronutrients: Magnesium, Potassium, Folate, and Fiber",
      "Delicious gourmet vegetarian meal combinations"
    ],
    meals: [
      {
        time: "07:00 AM",
        name: "Morning Wake-Up",
        title: "Herbal Detox & Super-Seeds",
        calories: 120,
        protein: 5,
        carbs: 7,
        fats: 9,
        items: [
          "500ml warm lemon-ginger water",
          "1 tbsp soaked chia seeds + 10 soaked pumpkin seeds",
          "5 soaked almonds"
        ],
        tip: "Chia seeds swell in water to form a soluble fiber gel that stabilizes morning blood sugar."
      },
      {
        time: "08:30 AM",
        name: "Powerhouse Breakfast",
        title: "Oatmeal Muscle Bowl & Tofu/Paneer",
        calories: 550,
        protein: 38,
        carbs: 68,
        fats: 14,
        items: [
          "1 cup rolled oats cooked in low-fat milk or soy milk",
          "1 scoop Plant/Whey protein powder stirred into oats",
          "1 tbsp peanut butter + handful of blueberries & chia seeds",
          "Side: 50g pan-seared tofu strips with black pepper"
        ],
        tip: "Stirring protein powder into warm oatmeal creates 'Proats'—creamy and packed with 35g+ protein."
      },
      {
        time: "11:30 AM",
        name: "Mid-Morning Fuel",
        title: "Sprouted Moong & Paneer Chaat",
        calories: 260,
        protein: 18,
        carbs: 28,
        fats: 8,
        items: [
          "1 cup sprouted green moong beans steamed lightly",
          "50g diced fresh paneer",
          "Chopped onions, tomatoes, green chilies, coriander & lemon juice"
        ],
        tip: "Sprouting increases the protein content and bio-availability of B-vitamins in legumes by 20%."
      },
      {
        time: "01:30 PM",
        name: "High-Protein Lunch",
        title: "Soya & Quinoa Macro Feast",
        calories: 640,
        protein: 48,
        carbs: 76,
        fats: 15,
        items: [
          "60g Soya chunks cooked in tomato-onion-garlic masala curry (31g protein)",
          "1 cup cooked quinoa or brown rice",
          "1 cup thick yellow dal or chickpea salad (chana chaat)",
          "1 cup plain low-fat Greek yogurt / hung curd with cucumber"
        ],
        tip: "Quinoa is one of the rare plant foods that contains all nine essential amino acids."
      },
      {
        time: "04:45 PM (Pre-Workout)",
        name: "Pre-Workout Ignition",
        title: "Clean Carb Fuel",
        calories: 240,
        protein: 7,
        carbs: 45,
        fats: 4,
        items: [
          "2 whole wheat toast slices with 1 tbsp almond butter",
          "1 medium banana",
          "1 cup black coffee or green tea"
        ],
        tip: "Simple, easy-to-digest carbs eaten 45-60 min before lifting provide explosive ATP output."
      },
      {
        time: "07:00 PM (Post-Workout)",
        name: "Post-Workout Recovery",
        title: "Rapid Amino Synthesis",
        calories: 210,
        protein: 28,
        carbs: 20,
        fats: 2,
        items: [
          "1 scoop Whey or Plant Protein Isolate in cold water",
          "5g Creatine Monohydrate",
          "1 sweet orange or 3 Medjool dates"
        ],
        tip: "Plant-based lifters benefit even more from creatine supplementation since meat-free diets have lower baseline stores."
      },
      {
        time: "08:45 PM",
        name: "Dinner",
        title: "Grilled Paneer & Stir-Fry Greens",
        calories: 430,
        protein: 32,
        carbs: 35,
        fats: 18,
        items: [
          "120g Grilled Paneer or Tempeh seasoned with oregano and paprika",
          "2 cups stir-fried bell peppers, broccoli, zucchini, and mushrooms",
          "1 multigrain roti or 1/2 cup brown rice"
        ],
        tip: "Paneer contains slow-digesting casein protein that continuously feeds muscles with amino acids during sleep."
      }
    ]
  },
  {
    id: "maintenance",
    title: "Performance & Athletic Maintenance",
    tagline: "Balanced macro profile engineered to maintain peak athletic performance, energy, and optimal hormonal balance.",
    target: "Athletic Recomposition / Maintenance",
    calories: 2450,
    macros: {
      protein: 170, // grams
      carbs: 260,   // grams
      fats: 78,     // grams
      proteinPct: 29,
      carbsPct: 43,
      fatsPct: 28
    },
    badge: "Peak Performance",
    badgeColor: "sky",
    overview: "Ideal for lifters who have reached their desired weight and want to achieve body recomposition—simultaneously dropping subtle body fat while hardening muscular density. Balances all macro groups equally to sustain high energy, robust libido, and fast recovery.",
    highlights: [
      "Zero hunger or food restriction",
      "High endurance capacity for both lifting and cardiovascular stamina",
      "Balanced 40/30/30 or 45/30/25 macro split",
      "Sustainable year-round lifestyle plan"
    ],
    meals: [
      {
        time: "07:00 AM",
        name: "Morning Awakening",
        title: "Lemon Hydration & Nuts",
        calories: 90,
        protein: 3,
        carbs: 4,
        fats: 7,
        items: [
          "500ml water with fresh lemon & pink salt",
          "Handful of mixed raw nuts (almonds, cashews, walnuts)"
        ],
        tip: "Healthy fats in the morning support cognitive neurotransmitters and satiety."
      },
      {
        time: "08:15 AM",
        name: "Balanced Breakfast",
        title: "Eggs, Sourdough & Avocado",
        calories: 520,
        protein: 34,
        carbs: 48,
        fats: 20,
        items: [
          "3 whole eggs poached or sunny-side up",
          "2 slices artisanal sourdough bread with mashed avocado",
          "Side of grilled cherry tomatoes and mushrooms",
          "1 cup black or green tea"
        ],
        vegAlternative: "120g grilled halloumi or paneer with sourdough and avocado.",
        tip: "Sourdough fermentation breaks down gluten, making it gentler on the digestive tract."
      },
      {
        time: "11:30 AM",
        name: "Mid-Morning Refuel",
        title: "Greek Yogurt & Seeds",
        calories: 240,
        protein: 20,
        carbs: 24,
        fats: 7,
        items: [
          "175g Greek yogurt",
          "1/2 cup fresh raspberries or kiwi slices",
          "1 tbsp pumpkin seeds & drizzle of raw honey"
        ],
        tip: "Pumpkin seeds are rich in zinc and magnesium—vital for natural testosterone synthesis."
      },
      {
        time: "01:30 PM",
        name: "Athletic Lunch",
        title: "Turkey / Chicken & Sweet Potato Bowl",
        calories: 620,
        protein: 48,
        carbs: 65,
        fats: 16,
        items: [
          "170g Grilled turkey breast or lean chicken breast",
          "1 large roasted sweet potato wedges",
          "Steamed green asparagus and baby carrots with sea salt & pepper",
          "1 tbsp extra virgin olive oil drizzle"
        ],
        vegAlternative: "Chickpea & paneer bowl with sweet potato and roasted vegetables.",
        tip: "Sweet potatoes provide beta-carotene and potassium to prevent mid-day muscular fatigue."
      },
      {
        time: "05:00 PM (Pre-Workout)",
        name: "Energy Surge",
        title: "Pre-Training Snack",
        calories: 220,
        protein: 8,
        carbs: 38,
        fats: 4,
        items: [
          "1 banana with 1 tbsp natural peanut butter",
          "1 shot espresso or pre-workout drink"
        ],
        tip: "Caffeine 45 minutes prior increases pain tolerance and enhances motor unit recruitment."
      },
      {
        time: "07:00 PM (Post-Workout)",
        name: "Recovery Fuel",
        title: "Anabolic Shake",
        calories: 260,
        protein: 30,
        carbs: 28,
        fats: 2,
        items: [
          "1 scoop Whey Isolate or Plant Blend",
          "300ml coconut water (natural potassium electrolytes)",
          "5g Creatine Monohydrate"
        ],
        tip: "Coconut water replaces lost sodium, potassium, and magnesium rapidly after intense sweating."
      },
      {
        time: "08:45 PM",
        name: "Dinner",
        title: "Grilled Salmon or Paneer & Quinoa",
        calories: 500,
        protein: 38,
        carbs: 45,
        fats: 18,
        items: [
          "160g Pan-seared wild salmon or 140g paneer tikka",
          "3/4 cup cooked quinoa or brown basmati rice",
          "Large bowl of steamed kale, bell peppers, and zucchini with lemon herb dressing"
        ],
        tip: "Omega-3 fatty acids lower systemic inflammation and support rapid sleep recovery."
      }
    ]
  }
];

// Master Grocery List for Athletes & Lifters
const GROCERY_CATEGORIES = [
  {
    category: "High-Quality Proteins",
    icon: "drumstick-bite",
    items: [
      { name: "Boneless Skinless Chicken Breast", note: "31g protein / 100g", isVeg: false },
      { name: "Whole Eggs & Egg Whites", note: "6g protein per egg / 3.6g per white", isVeg: false },
      { name: "Fresh Low-Fat Paneer / Cottage Cheese", note: "18-20g protein / 100g", isVeg: true },
      { name: "Defatted Soya Chunks", note: "52g protein / 100g (Highest value)", isVeg: true },
      { name: "Greek Yogurt (0% or low fat)", note: "10-15g protein / 100g", isVeg: true },
      { name: "Salmon / Tilapia / White Fish", note: "22-25g protein / 100g + Omega-3", isVeg: false },
      { name: "Firm Tofu / Tempeh", note: "15-19g protein / 100g", isVeg: true },
      { name: "Whey Protein Isolate or Plant Protein", note: "24-27g protein per scoop", isVeg: true }
    ]
  },
  {
    category: "Complex Carbohydrates",
    icon: "wheat-awn",
    items: [
      { name: "Whole Rolled Oats", note: "Beta-glucan fiber & steady energy", isVeg: true },
      { name: "Sweet Potatoes (Shakarkandi)", note: "Potassium, Vitamin A, clean fuel", isVeg: true },
      { name: "Brown Basmati Rice / White Rice", note: "Clean, non-allergenic training fuel", isVeg: true },
      { name: "Quinoa", note: "Complete plant protein + complex carbs", isVeg: true },
      { name: "Yellow Moong Dal / Masoor Dal / Chana", note: "Carb + protein synergy", isVeg: true },
      { name: "100% Whole Wheat or Sourdough Bread", note: "Clean pre-workout carbs", isVeg: true },
      { name: "Roasted Chana Sattu", note: "Natural Indian energy & protein powder", isVeg: true }
    ]
  },
  {
    category: "Healthy Fats & Seeds",
    icon: "seedling",
    items: [
      { name: "Natural Peanut Butter / Almond Butter", note: "Healthy fats & vitamin E (no added sugar)", isVeg: true },
      { name: "Raw California Almonds & Walnuts", note: "Brain & hormone health", isVeg: true },
      { name: "Chia Seeds & Ground Flaxseeds", note: "Plant-based ALA Omega-3s & fiber", isVeg: true },
      { name: "Extra Virgin Olive Oil", note: "Polyphenols & monounsaturated fats", isVeg: true },
      { name: "Pure Desi Cow Ghee", note: "Butyric acid for gut lining (use 1 tsp/day)", isVeg: true },
      { name: "Hass Avocados", note: "Heart-healthy fats & potassium", isVeg: true }
    ]
  },
  {
    category: "Fruits, Veggies & Micronutrients",
    icon: "apple-whole",
    items: [
      { name: "Baby Spinach & Kale", note: "Iron, nitrates for blood flow", isVeg: true },
      { name: "Broccoli & Cauliflower", note: "Indole-3-carbinol for estrogen detox", isVeg: true },
      { name: "Fresh Bananas", note: "Quick potassium & pre/post gym fuel", isVeg: true },
      { name: "Mixed Berries (Blueberries/Strawberries)", note: "Lowest glycemic, highest antioxidants", isVeg: true },
      { name: "Cucumbers, Tomatoes, Lemons", note: "Hydration, vitamin C & digestive zest", isVeg: true },
      { name: "Fresh Ginger & Raw Garlic", note: "Natural anti-inflammatory & immunity", isVeg: true }
    ]
  }
];

// Essential Supplement Protocols
const SUPPLEMENT_GUIDE = [
  {
    name: "Creatine Monohydrate",
    dosage: "3 - 5 grams daily",
    timing: "Post-workout or anytime with carbs",
    purpose: "Increases intracellular phosphocreatine stores, directly boosting power output by 10-15%, muscle cell volumization, and ATP replenishment.",
    badge: "Must Have",
    badgeColor: "emerald"
  },
  {
    name: "Whey Protein Isolate",
    dosage: "1 - 2 scoops (25-50g protein)",
    timing: "Immediately post-workout or between meals",
    purpose: "Fast-absorbing protein rich in Branched-Chain Amino Acids (especially Leucine) to spike muscle protein synthesis and accelerate recovery.",
    badge: "Convenience & Quality",
    badgeColor: "sky"
  },
  {
    name: "Omega-3 Fish Oil (EPA / DHA)",
    dosage: "1000 - 2000mg combined EPA/DHA daily",
    timing: "With morning or evening meal containing fat",
    purpose: "Reduces systemic muscle soreness, lubricates joint cartilage, improves insulin sensitivity, and optimizes cardiovascular health.",
    badge: "Joint & Heart",
    badgeColor: "amber"
  },
  {
    name: "Vitamin D3 + K2",
    dosage: "2000 - 5000 IU Vitamin D3 + 100mcg K2",
    timing: "With morning breakfast",
    purpose: "Directly modulates testosterone synthesis, immune resilience, bone mineralization, and neuromuscular force generation.",
    badge: "Hormone Optimization",
    badgeColor: "purple"
  },
  {
    name: "Electrolytes & Himalayan Salt",
    dosage: "1/4 tsp pink salt in water + Magnesium glycinate (200-400mg before bed)",
    timing: "Pre-workout hydration and before sleep",
    purpose: "Prevents muscle cramps, ensures powerful neuro-muscular contractions, and enables deep delta-wave sleep recovery.",
    badge: "Recovery & Sleep",
    badgeColor: "indigo"
  }
];

// Master 30 KG Transformation Blueprint & Roadmap
const TRANSFORMATION_30KG_DATA = {
  title: "Fitaasu 30 KG Extreme Weight Loss Blueprint",
  duration: "24 – 32 Weeks (6 – 8 Months)",
  targetLoss: "30 Kilograms (66 lbs)",
  healthyRate: "0.8 – 1.0 kg per week",
  phases: [
    {
      phaseNumber: 1,
      name: "Phase 1: Foundation & Metabolic Awakening",
      timeline: "Weeks 1 – 8 (Months 1 & 2)",
      lossTarget: "Drop First 10 KG (-10 kg)",
      focus: "Reset Insulin Sensitivity, Eliminate Visceral Fat & Protect Joint Integrity",
      dailyCalories: "1,750 kcal",
      dailySteps: "8,000 – 10,000 steps",
      cardio: "Zone 2 Low-Impact Incline Walking (Zero pounding on joints, maximum fat-oxidation)",
      lifting: "4 Days/week structured resistance training (focus on form & motor units)",
      milestone: "Facial puffiness vanishes, waistline drops 3-4 inches, snoring/sleep apnea subsides, energy surges.",
      proTip: "Initial rapid drop includes subcutaneous water weight and glycogen. Keep going without lowering calories further!"
    },
    {
      phaseNumber: 2,
      name: "Phase 2: Deep Metabolic Shred & Skin Tightening",
      timeline: "Weeks 9 – 20 (Months 3 – 5)",
      lossTarget: "Drop Next 12 KG (-22 kg total)",
      focus: "Stubborn Abdominal & Chest Fat, Maintaining High Muscle Volume Under Skin",
      dailyCalories: "1,620 kcal (with 1 weekly refeed meal)",
      dailySteps: "10,000 – 12,000 steps",
      cardio: "Daily walking + 2x weekly 15-min incline treadmill walk (12-3-30 protocol)",
      lifting: "Heavy progressive overload (Chest, Back, Legs) to keep muscle fibers dense and firm",
      milestone: "Drop 4-5 clothing sizes, deep visceral fat eradicated, visible abdominal contours begin to appear.",
      proTip: "If fat loss plateaus for 14 days, perform a 48-hour diet break at maintenance calories to reset leptin and thyroid hormones."
    },
    {
      phaseNumber: 3,
      name: "Phase 3: The Final 8 KG & Permanent Lifestyle Lock",
      timeline: "Weeks 21 – 30 (Months 6 – 8)",
      lossTarget: "Drop Final 8 KG (-30 kg TOTAL!)",
      focus: "Subcutaneous Stubborn Pockets, Core Definition & Reverse Dieting into Long-Term Maintenance",
      dailyCalories: "1,520 kcal cutting -> reversed gradually by +100 kcal/week to 2,200 kcal",
      dailySteps: "10,000 steps daily",
      cardio: "Functional athletic circuits, outdoor sprints, or swimming",
      lifting: "High-density hypertrophy training + deep transverse abdominis stabilization",
      milestone: "Total 30 KG melted away! Chiseled, athletic physique, firm skin, peak cardiovascular stamina, zero rebound.",
      proTip: "Never stop abruptly. Reverse diet back to maintenance calories (+100 kcal each week) to permanently lock in your new body weight."
    }
  ],
  milestones: [
    { kg: 5, badge: "Ignition Phase", reward: "Visceral puffiness drops, sleep quality skyrockets", weeks: "Week 3-4" },
    { kg: 10, badge: "Double Digits", reward: "Visible face gains, old clothes become noticeably baggy", weeks: "Week 8" },
    { kg: 20, badge: "Total Transformation", reward: "Waistline drops 5+ inches, joint pains completely vanish", weeks: "Week 18-20" },
    { kg: 30, badge: "The Fitaasu Legend", reward: "30 KG Gone Forever! High muscle tone, ultimate athletic body", weeks: "Week 28-32" }
  ],
  antiLooseSkinRules: [
    {
      title: "Lift Heavy Resistance (Non-Negotiable)",
      desc: "Cardio burns calories, but resistance training maintains muscle volume under your skin. Muscle acts as the natural filler that prevents loose, saggy skin as fat stores shrink."
    },
    {
      title: "Hyper-Hydration (3.5 – 4 Liters Daily)",
      desc: "Skin elasticity is biochemically regulated by hydration of dermal fibroblast cells. Dehydrated skin loses turgor and sags. Drink 3.5 to 4 liters daily."
    },
    {
      title: "Paced Fat Loss (Max 1 kg / Week)",
      desc: "Losing more than 1.5 kg per week overstretches skin retraction capacity. Giving your skin 6-8 months allows collagen remodeling to catch up with fat loss."
    },
    {
      title: "Collagen, Vitamin C & Healthy Fats",
      desc: "Eat citrus fruits, bell peppers, amla, eggs, and healthy fats. Vitamin C is the essential cofactor for prolyl hydroxylase, the enzyme that weaves new skin collagen fibers."
    }
  ],
  cravingCrushers: [
    { trigger: "Late Night Sweet Tooth", fix: "1 cup Greek yogurt with cinnamon + 1 scoop chocolate protein + frozen berries. Tastes like dessert with 30g protein and only 160 kcal." },
    { trigger: "Evening Salt & Crunch Craving", fix: "Air-popped makhana (fox nuts) or roasted chana sprinkled with chaat masala and black pepper." },
    { trigger: "Boredom Hunger vs Real Hunger", fix: "Drink 500ml chilled water and wait 10 minutes. 80% of hunger signals are mild dehydration." }
  ]
};


