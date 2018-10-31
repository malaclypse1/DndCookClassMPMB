/*	Cook class script v0.2 for MPMB character sheet
	MPMB Copyright (C) 2014 Joost Wijnen; Flapkan Productions
	Cook class v1.7 by Sam Grierson
	This script by Troy Routley
	
	Change List:
	updated for cook class v1.7
*/

var iFileName = "Cook.js";
RequiredSheetVersion(12.999);

ClassList["cook"] = {
	regExpSearch : /cook/i,
	name : "Cook",
	source : ["HB", 0],
	primaryAbility : "\n \u2022 Cook: Constitution;",
	prereqs : "\n \u2022 Cook: Constitution 13;",
	die : 8,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Con", "Cha"],
	skills : ["\n\n" + toUni("Cook") + ": Choose three from Animal Handling, Arcana, Athletics, Medicine, Nature, Performance, Persuasion, Sleight of Hand, and Survival.", "\n\n" + toUni("Cook") + ": Choose one from Animal Handling, Arcana, Athletics, Medicine, Nature, Performance, Persuasion, Sleight of Hand, and Survival."],
	toolProfs: {
		primary : [["Cook's utensils"]],
		secondary : [["Cook's utensils"]]
	},
	armor : [[true, true, false, false], [true, true, false, false]],
	weapons : [[true, false, ["hand crossbow", "longsword", "rapier", "shortsword"]], [true, false]],
	equipment : "Cook starting equipment:\n \u2022 (a) a longsword or (b) a hand crossbow and 20 bolts;\n \u2022 (a) leather armor or (b) scale mail;\n \u2022 (a) two daggers or (b) two light hammers;\n \u2022 (a) an explorer's pack or (b) a scholar's pack;\n \u2022 Cook's utensils and a Cook's bag.\n\nAlternately, you can start with 4d4 \xD7 10 gold pieces instead of both the class' and the background's starting equipment.",
	subclasses : ["Cook Archetype", ["cook-sous chef", "cook-mess sergeant", "cook-hash slinger", "cook-brewmeister", "cook-monster masher"]],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	abilitySave : 3,
	features : {
		"cooks bag" : {
			name : "Cook's Bag",
			source : ["HB", 0],
			minlevel : 1,
			description : "\n   " + "Magically preserves not only your morsels, but also the ingredients required to make them. Replenish these ingredients at least once every 30 days by buying 10 gp worth of food from a market, or spending 8 hours scavenging food from your surroundings. If you lose this bag, you can create a new one by expending 100 gp worth of leather, gems, and other raw materials. Doing so takes 8 hours of work."
		},
		"morsels" : {
			name : "Morsels",
			source : ["HB", 0],
			minlevel : 1,
			description : "\n   " + "Choose morsels using the \"Choose Feature\" button above.\n   Morsels are stored in Cook's Bag and expire if taken out for longer than 6 seconds, or the next time you cook morsels.",
			action : ["action", " - range touch"],
			usages : "Constitution modifier per ",
			usagescalc : "event.value = Math.max(1, What('Con Mod'));",
			recovery : "short rest",
			additional : ["3 known", "3 known", "4 known", "5 known", "6 known", "7 known", "8 known", "9 known", "10 known", "11 known", "12 known", "12 known", "13 known", "13 known", "14 known", "14 known", "14 known", "15 known", "15 known", "15 known"],
			extraname : "Morsel",
			extrachoices : ["Almond Milk", "Carrot Casserole", "Cow Innards", "Flavored Ice", "Hardened Bread", "Herbal Grey Tea", "Invigorating Juices", "Packed Protein", "Smoky Chops", "Spicy Pepper", "Sugar Crystals", "Braised Rabbit (prereq: lvl 7 cook)", "Buttered Trout (prereq: lvl 7 cook)", "Roast Pheasant (prereq: lvl 7 cook)", "Spider Eggs (prereq: lvl 7 cook)", "Thickening Gruel (prereq: lvl 7 cook)", "Chamomile Tea (prereq: lvl 11 cook)", "Shreevy Leaves (prereq: lvl 11 cook)", "Spectral Sprouts (prereq: lvl 11 cook)", "Startouched Seeds (prereq: lvl 11 cook)", "Sweet and Sour Beets (prereq: lvl 11 cook)", "Boiled Dragon's Tail (prereq: lvl 15 cook)", "Hydra Tongue (prereq: lvl 15 cook)", "Elemental Pie (prereq: lvl 15 cook)", "Frosted Grapes (prereq: sous chef)", "Strong Ale (prereq: lvl 7 sous chef)", "Honeyed Fish (prereq: lvl 13 sous chef)", "Pine Nut Mash (prereq: lvl 17 sous chef)", "Stinking Sprouts (prereq: mess sergeant)", "Bloating Beans (prereq: lvl 7 mess sergeant)", "Jittering Coffee (prereq: lvl 13 mess sergeant)", "Fatty Oats (prereq: lvl 17 mess sergeant)", "Greasy Slosh (prereq: hash slinger)", "Fire Salts (prereq: lvl 7 hash slinger)", "Garlic Tuna (prereq: lvl 13 hash slinger)", "Rancid Onion (prereq: lvl 17 hash slinger)", "Underdark Draught (prereq: brewmeister)", "Vodka Slushie (prereq: lvl 7 brewmeister)", "Hellfire Whiskey (prereq: lvl 13 brewmeister)", "Angel's Kiss (prereq: lvl 17 brewmeister)"],
			"almond milk" : {
				name : "Almond Milk",
				source : ["HB", 0], 
				description : "\n   " + "Target must make Con save. On fail they fall unconscious in 1 minute and remain unconscious for 10 minutes. They wake early if they take any damage or if a creature spends an action to shake or slap them awake. Creatures that do not need to sleep are unaffected."
			}, 
			"carrot casserole" : {
				name : "Carrot Casserole",
				source : ["HB", 0], 
				description : "\n   " + "Target gains 60' darkvision for 8 hours. If target already has darkvision, increase its range by 60'."
			}, 
			"cow innards" : {
				name : "Cow Innards",
				source : ["HB", 0], 
				description : "\n   " + "Target must make Con save. On fail target has disadvantage on all Cha checks and creatures cannot be charmed by the target for 10 minutes. If any creatures were charmed by the target when the morsel is ingested, they are no longer charmed."
			}, 
			"flavored ice" : {
				name : "Flavored Ice",
				source : ["HB", 0], 
				description : "\n   " + "Target must make Int save. On fail, it takes 1d6 cold damage and if the target is concentrating on a spell, double the DC for the Con saving throw to maintain concentration as a result of this damage. On a successful save, it takes half as much damage but the DC is still doubled.\n   The morsel's damage is increased at lvl 4 (2d6), lvl 7 (3d6), lvl 9 (4d6), lvl 13 (5d6), lvl 17 (6d6), and lvl 20 (7d6)."
			}, 
			"hardened bread" : {
				name : "Hardened Bread",
				source : ["HB", 0], 
				description : "\n   " + "Target must make Str save. On fail, it takes 1d6 bludgeoning damage and has disadvantage on attack rolls until the end of its next turn. On a successful save, it takes half as much damage and doesn't have disadvantage.\n   The morsel's damage is increased at lvl 4 (2d6), lvl 7 (3d6), lvl 9 (4d6), lvl 13 (5d6), lvl 17 (6d6), and lvl 20 (7d6)."				
			}, 
			"herbal grey tea" : {
				name : "Herbal Grey Tea",
				source : ["HB", 0], 
				description : "\n   " + "Target adds 1d4 to all Con saving throws, Int and Wis ability checks for 1 hour."				
			}, 
			"invigorating juices" : {
				name : "Invigorating Juices",
				source : ["HB", 0], 
				description : "\n   " + "Target gains 1d8 temporary hit points.\n   The number of temporary hit points gained is increased at lvl 4 (2d8), lvl 7 (3d8), lvl 9 (4d8), lvl 13 (5d8), lvl 17 (6d8), and lvl 20 (7d8)."				
			}, 
			"packed protein" : {
				name : "Packed Protein",
				source : ["HB", 0], 
				description : "\n   " + "Target adds 1d4 to all damage rolls and ability checks using Str for 1 minute. The die size increases to 1d6 at cook level 10, 1d8 at 15, and 1d10 at 20."				
			}, 
			"smoky chops" : {
				name : "Smoky Chops",
				source : ["HB", 0], 
				description : "\n   " + "Target gains resistance to cold damage and immunity to the poisoned condition for 10 minutes."				
			}, 
			"spicy pepper" : {
				name : "Spicy Pepper",
				source : ["HB", 0], 
				description : "\n   " + "Target gains resistance to fire damage and immunity to the grappled condition for 10 minutes."				
			}, 
			"sugar crystals" : {
				name : "Sugar Crystals",
				source : ["HB", 0], 
				description : "\n   " + "Target's speed increases by 5 feet for 10 minutes.\n   This bonus increases at certain levels: lvl 5 (10 feet), lvl 10 (15 feet), lvl 15 (20 feet), lvl 20 (25 feet)."				
			}, 
			"braised rabbit (prereq: lvl 7 cook)" : {
				name : "Braised Rabbit",
				source : ["HB", 0], 
				description : "\n   " + "Target gains the effect of the Jump spell for 1 hour.",
				prereqeval : "classes.known.cook.level >= 7"				
			}, 
			"buttered trout (prereq: lvl 7 cook)" : {
				name : "Buttered Trout",
				source : ["HB", 0], 
				description :  "\n   " + "Target gains the effect of the Water Breathing spell for 1 hour. Target also gains a swim speed equal to their movement speed for the duration.",
				prereqeval : "classes.known.cook.level >= 7"
			}, 
			"roast pheasant (prereq: lvl 7 cook)" : {
				name : "Roast Pheasant",
				source : ["HB", 0], 
				description : "\n   " + "For 10 minutes, whenever they fall, target may control their falling speed at the start of each of their turns. It cannot exceed 60 feet per round nor can it be lower than 10 feet per round. They may make use of their movement to move horizontally as normal. If they land before the effect ends, they take no falling damage.",
				prereqeval : "classes.known.cook.level >= 7"
			}, 
			"spider eggs (prereq: lvl 7 cook)" : {
				name : "Spider Eggs",
				source : ["HB", 0], 
				description : "\n   " + "Target gains the effect of the Spider Climb spell for 1 hour.",
				prereqeval : "classes.known.cook.level >= 7"
			}, 
			"thickening gruel (prereq: lvl 7 cook)" : {
				name : "Thickening Gruel",
				source : ["HB", 0], 
				description : "\n   " + "Target gains the effect of the Barkskin spell for 10 minutes.",
				prereqeval : "classes.known.cook.level >= 7"
			}, 
			"chamomile tea (prereq: lvl 11 cook)" : {
				name : "Chamomile Tea",
				source : ["HB", 0], 
				description : "\n   " + "For 1 minute, whenever the target makes a weapon attack, they must subtract 1d6 from their damage roll for that attack.",
				prereqeval : "classes.known.cook.level >= 11"
			}, 
			"shreevy leaves (prereq: lvl 11 cook)" : {
				name : "Shreevy Leaves",
				source : ["HB", 0], 
				description : "\n   " + "Target must make a Wis save. On fail, creature becomes indifferent to all other creatures for 1 minute. The indifference ends early if the target is damaged in any way. A creature who can't be charmed is immune to this effect.",
				prereqeval : "classes.known.cook.level >= 11"
			}, 
			"spectral sprouts (prereq: lvl 11 cook)" : {
				name : "Spectral Sprouts",
				source : ["HB", 0], 
				description : "\n   " + "Target gains the benefits of the See Invisibility spell for 1 minute. The target may also use an action to enter or exit the ethereal plane for the duration.",
				prereqeval : "classes.known.cook.level >= 11"
			}, 
			"startouched seeds (prereq: lvl 11 cook)" : {
				name : "Startouched Seeds",
				source : ["HB", 0], 
				description : "\n   " + "Target rolls 1d4. May recover expended spell slots that have a combined level that is equal to or less than the number rolled. If recovered slots are not used within 10 minutes, they are lost.",
				prereqeval : "classes.known.cook.level >= 11"
			}, 
			"sweet and sour beets (prereq: lvl 11 cook)" : {
				name : "Sweet and Sour Beets",
				source : ["HB", 0], 
				description : "\n   " + "For 1 minutes, add 1d6 extra damage to the first weapon attack that hits the target on each turn.",
				prereqeval : "classes.known.cook.level >= 11"
			}, 
			"boiled dragon's tail (prereq: lvl 15 cook)" : {
				name : "Boiled Dragon's Tail",
				source : ["HB", 0], 
				description : "\n   " + "Target grows scales across their body and sprout a tail made of fire. For 1 minute, the target gains +1 AC and can use an action to do one of the following:\n   Frightful Presence. The target roars. Each creature of the target's choice that is within 30' must succeed on a Wis saving throw or become Frightened of the target for 1 minute. The DC is equal to your Morsel save DC. A creature may repeat its saving throw at the end of each of its turns, ending the effect on itself on a success. If a save is successful, the creature is immune to the target's Frightful Presence for the next minute.\n   Tail Swipe: The target makes an unarmed strike with its tail. They are considered proficient with this unarmed strike. The attack deals 4d8 fire damage on a hit.",
				prereqeval : "classes.known.cook.level >= 15"
			}, 
			"hydra tongue (prereq: lvl 15 cook)" : {
				name : "Hydra Tongue",
				source : ["HB", 0], 
				description : "\n   " + "Target grows a second head that lasts for 1 minute. The head grants them the following benefits:\n \u2022 they gain 1d10 temporary hit points at the start of their turn.\n \u2022 Any limbs amputated in the last hour regenerate at the start of their turn.\n \u2022 They gain an extra reaction that can only be used for Opportunity Attacks.\n \u2022 They gain an extra action that can only be used to take the Disengage, Help, or Search action.\n   At the end of the duration, the head falls off and evaporates, leaving behind no trace.",
				prereqeval : "classes.known.cook.level >= 15"
			}, 
			"elemental pie (prereq: lvl 15 cook)" : {
				name : "Elemental Pie",
				source : ["HB", 0], 
				description : "\n   " + "For 1 minute, target gains resistance to Acid, Fire, Poison, Lightning, and Thunder damage. They also gain a flying and swimming speed equal to their current speed for the duration.",
				prereqeval : "classes.known.cook.level >= 15"
			}, 
			"frosted grapes (prereq: sous chef)" : {
				name : "Frosted Grapes",
				source : ["HB", 0], 
				description : "\n   " + "Target adds 1d4 to all damage rolls and ability checks using Dex for 1 minute. The die size increases to 1d6 at cook level 10, 1d8 at 15, and 1d10 at 20.",
				prereqeval : "classes.known.cook.level >= 3 && classes.known.cook.subclass == 'cook-sous chef'"
			}, 
			"strong ale (prereq: lvl 7 sous chef)" : {
				name : "Strong Ale",
				source : ["HB", 0], 
				description : "\n   " + "Target gains resistance to non-magical bludgeoning, piercing, and slashing damage from weapon attacks for 1 minute.",
				prereqeval : "classes.known.cook.level >= 7 && classes.known.cook.subclass == 'cook-sous chef'"
			}, 
			"honeyed fish (prereq: lvl 13 sous chef)" : {
				name : "Honeyed Fish",
				source : ["HB", 0], 
				description : "\n   " + "Target has advantage on all Int, Wis, and Cha checks for 1 minute.",
				prereqeval : "classes.known.cook.level >= 13 && classes.known.cook.subclass == 'cook-sous chef'"				
			}, 
			"pine nut mash (prereq: lvl 17 sous chef)" : {
				name : "Pine Nut Mash)",
				source : ["HB", 0], 
				description : "\n   " + "All friendly creatures within 10' of the target (including the target) have advantage on saving throws for 1 minute.",
				prereqeval : "classes.known.cook.level >= 17 && classes.known.cook.subclass == 'cook-sous chef'"
			}, 
			"stinking sprouts (prereq: mess sergeant)" : {
				name : "Stinking Sprouts",
				source : ["HB", 0], 
				description : "\n   " + "Target gains immunity to the charmed and frightened conditions for 1 minute.",
				prereqeval : "classes.known.cook.level >= 3 && classes.known.cook.subclass == 'cook-mess sergeant'"
			}, 
			"bloating beans (prereq: lvl 7 mess sergeant)" : {
				name : "Bloating Beans",
				source : ["HB", 0], 
				description : "\n   " + "Target's size doubles, and its weight is multiplied by eight for 1 minute. This growth increases its size by one category. The target also gains advantage on Str checks and Str saving throws for the duration.",
				prereqeval : "classes.known.cook.level >= 7 && classes.known.cook.subclass == 'cook-mess sergeant'"				
			}, 
			"jittering coffee (prereq: lvl 13 mess sergeant)" : {
				name : "Jittering Coffee",
				source : ["HB", 0], 
				description : "\n   " + "For 1 minute, if the target drops to 0 hit points as a result of taking damage, the target instead drops to 1 hit point and the morsel's effect ends.",
				prereqeval : "classes.known.cook.level >= 13 && classes.known.cook.subclass == 'cook-mess sergeant'"
			}, 
			"fatty oats (prereq: lvl 17 mess sergeant)" : {
				name : "Fatty Oats",
				source : ["HB", 0], 
				description : "\n   " + "The target has resistance to all damage until the start of your next turn.",
				prereqeval : "classes.known.cook.level >= 17 && classes.known.cook.subclass == 'cook-mess sergeant'"
			}, 
			"greasy slosh (prereq: hash slinger)" : {
				name : "Greasy Slosh",
				source : ["HB", 0], 
				description : "\n   " + "Target must make a Con saving throw. On fail, it takes 1d6 acid damage and is considered restrained for 1 minute. On a successful save, the target takes half damage and is not restrained. At the end of each of its turns, the target can make another Con saving throw to end the condition.",
				prereqeval : "classes.known.cook.level >= 3 && classes.known.cook.subclass == 'cook-hash slinger'"
			},
			"fire salts (prereq: lvl 7 hash slinger)" : {
				name : "Fire Salts",
				source : ["HB", 0], 
				description : "\n   " + "All creatures within 15' of the target (including the target) must make a Dex saving throw. On fail, they take 4d6 fire damage, or half as much on a success.\n   Damage increases at lvl 9 (5d6), lvl 13 (6d6), lvl 17 (7d6), and lvl 20 (8d6).",
				prereqeval : "classes.known.cook.level >= 7 && classes.known.cook.subclass == 'cook-hash slinger'"
			}, 
			"garlic tuna (prereq: lvl 13 hash slinger)" : {
				name : "Garlic Tuna",
				source : ["HB", 0], 
				description : "\n   " + "Target must make a Con save. On fail, all hostile creatures within 10' (including the target) have disadvantage on saving throws for 1 minute.",
				prereqeval : "classes.known.cook.level >= 13 && classes.known.cook.subclass == 'cook-hash slinger'"
			}, 
			"rancid onion (prereq: lvl 17 hash slinger)" : {
				name : "Rancid Onion",
				source : ["HB", 0], 
				description : "\n   " + "All hostile creatures within 30' of the target (including the target) must make a Con saving throw. On fail, they are paralyzed until the start of your next turn and blinded for 1 minute. At the end of each of its turns, a target may make another Con save: success ends the blindness.",
				prereqeval : "classes.known.cook.level >= 17 && classes.known.cook.subclass == 'cook-hash slinger'"
			},
			"underdark draught (prereq: brewmeister)" : {
				name : "Underdark Draught",
				source : ["HB", 0], 
				description : "\n   " + "10' radius magical darkness centered on target for 1 minute. All creatures friendly to the target (including the target) can see through this magical darkness.",
				prereqeval : "classes.known.cook.level >= 3 && classes.known.cook.subclass == 'cook-brewmeister'"
			},
			"vodka slushie (prereq: lvl 7 brewmeister)" : {
				name : "Vodka Slushie",
				source : ["HB", 0], 
				description : "\n   " + "20' radius difficult terrain centered on target. When created, all creatures hostile to the target within the area must make Str saves or be pushed out of the area away from the target. Lasts 1 minute or until melted by intense heat.",
				prereqeval : "classes.known.cook.level >= 7 && classes.known.cook.subclass == 'cook-brewmeister'"
			},
			"hellfire whiskey (prereq: lvl 13 brewmeister)" : {
				name : "Hellfire Whiskey",
				source : ["HB", 0], 
				description : "\n   " + "Target wreathed in yellow-green flames for 1 minute. Large or smaller creatures hostile to the target starting their turn within 10' of the target must make Con saves or suffer one level of exhaustion.",
				prereqeval : "classes.known.cook.level >= 13 && classes.known.cook.subclass == 'cook-brewmeister'"
			},
			"angel's kiss (prereq: lvl 17 brewmeister)" : {
				name : "Angel's Kiss",
				source : ["HB", 0], 
				description : "\n   " + "Target sheds bright light in 30' radius and dim light for additional 30'. Creatures hostile to the target starting their turn in the bright light must make Con saves or be blinded until the start of their next turn. Creatures with darksvision save at disadvantage.",
				prereqeval : "classes.known.cook.level >= 17 && classes.known.cook.subclass == 'cook-brewmeister'"
			}
		},
		"smelling salts" : {
			name : "Smelling Salts",
			source : ["HB", 0],
			minlevel : 1,
			description : "\n   " + "Bonus action: wave smelling salts under the nose of charmed or frightened creature that you can touch. If the creature has made a saving throw against their condition, they may repeat one save now, ending the condition on a success.\n   At 7th level, you may use this feature on a stunned creature.\n   At 13th level, you may use this feature on a paralyzed creature.",
			action : ["bonus action", ""] 
		},
		"expertise" : {
			name : "Expertise",
			source : ["HB", 0],
			minlevel : 2,
			description : "\n   " + "Expertise with two of your skill proficiencies and/or Cook's utensils and two more at 9th level."
		},
		"subclassfeature3" : {
			name : "Cook Archetype",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "Choose a Cook Archetype and put it in the \"Class\" field.\n   Choose either Sous Chef, Mess Sergeant, or Hash Slinger."
		},
		"rotund reflection" : {
			name : "Rotund Reflection",
			source : ["HB", 0],
			minlevel : 5,
			description : "\n   " + "When a Large of smaller creature within 5' hits you with a melee attack, you can use your reaction to cause the creature to make a Dex save against your Morsel save DC. On a failed save, their speed become 0 until the end of the turn, and they are either pushed 10' away from you or knocked prone (your choice).",
			action : ["reaction", ""]
		},
		"order up" : {
			name : "Order Up",
			source : ["HB", 0],
			minlevel : 7,
			description : "\n   " + "When you make morsels during a long rest, you can make a number of additional morsels equal to your Con ability modifier, none of which may have prerequisites.\n   At 11th level, you can make these additional morsels during a short rest as well as a long rest.",
			usages : "Constitution modifier per ",
			usagescalc : "event.value = Math.max(1, What('Con Mod'));",
			recovery : levels.map(function (n) {
					return n < 11 ? "long rest" : "short rest";
				}),
		},
		"iron stomach" : {
			name : "Iron Stomach",
			source : ["HB", 0],
			minlevel : 9,
			description : "\n   " + "You are immune to ingested poisons and the poisoned condition."
		},
		"soul of food" : {
			name : "Soul of Food",
			source : ["HB", 0],
			minlevel : 15,
			description : "\n   " + "You can cast Create Food and Water once with this feature and regain the ability to do so when you finish a long rest. When you do so, the food is not bland, but flavorful and enjoyable. The food also does not spoil for 1 week.\n   In addition, if you make morsels, and you have no ingredients left, you conjure the necessary ingredients as part of making the morsels.",
			usages : 1,
			recovery : "long rest"
		},
		"fulfilling meal" : {
			name : "Fulfilling Meal",
			source : ["HB", 0],
			minlevel : 17,
			description : "\n   " + "Whenever you feed a morsel to a creature that you have shared a long rest with (including yourself), you may double the duration of the morsel's effect."
		},
		"leftovers" : {
			name : "Leftovers",
			source : ["HB", 0],
			minlevel : 20,
			description : "\n   " + "When you roll initiative and have no morsels left, you conjure one morsel that you know how to prepare inside your Cook's Bag."
		}
	}
};

