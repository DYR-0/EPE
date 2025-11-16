export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topics: string[]; // recycling, energy, water, biodiversity, sustainable, climate
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Which of the following is a renewable energy source?",
    options: ["Coal", "Oil", "Solar Energy", "Natural Gas"],
    correctAnswer: 2,
    explanation: "Solar energy is a renewable energy source that is inexhaustible. Coal, oil, and natural gas are fossil fuels and non-renewable energy sources.",
    topics: ["energy"],
    difficulty: "beginner"
  },
  {
    id: 2,
    question: "In waste sorting, which category should used batteries be placed in?",
    options: ["Recyclable Waste", "Hazardous Waste", "Food Waste", "Other Waste"],
    correctAnswer: 1,
    explanation: "Used batteries contain heavy metals and other hazardous substances and should be placed in hazardous waste bins for special treatment to avoid environmental pollution.",
    topics: ["recycling"],
    difficulty: "beginner"
  },
  {
    id: 3,
    question: "What is the main greenhouse gas?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: 2,
    explanation: "Carbon dioxide is one of the main greenhouse gases. Human activities (such as burning fossil fuels) release large amounts of carbon dioxide, exacerbating global warming.",
    topics: ["climate"],
    difficulty: "beginner"
  },
  {
    id: 4,
    question: "Which of the following behaviors is most beneficial for water conservation?",
    options: ["Washing cars with a hose", "Letting water run while washing vegetables", "Using laundry water to mop floors", "Turning the faucet to maximum when washing hands"],
    correctAnswer: 2,
    explanation: "Recycling water resources is a good way to conserve water. Using laundry water to mop floors allows water resources to be reused, avoiding waste.",
    topics: ["water"],
    difficulty: "beginner"
  },
  {
    id: 5,
    question: "What date is World Environment Day each year?",
    options: ["March 12", "April 22", "June 5", "September 16"],
    correctAnswer: 2,
    explanation: "June 5 is World Environment Day, established by the United Nations to raise global environmental awareness and promote environmental protection actions.",
    topics: ["sustainable"],
    difficulty: "beginner"
  },
  {
    id: 6,
    question: "Which type of shopping bag is most environmentally friendly?",
    options: ["Disposable plastic bag", "Paper bag", "Reusable cloth bag", "Plastic woven bag"],
    correctAnswer: 2,
    explanation: "Reusable cloth bags are the most environmentally friendly choice, as they can be used multiple times, reducing the consumption of disposable plastic bags and paper bags.",
    topics: ["sustainable", "recycling"],
    difficulty: "beginner"
  },
  {
    id: 7,
    question: "What is the main function of the ozone layer?",
    options: ["Block ultraviolet rays", "Insulation", "Produce oxygen", "Create rainwater"],
    correctAnswer: 0,
    explanation: "The ozone layer can absorb ultraviolet rays from the sun, protecting life on Earth from harmful UV radiation.",
    topics: ["climate"],
    difficulty: "beginner"
  },
  {
    id: 8,
    question: "Which mode of transportation has the lowest carbon emissions?",
    options: ["Private car", "Bus", "Bicycle", "Motorcycle"],
    correctAnswer: 2,
    explanation: "Bicycles do not require fuel and are completely zero-emission, making them the most environmentally friendly mode of transportation. They also provide exercise benefits.",
    topics: ["energy", "climate"],
    difficulty: "beginner"
  },
  {
    id: 9,
    question: "Forests are called 'the lungs of the Earth' mainly because forests can?",
    options: ["Provide timber", "Absorb carbon dioxide and release oxygen", "Prevent soil erosion", "Regulate climate"],
    correctAnswer: 1,
    explanation: "Forests absorb large amounts of carbon dioxide and release oxygen through photosynthesis, similar to how human lungs exchange gases, hence they are called 'the lungs of the Earth'.",
    topics: ["biodiversity", "climate"],
    difficulty: "beginner"
  },
  {
    id: 10,
    question: "Which of the following practices helps reduce plastic pollution?",
    options: ["Using disposable utensils", "Buying excessively packaged goods", "Bringing your own cup and utensils", "Randomly discarding plastic products"],
    correctAnswer: 2,
    explanation: "Bringing your own cup and utensils can reduce the use of disposable plastic products, reducing plastic pollution at the source and is an environmentally friendly habit.",
    topics: ["sustainable", "recycling"],
    difficulty: "beginner"
  },
  {
    id: 11,
    question: "What percentage of Earth's water is fresh water available for human use?",
    options: ["Less than 1%", "About 3%", "About 10%", "About 25%"],
    correctAnswer: 0,
    explanation: "Only about 0.5-1% of Earth's water is accessible fresh water. Most fresh water is locked in glaciers and ice caps, making water conservation crucial.",
    topics: ["water"],
    difficulty: "intermediate"
  },
  {
    id: 12,
    question: "Which of the following materials takes the longest to decompose in nature?",
    options: ["Paper", "Plastic bottles", "Food waste", "Wood"],
    correctAnswer: 1,
    explanation: "Plastic bottles can take 450-1000 years to decompose naturally, while paper takes 2-6 months, food waste takes 1-6 months, and wood takes 1-3 years.",
    topics: ["recycling"],
    difficulty: "intermediate"
  },
  {
    id: 13,
    question: "What is the primary cause of coral reef bleaching?",
    options: ["Ocean pollution", "Rising ocean temperatures", "Overfishing", "Sound pollution"],
    correctAnswer: 1,
    explanation: "Rising ocean temperatures due to climate change cause coral to expel the algae living in their tissues, leading to coral bleaching and potential death.",
    topics: ["climate", "biodiversity", "water"],
    difficulty: "intermediate"
  },
  {
    id: 14,
    question: "Which appliance typically consumes the most electricity in a household?",
    options: ["Television", "Refrigerator", "Microwave", "LED light bulbs"],
    correctAnswer: 1,
    explanation: "Refrigerators run 24/7 and typically consume the most electricity in a household, accounting for 10-15% of home energy use.",
    topics: ["energy"],
    difficulty: "intermediate"
  },
  {
    id: 15,
    question: "What does the term 'carbon footprint' refer to?",
    options: ["The size of footprints left on carbon surfaces", "Total greenhouse gas emissions caused by an individual or organization", "Carbon content in soil", "Black marks left by burning coal"],
    correctAnswer: 1,
    explanation: "Carbon footprint measures the total greenhouse gas emissions, expressed in CO2 equivalents, produced by human activities, products, or organizations.",
    topics: ["climate", "sustainable"],
    difficulty: "intermediate"
  },
  {
    id: 16,
    question: "Which of the following is NOT a consequence of deforestation?",
    options: ["Loss of biodiversity", "Increased soil erosion", "Reduced carbon dioxide in atmosphere", "Disrupted water cycles"],
    correctAnswer: 2,
    explanation: "Deforestation actually increases carbon dioxide in the atmosphere, as trees that absorb CO2 are removed. It does cause biodiversity loss, soil erosion, and disrupted water cycles.",
    topics: ["biodiversity", "climate"],
    difficulty: "intermediate"
  },
  {
    id: 17,
    question: "What is composting?",
    options: ["Burning organic waste", "Recycling plastic materials", "Natural decomposition of organic waste into nutrient-rich soil", "Storing food waste in landfills"],
    correctAnswer: 2,
    explanation: "Composting is the natural process of decomposing organic materials like food scraps and yard waste into nutrient-rich soil amendment, reducing landfill waste.",
    topics: ["recycling", "sustainable"],
    difficulty: "intermediate"
  },
  {
    id: 18,
    question: "Which gas is primarily responsible for the depletion of the ozone layer?",
    options: ["Carbon dioxide", "Methane", "Chlorofluorocarbons (CFCs)", "Nitrogen"],
    correctAnswer: 2,
    explanation: "CFCs, once commonly used in refrigerators and aerosol sprays, break down ozone molecules in the stratosphere, creating the 'ozone hole'.",
    topics: ["climate"],
    difficulty: "intermediate"
  },
  {
    id: 19,
    question: "What is the most effective way to reduce your carbon footprint when it comes to food?",
    options: ["Eating more processed foods", "Eating locally-sourced, seasonal foods", "Eating only imported exotic fruits", "Using disposable plates and utensils"],
    correctAnswer: 1,
    explanation: "Locally-sourced, seasonal foods require less transportation and storage, significantly reducing carbon emissions. Plant-based diets also have lower carbon footprints.",
    topics: ["sustainable", "climate"],
    difficulty: "intermediate"
  },
  {
    id: 20,
    question: "Which of the following is a benefit of urban green spaces?",
    options: ["Increased air pollution", "Higher urban temperatures", "Improved air quality and biodiversity", "More noise pollution"],
    correctAnswer: 2,
    explanation: "Urban green spaces like parks and gardens improve air quality, support biodiversity, reduce heat island effects, and provide mental health benefits.",
    topics: ["biodiversity", "sustainable"],
    difficulty: "intermediate"
  },
  {
    id: 21,
    question: "What does 'sustainable development' mean?",
    options: ["Using all natural resources as quickly as possible", "Development that meets present needs without compromising future generations", "Only developing urban areas", "Focusing solely on economic growth"],
    correctAnswer: 1,
    explanation: "Sustainable development balances economic, social, and environmental needs to ensure that future generations can meet their own needs.",
    topics: ["sustainable"],
    difficulty: "intermediate"
  },
  {
    id: 22,
    question: "Which ocean contains the Great Pacific Garbage Patch?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: 2,
    explanation: "The Great Pacific Garbage Patch is a massive collection of marine debris in the North Pacific Ocean, primarily consisting of plastic waste.",
    topics: ["recycling", "water"],
    difficulty: "intermediate"
  },
  {
    id: 23,
    question: "What is the primary benefit of LED light bulbs compared to incandescent bulbs?",
    options: ["They produce more heat", "They use significantly less energy and last longer", "They are cheaper to manufacture", "They produce dimmer light"],
    correctAnswer: 1,
    explanation: "LED bulbs use about 75% less energy than incandescent bulbs and last up to 25 times longer, making them much more environmentally friendly and cost-effective.",
    topics: ["energy"],
    difficulty: "intermediate"
  },
  {
    id: 24,
    question: "Which of the following animals is considered a keystone species?",
    options: ["House cat", "Sea otter", "Pigeon", "Rat"],
    correctAnswer: 1,
    explanation: "Sea otters are keystone species that help maintain kelp forest ecosystems by controlling sea urchin populations. Their presence has disproportionate effects on their environment.",
    topics: ["biodiversity"],
    difficulty: "advanced"
  },
  {
    id: 25,
    question: "What is acid rain primarily caused by?",
    options: ["Excessive rainfall", "Sulfur dioxide and nitrogen oxides in the atmosphere", "Ocean acidification", "Natural volcanic activity only"],
    correctAnswer: 1,
    explanation: "Acid rain is caused by sulfur dioxide and nitrogen oxides from burning fossil fuels, which combine with water in the atmosphere to form acidic compounds.",
    topics: ["climate", "water"],
    difficulty: "advanced"
  },
  {
    id: 26,
    question: "Which of the following is the most water-efficient way to water plants?",
    options: ["Sprinkler system during midday", "Drip irrigation in early morning", "Garden hose during afternoon", "Overhead watering at noon"],
    correctAnswer: 1,
    explanation: "Drip irrigation in early morning is most efficient as it delivers water directly to roots with minimal evaporation, and morning watering prevents fungal growth.",
    topics: ["water", "sustainable"],
    difficulty: "advanced"
  },
  {
    id: 27,
    question: "What is biodiversity?",
    options: ["The study of living organisms", "The variety of life in a particular habitat or ecosystem", "The number of trees in a forest", "The amount of oxygen in the air"],
    correctAnswer: 1,
    explanation: "Biodiversity refers to the variety of all living things - including plants, animals, and microorganisms - in an ecosystem, contributing to its health and resilience.",
    topics: ["biodiversity"],
    difficulty: "intermediate"
  },
  {
    id: 28,
    question: "Which of the following actions best represents the '3 Rs' of waste management?",
    options: ["Recycle, Remove, Refuse", "Reduce, Reuse, Recycle", "Replace, Restore, Recycle", "Remove, Restore, Replace"],
    correctAnswer: 1,
    explanation: "The 3 Rs - Reduce consumption, Reuse items, and Recycle materials - form the foundation of sustainable waste management practices.",
    topics: ["recycling", "sustainable"],
    difficulty: "beginner"
  },
  {
    id: 29,
    question: "What is the main environmental concern with fast fashion?",
    options: ["It's too expensive", "High resource consumption and waste generation", "Clothes are too colorful", "Stores are too crowded"],
    correctAnswer: 1,
    explanation: "Fast fashion contributes to massive water consumption, chemical pollution, textile waste, and carbon emissions, making it one of the most polluting industries.",
    topics: ["sustainable", "water"],
    difficulty: "advanced"
  },
  {
    id: 30,
    question: "Which renewable energy source is most dependent on geographic location?",
    options: ["Solar energy", "Wind energy", "Geothermal energy", "Biomass energy"],
    correctAnswer: 2,
    explanation: "Geothermal energy requires specific geological conditions with accessible underground heat sources, making it highly dependent on location, unlike solar or wind which are more widely available.",
    topics: ["energy"],
    difficulty: "advanced"
  }
];