ClassSubList["cook-sous chef"] = {
	regExpSearch : /^(?=.*sous)(?=.*chef).*$/i,
	subname : "Sous Chef",
	source : ["HB", 0],
	features : {
		"subclassfeature3" : {
			name : "We Deliver",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "If you are within 60' of a willing creature you can see, you can reach into your Cook's Bag, pull out a morsel, and throw it into the creature's mouth as an action. They ingest it immediately.\n  Additionally, when you feed a morsel to a willing creature that you can touch (other than yourself), you may do so as a bonus action.",
			eval : "RemoveAction('action', 'Morsels - range touch'); AddAction('action', 'Morsels - range 60', 'We Deliver'); AddAction('bonus action', 'We Deliver - range touch');",
			removeeval : "RemoveAction('action', 'Morsels - range 60'); RemoveAction('bonus action', 'We Deliver - range touch'); AddAction('action', 'Morsels - range touch');"
		},
		"subclassfeature6" : {
			name : "Secret Sauce",
			source : ["HB", 0],
			minlevel : 6,
			description : "\n   " + "Whenever you feed a morsel to a friendly creature, it regains a number of hit points equal to your Constitution modifier."
		},
		"subclassfeature10" : {
			name : "Aromatic Sweat",
			source : ["HB", 0],
			minlevel : 10,
			description : "\n   " + "Once per long rest, as an action, all friendly creatures (including yourself) within 30' that you can see regain a number of hit points equal to your Cook level and can immediately use their reaction to make a single weapon attack.",
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Magnificent Meal",
			source : ["HB", 0],
			minlevel : 14,
			description : "\n   " + "Once per long rest, you can cast Heroe's Feast, replacing the material component with fine foods worth at least 500 gp which the spell consumes.",
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature18" : {
			name : "Legendary Morsel - Monkey's Brains",
			source : ["HB", 0],
			minlevel : 14,
			description : "\n   " + "You may make the legendary morsel Monkey's Brains once per long rest. It does not expire until your next long rest.\n   Monkey's Brains: within the next 10 minutes, the target may automatically succeed on one saving throw of its choosing. The target may choose to succeed after rolling the saving throw, but before the outcome is determined.",
			usages : 1,
			recovery : "long rest"
		}
	}
};

ClassSubList["cook-mess sergeant"] = {
	regExpSearch : /^(?=.*mess)(?=.*sergeant).*$/i,
	subname : "Mess Sergeant",
	source : ["HB", 0],
	features : {
		"subclassfeature3" : {
			name : "Never Satisfied",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "You can ingest a morsel as a bonus action.\n   Hit point max increases by 1 per level.",
			calcChanges : {
				hp : "extrahp += totalhd; extrastring += '\\n + ' + totalhd + ' from Never Satisfied';"
			},
			action : ["bonus action", " - ingest a morsel"]
		},
		"subclassfeature6" : {
			name : "Racaus Belch",
			source : ["HB", 0],
			minlevel : 6,
			description : "\n   " + "As an action, you may have each hostile creature in a 10' cone originating from you make a Wis save against your Morsel save DC. On fail, the target(s) have disadvantage on attack rolls against all creatures other than you until the start of your next turn.",
			usages : "event.value = Math.max(1, What('Con Mod'));",
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Sturdy Stomach",
			source : ["HB", 0],
			minlevel : 10,
			description : "\n   " + "You may be under the effects of two morsels at the same time. If you ingest a third, choose one morsel effect to lose."
		},
		"subclassfeature14" : {
			name : "Strict Diet",
			source : ["HB", 0],
			minlevel : 14,
			description : "\n   " + "Choose Str, Dex, or Con. Increase the ability score of the chosen ability by 2 (use 'level bonus' under ability scores), and the limit for that ability score becomes 22."
		},
		"subclassfeature18" : {
			name : "Legendary Morsel - Crystalline Heart",
			source : ["HB", 0],
			minlevel : 14,
			description : "\n   " + "You may make the legendary morsel Crystalline Heart once per long rest. It does not expire until your next long rest.\n   Monkey's Brains: for 1 minute, if the target's total for a Str, Dex, or Con ability check or saving throw is less than their score for the ability being checked, they may use that score in place of the total.",
			usages : 1,
			recovery : "long rest"
		}
	}
};

ClassSubList["cook-hash slinger"] = {
	regExpSearch : /^(?=.*hash)(?=.*slinger).*$/i,
	subname : "Hash Slinger",
	source : ["HB", 0],
	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "We Deliver Death",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "If you are within 60' of a hostile creature you can see, you can reach into your Cook's Bag, pull out a morsel, and throw it into the creature's mouth or analogous orifice as an action. They ingest it immediately.",
			action : ["action", " - range 60"]
		},
		"subclassfeature3.1" : {
			name : "Bonus Proficiencies",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "You gain proficiency with martial weapons.",
			weapons : [true, true]
		},
		"subclassfeature10" : {
			name : "Horrific Stench",
			source : ["HB", 0],
			minlevel : 10,
			description : "\n   " + "Whenever a hostile creature within 10' of you must make a saving throw, they subtract 1d4 from the saving throw."
		},
		"subclassfeature14" : {
			name : "Noxious Strike",
			source : ["HB", 0],
			minlevel : 14,
			description : "\n   " + "Once per rest, when a creature makes a saving throw against one of your morsel's effects, you may impose disadvantage on the roll.",
			usages : 1,
			recovery: "short rest"
		},
		"subclassfeature18" : {
			name : "Legendary Morsel - Bubbly Pill",
			source : ["HB", 0],
			minlevel : 14,
			description : "\n   " + "You may make the legendary morsel Bubbly Pill once per long rest. It does not expire until your next long rest.\n   Bubbly Pill: Target makes a Con save. On fail, they are poisoned and their speed is halved until the end of your next turn. Successful or not, if the target is killed within 1 hour, it explodes. All creatures within 10' of the target must make Dex saves. On fail, they take 10d6 force damage, and 5d6 extra force damage for each size of the target larger than Medium. On success, half damage.",
			usages : 1,
			recovery : "long rest"
		}
	}
};

ClassSubList["cook-brewmeister"] = {
	regExpSearch : /brewmeister/i,
	subname : "Brewmeister",
	source : ["HB", 0],
	features : {
		"subclassfeature3" : {
			name : "Spiked Morsels",
			source : ["HB", 0],
			minlevel : 3,
			toolProfs : ["Brewer's supplies"],
			description : "\n   " + "When you prepare a morsel, you may spike it. Effects from different spiked morsels stack. Creatures that eat more than one spiked morsel become intoxicated for one minute. Intoxicated creatures are immune to charmed and frightened conditions. When intoxication ends, all morsel effects end and the creature is 'hung over' - can't move or take actions until the end of its next turn."
		},
		"subclassfeature6" : {
			name : "Drunken Stumble",
			source : ["HB", 0],
			minlevel : 6,
			description : "\n   " + "Creatures intoxicated by you increase speed by 10' and other creatures have disadvantage on opportunity attacks against them."
		},
		"subclassfeature10" : {
			name : "Boozy Yield",
			source : ["HB", 0],
			minlevel : 10,
			description : "\n   " + "Creatures intoxicated by you are resistant to bludgeoning damage."
		},
		"subclassfeature14" : {
			name : "Angry Drunk",
			source : ["HB", 0],
			minlevel : 14,
			description : "\n   " + "Once per turn, creatures intoxicated by you may add your Con mod to a weapon attack damage roll."
		},
		"subclassfeature18" : {
			name : "Legendary Morsel - Master Brew",
			source : ["HB", 0],
			minlevel : 14,
			description : "\n   " + "You may make the legendary morsel Master Brew once per long rest. It does not expire until your next long rest.\n   Master Brew: Target becomes intoxicated for 10 minutes. When this intoxication ends, the target does not become hung over.",
			usages : 1,
			recovery : "long rest"
		}
	}
};

ClassSubList["cook-monster masher"] = {
	regExpSearch : /^(?=.*monster)(?=.*masher).*$/i,
	subname : "Monster Masher",
	source : ["HB", 0],
	features : {
		"subclassfeature3" : {
			name : "Vital Harvest",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "Harvest meat from hostile creatures of CR 1 or more killed by you or an ally. Harvesting takes 1 hour and must be done within 24 hours of kill. Meat is kept in Cook's Bag until ready to prepare. Only one harvest at a time. As part of a long rest, you can prepare a special meal from the harvest to feed up to 5 creatures. Meal provides a benefit for 8 hours after the long rest:\n \u2022 Beast. Current and max hit points increased by 10.\n \u2022 Monstrosity: Adv on Str, Dex, and Con saves vs magic.\n \u2022 Ooze: 10' blindsight.\n \u2022 Plant. While in direct sunlight adv on Str and Con checks and any dice to regain hit points count as having rolled maximum."
		},
		"subclassfeature6" : {
			name : "Autonomous Bag",
			source : ["HB", 0],
			minlevel : 6,
			description : "\n   " + "When you deal slashing damage with a melee weapon attack to a hostile creature that isn't humanoid, celestial, undead, construct, or fey, cut off a chunk of meat and place it in your Cook's Bag as part of the attack. It becomes a morsel that heals for 1d12 + your Con mod. You may only have one morsel of this type in your Cook's Bag at a time."
		},
		"subclassfeature10" : {
			name : "Emboldened Harvest",
			source : ["HB", 0],
			minlevel : 10,
			description : "\n   " + "You can harvest meat using Vital Harvest from additional creature types:\n \u2022 Aberration. Gain 60' darkvision and 60' telepathy.\n \u2022 Dragon. Gain flying speed of 60. If turn ends with you in the air, you fall.\n \u2022 Fiend. Adv on all Cha and Int ability checks and saving throws.\n \u2022 Giant. You gain benefits of the Enlarge spell."
		},
		"subclassfeature14" : {
			name : "Vital Observance",
			source : ["HB", 0],
			minlevel : 14,
			description : "\n   " + "If you observe a creature for 1 minute, you learn if it has any vulnerabilities, immunities, or resistances and what they are. You may do this Con mod (min 1) times per long rest.",
			usages : "Constitution modifier per",
			usagescalc: "event.value = Math.max(1, What('Con Mod'));",
			recovery: "long rest"
		},
		"subclassfeature18" : {
			name : "Legendary Morsel - Vital Meat",
			source : ["HB", 0],
			minlevel : 14,
			description : "\n   " + "You may make the legendary morsel Vital Meat once per long rest. It does not expire until your next long rest.\n   Vital Meat: A bite of one of your harvests. Choose one of the effects listed in your Vital Harvest or Emboldened Harvest features. Target gains the chosen effect for 1 minute.",
			usages : 1,
			recovery : "long rest"
		}
	}
};